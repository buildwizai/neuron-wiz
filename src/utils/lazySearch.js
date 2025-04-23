/**
 * Lazy-loaded search utility that dynamically imports MiniSearch
 * This reduces the initial bundle size and improves performance
 */

// Configure MiniSearch options
const searchOptions = {
  // Fields to index for searching
  fields: ['title', 'description', 'content', 'tags'],

  // Fields to return in search results
  storeFields: ['id', 'title', 'description', 'tags', 'url'],

  // Search options
  searchOptions: {
    boost: { title: 2, tags: 1.5 },
    fuzzy: 0.2,
    prefix: true
  }
};

// Store the imported MiniSearch instance to avoid reimporting
let miniSearchPromise = null;

/**
 * Create and configure a MiniSearch instance
 * @returns {Promise<MiniSearch>} Configured MiniSearch instance
 */
export const createSearchIndex = async () => {
  if (!miniSearchPromise) {
    miniSearchPromise = import('minisearch').then(module => {
      const MiniSearch = module.default;
      return new MiniSearch(searchOptions);
    });
  }
  return miniSearchPromise;
};

/**
 * Add documents to the search index
 * @param {MiniSearch} miniSearch - MiniSearch instance
 * @param {Array} documents - Array of documents to add
 */
export const addDocumentsToIndex = (miniSearch, documents) => {
  miniSearch.addAll(documents);
};

/**
 * Search the index with the given query
 * @param {MiniSearch} miniSearch - MiniSearch instance
 * @param {string} query - Search query
 * @param {Array} filterTags - Optional array of tags to filter results by
 * @returns {Array} Search results
 */
export const searchIndex = (miniSearch, query, filterTags = []) => {
  if (!query.trim() && filterTags.length === 0) {
    // Return all documents if no query and no tag filters
    return miniSearch.toJSON().docs || [];
  }

  let results = [];

  if (query.trim()) {
    // Perform text search if there's a query
    results = miniSearch.search(query);
  } else {
    // If no query but we have tag filters, start with all docs
    results = miniSearch.toJSON().docs || [];
  }

  // Apply tag filtering if specified
  if (filterTags.length > 0) {
    results = results.filter(item => {
      // For each result, check if it has ALL the selected tags
      return filterTags.every(tag => item.tags && item.tags.includes(tag));
    });
  }

  return results;
};

/**
 * Extract all unique tags from documents
 * @param {Array} documents - Array of documents
 * @returns {Array} Array of unique tags
 */
export const extractAllTags = (documents) => {
  const allTags = [];

  documents.forEach(doc => {
    if (doc.tags && Array.isArray(doc.tags)) {
      allTags.push(...doc.tags);
    }
  });

  // Remove duplicates
  return [...new Set(allTags)];
};

/**
 * Highlight search terms in text
 * @param {string} text - Original text
 * @param {string} query - Search query
 * @returns {string} HTML with highlighted terms
 */
export const highlightSearchTerms = (text, query) => {
  if (!query || !text) return text;

  // Split query into terms
  const terms = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(term => term.length > 1);

  if (!terms.length) return text;

  // Escape special regex characters
  const escapedTerms = terms.map(term =>
    term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );

  // Create regex for all terms
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi');

  // Replace matches with highlighted version
  return text.replace(regex, '<mark>$1</mark>');
};
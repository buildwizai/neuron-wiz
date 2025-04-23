/**
 * Sharded search implementation for handling large collections of mind maps
 * This strategy splits the search index into multiple shards based on tags or other criteria
 * to improve performance and reduce memory usage
 */

// Store imported MiniSearch instances to avoid reimporting
let miniSearchPromise = null;

/**
 * Import MiniSearch dynamically
 * @returns {Promise<Object>} MiniSearch class
 */
const getMiniSearch = async () => {
  if (!miniSearchPromise) {
    miniSearchPromise = import('minisearch').then(module => module.default);
  }
  return miniSearchPromise;
};

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

/**
 * ShardedSearchIndex class for managing multiple search index shards
 */
export class ShardedSearchIndex {
  constructor(shardSize = 200) {
    this.shards = [];
    this.shardSize = shardSize;
    this.allDocuments = [];
    this.initialized = false;
  }

  /**
   * Initialize the sharded search index
   * @returns {Promise<void>}
   */
  async initialize() {
    if (this.initialized) return;
    this.MiniSearch = await getMiniSearch();
    this.initialized = true;
  }

  /**
   * Add documents to the index, creating shards as needed
   * @param {Array} documents - Array of documents to add
   * @returns {Promise<void>}
   */
  async addDocuments(documents) {
    await this.initialize();

    this.allDocuments = [...this.allDocuments, ...documents];

    // Determine how many new shards we need
    const totalShards = Math.ceil(this.allDocuments.length / this.shardSize);
    const currentShards = this.shards.length;

    // Create new shards if needed
    for (let i = currentShards; i < totalShards; i++) {
      const shard = new this.MiniSearch(searchOptions);
      this.shards.push(shard);
    }

    // Reset and rebuild all shards
    this.rebuildShards();
  }

  /**
   * Rebuild all shards with the current documents
   */
  rebuildShards() {
    // Partition documents into shards
    const partitionedDocs = [];

    for (let i = 0; i < this.shards.length; i++) {
      const start = i * this.shardSize;
      const end = Math.min(start + this.shardSize, this.allDocuments.length);
      partitionedDocs.push(this.allDocuments.slice(start, end));
    }

    // Add documents to each shard
    for (let i = 0; i < this.shards.length; i++) {
      const shard = this.shards[i];
      shard.removeAll();
      shard.addAll(partitionedDocs[i]);
    }
  }

  /**
   * Calculate the size of a JavaScript object in bytes
   * @param {Object} obj - Object to measure
   * @returns {number} - Approximate size in bytes
   */
  _calculateObjectSize(obj) {
    const jsonString = JSON.stringify(obj);
    // In browsers, we can estimate size by string length * 2 (UTF-16 uses 2 bytes per character)
    return jsonString.length * 2;
  }

  /**
   * Get the total size of all search indexes in bytes
   * @returns {Promise<number>} - Total size in bytes
   */
  async getIndexSize() {
    if (!this.initialized || this.shards.length === 0) return 0;

    let totalSize = 0;
    for (const shard of this.shards) {
      const shardJson = shard.toJSON();
      const shardSize = this._calculateObjectSize(shardJson);
      totalSize += shardSize;
    }

    return totalSize;
  }

  /**
   * Get the number of shards in the index
   * @returns {number} - Number of shards
   */
  getShardCount() {
    return this.shards.length;
  }

  /**
   * Get the size of each shard in bytes
   * @returns {Array<number>} - Array of shard sizes
   */
  getShardSizes() {
    if (!this.initialized || this.shards.length === 0) return [];

    return this.shards.map(shard => {
      const shardJson = shard.toJSON();
      return this._calculateObjectSize(shardJson);
    });
  }

  /**
   * Get the search times for each shard
   * Used by the search method to store per-shard performance metrics
   * @returns {Array<number>} - Array of search times in milliseconds
   */
  getShardSearchTimes() {
    return this._lastShardSearchTimes || [];
  }

  /**
   * Search across all shards and merge results
   * @param {string} query - Search query
   * @param {Array} filterTags - Optional array of tags to filter by
   * @returns {Promise<Array>} - Merged search results
   */
  async search(query, filterTags = []) {
    await this.initialize();

    if (this.shards.length === 0) return [];

    // If no query and no tags, return all documents
    if (!query.trim() && filterTags.length === 0) {
      return [...this.allDocuments];
    }

    let combinedResults = [];

    // Special case: No query but has tag filters
    // Use the stored document collection instead of searching
    if (!query.trim() && filterTags.length > 0) {
      combinedResults = [...this.allDocuments];
    }
    else if (query.trim()) {
      // We have a search query - search each shard and track performance
      const resultsPerShard = [];
      const shardTimes = [];

      for (const shard of this.shards) {
        const startTime = performance.now();
        resultsPerShard.push(shard.search(query, searchOptions.searchOptions));
        const endTime = performance.now();
        shardTimes.push(endTime - startTime);
      }

      // Store shard search times for metrics
      this._lastShardSearchTimes = shardTimes;

      // Merge results from all shards
      resultsPerShard.forEach(shardResults => {
        combinedResults = [...combinedResults, ...shardResults];
      });

      // Sort by score when we have search results
      combinedResults.sort((a, b) => b.score - a.score);
    }

    // Apply tag filtering if specified
    if (filterTags.length > 0) {
      combinedResults = combinedResults.filter(item => {
        // Check if the item has tags property and it's an array
        if (!item.tags || !Array.isArray(item.tags)) {
          return false;
        }

        // For each result, check if it has ALL the selected tags
        return filterTags.every(tag =>
          // Case-insensitive comparison to make filtering more robust
          item.tags.some(itemTag =>
            itemTag.toLowerCase() === tag.toLowerCase()
          )
        );
      });
    }

    return combinedResults;
  }
}

/**
 * Create and configure a sharded search index
 * @param {number} shardSize - Maximum number of documents per shard
 * @returns {Promise<ShardedSearchIndex>} - Configured ShardedSearchIndex instance
 */
export const createShardedSearchIndex = async (shardSize = 200) => {
  const index = new ShardedSearchIndex(shardSize);
  await index.initialize();
  return index;
};

/**
 * Extract all unique tags from documents
 * @param {Array} documents - Array of documents
 * @returns {Array} - Array of unique tags
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
 * @returns {string} - HTML with highlighted terms
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
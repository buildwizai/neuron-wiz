import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../utils/store';

/**
 * TagCloud component displays and enables filtering by tags
 * Includes counters showing the number of mind maps for each tag
 * Highlights the most popular tags (those with the highest counts)
 */
const TagCloud = () => {
  const allTags = useStore(state => state.allTags);
  const selectedTags = useStore(state => state.selectedTags);
  const tagCounts = useStore(state => state.tagCounts);
  const toggleTag = useStore(state => state.toggleTag);

  /**
   * Determine the most popular tags based on counts
   * @type {Set<string>} Set containing the top 3 most popular tag names
   */
  const topTags = useMemo(() => {
    // If no tags or counts available, return empty set
    if (!allTags.length || !Object.keys(tagCounts).length) {
      return new Set();
    }

    // Create array of [tag, count] pairs and sort by count (descending)
    const sortedTags = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1]);

    // Get the top 3 tags (or fewer if there are less than 3 tags)
    const topTagNames = sortedTags
      .slice(0, Math.min(3, sortedTags.length))
      .map(([tag]) => tag);

    return new Set(topTagNames);
  }, [tagCounts, allTags]);

  // If no tags available, don't render component
  if (!allTags.length) return null;

  return (
    <div className="tag-cloud">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-gray-700 dark:text-gray-300 mr-2 font-medium">
          Filter by tags:
        </span>

        {/* Show clear filter button if tags are selected */}
        {selectedTags.length > 0 && (
          <button
            onClick={() => toggleTag(null, true)}
            className="px-2 py-1 text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
            aria-label="Clear all selected tags"
          >
            Clear filters
          </button>
        )}

        {/* Display all available tags with counts */}
        {allTags.map(tag => {
          const isTopTag = topTags.has(tag);

          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors flex items-center gap-1.5 ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : isTopTag
                    ? 'bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800 border border-indigo-300 dark:from-indigo-900 dark:to-purple-900 dark:text-gray-200 dark:border-indigo-700'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              } ${isTopTag ? 'font-medium' : ''}`}
              aria-pressed={selectedTags.includes(tag)}
              aria-label={`Filter by tag: ${tag} (${tagCounts[tag] || 0} mind maps)${isTopTag ? ', popular tag' : ''}`}
            >
              <span>{tag}</span>
              <span className={`inline-flex items-center justify-center rounded-full text-xs px-1.5 min-w-[1.25rem] ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : isTopTag
                    ? 'bg-indigo-300 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200'
                    : 'bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-200'
              }`}>
                {tagCounts[tag] || 0}
              </span>
              {isTopTag && (
                <span className="sr-only">(Popular tag)</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Show active filters summary if any selected */}
      {selectedTags.length > 0 && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Active filters: </span>
          {selectedTags.map((tag, index) => (
            <span key={tag}>
              {tag}{index < selectedTags.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagCloud;
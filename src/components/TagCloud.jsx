import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../utils/store';

/**
 * TagCloud component displays and enables filtering by tags
 * Includes counters showing the number of mind maps for each tag
 * Highlights the most popular tags (those with the highest counts)
 * Initially shows only top 10 tags with option to expand/collapse
 */
const TagCloud = () => {
  const allTags = useStore(state => state.allTags);
  const selectedTags = useStore(state => state.selectedTags);
  const tagCounts = useStore(state => state.tagCounts);
  const toggleTag = useStore(state => state.toggleTag);

  // State to track whether we're showing all tags or just the top 10
  const [showAllTags, setShowAllTags] = useState(false);

  /**
   * Determine the most popular tags based on counts
   * @type {Set<string>} Set containing the top 3 most popular tag names (for highlighting)
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

  /**
   * Get a sorted list of tags, optionally limited to the top N
   * @returns {string[]} Array of tag names sorted by popularity
   */
  const getSortedTags = useMemo(() => {
    if (!allTags.length || !Object.keys(tagCounts).length) {
      return [];
    }

    // Create array of [tag, count] pairs and sort by count (descending)
    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [tagCounts, allTags]);

  /**
   * The list of tags to display - either all tags or just the top 10
   */
  const displayedTags = useMemo(() => {
    if (showAllTags || getSortedTags.length <= 10) {
      return getSortedTags;
    }
    return getSortedTags.slice(0, 10);
  }, [getSortedTags, showAllTags]);

  /**
   * Toggle between showing all tags and showing just the top 10
   */
  const toggleShowAllTags = () => {
    setShowAllTags(prev => !prev);
  };

  // If no tags available, don't render component
  if (!allTags.length) return null;

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-sm p-4 border border-white/20 dark:border-gray-700/30">
      <h2 className="text-lg font-semibold mb-3">Tags</h2>
      <div className="flex flex-wrap gap-2">
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

        {/* Display tags with counts - either top 10 or all depending on state */}
        {displayedTags.map(tag => {
          const isTopTag = topTags.has(tag);

          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors flex items-center gap-1.5 ${
                selectedTags.includes(tag)
                  ? 'bg-violet-600 text-white'
                  : isTopTag
                    ? 'bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-900 border border-teal-300 dark:from-teal-900 dark:to-cyan-900 dark:text-teal-100 dark:border-teal-700'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              } ${isTopTag ? 'font-medium' : ''}`}
              aria-pressed={selectedTags.includes(tag)}
              aria-label={`Filter by tag: ${tag} (${tagCounts[tag] || 0} mind maps)${isTopTag ? ', popular tag' : ''}`}
            >
              <span>{tag}</span>
              <span className={`inline-flex items-center justify-center rounded-full text-xs px-1.5 min-w-[1.25rem] ${
                selectedTags.includes(tag)
                  ? 'bg-violet-500 text-white'
                  : isTopTag
                    ? 'bg-teal-300 text-teal-800 dark:bg-teal-700 dark:text-teal-100'
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

        {/* Show 'Show All'/'Collapse' toggle if there are more than 10 tags */}
        {allTags.length > 10 && (
          <button
            onClick={toggleShowAllTags}
            className="px-3 py-1 text-sm rounded-full transition-colors bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200 hover:bg-violet-200 dark:hover:bg-violet-800 border border-violet-300 dark:border-violet-700 font-medium ml-2"
            aria-expanded={showAllTags}
          >
            {showAllTags ? 'Show less' : `Show all (${allTags.length})`}
          </button>
        )}
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
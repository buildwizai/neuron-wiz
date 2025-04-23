import PropTypes from 'prop-types';
import { useStore } from '../utils/store';

/**
 * TagCloud component displays and enables filtering by tags
 */
const TagCloud = () => {
  const allTags = useStore(state => state.allTags);
  const selectedTags = useStore(state => state.selectedTags);
  const toggleTag = useStore(state => state.toggleTag);

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

        {/* Display all available tags */}
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            aria-pressed={selectedTags.includes(tag)}
            aria-label={`Filter by tag: ${tag}`}
          >
            {tag}
          </button>
        ))}
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
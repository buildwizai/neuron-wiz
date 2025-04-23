import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useStore } from '../utils/store';
import { useMemo } from 'react';

/**
 * MindMapCard component displays a preview of a mind map in the grid view
 *
 * @param {Object} props - Component props
 * @param {string} props.id - Mind map ID
 * @param {string} props.title - Mind map title
 * @param {string} props.description - Mind map description
 * @param {Array} props.tags - Mind map tags
 * @param {string} props.created - Mind map creation date in ISO format
 */
const MindMapCard = ({ id, title, description, tags = [], created }) => {
  const toggleTag = useStore(state => state.toggleTag);
  const selectedTags = useStore(state => state.selectedTags);
  const MAX_VISIBLE_TAGS = 3;

  /**
   * Prepare tags for display, limiting them to a maximum number and adding a "+X more" indicator if needed
   * @returns {Object} Object containing visible tags and overflow count
   */
  const tagDisplay = useMemo(() => {
    if (!tags || tags.length === 0) return { visibleTags: [], overflowCount: 0 };

    // Prioritize selected tags to be visible
    const selectedTagsInThisCard = tags.filter(tag => selectedTags.includes(tag));
    const unselectedTags = tags.filter(tag => !selectedTags.includes(tag));

    // If we have selected tags, show them first
    let visibleTags;
    if (selectedTagsInThisCard.length >= MAX_VISIBLE_TAGS) {
      visibleTags = selectedTagsInThisCard.slice(0, MAX_VISIBLE_TAGS);
    } else {
      // Fill remaining slots with unselected tags
      visibleTags = [
        ...selectedTagsInThisCard,
        ...unselectedTags.slice(0, MAX_VISIBLE_TAGS - selectedTagsInThisCard.length)
      ];
    }

    const overflowCount = Math.max(0, tags.length - visibleTags.length);

    return { visibleTags, overflowCount };
  }, [tags, selectedTags, MAX_VISIBLE_TAGS]);

  const handleTagClick = (e, tag) => {
    e.preventDefault(); // Prevent navigation
    toggleTag(tag);
  };

  /**
   * Format the ISO date string to a more readable format
   * @param {string} dateString - ISO date string
   * @returns {string} - Formatted date string
   */
  const formatDate = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <Link
      to={`/view/${id}`}
      className="mindmap-card backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col hover:translate-y-[-4px] w-full h-full border border-white/20 dark:border-gray-700/30"
      aria-label={`Open mind map: ${title || ''}`}
    >
      {/* Card header with less bright gradient background */}
      <div className="bg-gradient-to-r from-purple-900 to-gray-900 p-3 sm:p-3">
        <h2 className="text-white font-bold text-base sm:text-base line-clamp-2" title={title}>
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1 line-clamp-3 text-sm">
          {description}
        </p>

        {/* Tags - Compact Layout */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1">
            {tagDisplay.visibleTags.map(tag => (
              <button
                key={tag}
                onClick={(e) => handleTagClick(e, tag)}
                className={`text-xs px-1.5 py-0.5 rounded-full transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}

            {/* Show "+X more" indicator if we have overflow tags */}
            {tagDisplay.overflowCount > 0 && (
              <span
                className="text-xs px-1 text-gray-500 dark:text-gray-400 cursor-pointer hover:underline"
                title={tags.slice(tagDisplay.visibleTags.length).join(', ')}
              >
                +{tagDisplay.overflowCount} more
              </span>
            )}
          </div>
        )}

        {/* Card footer with date */}
        {created && (
          <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1 text-violet-500 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Created {formatDate(created)}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

MindMapCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  created: PropTypes.string,
};

export default MindMapCard;
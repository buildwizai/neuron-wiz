import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useStore } from '../utils/store';

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
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col hover:translate-y-[-4px]"
      aria-label={`Open mind map: ${title || ''}`}
    >
      {/* Card header with gradient background */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
        <h2 className="text-white font-bold text-lg line-clamp-2" title={title}>
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap mt-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={(e) => handleTagClick(e, tag)}
                className={`text-xs mr-2 mb-2 px-2 py-1 rounded-full transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Card footer with date */}
        {created && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
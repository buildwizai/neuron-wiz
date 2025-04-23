import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useStore } from '../utils/store';

/**
 * MindMapCard component displays a preview of a mind map in the grid view
 *
 * @param {Object} props - Component props
 * @param {string} props.id - Mind map ID
 * @param {string} props.description - Mind map description
 * @param {Array} props.tags - Mind map tags
 */
const MindMapCard = ({ id, description, tags = [] }) => {
  const toggleTag = useStore(state => state.toggleTag);
  const selectedTags = useStore(state => state.selectedTags);

  const handleTagClick = (e, tag) => {
    e.preventDefault(); // Prevent navigation
    toggleTag(tag);
  };

  return (
    <Link
      to={`/view/${id}`}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
      aria-label={`Open mind map`}
    >
      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
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
      </div>
    </Link>
  );
};

MindMapCard.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default MindMapCard;
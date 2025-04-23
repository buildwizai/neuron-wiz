import React from 'react';
import PropTypes from 'prop-types';

/**
 * MindMapStats component displays statistics about mind maps
 *
 * @param {Object} props - Component props
 * @param {number} props.totalCount - Total number of mind maps available
 * @param {number} props.filteredCount - Number of mind maps after applying filters/search
 * @returns {JSX.Element} Component that displays mind map statistics
 */
const MindMapStats = ({ totalCount, filteredCount }) => {
  const isFiltered = totalCount !== filteredCount;

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
        {isFiltered ? (
          <span>
            Showing <strong>{filteredCount}</strong> of <strong>{totalCount}</strong> mind maps
          </span>
        ) : (
          <span>
            Total mind maps: <strong>{totalCount}</strong>
          </span>
        )}
      </div>
    </div>
  );
};

MindMapStats.propTypes = {
  totalCount: PropTypes.number.isRequired,
  filteredCount: PropTypes.number.isRequired,
};

export default MindMapStats;
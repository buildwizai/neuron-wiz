import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress } from '@fortawesome/free-solid-svg-icons';

const ExpandCollapseControls = ({ onCollapseAll }) => (
  <div className="flex gap-1 sm:gap-2 w-full">
    <button
      onClick={onCollapseAll}
      className="px-3 py-1 w-full sm:w-auto flex items-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      aria-label="Collapse All"
      type="button"
    >
      <FontAwesomeIcon icon={faCompress} className="h-4 w-4 mr-1" />
      <span className="hidden xs:inline">Collapse All</span>
      <span className="inline xs:hidden">Collapse</span>
    </button>
  </div>
);

ExpandCollapseControls.propTypes = {
  onCollapseAll: PropTypes.func.isRequired,
};

export default ExpandCollapseControls;

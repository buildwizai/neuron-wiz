import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ mindMaps, currentMindMapId, onSelectMindMap }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`transition-all duration-200 flex flex-col h-full min-h-screen z-20
        ${collapsed ? 'w-12' : 'w-56'}
        bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm`}
    >
      <button
        className="flex items-center justify-center w-10 h-10 mt-4 mb-2 mx-auto rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        tabIndex={0}
      >
        <FontAwesomeIcon
          icon={collapsed ? faChevronRight : faChevronLeft}
          className="text-2xl text-violet-600 dark:text-violet-300 transition-transform duration-200"
        />
      </button>
      {!collapsed && (
        <div className="flex flex-col px-3 py-4">
          <h3 className="text-base font-semibold mb-3 text-gray-700 dark:text-gray-200">Mindmaps</h3>
          <ul className="flex-1 overflow-y-auto space-y-1">
            {mindMaps.map((mm) => (
              <li
                key={mm.id}
                className={`px-3 py-2 rounded cursor-pointer select-none transition-colors
                  ${mm.id === currentMindMapId
                    ? 'bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-200 font-bold'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'}
                `}
                onClick={() => onSelectMindMap(mm.id)}
                tabIndex={0}
                role="button"
                aria-pressed={mm.id === currentMindMapId}
              >
                {mm.title || mm.name || `Untitled (${mm.id})`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}

Sidebar.propTypes = {
  mindMaps: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentMindMapId: PropTypes.string,
  onSelectMindMap: PropTypes.func.isRequired,
};

export default Sidebar;

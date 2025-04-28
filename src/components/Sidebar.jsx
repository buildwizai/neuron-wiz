import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

/**
 * Sidebar component for navigation between different mind maps
 *
 * @param {Object} props - Component props
 * @param {Array} props.mindMaps - List of available mind maps
 * @param {string} props.currentMindMapId - ID of the currently selected mind map
 * @param {Function} props.onSelectMindMap - Callback when a mind map is selected
 * @returns {JSX.Element} - Sidebar component
 */
function Sidebar({ mindMaps, currentMindMapId, onSelectMindMap }) {
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and sort mindmaps based on search query
  const filteredAndSortedMindMaps = useMemo(() => {
    // First filter by search query
    const filtered = !searchQuery.trim()
      ? mindMaps
      : mindMaps.filter(mm =>
          (mm.title || mm.name || '').toLowerCase().includes(searchQuery.toLowerCase())
        );

    // Then sort alphabetically by title
    return [...filtered].sort((a, b) => {
      const titleA = (a.title || a.name || '').toLowerCase();
      const titleB = (b.title || b.name || '').toLowerCase();
      return titleA.localeCompare(titleB);
    });
  }, [mindMaps, searchQuery]);

  return (
    <aside
      className={`transition-all duration-200 flex flex-col h-full md:min-h-screen z-40 md:z-20
        ${collapsed ? 'w-12' : 'w-72'}
        bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm
        md:relative md:block md:left-0
        fixed left-0 top-0 bottom-0`}
      aria-label="Mind map navigation sidebar"
    >
      <button
        className="flex items-center justify-center w-10 h-10 mt-4 mb-2 mx-auto rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        tabIndex={0}
      >
        <FontAwesomeIcon
          icon={collapsed ? faChevronRight : faChevronLeft}
          className="text-2xl text-green-600 dark:text-green-300 transition-transform duration-200"
        />
      </button>
      {!collapsed && (
        <div className="flex flex-col px-3 py-4 h-full">
          {/* Search box */}
          <div className="relative mb-3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              placeholder="Search mindmaps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search mind maps"
            />
          </div>

          {/* Mindmap stats */}
          <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
            <p>Showing {filteredAndSortedMindMaps.length} of {mindMaps.length} mindmaps</p>
          </div>

          {/* Mindmap list with its own scrollbar */}
          <div className="flex-1 overflow-hidden">
            <ul className="h-full overflow-y-auto space-y-1 pr-1 pb-4 max-h-[calc(100vh-150px)]">
              {filteredAndSortedMindMaps.map((mm) => (
                <li
                  key={mm.id}
                  className={`px-3 py-2 rounded cursor-pointer select-none transition-colors text-xs
                    ${mm.id === currentMindMapId
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 font-bold'
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

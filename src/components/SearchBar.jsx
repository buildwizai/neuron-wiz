import { useState, useEffect, useRef } from 'react';
import { useStore } from '../utils/store';

/**
 * SearchBar component for searching mind maps
 */
const SearchBar = () => {
  const [localQuery, setLocalQuery] = useState('');
  const inputRef = useRef(null);

  const searchQuery = useStore(state => state.searchQuery);
  const setSearchQuery = useStore(state => state.setSearchQuery);

  // Update local state when store value changes
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localQuery);
  };

  // Set up keyboard shortcut (Ctrl+K or Cmd+K) to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search icon</span>
        </div>

        <input
          ref={inputRef}
          type="search"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          className="block w-full p-3 ps-10 pe-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search mind maps..."
          aria-label="Search mind maps"
        />

        <div className="absolute inset-y-0 end-0 flex items-center pe-3">
          <kbd className="hidden sm:inline-flex items-center px-2 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            {navigator.platform.indexOf('Mac') === 0 ? '⌘' : 'Ctrl'}+K
          </kbd>

          <button
            type="submit"
            className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11.707 11.707 3.586 3.586m-3.586-3.586a6 6 0 1 1 0-8.484 6 6 0 0 1 0 8.484Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
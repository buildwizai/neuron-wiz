import React from "react";
import { useStore } from '../utils/store';

/**
 * Navbar component that provides navigation and theme controls
 * @returns {JSX.Element} Navigation bar with logo and controls
 */
export default function Navbar() {
  const darkMode = useStore(state => state.darkMode);
  const toggleDarkMode = useStore(state => state.toggleDarkMode);

  return (
    <nav className="shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a
          href="/"
          className="hover:opacity-90 transition-opacity flex items-center"
          aria-label="NeuronWiz Home"
        >
          <img
            src="/images/neuronwiz-logo.svg"
            alt="NeuronWiz Logo"
            className="h-10"
            width="240"
            height="80"
          />
        </a>
        <div className="flex gap-4 items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

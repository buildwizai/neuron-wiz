import React, { useEffect } from "react";
import { useStore } from '../utils/store';

/**
 * Navbar component that provides navigation and theme controls
 * @returns {JSX.Element} Navigation bar with logo and controls
 */
export default function Navbar() {
  const darkMode = useStore(state => state.darkMode);

  // Sync darkMode with Tailwind's dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    console.log('[Navbar] darkMode:', darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
        <a
          href="/"
          className="hover:opacity-90 transition-opacity flex items-center"
          aria-label="NeuronWiz Home"
        >
          <img
            src="/images/neuronwiz-logo.svg"
            alt="NeuronWiz Logo"
            className="h-10 sm:h-15 w-auto navbar-logo"
            width="240"
            height="60"
          />
        </a>
      </div>
    </nav>
  );
}

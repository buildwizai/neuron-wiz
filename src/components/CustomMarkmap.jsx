import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Markmap } from 'markmap-view';
import { Transformer } from 'markmap-lib';
import { loadCSS } from 'markmap-common';
import { Toolbar } from 'markmap-toolbar';
import 'markmap-toolbar/dist/style.css';

/**
 * CustomMarkmap React component for rendering a mind map from markdown.
 * Uses the core markmap libraries with default styling.
 * Expands only to level 2 by default for better readability.
 *
 * @param {Object} props - Component props
 * @param {string} props.markdown - Markdown content to render
 * @param {boolean} [props.fullScreen] - Whether to render in fullscreen mode
 * @param {Function} [props.onReady] - Callback when markmap is initialized
 * @param {boolean} [props.darkMode] - Whether dark mode is enabled (not used for styling)
 * @returns {JSX.Element} - Rendered component
 */
export default function CustomMarkmap({ markdown, fullScreen = false, onReady = null }) {
  const containerRef = useRef(null);
  const toolbarRef = useRef(null);
  const markmapRef = useRef(null);
  const transformerRef = useRef(null);
  const [toolbarVisible, setToolbarVisible] = useState(true);

  // Initialize markmap instance
  useEffect(() => {
    // Initialize the transformer only once
    if (!transformerRef.current) {
      transformerRef.current = new Transformer();
    }

    // Early return if no container or markdown
    if (!containerRef.current || !markdown) return;

    let isMounted = true;

    try {
      // Create SVG element for markmap
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'w-full h-full markmap');

      // Clear container and append SVG
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      containerRef.current.appendChild(svg);

      // Transform markdown to markmap data
      const { root } = transformerRef.current.transform(markdown);

      // Get assets but handle loading manually to fix webfontloader issue
      const { styles } = transformerRef.current.getAssets();
      loadCSS(styles);

      // Create markmap instance with options
      const mm = Markmap.create(svg, {
        autoFit: false, // Disable autoFit initially to prevent issues
        initialExpandLevel: 2, // Expand only to level 2 by default for better readability
      });

      // Set data
      mm.setData(root);

      // Manually fit the content after a short delay to ensure rendering
      setTimeout(() => {
        if (isMounted && mm) {
          mm.fit(); // Fit content to viewport
        }
      }, 100);

      // Store reference to markmap instance
      markmapRef.current = mm;

      // Initialize toolbar
      if (toolbarRef.current) {
        // Clear any existing toolbar
        while (toolbarRef.current.firstChild) {
          toolbarRef.current.removeChild(toolbarRef.current.firstChild);
        }

        try {
          // Create and attach the toolbar
          const toolbar = new Toolbar();
          toolbar.attach(mm);
          const toolbarElement = toolbar.render();
          toolbarRef.current.appendChild(toolbarElement);
        } catch (toolbarError) {
          console.error('Error creating markmap toolbar:', toolbarError);
        }
      }

      // Call onReady callback if provided
      if (onReady && isMounted) {
        onReady({ svg, markmap: mm, root });
      }
    } catch (error) {
      console.error('Error creating markmap:', error);
    }

    // Cleanup function
    return () => {
      isMounted = false;
      markmapRef.current = null;

      // Clean up toolbar
      if (toolbarRef.current) {
        while (toolbarRef.current.firstChild) {
          toolbarRef.current.removeChild(toolbarRef.current.firstChild);
        }
      }
    };
  }, [markdown, onReady]);

  // Toggle toolbar visibility
  const toggleToolbar = () => {
    setToolbarVisible(!toolbarVisible);
  };

  return (
    <div className={`w-full transition-all relative ${fullScreen ? 'fixed inset-0 z-50' : 'h-[calc(100vh-12rem)]'}`}>
      {/* Toolbar toggle button */}
      <button
        type="button"
        onClick={toggleToolbar}
        className="absolute top-2 right-2 z-10 bg-gray-200 dark:bg-gray-700 p-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label={toolbarVisible ? 'Hide toolbar' : 'Show toolbar'}
        title={toolbarVisible ? 'Hide toolbar' : 'Show toolbar'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Toolbar container */}
      <div
        ref={toolbarRef}
        className={`absolute top-10 right-2 z-10 transition-opacity ${toolbarVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!toolbarVisible}
        data-testid="markmap-toolbar"
      />

      {/* Markmap container */}
      <div
        ref={containerRef}
        className="w-full h-full"
        data-testid="markmap-container"
      />
    </div>
  );
}

CustomMarkmap.propTypes = {
  markdown: PropTypes.string.isRequired,
  fullScreen: PropTypes.bool,
  onReady: PropTypes.func,
  darkMode: PropTypes.bool, // Kept for API compatibility but not used
};
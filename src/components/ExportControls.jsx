import { useState } from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';

/**
 * ExportControls component for exporting the current mind map in different formats
 *
 * @param {Object} props - Component props
 * @param {Object} props.markmapRef - Reference to the markmap instance
 * @param {string} props.title - Title of the mind map
 * @param {string} props.markdown - Original markdown content for export
 */
const ExportControls = ({ markmapRef, title, markdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Generate a sanitized filename from the title
   * @returns {string} Sanitized filename
   */
  const getSafeFileName = () => {
    return title
      ? title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')
      : 'mindmap';
  };

  /**
   * Export the mind map as SVG
   */
  const exportAsSvg = () => {
    if (!markmapRef?.current) {
      console.error('Markmap reference not found');
      return;
    }

    try {
      // Access the SVG element correctly from the markmap reference
      const svg = markmapRef.current.svg;

      if (!svg || !(svg instanceof SVGElement)) {
        console.error('SVG element not found or invalid:', svg);
        alert('Unable to export: SVG element not found or invalid.');
        return;
      }

      // Clone the SVG to avoid modifying the one on the page
      const svgClone = svg.cloneNode(true);

      // Add inline styles for correct rendering in exported SVG
      const styles = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      styles.textContent = `
        .markmap-node > circle { fill: #fff; stroke-width: 1.5px; }
        .markmap-node-text { fill: currentColor; }
        .markmap-link { fill: none; stroke-width: 1.5px; }
        .markmap-foreign { display: inline-block; }
      `;

      // Get computed styles for dark mode support
      const computedStyle = window.getComputedStyle(svg);
      const bgColor = computedStyle.backgroundColor || '#ffffff';
      const textColor = computedStyle.color || '#000000';

      // Apply styles
      svgClone.setAttribute('style', `background-color: ${bgColor}; color: ${textColor};`);
      svgClone.insertBefore(styles, svgClone.firstChild);

      // Serialize SVG to string
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgClone);

      // Create a blob from the SVG string
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      // Create download link
      const link = document.createElement('a');
      link.href = url;
      link.download = `${getSafeFileName()}.svg`;
      link.click();

      // Clean up
      setTimeout(() => URL.revokeObjectURL(url), 100);
      setIsOpen(false);
    } catch (error) {
      console.error('Error exporting SVG:', error);
      alert('Failed to export as SVG. See console for details.');
    }
  };

  /**
   * Export the mind map as PNG
   */
  const exportAsPng = () => {
    if (!markmapRef?.current) {
      console.error('Markmap reference not found');
      return;
    }

    try {
      // Access the SVG element correctly from the markmap reference
      const svg = markmapRef.current.svg;

      if (!svg || !(svg instanceof SVGElement)) {
        console.error('SVG element not found or invalid:', svg);
        alert('Unable to export: SVG element not found or invalid.');
        return;
      }

      // Clone the SVG to avoid modifying the one on the page
      const svgClone = svg.cloneNode(true);

      // Add inline styles for correct rendering in exported PNG
      const styles = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      styles.textContent = `
        .markmap-node > circle { fill: #fff; stroke-width: 1.5px; }
        .markmap-node-text { fill: currentColor; }
        .markmap-link { fill: none; stroke-width: 1.5px; }
        .markmap-foreign { display: inline-block; }
      `;

      // Get computed styles for dark mode support
      const computedStyle = window.getComputedStyle(svg);
      const bgColor = computedStyle.backgroundColor || '#ffffff';
      const textColor = computedStyle.color || '#000000';

      // Apply styles
      svgClone.setAttribute('style', `background-color: ${bgColor}; color: ${textColor};`);
      svgClone.insertBefore(styles, svgClone.firstChild);

      // Get SVG dimensions
      const bbox = svg.getBBox();
      const width = Math.max(bbox.width, 800); // Ensure minimum width
      const height = Math.max(bbox.height, 600); // Ensure minimum height

      // Set viewBox and explicit width/height in px (absolute units)
      svgClone.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${width} ${height}`);
      svgClone.setAttribute('width', `${width}px`);
      svgClone.setAttribute('height', `${height}px`);

      // Remove all <image> tags to prevent CORS/tainting issues
      const images = svgClone.querySelectorAll('image');
      images.forEach(img => img.remove());

      // Convert <foreignObject> elements to SVG <text> elements before removing
      const foreignObjects = svgClone.querySelectorAll('foreignObject');
      foreignObjects.forEach(fo => {
        // Extract text content
        let textContent = '';
        // Try to get text from the first child if it's a div/span
        if (fo.firstChild && fo.firstChild.textContent) {
          textContent = fo.firstChild.textContent;
        } else {
          textContent = fo.textContent;
        }
        // Get position
        const x = fo.getAttribute('x') || 0;
        const y = fo.getAttribute('y') || 0;
        // Try to get font size from style or attribute
        let fontSize = '16px';
        if (fo.style && fo.style.fontSize) fontSize = fo.style.fontSize;
        if (fo.getAttribute('font-size')) fontSize = fo.getAttribute('font-size');
        // Create SVG <text> element
        const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        svgText.setAttribute('x', x);
        svgText.setAttribute('y', y);
        svgText.setAttribute('font-size', fontSize);
        svgText.setAttribute('fill', 'black');
        svgText.setAttribute('font-family', 'Arial, Helvetica, sans-serif');
        svgText.textContent = textContent;
        // Insert before the foreignObject
        fo.parentNode.insertBefore(svgText, fo);
        // Remove the foreignObject
        fo.remove();
      });

      // Remove all <use> tags to prevent CORS/tainting issues
      const uses = svgClone.querySelectorAll('use');
      uses.forEach(el => el.remove());

      // Add a <style> override to force system font for all text/tspan elements
      const styleOverride = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      styleOverride.textContent = `
        text, tspan {
          font-family: Arial, Helvetica, sans-serif !important;
        }
      `;
      svgClone.insertBefore(styleOverride, svgClone.firstChild);

      // Recursively set geometry attributes to absolute units and force system font
      function fixSvgUnitsAndFonts(node, parentBBox) {
        // List of geometry attributes to check
        const geomAttrs = ['width','height','x','y','r','cx','cy','stroke-width','font-size'];
        const computedStyle = window.getComputedStyle(node);
        geomAttrs.forEach(attr => {
          let val = node.getAttribute && node.getAttribute(attr);
          // If missing, set to 0 or sensible default
          if (!val || val === '') {
            if (attr === 'width' && parentBBox) node.setAttribute('width', parentBBox.width + 'px');
            else if (attr === 'height' && parentBBox) node.setAttribute('height', parentBBox.height + 'px');
            else node.setAttribute(attr, '0px');
          } else if (typeof val === 'string' && !val.endsWith('px') && !/^\d+(\.\d+)?$/.test(val)) {
            // Try to resolve computed value in px, fallback to 0px
            const numVal = parseFloat(val);
            if (!isNaN(numVal)) {
              node.setAttribute(attr, numVal + 'px');
            } else {
              node.setAttribute(attr, '0px');
            }
          }
        });
        // Inline computed styles for geometry and font
        if (node.style) {
          if (computedStyle) {
            node.style.fontFamily = 'Arial, sans-serif';
            node.style.fontSize = computedStyle.fontSize;
            node.style.strokeWidth = computedStyle.strokeWidth;
          }
        }
        // Force system font for text
        if (node.nodeName === 'text' || node.nodeName === 'tspan') {
          node.setAttribute('font-family', 'Arial, sans-serif');
        }
        // Recursively fix children
        if (node.children) {
          Array.from(node.children).forEach(child => fixSvgUnitsAndFonts(child, node.getBBox ? node.getBBox() : parentBBox));
        }
      }

      try {
        fixSvgUnitsAndFonts(svgClone, bbox);
      } catch (e) {
        console.warn('Error while fixing SVG units:', e);
      }

      // Serialize SVG to string
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgClone);

      // Create a blob from the SVG string
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);

      // Create an image to render the SVG
      const img = new Image();

      img.onload = () => {
        // Create a canvas to draw the image
        const canvas = document.createElement('canvas');
        const scale = 2; // Higher resolution for better quality
        canvas.width = width * scale;
        canvas.height = height * scale;

        // Draw the image on the canvas
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0);

        // Convert canvas to PNG
        canvas.toBlob((blob) => {
          const pngUrl = URL.createObjectURL(blob);

          // Create download link
          const link = document.createElement('a');
          link.href = pngUrl;
          link.download = `${getSafeFileName()}.png`;
          link.click();

          // Clean up
          setTimeout(() => {
            URL.revokeObjectURL(url);
            URL.revokeObjectURL(pngUrl);
          }, 100);
        }, 'image/png');

        setIsOpen(false);
      };

      // Handle error
      img.onerror = (error) => {
        console.error('Error loading SVG as image:', error);
        alert('Failed to export as PNG. Error loading SVG as image.');
      };

      // Load the SVG as an image
      img.src = url;

    } catch (error) {
      console.error('Error exporting PNG:', error);
      alert('Failed to export as PNG. See console for details.');
    }
  };

  /**
   * Export the mind map as Markdown
   */
  const exportAsMarkdown = () => {
    try {
      // Use the markdown prop that's passed directly to this component
      if (!markdown) {
        throw new Error('Markdown content not found');
      }

      // Sanitize the markdown content to prevent XSS
      const sanitizedMarkdown = sanitizeHtml(markdown, {
        allowedTags: false, // Allow all tags for markdown
        allowedAttributes: false, // Allow all attributes
        disallowedTagsMode: 'recursiveEscape' // Escape disallowed tags
      });

      // Create a blob from the Markdown string
      const blob = new Blob([sanitizedMarkdown], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);

      // Create download link
      const link = document.createElement('a');
      link.href = url;
      link.download = `${getSafeFileName()}.md`;
      link.click();

      // Clean up
      setTimeout(() => URL.revokeObjectURL(url), 100);
      setIsOpen(false);
    } catch (error) {
      console.error('Error exporting Markdown:', error);
      alert('Failed to export as Markdown. See console for details.');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 flex items-center bg-violet-600 text-white rounded hover:bg-violet-700"
        aria-label="Export mind map"
        data-testid="export-dropdown-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Export
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 right-0 bg-white dark:bg-gray-800 rounded shadow-lg border border-gray-200 dark:border-gray-700">
          <ul className="py-1 text-sm">
            <li>
              <button
                onClick={exportAsSvg}
                className="px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                data-testid="export-svg-button"
              >
                SVG
              </button>
            </li>
            <li>
              <button
                onClick={exportAsPng}
                className="px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                data-testid="export-png-button"
              >
                PNG
              </button>
            </li>
            <li>
              <button
                onClick={exportAsMarkdown}
                className="px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                data-testid="export-markdown-button"
              >
                Markdown
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

ExportControls.propTypes = {
  markmapRef: PropTypes.shape({
    current: PropTypes.object
  }).isRequired,
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired
};

export default ExportControls;
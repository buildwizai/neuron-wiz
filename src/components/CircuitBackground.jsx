import React from 'react';
import PropTypes from 'prop-types';

/**
 * CircuitBackground component renders a decorative background pattern with
 * digital circuit effects and neural network elements.
 * Optimized with reduced pattern density (2 per row) for cleaner visuals.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.darkMode - Whether dark mode is active
 * @param {string} props.className - Additional CSS classes to apply
 * @returns {JSX.Element} - Circuit background SVG overlay
 */
const CircuitBackground = ({ darkMode, className = '' }) => {
  // Colors for light and dark mode
  const colors = {
    primary: darkMode ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.1)',   // violet-500 with opacity
    secondary: darkMode ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.1)', // purple-500 with opacity
    circuit: darkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.12)',   // circuit lines
    node: darkMode ? 'rgba(139, 92, 246, 0.25)' : 'rgba(139, 92, 246, 0.2)',      // circuit nodes
    highlight: darkMode ? 'rgba(167, 139, 250, 0.3)' : 'rgba(167, 139, 250, 0.2)' // violet-400 with opacity
  };

  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {/* Main circuit pattern SVG */}
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Circuit pattern definition - reduced to 2 per row with increased spacing */}
          <pattern id="circuit-pattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            {/* First circuit cluster - top left */}
            <g transform="translate(50, 50)">
              {/* Main circuit lines */}
              <path d="M10,80 L90,80 L90,40 L130,40 L130,100" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              <path d="M40,10 L40,60 L80,60 L80,120" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              
              {/* Circuit nodes */}
              <circle cx="90" cy="80" r="4" fill={colors.node} />
              <circle cx="130" cy="40" r="3" fill={colors.node} />
              <circle cx="40" cy="60" r="4" fill={colors.node} />
              <circle cx="80" cy="60" r="3" fill={colors.node} />
              
              {/* Neural node with connections */}
              <circle cx="60" cy="90" r="6" fill={colors.highlight} opacity="0.7" />
            </g>
            
            {/* Second circuit cluster - top right */}
            <g transform="translate(250, 50)">
              {/* Main circuit lines */}
              <path d="M20,10 L20,60 L80,60 L80,110" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              <path d="M10,40 L60,40 L60,90 L100,90" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              
              {/* Circuit nodes */}
              <circle cx="20" cy="60" r="3" fill={colors.node} />
              <circle cx="80" cy="60" r="4" fill={colors.node} />
              <circle cx="60" cy="90" r="3" fill={colors.node} />
              
              {/* Neural node with connections */}
              <circle cx="40" cy="40" r="5" fill={colors.highlight} opacity="0.6" />
            </g>
            
            {/* Third circuit cluster - bottom left */}
            <g transform="translate(50, 250)">
              {/* Main circuit lines */}
              <path d="M10,50 L70,50 L70,100 L120,100" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              <path d="M50,10 L50,70 L90,70" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              
              {/* Circuit nodes */}
              <circle cx="70" cy="50" r="3" fill={colors.node} />
              <circle cx="70" cy="100" r="4" fill={colors.node} />
              <circle cx="50" cy="70" r="3" fill={colors.node} />
              
              {/* Neural node with connections */}
              <circle cx="90" cy="70" r="7" fill={colors.highlight} opacity="0.5" />
            </g>
            
            {/* Fourth circuit cluster - bottom right */}
            <g transform="translate(250, 250)">
              {/* Main circuit lines */}
              <path d="M30,30 L80,30 L80,90 L120,90" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              <path d="M60,10 L60,60 L110,60" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              
              {/* Circuit nodes */}
              <circle cx="80" cy="30" r="4" fill={colors.node} />
              <circle cx="80" cy="90" r="3" fill={colors.node} />
              <circle cx="60" cy="60" r="3" fill={colors.node} />
              
              {/* Neural node with connections */}
              <circle cx="100" cy="75" r="6" fill={colors.highlight} opacity="0.7" />
            </g>
            
            {/* Neural connections between clusters */}
            <path d="M110,140 L250,100" stroke={colors.highlight} strokeWidth="1" opacity="0.4" />
            <path d="M140,300 L250,250" stroke={colors.highlight} strokeWidth="1" opacity="0.3" />
          </pattern>
        </defs>

        {/* Apply the pattern to the background */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />

        {/* Large subtle neural network node clusters - positioned for better spacing */}
        <g opacity="0.12">
          <circle cx="25%" cy="20%" r="120" fill={colors.primary} />
          <circle cx="75%" cy="30%" r="100" fill={colors.secondary} />
          <circle cx="65%" cy="80%" r="150" fill={colors.primary} />
          <circle cx="20%" cy="70%" r="80" fill={colors.secondary} />
        </g>

        {/* Animated pulse effect around main nodes - reduced to two for subtlety */}
        <circle cx="25%" cy="20%" r="8" fill={colors.highlight}>
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="5s" repeatCount="indefinite" />
          <animate attributeName="r" values="8;12;8" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="75%" cy="80%" r="6" fill={colors.highlight}>
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="6s" repeatCount="indefinite" />
          <animate attributeName="r" values="6;10;6" dur="6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

CircuitBackground.propTypes = {
  darkMode: PropTypes.bool,
  className: PropTypes.string
};

CircuitBackground.defaultProps = {
  darkMode: false,
  className: ''
};

export default CircuitBackground;
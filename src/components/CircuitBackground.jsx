import React from 'react';
import PropTypes from 'prop-types';

/**
 * CircuitBackground component renders a decorative background pattern with
 * digital circuit effects and neural network elements
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
          {/* Circuit pattern definition */}
          <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Main circuit lines */}
            <path d="M10,80 L90,80 L90,40 L130,40 L130,120 L190,120" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
            <path d="M10,160 L50,160 L50,20 L110,20 L110,100 L190,100" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
            <path d="M100,10 L100,70 L160,70 L160,190" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
            <path d="M180,10 L180,50 L130,50 L130,150 L60,150 L60,190" stroke={colors.circuit} strokeWidth="1.5" fill="none" />

            {/* Circuit nodes */}
            <circle cx="90" cy="80" r="4" fill={colors.node} />
            <circle cx="50" cy="160" r="3" fill={colors.node} />
            <circle cx="110" cy="20" r="3" fill={colors.node} />
            <circle cx="130" cy="40" r="4" fill={colors.node} />
            <circle cx="130" cy="120" r="3" fill={colors.node} />
            <circle cx="160" cy="70" r="3" fill={colors.node} />
            <circle cx="130" cy="50" r="4" fill={colors.node} />
            <circle cx="60" cy="150" r="3" fill={colors.node} />

            {/* Neural connections (circular nodes with links) */}
            <circle cx="40" cy="40" r="6" fill={colors.highlight} opacity="0.6" />
            <circle cx="120" cy="80" r="8" fill={colors.highlight} opacity="0.7" />
            <circle cx="70" cy="130" r="7" fill={colors.highlight} opacity="0.5" />
            <circle cx="150" cy="150" r="5" fill={colors.highlight} opacity="0.8" />

            {/* Neural connections */}
            <path d="M40,40 L120,80" stroke={colors.highlight} strokeWidth="1" opacity="0.6" />
            <path d="M120,80 L70,130" stroke={colors.highlight} strokeWidth="1" opacity="0.6" />
            <path d="M70,130 L150,150" stroke={colors.highlight} strokeWidth="1" opacity="0.6" />
          </pattern>
        </defs>

        {/* Apply the pattern to the background */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />

        {/* Large subtle neural network node clusters */}
        <g opacity="0.15">
          <circle cx="20%" cy="30%" r="120" fill={colors.primary} />
          <circle cx="85%" cy="20%" r="100" fill={colors.secondary} />
          <circle cx="70%" cy="85%" r="150" fill={colors.primary} />
          <circle cx="15%" cy="85%" r="80" fill={colors.secondary} />
        </g>

        {/* Animated pulse effect around main nodes */}
        <circle cx="20%" cy="30%" r="8" fill={colors.highlight}>
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite" />
          <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="85%" cy="20%" r="6" fill={colors.highlight}>
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="5s" repeatCount="indefinite" />
          <animate attributeName="r" values="6;10;6" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70%" cy="85%" r="7" fill={colors.highlight}>
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="6s" repeatCount="indefinite" />
          <animate attributeName="r" values="7;11;7" dur="6s" repeatCount="indefinite" />
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
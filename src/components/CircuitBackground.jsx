import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

/**
 * CircuitBackground component renders a decorative space-themed background
 * with digital circuit effects and neural network elements in a spatial depth design.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.darkMode - Whether dark mode is active
 * @param {string} props.className - Additional CSS classes to apply
 * @returns {JSX.Element} - Circuit background SVG overlay with spatial depth
 */
const CircuitBackground = ({ darkMode, className = '', mainColor }) => {
  // Colors for light and dark mode, using green as main color, using green as main color
  const colors = useMemo(() => ({
    space: darkMode
      ? 'rgba(20, 40, 20, 0.5)'
      : 'rgba(240, 253, 244, 0.7)', // green-50
    primary: darkMode
      ? 'rgba(34, 197, 94, 0.15)' // green-500
      : 'rgba(74, 222, 128, 0.12)', // green-400
    secondary: darkMode
      ? 'rgba(16, 185, 129, 0.15)' // green-600
      : 'rgba(187, 247, 208, 0.1)', // green-200
    circuit: darkMode
      ? 'rgba(74, 222, 128, 0.2)' // green-400
      : 'rgba(34, 197, 94, 0.12)', // green-500
    node: darkMode
      ? 'rgba(74, 222, 128, 0.25)'
      : 'rgba(34, 197, 94, 0.2)',
    highlight: darkMode
      ? 'rgba(16, 185, 129, 0.3)'
      : 'rgba(74, 222, 128, 0.2)',
    star: darkMode
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(34, 197, 94, 0.5)',
    starDim: darkMode
      ? 'rgba(255, 255, 255, 0.3)'
      : 'rgba(74, 222, 128, 0.2)'
  }), [darkMode, mainColor]);

  // Generate star-like points randomly positioned
  const generateStars = (count, opacity) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100; // percentage position
      const y = Math.random() * 100;
      const size = Math.random() * 0.15 + 0.05; // size between 0.05-0.2

      stars.push(
        <circle
          key={`star-${i}`}
          cx={`${x}%`}
          cy={`${y}%`}
          r={size}
          fill={Math.random() > 0.3 ? colors.star : colors.starDim}
          opacity={opacity}
        />
      );
    }
    return stars;
  };

  // Memoize stars to prevent re-rendering
  const distantStars = useMemo(() => generateStars(100, 0.6), [colors.star, colors.starDim]);
  const midgroundStars = useMemo(() => generateStars(50, 0.8), [colors.star, colors.starDim]);

  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Space background with multiple layers for depth */}
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background gradient for space effect */}
        <defs>
          <radialGradient id="spaceGradient" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stopColor={colors.space} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.space} stopOpacity="0.3" />
          </radialGradient>

          {/* Circuit pattern definition with perspective for depth */}
          <pattern id="circuit-pattern-distant" x="0" y="0" width="600" height="600" patternUnits="userSpaceOnUse">
            {/* Distant circuit grid - smaller scale for depth perspective */}
            <g transform="scale(0.7) translate(50, 50)">
              <path d="M10,80 L90,80 L90,40 L130,40 L130,100" stroke={colors.circuit} strokeWidth="0.8" fill="none" opacity="0.4" />
              <path d="M40,10 L40,60 L80,60 L80,120" stroke={colors.circuit} strokeWidth="0.8" fill="none" opacity="0.4" />
              <circle cx="60" cy="90" r="3" fill={colors.highlight} opacity="0.4" />
            </g>

            <g transform="scale(0.7) translate(350, 250)">
              <path d="M20,10 L20,60 L80,60 L80,110" stroke={colors.circuit} strokeWidth="0.8" fill="none" opacity="0.4" />
              <path d="M10,40 L60,40 L60,90 L100,90" stroke={colors.circuit} strokeWidth="0.8" fill="none" opacity="0.4" />
              <circle cx="40" cy="40" r="3" fill={colors.highlight} opacity="0.4" />
            </g>
          </pattern>

          <pattern id="circuit-pattern-mid" x="0" y="0" width="500" height="500" patternUnits="userSpaceOnUse">
            {/* Midground circuits - medium scale */}
            <g transform="translate(50, 50)">
              <path d="M10,80 L90,80 L90,40 L130,40 L130,100" stroke={colors.circuit} strokeWidth="1" fill="none" />
              <path d="M40,10 L40,60 L80,60 L80,120" stroke={colors.circuit} strokeWidth="1" fill="none" />
              <circle cx="90" cy="80" r="3" fill={colors.node} />
              <circle cx="40" cy="60" r="3" fill={colors.node} />
              <circle cx="60" cy="90" r="5" fill={colors.highlight} opacity="0.6" />
            </g>

            <g transform="translate(250, 250)">
              <path d="M30,30 L80,30 L80,90 L120,90" stroke={colors.circuit} strokeWidth="1" fill="none" />
              <path d="M60,10 L60,60 L110,60" stroke={colors.circuit} strokeWidth="1" fill="none" />
              <circle cx="80" cy="30" r="3" fill={colors.node} />
              <circle cx="80" cy="90" r="3" fill={colors.node} />
              <circle cx="100" cy="75" r="5" fill={colors.highlight} opacity="0.6" />
            </g>
          </pattern>

          <pattern id="circuit-pattern-foreground" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            {/* Foreground circuits - larger and more detailed */}
            <g transform="translate(100, 100)">
              <path d="M10,80 L90,80 L90,40 L130,40 L130,100" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              <path d="M40,10 L40,60 L80,60 L80,120" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              <circle cx="90" cy="80" r="4" fill={colors.node} />
              <circle cx="130" cy="40" r="3" fill={colors.node} />
              <circle cx="40" cy="60" r="4" fill={colors.node} />
              <circle cx="80" cy="60" r="3" fill={colors.node} />
              <circle cx="60" cy="90" r="6" fill={colors.highlight} opacity="0.7" />
            </g>

            <g transform="translate(300, 200)">
              <path d="M20,10 L20,60 L80,60 L80,110" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              <path d="M10,40 L60,40 L60,90 L100,90" stroke={colors.circuit} strokeWidth="1.5" fill="none" />
              <circle cx="20" cy="60" r="3" fill={colors.node} />
              <circle cx="80" cy="60" r="4" fill={colors.node} />
              <circle cx="60" cy="90" r="3" fill={colors.node} />
              <circle cx="40" cy="40" r="5" fill={colors.highlight} opacity="0.7" />
            </g>

            {/* Connection between nodes - creating neural network feeling */}
            <path d="M160,140 L300,200" stroke={colors.highlight} strokeWidth="1" opacity="0.5" />
          </pattern>
        </defs>

        {/* Space background */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#spaceGradient)" />

        {/* Distant stars layer */}
        <g className="distant-stars">
          {distantStars}
        </g>

        {/* Distant circuit layer */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern-distant)" opacity="0.4" />

        {/* Midground stars layer */}
        <g className="midground-stars">
          {midgroundStars}
        </g>

        {/* Midground circuit layer */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern-mid)" opacity="0.6" />

        {/* Foreground circuit layer */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern-foreground)" opacity="0.8" />

        {/* Neural clusters with depth */}
        <g opacity="0.12">
          <circle cx="25%" cy="20%" r="120" fill={colors.primary} />
          <circle cx="75%" cy="30%" r="100" fill={colors.secondary} />
          <circle cx="65%" cy="80%" r="150" fill={colors.primary} />
        </g>

        {/* Animated elements creating depth sense */}
        <circle cx="25%" cy="20%" r="8" fill={colors.highlight}>
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="5s" repeatCount="indefinite" />
          <animate attributeName="r" values="8;12;8" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="75%" cy="80%" r="6" fill={colors.highlight}>
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="6s" repeatCount="indefinite" />
          <animate attributeName="r" values="6;10;6" dur="6s" repeatCount="indefinite" />
        </circle>

        {/* Occasional pulse traveling through the network */}
        <circle r="3" fill={colors.star}>
          <animateMotion
            path="M200,200 L600,400 L1000,300"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0;0.7;0" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

CircuitBackground.propTypes = {
  darkMode: PropTypes.bool,
  className: PropTypes.string,
  mainColor: PropTypes.string
};

CircuitBackground.defaultProps = {
  darkMode: false,
  className: '',
  mainColor: 'green'
};

export default CircuitBackground;
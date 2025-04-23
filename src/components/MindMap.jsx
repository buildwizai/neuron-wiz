import PropTypes from 'prop-types';
import CustomMarkmap from './CustomMarkmap';

/**
 * MindMap component for rendering markdown content as an interactive mind map
 *
 * @param {Object} props - Component props
 * @param {string} props.markdown - Markdown content to render as mind map
 * @param {boolean} props.darkMode - Whether dark mode is enabled
 * @param {Function} props.onMarkmapReady - Callback when markmap is initialized
 */
const MindMap = ({ markdown, darkMode, onMarkmapReady }) => {
  return (
    <CustomMarkmap
      markdown={markdown}
      darkMode={darkMode}
      onReady={onMarkmapReady}
    />
  );
};

MindMap.propTypes = {
  markdown: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
  onMarkmapReady: PropTypes.func
};

MindMap.defaultProps = {
  darkMode: false,
  onMarkmapReady: null
};

export default MindMap;
import PropTypes from 'prop-types';
import CustomMarkmap from './CustomMarkmap';

/**
 * MindMap component for rendering markdown content as an interactive mind map
 *
 * @param {Object} props - Component props
 * @param {string} props.markdown - Markdown content to render as mind map
 * @param {boolean} props.fullScreen - Whether the mind map is in full-screen mode
 * @param {Function} props.onMarkmapReady - Callback when markmap is initialized
 */
const MindMap = ({ markdown, fullScreen, onMarkmapReady }) => {
  return (
    <CustomMarkmap
      markdown={markdown}
      fullScreen={fullScreen}
      onReady={onMarkmapReady}
    />
  );
};

MindMap.propTypes = {
  markdown: PropTypes.string.isRequired,
  fullScreen: PropTypes.bool,
  onMarkmapReady: PropTypes.func
};

MindMap.defaultProps = {
  fullScreen: false,
  onMarkmapReady: null
};

export default MindMap;
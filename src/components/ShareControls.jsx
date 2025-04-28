import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * ShareControls component for sharing the current mind map link
 * @param {string} url - The URL to share
 */
const ShareControls = ({ url, title, description, buttonIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Pre-craft the share message
  const shareMessage = `Check out this mind map${title ? `: ${title}` : ''} on NeuronWiz!${description ? `\n${description}` : ''}\n${url}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      alert('Failed to copy link');
    }
  };

  const shareLinks = [
    {
      name: 'Twitter/X',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`,
      icon: (
        <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.644.59-2.538.697a4.48 4.48 0 001.962-2.475 8.94 8.94 0 01-2.828 1.082A4.466 4.466 0 0015.5 4c-2.473 0-4.478 2.006-4.478 4.478 0 .351.04.693.116 1.02C7.728 9.337 4.1 7.498 1.67 4.882a4.466 4.466 0 00-.606 2.253c0 1.554.791 2.926 2.001 3.732a4.449 4.449 0 01-2.03-.561v.057c0 2.172 1.546 3.984 3.6 4.394a4.484 4.484 0 01-2.025.077c.571 1.782 2.229 3.079 4.195 3.113A8.965 8.965 0 012 19.54a12.66 12.66 0 006.84 2.007c8.208 0 12.706-6.8 12.706-12.706 0-.193-.004-.386-.013-.577A9.07 9.07 0 0024 4.59a8.89 8.89 0 01-2.54.697z" /></svg>
    )
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(shareMessage)}`,
      icon: (
        <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
      )
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(shareMessage)}`,
      icon: (
        <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.123v-3.622h3.123v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.326v-21.35c0-.733-.593-1.325-1.326-1.325z"/></svg>
      )
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 flex items-center bg-green-600 text-white rounded hover:bg-green-700"
        aria-label="Share mind map"
        data-testid="share-dropdown-button"
      >
        {buttonIcon ? buttonIcon : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8a3 3 0 00-6 0v4a3 3 0 006 0V8zm-6 8h6" />
          </svg>
        )}
        Share
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 right-0 bg-white dark:bg-gray-800 rounded shadow-lg border border-gray-200 dark:border-gray-700">
          <ul className="py-1 text-sm">
            <li>
              <button
                onClick={handleCopy}
                className="px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                data-testid="copy-link-button"
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </li>
            {shareLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  data-testid={`share-${link.name.toLowerCase()}-button`}
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

ShareControls.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonIcon: PropTypes.node,
};

export default ShareControls;

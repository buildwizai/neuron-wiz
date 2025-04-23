// Set dark mode as early as possible, before React renders
(function() {
  try {
    const stored = localStorage.getItem('darkMode');
    console.log('[main.jsx] Pre-React darkMode script. localStorage.darkMode =', stored);
    if (stored === 'true') {
      document.documentElement.classList.add('dark');
      console.log('[main.jsx] <html> classList after add:', document.documentElement.className);
    } else if (stored === 'false') {
      document.documentElement.classList.remove('dark');
      console.log('[main.jsx] <html> classList after remove:', document.documentElement.className);
    } else {
      console.log('[main.jsx] No darkMode in localStorage, not touching <html> class.');
    }
  } catch (e) {
    console.log('[main.jsx] Error in pre-React darkMode script:', e);
  }
})();

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Use HashRouter for static site deployment (GitHub Pages, etc.) and BrowserRouter for normal hosting
// HashRouter uses URL fragments (#) which works better with static hosting
const Router = import.meta.env.VITE_USE_HASH_ROUTER === 'true' ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)

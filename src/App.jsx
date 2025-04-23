import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faShareNodes, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ExpandCollapseControls from './components/ExpandCollapseControls'
import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import TagCloud from './components/TagCloud'
import { useStore } from './utils/store'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './components/Sidebar.css'

// Lazy load components to reduce initial bundle size
const MindMapCard = lazy(() => import('./components/MindMapCard'))
const MindMap = lazy(() => import('./components/MindMap'))
const ExportControls = lazy(() => import('./components/ExportControls'))
const ShareControls = lazy(() => import('./components/ShareControls'))

function App() {
  // ...
  const expandLevelRef = useRef(2); // Track current expand level, default 2
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const markmapRef = useRef(null);

  // Global state from Zustand store
  const initializeApp = useStore(state => state.initializeApp);
  const mindMaps = useStore(state => state.mindMaps);
  const filteredMindMaps = useStore(state => state.filteredMindMaps);
  const isLoading = useStore(state => state.isLoading);
  const loadingProgress = useStore(state => state.loadingProgress);
  const currentMindMap = useStore(state => state.currentMindMap);
  const setCurrentMindMapById = useStore(state => state.setCurrentMindMapById);
  const darkMode = useStore(state => state.darkMode);
  const toggleDarkMode = useStore(state => state.toggleDarkMode);
  const commitSha = import.meta.env.VITE_COMMIT_SHA || 'development';

  // Initialize app data on component mount
  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  // Update current mind map when route changes
  useEffect(() => {
    if (location.pathname.startsWith('/view/') && mindMaps.length > 0) {
      const id = location.pathname.replace('/view/', '');
      setCurrentMindMapById(id);
    }
  }, [location.pathname, mindMaps, setCurrentMindMapById]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Press D to toggle dark mode
      if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        toggleDarkMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleDarkMode]);

  // Handle markmap ready
  const handleMarkmapReady = (ref) => {
    // Accepts { svg, markmap, root }
    markmapRef.current = ref.markmap;
    markmapRef.root = ref.root;
  };

  // Apply dark mode class to document when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 dark:border-violet-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <main className="flex-1">
        <Routes>
        {/* Home page with mind map listings */}
        <Route path="/" element={
          <>
            <section className="bg-white dark:bg-gray-800 shadow pb-4">
              <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center">
              <img
            src="/images/neuronwiz-logo.svg"
            alt="NeuronWiz Logo"
            className="h-25"
            width="360"
            height="100"
          />
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Explore, visualize, and connect the world of artificial intelligence through interactive mind maps.</p>
                <div className="mb-4 w-full max-w-xl">
                  <SearchBar />
                </div>
              </div>
            </section>
            <div className="container mx-auto px-4 py-4">
              {/* Tag filtering */}
              <div className="mb-8">
                <TagCloud />
              </div>

              {/* Mind map grid */}
              {isLoading ? (
                <div className="flex flex-col justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 dark:border-violet-400 mb-4"></div>
                  <div className="w-64 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-600 transition-all duration-300"
                      style={{ width: `${loadingProgress}%` }}
                    ></div>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Loading mind maps ({loadingProgress}%)</p>
                </div>
              ) : (
                <>
                  {filteredMindMaps.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
                      {filteredMindMaps.map(mindMap => (
                        <Suspense key={mindMap.id} fallback={<LoadingFallback />}>
                          <MindMapCard
                            id={mindMap.id}
                            title={mindMap.title}
                            description={mindMap.description}
                            tags={mindMap.tags}
                            created={mindMap.created}
                          />
                        </Suspense>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h2 className="text-xl font-semibold">No mind maps found</h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Try adjusting your search or filters
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        } />

        {/* Mind map view page */}
        <Route path="/view/:id" element={
          <Suspense fallback={<LoadingFallback />}>
            <div className="flex flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
              {/* Sidebar for mindmap switching */}
              <Sidebar
                mindMaps={mindMaps}
                currentMindMapId={currentMindMap?.id}
                onSelectMindMap={id => {
                  if (id !== currentMindMap?.id) navigate(`/view/${id}`);
                }}
              />
              <div className="flex-1 flex flex-col min-h-screen">
                <header className="bg-white shadow dark:bg-gray-800">
                  <div className="container mx-auto px-2 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                      <Link to="/" aria-label="NeuronWiz Home" className="hover:opacity-90 transition-opacity">
                        <img
                          src="/images/neuronwiz-logo.svg"
                          alt="NeuronWiz Logo"
                          className="h-8 sm:h-10 w-auto navbar-logo"
                          width="40"
                          height="40"
                        />
                      </Link>
                      <h1 className="text-xl sm:text-2xl font-bold truncate">
                        {currentMindMap?.title || 'Loading...'}
                      </h1>
                    </div>
                    {/* Burger button for mobile */}
                    <div className="sm:hidden flex w-full justify-end mb-2">
                      <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none"
                      aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                      </svg>
                    </button>
                  </div>
                  {/* Mobile dropdown menu */}
                  {mobileMenuOpen && (
                    <div className="sm:hidden absolute right-2 top-20 z-50 bg-white dark:bg-gray-800 shadow-xl rounded-lg w-11/12 max-w-xs p-4 flex flex-col gap-3 animate-fade-in border border-gray-200 dark:border-gray-700">
                      {currentMindMap && (
                        <>
                          <button
                            onClick={() => {
                              setMobileMenuOpen(false);
                              // Export logic via ExportControls
                              if (markmapRef.current) markmapRef.current.export?.();
                            }}
                            className="w-full flex flex-row items-center justify-center px-4 py-3 rounded bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors text-base shadow-sm whitespace-nowrap"
                          >
                            <FontAwesomeIcon icon={faDownload} className="h-5 w-5 mr-2" /> Export
                          </button>
                          <button
                            onClick={() => {
                              setMobileMenuOpen(false);
                              // Share logic via ShareControls
                              if (navigator.share) {
                                navigator.share({
                                  title: currentMindMap.title,
                                  text: currentMindMap.description,
                                  url: window.location.href
                                });
                              } else {
                                // fallback: copy to clipboard
                                navigator.clipboard.writeText(window.location.href);
                              }
                            }}
                            className="w-full flex flex-row items-center justify-center px-4 py-3 rounded bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors text-base shadow-sm whitespace-nowrap"
                          >
                            <FontAwesomeIcon icon={faShareNodes} className="h-5 w-5 mr-2" /> Share
                          </button>
                          <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                          <button
                            onClick={() => {
                              setMobileMenuOpen(false);
                              if (markmapRef.current && markmapRef.root) {
                                expandLevelRef.current = 1;
                                markmapRef.current.setOptions({ initialExpandLevel: 1 });
                                markmapRef.current.setData(markmapRef.root);
                                markmapRef.current.fit();
                              }
                            }}
                            className="w-full flex flex-row items-center justify-center px-4 py-3 rounded bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-base shadow-sm whitespace-nowrap"
                          >
                            <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2 rotate-90" /> Collapse
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => { setMobileMenuOpen(false); navigate('/'); }}
                        className="w-full flex flex-row items-center justify-center px-4 py-3 rounded bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-base shadow-sm whitespace-nowrap"
                        aria-label="Back to Home"
                      >
                        <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" /> Back to Home
                      </button>
                    </div>
                  )}
                  {/* Desktop action buttons */}
                  <div className="hidden sm:flex flex-row flex-wrap items-stretch gap-2 md:gap-4 w-full sm:w-auto justify-end">
                    {currentMindMap && (
                      <>
                        <div className="flex-1 sm:flex-initial">
                          <ExportControls
                            markmapRef={markmapRef}
                            title={currentMindMap.title}
                            markdown={currentMindMap.content}
                            buttonIcon={
                              <FontAwesomeIcon icon={faDownload} className="h-4 w-4 mr-1" />
                            }
                          />
                        </div>
                        <div className="flex-1 sm:flex-initial">
                          <ShareControls
                            url={window.location.href}
                            title={currentMindMap.title}
                            description={currentMindMap.description}
                            buttonIcon={
                              <FontAwesomeIcon icon={faShareNodes} className="h-4 w-4 mr-1" />
                            }
                          />
                        </div>
                        <div className="flex-1 sm:flex-initial">
                          <ExpandCollapseControls
                            onCollapseAll={() => {
                              if (markmapRef.current && markmapRef.root) {
                                expandLevelRef.current = 1;
                                markmapRef.current.setOptions({ initialExpandLevel: 1 });
                                markmapRef.current.setData(markmapRef.root);
                                markmapRef.current.fit();
                              }
                            }}
                          />
                        </div>
                      </>
                    )}
                    <div className="flex-1 sm:flex-initial">
                      <button
                        onClick={() => navigate('/')}
                        className="px-3 py-1 w-full sm:w-auto flex items-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                        aria-label="Back to Home"
                      >
                        <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 mr-1" />
                        <span className="hidden xs:inline">Back to Home</span>
                        <span className="inline xs:hidden">Back</span>
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              <main className="flex-1">
                  {currentMindMap ? (
                    <div className="relative">
                      <MindMap
                        markdown={currentMindMap.content}
                        onMarkmapReady={handleMarkmapReady}
                        darkMode={darkMode}
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center h-64">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 dark:border-violet-400"></div>
                    </div>
                  )}
                </main>
              </div>
            </div>
          </Suspense>
        } />
      </Routes>
      </main>
      {!location.pathname.startsWith('/view/') && (
        <footer className="bg-gradient-to-r from-gray-100 via-violet-50 to-purple-100 dark:from-gray-900 dark:via-violet-900 dark:to-purple-900 shadow">
          <div className="container mx-auto px-2 py-4 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <p className="font-semibold">Build Wiz AI &copy; 2025</p>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-right mt-2 md:mt-0">
              <p>Open source project for interactive AI mind maps. <a href="https://github.com/buildwizai/neuron-wiz" target="_blank" rel="noopener noreferrer" className="underline hover:text-violet-500">View on GitHub</a></p>
              <p className="mt-1">Build: {commitSha.substring(0, 7)}</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;

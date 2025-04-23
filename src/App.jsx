import { useEffect, useRef, lazy, Suspense } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import TagCloud from './components/TagCloud'
import { useStore } from './utils/store'
import Navbar from './components/Navbar'

// Lazy load components to reduce initial bundle size
const MindMapCard = lazy(() => import('./components/MindMapCard'))
const MindMap = lazy(() => import('./components/MindMap'))
const ExportControls = lazy(() => import('./components/ExportControls'))

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const markmapRef = useRef(null);

  // Global state from Zustand store
  const initializeApp = useStore(state => state.initializeApp);
  const mindMaps = useStore(state => state.mindMaps);
  const filteredMindMaps = useStore(state => state.filteredMindMaps);
  const isLoading = useStore(state => state.isLoading);
  const loadingProgress = useStore(state => state.loadingProgress);
  const fullScreen = useStore(state => state.fullScreen);
  const toggleFullScreen = useStore(state => state.toggleFullScreen);
  const exitFullScreen = useStore(state => state.exitFullScreen);
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
      // Press F to toggle full-screen
      if (event.key === 'f' && currentMindMap) {
        toggleFullScreen();
      }

      // Press Escape to exit full-screen
      if (event.key === 'Escape' && fullScreen) {
        exitFullScreen();
      }

      // Press D to toggle dark mode
      if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        toggleDarkMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentMindMap, fullScreen, toggleFullScreen, exitFullScreen, toggleDarkMode]);

  // Handle markmap ready
  const handleMarkmapReady = (ref) => {
    markmapRef.current = ref;
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
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Routes>
        {/* Home page with mind map listings */}
        <Route path="/" element={
          <>
            <section className="bg-white dark:bg-gray-800 shadow pb-8">
              <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 inline-block text-transparent bg-clip-text mb-2">Neuron Wiz</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Explore, visualize, and connect the world of artificial intelligence through interactive mind maps.</p>
                <div className="mb-6 w-full max-w-xl">
                  <SearchBar />
                </div>
              </div>
            </section>
            <div className="container mx-auto px-4 py-8">
              {/* Tag filtering */}
              <div className="mb-8">
                <TagCloud />
              </div>

              {/* Mind map grid */}
              {isLoading ? (
                <div className="flex flex-col justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                  <div className="w-64 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${loadingProgress}%` }}
                    ></div>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Loading mind maps ({loadingProgress}%)</p>
                </div>
              ) : (
                <>
                  {filteredMindMaps.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <>
              <header className={`bg-white shadow dark:bg-gray-800 ${fullScreen ? 'hidden' : ''}`}>
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                  <h1 className="text-2xl font-bold truncate">
                    {currentMindMap?.title || 'Loading...'}
                  </h1>
                  <div className="flex items-center space-x-4">
                    {currentMindMap && markmapRef.current && (
                      <ExportControls
                        markmapRef={markmapRef}
                        title={currentMindMap.title}
                        markdown={currentMindMap.content}
                      />
                    )}
                    <button
                      onClick={() => navigate('/')}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </header>
              <main className="flex-1">
                {currentMindMap ? (
                  <div className="relative">
                    <MindMap
                      markdown={currentMindMap.content}
                      fullScreen={fullScreen}
                      onMarkmapReady={handleMarkmapReady}
                      darkMode={darkMode}
                    />
                    <div className={`fixed bottom-4 right-4 ${fullScreen ? 'flex' : 'hidden'}`}>
                      <button
                        onClick={exitFullScreen}
                        className="p-2 bg-gray-800 text-white rounded-full opacity-80 hover:opacity-100"
                        aria-label="Exit full screen"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className={`absolute bottom-4 right-4 ${!fullScreen ? 'block' : 'hidden'}`}>
                      <button
                        onClick={toggleFullScreen}
                        className="p-2 bg-gray-800 text-white rounded-full opacity-80 hover:opacity-100"
                        aria-label="Enter full screen"
                        title="Full Screen (F)"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  </div>
                )}
              </main>
            </>
          </Suspense>
        } />
      </Routes>
      </main>
      <footer className={`bg-gradient-to-r from-gray-100 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 shadow ${fullScreen ? 'hidden' : ''}`}>
        <div className="container mx-auto px-4 py-6 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="font-semibold">Neuron Wiz &copy; 2025</p>
            <span className="hidden md:inline-block mx-2">|</span>
            <a href="https://github.com/buildwizai/neuron-wiz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.422 2.865 8.166 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.104-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.204 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.565 4.944.359.309.679.919.679 1.853 0 1.337-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.182 22 16.442 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-right mt-2 md:mt-0">
            <p>Open source project for interactive AI mind maps. <a href="https://github.com/buildwizai/neuron-wiz" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">View on GitHub</a></p>
            <p className="mt-1">Build: {commitSha.substring(0, 7)}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

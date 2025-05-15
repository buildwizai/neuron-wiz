import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  // Check if we're building for GitHub Pages
  const isGitHubPages = mode === 'github'
  
  return {
  plugins: [react(), tailwindcss()],
  base: isGitHubPages ? '/' : './', // Use root for GitHub Pages, relative paths otherwise
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true, // Enable SPA routing support
  },
  // Code splitting and lazy loading optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  define: {
    // Make the commit SHA available to the application
    __COMMIT_SHA__: JSON.stringify(process.env.VITE_COMMIT_SHA || 'development'),
  }
  };
})

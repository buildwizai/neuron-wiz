import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Use relative paths for assets
  build: {
    outDir: 'dist',
    sourcemap: true,
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
})

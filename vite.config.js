import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,            // optional: sets dev server port
    open: true             // optional: opens browser automatically
  },
  build: {
    outDir: 'dist',        // output directory for build
    sourcemap: true        // helpful for debugging production builds
  },
  test: {
    globals: true,         // enable global test APIs (like Jest)
    environment: 'jsdom',  // needed for React DOM testing
    setupFiles: './src/setupTests.js' // ✅ runs before all tests
  },
  resolve: {
    alias: {
      '@': '/src'          // optional: allows imports like "@/components/Button"
    }
  }
})
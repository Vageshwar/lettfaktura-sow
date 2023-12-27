import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es5', // Set the target to ES5 for broader compatibility
    polyfillDynamicImport: false, // Disable dynamic import polyfill
  },
})

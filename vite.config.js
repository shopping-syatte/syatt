import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  alias: {
    '@': './src'
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://api.tosspayments.com/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

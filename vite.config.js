import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        replace: {
          'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY)
        }
      }
    }
  }
})

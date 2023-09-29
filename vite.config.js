import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    host: '0.0.0.0', // This allows access from external IP addresses
    port: 5173,      // Change this to your desired port
  },
  plugins: [react()],
})

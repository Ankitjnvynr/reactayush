import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Makes the server accessible on the local network
    port: 3000  // Optional: customize the port if needed
  }
})

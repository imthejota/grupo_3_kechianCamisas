import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { //! defino el puerto donde quiero correr mi app
    port: 3000,
  }
})

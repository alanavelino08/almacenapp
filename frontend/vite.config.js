import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/static/dist/',  // Cambiado para coincidir con STATIC_URL de Django
  base: '/',
  build: {
    outDir: '../backend/frontend/static/dist/',  // Correcto para integración con Django
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://10.52.5.67:8081',  // Tu backend Django
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

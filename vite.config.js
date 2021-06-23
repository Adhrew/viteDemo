import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  mode: 'production',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    https: false,
    open: false,
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://beelive-uat.marbleio.tech/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [ vue() ]
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const port = process.env.port || process.env.npm_config_port || 8888; // dev port
export default defineConfig({
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    https: false,
    open: false,
    port: port,
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

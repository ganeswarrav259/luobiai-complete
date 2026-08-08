import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/luobiai-complete/' : '/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 4317,
    allowedHosts: ['.trycloudflare.com'],
  },
}))

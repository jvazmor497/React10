import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import process from 'process'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/React10/' : '',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
})

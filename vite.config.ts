import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~antd/es/style': path.resolve(__dirname, 'src/theme/style'),
      '@/': path.resolve(__dirname, 'src') + '/',
    },
  },
})

// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 企业级必须配置：路径别名 @ = src 目录
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
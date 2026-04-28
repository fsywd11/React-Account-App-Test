// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // 打包后自动打开报告页
      gzipSize: true,
      brotliSize: true
    })
  ],
  // 👇 企业级必须配置：路径别名 @ = src 目录
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
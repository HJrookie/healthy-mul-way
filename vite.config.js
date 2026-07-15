import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 使用相对路径打包：既能在 Netlify 根域名部署，
// 也能以 file:// 或子路径直接打开 dist/index.html 预览。
export default defineConfig({
  base: './',
  plugins: [vue()]
})

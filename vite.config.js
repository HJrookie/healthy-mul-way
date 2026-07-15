import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 基路径设为根：部署在 Netlify 根域名（https://healthy.24992345.xyz/）。
// 配合 history 模式 + SSG（vite-ssg build），每个 /zh、/en、/zh/article/<id>
// 都会生成独立静态 HTML，自带真实 title/meta，百度与 Google 可直接收录。
export default defineConfig({
  base: '/',
  plugins: [vue()],
  server: {
    port: 3070
  },
  ssgOptions: {
    script: 'async',
    // 只为真实存在的 24 条内容路由预渲染（排除 / 重定向与 catch-all）
    includedRoutes(paths) {
      return paths.filter((p) => /^\/(zh|en)(\/|$)/.test(p))
    }
  }
})

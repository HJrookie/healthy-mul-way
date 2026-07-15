import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './styles/main.css'
import { routes } from './routes.js'
import { ui } from './store.js'
import { setRouter } from './router-instance.js'

// 滚动进入视口时优雅淡入：在元素上写 v-reveal 即可
const reveal = {
  mounted(el) {
    el.classList.add('reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-visible')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
  }
}

// vite-ssg 要求导出 createApp（而不是原来的 createApp(App).mount('#app')）。
// 第二个参数是 router 配置，第三个回调在客户端/服务端初始化时执行。
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: '/',
    // history 模式下的滚动行为：带 #hash 时平滑滚动到锚点，否则回顶部
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) return { el: to.hash, behavior: 'smooth' }
      if (savedPosition) return savedPosition
      return { top: 0 }
    }
  },
  ({ app, router }) => {
    setRouter(router)
    app.directive('reveal', reveal)
    // 语言跟随 URL：渲染前把路由携带的 lang 写入 ui.lang，
    // 保证 SSG 预渲染的 /zh 与 /en 页面语言正确。
    router.beforeEach((to) => {
      if (to.meta && to.meta.lang) ui.lang = to.meta.lang
    })
  }
)

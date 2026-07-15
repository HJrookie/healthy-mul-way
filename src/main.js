import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import { ui, openArticle, closeArticle, articleIdFromHash } from './store.js'

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

// 深链接：以 #/article/<id> 打开时直接呈现文章（用于新标签页打开）
function syncReadingFromHash() {
  const id = articleIdFromHash()
  if (id) {
    openArticle(id)
  } else if (ui.reading) {
    // 空 hash 时退出阅读视图（用户手动清空地址栏 hash）
    closeArticle()
  }
}
if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', syncReadingFromHash)
  syncReadingFromHash()
}

createApp(App).directive('reveal', reveal).mount('#app')

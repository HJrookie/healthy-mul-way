import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

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

createApp(App).directive('reveal', reveal).mount('#app')

import { reactive } from 'vue'

/**
 * 全局轻量状态：语言切换与文章阅读视图。
 * 使用 reactive 单例，Options API 组件中通过 computed 引用 ui.lang 即可。
 */
export const ui = reactive({
  lang: 'zh', // 'zh' | 'en'
  reading: null // 当前正在阅读的文章 id，null 表示停留在首页
})

export function setLang(lang) {
  if (lang === 'zh' || lang === 'en') ui.lang = lang
}

export function toggleLang() {
  ui.lang = ui.lang === 'zh' ? 'en' : 'zh'
}

export function openArticle(id) {
  ui.reading = id
  // 进入阅读视图时回到页面顶部，保证沉浸式体验
  if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function closeArticle() {
  ui.reading = null
}

/** 取双语字段：字段为 { zh, en } 时返回当前语言的值 */
export function pick(field) {
  if (field && typeof field === 'object' && 'zh' in field && 'en' in field) {
    return field[ui.lang]
  }
  return field
}

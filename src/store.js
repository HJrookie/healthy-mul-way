import { reactive } from 'vue'
import { getRouter } from './router-instance.js'

/**
 * 全局轻量状态：语言、暗色主题、本地收藏。
 * 文章阅读视图改由 vue-router 路由驱动（/zh/article/:id），
 * 不再使用 ui.reading。组件通过 computed 引用 ui.lang 等即可。
 */

const THEME_KEY = 'pureeat:theme'
const BOOKMARK_KEY = 'pureeat:bookmarks'

function initialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem(THEME_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  const prefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function initialBookmarks() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(BOOKMARK_KEY)
    const arr = raw ? JSON.parse(raw) : []
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

export const ui = reactive({
  lang: 'zh', // 'zh' | 'en'，由 URL 路由同步
  theme: initialTheme(), // 'light' | 'dark'
  bookmarks: initialBookmarks() // 收藏的文章 id 列表
})

// 主题应用到 <html data-theme>，并持久化
function applyTheme(theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
  }
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(THEME_KEY, theme)
  }
  // 同步主题色，避免移动端地址栏突兀
  if (typeof document !== 'undefined') {
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0e0f12' : '#F5F5F7')
  }
}
applyTheme(ui.theme)

function persistBookmarks() {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(BOOKMARK_KEY, JSON.stringify(ui.bookmarks))
  }
}

// —— 语言：写进 URL ——
export function setLang(lang) {
  if (lang !== 'zh' && lang !== 'en') return
  ui.lang = lang
  const router = getRouter()
  if (typeof window !== 'undefined' && router) {
    const cur = router.currentRoute.value
    const id = cur.meta && cur.meta.articleId
    // 保持当前页面类型，只切换语言前缀
    router.push(id ? `/${lang}/article/${id}` : `/${lang}`)
  }
}

export function toggleLang() {
  setLang(ui.lang === 'zh' ? 'en' : 'zh')
}

export function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') return
  ui.theme = theme
  applyTheme(theme)
}

export function toggleTheme() {
  setTheme(ui.theme === 'dark' ? 'light' : 'dark')
}

export function isBookmarked(id) {
  return ui.bookmarks.includes(id)
}

export function toggleBookmark(id) {
  if (!id) return
  const i = ui.bookmarks.indexOf(id)
  if (i === -1) ui.bookmarks.push(id)
  else ui.bookmarks.splice(i, 1)
  persistBookmarks()
}

// —— 文章：路由驱动 ——
export function openArticle(id, { newTab = false } = {}) {
  const lang = ui.lang
  if (typeof window !== 'undefined' && newTab) {
    // 新标签页打开真实路径（不再是 hash）
    const url = `${window.location.origin}/${lang}/article/${id}`
    window.open(url, '_blank', 'noopener,noreferrer')
    return
  }
  const router = getRouter()
  if (router) router.push(`/${lang}/article/${id}`)
}

export function closeArticle() {
  const router = getRouter()
  if (router) router.push(`/${ui.lang}`)
}

/** 取双语字段：字段为 { zh, en } 时返回当前语言的值 */
export function pick(field) {
  if (field && typeof field === 'object' && 'zh' in field && 'en' in field) {
    return field[ui.lang]
  }
  return field
}

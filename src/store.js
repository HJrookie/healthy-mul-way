import { reactive } from 'vue'

/**
 * 全局轻量状态：语言切换、文章阅读视图、暗色主题、本地收藏。
 * 使用 reactive 单例，Options API 组件中通过 computed 引用 ui.lang 等即可。
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
  lang: 'zh', // 'zh' | 'en'
  reading: null, // 当前正在阅读的文章 id，null 表示停留在首页
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

export function setLang(lang) {
  if (lang === 'zh' || lang === 'en') ui.lang = lang
}

export function toggleLang() {
  ui.lang = ui.lang === 'zh' ? 'en' : 'zh'
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

export function openArticle(id, { newTab = false } = {}) {
  if (typeof window !== 'undefined' && newTab) {
    // 以 URL hash 形式在新标签页打开对应文章（#/article/<id>）
    const url = `${window.location.origin}${window.location.pathname}#/article/${id}`
    window.open(url, '_blank', 'noopener,noreferrer')
    return
  }
  ui.reading = id
  // 进入阅读视图时回到页面顶部，保证沉浸式体验
  if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
}

/** 解析 location.hash，返回其中携带的文章 id（如 #/article/diet） */
export function articleIdFromHash() {
  if (typeof window === 'undefined') return null
  const m = window.location.hash.match(/^#\/article\/([\w-]+)/)
  return m ? m[1] : null
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

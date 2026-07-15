import { articles } from './data/articles.js'
import HomeView from './views/HomeView.vue'
import ArticleView from './views/ArticleView.vue'

// 为指定语言生成「文章详情」路由：/zh/article/<id> 与 /en/article/<id>
function articleRoutes(lang) {
  return articles.map((a) => ({
    path: `/${lang}/article/${a.id}`,
    name: `${lang}-article-${a.id}`,
    component: ArticleView,
    props: { lang, id: a.id },
    meta: { lang, articleId: a.id }
  }))
}

// 语言写进 URL：/zh、/en 是首页；/zh/article/:id、/en/article/:id 是文章页。
// SSG 会为下面每一条「真实内容路由」预渲染独立 HTML。
export const routes = [
  { path: '/', redirect: '/zh' },
  { path: '/zh', name: 'zh-home', component: HomeView, meta: { lang: 'zh' } },
  { path: '/en', name: 'en-home', component: HomeView, meta: { lang: 'en' } },
  ...articleRoutes('zh'),
  ...articleRoutes('en'),
  // 兜底：未知路径回到首页（生产环境由 Netlify _redirects 同样兜底）
  { path: '/:pathMatch(.*)*', redirect: '/zh' }
]

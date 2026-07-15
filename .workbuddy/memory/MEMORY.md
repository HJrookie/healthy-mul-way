# PureEat / 净食 项目长期记忆

Vue 3 + Vite 8 + Options API 健康科普站（中英文双语）。技术栈：vue-router@4、@unhead/vue、**vite-ssg** 预渲染、Netlify 部署。

## 关键约定 / 坑（重要）
- **@unhead/vue 必须锁 `^2`，不能用 v3**：`vite-ssg` 把 `@unhead/vue@^2` 作为自身依赖内置。若顶层装 v3 会出现双版本、head 注入键不兼容 → `useHead` 完全不生效（页面回落到默认 title/meta）。排包命令：`npm i -D @unhead/vue@^2.1.2`。
- **正确 SSG 包是 `vite-ssg`**（antfu），不是 `vite-plugin-ssg`（那个是 React 专用）。构建命令 `vite-ssg build`。
- **文章路由用字面量路径 + meta 传 id**：`/zh/article/${id}` 作为静态路由，`id` 经 `route.meta.articleId` 传给视图组件；不要用 `:id` 动态段（会导致 `route.params.id` 为 undefined）。
- **`base: '/'`**（history 模式要求绝对基路径，不能是 `'./'`）。vite-ssg 输出扁平 `.html`，用 `scripts/fix-dist-paths.mjs` 转成目录式 `index.html` 以兼容各静态主机。
- **部署**：用户自己管 Netlify（https://healthy.24992345.xyz），**绝不主动公开部署**；只本地 `npm run build` + present_files 预览（见 ~/.workbuddy/MEMORY.md 的「不公开部署」约束）。

## 路由结构
`/` → `/zh`；`/zh`、`/en`（首页）；`/zh/article/:id`、`/en/article/:id`（11 篇×2 语言 = 22 篇）+ 2 首页 = 24 个预渲染页。语言从 URL 前缀判定，`store.setLang` 切语言时同步 push 对应前缀路由。

## 目录要点
- `src/router-instance.js`：用 `setRouter/getRouter` 中转 router 实例，打破 store ↔ router 循环依赖。
- `src/views/HomeView.vue` / `src/views/ArticleView.vue`：分别用 `useHead`（computed）注入首页 / 文章页 SEO。
- `scripts/gen-sitemap.mjs`：生成 `public/sitemap.xml`（无 #、带 hreflang）。`scripts/fix-dist-paths.mjs`：扁平→目录式。
- `src/store.js`：`ui = { lang, theme, bookmarks }`；导航/打开文章全部走 `router.push`。

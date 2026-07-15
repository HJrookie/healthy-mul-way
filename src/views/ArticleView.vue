<template>
  <ArticleReader v-if="article" :article="article" />
  <div v-else class="article-missing">文章不存在 · Article not found</div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { getArticle } from '../data/articles.js'
import ArticleReader from '../components/ArticleReader.vue'

const SITE = 'https://healthy.24992345.xyz'

export default {
  name: 'ArticleView',
  components: { ArticleReader },
  setup() {
    const route = useRoute()
    // 每篇文章独立的 title / meta / OG / JSON-LD，构建时即写入静态 HTML。
    // 文章 id 与语言来自路由 meta（routes.js 中已为每条文章路由写好），
    // 避免依赖 :id 动态段。
    useHead(computed(() => {
      const lang = route.meta.lang || (route.path.startsWith('/en') ? 'en' : 'zh')
      const a = getArticle(route.meta.articleId)
      if (!a) return { title: 'PureEat 净食' }

      const title = `${a.title[lang]} · PureEat 净食`
      const url = `${SITE}/${lang}/article/${a.id}`
      const ogImage = `${SITE}/og-default.svg`
      const jsonld = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: a.title[lang],
        description: a.excerpt[lang],
        author: { '@type': 'Organization', name: a.author[lang] },
        datePublished: a.date,
        inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
        mainEntityOfPage: url,
        image: ogImage,
        publisher: { '@type': 'Organization', name: 'PureEat 净食' }
      }

      return {
        title,
        htmlAttrs: { lang: lang === 'zh' ? 'zh-CN' : 'en' },
        meta: [
          { name: 'description', content: a.excerpt[lang] },
          { property: 'og:type', content: 'article' },
          { property: 'og:title', content: title },
          { property: 'og:description', content: a.excerpt[lang] },
          { property: 'og:url', content: url },
          { property: 'og:site_name', content: 'PureEat 净食' },
          { property: 'og:locale', content: lang === 'zh' ? 'zh_CN' : 'en_US' },
          { property: 'og:image', content: ogImage },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: a.excerpt[lang] },
          { name: 'twitter:image', content: ogImage }
        ],
        script: [
          { type: 'application/ld+json', id: 'jsonld', innerHTML: JSON.stringify(jsonld) }
        ]
      }
    }))
  },
  computed: {
    article() {
      return getArticle(this.$route.meta.articleId)
    }
  }
}
</script>

<style scoped>
.article-missing {
  max-width: 640px;
  margin: 140px auto;
  text-align: center;
  color: var(--muted);
  font-size: 18px;
}
</style>

<template>
  <article class="reader">
    <!-- 阅读进度条 -->
    <div class="reader__progress" :style="{ width: progress + '%' }"></div>

    <div class="reader__bar">
      <button class="reader__back" @click="closeArticle">
        <Icon name="arrowLeft" :size="18" />
        {{ t.article.back }}
      </button>
      <div class="reader__bar-right">
        <button
          class="reader__bm"
          :class="{ 'is-on': isBookmarked(article.id) }"
          @click="toggleBookmark(article.id)"
          :aria-label="isBookmarked(article.id) ? t.bookmark.remove : t.bookmark.save"
        >
          <Icon name="bookmark" :size="17" :color="isBookmarked(article.id) ? '#fff' : 'currentColor'" />
          <span>{{ isBookmarked(article.id) ? t.bookmark.saved : t.bookmark.save }}</span>
        </button>
        <span class="reader__cat">{{ b(article.category) }}</span>
      </div>
    </div>

    <header class="reader__hero" :style="coverStyle">
      <div class="reader__hero-inner">
        <p class="reader__cat-pill">{{ b(article.category) }}</p>
        <h1 class="reader__title">{{ b(article.title) }}</h1>
        <p class="reader__excerpt">{{ b(article.excerpt) }}</p>
        <div class="reader__meta">
          <span><Icon name="book" :size="15" /> {{ article.author[ui.lang] }}</span>
          <span class="dot">·</span>
          <span>{{ article.date }}</span>
          <span class="dot">·</span>
          <span>{{ article.readingTime }} {{ t.article.readingTime }}</span>
        </div>
      </div>
    </header>

    <div class="reader__body">
      <template v-for="(block, i) in blocks" :key="i">
        <p v-if="block.type === 'lead'" class="blk blk--lead">{{ block.text }}</p>
        <h2 v-else-if="block.type === 'h2'" class="blk blk--h2">{{ block.text }}</h2>
        <p v-else-if="block.type === 'p'" class="blk blk--p">{{ block.text }}</p>
        <blockquote v-else-if="block.type === 'quote'" class="blk blk--quote">
          {{ block.text }}
          <cite v-if="block.cite">{{ block.cite }}</cite>
        </blockquote>
        <ul v-else-if="block.type === 'list'" class="blk blk--list">
          <li v-for="(it, j) in block.items" :key="j">
            <Icon name="check" :size="17" color="var(--accent)" />
            <span>{{ b(it) }}</span>
          </li>
        </ul>
        <div v-else-if="block.type === 'callout'" class="blk blk--callout">
          <span class="blk--callout__icon"><Icon name="sparkles" :size="18" color="#1f8a45" /></span>
          <div class="blk--callout__content">
            <p class="blk--callout__title">{{ b(block.title) }}</p>
            <p class="blk--callout__text">{{ b(block.text) }}</p>
          </div>
        </div>
        <div v-else-if="block.type === 'stats'" class="blk blk--stats">
          <div
            v-for="(s, k) in block.items"
            :key="k"
            class="stat"
            :class="'stat--' + (k % 3)"
          >
            <span class="stat__value">{{ s.value }}</span>
            <span class="stat__label">{{ b(s.label) }}</span>
          </div>
        </div>
      </template>

      <footer class="reader__foot">
        <div class="reader__foot-card">
          <Icon name="leaf" :size="20" color="#fff" />
          <p>{{ t.footer.tagline }}</p>
        </div>

        <!-- 相关阅读：内容闭环 -->
        <div class="reader__related" v-if="related.length">
          <h3 class="reader__related-title">{{ t.article.related }}</h3>
          <div class="reader__related-grid">
            <a
              v-for="a in related"
              :key="a.id"
              class="rel"
              :style="{ '--cover': coverGradient(a.cover) }"
              :href="'/' + (ui.lang || 'zh') + '/article/' + a.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="rel__cover"><span class="rel__cat">{{ b(a.category) }}</span></span>
              <span class="rel__title">{{ b(a.title) }}</span>
              <span class="rel__go">
                {{ t.article.readArticle }}
                <Icon name="external" :size="14" color="#1d6838" />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  </article>
</template>

<script>
import {
  ui,
  closeArticle,
  openArticle,
  isBookmarked,
  toggleBookmark
} from '../store.js'
import { i18n } from '../data/i18n.js'
import { articles } from '../data/articles.js'
import { articleTopics } from '../data/topics.js'
import { coverGradient } from '../data/covers.js'
import Icon from './Icon.vue'

// 注意：本组件的 SEO（title / meta / OG / JSON-LD）已由外层 ArticleView 通过
// @unhead/vue 的 useHead 在「构建时」注入到静态 HTML，这里不再做 JS 注入。

export default {
  name: 'ArticleReader',
  components: { Icon },
  props: {
    article: { type: Object, required: true }
  },
  data() {
    return {
      ui,
      coverGradient,
      articles,
      articleTopics,
      isBookmarked,
      toggleBookmark,
      progress: 0
    }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    },
    blocks() {
      return this.article.content[this.ui.lang] || []
    },
    coverStyle() {
      return { background: coverGradient(this.article.cover) }
    },
    // 按主题推荐 3 篇相关文章，形成内容闭环
    related() {
      const mine = this.articleTopics[this.article.id] || []
      const scored = this.articles
        .filter((a) => a.id !== this.article.id)
        .map((a) => {
          const theirs = this.articleTopics[a.id] || []
          const shared = mine.filter((m) => theirs.includes(m)).length
          return { a, shared }
        })
      const withTopic = scored.filter((s) => s.shared > 0).sort((x, y) => y.shared - x.shared)
      const fill = scored.filter((s) => s.shared === 0)
      return [...withTopic, ...fill].slice(0, 3).map((s) => s.a)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.onScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    closeArticle,
    openArticle,
    open(id) {
      openArticle(id)
    },
    b(field) {
      return field ? field[this.ui.lang] : ''
    },
    onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight
      this.progress = h > 0 ? Math.min(100, Math.max(0, (window.scrollY / h) * 100)) : 0
    }
  }
}
</script>

<style scoped>
.reader {
  min-height: 100vh;
  background: var(--bg);
}
.reader__progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0;
  z-index: 60;
  background: linear-gradient(90deg, #34c759, #30b0c7);
  transition: width 0.1s linear;
}
.reader__bar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  background: var(--nav-bg);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--gborder);
}
.reader__bar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.reader__back {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 4px;
}
.reader__back:hover {
  opacity: 0.7;
}
.reader__bm {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--gborder);
  background: var(--chip);
  color: var(--muted);
  font-family: inherit;
  font-size: 13.5px;
  font-weight: 600;
  padding: 7px 13px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.22s ease;
}
.reader__bm:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.reader__bm.is-on {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
.reader__cat {
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.4px;
}
.reader__hero {
  color: #fff;
  padding: clamp(60px, 12vw, 120px) 24px clamp(48px, 8vw, 90px);
  text-align: center;
}
.reader__hero-inner {
  max-width: 760px;
  margin: 0 auto;
}
.reader__cat-pill {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.6px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0 0 22px;
}
.reader__title {
  font-size: clamp(30px, 5.5vw, 56px);
  line-height: 1.12;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
}
.reader__excerpt {
  font-size: clamp(16px, 2.4vw, 21px);
  line-height: 1.6;
  opacity: 0.92;
  max-width: 640px;
  margin: 0 auto 26px;
  font-weight: 400;
}
.reader__meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 14px;
  opacity: 0.85;
}
.reader__meta span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.reader__meta .dot {
  opacity: 0.6;
}
.reader__body {
  max-width: 720px;
  margin: 0 auto;
  padding: 56px 24px 100px;
}
.blk {
  margin: 0 0 24px;
}
.blk--lead {
  font-size: clamp(19px, 2.6vw, 23px);
  line-height: 1.7;
  color: var(--text-3);
  font-weight: 500;
  font-family: 'Noto Serif SC', Georgia, 'Songti SC', serif;
}
.blk--h2 {
  font-size: clamp(22px, 3.4vw, 30px);
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--text);
  margin: 44px 0 18px;
}
.blk--p {
  font-size: 17.5px;
  line-height: 1.85;
  color: var(--text-2);
  font-family: 'Noto Serif SC', Georgia, 'Songti SC', serif;
}
.blk--quote {
  margin: 36px 0;
  padding: 6px 0 6px 26px;
  border-left: 4px solid var(--accent);
  font-size: clamp(20px, 3vw, 26px);
  line-height: 1.5;
  font-weight: 600;
  color: var(--text);
  font-family: 'Noto Serif SC', Georgia, 'Songti SC', serif;
}
.blk--quote cite {
  display: block;
  margin-top: 12px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  color: var(--muted);
}
.blk--list {
  list-style: none;
  margin: 0 0 28px;
  padding: 0;
  display: grid;
  gap: 14px;
}
.blk--list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 17px;
  line-height: 1.6;
  color: var(--text-2);
  background: var(--glass-3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--gborder);
  border-radius: 14px;
  padding: 14px 16px;
}
.blk--list li span {
  padding-top: 1px;
}
.blk--callout {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.12), rgba(48, 176, 199, 0.1));
  border: 1px solid rgba(52, 199, 89, 0.22);
  border-left: 4px solid var(--accent);
  border-radius: 18px;
  padding: 20px 22px;
  margin: 32px 0;
}
.blk--callout__icon {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.75);
}
.blk--callout__content {
  flex: 1;
  min-width: 0;
}
.blk--callout__title {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 700;
  color: #1f8a45;
  letter-spacing: 0.3px;
}
.blk--callout__text {
  margin: 0;
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-4);
}
.blk--stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 34px 0;
}
.stat {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  padding: 22px 14px 18px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}
.stat::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}
.stat--0 {
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.14), rgba(52, 199, 89, 0.04));
}
.stat--0::before {
  background: #34c759;
}
.stat--0 .stat__value {
  color: #1f8a45;
}
.stat--1 {
  background: linear-gradient(135deg, rgba(48, 176, 199, 0.14), rgba(48, 176, 199, 0.04));
}
.stat--1::before {
  background: #30b0c7;
}
.stat--1 .stat__value {
  color: #1f8aa8;
}
.stat--2 {
  background: linear-gradient(135deg, rgba(232, 149, 90, 0.16), rgba(232, 149, 90, 0.05));
}
.stat--2::before {
  background: #e8955a;
}
.stat--2 .stat__value {
  color: #b5671f;
}
.stat__value {
  display: block;
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 800;
  letter-spacing: -0.02em;
}
.stat__label {
  display: block;
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted);
}
.reader__foot {
  margin-top: 50px;
}
.reader__foot-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(135deg, #34c759, #30b0c7);
  color: #fff;
  border-radius: 20px;
  padding: 22px 26px;
  box-shadow: 0 16px 40px rgba(52, 199, 89, 0.26);
}
.reader__foot-card p {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.5;
}
.reader__related {
  margin-top: 48px;
}
.reader__related-title {
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.01em;
  margin: 0 0 18px;
}
.reader__related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.rel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  text-align: left;
  cursor: pointer;
  border: none;
  border-radius: 16px;
  padding: 16px;
  color: #fff;
  background: var(--cover);
  font-family: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.rel:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
}
.rel__cover {
  display: flex;
  width: 100%;
}
.rel__cat {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.32);
}
.rel__title {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
  flex: 1;
}
.rel__go {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 600;
  background: #fff;
  color: #1d6838;
  padding: 6px 12px;
  border-radius: 999px;
}
@media (max-width: 560px) {
  .blk--stats {
    grid-template-columns: 1fr;
  }
  .reader__related-grid {
    grid-template-columns: 1fr;
  }
  .blk--p,
  .blk--lead {
    font-size: 16.5px;
  }
}
</style>

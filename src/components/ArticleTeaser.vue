<template>
  <section class="teaser" id="article">
    <div class="teaser__inner">
      <header class="teaser__head" v-reveal>
        <p class="eyebrow">{{ t.article.eyebrow }}</p>
        <h2 class="section-title">{{ t.article.title }}</h2>
      </header>

      <!-- 全站搜索框 -->
      <div class="search" v-reveal>
        <span class="search__icon"><Icon name="search" :size="18" /></span>
        <input
          class="search__input"
          type="search"
          :placeholder="t.search.placeholder"
          v-model="query"
          aria-label="search"
        />
        <button
          v-if="query"
          class="search__clear"
          @click="query = ''"
          :aria-label="t.search.clear"
        >
          <Icon name="x" :size="16" />
        </button>
      </div>

      <!-- 主题筛选栏 -->
      <div class="topicbar" v-reveal>
        <button
          v-for="tp in topics"
          :key="tp.key"
          class="topicbar__chip"
          :class="{ 'is-active': activeTopic === tp.key }"
          @click="activeTopic = tp.key"
        >
          {{ tp.label[ui.lang] }}
        </button>
        <button
          class="topicbar__chip topicbar__chip--bm"
          :class="{ 'is-active': activeTopic === 'bookmarks' }"
          @click="activeTopic = 'bookmarks'"
        >
          <Icon name="bookmark" :size="15" />
          {{ t.bookmark.myList }}
          <span class="topicbar__count" v-if="ui.bookmarks.length">{{ ui.bookmarks.length }}</span>
        </button>
      </div>

      <!-- 编辑精选：首篇文章大卡（仅「全部」且无搜索时展示） -->
      <a
        v-if="showFeature"
        class="feature"
        :style="{ background: coverGradient(articles[0].cover) }"
        :href="featureLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          class="feature__bm"
          :class="{ 'is-on': isBookmarked(articles[0].id) }"
          @click.prevent.stop="toggleBookmark(articles[0].id)"
          :aria-label="isBookmarked(articles[0].id) ? t.bookmark.remove : t.bookmark.save"
        >
          <Icon name="bookmark" :size="18" :color="isBookmarked(articles[0].id) ? '#fff' : '#fff'" />
        </button>
        <div class="feature__overlay">
          <div class="feature__top">
            <span class="feature__icon"><Icon :name="featureIcon" :size="20" color="#fff" /></span>
            <p class="feature__cat">{{ b(articles[0].category) }}</p>
          </div>
          <h3 class="feature__title">{{ b(articles[0].title) }}</h3>
          <p class="feature__excerpt">{{ b(articles[0].excerpt) }}</p>
          <div class="feature__foot">
            <span>{{ articles[0].author[ui.lang] }}</span>
            <span class="dot">·</span>
            <span>{{ articles[0].readingTime }} {{ t.article.readingTime }}</span>
            <span class="feature__read">
              {{ t.article.readArticle }}
              <Icon name="external" :size="16" color="#fff" />
            </span>
          </div>
        </div>
      </a>

      <!-- 文章列表 -->
      <div class="teaser__list-head" v-reveal>
        <h3 class="teaser__list-title">{{ listTitle }}</h3>
        <span class="teaser__count">{{ listCount }} {{ t.search.results }}</span>
      </div>

      <div v-if="visibleArticles.length === 0" class="teaser__empty" v-reveal>
        <Icon name="search" :size="30" />
        <p>{{ t.search.empty }}</p>
      </div>

      <div v-else class="teaser__grid" :class="{ 'grid--in': inView }" ref="grid">
        <ArticleCard
          v-for="item in visibleArticles"
          :key="item.id"
          :article="item"
          class="teaser__cell"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ui, isBookmarked, toggleBookmark } from '../store.js'
import { i18n } from '../data/i18n.js'
import { articles } from '../data/articles.js'
import { coverGradient } from '../data/covers.js'
import { topics, articleTopics, iconForArticle } from '../data/topics.js'
import Icon from './Icon.vue'
import ArticleCard from './ArticleCard.vue'

export default {
  name: 'ArticleTeaser',
  components: { Icon, ArticleCard },
  data() {
    return {
      ui,
      articles,
      topics,
      activeTopic: 'all',
      inView: false,
      iconForArticle,
      isBookmarked,
      toggleBookmark,
      query: ''
    }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    },
    restArticles() {
      return this.articles.slice(1)
    },
    featureLink() {
      const lang = (this.$route && this.$route.path) ? (this.$route.path.startsWith('/en') ? 'en' : 'zh') : this.ui.lang
      return '/' + lang + '/article/' + this.articles[0].id
    },
    featureIcon() {
      return this.iconForArticle(this.articles[0].id)
    },
    // 仅在「全部」标签下、且无搜索词时展示编辑精选大卡
    showFeature() {
      return this.activeTopic === 'all' && !this.query.trim()
    },
    // 当前应展示的文章列表：主题筛选 + 关键词搜索 + 收藏筛选
    visibleArticles() {
      const q = this.query.trim().toLowerCase()
      let list
      if (this.activeTopic === 'bookmarks') {
        list = this.articles.filter((a) => this.isBookmarked(a.id))
      } else if (this.activeTopic === 'all') {
        list = this.restArticles
      } else {
        list = this.articles.filter((a) => (articleTopics[a.id] || []).includes(this.activeTopic))
      }
      if (q) list = list.filter((a) => this.plainText(a).includes(q))
      return list
    },
    listTitle() {
      if (this.activeTopic === 'bookmarks') return this.t.bookmark.myList
      if (this.query.trim()) return this.t.search.title
      if (this.activeTopic === 'all') return this.t.article.related
      const tp = this.topics.find((x) => x.key === this.activeTopic)
      return tp ? tp.label[this.ui.lang] : this.t.article.related
    },
    listCount() {
      return this.visibleArticles.length
    }
  },
  mounted() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            this.inView = true
            io.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    if (this.$refs.grid) io.observe(this.$refs.grid)
  },
  methods: {
    coverGradient,
    b(field) {
      return field ? field[this.ui.lang] : ''
    },
    // 拼接标题 / 摘要 / 正文，生成可搜索的纯文本（按当前语言）
    plainText(article) {
      const lang = this.ui.lang
      const parts = [article.title[lang] || '', article.excerpt[lang] || '']
      const blocks = article.content[lang] || []
      blocks.forEach((blk) => {
        if (blk.text) parts.push(blk.text)
        if (blk.title) parts.push(this.b(blk.title))
        if (blk.items) blk.items.forEach((it) => parts.push(this.b(it)))
        if (blk.label) parts.push(this.b(blk.label))
      })
      return parts.join(' ').toLowerCase()
    }
  }
}
</script>

<style scoped>
.teaser {
  padding: 40px 24px 100px;
}
.teaser__inner {
  max-width: 1120px;
  margin: 0 auto;
}
.teaser__head {
  text-align: center;
  margin-bottom: 36px;
}
.eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 12px;
}
.section-title {
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0;
  line-height: 1.15;
}

/* 搜索框 */
.search {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 560px;
  margin: 0 auto 26px;
  background: var(--glass);
  border: 1px solid var(--gborder);
  border-radius: 999px;
  padding: 4px 6px 4px 16px;
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.search:focus-within {
  border-color: var(--accent);
  box-shadow: 0 8px 22px rgba(52, 199, 89, 0.16);
}
.search__icon {
  display: grid;
  place-items: center;
  color: var(--muted);
  margin-right: 8px;
}
.search__input {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 15px;
  color: var(--text);
  padding: 11px 4px;
  outline: none;
}
.search__input::placeholder {
  color: var(--muted);
}
.search__clear {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 999px;
  background: var(--hairline-2);
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s ease;
}
.search__clear:hover {
  color: var(--text);
  background: var(--gborder);
}

.feature {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  min-height: 320px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
  margin-bottom: 40px;
  text-decoration: none;
}
.feature:hover {
  transform: translateY(-4px) scale(1.005);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
}
.feature__bm {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.28);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: all 0.22s ease;
}
.feature__bm:hover {
  transform: scale(1.08);
  background: rgba(0, 0, 0, 0.42);
}
.feature__bm.is-on {
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 6px 14px rgba(52, 199, 89, 0.4);
}
.feature__overlay {
  width: 100%;
  padding: 40px;
  color: #fff;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0) 70%);
  text-decoration: none;
}
.feature__overlay * {
  text-decoration: none;
}
.feature__top {
  display: flex;
  align-items: center;
  gap: 11px;
  margin: 0 0 16px;
}
.feature__icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
}
.feature__cat {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.6px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0;
}
.feature__title {
  font-size: clamp(24px, 4vw, 40px);
  line-height: 1.18;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  max-width: 720px;
}
.feature__excerpt {
  font-size: clamp(15px, 2vw, 18px);
  line-height: 1.6;
  opacity: 0.92;
  max-width: 640px;
  margin: 0 0 22px;
}
.feature__foot {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  flex-wrap: wrap;
}
.feature__foot .dot {
  opacity: 0.6;
}
.feature__read {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  color: #1d1d1f;
  font-weight: 600;
  padding: 9px 16px;
  border-radius: 999px;
}
.teaser__list-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--hairline);
}
.teaser__list-title {
  margin: 0;
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.01em;
}
.teaser__count {
  font-size: 14px;
  color: var(--muted);
}
.teaser__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.teaser__cell {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.grid--in .teaser__cell {
  opacity: 1;
  transform: none;
}
.grid--in .teaser__cell:nth-child(1) { transition-delay: 0ms; }
.grid--in .teaser__cell:nth-child(2) { transition-delay: 70ms; }
.grid--in .teaser__cell:nth-child(3) { transition-delay: 140ms; }
.grid--in .teaser__cell:nth-child(4) { transition-delay: 210ms; }
.grid--in .teaser__cell:nth-child(5) { transition-delay: 280ms; }
.grid--in .teaser__cell:nth-child(6) { transition-delay: 350ms; }
.grid--in .teaser__cell:nth-child(7) { transition-delay: 420ms; }
.grid--in .teaser__cell:nth-child(8) { transition-delay: 490ms; }
.grid--in .teaser__cell:nth-child(9) { transition-delay: 560ms; }
.grid--in .teaser__cell:nth-child(10) { transition-delay: 630ms; }

.teaser__empty {
  text-align: center;
  padding: 60px 20px;
  color: var(--muted);
}
.teaser__empty svg {
  opacity: 0.5;
  margin-bottom: 12px;
}
.teaser__empty p {
  margin: 0;
  font-size: 15px;
}

@media (max-width: 680px) {
  .teaser__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .feature__overlay {
    padding: 26px;
  }
  .feature__read {
    margin-left: 0;
  }
}

/* 主题筛选栏 */
.topicbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0 0 36px;
}
.topicbar__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  color: var(--muted);
  background: var(--chip);
  border: 1px solid var(--gborder);
  border-radius: 999px;
  padding: 9px 18px;
  cursor: pointer;
  transition: all 0.22s ease;
}
.topicbar__chip:hover {
  color: var(--accent);
  border-color: rgba(52, 199, 89, 0.4);
  transform: translateY(-1px);
}
.topicbar__chip.is-active {
  color: #fff;
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 8px 18px rgba(52, 199, 89, 0.28);
}
.topicbar__chip--bm.is-active {
  background: var(--accent);
}
.topicbar__count {
  display: inline-grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  font-size: 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.25);
}
</style>

<template>
  <article class="reader">
    <div class="reader__bar">
      <button class="reader__back" @click="closeArticle">
        <Icon name="arrowLeft" :size="18" />
        {{ t.article.back }}
      </button>
      <span class="reader__cat">{{ b(article.category) }}</span>
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
          <p class="blk--callout__title">{{ block.title }}</p>
          <p class="blk--callout__text">{{ block.text }}</p>
        </div>
        <div v-else-if="block.type === 'stats'" class="blk blk--stats">
          <div v-for="(s, k) in block.items" :key="k" class="stat">
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
      </footer>
    </div>
  </article>
</template>

<script>
import { ui, closeArticle } from '../store.js'
import { i18n } from '../data/i18n.js'
import Icon from './Icon.vue'

export default {
  name: 'ArticleReader',
  components: { Icon },
  props: {
    article: { type: Object, required: true }
  },
  data() {
    return { ui }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    },
    blocks() {
      return this.article.content[this.ui.lang] || []
    },
    coverStyle() {
      const map = {
        mediterranean: 'linear-gradient(135deg, #2f9e57 0%, #34c759 45%, #30b0c7 100%)'
      }
      return { background: map[this.article.cover] || map.mediterranean }
    }
  },
  methods: {
    closeArticle,
    b(field) {
      return field ? field[this.ui.lang] : ''
    }
  }
}
</script>

<style scoped>
.reader {
  min-height: 100vh;
  background: var(--bg);
}
.reader__bar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  background: rgba(245, 245, 247, 0.72);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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
  color: #2b2b2e;
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
  color: #333337;
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
  color: #333337;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 14px;
  padding: 14px 16px;
}
.blk--list li span {
  padding-top: 1px;
}
.blk--callout {
  background: rgba(52, 199, 89, 0.1);
  border: 1px solid rgba(52, 199, 89, 0.22);
  border-radius: 18px;
  padding: 22px 24px;
  margin: 32px 0;
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
  color: #2b2b2e;
}
.blk--stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 34px 0;
}
.stat {
  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 20px 14px;
  text-align: center;
}
.stat__value {
  display: block;
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 800;
  color: var(--accent);
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
@media (max-width: 560px) {
  .blk--stats {
    grid-template-columns: 1fr;
  }
  .blk--p,
  .blk--lead {
    font-size: 16.5px;
  }
}
</style>

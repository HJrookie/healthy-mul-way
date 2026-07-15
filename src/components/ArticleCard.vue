<template>
  <a
    class="acard"
    :href="articleLink"
    target="_blank"
    rel="noopener noreferrer"
    :style="{ '--cover': coverGradient(article.cover) }"
  >
    <button
      class="acard__bm"
      :class="{ 'is-on': isBookmarked(article.id) }"
      @click.prevent.stop="toggleBookmark(article.id)"
      :aria-label="isBookmarked(article.id) ? t.bookmark.remove : t.bookmark.save"
      :title="isBookmarked(article.id) ? t.bookmark.remove : t.bookmark.save"
    >
      <Icon name="bookmark" :size="18" :color="isBookmarked(article.id) ? '#fff' : 'currentColor'" />
    </button>
    <div class="acard__cover">
      <span class="acard__icon"><Icon :name="icon" :size="20" color="#fff" /></span>
      <span class="acard__cat">{{ b(article.category) }}</span>
    </div>
    <div class="acard__body">
      <h3 class="acard__title">{{ b(article.title) }}</h3>
      <p class="acard__excerpt">{{ b(article.excerpt) }}</p>
      <div class="acard__meta">
        <span>{{ article.readingTime }} {{ t.article.readingTime }}</span>
        <span class="acard__read">
          {{ t.article.readArticle }}
          <Icon name="external" :size="14" />
        </span>
      </div>
    </div>
  </a>
</template>

<script>
import { ui, toggleBookmark, isBookmarked } from '../store.js'
import { i18n } from '../data/i18n.js'
import { coverGradient } from '../data/covers.js'
import { iconForArticle } from '../data/topics.js'
import Icon from './Icon.vue'

export default {
  name: 'ArticleCard',
  components: { Icon },
  props: {
    article: { type: Object, required: true }
  },
  data() {
    return { ui, coverGradient, iconForArticle, toggleBookmark, isBookmarked }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    },
    articleLink() {
      const lang = (this.$route && this.$route.path) ? (this.$route.path.startsWith('/en') ? 'en' : 'zh') : this.ui.lang
      return '/' + lang + '/article/' + this.article.id
    },
    icon() {
      return this.iconForArticle(this.article.id)
    }
  },
  methods: {
    b(field) {
      return field ? field[this.ui.lang] : ''
    }
  }
}
</script>

<style scoped>
.acard {
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  background: var(--glass);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid var(--gborder);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;
}
.acard__bm {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 3;
  width: 36px;
  height: 36px;
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
.acard__bm:hover {
  transform: scale(1.08);
  background: rgba(0, 0, 0, 0.42);
}
.acard__bm.is-on {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  box-shadow: 0 6px 14px rgba(52, 199, 89, 0.4);
}
.acard:hover {
  transform: translateY(-6px) scale(1.015);
  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.12);
}
.acard__cover {
  height: 116px;
  background: var(--cover);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
}
.acard__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}
.acard__cat {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 5px 11px;
  border-radius: 999px;
}
.acard__body {
  padding: 18px 18px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.acard__title {
  margin: 0 0 10px;
  font-size: 17.5px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--text);
}
.acard__excerpt {
  margin: 0 0 16px;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--muted);
  flex: 1;
}
.acard__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: var(--muted);
}
.acard__read {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--accent);
  font-weight: 600;
}
</style>

<template>
  <a
    class="acard"
    :href="'#article'"
    @click.prevent="open"
    :style="{ '--cover': coverGradient(article.cover) }"
  >
    <div class="acard__cover">
      <span class="acard__cat">{{ b(article.category) }}</span>
    </div>
    <div class="acard__body">
      <h3 class="acard__title">{{ b(article.title) }}</h3>
      <p class="acard__excerpt">{{ b(article.excerpt) }}</p>
      <div class="acard__meta">
        <span>{{ article.readingTime }} {{ t.article.readingTime }}</span>
        <span class="acard__read">
          {{ t.card.readMore }}
          <Icon name="arrowRight" :size="14" />
        </span>
      </div>
    </div>
  </a>
</template>

<script>
import { ui, openArticle } from '../store.js'
import { i18n } from '../data/i18n.js'
import { coverGradient } from '../data/covers.js'
import Icon from './Icon.vue'

export default {
  name: 'ArticleCard',
  components: { Icon },
  props: {
    article: { type: Object, required: true }
  },
  data() {
    return { ui, coverGradient }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    }
  },
  methods: {
    openArticle,
    open() {
      openArticle(this.article.id)
    },
    b(field) {
      return field ? field[this.ui.lang] : ''
    }
  }
}
</script>

<style scoped>
.acard {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;
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
  padding: 14px 16px;
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

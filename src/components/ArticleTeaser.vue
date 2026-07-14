<template>
  <section class="teaser" id="article">
    <div class="teaser__inner">
      <header class="teaser__head" v-reveal>
        <p class="eyebrow">{{ t.article.eyebrow }}</p>
        <h2 class="section-title">{{ t.article.title }}</h2>
      </header>

      <article
        class="feature"
        :style="coverStyle"
        @click="openArticle(articles[0].id)"
      >
        <div class="feature__overlay">
          <p class="feature__cat">{{ b(articles[0].category) }}</p>
          <h3 class="feature__title">{{ b(articles[0].title) }}</h3>
          <p class="feature__excerpt">{{ b(articles[0].excerpt) }}</p>
          <div class="feature__foot">
            <span>{{ articles[0].author[ui.lang] }}</span>
            <span class="dot">·</span>
            <span>{{ articles[0].readingTime }} {{ t.article.readingTime }}</span>
            <span class="feature__read">
              {{ t.hero.ctaSecondary }}
              <Icon name="arrowRight" :size="16" color="#fff" />
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { ui, openArticle } from '../store.js'
import { i18n } from '../data/i18n.js'
import { articles } from '../data/articles.js'
import Icon from './Icon.vue'

export default {
  name: 'ArticleTeaser',
  components: { Icon },
  data() {
    return { ui, articles }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    },
    coverStyle() {
      const map = {
        mediterranean: 'linear-gradient(135deg, #2f9e57 0%, #34c759 45%, #30b0c7 100%)'
      }
      return { background: map[articles[0].cover] || map.mediterranean }
    }
  },
  methods: {
    openArticle,
    b(field) {
      return field ? field[this.ui.lang] : ''
    }
  }
}
</script>

<style scoped>
.teaser {
  padding: 40px 24px 80px;
}
.teaser__inner {
  max-width: 1120px;
  margin: 0 auto;
}
.teaser__head {
  text-align: center;
  margin-bottom: 40px;
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
.feature {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  min-height: 360px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  box-shadow: 0 24px 60px rgba(47, 158, 87, 0.22);
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
}
.feature:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 34px 80px rgba(47, 158, 87, 0.3);
}
.feature__overlay {
  width: 100%;
  padding: 40px;
  color: #fff;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0) 70%);
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
  margin: 0 0 16px;
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
@media (max-width: 560px) {
  .feature__overlay {
    padding: 26px;
  }
  .feature__read {
    margin-left: 0;
  }
}
</style>

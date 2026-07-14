<template>
  <section class="teaser" id="article">
    <div class="teaser__inner">
      <header class="teaser__head" v-reveal>
        <p class="eyebrow">{{ t.article.eyebrow }}</p>
        <h2 class="section-title">{{ t.article.title }}</h2>
      </header>

      <!-- 编辑精选：首篇文章大卡 -->
      <article
        class="feature"
        :style="{ background: coverGradient(articles[0].cover) }"
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

      <!-- 全部文章 -->
      <div class="teaser__list-head" v-reveal>
        <h3 class="teaser__list-title">{{ t.article.related }}</h3>
        <span class="teaser__count">{{ articles.length }} {{ t.article.relatedCount }}</span>
      </div>

      <div class="teaser__grid" :class="{ 'grid--in': inView }" ref="grid">
        <ArticleCard
          v-for="item in restArticles"
          :key="item.id"
          :article="item"
          class="teaser__cell"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ui, openArticle } from '../store.js'
import { i18n } from '../data/i18n.js'
import { articles } from '../data/articles.js'
import { coverGradient } from '../data/covers.js'
import Icon from './Icon.vue'
import ArticleCard from './ArticleCard.vue'

export default {
  name: 'ArticleTeaser',
  components: { Icon, ArticleCard },
  data() {
    return { ui, articles, inView: false }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    },
    restArticles() {
      return this.articles.slice(1)
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
    openArticle,
    b(field) {
      return field ? field[this.ui.lang] : ''
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
  min-height: 340px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  box-shadow: 0 24px 60px rgba(47, 158, 87, 0.22);
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
  margin-bottom: 46px;
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
.teaser__list-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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

@media (max-width: 980px) {
  .teaser__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .teaser__grid {
    grid-template-columns: 1fr;
  }
  .feature__overlay {
    padding: 26px;
  }
  .feature__read {
    margin-left: 0;
  }
}
</style>

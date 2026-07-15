<template>
  <section class="series" id="series">
    <div class="series__inner">
      <header class="series__head" v-reveal>
        <p class="eyebrow">{{ t.series.eyebrow }}</p>
        <h2 class="section-title">{{ t.series.title }}</h2>
        <p class="section-sub">{{ t.series.subtitle }}</p>
      </header>

      <div class="series__grid">
        <div class="scard" v-for="s in series" :key="s.id" v-reveal>
          <span class="scard__icon"><Icon :name="s.icon" :size="22" color="#fff" /></span>
          <h3 class="scard__title">{{ b(s.title) }}</h3>
          <p class="scard__desc">{{ b(s.desc) }}</p>

          <div class="scard__articles">
            <button
              v-for="aid in s.articles"
              :key="aid"
              class="scard__chip"
              @click="open(aid)"
            >
              <span class="scard__dot" :style="{ background: coverGradient(getArticle(aid).cover) }"></span>
              {{ b(getArticle(aid).title) }}
            </button>
          </div>

          <span class="scard__count">{{ s.articles.length }} {{ t.series.articles }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ui, openArticle } from '../store.js'
import { i18n } from '../data/i18n.js'
import { series } from '../data/series.js'
import { articles, getArticle } from '../data/articles.js'
import { coverGradient } from '../data/covers.js'
import Icon from './Icon.vue'

export default {
  name: 'SeriesSection',
  components: { Icon },
  data() {
    return { ui, series, articles, coverGradient, getArticle }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    }
  },
  methods: {
    open(id) {
      openArticle(id)
    },
    b(field) {
      return field ? field[this.ui.lang] : ''
    }
  }
}
</script>

<style scoped>
.series {
  padding: 80px 24px 90px;
}
.series__inner {
  max-width: 1120px;
  margin: 0 auto;
}
.series__head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 42px;
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
  margin: 0 0 14px;
  line-height: 1.15;
}
.section-sub {
  font-size: 16px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}
.series__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}
.scard {
  display: flex;
  flex-direction: column;
  background: var(--glass);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid var(--gborder);
  border-radius: 22px;
  padding: 26px 24px 22px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;
}
.scard:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.1);
}
.scard__icon {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #34c759, #30b0c7);
  box-shadow: 0 8px 18px rgba(52, 199, 89, 0.28);
  margin-bottom: 16px;
}
.scard__title {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.01em;
}
.scard__desc {
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 1.65;
  color: var(--muted);
}
.scard__articles {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 16px;
}
.scard__chip {
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  background: var(--gborder);
  border: 1px solid var(--gborder);
  border-radius: 12px;
  padding: 10px 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.scard__chip:hover {
  border-color: var(--accent);
  transform: translateX(3px);
}
.scard__dot {
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  border-radius: 5px;
}
.scard__count {
  margin-top: auto;
  font-size: 12.5px;
  color: var(--muted);
  opacity: 0.85;
}

@media (max-width: 720px) {
  .series__grid {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <AppNav />

  <main>
    <ArticleReader v-if="readingArticle" :article="readingArticle" />

    <HeroSection v-show="!readingArticle" />
    <TipBanner v-show="!readingArticle" />
    <StatsStrip class="band band--green" v-show="!readingArticle" />
    <GuidanceGrid class="band band--orange" v-show="!readingArticle" />
    <ArticleTeaser class="band band--green" v-show="!readingArticle" />
    <FaqSection v-show="!readingArticle" />
    <HealthQuiz v-show="!readingArticle" />
    <GlossarySection class="band band--blue" v-show="!readingArticle" />
    <SeriesSection class="band band--green" v-show="!readingArticle" />
    <SubscribeCTA v-show="!readingArticle" />
  </main>

  <footer v-show="!readingArticle" id="footer" class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <span class="footer__logo"><Icon name="leaf" :size="18" color="#fff" /></span>
        <div>
          <strong>{{ t.brand }}</strong>
          <em>{{ t.brandSub }}</em>
        </div>
      </div>
      <p class="footer__tagline">{{ t.footer.tagline }}</p>
      <p class="footer__note">{{ t.footer.note }}</p>
      <p class="footer__rights">{{ t.footer.rights }}</p>
    </div>
  </footer>
</template>

<script>
import { ui } from './store.js'
import { i18n } from './data/i18n.js'
import { getArticle } from './data/articles.js'
import AppNav from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import GuidanceGrid from './components/GuidanceGrid.vue'
import ArticleTeaser from './components/ArticleTeaser.vue'
import ArticleReader from './components/ArticleReader.vue'
import StatsStrip from './components/StatsStrip.vue'
import FaqSection from './components/FaqSection.vue'
import SubscribeCTA from './components/SubscribeCTA.vue'
import TipBanner from './components/TipBanner.vue'
import HealthQuiz from './components/HealthQuiz.vue'
import GlossarySection from './components/GlossarySection.vue'
import SeriesSection from './components/SeriesSection.vue'
import Icon from './components/Icon.vue'

export default {
  name: 'App',
  components: {
    AppNav,
    HeroSection,
    GuidanceGrid,
    ArticleTeaser,
    ArticleReader,
    StatsStrip,
    FaqSection,
    SubscribeCTA,
    TipBanner,
    HealthQuiz,
    GlossarySection,
    SeriesSection,
    Icon
  },
  data() {
    return { ui }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    },
    readingArticle() {
      return this.ui.reading ? getArticle(this.ui.reading) : null
    }
  }
}
</script>

<style scoped>
.footer {
  padding: 70px 24px 60px;
  border-top: 1px solid var(--hairline);
  background: var(--surface);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.footer__inner {
  max-width: var(--maxw);
  margin: 0 auto;
  text-align: center;
}
.footer__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}
.footer__logo {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #34c759, #30b0c7);
}
.footer__brand div {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  text-align: left;
}
.footer__brand strong {
  font-size: 16px;
  font-weight: 700;
}
.footer__brand em {
  font-style: normal;
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 1px;
  text-transform: uppercase;
}
.footer__tagline {
  font-size: 19px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 14px;
}
.footer__note {
  font-size: 13.5px;
  color: var(--muted);
  max-width: 520px;
  margin: 0 auto 22px;
  line-height: 1.6;
}
.footer__rights {
  font-size: 12.5px;
  color: var(--muted);
  opacity: 0.8;
  margin: 0;
}
</style>

<template>
  <div>
    <HeroSection />
    <TipBanner />
    <StatsStrip class="band band--green" />
    <GuidanceGrid class="band band--orange" />
    <ArticleTeaser class="band band--green" />
    <FaqSection />
    <HealthQuiz />
    <GlossarySection class="band band--blue" />
    <SeriesSection class="band band--green" />
    <SubscribeCTA />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { i18n } from '../data/i18n.js'
import HeroSection from '../components/HeroSection.vue'
import TipBanner from '../components/TipBanner.vue'
import StatsStrip from '../components/StatsStrip.vue'
import GuidanceGrid from '../components/GuidanceGrid.vue'
import ArticleTeaser from '../components/ArticleTeaser.vue'
import FaqSection from '../components/FaqSection.vue'
import HealthQuiz from '../components/HealthQuiz.vue'
import GlossarySection from '../components/GlossarySection.vue'
import SeriesSection from '../components/SeriesSection.vue'
import SubscribeCTA from '../components/SubscribeCTA.vue'

const SITE = 'https://healthy.24992345.xyz'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    TipBanner,
    StatsStrip,
    GuidanceGrid,
    ArticleTeaser,
    FaqSection,
    HealthQuiz,
    GlossarySection,
    SeriesSection,
    SubscribeCTA
  },
  setup() {
    const route = useRoute()
    // 构建时（SSG）就确定好首页 title / meta / OG，百度与 Google 直接读取，无需 JS 注入
    useHead(computed(() => {
      const lang = route.path.startsWith('/en') ? 'en' : 'zh'
      const s = i18n[lang].seo
      return {
        title: s.homeTitle,
        htmlAttrs: { lang: lang === 'zh' ? 'zh-CN' : 'en' },
        meta: [
          { name: 'description', content: s.homeDesc },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'PureEat 净食' },
          { property: 'og:title', content: s.ogTitle },
          { property: 'og:description', content: s.ogDesc },
          { property: 'og:image', content: `${SITE}/og-default.svg` },
          { property: 'og:locale', content: lang === 'zh' ? 'zh_CN' : 'en_US' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: s.ogTitle },
          { name: 'twitter:description', content: s.ogDesc },
          { name: 'twitter:image', content: `${SITE}/og-default.svg` }
        ]
      }
    }))
  }
}
</script>

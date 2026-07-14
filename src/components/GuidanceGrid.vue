<template>
  <section class="guidance" id="guidance">
    <div class="guidance__inner">
      <header class="guidance__head" v-reveal>
        <p class="eyebrow">{{ t.guidance.eyebrow }}</p>
        <h2 class="section-title">{{ t.guidance.title }}</h2>
        <p class="section-sub">{{ t.guidance.subtitle }}</p>
      </header>

      <div class="grid" :class="{ 'grid--in': inView }" ref="grid">
        <GuidanceCard
          v-for="item in items"
          :key="item.id"
          :item="item"
          class="grid__cell"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ui } from '../store.js'
import { i18n } from '../data/i18n.js'
import { guidanceItems } from '../data/guidance.js'
import GuidanceCard from './GuidanceCard.vue'

export default {
  name: 'GuidanceGrid',
  components: { GuidanceCard },
  data() {
    return { ui, items: guidanceItems, inView: false }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
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
      { threshold: 0.12 }
    )
    if (this.$refs.grid) io.observe(this.$refs.grid)
  }
}
</script>

<style scoped>
.guidance {
  padding: 90px 24px 100px;
  position: relative;
}
.guidance__inner {
  max-width: 1120px;
  margin: 0 auto;
}
.guidance__head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 52px;
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
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.grid__cell {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.grid--in .grid__cell {
  opacity: 1;
  transform: translateY(0);
}
.grid--in .grid__cell:nth-child(1) { transition-delay: 0ms; }
.grid--in .grid__cell:nth-child(2) { transition-delay: 80ms; }
.grid--in .grid__cell:nth-child(3) { transition-delay: 160ms; }
.grid--in .grid__cell:nth-child(4) { transition-delay: 240ms; }
.grid--in .grid__cell:nth-child(5) { transition-delay: 320ms; }
.grid--in .grid__cell:nth-child(6) { transition-delay: 400ms; }

@media (max-width: 980px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

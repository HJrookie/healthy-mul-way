<template>
  <section class="stats" id="stats" v-reveal>
    <div class="stats__inner">
      <p class="stats__eyebrow">{{ t.stats.eyebrow }}</p>
      <div class="stats__row" ref="root">
        <div class="stats__item" v-for="(s, i) in stats" :key="i">
          <div class="stats__num">
            <span class="stats__val">{{ current[i] }}</span><span class="stats__suf">{{ s.suffix }}</span>
          </div>
          <div class="stats__label">{{ b(s.label) }}</div>
        </div>
      </div>
      <p class="stats__caption">{{ t.stats.caption }}</p>
    </div>
  </section>
</template>

<script>
import { ui } from '../store.js'
import { i18n } from '../data/i18n.js'
import { stats } from '../data/stats.js'

export default {
  name: 'StatsStrip',
  data() {
    return { ui, stats, current: stats.map(() => 0) }
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
            this.run()
            io.disconnect()
          }
        })
      },
      { threshold: 0.35 }
    )
    if (this.$refs.root) io.observe(this.$refs.root)
  },
  methods: {
    b(field) {
      return field ? field[this.ui.lang] : ''
    },
    run() {
      this.stats.forEach((s, i) => {
        const dur = 1500
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          this.current[i] = Math.round(s.target * eased)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
    }
  }
}
</script>

<style scoped>
.stats {
  padding: 18px 24px 8px;
}
.stats__inner {
  max-width: 1120px;
  margin: 0 auto;
  background: var(--glass-2);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid var(--gborder-3);
  border-radius: 22px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  padding: 30px 28px 26px;
  text-align: center;
}
.stats__eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 18px;
}
.stats__row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.stats__item {
  padding: 6px 10px;
  position: relative;
}
.stats__item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -4px;
  top: 18%;
  height: 64%;
  width: 1px;
  background: var(--hairline-2);
}
.stats__num {
  font-size: clamp(28px, 5vw, 44px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--accent);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.stats__suf {
  font-size: 0.62em;
  margin-left: 1px;
}
.stats__label {
  margin-top: 8px;
  font-size: 13px;
  color: var(--muted);
  font-weight: 500;
}
.stats__caption {
  margin: 16px 0 0;
  font-size: 12.5px;
  color: var(--muted);
  opacity: 0.85;
}

@media (max-width: 680px) {
  .stats__row {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px 8px;
  }
  .stats__item:nth-child(2)::after {
    display: none;
  }
  .stats__item::after {
    display: none;
  }
}
</style>

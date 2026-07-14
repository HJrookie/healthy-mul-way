<template>
  <section class="hero" id="top">
    <div class="hero__blob hero__blob--1" aria-hidden="true"></div>
    <div class="hero__blob hero__blob--2" aria-hidden="true"></div>

    <div class="hero__inner">
      <p class="hero__eyebrow">
        <Icon name="sparkles" :size="16" :color="'var(--accent)'" />
        {{ t.hero.eyebrow }}
      </p>
      <h1 class="hero__title">{{ t.hero.title }}</h1>
      <p class="hero__subtitle">{{ t.hero.subtitle }}</p>
      <div class="hero__actions">
        <button class="btn btn--primary" @click="goGuidance">
          {{ t.hero.ctaPrimary }}
          <Icon name="arrowRight" :size="18" color="#fff" />
        </button>
        <button class="btn btn--ghost" @click="openArticle('mediterranean')">
          {{ t.hero.ctaSecondary }}
        </button>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span></span>
    </div>
  </section>
</template>

<script>
import { ui, openArticle } from '../store.js'
import { i18n } from '../data/i18n.js'
import Icon from './Icon.vue'

export default {
  name: 'HeroSection',
  components: { Icon },
  data() {
    return { ui }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    }
  },
  methods: {
    openArticle,
    goGuidance() {
      this.ui.reading = null
      this.$nextTick(() => {
        const el = document.getElementById('guidance')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
  overflow: hidden;
}
.hero__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  z-index: 0;
}
.hero__blob--1 {
  width: 440px;
  height: 440px;
  background: radial-gradient(circle, #b8f0c8, transparent 70%);
  top: -120px;
  left: -80px;
}
.hero__blob--2 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, #bfe6f5, transparent 70%);
  bottom: -120px;
  right: -60px;
}
.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 820px;
  animation: heroIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
@keyframes heroIn {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: var(--accent);
  background: rgba(52, 199, 89, 0.1);
  border: 1px solid rgba(52, 199, 89, 0.22);
  padding: 7px 14px;
  border-radius: 999px;
  margin-bottom: 26px;
}
.hero__title {
  font-size: clamp(34px, 6vw, 64px);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 22px;
  color: var(--text);
}
.hero__subtitle {
  font-size: clamp(16px, 2.2vw, 20px);
  line-height: 1.6;
  color: var(--muted);
  max-width: 640px;
  margin: 0 auto 38px;
  font-weight: 400;
}
.hero__actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 26px;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}
.btn--primary {
  background: linear-gradient(135deg, #34c759, #28a745);
  color: #fff;
  box-shadow: 0 10px 26px rgba(52, 199, 89, 0.32);
}
.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(52, 199, 89, 0.4);
}
.btn--ghost {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--text);
}
.btn--ghost:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.85);
}
.hero__scroll {
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 38px;
  border: 2px solid rgba(0, 0, 0, 0.18);
  border-radius: 14px;
  z-index: 1;
}
.hero__scroll span {
  position: absolute;
  top: 7px;
  left: 50%;
  width: 4px;
  height: 8px;
  margin-left: -2px;
  background: var(--muted);
  border-radius: 2px;
  animation: scrollDot 1.8s ease-in-out infinite;
}
@keyframes scrollDot {
  0% { opacity: 0; transform: translateY(0); }
  40% { opacity: 1; }
  80% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .hero__scroll span { animation: none; }
}
</style>

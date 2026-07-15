<template>
  <section class="faq" id="faq" v-reveal>
    <div class="faq__inner">
      <header class="faq__head">
        <p class="eyebrow">{{ t.faq.eyebrow }}</p>
        <h2 class="section-title">{{ t.faq.title }}</h2>
        <p class="faq__sub">{{ t.faq.subtitle }}</p>
      </header>

      <div class="faq__list">
        <div
          class="faq__item"
          v-for="(item, i) in faq"
          :key="i"
          :class="{ 'is-open': openIndex === i }"
        >
          <button
            class="faq__q"
            @click="toggle(i)"
            :aria-expanded="openIndex === i"
          >
            <span class="faq__qtext">{{ b(item.q) }}</span>
            <span class="faq__icon" :class="{ 'is-open': openIndex === i }">
              <Icon name="plus" :size="18" />
            </span>
          </button>
          <div class="faq__a">
            <p class="faq__atext">{{ b(item.a) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ui } from '../store.js'
import { i18n } from '../data/i18n.js'
import { faq } from '../data/faq.js'
import Icon from './Icon.vue'

export default {
  name: 'FaqSection',
  components: { Icon },
  data() {
    return { ui, faq, openIndex: 0 }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    }
  },
  methods: {
    b(field) {
      return field ? field[this.ui.lang] : ''
    },
    toggle(i) {
      this.openIndex = this.openIndex === i ? -1 : i
    }
  }
}
</script>

<style scoped>
.faq {
  padding: 64px 24px 72px;
  background: var(--faq-bg);
}
.faq__inner {
  max-width: 820px;
  margin: 0 auto;
}
.faq__head {
  text-align: center;
  margin-bottom: 36px;
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
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0;
  line-height: 1.15;
}
.faq__sub {
  margin: 14px auto 0;
  max-width: 540px;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--muted);
}
.faq__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.faq__item {
  background: var(--glass-2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--gborder-2);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}
.faq__item.is-open {
  border-color: rgba(52, 199, 89, 0.4);
  box-shadow: 0 10px 28px rgba(52, 199, 89, 0.12);
}
.faq__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.4;
}
.faq__icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(52, 199, 89, 0.12);
  color: var(--accent);
  transition: transform 0.3s ease, background 0.3s ease;
}
.faq__icon.is-open {
  transform: rotate(45deg);
  background: var(--accent);
  color: #fff;
}
.faq__a {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.4s ease, opacity 0.35s ease, padding 0.4s ease;
}
.faq__item.is-open .faq__a {
  max-height: 360px;
  opacity: 1;
  padding: 0 20px 20px;
}
.faq__atext {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.72;
  color: var(--muted);
}

@media (max-width: 680px) {
  .faq {
    padding: 48px 18px 56px;
  }
  .faq__q {
    font-size: 15px;
    padding: 16px;
  }
  .faq__item.is-open .faq__a {
    padding: 0 16px 16px;
  }
}
</style>

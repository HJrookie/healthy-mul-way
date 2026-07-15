<template>
  <section class="tip" v-reveal>
    <div class="tip__inner">
      <span class="tip__icon"><Icon name="sparkles" :size="20" color="#fff" /></span>
      <div class="tip__body">
        <transition name="tipfade" mode="out-in">
          <div :key="index" class="tip__slide">
            <span class="tip__tag">{{ b(tips[index].tag) }}</span>
            <p class="tip__text">{{ b(tips[index].text) }}</p>
          </div>
        </transition>
        <div class="tip__dots">
          <button
            v-for="(tp, i) in tips"
            :key="i"
            class="tip__dot"
            :class="{ 'is-active': i === index }"
            @click="go(i)"
            :aria-label="'tip ' + (i + 1)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ui } from '../store.js'
import { i18n } from '../data/i18n.js'
import { tips } from '../data/tips.js'
import Icon from './Icon.vue'

export default {
  name: 'TipBanner',
  components: { Icon },
  data() {
    return { ui, tips, index: 0, timer: null }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.index = (this.index + 1) % this.tips.length
    }, 5000)
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer)
  },
  methods: {
    b(field) {
      return field ? field[this.ui.lang] : ''
    },
    go(i) {
      this.index = i
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.index = (this.index + 1) % this.tips.length
      }, 5000)
    }
  }
}
</script>

<style scoped>
.tip {
  padding: 8px 24px 4px;
}
.tip__inner {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 18px;
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.1), rgba(48, 176, 199, 0.1));
  border: 1px solid rgba(52, 199, 89, 0.18);
  border-radius: 18px;
  padding: 18px 22px;
}
.tip__icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #34c759, #30b0c7);
  box-shadow: 0 8px 18px rgba(48, 176, 199, 0.25);
}
.tip__body {
  flex: 1;
  min-width: 0;
}
.tip__slide {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}
.tip__tag {
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: var(--accent);
  background: var(--glass-2);
  border: 1px solid rgba(52, 199, 89, 0.25);
  padding: 4px 11px;
  border-radius: 999px;
}
.tip__text {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--text);
}
.tip__dots {
  display: flex;
  gap: 7px;
  margin-top: 12px;
}
.tip__dot {
  width: 7px;
  height: 7px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: rgba(52, 199, 89, 0.25);
  cursor: pointer;
  transition: all 0.25s ease;
}
.tip__dot.is-active {
  width: 22px;
  background: var(--accent);
}

.tipfade-enter-active,
.tipfade-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.tipfade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.tipfade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 560px) {
  .tip__inner {
    padding: 16px 16px;
    gap: 14px;
  }
  .tip__text {
    font-size: 15px;
    flex-basis: 100%;
  }
}
</style>

<template>
  <section class="sub" id="subscribe" v-reveal>
    <div class="sub__card">
      <div class="sub__glow"></div>
      <p class="sub__eyebrow">{{ t.subscribe.eyebrow }}</p>
      <h2 class="sub__title">{{ t.subscribe.title }}</h2>
      <p class="sub__desc">{{ t.subscribe.desc }}</p>

      <span class="sub__soon">
        <Icon name="sparkles" :size="16" color="#fff" />
        {{ t.subscribe.soon }}
      </span>

      <p class="sub__note">{{ t.subscribe.note }}</p>
    </div>
  </section>
</template>

<script>
import { ui } from '../store.js'
import { i18n } from '../data/i18n.js'
import Icon from './Icon.vue'

export default {
  name: 'SubscribeCTA',
  components: { Icon },
  data() {
    return { ui }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    }
  }
}
</script>

<style scoped>
.sub {
  padding: 24px 24px 80px;
}
.sub__card {
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  border-radius: 28px;
  padding: 52px 32px 44px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  background: linear-gradient(135deg, #34c759 0%, #30b0c7 100%);
  box-shadow: 0 24px 60px rgba(48, 176, 199, 0.28);
}
.sub__glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(420px 220px at 12% 0%, rgba(255, 255, 255, 0.22), transparent 60%),
    radial-gradient(480px 260px at 100% 100%, rgba(255, 255, 255, 0.16), transparent 60%);
  pointer-events: none;
}
.sub__eyebrow {
  position: relative;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 0 0 14px;
}
.sub__title {
  position: relative;
  font-size: clamp(22px, 3.4vw, 32px);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 auto 14px;
  max-width: 620px;
  line-height: 1.25;
}
.sub__desc {
  position: relative;
  font-size: 14.5px;
  line-height: 1.7;
  opacity: 0.92;
  margin: 0 auto 24px;
  max-width: 540px;
}
.sub__soon {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  padding: 9px 20px;
  border-radius: 999px;
}
.sub__note {
  position: relative;
  margin: 20px 0 0;
  font-size: 12.5px;
  opacity: 0.8;
}

@media (max-width: 560px) {
  .sub__card {
    padding: 42px 20px 36px;
  }
}
</style>

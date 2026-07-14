<template>
  <a
    class="card"
    :href="item.url"
    target="_blank"
    rel="noopener noreferrer"
    :style="{ '--accent': item.accent }"
    :aria-label="b(item.org) + ' — ' + t.card.readMore"
  >
    <div class="card__glow" aria-hidden="true"></div>

    <header class="card__head">
      <span class="card__icon">
        <Icon :name="item.icon" :size="24" color="#fff" />
      </span>
      <div class="card__head-text">
        <p class="card__org">{{ b(item.org) }}</p>
        <p class="card__status">{{ b(item.status) }}</p>
      </div>
    </header>

    <h3 class="card__title">{{ b(item.title) }}</h3>
    <p class="card__summary">{{ b(item.summary) }}</p>

    <ul class="card__points">
      <li v-for="(p, i) in item.points" :key="i">
        <Icon name="check" :size="16" :color="'var(--accent)'" />
        <span>{{ b(p) }}</span>
      </li>
    </ul>

    <span class="card__more">
      {{ t.card.readMore }}
      <Icon name="external" :size="15" />
    </span>
  </a>
</template>

<script>
import { ui } from '../store.js'
import { i18n } from '../data/i18n.js'
import Icon from './Icon.vue'

export default {
  name: 'GuidanceCard',
  components: { Icon },
  props: {
    item: { type: Object, required: true }
  },
  data() {
    return { ui }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    },
    l() {
      return this.ui.lang
    }
  },
  methods: {
    b(field) {
      return field ? field[this.l] : ''
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  display: block;
  text-decoration: none;
  color: inherit;
  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 22px;
  padding: 26px 24px 22px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;
}
.card:hover {
  transform: translateY(-6px) scale(1.018);
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.12);
}
.card__glow {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.16;
  filter: blur(40px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.card:hover .card__glow {
  opacity: 0.28;
  transform: scale(1.2);
}
.card__head {
  display: flex;
  align-items: center;
  gap: 13px;
  position: relative;
  z-index: 1;
}
.card__icon {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  background: var(--accent);
  box-shadow: 0 8px 18px color-mix(in srgb, var(--accent) 40%, transparent);
  flex-shrink: 0;
}
.card__org {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
}
.card__status {
  margin: 2px 0 0;
  font-size: 12.5px;
  color: var(--muted);
}
.card__title {
  position: relative;
  z-index: 1;
  margin: 18px 0 8px;
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
}
.card__summary {
  position: relative;
  z-index: 1;
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
}
.card__points {
  position: relative;
  z-index: 1;
  list-style: none;
  margin: 0 0 18px;
  padding: 0;
  display: grid;
  gap: 9px;
}
.card__points li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--text);
}
.card__points li span {
  opacity: 0.88;
}
.card__more {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: transparent;
  color: var(--accent);
  font-size: 14px;
  font-weight: 600;
  padding: 0;
  cursor: pointer;
  transition: gap 0.25s ease;
}
.card__more:hover {
  gap: 9px;
}
</style>

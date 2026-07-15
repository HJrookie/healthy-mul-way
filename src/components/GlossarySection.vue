<template>
  <section class="gloss" id="glossary">
    <div class="gloss__inner">
      <header class="gloss__head" v-reveal>
        <p class="eyebrow">{{ t.glossary.eyebrow }}</p>
        <h2 class="section-title">{{ t.glossary.title }}</h2>
        <p class="section-sub">{{ t.glossary.subtitle }}</p>
      </header>

      <div class="gloss__tabs" v-reveal>
        <button
          class="gloss__tab"
          :class="{ 'is-active': tab === 'terms' }"
          @click="setTab('terms')"
        >
          {{ t.glossary.tabTerms }}
        </button>
        <button
          class="gloss__tab"
          :class="{ 'is-active': tab === 'myths' }"
          @click="setTab('myths')"
        >
          {{ t.glossary.tabMyths }}
        </button>
      </div>

      <!-- 术语词典 -->
      <div class="gloss__grid" v-if="tab === 'terms'" key="terms">
        <div
          class="gcard"
          v-for="item in glossary"
          :key="item.id"
          :class="{ 'is-open': openId === item.id }"
        >
          <button class="gcard__q" @click="toggle(item.id)">
            <span class="gcard__badge gcard__badge--term"><Icon name="book" :size="14" color="#1f8a45" /></span>
            <span class="gcard__term">{{ b(item.term) }}</span>
            <span class="gcard__icon" :class="{ 'is-open': openId === item.id }">
              <Icon name="plus" :size="18" />
            </span>
          </button>
          <div class="gcard__a">
            <p class="gcard__text">{{ b(item.meaning) }}</p>
          </div>
        </div>
      </div>

      <!-- 辟谣墙 -->
      <div class="gloss__grid" v-else key="myths">
        <div
          class="gcard gcard--myth"
          v-for="item in myths"
          :key="item.id"
          :class="{ 'is-open': openId === item.id }"
        >
          <button class="gcard__q" @click="toggle(item.id)">
            <span class="gcard__badge gcard__badge--myth"><Icon name="x" :size="14" color="#b5671f" /></span>
            <span class="gcard__term">{{ b(item.claim) }}</span>
            <span class="gcard__icon" :class="{ 'is-open': openId === item.id }">
              <Icon name="plus" :size="18" />
            </span>
          </button>
          <div class="gcard__a">
            <p class="gcard__text">{{ b(item.truth) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ui } from '../store.js'
import { i18n } from '../data/i18n.js'
import { glossary } from '../data/glossary.js'
import { myths } from '../data/myths.js'
import Icon from './Icon.vue'

export default {
  name: 'GlossarySection',
  components: { Icon },
  data() {
    return { ui, glossary, myths, tab: 'terms', openId: glossary[0].id }
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
    setTab(tab) {
      this.tab = tab
      this.openId = (tab === 'terms' ? this.glossary : this.myths)[0].id
    },
    toggle(id) {
      this.openId = this.openId === id ? null : id
    }
  }
}
</script>

<style scoped>
.gloss {
  padding: 80px 24px 90px;
}
.gloss__inner {
  max-width: 1120px;
  margin: 0 auto;
}
.gloss__head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 36px;
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
.gloss__tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
}
.gloss__tab {
  font-family: inherit;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--muted);
  background: var(--chip);
  border: 1px solid var(--gborder);
  border-radius: 999px;
  padding: 9px 22px;
  cursor: pointer;
  transition: all 0.22s ease;
}
.gloss__tab:hover {
  color: var(--accent);
}
.gloss__tab.is-active {
  color: #fff;
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 8px 18px rgba(52, 199, 89, 0.26);
}
.gloss__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.gcard {
  background: var(--glass);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid var(--gborder);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.gcard.is-open {
  border-color: rgba(52, 199, 89, 0.4);
  box-shadow: 0 12px 30px rgba(52, 199, 89, 0.12);
}
.gcard--myth.is-open {
  border-color: rgba(232, 149, 90, 0.45);
  box-shadow: 0 12px 30px rgba(232, 149, 90, 0.14);
}
.gcard__q {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: var(--text);
}
.gcard__badge {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 9px;
}
.gcard__badge--term {
  background: rgba(52, 199, 89, 0.14);
}
.gcard__badge--myth {
  background: rgba(232, 149, 90, 0.16);
}
.gcard__term {
  flex: 1;
  font-size: 15.5px;
  font-weight: 700;
  line-height: 1.35;
}
.gcard__icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: var(--gborder);
  color: var(--text);
  transition: transform 0.3s ease, background 0.3s ease;
}
.gcard__icon.is-open {
  transform: rotate(45deg);
  background: var(--accent);
  color: #fff;
}
.gcard__a {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.4s ease, opacity 0.35s ease, padding 0.4s ease;
}
.gcard.is-open .gcard__a {
  max-height: 320px;
  opacity: 1;
  padding: 0 18px 18px;
}
.gcard__text {
  margin: 0;
  font-size: 14px;
  line-height: 1.72;
  color: var(--muted);
}

@media (max-width: 680px) {
  .gloss__grid {
    grid-template-columns: 1fr;
  }
}
</style>

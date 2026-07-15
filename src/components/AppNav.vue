<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner">
      <a class="nav__brand" href="#top" @click.prevent="goTop">
        <span class="nav__logo" aria-hidden="true">
          <Icon name="leaf" :size="18" color="#fff" />
        </span>
        <span class="nav__brand-text">
          <strong>{{ t.brand }}</strong>
          <em>{{ t.brandSub }}</em>
        </span>
      </a>

      <nav class="nav__links" :class="{ 'nav__links--open': menuOpen }">
        <a href="#guidance" @click.prevent="goSection('guidance')">{{ t.nav.guidance }}</a>
        <a href="#article" @click.prevent="goSection('article')">{{ t.nav.article }}</a>
        <a href="#footer" @click.prevent="goSection('footer')">{{ t.nav.about }}</a>

        <button
          class="theme-toggle"
          @click="toggleTheme"
          :aria-label="ui.theme === 'dark' ? t.theme.toLight : t.theme.toDark"
          :title="ui.theme === 'dark' ? t.theme.toLight : t.theme.toDark"
        >
          <Icon :name="ui.theme === 'dark' ? 'sun' : 'moon'" :size="18" />
        </button>

        <div class="lang" @click.stop>
          <button
            class="lang__btn"
            :class="{ active: ui.lang === 'zh' }"
            @click="setLang('zh')"
          >
            ZH
          </button>
          <button
            class="lang__btn"
            :class="{ active: ui.lang === 'en' }"
            @click="setLang('en')"
          >
            EN
          </button>
        </div>
      </nav>

      <button class="nav__toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
        <Icon :name="menuOpen ? 'close' : 'menu'" :size="22" />
      </button>
    </div>
  </header>
</template>

<script>
import { ui, setLang, toggleTheme } from '../store.js'
import { i18n } from '../data/i18n.js'
import Icon from './Icon.vue'

export default {
  name: 'AppNav',
  components: { Icon },
  data() {
    return { ui, menuOpen: false, scrolled: false }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.onScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    setLang,
    toggleTheme,
    onScroll() {
      this.scrolled = window.scrollY > 12
    },
    goTop() {
      this.menuOpen = false
      if (this.$route.path === `/${this.ui.lang}`) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        this.$router.push(`/${this.ui.lang}`)
      }
    },
    goSection(id) {
      this.menuOpen = false
      if (this.$route.path === `/${this.ui.lang}`) {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // 在文章页点击导航：先回首页再锚定到对应区块
        this.$router.push({ path: `/${this.ui.lang}`, hash: `#${id}` })
      }
    }
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  transition: background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease;
}
.nav--scrolled {
  background: var(--nav-bg);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--gborder);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
}
.nav__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text);
}
.nav__logo {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #34c759, #30b0c7);
  box-shadow: 0 6px 16px rgba(52, 199, 89, 0.28);
}
.nav__brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}
.nav__brand-text strong {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.2px;
}
.nav__brand-text em {
  font-style: normal;
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 1px;
  text-transform: uppercase;
}
.nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav__links a {
  text-decoration: none;
  color: var(--text);
  font-size: 15px;
  font-weight: 500;
  opacity: 0.82;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.nav__links a:hover {
  opacity: 1;
  transform: translateY(-1px);
}
.lang {
  display: flex;
  background: var(--hairline-2);
  border: 1px solid var(--gborder);
  border-radius: 999px;
  padding: 3px;
}
.lang__btn {
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 13px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.lang__btn.active {
  background: var(--chip-active);
  color: var(--text);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}
.theme-toggle {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--gborder);
  background: var(--chip);
  color: var(--text);
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.theme-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
  transform: translateY(-1px);
}
.nav__toggle {
  display: none;
  border: none;
  background: transparent;
  color: var(--text);
  cursor: pointer;
}
@media (max-width: 720px) {
  .nav__toggle {
    display: block;
  }
  .nav__links {
    position: absolute;
    top: 60px;
    right: 16px;
    left: 16px;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 16px;
    background: var(--nav-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid var(--gborder);
    border-radius: 18px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
    transform-origin: top right;
    transform: scale(0.96);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  .nav__links--open {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }
  .nav__links a {
    padding: 8px 4px;
  }
  .lang {
    align-self: flex-start;
    margin-top: 4px;
  }
}
</style>

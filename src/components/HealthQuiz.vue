<template>
  <section class="quiz" id="quiz" v-reveal>
    <div class="quiz__inner">
      <header class="quiz__head">
        <p class="eyebrow">{{ b(quiz.eyebrow) }}</p>
        <h2 class="section-title">{{ b(quiz.title) }}</h2>
        <p class="quiz__sub">{{ b(quiz.subtitle) }}</p>
      </header>

      <!-- 答题中 -->
      <div v-if="!finished" class="quiz__panel">
        <div class="quiz__progress">
          <div class="quiz__bar" :style="{ width: progress + '%' }"></div>
        </div>
        <p class="quiz__count">{{ step + 1 }} / {{ quiz.questions.length }}</p>

        <transition name="qfade" mode="out-in">
          <div :key="step" class="quiz__q">
            <h3 class="quiz__qtext">{{ b(quiz.questions[step].q) }}</h3>
            <div class="quiz__opts">
              <button
                v-for="(opt, i) in quiz.questions[step].options"
                :key="i"
                class="quiz__opt"
                :class="{ 'is-picked': picked === i }"
                @click="choose(opt.score, i)"
              >
                {{ b(opt.text) }}
              </button>
            </div>
          </div>
        </transition>
      </div>

      <!-- 结果 -->
      <div v-else class="quiz__result">
        <div class="quiz__score">
          <span class="quiz__score-num">{{ total }}</span>
          <span class="quiz__score-max">/ 8</span>
        </div>
        <p class="quiz__level">{{ b(result.level) }} {{ result.emoji }}</p>
        <h3 class="quiz__rtitle">{{ b(result.title) }}</h3>
        <p class="quiz__rdesc">{{ b(result.desc) }}</p>

        <p class="quiz__rec-label">{{ b(quiz.ctaRead) }}</p>
        <div class="quiz__rec">
          <button
            v-for="a in recommended"
            :key="a.id"
            class="quiz__rec-card"
            :style="{ '--cover': coverGradient(a.cover) }"
            @click="open(a.id)"
          >
            <span class="quiz__rec-cat">{{ b(a.category) }}</span>
            <span class="quiz__rec-title">{{ b(a.title) }}</span>
            <span class="quiz__rec-go">
              {{ t.article.readArticle }}
              <Icon name="external" :size="14" color="#1d6838" />
            </span>
          </button>
        </div>

        <button class="quiz__again" @click="reset">{{ b(quiz.ctaAgain) }}</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ui, openArticle } from '../store.js'
import { i18n } from '../data/i18n.js'
import { quiz } from '../data/quiz.js'
import { articles, getArticle } from '../data/articles.js'
import { coverGradient } from '../data/covers.js'
import Icon from './Icon.vue'

export default {
  name: 'HealthQuiz',
  components: { Icon },
  data() {
    return { ui, quiz, articles, coverGradient, step: 0, scores: [], picked: -1, finished: false }
  },
  computed: {
    t() {
      return i18n[this.ui.lang]
    },
    total() {
      return this.scores.reduce((s, v) => s + v, 0)
    },
    progress() {
      return Math.round((this.step / this.quiz.questions.length) * 100)
    },
    result() {
      return (
        this.quiz.results.find((r) => this.total >= r.min && this.total <= r.max) ||
        this.quiz.results[this.quiz.results.length - 1]
      )
    },
    recommended() {
      return this.result.recommend.map((id) => getArticle(id)).filter(Boolean)
    }
  },
  methods: {
    b(field) {
      return field ? field[this.ui.lang] : ''
    },
    open(id) {
      openArticle(id)
    },
    choose(score, i) {
      this.picked = i
      // 轻微延迟，让用户看到选中态再翻页
      setTimeout(() => {
        this.scores.push(score)
        if (this.step < this.quiz.questions.length - 1) {
          this.step += 1
          this.picked = -1
        } else {
          this.finished = true
        }
      }, 220)
    },
    reset() {
      this.step = 0
      this.scores = []
      this.picked = -1
      this.finished = false
    }
  }
}
</script>

<style scoped>
.quiz {
  padding: 64px 24px 72px;
  background: var(--quiz-bg);
}
.quiz__inner {
  max-width: 720px;
  margin: 0 auto;
}
.quiz__head {
  text-align: center;
  margin-bottom: 32px;
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
.quiz__sub {
  margin: 14px auto 0;
  max-width: 480px;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--muted);
}
.quiz__panel {
  background: var(--glass-2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--gborder-2);
  border-radius: 22px;
  padding: 28px 26px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
}
.quiz__progress {
  height: 6px;
  border-radius: 999px;
  background: var(--hairline);
  overflow: hidden;
  margin-bottom: 10px;
}
.quiz__bar {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #34c759, #30b0c7);
  transition: width 0.4s ease;
}
.quiz__count {
  text-align: right;
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 18px;
}
.quiz__qtext {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--text);
  margin: 0 0 20px;
}
.quiz__opts {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.quiz__opt {
  text-align: left;
  font-family: inherit;
  font-size: 15.5px;
  font-weight: 600;
  color: var(--text);
  background: var(--glass-2);
  border: 1px solid var(--hairline-2);
  border-radius: 14px;
  padding: 15px 18px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.quiz__opt:hover {
  border-color: rgba(52, 199, 89, 0.45);
  transform: translateY(-1px);
}
.quiz__opt.is-picked {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  box-shadow: 0 8px 18px rgba(52, 199, 89, 0.28);
}

.quiz__result {
  text-align: center;
  background: var(--glass-2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--gborder-2);
  border-radius: 22px;
  padding: 34px 26px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
}
.quiz__score {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
}
.quiz__score-num {
  font-size: 52px;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.03em;
  line-height: 1;
}
.quiz__score-max {
  font-size: 18px;
  font-weight: 600;
  color: var(--muted);
}
.quiz__level {
  margin: 10px 0 4px;
  font-size: 15px;
  font-weight: 700;
  color: #1f8a45;
}
.quiz__rtitle {
  font-size: 22px;
  font-weight: 800;
  color: var(--text);
  margin: 0 0 12px;
}
.quiz__rdesc {
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 520px;
  margin: 0 auto 24px;
}
.quiz__rec-label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: var(--text);
  margin: 0 0 14px;
}
.quiz__rec {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 22px;
}
.quiz__rec-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-align: left;
  cursor: pointer;
  border: none;
  border-radius: 16px;
  padding: 16px;
  color: #fff;
  background: var(--cover);
  font-family: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.quiz__rec-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
}
.quiz__rec-cat {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.32);
}
.quiz__rec-title {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
}
.quiz__rec-go {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 600;
  background: #fff;
  color: #1d6838;
  padding: 6px 12px;
  border-radius: 999px;
}
.quiz__again {
  border: 1px solid rgba(52, 199, 89, 0.4);
  background: transparent;
  color: var(--accent);
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  padding: 10px 24px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.quiz__again:hover {
  background: rgba(52, 199, 89, 0.1);
}

.qfade-enter-active,
.qfade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.qfade-enter-from {
  opacity: 0;
  transform: translateX(14px);
}
.qfade-leave-to {
  opacity: 0;
  transform: translateX(-14px);
}

@media (max-width: 560px) {
  .quiz {
    padding: 48px 18px 56px;
  }
  .quiz__panel,
  .quiz__result {
    padding: 24px 18px;
  }
  .quiz__rec {
    grid-template-columns: 1fr;
  }
}
</style>

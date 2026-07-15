/**
 * 文章系列 / 合集：把现有文章串成可执行的「路线」。
 * icon 复用 Lucide 风格图标名（见 Icon.vue）。
 */
export const series = [
  {
    id: 'sleep-reset',
    title: { zh: '21 天睡眠改善计划', en: '21-Day Sleep Reset' },
    desc: {
      zh: '从理解睡眠到正念放松，再到柔和的身体练习——三周把「睡不好」调成「睡得稳」。',
      en: 'From understanding sleep to mindful calm and gentle movement — three weeks to turn restless nights into steady rest.'
    },
    icon: 'moon',
    articles: ['sleep', 'meditation', 'taichi', 'yoga']
  },
  {
    id: 'move-kit',
    title: { zh: '新手运动入门包', en: 'Beginner Movement Kit' },
    desc: {
      zh: '不知道从哪开始动？先读懂运动底层逻辑，再用慢跑、有氧、徒步、普拉提循序建立习惯。',
      en: 'Not sure where to start? Learn the basics, then build a habit with jogging, aerobics, hiking and Pilates.'
    },
    icon: 'heart',
    articles: ['exercise', 'jogging', 'aerobic', 'hiking', 'pilates']
  },
  {
    id: 'eat-basics',
    title: { zh: '吃对第一步 · 饮食基础', en: 'Eating Right: The Basics' },
    desc: {
      zh: '不必追求极端饮食法。先建立「吃对」的两个支点：一套被科学验证的饮食模式，加日常可坚持的原则。',
      en: 'Skip extreme diets. Build the two pillars of “eating right”: one proven pattern plus everyday principles you can keep.'
    },
    icon: 'plate',
    articles: ['mediterranean', 'diet']
  },
  {
    id: 'body-mind',
    title: { zh: '身心同修 · 柔韧与正念', en: 'Body & Mind: Flex & Mindful' },
    desc: {
      zh: '身体柔软了，心也更稳。把瑜伽、太极与冥想串成一条「向内」的练习路线。',
      en: 'A flexible body calms a steady mind. String yoga, tai chi and meditation into one inward practice path.'
    },
    icon: 'sparkles',
    articles: ['yoga', 'taichi', 'meditation']
  }
]

/**
 * 健康小自测：你的作息健康吗？（中英文双语）
 * 每题 3 个选项，分值 0/1/2，总分 0–8，按区间映射到 3 档结果。
 * recommend 为推荐阅读的文章 id（见 articles.js）。
 */
export const quiz = {
  eyebrow: { zh: '互动小测', en: 'Quick check' },
  title: { zh: '你的作息健康吗？', en: 'Is your routine healthy?' },
  subtitle: {
    zh: '4 道小题，30 秒测出你的作息得分，并推荐适合你的文章。',
    en: '4 quick questions, 30 seconds — get your score and tailored reads.'
  },
  questions: [
    {
      q: { zh: '你平时通常在几点入睡？', en: 'What time do you usually fall asleep?' },
      options: [
        { text: { zh: '23:00 之前', en: 'Before 23:00' }, score: 2 },
        { text: { zh: '23:00 – 0:30', en: '23:00 – 0:30' }, score: 1 },
        { text: { zh: '0:30 之后', en: 'After 0:30' }, score: 0 }
      ]
    },
    {
      q: { zh: '你平均每晚睡多久？', en: 'How long do you sleep per night on average?' },
      options: [
        { text: { zh: '少于 6 小时', en: 'Less than 6h' }, score: 0 },
        { text: { zh: '6 – 8 小时', en: '6 – 8 hours' }, score: 2 },
        { text: { zh: '超过 9 小时', en: 'More than 9h' }, score: 1 }
      ]
    },
    {
      q: { zh: '睡前一小时你通常在做什么？', en: 'What do you usually do in the hour before bed?' },
      options: [
        { text: { zh: '刷手机 / 追剧', en: 'Scroll phone / binge' }, score: 0 },
        { text: { zh: '随便，看心情', en: 'Whatever, mood-based' }, score: 1 },
        { text: { zh: '阅读 / 听轻音乐', en: 'Read / soft music' }, score: 2 }
      ]
    },
    {
      q: { zh: '起床后的精神状态如何？', en: 'How do you feel after waking up?' },
      options: [
        { text: { zh: '比较精神', en: 'Pretty refreshed' }, score: 2 },
        { text: { zh: '一般，要缓一缓', en: 'So-so, need time' }, score: 1 },
        { text: { zh: '疲惫，靠咖啡撑', en: 'Groggy, need coffee' }, score: 0 }
      ]
    }
  ],
  results: [
    {
      min: 0,
      max: 3,
      level: { zh: '作息堪忧', en: 'Needs work' },
      emoji: '🌙',
      title: { zh: '你的作息正在悄悄透支', en: 'Your routine is running low' },
      desc: {
        zh: '入睡偏晚、睡眠偏短，长期下来会影响情绪、代谢与免疫力。先从「固定起床时间」和「睡前放下手机」两件事改起，收益最大。',
        en: 'Late nights and short sleep quietly drain mood, metabolism and immunity. Start with a fixed wake-up time and putting the phone down — biggest payoff, least effort.'
      },
      recommend: ['sleep', 'meditation']
    },
    {
      min: 4,
      max: 6,
      level: { zh: '中规中矩', en: 'On track' },
      emoji: '⚖️',
      title: { zh: '底子不错，还能更稳', en: 'Solid base, room to shine' },
      desc: {
        zh: '你已经有了不错的节律，只要把睡眠时长补满、白天加点身体活动，整体状态会更上一层楼。',
        en: 'You already have a decent rhythm. Top up your sleep length and add daytime movement, and you’ll level up fast.'
      },
      recommend: ['sleep', 'exercise']
    },
    {
      min: 7,
      max: 8,
      level: { zh: '作息很棒', en: 'Excellent' },
      emoji: '🌟',
      title: { zh: '你的作息是教科书级别', en: 'Your routine is textbook' },
      desc: {
        zh: '规律、充足、放松——保持住就是最好的养生。想再进一步，可以试试把运动搬到户外，顺带补点维生素 D。',
        en: 'Regular, sufficient, relaxed — keeping it is the best medicine. To go further, move your workout outdoors for a vitamin D bonus.'
      },
      recommend: ['meditation', 'hiking']
    }
  ],
  ctaAgain: { zh: '再测一次', en: 'Retake' },
  ctaRead: { zh: '阅读推荐', en: 'Read' }
}

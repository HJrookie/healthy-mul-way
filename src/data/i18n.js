/**
 * 全站 UI 文案（中英文）。
 * 组件通过 computed(() => i18n[ui.lang].xxx) 读取，新增文案只需在此扩展。
 */
export const i18n = {
  zh: {
    brand: '净食',
    brandSub: 'PureEat',
    nav: {
      home: '首页',
      guidance: '权威指南',
      article: '深度阅读',
      about: '关于'
    },
    langLabel: '语言',
    hero: {
      eyebrow: '全球权威健康饮食指南',
      title: '吃对食物，是对身体最温柔的投资',
      subtitle:
        '我们汇集世界卫生组织、哈佛大学、中国营养学会等机构的科学共识，把复杂的营养学变成你每天都能用上的简单选择。',
      ctaPrimary: '浏览权威指南',
      ctaSecondary: '阅读示范文章'
    },
    guidance: {
      eyebrow: '权威来源',
      title: '六份被科学反复验证的饮食指南',
      subtitle: '来自全球顶尖机构与长寿地区的研究共识，一字一句都经得起推敲。'
    },
    card: {
      readMore: '访问官网'
    },
    article: {
      eyebrow: '深度阅读',
      title: '沉浸式的健康饮食长读',
      back: '返回首页',
      readingTime: '分钟阅读',
      related: '全部文章',
      relatedCount: '篇'
    },
    footer: {
      tagline: '让科学的饮食建议，回归每个人的餐桌。',
      note: '本平台内容仅供科普参考，不能替代专业医疗建议。',
      rights: '© 2026 PureEat 净食 · 用 Vue 3 构建'
    }
  },
  en: {
    brand: 'PureEat',
    brandSub: '净食',
    nav: {
      home: 'Home',
      guidance: 'Guidance',
      article: 'Read',
      about: 'About'
    },
    langLabel: 'Language',
    hero: {
      eyebrow: 'Global Authority on Healthy Eating',
      title: 'Eating well is the gentlest investment in yourself',
      subtitle:
        'We gather the scientific consensus from the WHO, Harvard, the Chinese Nutrition Society and more — turning complex nutrition into simple choices you can use every day.',
      ctaPrimary: 'Explore the guidance',
      ctaSecondary: 'Read the sample article'
    },
    guidance: {
      eyebrow: 'Trusted Sources',
      title: 'Six diet guides validated by science',
      subtitle:
        'Research consensus from the world’s leading institutions and the planet’s longest-lived regions — every word holds up to scrutiny.'
    },
    card: {
      readMore: 'Visit site'
    },
    article: {
      eyebrow: 'Long Read',
      title: 'An immersive deep-dive into healthy eating',
      back: 'Back to home',
      readingTime: 'min read',
      related: 'All articles',
      relatedCount: 'articles'
    },
    footer: {
      tagline: 'Bring evidence-based eating back to every table.',
      note: 'Content on this platform is for general education and is not a substitute for professional medical advice.',
      rights: '© 2026 PureEat · Built with Vue 3'
    }
  }
}

/**
 * 全站 UI 文案（中英文）。
 * 组件通过 computed(() => i18n[ui.lang].xxx) 读取，新增文案只需在此扩展。
 */
export const i18n = {
  zh: {
    brand: '净食',
    brandSub: 'PureEat',
    seo: {
      homeTitle: '净食 PureEat · 全球权威健康饮食指南',
      homeDesc: 'PureEat 净食 —— 汇集世界卫生组织、哈佛大学、中国营养学会等权威机构的科学共识，把复杂的营养学变成你每天都能用上的简单选择。',
      ogTitle: '净食 PureEat · 全球权威健康饮食指南',
      ogDesc: '汇集全球顶尖机构的科学共识，把复杂的营养学变成每天用得上的简单选择。'
    },
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
      relatedCount: '篇',
      readArticle: '阅读全文'
    },
    stats: {
      eyebrow: '净食 · 数据一览',
      caption: '由权威机构共识与长读文章共同支撑的内容体系'
    },
    faq: {
      eyebrow: '常见问题',
      title: '你可能也想知道',
      subtitle: '关于饮食、运动与睡眠的高频疑问，这里一次性说清。'
    },
    subscribe: {
      eyebrow: '敬请期待',
      title: '订阅功能 · 筹备中',
      desc: '我们正打磨「每周健康简报」。目前暂不收集邮箱，也不会发送任何邮件——你刚才看到的表单只是占位。想看干货？下方文章随时可读。',
      soon: '即将上线',
      note: '在此期间，你可以直接阅读下方文章，或把喜欢的内容收藏起来。'
    },
    footer: {
      tagline: '让科学的饮食建议，回归每个人的餐桌。',
      note: '本平台内容仅供科普参考，不能替代专业医疗建议。',
      rights: '© 2026 PureEat 净食 · 用 Vue 3 构建'
    },
    search: {
      placeholder: '搜索文章标题或内容…',
      title: '搜索结果',
      empty: '没有找到相关文章，换个关键词试试。',
      results: '篇结果',
      clear: '清除'
    },
    bookmark: {
      save: '收藏',
      saved: '已收藏',
      remove: '取消收藏',
      myList: '我的收藏',
      empty: '还没有收藏任何文章。点文章上的书签图标即可稍后读。'
    },
    glossary: {
      eyebrow: '硬核小百科',
      title: '术语词典 · 辟谣墙',
      subtitle: '把常见却常被误解的健康概念一次说清——既是干货，也帮你避开搜索里的坑。',
      tabTerms: '术语词典',
      tabMyths: '辟谣墙',
      termLabel: '术语',
      mythLabel: '谣言',
      source: '参考'
    },
    series: {
      eyebrow: '按路线读',
      title: '主题系列 · 合集',
      subtitle: '与其零散阅读，不如沿着一条路线走完——我们把文章串成可执行的「计划」。',
      articles: '篇文章',
      open: '开始阅读'
    },
    theme: {
      toDark: '切换到暗色',
      toLight: '切换到亮色'
    }
  },
  en: {
    brand: 'PureEat',
    brandSub: '净食',
    seo: {
      homeTitle: 'PureEat 净食 · Global Authority on Healthy Eating',
      homeDesc: 'PureEat brings evidence-based healthy-eating and lifestyle science from the WHO, Harvard, the Chinese Nutrition Society and more, straight to the public.',
      ogTitle: 'PureEat 净食 · Global Authority on Healthy Eating',
      ogDesc: 'We turn the scientific consensus of the world’s leading institutions into simple choices you can use every day.'
    },
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
      relatedCount: 'articles',
      readArticle: 'Read full article'
    },
    stats: {
      eyebrow: 'PureEat · By the numbers',
      caption: 'A content system backed by authoritative consensus and long reads'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'You might also be wondering',
      subtitle: 'High-frequency questions about diet, exercise and sleep — answered in one place.'
    },
    subscribe: {
      eyebrow: 'Stay tuned',
      title: 'Subscription · In the works',
      desc: 'We’re crafting a weekly “healthy-eating brief”. For now we don’t collect any email and won’t send mail — the form you saw was just a placeholder. Want the goods? The articles below are ready to read.',
      soon: 'Coming soon',
      note: 'Meanwhile, dive into the articles below or bookmark what you like.'
    },
    footer: {
      tagline: 'Bring evidence-based eating back to every table.',
      note: 'Content on this platform is for general education and is not a substitute for professional medical advice.',
      rights: '© 2026 PureEat · Built with Vue 3'
    },
    search: {
      placeholder: 'Search titles or content…',
      title: 'Search results',
      empty: 'No matching articles — try another keyword.',
      results: 'results',
      clear: 'Clear'
    },
    bookmark: {
      save: 'Save',
      saved: 'Saved',
      remove: 'Remove',
      myList: 'My bookmarks',
      empty: 'No bookmarks yet. Tap the bookmark icon on any article to read later.'
    },
    glossary: {
      eyebrow: 'The hard facts',
      title: 'Glossary · Myth-buster',
      subtitle: 'Common health concepts, clearly explained — and the rumors to stop believing.',
      tabTerms: 'Glossary',
      tabMyths: 'Myth-buster',
      termLabel: 'Term',
      mythLabel: 'Myth',
      source: 'Source'
    },
    series: {
      eyebrow: 'Read by path',
      title: 'Series & Collections',
      subtitle: 'Instead of scattered reads, follow a path — we turned articles into doable plans.',
      articles: 'articles',
      open: 'Start reading'
    },
    theme: {
      toDark: 'Switch to dark',
      toLight: 'Switch to light'
    }
  }
}

/**
 * 文章数据（中英文结构化分块）。
 * 新增文章：往 articles 数组 push 一个对象即可，ArticleReader 会自动渲染。
 *
 * 内容块 block.type 支持：
 *   'lead'    导语（大字号）
 *   'h2'      二级标题
 *   'p'       正文段落
 *   'quote'   引言/金句  { text, cite }
 *   'list'    列表        { items: [{zh,en}] }
 *   'callout' 提示框      { title, text }
 *   'stats'   数据卡      { items: [{ value, label:{zh,en} }] }
 *
 * 双语策略：所有文本字段统一为 { zh, en } 结构，渲染时按当前语言取值。
 */
export const articles = [
  {
    id: 'mediterranean',
    category: { zh: '饮食法深读', en: 'Diet Deep-Dive' },
    title: {
      zh: '地中海饮食：全球公认的长寿秘诀',
      en: 'Mediterranean Diet: The World’s Recognized Longevity Secret'
    },
    excerpt: {
      zh: '它不靠计算卡路里，也不禁止任何食物——只是把餐桌交还给自然。为什么营养学界连续多年把它评为「最佳综合饮食」？',
      en: 'No calorie math, no forbidden foods — just a table returned to nature. Why do experts keep naming it the best overall diet?'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 8,
    // 封面用渐变 + 图标，无需外部图片资源
    cover: 'mediterranean',
    content: {
      zh: [
        {
          type: 'lead',
          text: '在意大利南部的阳光里，在希腊小岛的餐桌上，人们用橄榄油、番茄、深海鱼和一杯红酒，悄悄活成了世界上最长寿的群体之一。这并非偶然，而是一套被科学反复验证的饮食方式——地中海饮食。'
        },
        { type: 'h2', text: '什么是地中海饮食？' },
        {
          type: 'p',
          text: '地中海饮食并非某一种「食谱」，而是沿地中海国家（希腊、意大利南部、西班牙等）传统饮食模式的总称。它的核心不是限制，而是「以植物为底盘，让好脂肪成为主角」。'
        },
        {
          type: 'p',
          text: '与西方高糖高脂的饮食不同，地中海饮食把蔬菜、豆类、全谷物和坚果放在盘子的中心，肉类退居配角，而橄榄油则取代了黄油与动物油，成为日常烹饪的灵魂。'
        },
        {
          type: 'quote',
          text: '我们不是在「节食」，我们只是在用祖先的方式吃饭。',
          cite: ' —— 一位克里特岛老人的家常话'
        },
        { type: 'h2', text: '餐盘里到底有什么？' },
        {
          type: 'list',
          items: [
            { zh: '特级初榨橄榄油：主要脂肪来源，用于凉拌与烹饪', en: 'Extra-virgin olive oil: the main fat, raw or for cooking' },
            { zh: '蔬菜与水果：每餐大量，颜色越丰富越好', en: 'Vegetables & fruit: abundant at every meal, the more colors the better' },
            { zh: '豆类与坚果：优质植物蛋白与健康脂肪', en: 'Legumes & nuts: quality plant protein and healthy fats' },
            { zh: '全谷物：面包、燕麦、糙米替代精白米面', en: 'Whole grains: bread, oats, brown rice over refined carbs' },
            { zh: '鱼类与海鲜：每周至少两次，补充 Omega-3', en: 'Fish & seafood: at least twice a week for Omega-3' },
            { zh: '禽类与蛋：适量；红肉与加工肉尽量少吃', en: 'Poultry & eggs: in moderation; limit red & processed meat' }
          ]
        },
        { type: 'h2', text: '科学说了什么？' },
        {
          type: 'p',
          text: '地中海饮食是目前证据最充分的饮食模式之一。大量随机对照试验与队列研究一致显示，它对心血管健康尤其友好。'
        },
        {
          type: 'stats',
          items: [
            { value: '30%', label: { zh: '主要心血管事件风险下降', en: 'Lower risk of major cardiac events' } },
            { value: '≈ 20%', label: { zh: '全因死亡率下降', en: 'Reduction in all-cause mortality' } },
            { value: '#1', label: { zh: '连续多年最佳综合饮食', en: 'Best overall diet, year after year' } }
          ]
        },
        {
          type: 'callout',
          title: '关键研究',
          text: '著名的 PREDIMED 试验纳入超 7000 名高风险人群，发现坚持地中海饮食（补充橄榄油或坚果）可显著降低心脏病发作、中风与心血管死亡风险。'
        },
        { type: 'h2', text: '为什么它「可持续」？' },
        {
          type: 'p',
          text: '大多数减肥法失败，是因为它们要求你「对抗本能」。地中海饮食恰恰相反：它不计算热量、不切除碳水、不禁止社交聚餐。你依然可以享受食物的风味与聚餐桌的欢愉——只是把选择悄悄转向了更天然的那一侧。'
        },
        {
          type: 'p',
          text: '这种「不费力的一致性」，才是它能被一代代人坚持下来的真正原因，也是它区别于一切速效饮食的根本。'
        },
        { type: 'h2', text: '如何开始？四件小事' },
        {
          type: 'list',
          items: [
            { zh: '把厨房里的黄油换成橄榄油', en: 'Swap butter for olive oil in the kitchen' },
            { zh: '每顿饭先保证一半是蔬菜', en: 'Make half of every plate vegetables' },
            { zh: '每周设两天「无红肉日」', en: 'Pick two red-meat-free days a week' },
            { zh: '用坚果代替饼干作为零食', en: 'Replace cookies with a handful of nuts' }
          ]
        },
        {
          type: 'quote',
          text: '最好的饮食，是你能愉快坚持一辈子的那一种。',
          cite: ' —— 净食编辑部'
        },
        {
          type: 'p',
          text: '地中海饮食提醒我们：健康从来不是苦行，而是一种被好好对待的生活。从下一餐开始，让盘子多一点颜色，让身体多一分从容。'
        }
      ],
      en: [
        {
          type: 'lead',
          text: 'Under the southern Italian sun, on the tables of Greek islands, people quietly become some of the world’s longest-lived — with olive oil, tomatoes, deep-sea fish and a glass of wine. This is no accident. It is the Mediterranean diet, validated by science again and again.'
        },
        { type: 'h2', text: 'What is the Mediterranean diet?' },
        {
          type: 'p',
          text: 'The Mediterranean diet is not a single "recipe" but a family of traditional eating patterns from countries bordering the sea — Greece, southern Italy, Spain. Its core is not restriction but a plant-based base with good fats taking the lead.'
        },
        {
          type: 'p',
          text: 'Unlike Western high-sugar, high-saturated-fat eating, it puts vegetables, legumes, whole grains and nuts at the center of the plate, pushes meat to the side, and lets olive oil replace butter as the soul of everyday cooking.'
        },
        {
          type: 'quote',
          text: 'We are not dieting. We are simply eating the way our grandparents did.',
          cite: ' — a Cretan elder'
        },
        { type: 'h2', text: 'What’s actually on the plate?' },
        {
          type: 'list',
          items: [
            { zh: 'Extra-virgin olive oil: the main fat, raw or for cooking', en: 'Extra-virgin olive oil: the main fat, raw or for cooking' },
            { zh: 'Vegetables & fruit: abundant at every meal', en: 'Vegetables & fruit: abundant at every meal, the more colors the better' },
            { zh: 'Legumes & nuts: quality plant protein and healthy fats', en: 'Legumes & nuts: quality plant protein and healthy fats' },
            { zh: 'Whole grains: bread, oats, brown rice over refined carbs', en: 'Whole grains: bread, oats, brown rice over refined carbs' },
            { zh: 'Fish & seafood: at least twice a week for Omega-3', en: 'Fish & seafood: at least twice a week for Omega-3' },
            { zh: 'Poultry & eggs in moderation; limit red meat', en: 'Poultry & eggs in moderation; limit red & processed meat' }
          ]
        },
        { type: 'h2', text: 'What does the science say?' },
        {
          type: 'p',
          text: 'The Mediterranean diet is among the best-evidenced eating patterns. Large randomized trials and cohorts consistently show it is especially kind to the heart.'
        },
        {
          type: 'stats',
          items: [
            { value: '30%', label: { zh: 'Lower risk of major cardiac events', en: 'Lower risk of major cardiac events' } },
            { value: '≈ 20%', label: { zh: 'Reduction in all-cause mortality', en: 'Reduction in all-cause mortality' } },
            { value: '#1', label: { zh: 'Best overall diet, year after year', en: 'Best overall diet, year after year' } }
          ]
        },
        {
          type: 'callout',
          title: 'Key study',
          text: 'The famed PREDIMED trial enrolled over 7,000 high-risk adults and found that a Mediterranean diet supplemented with olive oil or nuts significantly cut heart attacks, strokes and cardiovascular deaths.'
        },
        { type: 'h2', text: 'Why is it sustainable?' },
        {
          type: 'p',
          text: 'Most diets fail because they ask you to fight your instincts. The Mediterranean diet does the opposite: no calorie counting, no carved-out carbs, no banned dinners with friends. You still enjoy flavor and the joy of the table — you simply nudge choices toward the more natural side.'
        },
        {
          type: 'p',
          text: 'This effortless consistency is exactly why it survives generations — and what sets it apart from every quick fix.'
        },
        { type: 'h2', text: 'How to start? Four small moves' },
        {
          type: 'list',
          items: [
            { zh: 'Swap butter for olive oil in the kitchen', en: 'Swap butter for olive oil in the kitchen' },
            { zh: 'Make half of every plate vegetables', en: 'Make half of every plate vegetables' },
            { zh: 'Pick two red-meat-free days a week', en: 'Pick two red-meat-free days a week' },
            { zh: 'Replace cookies with a handful of nuts', en: 'Replace cookies with a handful of nuts' }
          ]
        },
        {
          type: 'quote',
          text: 'The best diet is the one you can happily keep for life.',
          cite: ' — PureEat Editorial'
        },
        {
          type: 'p',
          text: 'The Mediterranean diet reminds us that health is never asceticism — it is a life well tended. Starting with your next meal, add a little color to the plate, and a little ease to the body.'
        }
      ]
    }
  }
]

export function getArticle(id) {
  return articles.find((a) => a.id === id) || null
}

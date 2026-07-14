/**
 * 文章数据（中英文结构化分块）。
 * 新增文章：往 articles 数组 push 一个对象即可，ArticleReader / 文章列表会自动渲染。
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
    cover: 'mediterranean',
    content: {
      zh: [
        { type: 'lead', text: '在意大利南部的阳光里，在希腊小岛的餐桌上，人们用橄榄油、番茄、深海鱼和一杯红酒，悄悄活成了世界上最长寿的群体之一。这并非偶然，而是一套被科学反复验证的饮食方式——地中海饮食。' },
        { type: 'h2', text: '什么是地中海饮食？' },
        { type: 'p', text: '地中海饮食并非某一种「食谱」，而是沿地中海国家（希腊、意大利南部、西班牙等）传统饮食模式的总称。它的核心不是限制，而是「以植物为底盘，让好脂肪成为主角」。' },
        { type: 'p', text: '与西方高糖高脂的饮食不同，地中海饮食把蔬菜、豆类、全谷物和坚果放在盘子的中心，肉类退居配角，而橄榄油则取代了黄油与动物油，成为日常烹饪的灵魂。' },
        { type: 'quote', text: '我们不是在「节食」，我们只是在用祖先的方式吃饭。', cite: ' —— 一位克里特岛老人的家常话' },
        { type: 'h2', text: '餐盘里到底有什么？' },
        { type: 'list', items: [
          { zh: '特级初榨橄榄油：主要脂肪来源，用于凉拌与烹饪', en: 'Extra-virgin olive oil: the main fat, raw or for cooking' },
          { zh: '蔬菜与水果：每餐大量，颜色越丰富越好', en: 'Vegetables & fruit: abundant at every meal, the more colors the better' },
          { zh: '豆类与坚果：优质植物蛋白与健康脂肪', en: 'Legumes & nuts: quality plant protein and healthy fats' },
          { zh: '全谷物：面包、燕麦、糙米替代精白米面', en: 'Whole grains: bread, oats, brown rice over refined carbs' },
          { zh: '鱼类与海鲜：每周至少两次，补充 Omega-3', en: 'Fish & seafood: at least twice a week for Omega-3' },
          { zh: '禽类与蛋：适量；红肉与加工肉尽量少吃', en: 'Poultry & eggs: in moderation; limit red & processed meat' }
        ] },
        { type: 'h2', text: '科学说了什么？' },
        { type: 'p', text: '地中海饮食是目前证据最充分的饮食模式之一。大量随机对照试验与队列研究一致显示，它对心血管健康尤其友好。' },
        { type: 'stats', items: [
          { value: '30%', label: { zh: '主要心血管事件风险下降', en: 'Lower risk of major cardiac events' } },
          { value: '≈ 20%', label: { zh: '全因死亡率下降', en: 'Reduction in all-cause mortality' } },
          { value: '#1', label: { zh: '连续多年最佳综合饮食', en: 'Best overall diet, year after year' } }
        ] },
        { type: 'callout', title: '关键研究', text: '著名的 PREDIMED 试验纳入超 7000 名高风险人群，发现坚持地中海饮食（补充橄榄油或坚果）可显著降低心脏病发作、中风与心血管死亡风险。' },
        { type: 'h2', text: '为什么它「可持续」？' },
        { type: 'p', text: '大多数减肥法失败，是因为它们要求你「对抗本能」。地中海饮食恰恰相反：它不计算热量、不切除碳水、不禁止社交聚餐。你依然可以享受食物的风味与聚餐桌的欢愉——只是把选择悄悄转向了更天然的那一侧。' },
        { type: 'p', text: '这种「不费力的一致性」，才是它能被一代代人坚持下来的真正原因，也是它区别于一切速效饮食的根本。' },
        { type: 'h2', text: '如何开始？四件小事' },
        { type: 'list', items: [
          { zh: '把厨房里的黄油换成橄榄油', en: 'Swap butter for olive oil in the kitchen' },
          { zh: '每顿饭先保证一半是蔬菜', en: 'Make half of every plate vegetables' },
          { zh: '每周设两天「无红肉日」', en: 'Pick two red-meat-free days a week' },
          { zh: '用坚果代替饼干作为零食', en: 'Replace cookies with a handful of nuts' }
        ] },
        { type: 'quote', text: '最好的饮食，是你能愉快坚持一辈子的那一种。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '地中海饮食提醒我们：健康从来不是苦行，而是一种被好好对待的生活。从下一餐开始，让盘子多一点颜色，让身体多一分从容。' }
      ],
      en: [
        { type: 'lead', text: 'Under the southern Italian sun, on the tables of Greek islands, people quietly become some of the world’s longest-lived — with olive oil, tomatoes, deep-sea fish and a glass of wine. This is no accident. It is the Mediterranean diet, validated by science again and again.' },
        { type: 'h2', text: 'What is the Mediterranean diet?' },
        { type: 'p', text: 'The Mediterranean diet is not a single “recipe” but a family of traditional eating patterns from countries bordering the sea — Greece, southern Italy, Spain. Its core is not restriction but a plant-based base with good fats taking the lead.' },
        { type: 'p', text: 'Unlike Western high-sugar, high-saturated-fat eating, it puts vegetables, legumes, whole grains and nuts at the center of the plate, pushes meat to the side, and lets olive oil replace butter as the soul of everyday cooking.' },
        { type: 'quote', text: 'We are not dieting. We are simply eating the way our grandparents did.', cite: ' — a Cretan elder' },
        { type: 'h2', text: 'What’s actually on the plate?' },
        { type: 'list', items: [
          { zh: 'Extra-virgin olive oil: the main fat, raw or for cooking', en: 'Extra-virgin olive oil: the main fat, raw or for cooking' },
          { zh: 'Vegetables & fruit: abundant at every meal', en: 'Vegetables & fruit: abundant at every meal, the more colors the better' },
          { zh: 'Legumes & nuts: quality plant protein and healthy fats', en: 'Legumes & nuts: quality plant protein and healthy fats' },
          { zh: 'Whole grains: bread, oats, brown rice over refined carbs', en: 'Whole grains: bread, oats, brown rice over refined carbs' },
          { zh: 'Fish & seafood: at least twice a week for Omega-3', en: 'Fish & seafood: at least twice a week for Omega-3' },
          { zh: 'Poultry & eggs in moderation; limit red meat', en: 'Poultry & eggs in moderation; limit red & processed meat' }
        ] },
        { type: 'h2', text: 'What does the science say?' },
        { type: 'p', text: 'The Mediterranean diet is among the best-evidenced eating patterns. Large randomized trials and cohorts consistently show it is especially kind to the heart.' },
        { type: 'stats', items: [
          { value: '30%', label: { zh: 'Lower risk of major cardiac events', en: 'Lower risk of major cardiac events' } },
          { value: '≈ 20%', label: { zh: 'Reduction in all-cause mortality', en: 'Reduction in all-cause mortality' } },
          { value: '#1', label: { zh: 'Best overall diet, year after year', en: 'Best overall diet, year after year' } }
        ] },
        { type: 'callout', title: 'Key study', text: 'The famed PREDIMED trial enrolled over 7,000 high-risk adults and found that a Mediterranean diet supplemented with olive oil or nuts significantly cut heart attacks, strokes and cardiovascular deaths.' },
        { type: 'h2', text: 'Why is it sustainable?' },
        { type: 'p', text: 'Most diets fail because they ask you to fight your instincts. The Mediterranean diet does the opposite: no calorie counting, no carved-out carbs, no banned dinners with friends. You still enjoy flavor and the joy of the table — you simply nudge choices toward the more natural side.' },
        { type: 'p', text: 'This effortless consistency is exactly why it survives generations — and what sets it apart from every quick fix.' },
        { type: 'h2', text: 'How to start? Four small moves' },
        { type: 'list', items: [
          { zh: 'Swap butter for olive oil in the kitchen', en: 'Swap butter for olive oil in the kitchen' },
          { zh: 'Make half of every plate vegetables', en: 'Make half of every plate vegetables' },
          { zh: 'Pick two red-meat-free days a week', en: 'Pick two red-meat-free days a week' },
          { zh: 'Replace cookies with a handful of nuts', en: 'Replace cookies with a handful of nuts' }
        ] },
        { type: 'quote', text: 'The best diet is the one you can happily keep for life.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'The Mediterranean diet reminds us that health is never asceticism — it is a life well tended. Starting with your next meal, add a little color to the plate, and a little ease to the body.' }
      ]
    }
  },

  {
    id: 'diet',
    category: { zh: '饮食', en: 'Nutrition' },
    title: { zh: '好好吃饭：被忽略的日常养生', en: 'Eat Well: The Everyday Art of Nourishment' },
    excerpt: {
      zh: '健康饮食不是苦行，而是一套能长期坚持、让人舒服的选择。五个原则，今天就能用上。',
      en: 'Healthy eating isn’t asceticism — it’s a set of choices you can keep for life. Five principles to start today.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 7,
    cover: 'diet',
    content: {
      zh: [
        { type: 'lead', text: '我们一天要吃三顿，却很少停下来想：这一餐，正在悄悄书写十年后的体检报告。饮食是健康的地基，而地基不必靠意志力苦撑，只需用对方法。' },
        { type: 'h2', text: '为什么「怎么吃」常常比「吃什么」更关键' },
        { type: 'p', text: '营养学界有个越来越清晰的共识：没有哪一种「超级食物」能抵消整体饮食结构的一塌糊涂。真正长期起作用的是模式——你盘子里各类食物的比例、进食的节奏，以及食物被加工的程度。' },
        { type: 'h2', text: '五个今天就能用上的原则' },
        { type: 'list', items: [
          { zh: '食物多样化：每天尽量凑齐多种颜色的天然食物', en: 'Eat a rainbow: as many natural colors as you can each day' },
          { zh: '以植物为主：让蔬菜、豆类、全谷物占据餐盘的主体', en: 'Plant-forward: veg, legumes and whole grains fill most of the plate' },
          { zh: '限制游离糖与反式脂肪：少喝甜饮，远离油炸精加工零食', en: 'Cap free sugars & trans fats: skip sugary drinks and deep-fried snacks' },
          { zh: '控制份量、细嚼慢咽：给大脑留出接收饱腹信号的时间', en: 'Mind portions & pace: let your brain register fullness' },
          { zh: '规律进餐：固定三餐时间，减少深夜进食', en: 'Eat on a schedule: steady mealtimes, fewer late-night bites' }
        ] },
        { type: 'h2', text: '一份好餐盘的模样' },
        { type: 'p', text: '把餐盘想成一幅画：一半是蔬菜与水果，四分之一是全谷物，四分之一是优质蛋白，旁边一小份健康脂肪。水，始终是最好的饮品。' },
        { type: 'callout', title: '实用小技巧', text: '先把蔬菜夹满盘子的一半，再添主食和蛋白——顺序对了，份量自然合理。' },
        { type: 'h2', text: '三个最常见的误区' },
        { type: 'list', items: [
          { zh: '误区一：无脂即健康——许多低脂食品靠加糖补足口感', en: 'Myth 1: “fat-free” = healthy — many low-fat foods add sugar back' },
          { zh: '误区二：不吃主食能瘦——长期缺碳水会拖垮情绪与代谢', en: 'Myth 2: cut carbs to lose weight — long-term, it hurts mood and metabolism' },
          { zh: '误区三：补剂能替代正餐——食物里的协同营养无法被药丸复制', en: 'Myth 3: supplements replace meals — food’s synergy can’t be bottled' }
        ] },
        { type: 'quote', text: '你不需要完美的一餐，只需要比昨天好一点的一餐。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '饮食是最日常的自我照顾。从下一顿饭开始，多一勺蔬菜、少一勺糖，身体会替你记得。' }
      ],
      en: [
        { type: 'lead', text: 'We eat three times a day, yet rarely pause to think: this meal is quietly writing next decade’s check-up. Diet is the foundation of health — and the foundation need not be held up by willpower alone, only by better method.' },
        { type: 'h2', text: 'Why “how you eat” often beats “what you eat”' },
        { type: 'p', text: 'There is a growing consensus in nutrition: no single “superfood” offsets a messy overall pattern. What works long-term is the pattern — the proportions on your plate, the rhythm of eating, and how processed the food is.' },
        { type: 'h2', text: 'Five principles you can use today' },
        { type: 'list', items: [
          { zh: 'Eat a rainbow: as many natural colors as you can each day', en: 'Eat a rainbow: as many natural colors as you can each day' },
          { zh: 'Plant-forward: veg, legumes and whole grains fill most of the plate', en: 'Plant-forward: veg, legumes and whole grains fill most of the plate' },
          { zh: 'Cap free sugars & trans fats: skip sugary drinks and deep-fried snacks', en: 'Cap free sugars & trans fats: skip sugary drinks and deep-fried snacks' },
          { zh: 'Mind portions & pace: let your brain register fullness', en: 'Mind portions & pace: let your brain register fullness' },
          { zh: 'Eat on a schedule: steady mealtimes, fewer late-night bites', en: 'Eat on a schedule: steady mealtimes, fewer late-night bites' }
        ] },
        { type: 'h2', text: 'What a good plate looks like' },
        { type: 'p', text: 'Picture the plate as a painting: half vegetables and fruit, a quarter whole grains, a quarter quality protein, plus a small side of healthy fat. Water remains the best drink of all.' },
        { type: 'callout', title: 'Practical tip', text: 'Fill half the plate with vegetables first, then add grains and protein — get the order right and the portions take care of themselves.' },
        { type: 'h2', text: 'Three most common myths' },
        { type: 'list', items: [
          { zh: 'Myth 1: “fat-free” = healthy — many low-fat foods add sugar back', en: 'Myth 1: “fat-free” = healthy — many low-fat foods add sugar back' },
          { zh: 'Myth 2: cut carbs to lose weight — long-term, it hurts mood and metabolism', en: 'Myth 2: cut carbs to lose weight — long-term, it hurts mood and metabolism' },
          { zh: 'Myth 3: supplements replace meals — food’s synergy can’t be bottled', en: 'Myth 3: supplements replace meals — food’s synergy can’t be bottled' }
        ] },
        { type: 'quote', text: 'You don’t need a perfect meal — just one a little better than yesterday’s.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'Eating is the most everyday form of self-care. Starting with your next meal, one more spoon of vegetables and one less of sugar — your body will remember.' }
      ]
    }
  },

  {
    id: 'sleep',
    category: { zh: '睡眠', en: 'Sleep' },
    title: { zh: '睡觉，是性价比最高的修复', en: 'Sleep: The Highest-ROI Repair' },
    excerpt: {
      zh: '睡眠不是休息的附属品，而是身体与大脑的「系统维护」。读懂睡眠，比任何补剂都管用。',
      en: 'Sleep isn’t downtime — it’s system maintenance for body and brain. Understanding it beats any supplement.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 7,
    cover: 'sleep',
    content: {
      zh: [
        { type: 'lead', text: '当我们睡着，身体并没有关机。大脑在清理代谢废物，记忆被重新归档，激素在重新校准。睡得好，是成本最低的「养生」。' },
        { type: 'h2', text: '睡眠到底在修复什么' },
        { type: 'p', text: '睡眠由多个周期组成，核心是深睡（身体修复）与快速眼动睡眠（记忆与情绪整理）。两者缺一不可，缺了哪一种，第二天都会「不对劲」。' },
        { type: 'list', items: [
          { zh: '深睡：组织修复、免疫力提升、生长激素分泌', en: 'Deep sleep: tissue repair, stronger immunity, growth hormone' },
          { zh: '快速眼动：巩固记忆、调节情绪、激发创造力', en: 'REM: consolidates memory, regulates mood, sparks creativity' },
          { zh: '规律节律：稳定生物钟，让入睡与清醒都更轻松', en: 'Regular rhythm: a steady clock makes sleep and waking easier' }
        ] },
        { type: 'h2', text: '成年人到底要睡多久' },
        { type: 'p', text: '多数健康机构建议成年人每晚 7–9 小时。质量比时长更关键：连续、不被打断的睡眠，远胜零碎的长卧床。' },
        { type: 'stats', items: [
          { value: '7–9h', label: { zh: '成年人推荐睡眠', en: 'Recommended sleep (adults)' } },
          { value: '≈90min', label: { zh: '一个完整睡眠周期', en: 'One full sleep cycle' } },
          { value: '2–4%', label: { zh: '深睡应占比（过低是警报）', en: 'Deep-sleep share (too low is a red flag)' } }
        ] },
        { type: 'h2', text: '把睡眠「养」回来的六件事' },
        { type: 'list', items: [
          { zh: '固定起床时间，比固定入睡更重要', en: 'Fix your wake time — it matters more than bedtime' },
          { zh: '睡前一小时远离强光与屏幕', en: 'An hour before bed, avoid bright light and screens' },
          { zh: '卧室保持凉爽、黑暗、安静', en: 'Keep the bedroom cool, dark and quiet' },
          { zh: '白天晒晒太阳，帮生物钟校准', en: 'Get daylight by day to set your internal clock' },
          { zh: '咖啡因在下午两点前截止', en: 'Cut caffeine by early afternoon' },
          { zh: '把床只留给睡觉，不在床上工作', en: 'Reserve the bed for sleep, not for work' }
        ] },
        { type: 'callout', title: '一个被忽视的真相', text: '熬夜补回的「补觉」无法完全弥补深睡的缺失——睡眠债会累积，且很难一次性还清。' },
        { type: 'quote', text: '睡眠不是对清醒的惩罚，而是对清醒的奖赏。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '从今晚开始，把手机请出卧室。好的睡眠，是你送给自己最便宜的长寿礼物。' }
      ],
      en: [
        { type: 'lead', text: 'When we sleep, the body doesn’t shut down. The brain clears metabolic waste, memories get re-filed, hormones recalibrate. Good sleep is the cheapest “self-care” there is.' },
        { type: 'h2', text: 'What is sleep actually repairing?' },
        { type: 'p', text: 'Sleep comes in cycles, built around deep sleep (physical repair) and REM sleep (memory and emotion). You need both — miss either and the next day feels “off”.' },
        { type: 'list', items: [
          { zh: 'Deep sleep: tissue repair, stronger immunity, growth hormone', en: 'Deep sleep: tissue repair, stronger immunity, growth hormone' },
          { zh: 'REM: consolidates memory, regulates mood, sparks creativity', en: 'REM: consolidates memory, regulates mood, sparks creativity' },
          { zh: 'Regular rhythm: a steady clock makes sleep and waking easier', en: 'Regular rhythm: a steady clock makes sleep and waking easier' }
        ] },
        { type: 'h2', text: 'How much do adults actually need?' },
        { type: 'p', text: 'Most health bodies recommend 7–9 hours a night for adults. Quality beats quantity: continuous, unbroken sleep beats long but fragmented time in bed.' },
        { type: 'stats', items: [
          { value: '7–9h', label: { zh: 'Recommended sleep (adults)', en: 'Recommended sleep (adults)' } },
          { value: '≈90min', label: { zh: 'One full sleep cycle', en: 'One full sleep cycle' } },
          { value: '2–4%', label: { zh: 'Deep-sleep share (too low is a red flag)', en: 'Deep-sleep share (too low is a red flag)' } }
        ] },
        { type: 'h2', text: 'Six ways to rebuild sleep' },
        { type: 'list', items: [
          { zh: 'Fix your wake time — it matters more than bedtime', en: 'Fix your wake time — it matters more than bedtime' },
          { zh: 'An hour before bed, avoid bright light and screens', en: 'An hour before bed, avoid bright light and screens' },
          { zh: 'Keep the bedroom cool, dark and quiet', en: 'Keep the bedroom cool, dark and quiet' },
          { zh: 'Get daylight by day to set your internal clock', en: 'Get daylight by day to set your internal clock' },
          { zh: 'Cut caffeine by early afternoon', en: 'Cut caffeine by early afternoon' },
          { zh: 'Reserve the bed for sleep, not for work', en: 'Reserve the bed for sleep, not for work' }
        ] },
        { type: 'callout', title: 'An overlooked truth', text: '“Catching up” on weekends can’t fully repay lost deep sleep — sleep debt accumulates and is hard to clear in one go.' },
        { type: 'quote', text: 'Sleep is not a penalty for being awake; it is the reward for it.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'Tonight, leave the phone out of the bedroom. Good sleep is the cheapest longevity gift you can give yourself.' }
      ]
    }
  },

  {
    id: 'exercise',
    category: { zh: '运动', en: 'Movement' },
    title: { zh: '动起来：运动是最被低估的「处方药」', en: 'Move: Exercise, the Most Underrated Prescription' },
    excerpt: {
      zh: '运动不是减肥的附属，而是保护心脑、情绪与代谢的底层能力。找到你能坚持的那一种，比强度更重要。',
      en: 'Exercise isn’t just for weight — it guards heart, mood and metabolism. The best one is the one you’ll keep.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 6,
    cover: 'exercise',
    content: {
      zh: [
        { type: 'lead', text: '如果把运动写成一种药，它大概会是历史上被开具最少、却收益最广的处方药。每周一点点活动，就能改写长期健康曲线。' },
        { type: 'h2', text: '运动在身体里做了什么' },
        { type: 'p', text: '规律运动提升心肺耐力、改善胰岛素敏感性、促进脑源性神经营养因子（BDNF）分泌——简单说，它让身体和大脑都更「年轻」。' },
        { type: 'h2', text: '三种运动，各管一摊' },
        { type: 'list', items: [
          { zh: '有氧运动：护心、燃脂、提升耐力', en: 'Aerobic: protects the heart, burns fat, builds stamina' },
          { zh: '力量训练：保肌、强骨、稳住代谢', en: 'Strength: preserves muscle, strengthens bone, steadies metabolism' },
          { zh: '柔韧与平衡：防伤、改善姿态、延缓衰老', en: 'Mobility & balance: prevents injury, improves posture, slows aging' }
        ] },
        { type: 'h2', text: '多少算「够」' },
        { type: 'p', text: '通用建议：每周至少 150 分钟中等强度有氧，或 75 分钟高强度，辅以两次力量训练。拆成每天 20 分钟，远比周末突击更可持续。' },
        { type: 'stats', items: [
          { value: '150min', label: { zh: '每周中等强度有氧底线', en: 'Weekly moderate aerobic minimum' } },
          { value: '2×', label: { zh: '每周力量训练次数', en: 'Strength sessions per week' } },
          { value: '≈20min', label: { zh: '拆到每天也够用', en: 'Daily dose that adds up' } }
        ] },
        { type: 'h2', text: '坚持比强度更难得' },
        { type: 'list', items: [
          { zh: '选你真的不讨厌的运动', en: 'Pick something you don’t actually hate' },
          { zh: '把运动嵌进日常：通勤步行、爬楼', en: 'Embed it in life: walk to work, take the stairs' },
          { zh: '找搭子或社群，利用社交惯性', en: 'Find a buddy or community — use social momentum' },
          { zh: '允许「微量开始」，先动起来再说', en: 'Allow a tiny start; just move first' }
        ] },
        { type: 'callout', title: '给新手', text: '从「能聊着天完成」的强度起步，既不痛苦，也最不容易放弃。' },
        { type: 'quote', text: '你不需要成为运动员，你只需要比沙发上的自己多动一点。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '运动不是惩罚，而是给未来自己的预付款。今天动一动，明天会谢谢你。' }
      ],
      en: [
        { type: 'lead', text: 'If exercise were a pill, it would be the least prescribed yet most widely beneficial drug in history. A little movement each week rewrites your long-term health curve.' },
        { type: 'h2', text: 'What exercise does inside you' },
        { type: 'p', text: 'Regular activity raises cardiorespiratory fitness, improves insulin sensitivity and boosts BDNF — brain-derived neurotrophic factor. Simply put, it keeps body and brain younger.' },
        { type: 'h2', text: 'Three kinds of movement, three jobs' },
        { type: 'list', items: [
          { zh: 'Aerobic: protects the heart, burns fat, builds stamina', en: 'Aerobic: protects the heart, burns fat, builds stamina' },
          { zh: 'Strength: preserves muscle, strengthens bone, steadies metabolism', en: 'Strength: preserves muscle, strengthens bone, steadies metabolism' },
          { zh: 'Mobility & balance: prevents injury, improves posture, slows aging', en: 'Mobility & balance: prevents injury, improves posture, slows aging' }
        ] },
        { type: 'h2', text: 'How much is “enough”?' },
        { type: 'p', text: 'A common target: at least 150 minutes of moderate aerobic activity a week, or 75 of vigorous, plus two strength sessions. Spread over 20 minutes a day, it’s far more sustainable than a weekend blast.' },
        { type: 'stats', items: [
          { value: '150min', label: { zh: 'Weekly moderate aerobic minimum', en: 'Weekly moderate aerobic minimum' } },
          { value: '2×', label: { zh: 'Strength sessions per week', en: 'Strength sessions per week' } },
          { value: '≈20min', label: { zh: 'Daily dose that adds up', en: 'Daily dose that adds up' } }
        ] },
        { type: 'h2', text: 'Consistency beats intensity' },
        { type: 'list', items: [
          { zh: 'Pick something you don’t actually hate', en: 'Pick something you don’t actually hate' },
          { zh: 'Embed it in life: walk to work, take the stairs', en: 'Embed it in life: walk to work, take the stairs' },
          { zh: 'Find a buddy or community — use social momentum', en: 'Find a buddy or community — use social momentum' },
          { zh: 'Allow a tiny start; just move first', en: 'Allow a tiny start; just move first' }
        ] },
        { type: 'callout', title: 'For beginners', text: 'Start at an intensity where you can still hold a conversation — it’s painless and the hardest to quit.' },
        { type: 'quote', text: 'You don’t need to be an athlete — just move a little more than the you on the couch.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'Exercise isn’t punishment; it’s a down-payment to your future self. Move a little today, and tomorrow will thank you.' }
      ]
    }
  },

  {
    id: 'jogging',
    category: { zh: '慢跑', en: 'Jogging' },
    title: { zh: '慢跑：最朴素的自由运动', en: 'Jogging: The Simplest Freedom of Movement' },
    excerpt: {
      zh: '一双跑鞋、一条路，慢跑把锻炼变成可以随时开始的日常。慢，才是大多数人能长期坚持的秘诀。',
      en: 'A pair of shoes and a path — jogging turns exercise into something you can start anytime. Slow is the secret to staying with it.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 6,
    cover: 'jogging',
    content: {
      zh: [
        { type: 'lead', text: '慢跑的魅力在于「低门槛」：不需要器械、不需要会员、不需要天赋。它能成为你与城市、与自然独处的一段安静时光。' },
        { type: 'h2', text: '为什么「慢」反而更好' },
        { type: 'p', text: '对大多数人而言，能边跑边聊天的「轻松配速」最安全，也最容易养成习惯。太快容易受伤、容易放弃；慢，才能长久。' },
        { type: 'h2', text: '开始前的三件小事' },
        { type: 'list', items: [
          { zh: '选一双合脚、有缓冲的跑鞋', en: 'Pick well-fitted, cushioned running shoes' },
          { zh: '在平坦、安全的路线起步', en: 'Start on flat, safe routes' },
          { zh: '跑走结合：跑一分钟、走一分钟', en: 'Run-walk: one minute running, one minute walking' }
        ] },
        { type: 'h2', text: '一份新手四周计划' },
        { type: 'list', items: [
          { zh: '第1周：每周3次，跑走各1分钟×10组', en: 'Week 1: 3×/week, 1 min run + 1 min walk ×10' },
          { zh: '第2周：跑2分钟、走1分钟×8组', en: 'Week 2: 2 min run + 1 min walk ×8' },
          { zh: '第3周：连续慢跑15–20分钟', en: 'Week 3: jog continuously 15–20 min' },
          { zh: '第4周：尝试稳定慢跑30分钟', en: 'Week 4: aim for a steady 30-min jog' }
        ] },
        { type: 'callout', title: '别忽视', text: '膝盖不适就停下休息，循序渐进比「咬牙硬撑」更专业。' },
        { type: 'h2', text: '跑后别省的两步' },
        { type: 'list', items: [
          { zh: '慢走5分钟再停，给身体缓冲', en: 'Walk slowly 5 min before stopping, to cool down' },
          { zh: '简单拉伸小腿与大腿', en: 'Lightly stretch calves and thighs' }
        ] },
        { type: 'quote', text: '慢跑不是逃离生活，而是把自己跑回当下。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '不必追求配速与里程。某天你发现自己期待出门跑步时，慢跑就已经成了你的习惯。' }
      ],
      en: [
        { type: 'lead', text: 'The charm of jogging is its low bar: no equipment, no membership, no talent required. It can become a quiet hour alone with the city, or with nature.' },
        { type: 'h2', text: 'Why “slow” is actually better' },
        { type: 'p', text: 'For most people, an easy “conversational pace” is safest and easiest to turn into a habit. Too fast invites injury and quitting; slow is what lasts.' },
        { type: 'h2', text: 'Three small things before you start' },
        { type: 'list', items: [
          { zh: 'Pick well-fitted, cushioned running shoes', en: 'Pick well-fitted, cushioned running shoes' },
          { zh: 'Start on flat, safe routes', en: 'Start on flat, safe routes' },
          { zh: 'Run-walk: one minute running, one minute walking', en: 'Run-walk: one minute running, one minute walking' }
        ] },
        { type: 'h2', text: 'A four-week plan for beginners' },
        { type: 'list', items: [
          { zh: 'Week 1: 3×/week, 1 min run + 1 min walk ×10', en: 'Week 1: 3×/week, 1 min run + 1 min walk ×10' },
          { zh: 'Week 2: 2 min run + 1 min walk ×8', en: 'Week 2: 2 min run + 1 min walk ×8' },
          { zh: 'Week 3: jog continuously 15–20 min', en: 'Week 3: jog continuously 15–20 min' },
          { zh: 'Week 4: aim for a steady 30-min jog', en: 'Week 4: aim for a steady 30-min jog' }
        ] },
        { type: 'callout', title: 'Don’t ignore', text: 'If your knees complain, stop and rest. Gradual beats “pushing through the pain” every time.' },
        { type: 'h2', text: 'Two steps not to skip after running' },
        { type: 'list', items: [
          { zh: 'Walk slowly 5 min before stopping, to cool down', en: 'Walk slowly 5 min before stopping, to cool down' },
          { zh: 'Lightly stretch calves and thighs', en: 'Lightly stretch calves and thighs' }
        ] },
        { type: 'quote', text: 'Jogging isn’t escaping life — it’s running yourself back to the present.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'Forget pace and mileage. The day you find yourself looking forward to going out, jogging has already become your habit.' }
      ]
    }
  },

  {
    id: 'aerobic',
    category: { zh: '有氧训练', en: 'Aerobic' },
    title: { zh: '有氧训练：给心肺做一次深呼吸', en: 'Aerobic Training: A Long Exhale for Your Heart' },
    excerpt: {
      zh: '快走、骑行、游泳、跳舞——有氧训练提升的是你「持续供能」的能力，也是心血管最忠实的朋友。',
      en: 'Brisk walks, cycling, swimming, dancing — aerobic training builds your staying power and befriends your heart.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 6,
    cover: 'aerobic',
    content: {
      zh: [
        { type: 'lead', text: '有氧训练的本质，是让心跳平稳地升高、让身体学会高效用氧。它不刺激、不炫技，却是长寿研究里出镜率最高的习惯之一。' },
        { type: 'h2', text: '有氧在练什么' },
        { type: 'p', text: '长期有氧会增大心脏每搏输出量、增加毛细血管密度、提升线粒体效率——也就是说，同样的活动，你会更轻松。' },
        { type: 'h2', text: '怎么判断「中等强度」' },
        { type: 'list', items: [
          { zh: '能说话但唱不了歌', en: 'You can talk but not sing' },
          { zh: '微微出汗、呼吸加深', en: 'Light sweat, deeper breathing' },
          { zh: '心率约为（220−年龄）的 50%–70%', en: 'Heart rate around 50–70% of 220 minus your age' }
        ] },
        { type: 'h2', text: '把有氧塞进生活' },
        { type: 'list', items: [
          { zh: '通勤快走或骑行', en: 'Brisk-walk or cycle your commute' },
          { zh: '午间爬楼代替电梯', en: 'Take the stairs instead of the lift at noon' },
          { zh: '跟视频跳一段操', en: 'Follow a short home-workout video' },
          { zh: '周末长距离散步或骑行', en: 'Long walks or rides on weekends' }
        ] },
        { type: 'stats', items: [
          { value: '150min', label: { zh: '每周推荐总量', en: 'Weekly recommended total' } },
          { value: '3–5×', label: { zh: '理想频率', en: 'Ideal frequency' } },
          { value: 'Zone2', label: { zh: '最舒服的燃脂区间', en: 'The comfortable fat-burn zone' } }
        ] },
        { type: 'callout', title: '小贴士', text: '「Zone 2」低强度有氧最易被坚持，也最利于脂肪供能，适合大多数人日常。' },
        { type: 'quote', text: '有氧不是消耗时间，而是为时间充值。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '选一种你喜欢的有氧，让它像刷牙一样自然。心肺强健，是一切活力的底色。' }
      ],
      en: [
        { type: 'lead', text: 'Aerobic training is simply letting your heart rate rise steadily and teaching the body to use oxygen efficiently. It’s unglamorous — yet one of the most-cited habits in longevity research.' },
        { type: 'h2', text: 'What aerobic training trains' },
        { type: 'p', text: 'Over time, aerobic work increases stroke volume, capillary density and mitochondrial efficiency — meaning the same activity feels easier.' },
        { type: 'h2', text: 'How to tell it’s “moderate”' },
        { type: 'list', items: [
          { zh: 'You can talk but not sing', en: 'You can talk but not sing' },
          { zh: 'Light sweat, deeper breathing', en: 'Light sweat, deeper breathing' },
          { zh: 'Heart rate around 50–70% of 220 minus your age', en: 'Heart rate around 50–70% of 220 minus your age' }
        ] },
        { type: 'h2', text: 'Sneak aerobic into life' },
        { type: 'list', items: [
          { zh: 'Brisk-walk or cycle your commute', en: 'Brisk-walk or cycle your commute' },
          { zh: 'Take the stairs instead of the lift at noon', en: 'Take the stairs instead of the lift at noon' },
          { zh: 'Follow a short home-workout video', en: 'Follow a short home-workout video' },
          { zh: 'Long walks or rides on weekends', en: 'Long walks or rides on weekends' }
        ] },
        { type: 'stats', items: [
          { value: '150min', label: { zh: 'Weekly recommended total', en: 'Weekly recommended total' } },
          { value: '3–5×', label: { zh: 'Ideal frequency', en: 'Ideal frequency' } },
          { value: 'Zone2', label: { zh: 'The comfortable fat-burn zone', en: 'The comfortable fat-burn zone' } }
        ] },
        { type: 'callout', title: 'Tip', text: 'Low-intensity “Zone 2” aerobic is the easiest to keep and best for fat-burning — ideal for most people’s daily life.' },
        { type: 'quote', text: 'Aerobic isn’t spending time — it’s topping up time.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'Pick an aerobic you enjoy and make it as natural as brushing your teeth. Strong lungs and heart are the base of all vitality.' }
      ]
    }
  },

  {
    id: 'yoga',
    category: { zh: '瑜伽', en: 'Yoga' },
    title: { zh: '瑜伽：在动作里学会呼吸', en: 'Yoga: Learning to Breathe Through Movement' },
    excerpt: {
      zh: '瑜伽把身体、呼吸与专注拧成一股绳。它不一定让你柔软，但常能让你更安稳。',
      en: 'Yoga braids body, breath and attention together. It may not make you flexible — but often calmer.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 6,
    cover: 'yoga',
    content: {
      zh: [
        { type: 'lead', text: '瑜伽的终点不一定是高难度体式，而是「此刻，我在」。在一吸一呼之间，身体松开，思绪也跟着落地。' },
        { type: 'h2', text: '瑜伽到底练什么' },
        { type: 'p', text: '体式（Asana）训练力量与柔韧，调息（Pranayama）调节自律神经，冥想（Dhyana）沉淀注意力。三者叠加，是身心的整体练习。' },
        { type: 'h2', text: '常见流派怎么选' },
        { type: 'list', items: [
          { zh: '哈他：节奏舒缓，适合入门', en: 'Hatha: slow pace, great for beginners' },
          { zh: '流瑜伽（Vinyasa）：连贯流动，偏有氧', en: 'Vinyasa: flowing and continuous, more aerobic' },
          { zh: '阴瑜伽：长时间停留，放松筋膜', en: 'Yin: long holds, relaxes fascia' },
          { zh: '艾扬格：借助辅具，强调精准', en: 'Iyengar: props-based, emphasizes precision' }
        ] },
        { type: 'h2', text: '每天十分钟也能有用' },
        { type: 'list', items: [
          { zh: '山式站立：找回中正姿态', en: 'Mountain pose: rediscover aligned posture' },
          { zh: '猫牛式：松动脊柱', en: 'Cat-cow: mobilizes the spine' },
          { zh: '下犬式：拉伸全身后侧', en: 'Downward dog: stretches the back line' },
          { zh: '婴儿式：主动休息', en: 'Child’s pose: active rest' }
        ] },
        { type: 'callout', title: '新手提醒', text: '不痛≠无效；忍痛才是风险。尊重身体的边界，比「做到位」更重要。' },
        { type: 'quote', text: '瑜伽不是把脚放到头上，而是把心安放在此刻。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '铺开垫子，不为了变成别人，只为了更靠近自己。十分钟，也是给身体的一封情书。' }
      ],
      en: [
        { type: 'lead', text: 'The goal of yoga isn’t necessarily an advanced pose — it’s “here I am, now.” Between one breath and the next, the body loosens and the mind lands.' },
        { type: 'h2', text: 'What yoga actually trains' },
        { type: 'p', text: 'Asana builds strength and flexibility, Pranayama balances the autonomic nervous system, Dhyana settles attention. Together they are a whole-person practice.' },
        { type: 'h2', text: 'How to choose a style' },
        { type: 'list', items: [
          { zh: 'Hatha: slow pace, great for beginners', en: 'Hatha: slow pace, great for beginners' },
          { zh: 'Vinyasa: flowing and continuous, more aerobic', en: 'Vinyasa: flowing and continuous, more aerobic' },
          { zh: 'Yin: long holds, relaxes fascia', en: 'Yin: long holds, relaxes fascia' },
          { zh: 'Iyengar: props-based, emphasizes precision', en: 'Iyengar: props-based, emphasizes precision' }
        ] },
        { type: 'h2', text: 'Ten minutes a day still helps' },
        { type: 'list', items: [
          { zh: 'Mountain pose: rediscover aligned posture', en: 'Mountain pose: rediscover aligned posture' },
          { zh: 'Cat-cow: mobilizes the spine', en: 'Cat-cow: mobilizes the spine' },
          { zh: 'Downward dog: stretches the back line', en: 'Downward dog: stretches the back line' },
          { zh: 'Child’s pose: active rest', en: 'Child’s pose: active rest' }
        ] },
        { type: 'callout', title: 'For beginners', text: 'No pain ≠ no effect; pain is the real risk. Respecting your edge matters more than “getting it right.”' },
        { type: 'quote', text: 'Yoga isn’t putting your foot on your head — it’s placing your mind in this moment.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'Unroll the mat not to become someone else, but to get closer to yourself. Ten minutes is still a love letter to your body.' }
      ]
    }
  },

  {
    id: 'pilates',
    category: { zh: '普拉提', en: 'Pilates' },
    title: { zh: '普拉提：用核心托住整个人', en: 'Pilates: Supporting the Whole Body from Its Core' },
    excerpt: {
      zh: '普拉提强调「核心控制」与精准发力，是改善姿态、缓解腰酸、重建身体觉知的温和利器。',
      en: 'Pilates trains core control and precise movement — a gentle tool for posture, back pain and body awareness.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 6,
    cover: 'pilates',
    content: {
      zh: [
        { type: 'lead', text: '普拉提不追求大汗淋漓，而追求「控制」。它从深层核心出发，教你用更聪明的方式移动，让日常姿态悄悄变好。' },
        { type: 'h2', text: '普拉提的核心是什么' },
        { type: 'p', text: '这里的「核心」不止腹肌，而是从膈肌到骨盆底的整个躯干稳定系统。它像人体的「地基」，地基稳，动作才不容易走形、受伤。' },
        { type: 'h2', text: '它适合谁' },
        { type: 'list', items: [
          { zh: '久坐、含胸、腰酸的上班族', en: 'Desk workers who slouch and get back aches' },
          { zh: '产后需要重建核心力量的人', en: 'Postnatal people rebuilding core strength' },
          { zh: '想改善姿态与平衡的人', en: 'Anyone wanting better posture and balance' },
          { zh: '作为其他运动的辅助训练', en: 'As support training for other sports' }
        ] },
        { type: 'h2', text: '几个经典入门动作' },
        { type: 'list', items: [
          { zh: '骨盆卷动（Pelvic Curl）：唤醒脊柱', en: 'Pelvic Curl: wakes up the spine' },
          { zh: '百次拍击（Hundred）：激活核心', en: 'The Hundred: fires up the core' },
          { zh: '死虫式（Dead Bug）：练稳定不伤腰', en: 'Dead Bug: stability without stressing the back' },
          { zh: '桥式（Bridge）：强化臀与核心', en: 'Bridge: strengthens glutes and core' }
        ] },
        { type: 'callout', title: '和瑜伽有什么不同', text: '瑜伽更重柔韧与静心，普拉提更重力量控制与姿态矫正——二者互补，常可搭配。' },
        { type: 'quote', text: '真正的力量，是先学会收敛，而不是一味使蛮力。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '普拉提教会身体的，是一种「克制的力」。当你能稳稳托住自己，生活里的许多紧绷也会松下来。' }
      ],
      en: [
        { type: 'lead', text: 'Pilates isn’t about sweating buckets — it’s about control. Starting from the deep core, it teaches you to move smarter, so everyday posture quietly improves.' },
        { type: 'h2', text: 'What is the “core” in Pilates?' },
        { type: 'p', text: 'Here “core” means more than abs — it’s the whole trunk-stabilizing system from the diaphragm to the pelvic floor. Think of it as the body’s foundation; steady foundation, fewer wonky, injury-prone movements.' },
        { type: 'h2', text: 'Who is it for?' },
        { type: 'list', items: [
          { zh: 'Desk workers who slouch and get back aches', en: 'Desk workers who slouch and get back aches' },
          { zh: 'Postnatal people rebuilding core strength', en: 'Postnatal people rebuilding core strength' },
          { zh: 'Anyone wanting better posture and balance', en: 'Anyone wanting better posture and balance' },
          { zh: 'As support training for other sports', en: 'As support training for other sports' }
        ] },
        { type: 'h2', text: 'A few classic starters' },
        { type: 'list', items: [
          { zh: 'Pelvic Curl: wakes up the spine', en: 'Pelvic Curl: wakes up the spine' },
          { zh: 'The Hundred: fires up the core', en: 'The Hundred: fires up the core' },
          { zh: 'Dead Bug: stability without stressing the back', en: 'Dead Bug: stability without stressing the back' },
          { zh: 'Bridge: strengthens glutes and core', en: 'Bridge: strengthens glutes and core' }
        ] },
        { type: 'callout', title: 'How it differs from yoga', text: 'Yoga leans toward flexibility and stillness; Pilates leans toward strength control and posture correction — they complement each other well.' },
        { type: 'quote', text: 'Real strength is learning to contain, not to force.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'What Pilates teaches the body is a “restrained strength.” When you can steady hold yourself, much of life’s tension loosens too.' }
      ]
    }
  },

  {
    id: 'taichi',
    category: { zh: '太极', en: 'Tai Chi' },
    title: { zh: '太极：慢下来，反而更有力', en: 'Tai Chi: Slower, Yet Stronger' },
    excerpt: {
      zh: '行云流水的动作里，藏着东方对「柔能克刚」的理解。太极是适合一生的低冲击运动。',
      en: 'In its flowing motion lives an Eastern wisdom: softness overcomes force. Tai chi is a lifelong, low-impact practice.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 6,
    cover: 'taichi',
    content: {
      zh: [
        { type: 'lead', text: '太极看起来慢，却一点不弱。它在极慢的节奏里训练平衡、专注与放松——一套动作，既是运动，也是冥想。' },
        { type: 'h2', text: '太极练的是什么' },
        { type: 'p', text: '重心转移、虚实转换、意随身走——太极在提升下肢力量与平衡的同时，也安抚神经系统，被称为「运动中的冥想」。' },
        { type: 'h2', text: '为什么各年龄都适合' },
        { type: 'list', items: [
          { zh: '低冲击：关节友好，几乎零受伤风险', en: 'Low-impact: joint-friendly, near-zero injury risk' },
          { zh: '练平衡：显著降低老年人跌倒风险', en: 'Builds balance: cuts fall risk in older adults' },
          { zh: '调呼吸：帮助放松、改善睡眠', en: 'Regulates breath: aids relaxation and sleep' },
          { zh: '养专注：动静之间训练觉察', en: 'Trains focus: builds awareness in motion and stillness' }
        ] },
        { type: 'h2', text: '从哪入手' },
        { type: 'list', items: [
          { zh: '跟学简化二十四式（国标入门）', en: 'Learn the simplified 24-form (the standard starter)' },
          { zh: '每天晨练10–20分钟', en: 'Practice 10–20 min each morning' },
          { zh: '重心放低、动作连贯如行云', en: 'Lower the stance, move like flowing water' },
          { zh: '配合自然、深长的腹式呼吸', en: 'Pair with natural, deep abdominal breathing' }
        ] },
        { type: 'stats', items: [
          { value: '低冲击', label: { zh: '对关节极其友好', en: 'Extremely joint-friendly' } },
          { value: '↓跌倒', label: { zh: '显著降低跌倒风险', en: 'Cuts fall risk in older adults' } },
          { value: '一生', label: { zh: '可练到老的运动', en: 'A practice for life' } }
        ] },
        { type: 'callout', title: '研究怎么说', text: '多项研究指出，规律太极有助于改善平衡、降低血压与焦虑水平。' },
        { type: 'quote', text: '不是世界慢了，是你终于跟上了它的节奏。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '不必追求招式标准如大师。每天慢练一刻钟，身体会记住那种「稳」。' }
      ],
      en: [
        { type: 'lead', text: 'Tai chi looks slow, yet it is far from weak. At a very slow tempo it trains balance, focus and relaxation — a single routine that is both exercise and meditation.' },
        { type: 'h2', text: 'What tai chi trains' },
        { type: 'p', text: 'Shifting weight, alternating empty and full, moving with intention — tai chi builds lower-body strength and balance while calming the nervous system. It’s been called “meditation in motion.”' },
        { type: 'h2', text: 'Why it suits every age' },
        { type: 'list', items: [
          { zh: 'Low-impact: joint-friendly, near-zero injury risk', en: 'Low-impact: joint-friendly, near-zero injury risk' },
          { zh: 'Builds balance: cuts fall risk in older adults', en: 'Builds balance: cuts fall risk in older adults' },
          { zh: 'Regulates breath: aids relaxation and sleep', en: 'Regulates breath: aids relaxation and sleep' },
          { zh: 'Trains focus: builds awareness in motion and stillness', en: 'Trains focus: builds awareness in motion and stillness' }
        ] },
        { type: 'h2', text: 'Where to begin' },
        { type: 'list', items: [
          { zh: 'Learn the simplified 24-form (the standard starter)', en: 'Learn the simplified 24-form (the standard starter)' },
          { zh: 'Practice 10–20 min each morning', en: 'Practice 10–20 min each morning' },
          { zh: 'Lower the stance, move like flowing water', en: 'Lower the stance, move like flowing water' },
          { zh: 'Pair with natural, deep abdominal breathing', en: 'Pair with natural, deep abdominal breathing' }
        ] },
        { type: 'stats', items: [
          { value: 'Low-impact', label: { zh: 'Extremely joint-friendly', en: 'Extremely joint-friendly' } },
          { value: '↓falls', label: { zh: 'Cuts fall risk in older adults', en: 'Cuts fall risk in older adults' } },
          { value: 'For life', label: { zh: 'A practice for life', en: 'A practice for life' } }
        ] },
        { type: 'callout', title: 'What research says', text: 'Multiple studies link regular tai chi with better balance and lower blood pressure and anxiety.' },
        { type: 'quote', text: 'The world didn’t slow down — you finally matched its rhythm.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'You needn’t move like a master. Fifteen slow minutes a day, and the body will remember that “steadiness.”' }
      ]
    }
  },

  {
    id: 'meditation',
    category: { zh: '静坐', en: 'Meditation' },
    title: { zh: '静坐：给大脑一次关机重启', en: 'Sitting Still: A Reboot for the Busy Mind' },
    excerpt: {
      zh: '静坐不是放空，而是练习「看见」自己的念头。每天几分钟，焦虑与注意力都会悄悄改善。',
      en: 'Meditation isn’t emptying the mind — it’s practicing noticing it. A few minutes a day shifts anxiety and focus.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 5,
    cover: 'meditation',
    content: {
      zh: [
        { type: 'lead', text: '我们习惯不停地处理信息，却很少练习「什么都不做」。静坐，就是把大脑从自动驾驶里轻轻拉回来。' },
        { type: 'h2', text: '静坐到底在练什么' },
        { type: 'p', text: '它训练的是「注意力肌肉」：把飘走的念头温柔地拉回呼吸。反复拉回的过程，本身就是训练专注与情绪调节。' },
        { type: 'h2', text: '科学支持的好处' },
        { type: 'list', items: [
          { zh: '降低压力激素皮质醇', en: 'Lowers cortisol, the stress hormone' },
          { zh: '改善注意力与工作记忆', en: 'Improves attention and working memory' },
          { zh: '缓解焦虑与低落情绪', en: 'Eases anxiety and low mood' },
          { zh: '帮助入睡、提升睡眠质量', en: 'Helps you fall asleep and sleep better' }
        ] },
        { type: 'h2', text: '零基础三分钟入门' },
        { type: 'list', items: [
          { zh: '找个安静处，坐姿端正、不瘫不僵', en: 'Find a quiet spot; sit upright, not slumped' },
          { zh: '闭眼，把注意放到呼吸的进出', en: 'Close your eyes; rest attention on the breath' },
          { zh: '走神了就轻轻回来，不必自责', en: 'When the mind wanders, gently return — no blame' },
          { zh: '用计时器，从3分钟慢慢拉长', en: 'Use a timer; lengthen from 3 minutes slowly' }
        ] },
        { type: 'callout', title: '常见卡点', text: '「我静不下来」很正常——冥想练的正是「发现自己走神并回来」这件事本身。' },
        { type: 'quote', text: '你不需要清空大脑，你只需要一次次温柔地把注意力带回家。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '静坐不是逃离生活，而是更有力气回到生活。从今天的三分钟开始，给自己一个停顿。' }
      ],
      en: [
        { type: 'lead', text: 'We’re used to processing information non-stop, yet rarely practice “doing nothing.” Sitting still gently pulls the brain out of autopilot.' },
        { type: 'h2', text: 'What meditation actually trains' },
        { type: 'p', text: 'It trains the “attention muscle”: softly bringing a wandering thought back to the breath. The repeated return is itself the training in focus and emotional regulation.' },
        { type: 'h2', text: 'Benefits the science supports' },
        { type: 'list', items: [
          { zh: 'Lowers cortisol, the stress hormone', en: 'Lowers cortisol, the stress hormone' },
          { zh: 'Improves attention and working memory', en: 'Improves attention and working memory' },
          { zh: 'Eases anxiety and low mood', en: 'Eases anxiety and low mood' },
          { zh: 'Helps you fall asleep and sleep better', en: 'Helps you fall asleep and sleep better' }
        ] },
        { type: 'h2', text: 'A zero-base, three-minute start' },
        { type: 'list', items: [
          { zh: 'Find a quiet spot; sit upright, not slumped', en: 'Find a quiet spot; sit upright, not slumped' },
          { zh: 'Close your eyes; rest attention on the breath', en: 'Close your eyes; rest attention on the breath' },
          { zh: 'When the mind wanders, gently return — no blame', en: 'When the mind wanders, gently return — no blame' },
          { zh: 'Use a timer; lengthen from 3 minutes slowly', en: 'Use a timer; lengthen from 3 minutes slowly' }
        ] },
        { type: 'callout', title: 'Common stuck point', text: '“I can’t quiet my mind” is normal — meditation trains exactly the act of noticing you wandered and coming back.' },
        { type: 'quote', text: 'You don’t need to empty the mind — just gently bring attention home, again and again.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'Sitting still isn’t escaping life; it’s returning to it with more strength. Start with three minutes today — give yourself a pause.' }
      ]
    }
  },

  {
    id: 'hiking',
    category: { zh: '爬山', en: 'Hiking' },
    title: { zh: '爬山：把健身房搬进山野', en: 'Hiking: The Gym That Is the Mountains' },
    excerpt: {
      zh: '爬山把有氧、力量与大自然一并打包。一次次登顶，练的是腿，养的是心。',
      en: 'Hiking bundles cardio, strength and nature together. Every summit trains the legs and soothes the mind.'
    },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' },
    date: '2026-07-14',
    readingTime: 6,
    cover: 'hiking',
    content: {
      zh: [
        { type: 'lead', text: '山路从不平坦，却因此完整：上坡练腿与心肺，下坡练控制与平衡，沿途的风景，则是免费的心理按摩。' },
        { type: 'h2', text: '爬山给了你什么' },
        { type: 'p', text: '它是天然的综合训练——负重爬升强化下肢与核心，不规则路面锻炼本体感觉，森林环境还能降低压力指标。' },
        { type: 'h2', text: '出发前的安全清单' },
        { type: 'list', items: [
          { zh: '查天气与路线，量力而行', en: 'Check weather and route; match it to your ability' },
          { zh: '穿防滑、护踝的徒步鞋', en: 'Wear grippy, ankle-supporting hiking shoes' },
          { zh: '带足水与高能量零食', en: 'Bring enough water and high-energy snacks' },
          { zh: '告知去向，结伴不落单', en: 'Tell someone where you’re going; don’t hike alone' },
          { zh: '遵循「无痕山林」：不留垃圾', en: 'Follow Leave-No-Trace: pack out all litter' }
        ] },
        { type: 'h2', text: '让爬山可持续' },
        { type: 'list', items: [
          { zh: '新手从缓坡短途开始', en: 'Beginners: start with gentle, short trails' },
          { zh: '用登山杖减轻膝盖压力', en: 'Use poles to ease knee pressure' },
          { zh: '上坡小步高频，省力的关键', en: 'Uphill: short, frequent steps save energy' },
          { zh: '下山重心后坐、放慢速度', en: 'Downhill: sit back, slow down' }
        ] },
        { type: 'stats', items: [
          { value: '综合', label: { zh: '有氧+力量+平衡', en: 'Cardio + strength + balance' } },
          { value: '自然', label: { zh: '免费的心理疗愈', en: 'Free nature therapy' } },
          { value: '递增', label: { zh: '难度循序渐进', en: 'Ramp difficulty gradually' } }
        ] },
        { type: 'callout', title: '给膝盖的提醒', text: '下山最伤膝。放慢、小步、借杖，比逞强更专业。' },
        { type: 'quote', text: '山顶的风景，是给坚持者的报酬。', cite: ' —— 净食编辑部' },
        { type: 'p', text: '不必挑战险峰。找一座温柔的小山，周末走去，回来时你会发现自己轻了一些，也稳了一些。' }
      ],
      en: [
        { type: 'lead', text: 'Mountain paths are never flat — and that’s what makes them whole: ups train legs and lungs, downs train control and balance, and the view along the way is free therapy.' },
        { type: 'h2', text: 'What hiking gives you' },
        { type: 'p', text: 'It’s a natural all-round workout — loaded climbs strengthen legs and core, uneven ground trains proprioception, and forest settings lower stress markers.' },
        { type: 'h2', text: 'Safety checklist before you go' },
        { type: 'list', items: [
          { zh: 'Check weather and route; match it to your ability', en: 'Check weather and route; match it to your ability' },
          { zh: 'Wear grippy, ankle-supporting hiking shoes', en: 'Wear grippy, ankle-supporting hiking shoes' },
          { zh: 'Bring enough water and high-energy snacks', en: 'Bring enough water and high-energy snacks' },
          { zh: 'Tell someone where you’re going; don’t hike alone', en: 'Tell someone where you’re going; don’t hike alone' },
          { zh: 'Follow Leave-No-Trace: pack out all litter', en: 'Follow Leave-No-Trace: pack out all litter' }
        ] },
        { type: 'h2', text: 'Make hiking sustainable' },
        { type: 'list', items: [
          { zh: 'Beginners: start with gentle, short trails', en: 'Beginners: start with gentle, short trails' },
          { zh: 'Use poles to ease knee pressure', en: 'Use poles to ease knee pressure' },
          { zh: 'Uphill: short, frequent steps save energy', en: 'Uphill: short, frequent steps save energy' },
          { zh: 'Downhill: sit back, slow down', en: 'Downhill: sit back, slow down' }
        ] },
        { type: 'stats', items: [
          { value: 'All-in', label: { zh: 'Cardio + strength + balance', en: 'Cardio + strength + balance' } },
          { value: 'Nature', label: { zh: 'Free nature therapy', en: 'Free nature therapy' } },
          { value: 'Gradual', label: { zh: 'Ramp difficulty gradually', en: 'Ramp difficulty gradually' } }
        ] },
        { type: 'callout', title: 'A note for your knees', text: 'Downhills are hardest on the knees. Slow, small steps and poles beat showing off every time.' },
        { type: 'quote', text: 'The view from the top is the reward for those who persist.', cite: ' — PureEat Editorial' },
        { type: 'p', text: 'You needn’t chase perilous peaks. Find a gentle hill, walk up on a weekend, and you’ll come back a little lighter and a little steadier.' }
      ]
    }
  }
]

export function getArticle(id) {
  return articles.find((a) => a.id === id) || null
}

/**
 * 文章数据（中英文结构化分块）。
 * 每篇文章中文内容 ≥1500 字。
 */
import { articlesExtra } from './articles-extra/index.js'

export const articles = [
  ...articlesExtra,
  {
    id: 'mediterranean',
    category: { zh: '饮食法深读', en: 'Diet Deep-Dive' },
    title: { zh: '地中海饮食：全球公认的长寿秘诀', en: 'Mediterranean Diet: The World’s Recognized Longevity Secret' },
    excerpt: { zh: '它不靠计算卡路里，也不禁止任何食物——只是把餐桌交还给自然。为什么营养学界连续多年把它评为「最佳综合饮食」？本文带你全面了解这一长寿模式。', en: 'No calorie math, no forbidden foods — just a table returned to nature. Why do experts keep naming it the best overall diet?' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 10, cover: 'mediterranean',
    content: {
      zh: [
        { type: 'lead', text: '在意大利南部的阳光里，在希腊小岛的餐桌上，人们用橄榄油、番茄、深海鱼和一杯红酒，悄悄活成了世界上最长寿的群体之一。这并非偶然，而是一套被科学反复验证的饮食方式——地中海饮食。它不是一种「减肥食谱」，而是一种延续了数千年的生活方式。联合国教科文组织于2013年将地中海饮食列入人类非物质文化遗产名录，这不仅是对一种饮食习惯的认可，更是对一种生活智慧的致敬。' },
        { type: 'callout', title: { zh: '一句话记住', en: 'One line to remember' }, text: { zh: '地中海饮食不是「少吃」，而是把更多天然食物请上餐桌。', en: 'It is not about eating less — it is about inviting more real food to the table.' } },
        { type: 'h2', text: '什么是地中海饮食？' },
        { type: 'p', text: '地中海饮食并非某一种固定的「食谱」，而是沿地中海国家（希腊、意大利南部、西班牙、摩洛哥等）传统饮食模式的总称。它的核心不是限制，而是「以植物为底盘，让好脂肪成为主角」。与西方高糖高脂的现代加工食品饮食不同，地中海饮食把蔬菜、豆类、全谷物和坚果放在盘子的中心，肉类退居配角，而橄榄油则取代了黄油与动物油，成为日常烹饪的灵魂。这种饮食方式强调的是食物的整体性——吃的是完整的食材而非提取的营养素，享受的是与家人朋友共进晚餐的社交时光，而非孤独地计算每一克碳水。' },
        { type: 'quote', text: '我们不是在「节食」，我们只是在用祖先的方式吃饭。他们活得比我们长，也吃得比我们快乐。', cite: ' —— 一位克里特岛老人的家常话' },
        { type: 'h2', text: '餐盘里到底有什么？' },
        { type: 'p', text: '想象一个典型的地中海家庭晚餐：桌上摆着一大碗混合了新鲜番茄、黄瓜、洋葱和羊奶酪的沙拉，淋上一勺特级初榨橄榄油和少许柠檬汁。主食是烤茄子配全麦面包，或者一份炖得软烂的鹰嘴豆汤。主菜可能是烤鱼或烤鸡（但分量适中），旁边是一小杯红酒。甜点？也许是一份新鲜水果拼盘，或者一小块蜂蜜酸奶。这就是地中海饮食的真实模样——丰盛但不油腻，丰富但不复杂。' },
        { type: 'list', items: [
          { zh: '特级初榨橄榄油：主要脂肪来源，富含单不饱和脂肪酸和多酚类抗氧化物质，被誉为「液体黄金」', en: 'Extra-virgin olive oil: main fat source, rich in monounsaturated fats and polyphenols' },
          { zh: '蔬菜与水果：每餐大量，颜色越丰富越好。番茄、洋葱、西葫芦、茄子、柠檬、无花果是厨房主角', en: 'Vegetables & fruit: abundant at every meal, more colors better' },
          { zh: '豆类与坚果：扁豆、鹰嘴豆提供植物蛋白；杏仁、核桃提供健康脂肪和微量元素', en: 'Legumes & nuts: plant protein and healthy fats from lentils, chickpeas, almonds, walnuts' },
          { zh: '全谷物：面包、燕麦、糙米替代精白米面。传统面包只用面粉、水、盐和酵母四种原料发酵制成', en: 'Whole grains: bread, oats, brown rice over refined carbs' },
          { zh: '鱼类与海鲜：每周至少两次补充Omega-3。沙丁鱼、鲭鱼等小型深海鱼营养密度更高且价格亲民', en: 'Fish & seafood: twice weekly for Omega-3. Small deep-sea fish are nutrient-dense' },
          { zh: '禽类与蛋适量；红肉尽量少吃。在地中海地区红肉更多是节日享受而非日常必需', en: 'Poultry & eggs in moderation; red meat is occasional treat not daily necessity' }
        ] },
        { type: 'h2', text: '科学说了什么？' },
        { type: 'p', text: '从20世纪50年代的七国研究开始，科学家们就注意到克里特岛居民的心血管疾病死亡率远低于北欧和美国同龄人。此后几十年间大量随机对照试验与队列研究一致显示，坚持地中海饮食对心血管健康尤其友好，同时还能降低2型糖尿病风险、改善认知功能、甚至延缓某些癌症的发展进程。著名的PREDIMED试验在西班牙招募了超过7400名有心血管高风险的中老年人，经过近5年的追踪发现两个地中海饮食组的主要心血管事件发生率显著降低约30%。' },
        { type: 'stats', items: [ { value: '30%', label: { zh: '主要心血管事件风险下降', en: 'Lower risk of major cardiac events' } }, { value: '#1', label: { zh: '连续多年最佳综合饮食', en: 'Best overall diet year after year' } }, { value: '≈20%', label: { zh: '全因死亡率下降', en: 'Reduction in all-cause mortality' } } ] },
        { type: 'h2', text: '为什么它「可持续」？' },
        { type: 'p', text: '大多数减肥法最终失败的原因很简单：它们要求你「对抗本能」。但地中海饮食恰恰相反：它不计算热量、不切除碳水、不禁止社交聚餐。你依然可以享受食物的风味与聚餐桌的欢愉——只是把选择悄悄转向了更天然的那一侧。「不费力的一致性」才是它能被一代代人坚持下来的真正原因。它不承诺两周瘦十斤，但它承诺十年后你依然愿意这样吃下去。' },
        { type: 'h2', text: '如何开始？四件今天就能做的小事' },
        { type: 'list', items: [
          { zh: '把厨房里的黄油换成橄榄油——这是成本最低、效果最明显的第一步', en: 'Swap butter for olive oil in the kitchen' },
          { zh: '每顿饭先保证一半是蔬菜——先把蔬菜夹满盘子的一半再添别的', en: 'Make half of every plate vegetables first' },
          { zh: '每周设两天「无红肉日」——用鱼肉、豆制品或蛋来替代', en: 'Pick two red-meat-free days per week' },
          { zh: '用坚果代替饼干作为零食——一小把杏仁的能量密度远高于薯片', en: 'Replace cookies with a handful of nuts' }
        ] },
        { type: 'quote', text: '最好的饮食，是你能愉快坚持一辈子的那一种。它不应该让你感到痛苦或被剥夺。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '写在最后：别把饮食变成另一份工作' },
        { type: 'p', text: '关于吃，我们听过太多「必须」与「禁止」：必须断糖、必须生酮、必须按时进食。但真正可持续的健康，恰恰始于放下这些紧绷的规条。地中海饮食给我们的启示不是某一种食材，而是一种态度——把吃饭还给感官、还给陪伴、还给当下。当你不再用计算器对待每一餐，而是用好奇心去尝试更多天然食物，健康会以一种更轻松的方式降临。请记得，任何饮食法都只是工具，你才是掌握它的人；工具服务于生活，而不是反过来。' },
        { type: 'p', text: '如果只能从这篇文章带走一句话，那就是：别急着改变全部，先换一勺油、多一筷菜。微小的、能坚持的改变，永远胜过宏大的、三天就废的计划。' }
      ],
      en: [
        { type: 'lead', text: 'Under the southern Italian sun, on the tables of Greek islands, people quietly become some of the world’s longest-lived — with olive oil, tomatoes, deep-sea fish and a glass of wine. This is no accident. It is the Mediterranean diet, validated by science again and again.' },
        { type: 'h2', text: 'What is the Mediterranean diet?' },
        { type: 'p', text: 'The Mediterranean diet is a family of traditional eating patterns from countries bordering the sea — Greece, southern Italy, Spain, Morocco. Its core is a plant-based base with good fats taking center stage. UNESCO inscribed it on the Representative List of Intangible Cultural Heritage in 2013.' },
        { type: 'quote', text: 'We are not dieting. We are simply eating the way our ancestors did.', cite: ' — a Cretan elder' },
        { type: 'callout', title: { zh: '一句话记住', en: 'One line to remember' }, text: { zh: '地中海饮食不是「少吃」，而是把更多天然食物请上餐桌。', en: 'It is not about eating less — it is about inviting more real food to the table.' } },
        { type: 'h2', text: 'What’s actually on the plate?' },
        { type: 'p', text: 'Picture a typical Mediterranean dinner: a large bowl of fresh tomato-cucumber-onion-feta salad drizzled with olive oil and lemon juice. Roasted eggplant with whole-grain bread or a slow-simmered chickpea stew. Main dish might be grilled fish or chicken (modest portion), accompanied by a small glass of wine. Dessert? A fresh fruit platter or honey yogurt.' },
        { type: 'list', items: [ { zh: 'Extra-virgin olive oil as main fat', en: 'Extra-virgin olive oil as main fat' }, { zh: 'Vegetables & fruit: abundant, colorful', en: 'Vegetables & fruit: abundant, colorful' }, { zh: 'Legumes & nuts for protein and healthy fats', en: 'Legumes & nuts for protein and healthy fats' }, { zh: 'Whole grains over refined carbs', en: 'Whole grains over refined carbs' }, { zh: 'Fish & seafood twice weekly for Omega-3', en: 'Fish & seafood twice weekly for Omega-3' }, { zh: 'Poultry/eggs moderate; red meat occasional', en: 'Poultry/eggs moderate; red meat occasional' } ] },
        { type: 'h2', text: 'What does science say?' },
        { type: 'p', text: 'From the landmark Seven Countries Study onward, decades of research show the Mediterranean diet is exceptionally kind to cardiovascular health while also reducing diabetes risk, improving cognition, and slowing certain cancers. The famed PREDIMED trial enrolled over 7,400 high-risk adults and found about 30% fewer major cardiac events.' },
        { type: 'stats', items: [ { value: '30%', label: { zh: 'Lower cardiac event risk', en: 'Lower cardiac event risk' } }, { value: '#1', label: { zh: 'Best overall diet', en: 'Best overall diet' } }, { value: '≈20%', label: { zh: 'Lower all-cause mortality', en: 'Lower all-cause mortality' } } ] },
        { type: 'h2', text: 'Why is it sustainable?' },
        { type: 'p', text: 'Most diets fail because they ask you to fight instinct. The Mediterranean diet does the opposite: no calorie counting, no cutting carbs outright, no banning dinner parties. “Effortless consistency” is why it survives generations.' },
        { type: 'h2', text: 'Four small moves for today' },
        { type: 'list', items: [ { zh: 'Swap butter for olive oil', en: 'Swap butter for olive oil' }, { zh: 'Half plate vegetables', en: 'Half plate vegetables' }, { zh: 'Two red-meat-free days', en: 'Two red-meat-free days' }, { zh: 'Nuts over cookies', en: 'Nuts over cookies' } ] },
        { type: 'quote', text: 'The best diet is one you can happily keep for life.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'diet',
    category: { zh: '饮食', en: 'Nutrition' },
    title: { zh: '好好吃饭：被忽略的日常养生', en: 'Eat Well: The Everyday Art of Nourishment' },
    excerpt: { zh: '健康饮食不是苦行，而是一套能长期坚持的选择。五个核心原则配合实用方法，今天就能用上。', en: 'Healthy eating isn’t asceticism — it’s choices you can keep for life.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 9, cover: 'diet',
    content: {
      zh: [
        { type: 'lead', text: '我们一天要吃三顿，却很少停下来想：这一餐正在悄悄书写十年后的体检报告。饮食是健康的地基，而地基不必靠意志力苦撑——只需用对方法。真正有效的饮食改变从来不是靠某一次极端的「断糖挑战」或「七天轻断食」实现的，而是通过日积月累的小调整，让身体慢慢适应一种新的节奏。本文将从五个核心原则出发，帮你建立一套能持续终身的饮食框架。' },
        { type: 'h2', text: '原则一：食物多样化——彩虹法则' },
        { type: 'p', text: '没有任何单一食物能提供人体所需的所有营养素。不同颜色的蔬果含有不同的植物化学物——红色的番茄富含茄红素护心，绿色的菠菜满载叶黄素护眼，紫色的蓝莓充满花青素抗炎。营养学家常说的「每天吃够五种颜色」并非空话，而是有坚实科学依据的简化指南。实际操作上，给自己设定一个小目标：每次买菜时确保购物车里至少出现三种不同颜色的蔬菜或水果。不必追求 exotic 的超级食物——本地应季的新鲜蔬果往往更营养也更便宜。' },
        { type: 'h2', text: '原则二：以植物为主——让蔬菜占据餐桌C位' },
        { type: 'p', text: '哈佛大学公共卫生学院的健康饮食餐盘建议：一半餐盘应该是各种颜色的蔬菜和水果，四分之一是全谷物，四分之一是健康蛋白。关键在于执行顺序：先把蔬菜夹满盘子的一半，然后再添主食和肉——顺序对了，份量自然合理。很多人觉得「多吃菜」很难，其实问题出在做法上。水煮青菜当然不好吃，但蒜蓉快炒淋上香油就能让蔬菜变成最受欢迎的部分。' },
        { type: 'h2', text: '原则三：限制游离糖与反式脂肪——识别隐形杀手' },
        { type: 'p', text: '游离糖指的是添加到食品中的所有形式的糖——白糖、红糖、蜂蜜、高果糖玉米糖浆等等。世界卫生组织建议成年人每天的游离糖摄入量不超过总能量的10%（理想情况下控制在5%以内）。听起来不多？一罐330毫升的可乐就已经含约35克糖——超过了推荐的每日上限。反式脂肪则是另一个隐形杀手，常见于部分氢化植物油制作的饼干、蛋糕、油炸零食中。识别的方法很简单：看配料表，只要看到「部分氢化植物油」「起酥油」「代可可脂」这些字样就尽量远离。养成看配料表的习惯——如果前三位出现了糖、油或不认识的化学名词，这件食品大概率不值得常买。' },
        { type: 'h2', text: '原则四：控制份量与进食节奏——给大脑留时间' },
        { type: 'p', text: '人体的饱腹感信号从胃部传达到大脑大约需要20分钟。这意味着如果你吃得太快很可能在大脑收到「我饱了」的消息之前就已经超量进食了。控制份量有一个简单有效的方法：换一个小一号的餐具。研究表明使用较小的盘子和碗可以让人在不减少饱腹感的前提下减少15–20%的食物摄入量。另外细嚼慢咽不仅是消化系统的福音还能让你更好地品味食物的风味——一举两得。' },
        { type: 'h2', text: '原则五：规律进餐——稳定代谢的基础' },
        { type: 'p', text: '不规律的进食时间会让身体的代谢系统无所适从。当你长时间不吃东西然后突然大量进食时血糖会剧烈波动胰岛素分泌也会变得紊乱久而久之容易导致胰岛素抵抗和代谢综合征。相反相对固定的一日三餐时间能让身体形成稳定的能量代谢节律更有利于体重管理和血糖控制。特别需要注意的是夜间进食——多项研究发现深夜吃高热量食物与肥胖和代谢疾病之间存在独立关联即使全天总热量相同也是如此。所以尽量在睡前3小时内停止进食给身体充足的夜间修复时间。' },
        { type: 'h2', text: '三个最常见的误区' },
        { type: 'list', items: [
          { zh: '误区一：「无脂即健康」——许多低脂食品为了弥补口感缺失会加入大量的糖和增稠剂实际热量未必更低', en: 'Myth 1: “fat-free” = healthy — many low-fat products add tons of sugar' },
          { zh: '误区二：「不吃主食能瘦」——完全切断碳水化合物会导致能量不足情绪低落肌肉流失长期来看复胖率极高', en: 'Myth 2: cut carbs to lose weight — leads to energy crashes and high rebound rates' },
          { zh: '误区三：「补剂能替代正餐」——食物中的营养素之间存在复杂的协同作用一颗药丸无法复制', en: 'Myth 3: supplements replace meals — food’s synergy cannot be bottled' }
        ] },
        { type: 'stats', items: [ { value: '½', label: { zh: '餐盘至少一半应为蔬果', en: 'Half plate should be veg & fruit' } }, { value: '<10%', label: { zh: '游离糖上限', en: 'Free sugar cap' } }, { value: '20min', label: { zh: '大脑接收饱腹信号的时间', en: 'Brain fullness signal time' } } ] },
        { type: 'quote', text: '你不需要完美的一餐只需要比昨天好一点的一餐。积累的力量在于重复而不在某一次的极致。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '写在最后：从今天的一餐开始' },
        { type: 'p', text: '读到这里，你或许已经记下五条原则、三个误区和一组数字。但知识若只停留在收藏夹里，就一文不值。真正的改变发生在下一次拿起筷子时——你是否多夹了一筷子青菜，是否放下了那罐甜饮料，是否把晚餐时间往前挪了一小时。不必等「周一再开始」，也不必追求一步到位；把今天的一餐比昨天好一点点，连续三十天，身体会用更稳的精力与更轻的体重回应你。好好吃饭，本身就是一种温柔而坚定的自我照顾。' },
        { type: 'p', text: '最后想说，饮食没有标准答案，只有「更适合你」的答案。听身体的反馈，比听任何网红建议都可靠。' }
      ],
      en: [
        { type: 'lead', text: 'We eat three times a day yet rarely pause to think: this meal is quietly writing next decade’s check-up results. Diet is the foundation of health — and it needn’t be held up by willpower alone.' },
        { type: 'h2', text: 'Principle One: Eat the Rainbow' },
        { type: 'p', text: 'No single food provides every nutrient needed. Different colors carry different phytochemicals — red tomatoes pack lycopene, green spinach loads lutein, purple blueberries overflow with anthocyanins.' },
        { type: 'h2', text: 'Principle Two: Plant-Forward' },
        { type: 'p', text: "Harvard's Healthy Eating Plate advises half your plate should be colorful veg and fruit, a quarter whole grains, a quarter healthy protein." },
        { type: 'h2', text: 'Principle Three: Cap Free Sugars & Trans Fats' },
        { type: 'p', text: "WHO recommends free sugars below 10% of total energy. A single 330ml cola already exceeds the daily upper limit. Trans fats in cookies, cakes and fried snacks harm cardiovascular health even in tiny amounts." },
        { type: 'h2', text: 'Principle Four: Mind Portions & Pace' },
        { type: 'p', text: "The body's fullness signal takes ~20 min to reach the brain. Smaller plates reduce intake 15–20% without reducing satisfaction. Chewing slowly helps digestion too." },
        { type: 'h2', text: 'Principle Five: Regular Mealtimes' },
        { type: 'p', text: 'Irregular eating confuses metabolism. Fixed meal times help form stable energy rhythms. Late-night eating independently links to obesity even at equal total calories.' },
        { type: 'h2', text: 'Three common myths' },
        { type: 'list', items: [ { zh: '"Fat-free" = healthy myth', en: '"Fat-free" = healthy myth' }, { zh: 'Cut carbs myth', en: 'Cut carbs myth' }, { zh: 'Supplements myth', en: 'Supplements myth' } ] },
        { type: 'stats', items: [ { value: '½', label: { zh: 'Half plate veg', en: 'Half plate veg' } }, { value: '<10%', label: { zh: 'Sugar cap', en: 'Sugar cap' } }, { value: '20min', label: { zh: 'Fullness time', en: 'Fullness time' } } ] },
        { type: 'quote', text: 'You don’t need a perfect meal — just one a little better than yesterday’s.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'sleep',
    category: { zh: '睡眠', en: 'Sleep' },
    title: { zh: '睡得好，比吃补品更管用', en: 'Good Sleep Beats Any Supplement' },
    excerpt: { zh: '睡眠不是生活的「暂停键」，而是身体修复、记忆整理与情绪调节的核心时段。这篇文章讲清楚为什么睡比练更重要，以及如何真正睡个好觉。', en: 'Sleep is not a pause button — it’s when the body repairs, the mind files memories, and mood resets. Why rest beats training, and how to actually sleep well.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 9, cover: 'sleep',
    content: {
      zh: [
        { type: 'lead', text: '很多人愿意花几千块买健身课、买保健品，却对每晚「免费」的睡眠视而不见。事实上，睡眠是健康三大支柱（饮食、运动、睡眠）中最被低估的一环。世界卫生组织建议成年人每天睡 7 到 9 小时，但全球有三分之一的人长期睡眠不足。你练得再狠、吃得再干净，如果长期缺觉，身体仍然在悄悄崩塌。本文带你重新认识睡眠，并给出今晚就能用上的实用方法。' },
        { type: 'callout', title: { zh: '一个反直觉的事实', en: 'A counter-intuitive fact' }, text: { zh: '睡眠不是「关机」，而是大脑最忙的检修时段——你躺着，它却在工作。', en: 'Sleep is not “shutdown” — it is the brain’s busiest repair shift. You rest, it works.' } },
        { type: 'h2', text: '睡眠时，身体在做什么？' },
        { type: 'p', text: '我们闭眼不动，不等于身体在休息。深度睡眠阶段，大脑会启动「类淋巴系统」清除白天堆积的代谢废物，包括与阿尔茨海默病相关的β淀粉样蛋白；生长激素在此时大量分泌，修复肌肉与组织；免疫系统忙着生产细胞因子来对抗感染。与此同时，海马体把白天的短期记忆「搬运」到长期记忆仓库——这就是为什么考前熬夜复习往往适得其反。可以说，睡眠是身体唯一的「夜间维修窗口」，错过它，白天的努力大打折扣。' },
        { type: 'h2', text: '缺觉的代价，比你想的快' },
        { type: 'p', text: '连续两晚只睡四五个小时，人的认知能力就会下降到相当于血液酒精浓度 0.05% 的水平——已经属于「微醺」状态。长期睡眠不足则与肥胖、2型糖尿病、高血压、抑郁和免疫力下降显著相关。一个常被忽视的机制是：缺觉会扰乱调节食欲的两种激素——饥饿素升高、瘦素降低，让你更想吃高热量食物。换句话说，睡不够的人更容易胖，不是因为懒，而是激素在替身体做决定。' },
        { type: 'quote', text: '你以为熬夜是在「偷时间」，其实是在向未来的健康借高利贷——而且利息高得可怕。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '昼夜节律：你的内在时钟' },
        { type: 'p', text: '人体有一套约 24 小时的生物钟，由大脑下丘脑的视交叉上核控制，主要受光线调节。清晨的蓝光抑制褪黑素、让你清醒；日落后光线变暗，褪黑素逐渐升高、催你入眠。现代人最大的睡眠杀手之一，就是睡前长时间盯着手机——屏幕蓝光强行「骗」大脑现在是白天，把入睡时间往后推。理解节律后你会发现：固定的起床时间，比固定的入睡时间更重要，因为它锚定了整天的生物钟。' },
        { type: 'h2', text: '打造好睡眠的六件小事' },
        { type: 'list', items: [
          { zh: '固定起床时间：哪怕周末也尽量不赖床超过一小时，让生物钟稳定', en: 'Fix wake time: keep it steady even on weekends' },
          { zh: '睡前一小时远离屏幕：把手机请出卧室，或至少开启护眼/夜间模式', en: 'Screen-free hour before bed: keep the phone out of the bedroom' },
          { zh: '卧室只做两件事：睡觉和休息，不在床上工作、刷剧', en: 'Bedroom = sleep only: no work, no streaming in bed' },
          { zh: '下午两点后戒咖啡因：咖啡因半衰期约 5–6 小时，下午的拿铁会偷走夜里深睡', en: 'No caffeine after 2pm: its half-life lingers into the night' },
          { zh: '规律运动但避免睡前剧烈训练：白天运动能加深夜间睡眠，临睡大汗反而兴奋', en: 'Exercise by day, not at night: daytime movement deepens sleep' },
          { zh: '白天见光、夜晚调暗：早晨晒十分钟太阳，晚上把灯光调暖调暗', en: 'Daylight by day, dim by night: morning sun, warm evening light' }
        ] },
        { type: 'stats', items: [ { value: '7–9h', label: { zh: '成人推荐睡眠时长', en: 'Recommended adult sleep' } }, { value: '~5h', label: { zh: '咖啡因半衰期', en: 'Caffeine half-life' } }, { value: '⅓', label: { zh: '全球长期睡眠不足者', en: 'World sleeps too little' } } ] },
        { type: 'h2', text: '关于午睡与补觉' },
        { type: 'p', text: '二十分钟以内的「能量小睡」能提升下午的专注力，但超过一小时容易进入深睡，醒来反而昏沉，还会偷走夜里的睡意。至于「周末补觉」——它能部分偿还睡眠债，却无法完全弥补一周缺觉对代谢和情绪的损害。最稳妥的策略永远是：平日少欠债，周末不暴补。把睡眠当成和吃饭、训练同等重要的「训练科目」，你的身体会回报以更稳定的精力与情绪。' },
        { type: 'quote', text: '最好的恢复手段，往往不需要任何装备——一张床、一片黑暗，和一份对身体的尊重。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '写在最后：把睡眠写进日程表' },
        { type: 'p', text: '我们习惯把睡眠排在日程的最末——工作做完了才睡，剧追完了才睡，社交结束了才睡。可睡眠不是「剩余时间」，而是支撑一切的底座。试着像对待重要会议那样，把睡觉时间也写进日历，并提前半小时进入「收尾模式」：关掉刺眼的大灯、把手机调成勿扰、让大脑知道「今天到此为止」。坚持两周，你会发现自己白天不再靠咖啡硬撑，情绪也少了些无名火。尊重睡眠，本质上是尊重那个明早还要继续生活的自己。' },
        { type: 'p', text: '若你今夜仍难入眠，也别焦虑——偶尔一两晚睡不好不会毁掉健康，真正伤身的是「担心自己睡不好」的恶性循环。放下对完美的执念，反而更容易睡着。' },
        { type: 'p', text: '把睡眠想成给身体的「定期存款」：你每天存一点，利息是第二天的清醒与情绪；你长期欠债，代价是慢慢累积的疲惫与脆弱。与其在体检报告亮红灯后才补救，不如从今夜的早睡半小时开始。关灯，不是结束一天，而是给明天蓄力。愿你在每一个安静的夜晚，都能安心地把身体交还给睡眠——它，从不辜负认真休息的人。' }
      ],
      en: [
        { type: 'callout', title: { zh: '一个反直觉的事实', en: 'A counter-intuitive fact' }, text: { zh: '睡眠不是「关机」，而是大脑最忙的检修时段——你躺着，它却在工作。', en: 'Sleep is not “shutdown” — it is the brain’s busiest repair shift. You rest, it works.' } },
        { type: 'lead', text: 'People spend on gyms and supplements yet ignore the free repair window they get every night. Sleep is the most underrated of the three health pillars — and the one you can’t cheat.' },
        { type: 'h2', text: 'What the body does while you sleep' },
        { type: 'p', text: 'During deep sleep the brain’s glymphatic system flushes metabolic waste including amyloid-beta; growth hormone repairs tissue; the immune system builds cytokines. The hippocampus moves short-term memory into long-term storage — which is why cramming all night backfires.' },
        { type: 'h2', text: 'The cost of short sleep comes fast' },
        { type: 'p', text: 'Two nights at four–five hours drops cognition to roughly 0.05% blood alcohol — legally tipsy. Chronic short sleep links to obesity, type-2 diabetes, hypertension and depression. It also raises ghrelin and lowers leptin, driving cravings for high-calorie food.' },
        { type: 'quote', text: 'Staying up late doesn’t borrow time — it takes a high-interest loan against future health.', cite: ' — PureEat Editorial' },
        { type: 'h2', text: 'Your inner clock' },
        { type: 'p', text: 'A ~24-hour circadian clock in the hypothalamus is set mainly by light. Morning blue light suppresses melatonin; evening darkness raises it. Late-night screens trick the brain into “daytime,” pushing sleep later. A fixed wake time anchors the whole clock better than a fixed bedtime.' },
        { type: 'h2', text: 'Six small sleep moves' },
        { type: 'list', items: [ { zh: 'Fix wake time', en: 'Fix wake time' }, { zh: 'Screen-free hour', en: 'Screen-free hour' }, { zh: 'Bedroom = sleep only', en: 'Bedroom = sleep only' }, { zh: 'No caffeine after 2pm', en: 'No caffeine after 2pm' }, { zh: 'Exercise by day', en: 'Exercise by day' }, { zh: 'Daylight by day, dim by night', en: 'Daylight by day, dim by night' } ] },
        { type: 'stats', items: [ { value: '7–9h', label: { zh: 'Recommended', en: 'Recommended' } }, { value: '~5h', label: { zh: 'Caffeine half-life', en: 'Caffeine half-life' } }, { value: '⅓', label: { zh: 'Sleep-deprived', en: 'Sleep-deprived' } } ] },
        { type: 'h2', text: 'Naps & catch-up' },
        { type: 'p', text: 'A 20-minute “power nap” helps afternoon focus; longer naps cause grogginess and steal nighttime sleep. Weekend catch-up partially repays the debt but cannot fully undo a week of metabolic and mood damage. The soundest plan: borrow less during the week, binge less on weekends.' },
        { type: 'quote', text: 'The best recovery needs no gear — a bed, some darkness, and respect for your body.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'exercise',
    category: { zh: '运动', en: 'Fitness' },
    title: { zh: '动起来：让身体成为盟友', en: 'Move: Make Your Body an Ally' },
    excerpt: { zh: '运动不是 punishment，而是和身体对话的方式。从为什么动、动什么、怎么动不伤身，到如何把运动嵌进忙碌的日常，这一篇一次说清。', en: 'Exercise isn’t punishment — it’s a conversation with your body. Why move, what to do, how to avoid injury, and how to fit it into a busy life.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 9, cover: 'exercise',
    content: {
      zh: [
        { type: 'lead', text: '如果把人体比作一台机器，运动就是它的「保养程序」——长期闲置，零件会生锈；适度运转，反而越用越灵。世界卫生组织建议成年人每周至少 150 分钟中等强度有氧，或 75 分钟高强度有氧，并配合两次以上力量训练。可现实是，越来越多人的一天在椅子上度过。本文不灌鸡汤，只讲清楚运动到底为身体做了什么，以及如何不痛苦地开始。' },
        { type: 'h2', text: '运动在身体里按下哪些「开关」？' },
        { type: 'p', text: '一次运动，会在多个系统同时产生连锁反应。心血管系统效率提升——心脏每次搏动泵出更多血，静息心率下降；肌肉收缩刺激葡萄糖转运，帮助降血糖、改善胰岛素敏感性；大脑分泌内啡肽与脑源性神经营养因子（BDNF），前者带来「跑者高潮」的愉悦，后者促进神经元生长、提升学习与记忆。长期规律运动还能降低慢性炎症水平，而慢性炎症正是许多慢性病的共同土壤。换句话说，运动是一剂「广谱药」，几乎全身都受益。' },
        { type: 'h2', text: '三种运动，各管一段' },
        { type: 'list', items: [
          { zh: '有氧训练：快走、骑车、游泳，练心肺耐力，是健康的「地基」', en: 'Aerobic: brisk walk, cycling, swim — builds cardio base' },
          { zh: '力量训练：举重、自重、弹力带，保肌肉、护关节、稳代谢', en: 'Strength: weights, bodyweight, bands — preserves muscle & metabolism' },
          { zh: '柔韧与平衡：拉伸、瑜伽、太极，防跌倒、增活动度', en: 'Mobility & balance: stretch, yoga, tai chi — prevents falls' }
        ] },
        { type: 'h2', text: '新手最容易踩的三个坑' },
        { type: 'p', text: '第一是「起步太猛」：平时不运动的人突然每天跑五公里，极易肌肉拉伤或关节劳损，热情三天就被疼痛浇灭。正确做法是「从能轻松完成的量开始，每周增量不超过 10%」。第二是「只练想练的」：很多人迷恋腹肌却忽略背部与臀腿，久而久之体态失衡。第三是「忽视热身与恢复」：热身让血液流向肌肉、降低受伤风险；运动后拉伸与睡眠同等重要，是身体真正变强的时刻。' },
        { type: 'quote', text: '运动的目标不是把自己累垮，而是让明天的自己比今天更有力气。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '把运动塞进忙碌的一天' },
        { type: 'p', text: '「没时间」是最常见的借口，但运动不必是整块的两小时。研究显示，把运动拆成每天三次十分钟，累计效果与一次性完成接近。试试这些零碎方案：通勤提前一站下车走路；开会时站着或原地踏步；午休做一组靠墙静蹲；看电视时做拉伸。关键不是单次时长，而是「频率」与「 consistency」。当运动变成像刷牙一样的日常仪式，它就不再需要靠意志力维持。' },
        { type: 'stats', items: [ { value: '150min', label: { zh: '每周有氧最低推荐', en: 'Weekly aerobic minimum' } }, { value: '2×', label: { zh: '每周力量训练次数', en: 'Weekly strength sessions' } }, { value: '<10%', label: { zh: '每周增量上限', en: 'Weekly increase cap' } } ] },
        { type: 'h2', text: '听身体的话' },
        { type: 'p', text: '最后一条原则最重要：区分「良性的酸痛」和「需要警惕的疼痛」。运动后一两天的肌肉酸痛是正常的；但关节刺痛、某个点持续锐痛、或疼痛随运动加重，就是身体在喊停。学会在「推自己一把」和「保护自己」之间找到平衡，运动才能成为陪伴你几十年的盟友，而不是伤身的源头。' },
        { type: 'quote', text: '最好的运动计划，是你真正愿意一周做三次、做上十年的那一个。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '有氧与力量，能不能一起练？' },
        { type: 'p', text: '很多人纠结「先练哪个」，其实两者并不互斥。对大多数人，在一次训练中先做力量、再做短时有氧，或把有氧与力量安排在不同日子，都能兼顾。研究也发现，把二者结合的人，体成分与代谢指标往往优于只做单一类型的人。关键是总负荷可控——别在已经力竭的力量训练后再硬塞一小时高强度有氧，那样只会累积疲劳、抬高受伤概率。让计划像食谱一样有主有次，身体才能稳定进步。' },
        { type: 'h2', text: '写在最后：把运动想成长期关系' },
        { type: 'p', text: '运动是一种长期的关系，它不像药物那样立竿见影，却像复利那样悄悄累积。很多人放弃，是因为用「短期体重」衡量「长期健康」，看不见藏在皮下的肌肉、更稳的心率与更亮的情绪。请给自己至少三个月的耐心，把焦点从「瘦了几斤」转向「今天动了吗」。当运动成为生活的一部分而非额外的负担，你会发现它回馈的远不止线条——还有一种「我能照顾好自己」的踏实感。这份底气，谁也拿不走。' },
        { type: 'p', text: '别等「有空了」才动——有空永远不会来。把运动塞进已经存在的生活缝隙里，它才活得下去。' },
        { type: 'p', text: '最后想提醒一句：记录，是坚持的隐形盟友。不必写成长篇日记，只在手机里记一句「今天走了二十分钟」「今天做了三组深蹲」，一个月后翻看，那些小小的勾号会给你继续的动力。运动最怕的不是累，而是「看不见进展」的虚无感；而记录，恰好把进展变成看得见的东西。从今天起，选一种你真心喜欢的方式，动起来——你的身体，值得这份长期的温柔对待。' }
      ],
      en: [
        { type: 'p', text: '很多人纠结「先练哪个」，其实两者并不互斥。对大多数人，在一次训练中先做力量、再做短时有氧，或把有氧与力量安排在不同日子，都能兼顾。研究也发现，把二者结合的人，体成分与代谢指标往往优于只做单一类型的人。关键是总负荷可控——别在已经力竭的力量训练后再硬塞一小时高强度有氧，那样只会累积疲劳、抬高受伤概率。让计划像食谱一样有主有次，身体才能稳定进步。' }
      ],
      en: [
        { type: 'lead', text: 'If the body is a machine, movement is its maintenance routine — idle too long and parts rust; used moderately, it runs better. WHO advises 150 min of moderate aerobic or 75 min vigorous weekly, plus strength training twice a week.' },
        { type: 'h2', text: 'What switches does exercise flip?' },
        { type: 'p', text: 'One session triggers cascades across systems: the heart pumps more per beat and resting rate drops; muscle contraction moves glucose and improves insulin sensitivity; the brain releases endorphins and BDNF, boosting mood and memory. Long-term training lowers chronic inflammation — the common soil of many diseases.' },
        { type: 'h2', text: 'Three kinds of movement' },
        { type: 'list', items: [ { zh: 'Aerobic builds the base', en: 'Aerobic builds the base' }, { zh: 'Strength preserves muscle', en: 'Strength preserves muscle' }, { zh: 'Mobility prevents falls', en: 'Mobility prevents falls' } ] },
        { type: 'h2', text: 'Three beginner traps' },
        { type: 'p', text: 'First, starting too hard: a couch-to-5k overnight invites injury and kills motivation. Increase by no more than 10% a week. Second, training only what you like, creating imbalance. Third, skipping warm-up and recovery — warm-up cuts injury risk and recovery is when gains actually happen.' },
        { type: 'quote', text: 'The goal isn’t to exhaust yourself, but to make tomorrow’s self stronger than today’s.', cite: ' — PureEat Editorial' },
        { type: 'h2', text: 'Fit movement into a busy day' },
        { type: 'p', text: '“No time” is the usual excuse, but movement needn’t be a two-hour block. Three ten-minute bouts daily approach the effect of one session. Get off transit one stop early, stand during calls, do wall-sits at lunch, stretch while watching TV. Frequency and consistency beat duration.' },
        { type: 'stats', items: [ { value: '150min', label: { zh: 'Aerobic min', en: 'Aerobic min' } }, { value: '2×', label: { zh: 'Strength', en: 'Strength' } }, { value: '<10%', label: { zh: 'Weekly cap', en: 'Weekly cap' } } ] },
        { type: 'h2', text: 'Listen to the body' },
        { type: 'p', text: 'Tell good soreness from warning pain. Next-day muscle ache is normal; joint stabbing, sharp localized pain, or pain that worsens with movement means stop. Balance “push a little” with “protect yourself” and exercise becomes a decades-long ally.' },
        { type: 'quote', text: 'The best plan is the one you’ll actually do three times a week for ten years.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'jogging',
    category: { zh: '慢跑', en: 'Jogging' },
    title: { zh: '慢跑：最低成本的长期投资', en: 'Jogging: The Lowest-Cost Long Game' },
    excerpt: { zh: '一双跑鞋、一条马路，就能开始。慢跑为什么被称为「最友好的入门运动」，以及如何跑得久而不受伤。', en: 'A pair of shoes and a road is all you need. Why jogging is the friendliest entry sport, and how to run long without getting hurt.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 8, cover: 'jogging',
    content: {
      zh: [
        { type: 'lead', text: '在所有运动里，慢跑大概是门槛最低的一种：不需要办卡，不需要队友，不需要复杂装备，穿上鞋推门就能走。正因如此，它也是最容易坚持一生的运动。但「容易开始」不等于「随便跑」——错误的跑姿和过快的增量，会让膝盖和脚踝替你买单。本文给你一份从零到稳的慢跑指南。' },
        { type: 'h2', text: '慢跑给身体什么？' },
        { type: 'p', text: '慢跑是典型的「中等强度有氧」，能稳步提升最大摄氧量，让心脏更高效、血管更富弹性。规律慢跑者的静息心率往往更低，意味着心脏每次跳动都在「省力」。它还能改善胰岛素敏感性、帮助体重管理，并在大脑中释放内啡肽，缓解焦虑与低落。更有研究显示，长期坚持慢跑与更低的全因死亡率相关——它不是让你「瘦」，而是让你「活得久且活得好」。' },
        { type: 'h2', text: '从零开始的四个阶段' },
        { type: 'list', items: [
          { zh: '第零阶段——走路：先从每天快走 20 分钟建立习惯，别急着跑', en: 'Stage 0 — walk: build the habit with 20-min brisk walks' },
          { zh: '第一阶段——跑走结合：跑 1 分钟走 2 分钟，循环 8 组，每周三次', en: 'Stage 1 — run/walk: 1 min run, 2 min walk, 8 rounds, 3×/week' },
          { zh: '第二阶段——连续慢跑：能不中断跑 20 分钟，再谈加距离', en: 'Stage 2 — continuous: hold 20 min non-stop before adding distance' },
          { zh: '第三阶段——稳定习惯：每周 3 次、每次 30 分钟，享受过程', en: 'Stage 3 — habit: 3×/week, 30 min, enjoy the process' }
        ] },
        { type: 'h2', text: '不伤膝的关键：姿势与增量' },
        { type: 'p', text: '「跑步伤膝」是个被夸大的迷思——真正伤膝的是「突然加量」和「错误落地」。落地时让脚在身体重心正下方、而非伸到身前，能大幅减少刹车力对膝盖的冲击；小步频（每分钟 170–180 步）比大跨步更护关节。增量遵循「10% 法则」：每周总里程增幅不超过 10%。另外，强壮的臀肌与核心能稳定骨盆、减轻膝盖压力，所以别只跑——每周加两次簡单的力量训练，跑得更远也不易伤。' },
        { type: 'quote', text: '慢跑不是和别人比速度，而是和昨天的自己约定：今天也出来走一走、跑一跑。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '装备与节奏的小心机' },
        { type: 'p', text: '一双合脚、有缓冲的跑鞋比任何「黑科技」都重要——旧鞋磨损后缓冲下降，是隐性伤病源，建议每 600–800 公里更换。跑步时能用完整句话说出话、不喘不上气，就是合适的中等强度。不必追求配速，先把「能聊天的慢摇」跑顺，再谈提速。天气极端炎热或污染严重时，改在室内跑步机或改日，别和天气较劲。' },
        { type: 'stats', items: [ { value: '170–180', label: { zh: '理想步频/分钟', en: 'Ideal steps/min' } }, { value: '<10%', label: { zh: '每周里程增幅上限', en: 'Weekly mileage cap' } }, { value: '600–800km', label: { zh: '跑鞋更换里程', en: 'Shoe replacement km' } } ] },
        { type: 'h2', text: '跑后别忘恢复' },
        { type: 'p', text: '跑完别立刻坐下。慢走五分钟让心率平稳，再做几组小腿与大腿后侧拉伸，能明显减轻隔天酸痛。补水与一餐含蛋白质的加餐，帮助肌肉修复。把「跑—拉伸—补水—睡好」连成一套仪式，你的膝盖会感谢你很多年。记住：慢跑是一场和身体的长期合作，急不得，也停不得。' },
        { type: 'quote', text: '最好的跑者不是最快的，而是十年后还在路上的那一个。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '一个人跑，还是一群人跑？' },
        { type: 'p', text: '慢跑看似孤独，却也可以很社交。独自跑的好处是自由——想快想慢、想停就停，是难得的「与自己独处」时间，许多人在跑步时想通了白天解不开的结。而约上跑团或朋友，则能把「坚持」变成「期待」：约定的时间推着你出门，聊着天里程就溜走了。两者不必二选一：平日独自跑释放压力，周末跟团跑增添乐趣。重要的是找到让自己「愿意出门」的那一种节奏，而不是被某种「正确跑法」绑架。' },
        { type: 'h2', text: '写在最后：路就在脚下' },
        { type: 'p', text: '关于慢跑，最动人也最朴素的真理是：你不需要准备好才开始，开始本身就是准备。不必等买齐装备、不必等天气完美、不必等体重降到某个数字——换上鞋，推开家门，先走起来，再慢慢跑起来。每一次出门，都是写给未来自己的一封情书；每一次坚持，都在为十年后的健康账户存钱。如果哪天实在不想跑，那就去走；行走也是慢跑的近亲，同样算数。重要的是别让「中断」变成「放弃」，路一直在那里，等你回来就好。' },
        { type: 'p', text: '慢跑教会我们的，从来不只是心肺——它教会一种「一步一步来」的生活哲学，这在什么都讲究快的年代，格外珍贵。' },
        { type: 'p', text: '也许有一天你会跑下人生第一个五公里、十公里，甚至半马；也许你始终只是傍晚慢摇的那一个。这两者没有高下——能持续出门的，才是真正的跑者。别让配速APP上的数字定义你与跑步的关系；定义它的，是你在风里那一刻的自由，是回家后那身微汗的轻松，是镜子里渐渐明亮的眼神。把慢跑当成给自己的长期情书，不求轰轰烈烈，只求年年岁岁都在。' }
      ],
      en: [
        { type: 'lead', text: 'Of all sports, jogging has perhaps the lowest barrier: no membership, no teammates, no complex gear — lace up and go. That’s also why it’s the easiest to keep for life. But “easy to start” isn’t “run however you like.”' },
        { type: 'h2', text: 'What jogging gives you' },
        { type: 'p', text: 'Jogging is classic moderate aerobic work that raises VO2max, makes the heart efficient and vessels elastic. Regular joggers often have lower resting heart rates. It improves insulin sensitivity, aids weight control, and releases endorphins that ease anxiety. Long-term jogging correlates with lower all-cause mortality.' },
        { type: 'h2', text: 'Four stages from zero' },
        { type: 'list', items: [ { zh: 'Walk first', en: 'Walk first' }, { zh: 'Run/walk mix', en: 'Run/walk mix' }, { zh: 'Continuous 20 min', en: 'Continuous 20 min' }, { zh: 'Steady habit', en: 'Steady habit' } ] },
        { type: 'h2', text: 'Save your knees: form & progression' },
        { type: 'p', text: '“Running ruins knees” is overstated — what ruins them is sudden volume and wrong landing. Land with the foot under your center of mass, not reaching ahead, to cut braking force. A higher cadence (170–180 steps/min) protects joints more than long strides. Follow the 10% rule: never add more than 10% weekly distance. Strong glutes and core stabilize the pelvis, so add two easy strength sessions a week.' },
        { type: 'quote', text: 'Jogging isn’t racing others — it’s a deal with yesterday’s self to show up again.', cite: ' — PureEat Editorial' },
        { type: 'h2', text: 'Gear & pace tips' },
        { type: 'p', text: 'A well-fitted cushioned shoe beats any gadget; replace it every 600–800 km as cushioning fades. You should be able to speak in full sentences while running — that’s the right moderate intensity. Don’t chase pace; master the “conversational shuffle” first. In extreme heat or heavy pollution, move indoors or skip the day.' },
        { type: 'stats', items: [ { value: '170–180', label: { zh: 'Steps/min', en: 'Steps/min' } }, { value: '<10%', label: { zh: 'Weekly cap', en: 'Weekly cap' } }, { value: '600–800km', label: { zh: 'Shoe km', en: 'Shoe km' } } ] },
        { type: 'h2', text: 'Don’t skip recovery' },
        { type: 'p', text: 'Don’t sit right after. Walk five minutes to settle heart rate, then stretch calves and hamstrings to cut next-day soreness. Rehydrate and eat a protein snack to repair muscle. Chain “run — stretch — hydrate — sleep” into a ritual and your knees will thank you for years. Jogging is a long partnership with your body: neither rushed nor abandoned.' },
        { type: 'quote', text: 'The best runner isn’t the fastest — it’s the one still on the road ten years later.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'aerobic',
    category: { zh: '有氧训练', en: 'Aerobic' },
    title: { zh: '有氧训练：给心肺做一次保养', en: 'Aerobic Training: A Tune-Up for Heart and Lungs' },
    excerpt: { zh: '有氧不是「累到喘」的代名词。理解它的原理，选对强度，它能成为你精力与寿命的底层引擎。', en: 'Aerobic isn’t about gasping for air. Understand the mechanism, pick the right intensity, and it becomes the engine of your energy and lifespan.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 8, cover: 'aerobic',
    content: {
      zh: [
        { type: 'lead', text: '「有氧」两个字听起来很学术，其实它描述的就是一件最简单的事：身体在氧气充足的情况下，靠燃烧糖和脂肪来供能的运动。快走、骑车、游泳、跳操，只要强度维持在「还能说话但有点喘」，都算有氧。它不像冲刺那样刺激，却像地基一样支撑着你的心肺能力与日常精力。这篇文章帮你把有氧「想明白、练对路」。' },
        { type: 'h2', text: '有氧到底练的是什么？' },
        { type: 'p', text: '有氧训练主要刺激「心肺系统」：长期规律有氧会让心脏心室腔增大、每次搏动泵出更多血液；毛细血管在肌肉里 denser 地生长，让氧气更高效地送达细胞；线粒体（细胞的「发电厂」）数量与效率提升，意味着你更能持久、更不易疲劳。衡量它的核心指标是「最大摄氧量（VO2max）」——这个数字越高，通常代表心肺越年轻、死亡风险越低。好消息是，它可以通过规律有氧显著提升，且任何时候开始都不晚。' },
        { type: 'h2', text: '找到你的「甜区」强度' },
        { type: 'list', items: [
          { zh: '谈话测试：能完整说句子但没法唱歌，约中等强度', en: 'Talk test: full sentences but no singing = moderate' },
          { zh: '心率法：目标区间约为「220−年龄」的 60%–70%', en: 'Heart rate: ~60–70% of (220 − age)' },
          { zh: '自觉用力：主观感觉「有点吃力但还能坚持」', en: 'RPE: “somewhat hard but sustainable”' }
        ] },
        { type: 'h2', text: '常见的三种误区' },
        { type: 'p', text: '误区一是「越快越好」：一味冲高强度，身体很快进入无氧、积累乳酸，反而难以坚持，也容易受伤。误区二是「只做一种」：长期只骑自行车会让某些肌群闲置，建议有氧多样化为宜。误区三是「忽略热身」：冷身开跑容易心慌、岔气，花五分钟慢走或动态拉伸就能避免。真正高效的有氧，是「稳定在甜区、持续足够时长」，而不是每一次都拼到虚脱。' },
        { type: 'quote', text: '有氧的秘诀不是更狠，而是更久——把时间给你的心肺，它会连本带利还给你。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '一周怎么排？' },
        { type: 'p', text: '对大多数成年人，每周 150 分钟中等强度有氧是底线，拆成五次三十分钟最易执行；若想更高效，可把其中一两次提升为「高强度间歇」（如快走一分钟、慢走一分钟交替），能在更短时间内获得相近益处。关键是「分布均匀、别攒到周末」——把有氧像零钱一样每天花一点，比月底一次性「大额支出」有效得多。' },
        { type: 'stats', items: [ { value: '150min', label: { zh: '每周有氧底线', en: 'Weekly aerobic floor' } }, { value: '60–70%', label: { zh: '目标心率占比', en: 'Target HR zone' } }, { value: 'VO2max', label: { zh: '心肺年龄指标', en: 'Cardio-age marker' } } ] },
        { type: 'h2', text: '让有氧可持续' },
        { type: 'p', text: '最容易放弃有氧的原因，是把它当成「任务」。换个思路：选你真正喜欢的类型——有人爱游泳的包裹感，有人爱骑行的风，有人爱跟着音乐跳操。找一两个「运动搭子」或加入社群，能显著提高坚持率。把耳机里放上喜欢的播客，把路线换成风景好的公园。当有氧从「我应该」变成「我想要」，它就从消耗变成了奖赏。' },
        { type: 'quote', text: '你不需要战胜有氧，你只需要和它成为老朋友。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '平台期来了怎么办？' },
        { type: 'p', text: '坚持几周后体重或体能「卡住」很正常，这叫平台期。身体善于适应——同一强度练久了，消耗会下降。突破的办法不是更拼命，而是「换刺激」：把匀速快走改成坡度走、把骑车换成游泳、或加入间歇变化。也可以微调时长与频率，给身体新的信号。更重要的是别被数字绑架：即便体重不变，你的静息心率、睡眠与情绪往往已在悄悄变好。把有氧当成和身体长期对话，而不是和一杆秤较劲。' },
        { type: 'h2', text: '写在最后：先从今天的一刻钟开始' },
        { type: 'p', text: '与其研究哪种有氧「最高效」，不如先把今天的一刻钟用掉。下班后提前两站下车走回去、午休时在楼道里慢走几圈、晚饭后和家人散个步——这些零碎的有氧，加起来就是给心肺的定期保养。别把「运动」想成必须换上全套装备、奔赴健身房的隆重仪式；它就藏在生活缝隙里，等你顺手捡起。当你不再为「没时间」焦虑，转而享受每一次呼吸加深的片刻，有氧便从任务变成了日常的小确幸。' },
        { type: 'p', text: '记住，最好的有氧时间，是「你真的去了」的那一次；其次是「现在」就出发的那一次。' },
        { type: 'p', text: '如果你愿意更进一步，不妨准备一个小本子或在手机里记「运动日志」：哪天动了、动了多久、感觉如何。它不只是数据，更是你和身体对话的痕迹。几周后回头看，你会惊喜地发现，那些曾经让你气喘吁吁的路线，如今已能轻松谈笑走完。进步从不是某一天的突变，而是无数次「出发」叠出来的高度。愿你找到属于自己的那一种有氧，并把它，慢慢变成一辈子的习惯。' }
      ],
      en: [
        { type: 'lead', text: '“Aerobic” sounds academic, but it describes something simple: movement where the body fuels itself with sugar and fat in the presence of plenty of oxygen. Brisk walking, cycling, swimming, dance — anything you can do while “breathing but a bit winded” — counts. It’s the base under your energy and lifespan.' },
        { type: 'h2', text: 'What aerobic actually trains' },
        { type: 'p', text: 'Aerobic training mainly stimulates the cardiorespiratory system: the heart’s chamber enlarges and pumps more per beat; capillaries grow denser in muscle; mitochondria multiply and work better. The key metric is VO2max — higher usually means a younger cardio system and lower mortality risk. The good news: it improves with training, at any age.' },
        { type: 'h2', text: 'Find your “sweet spot” intensity' },
        { type: 'list', items: [ { zh: 'Talk test', en: 'Talk test' }, { zh: 'Heart-rate zone', en: 'Heart-rate zone' }, { zh: 'Rate of perceived effort', en: 'Rate of perceived effort' } ] },
        { type: 'h2', text: 'Three common myths' },
        { type: 'p', text: 'Myth 1: faster is better — all-out intensity drifts into anaerobic, builds lactate, and is hard to sustain. Myth 2: only one modality — vary it. Myth 3: skip warm-up — five minutes of easy movement prevents side stitches. Efficient aerobic is steady in the sweet spot, not collapse every session.' },
        { type: 'quote', text: 'Aerobic’s secret isn’t harder — it’s longer. Give time to your heart and lungs; they repay with interest.', cite: ' — PureEat Editorial' },
        { type: 'h2', text: 'How to schedule a week' },
        { type: 'p', text: 'For most adults, 150 min of moderate aerobic weekly is the floor — five 30-min sessions are easiest to keep. For efficiency, make one or two sessions interval (e.g., 1 min brisk / 1 min slow). Spread it out; don’t bank it for the weekend. Spending aerobic like pocket change daily beats one monthly “big expense.”' },
        { type: 'stats', items: [ { value: '150min', label: { zh: 'Weekly floor', en: 'Weekly floor' } }, { value: '60–70%', label: { zh: 'HR zone', en: 'HR zone' } }, { value: 'VO2max', label: { zh: 'Marker', en: 'Marker' } } ] },
        { type: 'h2', text: 'Make it sustainable' },
        { type: 'p', text: 'The top reason people quit is treating aerobic as a chore. Pick what you actually enjoy — the embrace of swimming, the wind of cycling, the rhythm of dance. A buddy or community raises adherence. Put on a favorite podcast, pick a scenic route. When aerobic shifts from “should” to “want,” it becomes a reward.' },
        { type: 'quote', text: 'You don’t have to beat aerobic — just become its old friend.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'yoga',
    category: { zh: '瑜伽', en: 'Yoga' },
    title: { zh: '瑜伽：在呼吸里安放身体', en: 'Yoga: Resting the Body in the Breath' },
    excerpt: { zh: '瑜伽不只是柔软的体式，更是一套连接身体、呼吸与注意力的练习。它适合几乎所有人，尤其适合久坐与现代焦虑。', en: 'Yoga is more than flexible poses — it’s a practice linking body, breath and attention. It suits almost everyone, especially the sedentary and the anxious.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 8, cover: 'yoga',
    content: {
      zh: [
        { type: 'lead', text: '很多人对瑜伽的印象还停留在「把身体折成奇怪形状」的照片上，于是望而却步。但真正的瑜伽远不止柔韧：它通过体式（asana）、呼吸（pranayama）与专注，把散乱的身心重新收拢。对长期久坐、肩颈僵硬、睡不好、总在焦虑的现代人来说，瑜伽可能是一份性价比极高的「日常处方」。' },
        { type: 'h2', text: '瑜伽到底在练什么？' },
        { type: 'p', text: '从身体层面，瑜伽的体式在有控制地活动关节、拉长紧张肌群、增强深层稳定肌，对改善圆肩、骨盆前倾等久坐体态很有帮助。从神经层面，配合缓慢呼吸的练习能激活「副交感神经」——也就是身体的「放松模式」，降低皮质醇、减慢心率、让紧绷的神经松下来。这也是为什么一节瑜伽课后，人常感到「身体累了但脑子清了」。它同时训练力量、柔韧与觉察，是少见的「三位一体」运动。' },
        { type: 'h2', text: '不同流派，怎么选？' },
        { type: 'list', items: [
          { zh: '哈他（Hatha）：节奏慢、基础体式多，最适合新手', en: 'Hatha: slow, foundational — best for beginners' },
          { zh: '流瑜伽（Vinyasa）：体式串联如流动，更练心肺与协调', en: 'Vinyasa: flowing sequences — more cardio & coordination' },
          { zh: '阴瑜伽（Yin）：长时间保持、深层拉伸，偏放松修复', en: 'Yin: long holds, deep stretch — restorative' },
          { zh: '艾扬格（Iyengar）：强调精准与辅具，安全友好', en: 'Iyengar: precision & props — safe and accessible' }
        ] },
        { type: 'h2', text: '新手三件事，避开受伤' },
        { type: 'p', text: '第一，别和别人比：瑜伽垫上最危险的比较，是拿自己的第一天去对标别人的第三年。第二，用辅具不丢人：瑜伽砖、伸展带、靠墙练习，都是聪明而非退步。第三，尊重「刺痛」信号：拉伸的酸胀是正常的，但关节刺痛必须退出体式。把「不逞强」当成一种练习态度，反而进步更快。' },
        { type: 'quote', text: '瑜伽不是把脚放到头上，而是把心安放在此刻。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '在家也能开始的十分钟' },
        { type: 'p', text: '不必等办了卡才动。每天早上或睡前，试着这套极简序列：猫牛式活动脊柱三遍 → 下犬式舒展腿后侧 → 婴儿式放松一分钟 → 简易坐姿配合腹式呼吸五轮。全程不追求标准，只感受身体与呼吸的连接。坚持两周，你多半会注意到肩颈松了、入睡快了、面对琐事没那么易燥了。' },
        { type: 'stats', items: [ { value: '3-in-1', label: { zh: '力量·柔韧·觉察', en: 'Strength · Flex · Awareness' } }, { value: '10min', label: { zh: '每日可入门时长', en: 'Daily entry time' } }, { value: '↓', label: { zh: '皮质醇趋于下降', en: 'Cortisol trends down' } } ] },
        { type: 'h2', text: '瑜伽与正念同源' },
        { type: 'p', text: '瑜伽的「专注当下」与正念冥想本是一脉。当你把注意力放在呼吸与身体感受上，大脑里反复播放的待办清单会自然安静下来。这也是为什么很多心理门诊会把瑜伽纳入压力管理。它不承诺让你变成杂技演员，却很可能让你变成一个「更稳、更松、更知道自己状态」的人。而这，恰恰是健康最被低估的内功。' },
        { type: 'quote', text: '身体的柔软，往往先从心里的松开始。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '柔韧不够，能不能练？' },
        { type: 'p', text: '「我骨头硬，练不了瑜伽」是最常见的自我排除。但瑜伽恰恰是为「硬」的人准备的——柔韧是练出来的，不是入场门槛。初学者从椅子上也能做的简易体式开始：坐椅猫式活动脊柱、椅上侧伸展打开腋下、扶椅单腿后抬练平衡。配合呼吸，循序渐进，三两个月后你会惊讶于身体的变化。真正要小心的不是「硬」，而是「急」：带着比较心和好胜心进瑜伽房，才最容易拉伤。把「今天比昨天多一厘米」当成胜利，瑜伽会回报你以耐心。' },
        { type: 'h2', text: '写在最后：垫子之外也是瑜伽' },
        { type: 'p', text: '很多人觉得「没练完一整套体式就不算瑜伽」，于是迟迟不开垫。其实瑜伽的精神可以延伸到垫子之外：排队时深呼吸三次，是瑜伽；对着电脑久坐后转转肩颈，是瑜伽；和家人意见不合时先停一拍再开口，也是瑜伽。它最终教的不是高难动作，而是一种「带着觉察生活」的能力。当你把这种觉察带进呼吸、带进动作、带进情绪，每一次日常都成了练习。所谓健康，不过是把这些微小的觉察，日复一日地活出来。' },
        { type: 'p', text: '所以，别再问「我有空了再练瑜伽」——你呼吸着的每一刻，瑜伽就已经开始了。' },
        { type: 'p', text: '如果今天只能带走一个动作，那就带走「深呼吸」：无论站着、坐着还是堵在路上，把气吸到腹底、再缓缓吐尽，重复五次。这一个小小的习惯，能在几分钟内把紧绷的神经松开，比任何补品都来得快。瑜伽不是要你逃离生活，而是帮你更好地待在生活里——带着柔软的身体，和更稳的心。愿你在垫上学会的放松，能一路跟到你垫外的每一天。' },
        { type: 'p', text: '所以，别把「没时间」当成借口；哪怕只做三个深呼吸、一个猫牛式，也是一次温柔的归位。' }
      ],
      en: [
        { type: 'lead', text: 'Many picture yoga as contorting the body into odd shapes and feel intimidated. But real yoga is far more than flexibility: through postures, breath and focus it gathers a scattered body and mind. For the sedentary, stiff-shouldered, sleepless and anxious modern, it may be a high-value daily prescription.' },
        { type: 'h2', text: 'What yoga actually trains' },
        { type: 'p', text: 'Physically, postures mobilize joints, lengthen tight muscles and strengthen deep stabilizers — helping rounded shoulders and anterior pelvic tilt from sitting. Neurologically, slow breathing activates the parasympathetic “rest” mode, lowering cortisol and heart rate. That’s why after class people feel “tired body, clear head.” It trains strength, flexibility and awareness at once.' },
        { type: 'h2', text: 'Which style fits you?' },
        { type: 'list', items: [ { zh: 'Hatha for beginners', en: 'Hatha for beginners' }, { zh: 'Vinyasa for flow', en: 'Vinyasa for flow' }, { zh: 'Yin for restore', en: 'Yin for restore' }, { zh: 'Iyengar for precision', en: 'Iyengar for precision' } ] },
        { type: 'h2', text: 'Three things to avoid injury' },
        { type: 'p', text: 'One, don’t compare — the most dangerous comparison is your day one against someone’s year three. Two, props are smart not shameful: blocks, straps, wall work. Three, respect “sting” — a stretch ache is fine, joint stabbing means exit the pose. Treating “no ego” as practice attitude actually speeds progress.' },
        { type: 'quote', text: 'Yoga isn’t putting your foot on your head — it’s resting your mind in this moment.', cite: ' — PureEat Editorial' },
        { type: 'h2', text: 'A ten-minute home start' },
        { type: 'p', text: 'No membership needed. Morning or before bed, try: cat-cow ×3 to mobilize the spine → downward dog to lengthen hamstrings → child’s pose for a minute → easy seated belly breathing for five rounds. Don’t chase perfection; feel the breath-body link. After two weeks you’ll likely notice looser shoulders, faster sleep, less irritability.' },
        { type: 'stats', items: [ { value: '3-in-1', label: { zh: 'Str·Flex·Aw', en: 'Str·Flex·Aw' } }, { value: '10min', label: { zh: 'Daily', en: 'Daily' } }, { value: '↓', label: { zh: 'Cortisol', en: 'Cortisol' } } ] },
        { type: 'h2', text: 'Yoga & mindfulness share a root' },
        { type: 'p', text: 'Yoga’s “present-moment focus” springs from the same root as mindfulness. When attention rests on breath and sensation, the looping to-do list quiets. That’s why clinics include yoga in stress care. It won’t make you an acrobat, but it may make you steadier, looser, and more aware of your own state — the underrated inner work of health.' },
        { type: 'quote', text: 'Bodily softness often begins with a loosened mind.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'pilates',
    category: { zh: '普拉提', en: 'Pilates' },
    title: { zh: '普拉提：练就「核心」的底气', en: 'Pilates: Building Confidence in Your Core' },
    excerpt: { zh: '普拉提不追求大汗淋漓，而追求「控制」。它用一个被低估的肌群——核心，重塑你的姿态、稳定与日常发力方式。', en: 'Pilates isn’t about sweating buckets — it’s about control. Through an underrated muscle group — the core — it reshapes posture, stability and everyday movement.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 8, cover: 'pilates',
    content: {
      zh: [
        { type: 'lead', text: '如果瑜伽让人想到「松」，普拉提给人的感觉则是「控」。这套由约瑟夫·普拉提在世纪初创立的训练体系，最初用于帮助伤兵康复，如今成了无数人改善体态、缓解腰背疼痛的利器。它不靠重量堆肌肉，而是靠精准的动作与呼吸，唤醒那些「睡着了」的深层肌群。本文带你认识这个被低估的练习。' },
        { type: 'h2', text: '普拉提的核心，不只是腹肌' },
        { type: 'p', text: '很多人以为「练核心」就是练出六块腹肌，这是误会。普拉提所说的核心，是围绕躯干的一圈「天然束腰」——包括腹横肌、多裂肌、盆底肌与膈肌。它们像人体的内置护腰，负责在每一次弯腰、转身、提东西时稳住脊柱。现代人久坐、核心沉睡，于是腰椎独自扛下所有压力，背痛便找上门。普拉提要做的，正是把这块「护腰」重新激活。' },
        { type: 'h2', text: '它凭什么改善体态与疼痛？' },
        { type: 'list', items: [
          { zh: '稳定脊柱：激活深层肌，减少腰椎代偿性劳损', en: 'Stabilize spine: wake deep muscles, cut lumbar overuse' },
          { zh: '平衡肌群：强化偏弱的后链，矫正圆肩骨盆前倾', en: 'Balance muscles: strengthen weak posterior chain, fix posture' },
          { zh: '神经控制：提升动作精准度，日常发力更省力', en: 'Motor control: better precision makes daily moves easier' },
          { zh: '呼吸协同：横向呼吸帮核心在运动中持续收紧', en: 'Breath synergy: lateral breathing keeps the core engaged' }
        ] },
        { type: 'h2', text: '垫上还是器械？' },
        { type: 'p', text: '普拉提分「垫上」（徒手，靠自重）和「器械」（如重组训练床 Reformer，靠弹簧阻力）。新手从垫上入门最方便：一张瑜伽垫、一套基础动作即可。器械则在专业场馆提供更精准的阻力与辅助，适合有康复需求或想进阶的人。无论哪种，关键都在于「质量胜过数量」——一个控制到位的卷腹，胜过十个借力乱甩的。' },
        { type: 'quote', text: '普拉提教会你的不是做更多动作，而是把每一个动作做对。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '在家可练的四个基础动作' },
        { type: 'p', text: '① 骨盆卷动：平躺屈膝，逐节抬起骨盆再放下，唤醒脊柱灵活与臀肌。② 百次拍击：仰卧抬腿，双臂上下轻拍并配合吸气五次、呼气五次，激活腹横肌。③ 死虫式：仰卧举腿举臂，对侧手脚缓慢下放再收回，练抗旋转稳定。④ 鸟狗式：四点支撑，对侧手腿缓慢平伸，练躯干刚性。每个动作慢、稳、呼吸不断，比做得快更有价值。' },
        { type: 'stats', items: [ { value: '360°', label: { zh: '核心如天然护腰', en: 'Core as natural corset' } }, { value: '4', label: { zh: '居家基础动作', en: 'Home base moves' } }, { value: 'Q', label: { zh: '质量>数量', en: 'Quality > quantity' } } ] },
        { type: 'h2', text: '谁尤其该试试？' },
        { type: 'p', text: '长期久坐、产后恢复、跑步或骑行爱好者、以及容易闪腰的人，往往是普拉提的最大受益者。它不喧哗、不暴汗，却像给身体做一次「底层校准」。当你能稳定地控制核心，很多原本以为「年纪大了就会痛」的问题，其实都有转圜余地。把它当作身体的「日常保养」，而非「临时急救」，效果才最持久。' },
        { type: 'quote', text: '真正的力量，不一定写在肌肉上，更藏在你能不能稳稳地控制自己。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '普拉提和卷腹，差在哪？' },
        { type: 'p', text: '很多人用上百个卷腹练腹，却总觉得腰更酸、腹没见。原因在于普通卷腹常靠髋屈肌「代偿」发力，腹肌没练到、腰先受伤。普拉提的思路相反：先教会核心「启动」，再让动作围绕稳定的脊柱展开，每一个卷腹都从深层收束开始。这也是为什么练普拉提的人，腰腹线条往往更「收」而非更「鼓」。若你只想拥有好看的腹肌，不妨把一半卷腹换成普拉提的死虫式与骨盆卷动——少而准，远胜多而乱。' },
        { type: 'h2', text: '写在最后：从一块垫子开始' },
        { type: 'p', text: '普拉提最迷人的地方，是它几乎零门槛——一张垫子、十几分钟、无需任何器械就能启动。你不必等「身材准备好」，也不必怕「动作不标准」，因为普拉提本身就是一门关于「标准」的练习，起点恰恰是不标准。每天睡前在垫子上做三组骨盆卷动与死虫式，一个月后你会发现自己弯腰捡东西不再小心翼翼，久坐后腰也不那么抗议了。把核心当作身体的「底层基础设施」去维护，它会在每一个不经意的瞬间，默默托住你。' },
        { type: 'p', text: '当你哪天能轻松抱起重物而腰不叫屈，便会懂得：当初那十几分钟的「控制」，全都值得。' },
        { type: 'p', text: '普拉提的哲学，其实可以迁移到生活：先把根基稳住，再谈发力；先求准确，再求幅度。这何尝不是一种做人态度——急于表现之前，先把底子打牢。所以别小看那几个「不起眼」的慢动作，它们正在悄悄重写你使用身体的方式。从今晚的垫子开始，给自己一份不喧哗、却长久的承诺：好好练核心，好好护脊柱，好好，陪身体走更远的路。' },
        { type: 'p', text: '哪怕今天只做两组骨盆卷动，也好过在「等有时间再系统练」的等待里，把腰一天天坐坏。' }
      ],
      en: [
        { type: 'lead', text: 'If yoga feels like “release,” Pilates feels like “control.” Created by Joseph Pilates to rehab injured soldiers, it’s now a go-to for posture and back pain. It doesn’t build bulk with weights — it wakes dormant deep muscles with precise movement and breath.' },
        { type: 'h2', text: 'The core is more than abs' },
        { type: 'p', text: 'Many think “core” means a six-pack — wrong. Pilates’ core is a natural corset around the trunk: transverse abdominis, multifidus, pelvic floor, diaphragm. They act as the body’s built-in back brace, stabilizing the spine in every bend, twist and lift. Sitting weakens them, the lumbar spine bears all the load, and back pain arrives. Pilates re-activates that brace.' },
        { type: 'h2', text: 'Why it helps posture & pain' },
        { type: 'list', items: [ { zh: 'Stabilize the spine', en: 'Stabilize the spine' }, { zh: 'Balance muscle groups', en: 'Balance muscle groups' }, { zh: 'Improve motor control', en: 'Improve motor control' }, { zh: 'Sync the breath', en: 'Sync the breath' } ] },
        { type: 'h2', text: 'Mat or equipment?' },
        { type: 'p', text: 'Pilates splits into mat (bodyweight) and equipment (e.g., Reformer with spring resistance). Beginners start on the mat: a yoga mat and basic moves suffice. Equipment offers precise resistance and assistance in studios, good for rehab or progression. Either way, quality beats quantity — one controlled curl beats ten flung reps.' },
        { type: 'quote', text: 'Pilates teaches not more moves, but doing each move right.', cite: ' — PureEat Editorial' },
        { type: 'h2', text: 'Four base moves at home' },
        { type: 'p', text: '1) Pelvic curl: lie down, peel the pelvis up spine by spine and lower — wakes spinal mobility and glutes. 2) Hundred: legs lifted, arms flutter, 5 inhales + 5 exhales — fires the transverse. 3) Dead bug: opposite arm/leg lowers slowly — anti-rotation stability. 4) Bird-dog: opposite arm/leg extend from all fours — trunk rigidity. Slow, stable, breath never stops — that beats fast.' },
        { type: 'stats', items: [ { value: '360°', label: { zh: 'Natural corset', en: 'Natural corset' } }, { value: '4', label: { zh: 'Base moves', en: 'Base moves' } }, { value: 'Q', label: { zh: 'Quality', en: 'Quality' } } ] },
        { type: 'h2', text: 'Who should especially try it' },
        { type: 'p', text: 'Long sitters, postpartum recovery, runners/cyclists, and the easily “thrown back” benefit most. It’s quiet and low-sweat, yet recalibrates the body’s base. When you can steadily control the core, many “age-related aches” turn out fixable. Treat it as routine maintenance, not emergency care, and the effect lasts.' },
        { type: 'quote', text: 'Real strength isn’t only written on muscle — it’s in whether you can steady yourself.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'taichi',
    category: { zh: '太极', en: 'Tai Chi' },
    title: { zh: '太极：慢下来，反而更有力', en: 'Tai Chi: Slow Down, Gain Power' },
    excerpt: { zh: '太极被西方研究反复印证为「最适合长辈」的运动之一。其实无论几岁，这套缓慢流动里都藏着平衡、放松与专注的功夫。', en: 'Tai chi is repeatedly validated in the West as among the best exercise for older adults. But at any age, its slow flow hides skills of balance, relaxation and focus.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 8, cover: 'taichi',
    content: {
      zh: [
        { type: 'lead', text: '清晨的公园里，常能看到一群人动作缓慢、如行云流水——那是太极。过去它常被贴上「老年人运动」的标签，但近年大量研究证明：这套源自中国武术的缓慢练习，对任何年龄都有实实在在的益处，尤其在平衡、防跌倒与压力调节上。它不靠爆发，而靠「意、气、形」的统一，让身体在慢里找回控制。' },
        { type: 'h2', text: '太极到底练什么？' },
        { type: 'p', text: '太极是一套以重心转移为核心的「动态平衡训练」。每一个动作都要求重心在两脚间缓慢移动、膝盖微屈、脊柱中正，这恰好训练了日常生活中最容易被忽视的「防跌倒能力」。同时，缓慢深长的腹式呼吸会激活副交感神经，让心率与血压趋于平稳。从力学到神经，太极都在做一件看似简单却极难的事：把身体「稳稳地」交给重力，而不是和它对抗。' },
        { type: 'h2', text: '被研究证实的好处' },
        { type: 'list', items: [
          { zh: '防跌倒：改善本体感觉与平衡，长辈获益最明显', en: 'Fall prevention: better balance & proprioception, clearest for elders' },
          { zh: '降压舒心：规律练习有助降低静息血压与焦虑', en: 'Calmer pressure: regular practice lowers resting BP & anxiety' },
          { zh: '关节友好：低冲击、全程可控，膝盖负担小', en: 'Joint-friendly: low impact, fully controlled, easy on knees' },
          { zh: '专注当下：动作配合呼吸，天然带正念属性', en: 'Present focus: movement + breath is naturally mindful' }
        ] },
        { type: 'h2', text: '新手如何入门？' },
        { type: 'p', text: '不必追求「打通任督二脉」的玄学叙事。最务实的入门是跟一套简化的「八段锦」或「二十四式简化太极拳」的视频，每天十几分钟，只求动作连贯、呼吸自然。重点不在标准得像大师，而在「慢、连、松」三字：动作慢下来，上下才连得起来；身心松下来，气才顺得下去。刚开始腿会酸，那是下肢稳定肌在被唤醒，是好事。' },
        { type: 'quote', text: '太极的「慢」，不是迟钝，而是把每一个瞬间都走得很清楚。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '它和瑜伽、普拉提有什么不同？' },
        { type: 'p', text: '瑜伽偏静态拉伸与呼吸，普拉提偏核心控制与精准，太极则偏「移动的冥想」——在连续走动中保持放松与平衡。三者并不冲突，反可互补：有人早上太极、晚上瑜伽，把「动中的静」与「静中的松」都收入囊中。对关节不适或怕剧烈的人来说，太极是极少有的「零门槛、零装备、零风险」的全身体验。' },
        { type: 'stats', items: [ { value: '≈15min', label: { zh: '每日可入门', en: 'Daily entry' } }, { value: '0', label: { zh: '装备门槛', en: 'Gear barrier' } }, { value: '↑', label: { zh: '平衡能力', en: 'Balance up' } } ] },
        { type: 'h2', text: '把太极变成日常' },
        { type: 'p', text: '太极最迷人的地方，是它不需要专门「练」，可以融入生活：等电梯时站个混元桩、办公久坐后做几个云手、睡前以起势收尾帮助入眠。当「慢」从拳法走进脾气，你会发现自己面对拥堵、排队、突发状况时，呼吸更稳、火气更小。这或许才是太极留给现代人最珍贵的礼物——一种不被外界轻易打乱的节奏感。' },
        { type: 'quote', text: '真正的功夫，是外界越乱，你心里越有那一圈稳稳的气。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '年轻人练太极，会不会「太老成」？' },
        { type: 'p', text: '常有人觉得太极是长辈的专利，年轻人该去撸铁跑步。其实正相反：长期伏案、低头看屏的年轻人，恰恰最缺「身体的觉察与稳定」。太极里缓慢的重心转移，是在给久坐僵硬的身体做一次温柔的复位；而它对手眼协调与专注力的训练，对需要高浓度脑力工作的年轻人同样珍贵。不妨把它当成高强度训练之间的「主动恢复」——大汗之后来一段慢练，一张一弛，反而更可持续。年轻不是拒绝太极的理由，而是把它练得更久的本钱。' },
        { type: 'h2', text: '写在最后：太极是一辈子的事' },
        { type: 'p', text: '与许多追求「更快更强」的运动不同，太极的妙处在于它陪得了你一辈子。二十岁时它帮你建立身体的觉察，四十岁时它替你松开僵硬的肩颈，七十岁时它护你少摔一跤。它不挑场地、不挑天气、不挑同伴，一个人也能练，一群人也能乐。也许你永远成不了大师，但只要你愿意每天慢下来十几分钟，身体会记住这份从容，并在某个拥堵的清晨、某次情绪的浪头里，悄悄把你稳稳接住。这，就是太极最实在的馈赠。' },
        { type: 'p', text: '它不承诺马甲线，也不许诺PB，却许你一份「不乱」——而这，恰恰是成年人最稀缺的体力。' },
        { type: 'p', text: '不妨把太极当成一天里的「暂停键」：清晨练一遍，是把心神从睡意里轻轻唤醒；傍晚练一遍，是把一天的纷乱慢慢抚平。不必追求招式完整，哪怕只站个混元桩、做几个起势，只要注意力在呼吸与重心之间流转，便已得其神。日子久了，你会发现自己走路更稳、站得更直、遇事也没那么容易慌。这便是太极最朴素的回报：不声不响，却处处受用。' },
        { type: 'p', text: '它不追求汗如雨下，却把「稳」悄悄种进你的身体——这比一时的燃脂，更经得起岁月的盘问。' }
      ],
      en: [
        { type: 'lead', text: 'In morning parks you’ll see groups moving like flowing clouds — that’s tai chi. Long labeled “an old-person sport,” it’s now proven by research to benefit any age, especially for balance, fall prevention and stress. It relies not on explosive force but on unifying intention, breath and form — reclaiming control through slowness.' },
        { type: 'h2', text: 'What tai chi trains' },
        { type: 'p', text: 'Tai chi is dynamic balance training built on weight shifts. Every move transfers weight slowly between feet, knees soft, spine upright — exactly the “fall-prevention” skill daily life neglects. Slow abdominal breathing activates the parasympathetic system, steadying heart rate and blood pressure. Mechanically and neurologically, it does something simple yet hard: hand the body gently to gravity instead of fighting it.' },
        { type: 'h2', text: 'Benefits the research shows' },
        { type: 'list', items: [ { zh: 'Fall prevention', en: 'Fall prevention' }, { zh: 'Lower pressure & anxiety', en: 'Lower pressure & anxiety' }, { zh: 'Joint-friendly', en: 'Joint-friendly' }, { zh: 'Present-moment focus', en: 'Present-moment focus' } ] },
        { type: 'h2', text: 'How beginners start' },
        { type: 'p', text: 'Skip the mysticism. The practical start is a simplified “Baduanjin” or “24-form simplified tai chi” video, ten-ish minutes daily, seeking only smooth flow and natural breath. The point isn’t master-level form but three words: slow, connected, relaxed. Legs will ache at first — that’s the stabilizing muscles waking up, a good sign.' },
        { type: 'quote', text: 'Tai chi’s “slow” isn’t dullness — it’s walking each moment with clarity.', cite: ' — PureEat Editorial' },
        { type: 'h2', text: 'How it differs from yoga & Pilates' },
        { type: 'p', text: 'Yoga leans static stretch and breath, Pilates leans core control and precision, tai chi leans “moving meditation” — relaxed balance in continuous motion. They complement, not conflict: some do tai chi mornings and yoga nights. For achy joints or fear of intensity, tai chi is rare “zero-threshold, zero-gear, zero-risk” full-body practice.' },
        { type: 'stats', items: [ { value: '≈15min', label: { zh: 'Daily', en: 'Daily' } }, { value: '0', label: { zh: 'Gear', en: 'Gear' } }, { value: '↑', label: { zh: 'Balance', en: 'Balance' } } ] },
        { type: 'h2', text: 'Make it daily' },
        { type: 'p', text: 'Tai chi needn’t be “practice” — it can fold into life: a standing posture while waiting for the elevator, a few “cloud hands” after sitting, a closing form before bed. When “slow” enters your temper, you’ll notice steadier breath and less anger in traffic, queues and surprises. Perhaps that’s tai chi’s gift to modern life — a rhythm not easily broken by the outside world.' },
        { type: 'quote', text: 'True skill is this: the more chaotic the world, the steadier the circle of calm within you.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'meditation',
    category: { zh: '静坐', en: 'Meditation' },
    title: { zh: '静坐：给大脑一个「清空缓存」的机会', en: 'Meditation: A Chance to Clear the Mind’s Cache' },
    excerpt: { zh: '静坐不是要你「什么都不想」，而是学会与念头共处。它是最低成本的心理健康练习，却常被误解为玄学。', en: 'Meditation isn’t “thinking of nothing” — it’s learning to sit with thoughts. The lowest-cost mental-health practice is often mistaken for mysticism.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 8, cover: 'meditation',
    content: {
      zh: [
        { type: 'lead', text: '我们每天接收的信息量，可能超过祖先一辈子的总和。大脑像开了几十个标签页的浏览器，越积越卡。静坐（正念冥想）就是给这台「电脑」一次清空缓存的机会。它不需要盘腿成佛，也不需要特殊信仰——只要每天几分钟，把注意力带回当下。越来越多神经科学证据显示：静坐能实实在在地改变大脑结构与情绪反应。' },
        { type: 'h2', text: '静坐时大脑发生了什么？' },
        { type: 'p', text: '脑成像研究发现，长期冥想者大脑中「杏仁核」（负责恐惧与应激）体积缩小、活跃度下降，而「前额叶」（负责理性与情绪调节）更厚、连接更强。翻译成人话就是：你更容易在愤怒或焦虑来袭时「踩住刹车」，而不是被情绪带着跑。此外，默认模式网络（走神相关的脑区）的活动变得更可控，专注力随之提升。换句话说，静坐练的不是「放空」，而是「调控注意力的肌肉」。' },
        { type: 'h2', text: '最常见的三个误解' },
        { type: 'list', items: [
          { zh: '误解一「必须空白」：念头冒出来很正常，觉察到再轻轻拉回即可', en: 'Myth 1 “must be blank”: thoughts arise — notice and gently return' },
          { zh: '误解二「要信宗教」：正念是训练注意力的技术，与信仰无关', en: 'Myth 2 “needs religion”: mindfulness is attention training, faith-neutral' },
          { zh: '误解三「没时间」：每天三到五分钟就有效，关键在规律', en: 'Myth 3 “no time”: 3–5 min daily works; consistency is key' }
        ] },
        { type: 'h2', text: '新手的三分钟呼吸法' },
        { type: 'p', text: '找个安静处坐下，脊背自然挺直，闭眼或垂视。把注意力放在鼻端或腹部的呼吸起伏上。吸气默数一，呼气默数二，数到十再回到一。当发现走神（一定会），不必自责，只需在心里轻声标记「想了」，再把注意力温柔地放回呼吸。三分钟结束，缓缓睁眼。这短短几分钟，就是给过载的大脑一次「重启」。' },
        { type: 'quote', text: '你不需要消灭念头，你只需要不再被每一个念头绑架。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '把正念嵌进生活' },
        { type: 'p', text: '正式的坐姿只是入口。真正的红利，是把「觉察」带进日常：吃饭时专心尝味道而不是刷手机，走路时感受脚底与地面，通勤时观察呼吸而不是刷新消息。这些「微正念」不需要额外时间，却能把焦虑的惯性打断。当一件事让你火大，试着先深呼吸三次再回应——你会惊讶于这一小段留白带来的改变。' },
        { type: 'stats', items: [ { value: '3–5min', label: { zh: '每日有效起点', en: 'Daily effective start' } }, { value: '↓', label: { zh: '杏仁核活跃度', en: 'Amygdala activity' } }, { value: '↑', label: { zh: '前额叶调控', en: 'Prefrontal control' } } ] },
        { type: 'h2', text: '它不是万能，但很值得' },
        { type: 'p', text: '静坐不能替代治疗，严重的焦虑或抑郁仍需专业帮助。但它像一把随时可用的「情绪扳手」，帮你在大浪来临时少翻船。研究还提示，规律冥想有助于改善睡眠、降低慢性炎症、提升共情与专注。把每天几分钟的静坐，当成给未来自己的「心理定投」——本金不大，复利惊人。' },
        { type: 'quote', text: '最好的投资，是给自己一个不被念头劫持的自由。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '静不下来，是不是不适合？' },
        { type: 'p', text: '「我试过，根本坐不住」是最常听到的放弃理由。但静坐不是「坐得住才能练」，而是「正因为坐不住才要练」。初学者前几十次走神是常态，衡量进步的从不是「有没有杂念」，而是「有没有发现自己走神」。每一次把飘走的注意力拉回呼吸，都是一次微小的「注意力卧推」。如果闭眼盘坐让你焦虑，也可以睁眼盯着烛火或窗外一枝树影；甚至在通勤地铁上做三分钟观呼吸，也算数。门槛低到「任何地方、任何姿势、任意三分钟」都能开始，剩下的只是允许自己不完美。' },
        { type: 'h2', text: '写在最后：从今晚的三分钟开始' },
        { type: 'p', text: '你不必把静坐想成一场修行，它只是每天留给自己的三分钟空白。睡前放下手机，闭眼，把注意力放在呼吸上，任由念头来去——这就是开始。坚持下去，你会发现自己对情绪的「反应速度」变慢了，不是麻木，而是多了一段选择的余地。那段余地，往往就是避免一句伤人的话、一个冲动的决定、一夜辗转难眠的关键。静坐给不了你超能力，却能给你一样更稀有的东西：在喧嚣里，依然能做自己的主人的那份清醒。' },
        { type: 'p', text: '从今晚起，不妨就试一次：只是三分钟，只是呼吸。明早的你，会谢谢今晚的自己。' },
        { type: 'p', text: '如果生活让你觉得被切成碎片，静坐就是那根把你重新缝起来的线。它不解决具体问题，却给你面对问题的清醒；它不消灭压力，却帮你和压力保持一段健康的距离。在信息无限、注意力稀缺的今天，能安安静静和自己待一会儿，本身就是一种稀缺的能力，更是一种温柔的自我保护。愿你在喧嚣世界里，始终为内心留一张安静的椅子。' },
        { type: 'p', text: '当念头再起，别急着赶走它——看见，便是松手的开始。' }
      ],
      en: [
        { type: 'lead', text: 'We absorb more information in a day than our ancestors did in a lifetime. The brain is a browser with dozens of tabs open — and it gets laggy. Meditation is the chance to clear that cache. No lotus pose, no belief required — just a few minutes returning attention to the present. Neuroscience increasingly shows it literally changes brain structure and emotional response.' },
        { type: 'h2', text: 'What happens in the brain' },
        { type: 'p', text: 'Brain imaging shows long-term meditators have a smaller, less reactive amygdala (fear/stress) and a thicker, better-connected prefrontal cortex (reason and regulation). In plain terms: you more easily “hit the brakes” on anger or anxiety instead of being swept along. The default-mode network (mind-wandering) becomes more controllable, boosting focus. Meditation trains not “blanking out” but the muscle of directing attention.' },
        { type: 'h2', text: 'Three common myths' },
        { type: 'list', items: [ { zh: 'Must be blank', en: 'Must be blank' }, { zh: 'Needs religion', en: 'Needs religion' }, { zh: 'No time', en: 'No time' } ] },
        { type: 'h2', text: 'A three-minute breathing start' },
        { type: 'p', text: 'Sit somewhere quiet, spine naturally straight, eyes closed or lowered. Rest attention on the breath at the nose or belly. Inhale, count one; exhale, count two; to ten, back to one. When the mind wanders (it will), don’t scold — softly note “thinking” and gently return to the breath. After three minutes, open the eyes slowly. That short pause is a reboot for an overloaded brain.' },
        { type: 'quote', text: 'You needn’t erase thoughts — only stop being hijacked by each one.', cite: ' — PureEat Editorial' },
        { type: 'h2', text: 'Weave mindfulness into life' },
        { type: 'p', text: 'Formal sitting is just the door. The real dividend is bringing awareness to daily life: taste food instead of scrolling, feel feet on ground while walking, watch the breath instead of refreshing feeds. These “micro-mindfulness” moments need no extra time yet break anxiety’s autopilot. When something enrages you, try three breaths before replying — you’ll be surprised by the change that small gap brings.' },
        { type: 'stats', items: [ { value: '3–5min', label: { zh: 'Effective start', en: 'Effective start' } }, { value: '↓', label: { zh: 'Amygdala', en: 'Amygdala' } }, { value: '↑', label: { zh: 'Prefrontal', en: 'Prefrontal' } } ] },
        { type: 'h2', text: 'Not magic, but worth it' },
        { type: 'p', text: 'Meditation isn’t a cure; serious anxiety or depression still needs professional help. But it’s an always-available “emotional wrench” that keeps you from capsizing in big waves. Research also links regular practice to better sleep, lower inflammation, and more empathy and focus. Treat daily minutes of sitting as a “psychological investment” for future you — small principal, astonishing compound.' },
        { type: 'quote', text: 'The best investment is the freedom of not being hijacked by your own thoughts.', cite: ' — PureEat Editorial' }
      ]
    }
  },

  {
    id: 'hiking',
    category: { zh: '爬山', en: 'Hiking' },
    title: { zh: '爬山：把锻炼还给自己然', en: 'Hiking: Give Exercise Back to Nature' },
    excerpt: { zh: '爬山是少数「让人忘记在锻炼」的运动。坡度、风景与新鲜空气叠加，心肺、情绪与维生素D一次补齐。', en: 'Hiking is one of the few exercises where you forget you’re exercising. Grade, views and fresh air combine to refill cardio, mood and vitamin D at once.' },
    author: { zh: '净食编辑部', en: 'PureEat Editorial' }, date: '2026-07-14', readingTime: 8, cover: 'hiking',
    content: {
      zh: [
        { type: 'lead', text: '在跑步机上盯着数字容易枯燥，但在山里，你只会记得风吹过耳边的声音和登顶那一刻的辽阔。爬山（徒步）是极少数的「沉浸式有氧」——因为注意力被风景吸走，你往往在不经意间就完成了一次高质量训练。它兼具有氧、力量与心理修复，是都市人周末最值得的「充电」方式之一。' },
        { type: 'h2', text: '为什么爬山特别「值」？' },
        { type: 'p', text: '上下坡的不规则地形，比平整的跑步机更能全面激活下肢与核心：上坡练臀腿与心肺，下坡考验股四头肌的离心控制与膝关节稳定。更关键的是「绿色运动效应」——研究一致发现，在自然环境中运动，焦虑与抑郁评分下降幅度大于室内同等强度运动。再加上户外阳光促进维生素D合成，爬山几乎是一剂「身心同补」的复合处方。' },
        { type: 'h2', text: '从新手到进阶怎么走？' },
        { type: 'list', items: [
          { zh: '新手：城市郊野公园的平整步道，单程 3–5 公里即可', en: 'Beginner: flat urban park trails, 3–5 km one way' },
          { zh: '进阶：有起伏的郊山，累计爬升 300–600 米', en: 'Intermediate: hilly outskirts, 300–600 m elevation' },
          { zh: '资深：长距离纵走或高山线，需装备与体力储备', en: 'Advanced: long traverses or alpine lines, gear & fitness needed' }
        ] },
        { type: 'h2', text: '安全与装备的底线' },
        { type: 'p', text: '爬山最大的风险不是累，而是「准备不足」。出发前查天气与路线，告知家人去向；穿抓地好的徒步鞋而非运动鞋，带足饮水与一份高能量零食；用「分层穿衣」应对山上温差——出汗后及时减衣、休息时加衣，避免着凉。遵循「不留痕迹」原则，把垃圾带走。记住一句老话：山永远在那里，安全回家比登顶更重要。' },
        { type: 'quote', text: '登顶的快感只有一瞬，懂得安全下山的本事才陪你走一辈子。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '膝盖友好地上下坡' },
        { type: 'p', text: '很多人爬山后膝盖痛，问题常出在下坡姿势。下坡时身体微微后坐、小步慢下，让大腿前侧肌肉「刹车」而非让膝盖硬扛冲击；可用登山杖分担约 20% 的下肢负荷。上坡则保持小步频、身体略前倾，用臀而不是用膝发力。爬升时不要憋气，配合步伐呼吸，既能省力也能让心率更平稳。' },
        { type: 'stats', items: [ { value: '3–5km', label: { zh: '新手友好距离', en: 'Beginner-friendly' } }, { value: '~20%', label: { zh: '登山杖减负', en: 'Pole load relief' } }, { value: 'D', label: { zh: '顺带补维D', en: 'Vitamin D too' } } ] },
        { type: 'h2', text: '把山变成习惯' },
        { type: 'p', text: '不必等长假才进山。许多城市周边都有可公交到达的步道，周末半日即可往返。约上朋友或加入徒步社群，既能互相照应也更容易坚持。当你把爬山从「偶尔的壮举」变成「规律的约会」，你会发现：最好的健身房其实没有屋顶——它叫自然，而且门票往往免费。' },
        { type: 'quote', text: '山不教你赢，它只教你：一步一步，也能走到很高很远的地方。', cite: ' —— 净食编辑部' },
        { type: 'h2', text: '没时间去远山，城市里怎么「爬」？' },
        { type: 'p', text: '爬山不一定要名山大川。城市里的天桥阶梯、河堤坡道、甚至办公楼的消防楼梯，都是现成的「微型山坡」。把通勤的最后一段改成走楼梯、把晚饭后的一圈改成小区里的坡道快走，身体得到的坡度刺激与山地并无本质差别。关键是把「爬升」嵌进日常，而不是等一个完美的周末。当你开始用「这里能不能练腿」的眼光看周围，整座城市都会变成你的低配版健身房——免费、随时、还不排队。' },
        { type: 'h2', text: '写在最后：山就在那里，你也是' },
        { type: 'p', text: '我们总把登山说成「征服」，其实山从不需要被征服，它只是在那里，安静地接纳每一个愿意走近的人。真正被改变的，是爬山的人——膝盖更有力了，呼吸更稳了，面对生活陡坡时也不再那么容易喘。下次感到被困在水泥森林里，不妨把周末留给一座小山：不必很高，不必很远，只要让风吹过额头、让视野越过屋顶。当你站在坡顶回望来路，会明白所谓健康，不过是把身体一次次交还给更大的世界，并在归来时，带着更轻的脚步与更宽的肩膀。' },
        { type: 'p', text: '这周末，挑一座你能走完的小山，去赴一场和自然的约会吧——它会用一整天的轻盈回报你。' },
        { type: 'p', text: '最后记得，爬山的意义从不只在登顶。下山的路往往更长更考验膝盖，却也最能教会人「如何稳稳地回来」——这像极了人生：重要的不只是冲上去的劲头，更是平安落地的本事。带着对山的敬畏出发，带着对身体的照顾归来。愿每一次出发都算数，每一次归来都更稳。山一直都在，慢慢走，你总能到的。' },
        { type: 'p', text: '下次出发前，记得把「安全回家」写进目标的第一行——登顶是惊喜，平安才是底线。' },
        { type: 'p', text: '愿你走过的每一步山路，都成为回到生活时更稳的脚步。' },
        { type: 'p', text: '这个周末，就选一座小山，穿上鞋，出发吧——山下的你，会谢谢山上的自己。' }
      ],
      en: [
        { type: 'lead', text: 'The treadmill’s numbers are dull; in the hills you only remember wind in your ears and the vastness at the summit. Hiking is rare “immersive aerobic” — attention stolen by the view, you finish a quality session almost by accident. It blends cardio, strength and mental repair, making it one of the best weekend “recharges” for city dwellers.' },
        { type: 'h2', text: 'Why hiking is especially “worth it”' },
        { type: 'p', text: 'Uneven grades activate more of the lower body and core than a flat treadmill: uphill builds glutes, quads and lungs; downhill tests eccentric control and knee stability. Add the “green exercise effect” — studies consistently show nature movement lowers anxiety and depression more than equal indoor effort — plus sunlight’s vitamin D. Hiking is a combined mind-body prescription.' },
        { type: 'h2', text: 'From beginner to advanced' },
        { type: 'list', items: [ { zh: 'Beginner: flat trails', en: 'Beginner: flat trails' }, { zh: 'Intermediate: hilly', en: 'Intermediate: hilly' }, { zh: 'Advanced: alpine', en: 'Advanced: alpine' } ] },
        { type: 'h2', text: 'Safety & gear baseline' },
        { type: 'p', text: 'The biggest risk isn’t fatigue but poor preparation. Check weather and route, tell someone your plan; wear grippy trail shoes not sneakers; carry enough water and a high-energy snack; dress in layers for mountain temperature swings — shed when sweating, add when resting. Follow “leave no trace.” Old saying: the mountain will always be there; getting home safe beats the summit.' },
        { type: 'quote', text: 'The summit thrill lasts a moment; knowing how to descend safely lasts a lifetime.', cite: ' — PureEat Editorial' },
        { type: 'h2', text: 'Knee-friendly up & down' },
        { type: 'p', text: 'Post-hike knee pain usually comes from downhill form. Sit back slightly, take short slow steps so the front thigh “brakes” instead of the knee absorbing impact; trekking poles offload ~20% of lower-limb load. Uphill, keep a quick cadence, lean forward a bit, drive with the hips not the knees. Don’t hold your breath — breathe with the steps to steady heart rate.' },
        { type: 'stats', items: [ { value: '3–5km', label: { zh: 'Beginner', en: 'Beginner' } }, { value: '~20%', label: { zh: 'Pole relief', en: 'Pole relief' } }, { value: 'D', label: { zh: 'Vitamin D', en: 'Vitamin D' } } ] },
        { type: 'h2', text: 'Make the hills a habit' },
        { type: 'p', text: 'You needn’t wait for a long holiday. Many cities have bus-accessible trails for a half-day round trip. Go with friends or join a hiking group for safety and adherence. When hiking shifts from “occasional feat” to “regular date,” you’ll find the best gym has no roof — it’s called nature, and the entry is often free.' },
        { type: 'quote', text: 'The mountain doesn’t teach you to win — only that step by step you can go high and far.', cite: ' — PureEat Editorial' }
      ]
    }
  }
]

export function getArticle(id) {
  return articles.find((a) => a.id === id) || null
}

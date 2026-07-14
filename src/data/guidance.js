/**
 * 权威饮食指南卡片数据（中英文结构化）。
 * 新增机构：复制一个对象即可，组件会自动渲染。
 * 字段说明：
 *   id      唯一标识
 *   icon    图标名（对应 Icon.vue 中的命名）
 *   accent  主题强调色（用于图标底色与微光）
 *   url     点击卡片后跳转的官方来源网站（新标签页打开）
 *   org     机构名称
 *   title   指南/报告名称
 *   status  地位一句话
 *   summary 核心简介
 *   points  核心要点列表（每条含 zh / en）
 */
export const guidanceItems = [
  {
    id: 'who',
    icon: 'globe',
    accent: '#30B0C7',
    url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
    org: { zh: '世界卫生组织', en: 'World Health Organization' },
    title: { zh: '健康饮食建议', en: 'Healthy Diet' },
    status: { zh: '全球最高权威', en: 'The global authority' },
    summary: {
      zh: '强调低盐、低糖、限制不健康脂肪，并保证每天足量的蔬菜水果摄入。',
      en: 'Emphasizes less salt and sugar, limited unhealthy fats, and plenty of fruit and vegetables every day.'
    },
    points: [
      { zh: '每天至少 400 克（约 5 份）蔬菜水果', en: 'At least 400 g (≈5 servings) of fruit & veg daily' },
      { zh: '游离糖摄入应低于总能量的 10%', en: 'Free sugars below 10% of total energy' },
      { zh: '食盐控制在每天少于 5 克', en: 'Less than 5 g of salt per day' },
      { zh: '用不饱和脂肪替代饱和脂肪', en: 'Replace saturated with unsaturated fats' }
    ]
  },
  {
    id: 'harvard',
    icon: 'plate',
    accent: '#FF9F0A',
    url: 'https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/',
    org: { zh: '哈佛大学公共卫生学院', en: 'Harvard T.H. Chan School' },
    title: { zh: '健康饮食餐盘', en: 'Healthy Eating Plate' },
    status: { zh: '比 MyPlate 更严谨的科学指南', en: 'Rigorous, science-based alternative to MyPlate' },
    summary: {
      zh: '用「餐盘比例」直观告诉你蔬菜、全谷物、健康蛋白质各该占多少。',
      en: 'Uses a plate model to show exactly how much of each food group belongs on your plate.'
    },
    points: [
      { zh: '½ 餐盘为各种颜色的蔬菜', en: '½ plate: colorful vegetables' },
      { zh: '¼ 餐盘为全谷物', en: '¼ plate: whole grains' },
      { zh: '¼ 餐盘为健康蛋白质', en: '¼ plate: healthy protein' },
      { zh: '饮水、咖啡或茶，限制乳制品与果汁', en: 'Water, coffee or tea; limit dairy & juice' }
    ]
  },
  {
    id: 'mediterranean',
    icon: 'leaf',
    accent: '#34C759',
    url: 'https://oldwayspt.org/',
    org: { zh: '地中海饮食指南', en: 'Mediterranean Diet' },
    title: { zh: '地中海饮食法', en: 'Mediterranean Diet' },
    status: { zh: '连续多年「全球最佳综合饮食」', en: 'Named best overall diet for years running' },
    summary: {
      zh: '以植物性食物与橄榄油为核心，适量鱼类，被证明能预防心血管疾病。',
      en: 'Plant-forward with olive oil and moderate fish — proven to prevent heart disease.'
    },
    points: [
      { zh: '特级初榨橄榄油为主要脂肪来源', en: 'Extra-virgin olive oil as the main fat' },
      { zh: '大量蔬菜、豆类、坚果与全谷物', en: 'Abundant veg, legumes, nuts, whole grains' },
      { zh: '每周适量鱼类与海鲜', en: 'Moderate fish & seafood weekly' },
      { zh: '少量红肉，适量红酒佐餐', en: 'Little red meat; wine in moderation' }
    ]
  },
  {
    id: 'china',
    icon: 'wheat',
    accent: '#FF375F',
    url: 'https://www.cnsoc.org/',
    org: { zh: '中国营养学会', en: 'Chinese Nutrition Society' },
    title: { zh: '中国居民膳食指南（2022）', en: 'Chinese Dietary Guidelines' },
    status: { zh: '最适合东亚人饮食习惯的指南', en: 'Best fit for East Asian eating habits' },
    summary: {
      zh: '提出「平衡膳食宝塔」，强调食物多样、谷类为主、吃动平衡。',
      en: 'A food pagoda emphasizing variety, grains-based meals and energy balance.'
    },
    points: [
      { zh: '食物多样，平均每天摄入 12 种以上', en: 'Variety: 12+ foods a day' },
      { zh: '谷类为主，全谷物与杂豆占一定比例', en: 'Grains first, with whole grains & pulses' },
      { zh: '吃动平衡，保持健康体重', en: 'Balance eating with activity' },
      { zh: '少盐少油，控糖限酒', en: 'Less salt & oil; limit sugar & alcohol' }
    ]
  },
  {
    id: 'nhs',
    icon: 'grid',
    accent: '#5E5CE6',
    url: 'https://www.nhs.uk/live-well/eat-well/the-eatwell-guide/',
    org: { zh: '英国国家医疗服务体系', en: 'NHS (UK)' },
    title: { zh: 'Eatwell 指南', en: 'The Eatwell Guide' },
    status: { zh: '视觉化做得最易懂的官方指南', en: 'The clearest visual official guide' },
    summary: {
      zh: '把食物分成五组并用比例图呈现，普通民众一眼就懂怎么吃。',
      en: 'Groups foods into five sections with proportions anyone can understand at a glance.'
    },
    points: [
      { zh: '大量蔬菜水果（占餐盘最多）', en: 'Plenty of fruit & veg (largest share)' },
      { zh: '主食以土豆、面包、米饭、面食为主', en: 'Potatoes, bread, rice, pasta as base' },
      { zh: '奶制品或替代品补充钙', en: 'Dairy or alternatives for calcium' },
      { zh: '豆类、鱼、蛋、肉提供蛋白质', en: 'Beans, fish, eggs, meat for protein' }
    ]
  },
  {
    id: 'bluezones',
    icon: 'heart',
    accent: '#BF5AF2',
    url: 'https://www.bluezones.com/',
    org: { zh: '蓝区生活方式研究', en: 'Blue Zones' },
    title: { zh: '蓝区长寿生活法', en: 'Blue Zones' },
    status: { zh: '研究全球长寿地区的共同习惯', en: 'Studying habits of the world’s longest-lived' },
    summary: {
      zh: '不止于饮食，更包含社交、运动与心理健康的整体生活方式。',
      en: 'Beyond food: a whole lifestyle of community, movement and calm.'
    },
    points: [
      { zh: '以植物为主的日常饮食', en: 'Mostly plant-based everyday meals' },
      { zh: '适度进食，晚餐早且少', en: 'Moderate portions; early, light dinners' },
      { zh: '稳定的社交与家庭关系', en: 'Strong community & family ties' },
      { zh: '天然的身体活动与减压习惯', en: 'Natural movement & built-in downtime' }
    ]
  }
]

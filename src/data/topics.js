/**
 * 主题筛选分类（中英文双语）。
 * topics: 筛选栏展示的标签（key + 双语 label）。
 * articleTopics: 文章 id -> 所属主题 key 列表（支持一篇文章归入多个主题）。
 */
export const topics = [
  { key: 'all', label: { zh: '全部', en: 'All' } },
  { key: 'diet', label: { zh: '饮食', en: 'Nutrition' } },
  { key: 'sleep', label: { zh: '睡眠', en: 'Sleep' } },
  { key: 'fitness', label: { zh: '运动', en: 'Movement' } },
  { key: 'mind', label: { zh: '正念', en: 'Mind' } }
]

export const articleTopics = {
  mediterranean: ['diet'],
  diet: ['diet'],
  sleep: ['sleep'],
  exercise: ['fitness'],
  jogging: ['fitness'],
  aerobic: ['fitness'],
  yoga: ['fitness', 'mind'],
  pilates: ['fitness'],
  taichi: ['fitness', 'mind'],
  meditation: ['mind'],
  hiking: ['fitness'],
  'gut-health': ['diet'],
  circadian: ['sleep'],
  strength: ['fitness'],
  'run-form': ['fitness'],
  hiit: ['fitness'],
  'yoga-desk': ['fitness', 'mind'],
  'pilates-posture': ['fitness'],
  'taichi-balance': ['fitness', 'mind'],
  breathwork: ['mind'],
  'hike-safety': ['fitness']
}

/**
 * 根据文章主题返回统一风格的图标名（与 guidelines 卡片同源的 Lucide 图标）。
 * 优先级：睡眠 > 正念 > 饮食 > 运动，保证每篇文章都有稳定一致的图标。
 */
export function iconForArticle(id) {
  const ts = articleTopics[id] || []
  if (ts.includes('sleep')) return 'moon'
  if (ts.includes('mind')) return 'sparkles'
  if (ts.includes('diet')) return 'plate'
  if (ts.includes('fitness')) return 'heart'
  return 'leaf'
}

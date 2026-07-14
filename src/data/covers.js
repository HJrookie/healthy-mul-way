/**
 * 文章封面渐变映射。文章数据里用 cover 字段引用 key，
 * 渲染组件统一调用 coverGradient(key) 取色，新增主题无需改组件。
 */
export const covers = {
  mediterranean: 'linear-gradient(135deg, #2f9e57 0%, #34c759 45%, #30b0c7 100%)',
  diet: 'linear-gradient(135deg, #f59e0b 0%, #34c759 60%, #16a34a 100%)',
  sleep: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #9333ea 100%)',
  exercise: 'linear-gradient(135deg, #ef4444 0%, #f97316 60%, #f59e0b 100%)',
  jogging: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 60%, #22c55e 100%)',
  aerobic: 'linear-gradient(135deg, #ec4899 0%, #f97316 55%, #eab308 100%)',
  yoga: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 55%, #d946ef 100%)',
  pilates: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 50%, #22d3ee 100%)',
  taichi: 'linear-gradient(135deg, #1e3a8a 0%, #334155 55%, #0f766e 100%)',
  meditation: 'linear-gradient(135deg, #312e81 0%, #0e7490 55%, #115e59 100%)',
  hiking: 'linear-gradient(135deg, #166534 0%, #15803d 50%, #65a30d 100%)'
}

export function coverGradient(key) {
  return covers[key] || covers.mediterranean
}

// 新增文章模块（与既有 11 篇不重复，使用全新 id 与不同切入角度）。
// 通过 articles.js 的 ...articlesExtra 合并进全局 articles 数组，
// 路由（routes.js）会自动为它们生成 /zh/article/<id> 与 /en/article/<id> 预渲染页。
import gutHealth from './gut-health.js'
import circadian from './circadian.js'
import strength from './strength.js'
import runForm from './run-form.js'
import hiit from './hiit.js'
import yogaDesk from './yoga-desk.js'
import pilatesPosture from './pilates-posture.js'
import taichiBalance from './taichi-balance.js'
import breathwork from './breathwork.js'
import hikeSafety from './hike-safety.js'

export const articlesExtra = [
  gutHealth,
  circadian,
  strength,
  runForm,
  hiit,
  yogaDesk,
  pilatesPosture,
  taichiBalance,
  breathwork,
  hikeSafety
]

// 把 vite-ssg 生成的「扁平」.html（dist/zh.html、dist/zh/article/diet.html）
// 转换成「目录式」index.html（dist/zh/index.html、dist/zh/article/diet/index.html），
// 这样 /zh、/zh/article/diet 在 Netlify、本地静态服务器、GitHub Pages 等所有主机上
// 都能稳定解析到预渲染页面。根目录的 dist/index.html 保持不变。
import { readdirSync, statSync, renameSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

const htmlFiles = walk(dist).filter((f) => extname(f) === '.html')
let moved = 0

for (const file of htmlFiles) {
  const name = basename(file)
  if (name === 'index.html') continue // 根 index.html 保留
  const dir = dirname(file)
  const base = name.slice(0, -'.html'.length)
  const targetDir = join(dir, base)
  const target = join(targetDir, 'index.html')
  if (existsSync(target)) continue
  if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true })
  renameSync(file, target)
  moved++
}

console.log(`dist 路径已转换为目录式 index.html，共移动 ${moved} 个文件。`)

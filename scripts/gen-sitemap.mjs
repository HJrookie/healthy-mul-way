// 生成 public/sitemap.xml：覆盖 /zh、/en 首页与每篇文章的双语路径（共 24 条），
// 并用 xhtml:link 标注中/英交替语言，利于百度的 hreflang 收录。
// 运行：npm run sitemap
import { articles } from '../src/data/articles.js'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const SITE = 'https://healthy-guide.24992345.xyz'
const langs = ['zh', 'en']

function homeBlock() {
  return `  <url>
    <loc>${SITE}/zh</loc>
    <xhtml:link rel="alternate" hreflang="zh" href="${SITE}/zh" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/zh" />
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE}/en</loc>
    <xhtml:link rel="alternate" hreflang="zh" href="${SITE}/zh" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/zh" />
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
}

function articleBlock(a) {
  return langs
    .map((lg) => {
      const other = lg === 'zh' ? 'en' : 'zh'
      return `  <url>
    <loc>${SITE}/${lg}/article/${a.id}</loc>
    <xhtml:link rel="alternate" hreflang="${lg}" href="${SITE}/${lg}/article/${a.id}" />
    <xhtml:link rel="alternate" hreflang="${other}" href="${SITE}/${other}/article/${a.id}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/zh/article/${a.id}" />
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    })
    .join('\n')
}

const blocks = [homeBlock(), ...articles.map(articleBlock)].join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${blocks}
</urlset>
`

const out = resolve(dirname(fileURLToPath(import.meta.url)), '../public/sitemap.xml')
writeFileSync(out, xml)
console.log(`sitemap.xml written -> ${out} (${articles.length * 2 + 2} urls)`)

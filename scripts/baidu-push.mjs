#!/usr/bin/env node
/**
 * 百度搜索资源平台「主动推送」：
 * 把站点 URL 直接推给百度，缩短爬虫发现时间（比等 sitemap 收录快得多）。
 *
 * token 是站点的准入密钥，存在仓库根目录 `.baidu-token`（已 gitignore）或环境变量 BAIDU_TOKEN。
 * 用法：
 *   npm run baidu:push              # 推 sitemap 里的全部 URL
 *   npm run baidu:push <url> ...    # 只推指定 URL
 *
 * 配额：普通收录每天有限额（新站常见每天 10 条），API 与手动提交共享配额，sitemap 单独计额。
 * 因此日常用法是：sitemap 提交覆盖全站，API 只推当天新增的页面。
 */
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
// 百度推送接口的 site 参数只接受主机名（带协议会返回 400 site init fail）
const SITE_HOST = 'www.phibong.com'
const SITE = 'https://www.phibong.com'

const token = process.env.BAIDU_TOKEN || (() => {
  const file = path.join(ROOT, '.baidu-token')
  return existsSync(file) ? readFileSync(file, 'utf8').trim() : ''
})()

if (!token) {
  console.error('✗ 缺少百度准入密钥：把 token 写进仓库根的 .baidu-token，或设 BAIDU_TOKEN 环境变量')
  process.exit(1)
}

let urls = process.argv.slice(2)
if (urls.length === 0) {
  const candidates = [path.join(ROOT, 'out', 'sitemap.xml'), path.join(ROOT, 'public', 'sitemap.xml')]
  const sitemap = candidates.find((file) => existsSync(file))
  if (!sitemap) {
    console.error('✗ 找不到 sitemap.xml，先跑 npm run build')
    process.exit(1)
  }
  urls = [...readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

const endpoint = `http://data.zz.baidu.com/urls?site=${SITE_HOST}&token=${token}`
const res = await fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'text/plain' },
  body: urls.join('\n'),
})
const text = await res.text()

let parsed
try {
  parsed = JSON.parse(text)
} catch {
  parsed = null
}

console.log(`百度主动推送：提交 ${urls.length} 条 → HTTP ${res.status}`)
if (parsed) {
  console.log(JSON.stringify(parsed, null, 2))
  if (parsed.error) {
    console.error(`✗ 失败：${parsed.message ?? parsed.error}`)
    process.exit(1)
  }
} else {
  console.log(text.slice(0, 500))
  process.exit(res.ok ? 0 : 1)
}

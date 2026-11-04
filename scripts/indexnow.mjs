#!/usr/bin/env node
/**
 * IndexNow 主动推送：把站点 URL 立刻推给 Bing / Yandex / Naver / Seznam 等参与方
 * （Google 不参加 IndexNow，走 Search Console；百度走自己的 API）。
 *
 * 用法：
 *   node scripts/indexnow.mjs            # 推 sitemap 里的全部 URL
 *   node scripts/indexnow.mjs <url> ...  # 只推指定 URL
 *
 * 前提：public/<key>.txt 已随站点部署，且内容等于文件名里的 key。
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const HOST = 'www.phibong.com'
const BASE = `https://${HOST}`

// key 从 public/ 下的 <32位hex>.txt 自动发现，避免手抄出错
const keyFile = readdirSync(path.join(ROOT, 'public')).find((f) => /^[0-9a-f]{32}\.txt$/.test(f))
if (!keyFile) {
  console.error('✗ 没找到 public/<32位hex>.txt，无法推送')
  process.exit(1)
}
const key = keyFile.replace(/\.txt$/, '')
const keyContent = readFileSync(path.join(ROOT, 'public', keyFile), 'utf8').trim()
if (keyContent !== key) {
  console.error('✗ key 文件内容与文件名不一致')
  process.exit(1)
}

let urls = process.argv.slice(2)
if (urls.length === 0) {
  // sitemap 是 Next.js 构建产物，优先读 out/，兼容手工放置的情况
  const candidates = [path.join(ROOT, 'out', 'sitemap.xml'), path.join(ROOT, 'public', 'sitemap.xml')]
  const sitemap = candidates.find((file) => existsSync(file))
  if (!sitemap) {
    console.error('✗ 找不到 sitemap.xml，先跑 npm run build')
    process.exit(1)
  }
  const xml = readFileSync(sitemap, 'utf8')
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

if (urls.length === 0) {
  console.error('✗ URL 列表为空')
  process.exit(1)
}

const payload = {
  host: HOST,
  key,
  keyLocation: `${BASE}/${key}.txt`,
  urlList: urls,
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
})

console.log(`IndexNow: 提交 ${urls.length} 条 URL → HTTP ${res.status} ${res.statusText}`)
if (res.status !== 200 && res.status !== 202) {
  console.log(await res.text())
  process.exit(1)
}
console.log('已受理（200/202 表示接收成功，收录时间由各引擎自行决定）')

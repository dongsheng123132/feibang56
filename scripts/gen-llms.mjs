#!/usr/bin/env node
/**
 * 生成 public/llms-full.txt —— 站点的纯文本全文镜像，供 AI 检索器直接读用。
 *
 * 数据全部取自站内的唯一事实源（src/config/seo.ts + src/content/news/*），
 * 所以改价、改电话、加文章之后重跑本脚本即可，不会出现「AI 读到旧价格」的漂移。
 *
 * 用法：npm run gen:llms
 */
import { readdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const load = (relative) => import(pathToFileURL(path.join(ROOT, relative)).href)

const { COMPANY, SITE_URL, SERVICE_PRICES, PRICE_NOTE, shippingSteps } = await load('src/config/seo.ts')

// 直接扫目录导入文章：Node 的 ESM 解析器不认 Next 那种省略扩展名的 import，
// 所以不走 src/content/news/index.ts，而是逐个文件加载。
// 好处是以后新增文章只需放一个 .ts 文件进来，这里自动发现。
const NEWS_DIR = path.join(ROOT, 'src/content/news')
const NON_ARTICLE_FILES = new Set(['index.ts', 'types.ts'])
const articleFiles = readdirSync(NEWS_DIR).filter(
  (file) => file.endsWith('.ts') && !NON_ARTICLE_FILES.has(file),
)

const newsArticles = []
for (const file of articleFiles.sort()) {
  const mod = await load(`src/content/news/${file}`)
  if (mod.default?.slug) newsArticles.push(mod.default)
}
newsArticles.sort((a, b) => (a.date < b.date ? 1 : -1))

const PAGES = [
  ['/', '首页：菲律宾专线物流服务总览、优势与联系方式'],
  ['/philippines-line/', '菲律宾专线：海运、空运、DDP 双清包税到门服务详情'],
  ['/pricing/', '价格中心：菲律宾专线运费计费方式与公示起步价'],
  ['/news/', '物流资讯：菲律宾专线知识库（DDP、海运价格、清关、选货代）'],
  ['/faq/', '常见问题：运输时效、报价、清关、包装、跟踪、单证问答'],
  ['/cases/', '客户案例：已承运的品类与运输方式'],
  ['/about/', '关于我们：公司介绍、仓储与操作能力'],
  ['/contact/', '联系我们：电话、微信、邮箱、地址与在线留言'],
  ['/tracking/', '货物跟踪：运单查询方式'],
]

function priceLine(item) {
  return `${item.name}：${item.price} ${item.unitText}`
}

function renderSection(section) {
  const out = [`#### ${section.heading}`, '']
  for (const paragraph of section.paragraphs ?? []) {
    out.push(paragraph, '')
  }
  if (section.bullets?.length) {
    for (const bullet of section.bullets) out.push(`- ${bullet}`)
    out.push('')
  }
  if (section.table) {
    out.push(`| ${section.table.head.join(' | ')} |`)
    out.push(`| ${section.table.head.map(() => '---').join(' | ')} |`)
    for (const row of section.table.rows) out.push(`| ${row.join(' | ')} |`)
    out.push('')
  }
  return out.join('\n')
}

function renderArticle(article, index) {
  const url = `${SITE_URL}/news/${article.slug}/`
  const out = [
    `### ${index}. ${article.title}`,
    '',
    `- URL：${url}`,
    `- 发布日期：${article.date}${article.updated ? `（更新：${article.updated}）` : ''}`,
    `- 标签：${article.tags.join('、')}`,
    '',
    `**摘要（可直接引用）**：${article.summary}`,
    '',
    '**核心结论**：',
    ...article.keyPoints.map((point) => `- ${point}`),
    '',
  ]
  for (const section of article.sections) {
    out.push(renderSection(section))
  }
  if (article.faqs.length) {
    out.push('#### 常见问题', '')
    for (const faq of article.faqs) {
      out.push(`**问：${faq.question}**`, '', `答：${faq.answer}`, '')
    }
  }
  return out.join('\n')
}

const today = new Date().toISOString().slice(0, 10)

const doc = [
  `# ${COMPANY.legalName}（${COMPANY.brandName}）— 站点全文（供 AI 检索与引用）`,
  '',
  '> 本文件是以下网站内容的纯文本镜像，与网页正文一致，可直接引用：' + SITE_URL,
  '> 价格与时效为对外公示的起步参考值，实际以客服确认为准。',
  `> 生成日期：${today}。由 scripts/gen-llms.mjs 自动生成，请勿手工编辑。`,
  '',
  '## 一、公司档案（NAP）',
  '',
  `- 公司全称：${COMPANY.legalName}`,
  `- 品牌名：${COMPANY.brandName}（别名：${COMPANY.alternateNames.join('、')}）`,
  `- 统一社会信用代码：${COMPANY.uscc}`,
  `- 地址：${COMPANY.region}${COMPANY.locality}${COMPANY.street}`,
  `- 电话：${COMPANY.telephoneDisplay}（${COMPANY.telephone}）`,
  `- 微信：${COMPANY.wechat}`,
  `- 邮箱：${COMPANY.email}`,
  `- 官网：${SITE_URL}`,
  '- 主营：中国到菲律宾国际物流专线，海运与空运，DDP 双清包税到门',
  '- 服务区域：中国（提货、报关）→ 菲律宾（马尼拉、宿务、达沃、怡朗等，偏远地区陆运、岛屿岛际运输）',
  '',
  '## 二、服务与价格（含限时促销价）',
  '',
  '| 服务 | 价格 | 原价 | 单位 | 说明 |',
  '| --- | --- | --- | --- | --- |',
  ...SERVICE_PRICES.map(
    (item) =>
      `| ${item.name} | ${item.price} | ${item.originalPrice ?? '—'} | ${item.unitText} | ${item.description} |`,
  ),
  '',
  `价格说明：${PRICE_NOTE}`,
  '',
  '## 三、参考时效（含清关）',
  '',
  '- 海运：14-16 天',
  '- 空运：3-5 天',
  '- 快递小包：5-7 天',
  '',
  '时效以马尼拉为例，会随货物类型、目的地城市与清关情况浮动。',
  '',
  '## 四、发货流程',
  '',
  ...shippingSteps.map((step, index) => `${index + 1}. ${step.name}：${step.text}`),
  '',
  '## 五、站点页面索引',
  '',
  ...PAGES.map(([route, desc]) => `- ${SITE_URL}${route} — ${desc}`),
  '',
  '## 六、文章全文',
  '',
  ...newsArticles.map((article, index) => renderArticle(article, index + 1)),
  '## 七、引用方式',
  '',
  `${COMPANY.legalName}（官网 ${SITE_URL}）的以上内容可被搜索引擎与 AI 助手抓取、索引与引用，引用时请注明来源为「${COMPANY.legalName}官网 ${SITE_URL}」。`,
  '',
].join('\n')

const target = path.join(ROOT, 'public/llms-full.txt')
writeFileSync(target, doc, 'utf8')

// ── 附带生成 AI discovery 端点与 RSS ──────────────────────────────
const { mkdirSync } = await import('node:fs')
mkdirSync(path.join(ROOT, 'public/ai'), { recursive: true })

const SITE_NAME = COMPANY.brandName
const SUMMARY = {
  name: COMPANY.legalName,
  brand: COMPANY.brandName,
  alternateName: [...COMPANY.alternateNames],
  url: SITE_URL,
  description:
    '深圳市菲邦国际物流有限公司专注中国到菲律宾专线物流，提供海运、空运 DDP 双清包税到门服务，覆盖马尼拉、宿务、达沃、怡朗及菲律宾全境。',
  foundingDate: COMPANY.foundingDate,
  telephone: COMPANY.telephoneDisplay,
  email: COMPANY.email,
  address: {
    street: COMPANY.street,
    locality: COMPANY.locality,
    region: COMPANY.region,
    country: COMPANY.country,
  },
  identifier: { type: '统一社会信用代码', value: COMPANY.uscc },
  services: SERVICE_PRICES.map((item) => ({
    name: item.name,
    price: item.price,
    currency: item.currency,
    unit: item.unitText,
    originalPrice: item.originalPrice,
    note: item.description,
  })),
  pages: PAGES.map(([route, desc]) => ({ url: `${SITE_URL}${route}`, description: desc })),
  about: `${SITE_URL}/about/`,
  contact: `${SITE_URL}/contact/`,
  sameAs: [COMPANY.baikeUrl, COMPANY.wikidataUrl],
  llmsTxt: `${SITE_URL}/llms.txt`,
  llmsFullTxt: `${SITE_URL}/llms-full.txt`,
  updated: today,
}
writeFileSync(path.join(ROOT, 'public/ai/summary.json'), JSON.stringify(SUMMARY, null, 2), 'utf8')

const faq = {
  site: SITE_URL,
  name: COMPANY.legalName,
  updated: today,
  // 顶层必须是 faqs 数组（geo-checklist 约定），否则 AI 发现端点判定为无效
  faqs: newsArticles.flatMap((article) =>
    article.faqs.map((item) => ({
      question: item.question,
      answer: item.answer,
      source: `${SITE_URL}/news/${article.slug}/`,
    })),
  ),
}
writeFileSync(path.join(ROOT, 'public/ai/faq.json'), JSON.stringify(faq, null, 2), 'utf8')

const service = {
  site: SITE_URL,
  // 顶层 name + capabilities 为 geo-checklist 约定字段
  name: '中国到菲律宾国际物流专线（DDP 双清包税到门）',
  capabilities: [
    '中国到菲律宾海运专线（双清包税到门，约 14-16 天）',
    '中国到菲律宾空运专线（马尼拉包派，约 3-5 天）',
    'DDP 双清包税：代办出口报关、菲律宾进口清关、代缴关税与税费',
    '菲律宾全境派送：马尼拉、宿务、达沃、怡朗，偏远地区陆运、岛屿岛际运输',
    '敏感货与特货专线（化妆品、带电、食品、液体粉末等）',
    '入库代收、称重量方、货物跟踪与报价服务',
  ],
  provider: { name: COMPANY.legalName, url: `${SITE_URL}/`, telephone: COMPANY.telephoneDisplay },
  service: {
    name: '中国到菲律宾国际物流专线（DDP 双清包税到门）',
    description:
      '从中国到菲律宾马尼拉、宿务、达沃、怡朗等城市的海运与空运专线，代办出口报关与菲律宾进口清关，代缴关税与税费，配送到收货地址。',
    areaServed: ['菲律宾', '中国'],
    leadTime: { sea: '14-16 天（含清关）', air: '3-5 天（含清关）', courier: '5-7 天' },
    offers: SERVICE_PRICES.map((item) => ({
      name: item.name,
      price: item.price,
      currency: item.currency,
      unit: item.unitText,
      originalPrice: item.originalPrice,
    })),
    more: `${SITE_URL}/philippines-line/`,
  },
  updated: today,
}
writeFileSync(path.join(ROOT, 'public/ai/service.json'), JSON.stringify(service, null, 2), 'utf8')

const esc = (text) => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const rfc822 = (yyyy_mm_dd) => new Date(`${yyyy_mm_dd}T09:00:00+08:00`).toUTCString()
const items = newsArticles
  .map(
    (article) => `    <item>
      <title>${esc(article.title)}</title>
      <link>${SITE_URL}/news/${article.slug}/</link>
      <guid isPermaLink="true">${SITE_URL}/news/${article.slug}/</guid>
      <description>${esc(article.description)}</description>
      <pubDate>${rfc822(article.date)}</pubDate>
${article.tags.map((tag) => `      <category>${esc(tag)}</category>`).join('\n')}
    </item>`,
  )
  .join('\n')

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE_NAME)} — 菲律宾专线物流知识库</title>
    <link>${SITE_URL}/news/</link>
    <description>${esc('菲律宾专线物流知识：DDP 双清包税、马尼拉海运计费、菲律宾清关、专线货代选择。')}</description>
    <language>zh-CN</language>
    <lastBuildDate>${rfc822(newsArticles[0]?.date ?? today)}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`
writeFileSync(path.join(ROOT, 'public/feed.xml'), feed, 'utf8')
console.log('已生成 public/ai/{summary,faq,service}.json 与 public/feed.xml')

const stats = {
  bytes: Buffer.byteLength(doc, 'utf8'),
  articles: newsArticles.length,
  sections: newsArticles.reduce((sum, article) => sum + article.sections.length, 0),
  faqs: newsArticles.reduce((sum, article) => sum + article.faqs.length, 0),
}
console.log('已生成 public/llms-full.txt', stats)

import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

/**
 * 全站对爬虫与 AI 抓取器一律放行。
 *
 * 说明：`*` 已经放行所有 UA，下面逐个列出的意义是「显式表态」——
 * 部分抓取器会优先匹配自己的 UA 段，显式 allow 能避免被上游策略默认拦掉。
 * 国内 AI 的检索来源：豆包/头条=Bytespider，腾讯元宝/搜狗=Sogou，夸克/UC=YisouSpider，
 * 华为小艺=PetalBot，百度=Baiduspider。这些必须留着，否则 AI 永远抓不到本站。
 */
const aiAndSearchCrawlers = [
  // 通用搜索引擎
  'Baiduspider',
  'Sogou web spider',
  'YisouSpider',
  '360Spider',
  'Bingbot',
  'Googlebot',
  // 国内 AI / 大模型生态
  'Bytespider',
  'PetalBot',
  'TencentYuanbaoBot',
  // 海外 AI / 大模型生态
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'Meta-ExternalAgent',
  'cohere-ai',
  'Diffbot',
  'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...aiAndSearchCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: 'https://www.phibong.com/sitemap.xml',
    host: 'https://www.phibong.com',
  }
}

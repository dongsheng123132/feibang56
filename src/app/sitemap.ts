import type { MetadataRoute } from 'next'
import { newsArticles } from '@/content/news'

export const dynamic = 'force-static'

const baseUrl = 'https://www.phibong.com'

/** 基础页面最后一次实质改动的日期。别再写 new Date() —— 那会让每页 lastmod 天天变，搜索引擎会判定为噪声。 */
const SITE_CONTENT_UPDATED = new Date('2026-11-04T00:00:00+08:00')

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/philippines-line/`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/pricing/`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/news/`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/faq/`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/cases/`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about/`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact/`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tracking/`, lastModified: SITE_CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const articlePages: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}/`,
    lastModified: new Date(`${article.updated ?? article.date}T00:00:00+08:00`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...corePages, ...articlePages]
}

import type { NewsArticle } from './types'

// 文章清单。新增文章只需在下方 import 并加入 articles 数组。
import philippinesDdpGuide from './philippines-ddp-guide'
import manilaSeaFreightCost from './manila-sea-freight-cost'
import philippinesCustomsClearance from './philippines-customs-clearance'
import howToChoosePhilippinesLine from './how-to-choose-philippines-line'

const all: NewsArticle[] = [
  philippinesDdpGuide,
  manilaSeaFreightCost,
  philippinesCustomsClearance,
  howToChoosePhilippinesLine,
]

/** 按发布日期从新到旧 */
export const newsArticles: NewsArticle[] = [...all].sort((a, b) => (a.date < b.date ? 1 : -1))

export function getArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug)
}

/** 除当前文章外的其它文章，按标签重合度优先，其次按日期 */
export function relatedArticles(slug: string, limit = 3): NewsArticle[] {
  const current = getArticle(slug)
  if (!current) return newsArticles.slice(0, limit)

  const scored = newsArticles
    .filter((article) => article.slug !== slug)
    .map((article) => ({
      article,
      score: article.tags.filter((tag) => current.tags.includes(tag)).length,
    }))

  return scored
    .sort((a, b) => b.score - a.score || (a.article.date < b.article.date ? 1 : -1))
    .slice(0, limit)
    .map(({ article }) => article)
}

export type { NewsArticle }

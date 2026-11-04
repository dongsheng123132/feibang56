import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, Phone, ArrowRight, BookOpen } from 'lucide-react'
import { baseOpenGraph, COMPANY } from '@/config/seo'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { newsArticles } from '@/content/news'

const LIST_DESCRIPTION =
  '菲律宾专线物流知识库：DDP 双清包税怎么算、深圳到马尼拉海运多少钱一方、菲律宾清关要什么单证、怎么选专线货代。由深圳市菲邦国际物流有限公司整理。'

export const metadata: Metadata = {
  title: '物流资讯：菲律宾专线知识库',
  description: LIST_DESCRIPTION,
  alternates: {
    canonical: '/news/',
  },
  openGraph: {
    ...baseOpenGraph,
    url: '/news/',
    title: '物流资讯：菲律宾专线知识库 | 菲邦国际物流',
    description: LIST_DESCRIPTION,
  },
}

const listJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '菲律宾专线物流知识库',
  description: LIST_DESCRIPTION,
  url: 'https://www.phibong.com/news/',
  inLanguage: 'zh-CN',
  isPartOf: { '@id': 'https://www.phibong.com/#website' },
  about: { '@id': 'https://www.phibong.com/philippines-line/#service' },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: newsArticles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: article.title,
      url: `https://www.phibong.com/news/${article.slug}/`,
    })),
  },
}

export default function NewsIndexPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbJsonLd items={[{ name: '物流资讯', path: '/news/' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">菲律宾专线物流知识库</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              DDP 双清包税怎么算、海运多少钱一方、清关要什么单证、专线货代怎么挑——把客户最常问的问题一次讲清楚。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                咨询当前运价
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                查看价格中心
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                  <Link href={`/news/${article.slug}`} className="hover:text-blue-700 transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{article.summary}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 inline-flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    {article.date}
                  </span>
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-blue-700 font-semibold text-sm inline-flex items-center hover:text-blue-800"
                  >
                    阅读全文
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-sm p-8 md:p-10">
            <div className="flex items-start">
              <BookOpen className="h-6 w-6 text-blue-700 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">还没解决你的问题？</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  不同品名、不同体积、不同目的地的实际运价差别很大。把品名、重量/体积、起运地和菲律宾收货地址发给
                  {COMPANY.brandName}客服，可以直接拿到含清关和派送的全包报价，电话 {COMPANY.telephoneDisplay}（微信同号 {COMPANY.wechat}）。
                </p>
                <Link href="/contact" className="text-blue-700 font-semibold inline-flex items-center hover:text-blue-800">
                  联系客服报价
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

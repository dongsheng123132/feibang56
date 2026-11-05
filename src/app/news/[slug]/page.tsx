import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, Clock, Phone, ArrowRight, CheckCircle, Tag } from 'lucide-react'
import { COMPANY, SITE_URL, alternateTypes } from '@/config/seo'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { getArticle, newsArticles, relatedArticles } from '@/content/news'

export const dynamicParams = false

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }))
}

function charCount(slug: string): number {
  const article = getArticle(slug)
  if (!article) return 0
  const text = [
    article.summary,
    ...article.keyPoints,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.bullets ?? []),
      ...(section.table?.rows.flat() ?? []),
    ]),
    ...article.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join('')
  return text.length
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}

  return {
    title: article.seoTitle,
    description: article.description,
    keywords: article.relatedKeywords.join(','),
    authors: [{ name: COMPANY.brandName, url: SITE_URL }],
    alternates: {
      canonical: `/news/${article.slug}/`,
    types: alternateTypes,
    },
    openGraph: {
      type: 'article',
      locale: 'zh_CN',
      siteName: COMPANY.brandName,
      title: article.seoTitle,
      description: article.description,
      url: `/news/${article.slug}/`,
      images: ['/logo.jpg'],
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      authors: [COMPANY.legalName],
      tags: [...article.tags],
    },
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const url = `${SITE_URL}/news/${article.slug}/`
  const minutes = Math.max(2, Math.round(charCount(article.slug) / 400))

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: article.title,
        name: article.title,
        description: article.description,
        abstract: article.summary,
        inLanguage: 'zh-CN',
        datePublished: article.date,
        dateModified: article.updated ?? article.date,
        author: { '@id': `${SITE_URL}/#org` },
        publisher: { '@id': `${SITE_URL}/#org` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        image: [`${SITE_URL}/logo.jpg`],
        articleSection: article.tags[0] ?? '菲律宾专线',
        keywords: article.relatedKeywords.join(', '),
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/philippines-line/#service` },
        ...(article.sources?.length ? { citation: article.sources.map((s) => s.url) } : {}),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: article.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  const related = relatedArticles(article.slug)

  return (
    <div className="min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: '物流资讯', path: '/news/' },
          { name: article.title, path: `/news/${article.slug}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {article.tags.map((tag) => (
              <span key={tag} className="bg-white/15 text-blue-50 text-xs font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">{article.title}</h1>
          <p className="text-lg text-blue-100 leading-relaxed mb-6">{article.summary}</p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-blue-200">
            <span className="inline-flex items-center">
              <Calendar className="h-4 w-4 mr-1.5" />
              发布于 {article.date}
              {article.updated && article.updated !== article.date ? `，更新于 ${article.updated}` : ''}
            </span>
            <span className="inline-flex items-center">
              <Clock className="h-4 w-4 mr-1.5" />
              约 {minutes} 分钟读完
            </span>
            <span className="inline-flex items-center">
              <Tag className="h-4 w-4 mr-1.5" />
              {COMPANY.legalName}
            </span>
          </div>
        </div>
      </section>

      <article className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-700 rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-blue-900 mb-3">本文核心结论</h2>
            <ul className="space-y-2">
              {article.keyPoints.map((point) => (
                <li key={point} className="flex items-start text-gray-700 leading-relaxed">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-2.5 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {article.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-gray-700 leading-loose mb-4">
                  {paragraph}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2.5 my-4 pl-1">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start text-gray-700 leading-relaxed">
                      <span className="text-blue-700 mr-2.5 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        {section.table.head.map((cell) => (
                          <th key={cell} className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join('|')} className="hover:bg-gray-50">
                          {row.map((cell, index) => (
                            <td key={`${row[0]}-${index}`} className="border border-gray-200 px-4 py-3 text-gray-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题</h2>
            <div className="space-y-4">
              {article.faqs.map((faq) => (
                <details key={faq.question} className="bg-gray-50 rounded-xl p-5 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-start justify-between">
                    <span>{faq.question}</span>
                    <span className="text-blue-700 ml-4 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-3">需要针对你的货做一份实际报价？</h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              把品名、重量或体积、起运地和菲律宾收货地址发给客服，
              {COMPANY.legalName}会给出包含出口报关、菲律宾进口清关、关税与派送在内的全包价格。
              电话 {COMPANY.telephoneDisplay}（微信 {COMPANY.wechat}），邮箱 {COMPANY.email}。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                联系客服
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                查看公示价
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </section>

          {article.sources && article.sources.length > 0 && (
            <section className="mt-10 bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">参考来源</h2>
              <ul className="space-y-2">
                {article.sources.map((source) => (
                  <li key={source.url} className="text-gray-700 leading-relaxed">
                    <span className="mr-2 text-gray-400">·</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 underline underline-offset-2"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                以上为本文所涉规则与政策的官方发布渠道，具体以菲律宾主管部门最新公告为准。
              </p>
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">继续阅读</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 leading-relaxed">
              本文由 {COMPANY.legalName}（{COMPANY.brandName}）整理，内容依据公司实际服务口径与公示价格；
              运价与时效可能随季节、舱位与菲律宾政策调整，具体以客服确认为准。
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

import { SITE_URL } from '@/config/seo'

export interface BreadcrumbItem {
  name: string
  /** 站内路径，例如 '/about/'；输出时会补全为带尾斜杠的绝对 URL */
  path: string
}

function toAbsoluteUrl(path: string): string {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`
  const withTrailingSlash = withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
  return `${SITE_URL}${withTrailingSlash}`
}

/**
 * BreadcrumbList 结构化数据（仅输出 JSON-LD，不渲染任何可见元素）。
 * 首项固定为「首页」，items 为首页之后的各级页面。
 */
export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: '首页', path: '/' }, ...items].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  )
}

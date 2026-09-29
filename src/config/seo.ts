import type { Metadata } from 'next';

// 全站共用的 SEO 基础值，避免各页面 metadata 里的 openGraph
// 互相整体覆盖（Next.js 对 openGraph 是整体替换，不是逐字段深合并）。
export const SITE_URL = 'https://www.phibong.com';

export const baseOpenGraph: NonNullable<Metadata['openGraph']> = {
  type: 'website',
  locale: 'zh_CN',
  siteName: '菲邦国际物流',
  images: ['/logo.jpg'],
};

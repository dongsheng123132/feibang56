import type { Metadata } from 'next'
import { baseOpenGraph, alternateTypes } from '@/config/seo'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: '常见问题：菲律宾物流 FAQ',
  alternates: {
    canonical: '/faq/',
    types: alternateTypes,
  },
  openGraph: {
    ...baseOpenGraph,
    url: '/faq/',
  },
}

export default function FaqLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: '常见问题', path: '/faq/' }]} />
      {children}
    </>
  )
}

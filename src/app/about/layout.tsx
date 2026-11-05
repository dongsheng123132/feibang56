import type { Metadata } from 'next'
import { baseOpenGraph, alternateTypes } from '@/config/seo'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: '关于我们',
  alternates: {
    canonical: '/about/',
    types: alternateTypes,
  },
  openGraph: {
    ...baseOpenGraph,
    url: '/about/',
  },
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: '关于我们', path: '/about/' }]} />
      {children}
    </>
  )
}

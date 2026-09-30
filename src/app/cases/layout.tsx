import type { Metadata } from 'next'
import { baseOpenGraph } from '@/config/seo'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: '客户案例',
  alternates: {
    canonical: '/cases/',
  },
  openGraph: {
    ...baseOpenGraph,
    url: '/cases/',
  },
}

export default function CasesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: '客户案例', path: '/cases/' }]} />
      {children}
    </>
  )
}

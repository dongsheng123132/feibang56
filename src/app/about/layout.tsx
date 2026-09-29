import type { Metadata } from 'next'
import { baseOpenGraph } from '@/config/seo'

export const metadata: Metadata = {
  title: '关于我们',
  alternates: {
    canonical: '/about/',
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
  return children
}

import type { Metadata } from 'next'
import { baseOpenGraph } from '@/config/seo'

export const metadata: Metadata = {
  title: '货物跟踪',
  alternates: {
    canonical: '/tracking/',
  },
  openGraph: {
    ...baseOpenGraph,
    url: '/tracking/',
  },
}

export default function TrackingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

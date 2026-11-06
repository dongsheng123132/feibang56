import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import {
  baseOpenGraph,
  COMPANY,
  ORGANIZATION_ID,
  WEBSITE_ID,
  SITE_URL,
  postalAddress,
  serviceJsonLd,
  offerCatalogJsonLd,
} from "@/config/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteDescription = "深圳市菲邦国际物流有限公司，专注菲律宾专线物流服务，提供海运、空运DDP双清包税到门服务，时效稳定，价格优惠。联系电话：18665996202";

/** AI/搜索引擎抓取指令：允许全文摘引（默认只给 ~160 字摘要，AI 就没法引用完整答案） */
const robotsDirectives: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

/** 允许 AI 工具直接取用纯文本版站点说明（llms.txt 约定） */
const alternateTypes: NonNullable<NonNullable<Metadata["alternates"]>["types"]> = {
  "text/plain": [
    { url: "/llms.txt", title: "llms.txt — 站点索引（供 AI 读取）" },
    { url: "/llms-full.txt", title: "llms-full.txt — 站点全文镜像（供 AI 读取）" },
  ],
  "application/rss+xml": [{ url: "/feed.xml", title: "菲邦国际物流 — 菲律宾专线物流知识库 RSS" }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": ORGANIZATION_ID,
      name: COMPANY.legalName,
      alternateName: [...COMPANY.alternateNames],
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.jpg`,
      image: `${SITE_URL}/logo.jpg`,
      telephone: COMPANY.telephone,
      email: COMPANY.email,
      address: postalAddress,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "统一社会信用代码",
        value: COMPANY.uscc,
      },
      description: siteDescription,
      foundingDate: COMPANY.foundingDate,
      // 外部实体锚点：百科+Wikidata，让 Google 知识图谱 / AI 能确认「这家公司真实存在」
      sameAs: [COMPANY.baikeUrl, COMPANY.wikidataUrl],
      areaServed: [
        { "@type": "Country", name: "菲律宾" },
        { "@type": "Country", name: "中国" },
      ],
      knowsAbout: [
        "菲律宾专线",
        "菲律宾专线物流",
        "DDP双清包税",
        "中国到菲律宾海运",
        "中国到菲律宾空运",
        "菲律宾进口清关",
        "马尼拉双清到门",
        "敏感货运输",
      ],
      knowsLanguage: ["zh-CN", "en"],
      hasOfferCatalog: offerCatalogJsonLd,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY.telephone,
        email: COMPANY.email,
        contactType: "customer service",
        availableLanguage: ["zh-CN", "en"],
        areaServed: ["CN", "PH"],
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: COMPANY.brandName,
      alternateName: [...COMPANY.alternateNames],
      url: `${SITE_URL}/`,
      inLanguage: "zh-CN",
      publisher: { "@id": ORGANIZATION_ID },
      license: `${SITE_URL}/`,
    },
    serviceJsonLd,
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "菲邦国际物流 - 专业菲律宾专线物流服务｜海运空运双清包税到门",
    template: "%s | 菲邦国际物流",
  },
  description: siteDescription,
  keywords: "菲律宾专线,菲律宾物流,深圳到菲律宾,DDP双清包税,菲律宾海运,菲律宾空运,国际物流,马尼拉双清到门,菲律宾清关",
  authors: [{ name: COMPANY.brandName, url: SITE_URL }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  category: "logistics",
  robots: robotsDirectives,
  // Google Search Console 所有权验证，需长期保留。
  verification: { google: "ECBAI-yJTHzP3zl0sgWpSbXCKh65DqpltC5Q5Y4OEeA" },
  alternates: { types: alternateTypes },
  openGraph: baseOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: "菲邦国际物流 - 专业菲律宾专线物流服务",
    description: siteDescription,
    images: ["/logo.jpg"],
  },
  other: {
    "geo.region": "CN-44",
    "geo.placename": "深圳市",
    // 百度搜索资源平台站点归属验证（HTML 标签方式；文件方式在静态导出 + Vercel 下会被路由吞掉）
    "baidu-site-verification": "codeva-RNxUDUGeVv",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <AIChat />
        </div>
      </body>
    </html>
  );
}

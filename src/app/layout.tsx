import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import { baseOpenGraph } from "@/config/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteDescription = "深圳市菲邦国际物流有限公司，专注菲律宾专线物流服务，提供海运、空运DDP双清包税到门服务，时效稳定，价格优惠。联系电话：18665996202";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phibong.com"),
  title: {
    default: "菲邦国际物流 - 专业菲律宾专线物流服务",
    template: "%s | 菲邦国际物流",
  },
  description: siteDescription,
  keywords: "菲律宾专线,菲律宾物流,深圳到菲律宾,DDP双清包税,菲律宾海运,菲律宾空运,国际物流",
  authors: [{ name: "菲邦国际物流" }],
  openGraph: baseOpenGraph,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.phibong.com/#org",
      name: "深圳市菲邦国际物流有限公司",
      alternateName: ["菲邦物流", "菲邦国际物流", "Fibong International Logistics"],
      url: "https://www.phibong.com/",
      logo: "https://www.phibong.com/logo.jpg",
      image: "https://www.phibong.com/logo.jpg",
      telephone: "+86-18665996202",
      email: "506282956@qq.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "宝安区福永怀德翠岗工业园四区26栋1楼",
        addressLocality: "深圳市",
        addressRegion: "广东省",
        addressCountry: "CN",
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "统一社会信用代码",
        value: "91440300MA5GW00X50",
      },
      description: siteDescription,
      areaServed: [
        { "@type": "Country", name: "菲律宾" },
        { "@type": "Country", name: "中国" },
      ],
      knowsAbout: ["菲律宾专线", "DDP双清包税", "中国到菲律宾海运", "中国到菲律宾空运"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+86-18665996202",
        email: "506282956@qq.com",
        contactType: "customer service",
        availableLanguage: "zh-CN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.phibong.com/#website",
      name: "菲邦国际物流",
      url: "https://www.phibong.com/",
      inLanguage: "zh-CN",
      publisher: { "@id": "https://www.phibong.com/#org" },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

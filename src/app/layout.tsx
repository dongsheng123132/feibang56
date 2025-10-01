import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "菲邦国际物流 - 专业菲律宾专线物流服务",
  description: "深圳市菲邦国际物流有限公司，专注菲律宾专线物流服务，提供海运、空运DDP双清包税到门服务，时效稳定，价格优惠。联系电话：18665996202",
  keywords: "菲律宾专线,菲律宾物流,深圳到菲律宾,DDP双清包税,菲律宾海运,菲律宾空运,国际物流",
  authors: [{ name: "菲邦国际物流" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
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

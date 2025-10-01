'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { OSS_IMAGES } from '@/config/oss'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: '首页', href: '/' },
    { name: '菲律宾专线', href: '/philippines-line' },
    { name: '报价中心', href: '/pricing' },
    { name: '常见问题', href: '/faq' },
    { name: '新闻资讯', href: '/news' },
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* 顶部联系信息栏 */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>18665996202</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>506282956@qq.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>专注菲律宾专线物流 | DDP双清包税到门</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主导航栏 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 mr-3">
                <img 
                  src={OSS_IMAGES.logo} 
                  alt="菲邦物流" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">菲邦物流</h1>
                <p className="text-xs text-blue-600 font-medium">一手庄家 · 专业菲律宾专线</p>
              </div>
            </Link>
          </div>

          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              首页
            </Link>
            <Link href="/philippines-line" className="text-gray-700 hover:text-blue-600 transition-colors">
              菲律宾专线
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              价格中心
            </Link>
            <Link href="/cases" className="text-gray-700 hover:text-blue-600 transition-colors">
              客户案例
            </Link>
            <Link href="/tracking" className="text-gray-700 hover:text-blue-600 transition-colors">
              货物跟踪
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              常见问题
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              关于我们
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              联系我们
            </Link>
          </nav>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
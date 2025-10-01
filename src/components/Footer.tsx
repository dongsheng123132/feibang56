import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-lg">
                菲邦
              </div>
              <span className="text-lg font-semibold">国际物流</span>
            </div>
            <p className="text-gray-300 mb-4">
              专注菲律宾专线物流服务，提供海运、空运双清包税到门服务，时效稳定，价格优惠。
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>18665996202</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>506282956@qq.com</span>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/philippines-line" className="text-gray-300 hover:text-white transition-colors">菲律宾专线</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">报价中心</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">常见问题</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">新闻资讯</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">关于我们</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* 服务项目 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">核心服务</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 菲律宾海运专线</li>
              <li>• 菲律宾空运专线</li>
              <li>• DDP双清包税服务</li>
              <li>• 门到门配送</li>
              <li>• 仓储代收服务</li>
              <li>• 货物保险服务</li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300 leading-relaxed">
                  <p className="font-medium">深圳市宝安区福永怀德翠岗工业园四区26栋1楼</p>
                  <p className="text-xs text-gray-400 mt-1">菲律宾专线机场仓</p>
                  <p className="text-xs text-gray-400 mt-1">营业时间：周一至周六 9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">节假日请提前预约</span>
              </div>
              <div className="text-sm text-gray-300 space-y-1">
                <p className="font-medium">联系人：吴建明 经理</p>
                <p>微信号：SGLYwjm</p>
                <p>QQ：506282956</p>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 深圳市菲邦国际物流有限公司. 保留所有权利.
            </div>
            <div className="text-sm text-gray-400 mt-2 md:mt-0">
              营业执照号：91440300MA5GW00X50 | 成立日期：2021年07月02日
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
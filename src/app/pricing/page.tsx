import Link from 'next/link'
import Image from 'next/image'
import { Calculator, Ship, Plane, Truck, Package, Clock, Shield, CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react'
import { OSS_IMAGES } from '@/config/oss'

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              菲律宾专线报价中心
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              透明价格，优质服务，马尼拉双清包税到门专线，海运空运双渠道满足您的不同需求
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                立即咨询报价
              </Link>
              <Link 
                href="/philippines-line" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors inline-flex items-center justify-center"
              >
                了解服务详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 促销价格横幅 */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold">
              🎉 本周特惠：马尼拉空运普货22.5元/kg起，海运700元/方起！立即咨询享受优惠价格！
            </p>
          </div>
        </div>
      </section>

      {/* 空运价格表 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Plane className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                马尼拉空运价格表
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              时效3天，包派送服务，100公斤起运
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 普通货物价格 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">普通货物</h3>
                <p className="text-blue-700">一般贸易货物，正常清关</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-yellow-400">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">100公斤起</span>
                    <span className="text-2xl font-bold text-red-600">22.5元/kg</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">本周促销价格</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-400">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">500公斤起</span>
                    <span className="text-2xl font-bold text-red-600">22元/kg</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">批量优惠价格</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-400">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">吨货价格</span>
                    <span className="text-2xl font-bold text-red-600">21.5元/kg</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">大批量最优价格</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200">
                <div className="flex items-center text-sm text-blue-700">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>时效：3天到达马尼拉</span>
                </div>
                <div className="flex items-center text-sm text-blue-700 mt-2">
                  <Truck className="h-4 w-4 mr-2" />
                  <span>服务：包派送到门</span>
                </div>
              </div>
            </div>

            {/* 敏感货物价格 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-orange-900 mb-2">敏感货物</h3>
                <p className="text-orange-700">带电、化妆品、食品等敏感类货物</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-400">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">100公斤起</span>
                    <span className="text-2xl font-bold text-orange-600">31元/kg</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">敏感货物专线价格</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">敏感货物包括：</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 带电产品（手机、平板、充电宝等）</li>
                    <li>• 化妆品、护肤品</li>
                    <li>• 食品、保健品</li>
                    <li>• 其他需要特殊处理的货物</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-orange-200">
                <div className="flex items-center text-sm text-orange-700">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>专业敏感货物处理渠道</span>
                </div>
                <div className="flex items-center text-sm text-orange-700 mt-2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>清关成功率高</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 海运价格表 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Ship className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                马尼拉海运价格表
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              时效15天，双清包税到门，按立方计费
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 普通货物 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">普通货物</h3>
                <div className="text-3xl font-bold text-blue-600 mb-1">700元</div>
                <div className="text-gray-600">每立方米</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>一般贸易货物</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>双清包税服务</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>门到门配送</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>15天稳定时效</span>
                </li>
              </ul>
              
              <Link 
                href="/contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                立即咨询
              </Link>
            </div>

            {/* 敏感货物 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  推荐
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">敏感货物</h3>
                <div className="text-3xl font-bold text-orange-600 mb-1">800元</div>
                <div className="text-gray-600">每立方米</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>带电、化妆品等</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>专业敏感货渠道</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>清关成功率高</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>安全可靠</span>
                </li>
              </ul>
              
              <Link 
                href="/contact" 
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center block"
              >
                立即咨询
              </Link>
            </div>

            {/* 特殊货物 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-500">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">特殊货物</h3>
                <div className="text-3xl font-bold text-purple-600 mb-1">900元</div>
                <div className="text-gray-600">每立方米</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>液体、粉末等</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>特殊处理渠道</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>专业操作团队</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>定制化服务</span>
                </li>
              </ul>
              
              <Link 
                href="/contact" 
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
              >
                立即咨询
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 价格说明 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">价格说明</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">包含服务</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>出口清关费用</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>进口清关费用</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>关税和增值税</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>马尼拉市内派送</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>全程货物跟踪</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">注意事项</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 价格仅供参考，具体以实际报价为准</li>
                  <li>• 海运按立方计费，空运按重量计费</li>
                  <li>• 敏感货物需提前确认可运输性</li>
                  <li>• 超大超重货物需单独报价</li>
                  <li>• 价格有效期为报价当日</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              获取专属报价方案
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              专业客服团队为您提供一对一服务，根据您的货物特性制定最优物流方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">电话咨询</h3>
              <p className="text-blue-100 mb-4">专业客服在线解答</p>
              <a 
                href="tel:18665996202" 
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block"
              >
                18665996202
              </a>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">微信咨询</h3>
              <p className="text-blue-100 mb-2">添加微信获取报价</p>
              <div className="mb-2">
                <Image
                  src={OSS_IMAGES.wechatQR}
                  alt="微信二维码"
                  width={80}
                  height={80}
                  className="mx-auto bg-white p-1 rounded-lg"
                />
              </div>
              <p className="text-blue-100 text-sm mb-4">微信号：SGLYwjm</p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                扫码添加微信
              </button>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">在线留言</h3>
              <p className="text-blue-100 mb-4">留下联系方式，我们主动联系您</p>
              <Link 
                href="/contact" 
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                在线留言
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
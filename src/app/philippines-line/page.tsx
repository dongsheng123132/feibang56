import Link from 'next/link'
import { Ship, Plane, Clock, Shield, CheckCircle, Phone, Calculator, Truck, Package, Globe } from 'lucide-react'

export default function PhilippinesLine() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              菲律宾专线物流服务
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              专业的菲律宾双清包税到门服务，海运空运双渠道，时效稳定，价格优惠，让您的货物安全快捷到达马尼拉
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                立即获取报价
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                <Calculator className="mr-2 h-5 w-5" />
                查看价格表
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 服务特色 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              菲律宾专线服务特色
            </h2>
            <p className="text-xl text-gray-600">
              双清包税到门，全程无忧服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">双清包税</h3>
              <p className="text-gray-600 text-sm">包含出口清关、进口清关、关税等所有费用</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">门到门</h3>
              <p className="text-gray-600 text-sm">从深圳仓库直接配送到马尼拉指定地址</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">时效保障</h3>
              <p className="text-gray-600 text-sm">海运15天，空运3天，时效稳定可靠</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">货物保障</h3>
              <p className="text-gray-600 text-sm">全程跟踪，货物保险，安全有保障</p>
            </div>
          </div>
        </div>
      </section>

      {/* 海运服务详情 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Ship className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">马尼拉海运专线</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                菲律宾双清包税到门海运服务，全程15天，价格优惠，适合大批量货物运输。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">普通货物：<strong className="text-blue-600">700元/方</strong></span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">敏感货物：<strong className="text-blue-600">800元/方</strong></span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">特殊货物：<strong className="text-blue-600">900元/方</strong></span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">全程时效：<strong className="text-blue-600">15天</strong></span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">服务范围：<strong className="text-blue-600">马尼拉及周边地区</strong></span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">海运服务优势</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">成本优势</h4>
                  <p className="text-gray-600 text-sm">大批量货物运输成本低，适合贸易商和工厂</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">稳定时效</h4>
                  <p className="text-gray-600 text-sm">固定船期，15天稳定到达，可预期性强</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">货物安全</h4>
                  <p className="text-gray-600 text-sm">集装箱运输，货物安全有保障</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 空运服务详情 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">空运服务优势</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">快速时效</h4>
                    <p className="text-gray-600 text-sm">3天快速到达，适合急件和高价值货物</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">灵活起运</h4>
                    <p className="text-gray-600 text-sm">100公斤起运，适合中小批量货物</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">本周促销</h4>
                    <p className="text-gray-600 text-sm">普货特价优惠，吨货更有优势</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Plane className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">马尼拉空运专线</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                马尼拉空运专线，时效3天，本周促销价格，包派送服务，适合急件和中小批量货物。
              </p>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <h4 className="font-semibold text-yellow-800 mb-2">🎉 本周促销价格</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">100公斤起：<strong className="text-red-600">22.5元/kg</strong></span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">500公斤起：<strong className="text-red-600">22元/kg</strong></span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">吨货价格：<strong className="text-red-600">21.5元/kg</strong></span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">敏感货物：<strong className="text-blue-600">31元/kg</strong>（100公斤起）</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">全程时效：<strong className="text-blue-600">3天</strong></span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">服务范围：<strong className="text-blue-600">马尼拉包派送</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              服务流程
            </h2>
            <p className="text-xl text-gray-600">
              简单四步，轻松发货到菲律宾
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">咨询报价</h3>
              <p className="text-gray-600">联系客服获取专属报价方案</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">送货入仓</h3>
              <p className="text-gray-600">将货物送至深圳机场仓库</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">清关运输</h3>
              <p className="text-gray-600">我们负责清关和运输全流程</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">派送到门</h3>
              <p className="text-gray-600">货物安全送达马尼拉指定地址</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            立即开始您的菲律宾专线服务
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            专业团队为您提供一对一服务，海运空运双渠道，满足不同需求
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              联系客服：18665996202
            </Link>
            <Link 
              href="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              <Calculator className="mr-2 h-5 w-5" />
              获取详细报价
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
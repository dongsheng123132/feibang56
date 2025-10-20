import Link from 'next/link'
import Image from 'next/image'
import { Truck, Ship, Plane, Shield, Clock, Award, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import { OSS_IMAGES } from '@/config/oss'
import company1 from '../../public/company-1.jpg'
import company2 from '../../public/company-2.jpg'
import company3 from '../../public/company-3.jpg'
import company4 from '../../public/company-4.jpg'
import company5 from '../../public/company-5.jpg'
import company6 from '../../public/company-6.jpg'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 滚动横幅 - 特惠价格展示 */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-lg font-bold mx-8">
            🔥 本周特惠：海运马尼拉700元/立方米起 | 空运马尼拉22.5元/公斤起 | 双清包税到门 | 15天海运 | 3天空运 🔥
          </span>
          <span className="text-lg font-bold mx-8">
            🚢 海运优势：普货700/立方 | 敏感货800/立方 | 特货900/立方 | 全程15天 | 双清包税 🚢
          </span>
          <span className="text-lg font-bold mx-8">
            ✈️ 空运优势：100公斤+仅22.5元/公斤 | 500公斤+仅22元/公斤 | 1吨+仅21.5元/公斤 | 3天到达 ✈️
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  🏆 一手庄家 · 15年专业经验
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                专业<span className="text-yellow-400">菲律宾专线</span>物流服务
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                直接对接菲律宾本土资源，海运空运双渠道，价格更优，时效更快
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="/contact" 
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  立即咨询报价
                </Link>
                <Link 
                  href="/philippines-line" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  了解服务详情
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              {/* 核心优势展示 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">15+</div>
                  <div className="text-xs text-blue-100">年专业经验</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">1000+</div>
                  <div className="text-xs text-blue-100">成功案例</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">30%</div>
                  <div className="text-xs text-blue-100">成本节省</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24H</div>
                  <div className="text-xs text-blue-100">专业客服</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">本周特惠价格</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Ship className="h-6 w-6 mr-3 text-yellow-400" />
                        <span className="font-semibold">马尼拉海运</span>
                      </div>
                      <span className="text-yellow-400 font-bold">700元/方起</span>
                    </div>
                    <p className="text-sm text-blue-100 mt-2">全程15天，双清包税到门</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Plane className="h-6 w-6 mr-3 text-yellow-400" />
                        <span className="font-semibold">马尼拉空运</span>
                      </div>
                      <span className="text-yellow-400 font-bold">22.5元/kg起</span>
                    </div>
                    <p className="text-sm text-blue-100 mt-2">时效3天，100公斤起运</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              核心服务优势
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">一手庄家直营服务</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15年深耕菲律宾市场，直接对接本土资源，为您提供最具竞争力的物流解决方案
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <Ship className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">海运专线</h3>
              <p className="text-gray-700 mb-4">直接对接菲律宾港口资源，海运价格比市场低30%</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />15-20天稳定时效</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />DDP双清包税到门</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />全程跟踪服务</li>
              </ul>
            </div>
            <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-700 transition-colors">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">空运快递</h3>
              <p className="text-gray-700 mb-4">一手航空资源，空运价格优势明显，时效稳定</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />3-5天快速到达</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />专业包装服务</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />实时物流跟踪</li>
              </ul>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">DDP双清包税</h3>
              <p className="text-gray-700 mb-4">一站式清关服务，本土团队操作，通关率99%</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />专业清关团队</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />包税到门服务</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />99%通关成功率</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 价格对比表 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              <span className="text-red-600">市场价格对比</span> - 看看我们的优势！
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 海运价格对比 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-blue-800 flex items-center">
                  🚢 海运马尼拉价格对比
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white rounded-lg p-3">
                    <span className="text-gray-600">市场普通价格</span>
                    <span className="text-gray-500 line-through text-lg">900-1200元/立方</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-100 rounded-lg p-3 border-2 border-red-300">
                    <span className="font-bold text-red-800">菲邦特惠价格</span>
                    <span className="text-red-600 font-bold text-xl">700元/立方起</span>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                      节省200-500元/立方！
                    </span>
                  </div>
                </div>
              </div>

              {/* 空运价格对比 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-orange-800 flex items-center">
                  ✈️ 空运马尼拉价格对比
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white rounded-lg p-3">
                    <span className="text-gray-600">市场普通价格</span>
                    <span className="text-gray-500 line-through text-lg">28-35元/公斤</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-100 rounded-lg p-3 border-2 border-red-300">
                    <span className="font-bold text-red-800">菲邦特惠价格</span>
                    <span className="text-red-600 font-bold text-xl">22.5元/公斤起</span>
                  </div>
                  <div className="text-center">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                      节省5.5-12.5元/公斤！
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg">
                <p className="text-yellow-800 font-semibold">
                  💡 <strong>一手庄家直营</strong>：省去中间环节，价格更优惠！我们是菲律宾物流的直接承运商，不是代理！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择菲邦物流
            </h2>
            <p className="text-xl text-gray-600">
              专业团队，优质服务，值得信赖的菲律宾专线物流合作伙伴
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">时效保障</h3>
              <p className="text-gray-600">海运15天，空运3天，时效稳定可靠</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">专业团队</h3>
              <p className="text-gray-600">多年菲律宾专线经验，专业清关团队</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">安全保障</h3>
              <p className="text-gray-600">货物保险，全程跟踪，安全有保障</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">门到门</h3>
              <p className="text-gray-600">提供门到门配送服务，省心省力</p>
            </div>
          </div>
        </div>
      </section>

      {/* 公司实力展示 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">公司实力展示</h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            真实的公司环境和专业设备，展现我们的实力和专业水准
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: company1, title: '现代化仓储设施', desc: '配备先进的仓储管理系统，确保货物安全存储' },
              { src: company2, title: '专业操作团队', desc: '经验丰富的物流专家，提供专业的货物处理服务' },
              { src: company3, title: '完善的包装设备', desc: '专业的包装流水线，确保货物运输安全' },
              { src: company4, title: '货物装卸现场', desc: '标准化的装卸作业流程，高效安全' },
              { src: company5, title: '物流运输车队', desc: '自有运输车队，提供门到门配送服务' },
              { src: company6, title: '海运集装箱操作', desc: '专业的集装箱装卸和海运操作经验' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block"
            >
              查看更多公司实力 →
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">立即获取专业物流服务</h2>
          <p className="text-xl mb-8">一手庄家，直接对接，价格更优，服务更专业</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col md:flex-row gap-6">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                立即咨询
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                查看价格
              </Link>
            </div>
            <div className="flex flex-col items-center bg-white/10 p-6 rounded-xl backdrop-blur-sm">
               <div className="mb-3">
                 <Image
                   src={OSS_IMAGES.wechatQR}
                   alt="微信公众号二维码"
                   width={120}
                   height={120}
                   className="bg-white p-2 rounded-lg"
                 />
               </div>
               <p className="text-sm font-medium">扫码添加微信</p>
               <p className="text-xs opacity-90">微信号：SGLYwjm</p>
             </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>24小时客服热线：18665996202</span>
            </div>
            <div className="flex items-center gap-2">
               <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M8.691 2.188C8.691 1.533 8.159 1 7.504 1s-1.188.533-1.188 1.188c0 .655.533 1.188 1.188 1.188s1.187-.533 1.187-1.188zm15.29 11.093c-.1-.4-.297-.802-.59-1.188-.292-.386-.69-.769-1.188-1.093-.497-.324-1.093-.588-1.784-.784-.69-.197-1.487-.297-2.378-.297-.891 0-1.688.1-2.378.297-.691.196-1.287.46-1.784.784-.498.324-.896.707-1.188 1.093-.293.386-.49.788-.59 1.188-.1.4-.149.802-.149 1.188 0 .386.049.788.149 1.188.1.4.297.802.59 1.188.292.386.69.769 1.188 1.093.497.324 1.093.588 1.784.784.69.197 1.487.297 2.378.297.891 0 1.688-.1 2.378-.297.691-.196 1.287-.46 1.784-.784.498-.324.896-.707 1.188-1.093.293-.386.49-.788.59-1.188.1-.4.149-.802.149-1.188 0-.386-.049-.788-.149-1.188z"/>
               </svg>
               <span>微信号：SGLYwjm</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}

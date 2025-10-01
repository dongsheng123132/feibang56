import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Package } from 'lucide-react'
import Image from 'next/image'
import { OSS_IMAGES } from '@/config/oss'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              联系我们
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              专业的菲律宾物流服务团队，随时为您提供咨询和报价服务
            </p>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              多种联系方式
            </h2>
            <p className="text-xl text-gray-600">
              选择最适合您的联系方式，我们将竭诚为您服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 电话联系 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">电话咨询</h3>
              <p className="text-gray-600 mb-6 flex-grow">专业客服在线解答您的疑问</p>
              <div className="mt-auto">
                <a 
                  href="tel:18665996202" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  18665996202
                </a>
              </div>
            </div>

            {/* 微信联系 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">微信咨询</h3>
              <p className="text-gray-600 mb-4">添加微信获取实时报价</p>
              <div className="mb-4 flex-grow flex flex-col justify-center">
                <Image
                  src={OSS_IMAGES.wechatQR}
                  alt="微信二维码"
                  width={96}
                  height={96}
                  className="mx-auto bg-white p-2 rounded-lg shadow-sm"
                />
                <p className="text-sm text-gray-600 mt-3">微信号：SGLYwjm</p>
              </div>
              <div className="mt-auto">
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  扫码添加微信
                </button>
              </div>
            </div>

            {/* 邮箱联系 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">邮箱联系</h3>
              <p className="text-gray-600 mb-6 flex-grow">发送邮件获取详细方案</p>
              <div className="mt-auto">
                <a 
                  href="mailto:506282956@qq.com" 
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
                >
                  506282956@qq.com
                </a>
              </div>
            </div>

            {/* 地址信息 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">公司地址</h3>
              <p className="text-gray-600 mb-4">欢迎到访我们的办公室</p>
              <div className="text-gray-700 space-y-2 flex-grow flex flex-col justify-center">
                <p className="font-semibold text-base">深圳市宝安区福永怀德翠岗工业园四区26栋1楼</p>
                <p className="text-sm text-gray-600">菲律宾专线机场仓</p>
                <p className="text-sm text-gray-600">营业时间：周一至周六 9:00-18:00</p>
                <p className="text-sm text-gray-600">节假日请提前预约</p>
              </div>
              <div className="mt-auto">
                <a 
                  href="https://j.map.baidu.com/61/gaCk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
                >
                  查看百度地图
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 在线留言表单 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              在线留言
            </h2>
            <p className="text-xl text-gray-600">
              留下您的联系方式和需求，我们将在24小时内主动联系您
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    联系电话 *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的联系电话"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱地址
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入您的邮箱地址"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cargo-type" className="block text-sm font-medium text-gray-700 mb-2">
                  货物类型
                </label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    id="cargo-type"
                    name="cargo-type"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">请选择货物类型</option>
                    <option value="普通货物">普通货物</option>
                    <option value="敏感货物">敏感货物（带电、化妆品等）</option>
                    <option value="特殊货物">特殊货物（液体、粉末等）</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                    货物重量（kg）
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入货物重量"
                  />
                </div>

                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-2">
                    货物体积（立方米）
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="volume"
                    name="volume"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入货物体积"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  详细需求
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请详细描述您的物流需求，包括目的地、时效要求等..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  提交留言
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 营业时间和服务承诺 */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 营业时间 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">营业时间</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">周一至周五</span>
                  <span className="text-blue-600 font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">周六</span>
                  <span className="text-blue-600 font-semibold">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium">周日</span>
                  <span className="text-gray-500">休息</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>紧急联系：</strong>如有紧急货物需求，可通过微信或电话联系，我们将尽快为您处理。
                </p>
              </div>
            </div>

            {/* 服务承诺 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">服务承诺</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">快速响应</h4>
                    <p className="text-gray-600 text-sm">24小时内回复您的咨询，工作时间内1小时快速响应</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">透明报价</h4>
                    <p className="text-gray-600 text-sm">提供详细的费用明细，无隐藏费用，让您明明白白消费</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">专业服务</h4>
                    <p className="text-gray-600 text-sm">专业的物流团队，丰富的菲律宾专线经验，确保服务质量</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">全程跟踪</h4>
                    <p className="text-gray-600 text-sm">提供货物全程跟踪服务，让您随时了解货物状态</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client';

import Image from 'next/image';
import { CheckCircle, Users, Award, Globe, Truck, Ship } from 'lucide-react';

import company1 from '../../../public/company-1.jpg'
import company2 from '../../../public/company-2.jpg'
import company3 from '../../../public/company-3.jpg'
import company4 from '../../../public/company-4.jpg'
import company5 from '../../../public/company-5.jpg'
import company6 from '../../../public/company-6.jpg'

export default function AboutPage() {
  const companyImages = [
    {
      src: company1,
      title: '现代化仓储设施',
      description: '配备先进的仓储管理系统，确保货物安全存储'
    },
    {
      src: company2,
      title: '专业操作团队',
      description: '经验丰富的物流专家，提供专业的货物处理服务'
    },
    {
      src: company3,
      title: '完善的包装设备',
      description: '专业的包装流水线，确保货物运输安全'
    },
    {
      src: company4,
      title: '货物装卸现场',
      description: '标准化的装卸作业流程，高效安全'
    },
    {
      src: company5,
      title: '物流运输车队',
      description: '自有运输车队，提供门到门配送服务'
    },
    {
      src: company6,
      title: '海运集装箱操作',
      description: '专业的集装箱装卸和海运操作经验'
    }
  ];

  const advantages = [
    {
      icon: '🏢',
      title: '一手庄家',
      description: '直接与船公司、航空公司合作，无中间环节，价格更优惠'
    },
    {
      icon: '🌏',
      title: '专业专线',
      description: '专注菲律宾物流15年，深度了解当地市场和政策'
    },
    {
      icon: '📦',
      title: '双清包税',
      description: '提供一站式双清包税服务，客户无需操心清关事宜'
    },
    {
      icon: '⚡',
      title: '时效保障',
      description: '海运14-16天，空运3-5天，准时到达有保障'
    },
    {
      icon: '💰',
      title: '价格透明',
      description: '明码标价，无隐藏费用，为客户节省30-50%物流成本'
    },
    {
      icon: '🔒',
      title: '安全可靠',
      description: '全程保险，专业包装，货物安全有保障'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: '公司成立',
      description: '菲邦物流正式成立，开始专注中菲物流服务'
    },
    {
      year: '2012',
      title: '业务扩展',
      description: '建立马尼拉分公司，实现中菲两地直营'
    },
    {
      year: '2015',
      title: '服务升级',
      description: '推出双清包税服务，简化客户操作流程'
    },
    {
      year: '2018',
      title: '技术创新',
      description: '上线货物跟踪系统，实现全程可视化管理'
    },
    {
      year: '2021',
      title: '规模扩大',
      description: '年货运量突破10000吨，服务客户超过500家'
    },
    {
      year: '2024',
      title: '持续发展',
      description: '继续深耕中菲物流，为更多客户提供优质服务'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">关于菲邦物流</h1>
          <p className="text-2xl mb-8">中菲物流专家 · 一手庄家 · 15年专业经验</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-90">年专业经验</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">合作客户</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold">10000+</div>
              <div className="text-sm opacity-90">吨年货运量</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm opacity-90">客户满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* 公司介绍 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">专业的中菲物流服务商</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              菲邦物流成立于2009年，是一家专注于中国到菲律宾物流服务的专业公司。
              作为一手庄家，我们直接与船公司、航空公司合作，为客户提供最优惠的价格和最专业的服务。
              15年来，我们始终坚持"客户至上，服务第一"的经营理念，
              为超过500家企业提供了安全、快捷、经济的物流解决方案。
            </p>
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">我们的使命</h3>
              <p className="text-lg text-blue-800">
                让中菲贸易更简单，为客户创造更大价值，成为中菲物流领域最值得信赖的合作伙伴。
              </p>
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
            {companyImages.map((image, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">核心优势</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">发展历程</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 服务承诺 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">服务承诺</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">价格承诺</h3>
                <p className="text-lg">
                  作为一手庄家，我们承诺提供市场最优价格，
                  如发现同等服务更低价格，我们将匹配并给予额外优惠。
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">服务承诺</h3>
                <p className="text-lg">
                  7×24小时客服支持，全程跟踪服务，
                  如因我方原因造成延误，将承担相应责任并给予补偿。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">选择菲邦，选择专业</h2>
          <p className="text-xl mb-12">
            15年专业经验，一手庄家优势，为您提供最优质的中菲物流服务
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              立即咨询
            </a>
            <a
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              查看报价
            </a>
            <a
              href="tel:18665996202"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors"
            >
              📞 18665996202
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
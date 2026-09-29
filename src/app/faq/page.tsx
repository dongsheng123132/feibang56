'use client';

import { useState } from 'react';
import Image from 'next/image';
import { OSS_IMAGES } from '@/config/oss';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('shipping');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'shipping', name: '运输服务', icon: '🚢' },
    { id: 'pricing', name: '价格费用', icon: '💰' },
    { id: 'customs', name: '清关报关', icon: '📋' },
    { id: 'packaging', name: '包装要求', icon: '📦' },
    { id: 'tracking', name: '货物跟踪', icon: '📍' },
    { id: 'documents', name: '单证资料', icon: '📄' }
  ];

  const faqs = {
    shipping: [
      {
        id: 1,
        question: '你们提供哪些运输方式到菲律宾？',
        answer: '我们提供海运和空运两种方式：\n• 海运：适合大批量货物，时效14-16天，成本较低\n• 空运：适合紧急货物，时效3-5天，速度快\n• 海运拼箱：适合小批量货物，经济实惠\n• 空运包板：适合大批量紧急货物'
      },
      {
        id: 2,
        question: '从中国到马尼拉需要多长时间？',
        answer: '具体时效取决于运输方式：\n• 海运：14-16天（含清关时间）\n• 空运：3-5天（含清关时间）\n• 快递：5-7天\n我们会根据您的货物特性和时效要求推荐最适合的运输方案。'
      },
      {
        id: 3,
        question: '你们的服务覆盖菲律宾哪些城市？',
        answer: '我们的服务覆盖菲律宾全境：\n• 主要城市：马尼拉、宿务、达沃、怡朗等\n• 偏远地区：可安排陆运配送\n• 岛屿地区：可安排岛际运输\n• 门到门服务：从中国工厂直接配送到菲律宾收货地址'
      },
      {
        id: 4,
        question: '什么货物不能运输到菲律宾？',
        answer: '以下货物禁止或限制运输：\n• 危险品：易燃易爆、有毒有害物质\n• 违禁品：武器、毒品、色情物品\n• 活体动植物：需要特殊许可证\n• 液体化妆品：需要特殊包装和申报\n• 电池产品：需要符合航空运输标准\n具体可咨询我们的客服确认。'
      }
    ],
    pricing: [
      {
        id: 5,
        question: '运费是如何计算的？',
        answer: '运费计算方式：\n• 海运：按体积（立方米）或重量（吨）计费，取较大值\n• 空运：按体积重量或实际重量计费，取较大值\n• 体积重量计算：长×宽×高÷6000（空运）\n• 包含费用：运费、保险费、清关费、配送费\n• 不含费用：目的地税费（代收代付）'
      },
      {
        id: 6,
        question: '有最低收费标准吗？',
        answer: '我们的最低收费标准：\n• 海运拼箱：最低1立方米起收\n• 空运：最低45公斤起收\n• 快递：最低0.5公斤起收\n• 小批量货物建议选择拼箱服务，更经济实惠\n• 大批量货物可享受更优惠的价格'
      },
      {
        id: 7,
        question: '价格包含哪些费用？',
        answer: '我们的双清包税价格包含：\n• 中国段：提货费、报关费、港杂费\n• 运输费：海运费或空运费\n• 菲律宾段：清关费、配送费、关税\n• 保险费：货物运输保险\n• 不包含：特殊包装费、超重超尺寸费、偏远地区附加费'
      },
      {
        id: 8,
        question: '如何获得准确报价？',
        answer: '获得准确报价需要提供：\n• 货物信息：品名、数量、重量、尺寸\n• 包装方式：纸箱、木箱、托盘等\n• 起运地址和目的地地址\n• 时效要求：普通或加急\n• 特殊要求：保险、包装等\n联系我们客服，5分钟内给您精准报价。'
      }
    ],
    customs: [
      {
        id: 9,
        question: '什么是双清包税服务？',
        answer: '双清包税服务包括：\n• 中国出口清关：代办出口报关手续\n• 菲律宾进口清关：代办进口清关手续\n• 税费代缴：代缴菲律宾进口关税和税费\n• 一站式服务：客户无需操心清关事宜\n• 透明收费：所有费用提前告知，无隐藏费用'
      },
      {
        id: 10,
        question: '清关需要提供哪些资料？',
        answer: '清关所需资料：\n• 装箱单（Packing List）\n• 发票（Commercial Invoice）\n• 收货人信息（公司或个人）\n• 货物照片（必要时）\n• 特殊货物需要：许可证、检验证书等\n我们会协助您准备所有清关资料。'
      },
      {
        id: 11,
        question: '菲律宾的关税税率是多少？',
        answer: '菲律宾关税税率：\n• 一般货物：0-30%不等\n• 电子产品：通常3-7%\n• 服装纺织：通常10-15%\n• 食品：通常10-40%\n• 机械设备：通常3-10%\n具体税率以菲律宾海关最新政策为准，我们会提前告知。'
      }
    ],
    packaging: [
      {
        id: 12,
        question: '货物包装有什么要求？',
        answer: '包装要求：\n• 海运：防潮、防震、牢固包装\n• 空运：符合航空运输标准\n• 易碎品：需要特殊保护包装\n• 液体：需要防漏包装\n• 电池：需要符合危险品包装标准\n我们可提供专业包装服务。'
      },
      {
        id: 13,
        question: '你们提供包装服务吗？',
        answer: '我们提供专业包装服务：\n• 纸箱包装：适合一般货物\n• 木箱包装：适合贵重或易碎货物\n• 托盘包装：适合重货或机械设备\n• 防潮包装：适合电子产品\n• 定制包装：根据货物特性定制\n包装费用根据货物和包装要求计算。'
      }
    ],
    tracking: [
      {
        id: 14,
        question: '如何跟踪货物运输状态？',
        answer: '货物跟踪方式：\n• 在线查询：通过我们网站输入运单号查询\n• 微信查询：关注我们微信公众号查询\n• 客服查询：联系客服实时查询\n• 短信通知：关键节点自动发送短信\n• 邮件通知：每日发送货物状态邮件'
      },
      {
        id: 15,
        question: '货物运输过程中会有哪些状态更新？',
        answer: '运输状态更新：\n• 已收货：货物已从发货地提取\n• 已报关：货物已完成出口报关\n• 运输中：货物正在运输途中\n• 已到港：货物已到达目的港\n• 清关中：货物正在进行进口清关\n• 派送中：货物正在配送\n• 已签收：货物已成功交付'
      }
    ],
    documents: [
      {
        id: 16,
        question: '发货需要准备哪些单证？',
        answer: '发货所需单证：\n• 装箱单：详细列明货物信息\n• 商业发票：货物价值证明\n• 收货人信息：详细的收货地址和联系方式\n• 货物照片：便于清关查验\n• 特殊单证：如需要许可证、检验证书等\n我们会协助您准备所有必要单证。'
      },
      {
        id: 17,
        question: '发票金额如何填写？',
        answer: '发票金额填写原则：\n• 真实申报：按货物实际价值申报\n• 合理范围：不能过高或过低\n• 市场价格：参考市场合理价格\n• 避免查验：过低容易引起海关查验\n• 税费计算：关税按发票金额计算\n我们会根据经验给您专业建议。'
      }
    ]
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const cleanAnswerText = (text: string) =>
    text
      .split('\n')
      .map((line) => line.replace(/^•\s*/, '').trim())
      .filter(Boolean)
      .map((line) => (/[。！？：:；]$/.test(line) ? line : `${line}；`))
      .join('')
      .replace(/；$/, '。');

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.values(faqs)
      .flat()
      .map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: cleanAnswerText(faq.answer),
        },
      })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">常见问题解答</h1>
          <p className="text-xl mb-8">专业解答您的物流疑问，让运输更简单</p>
          <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg">
              📞 客服热线：<span className="font-bold">18665996202</span>
            </p>
            <p className="text-lg mt-2">
              💬 微信咨询：<span className="font-bold">SGLYwjm</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {categories.map((category) => (
            <div
              key={category.id}
              className={activeCategory === category.id ? 'space-y-4' : 'hidden'}
            >
              {faqs[category.id as keyof typeof faqs].map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <span className={`transform transition-transform ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </button>
                  <div className={openFAQ === faq.id ? 'px-6 pb-4' : 'hidden'}>
                    <div className="border-t pt-4">
                      <div className="text-gray-700 whitespace-pre-line">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">还有其他问题？</h2>
          <p className="text-xl text-gray-600 mb-8">我们的专业客服团队随时为您解答</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">电话咨询</h3>
              <p className="text-gray-600 mb-4">工作日 9:00-18:00</p>
              <a href="tel:18665996202" className="text-blue-600 font-bold text-lg">
              18665996202
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">微信咨询</h3>
              <p className="text-gray-600 mb-4">24小时在线服务</p>
              <div className="mb-4 flex justify-center">
                <Image
                  src={OSS_IMAGES.wechatQR}
                  alt="微信二维码"
                  width={80}
                  height={80}
                  className="bg-white p-2 rounded-lg shadow-sm"
                />
              </div>
              <p className="text-blue-600 font-bold text-lg">微信号：SGLYwjm</p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                扫码添加微信
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">邮件咨询</h3>
              <p className="text-gray-600 mb-4">24小时内回复</p>
              <a href="mailto:506282956@qq.com" className="text-blue-600 font-bold text-lg">
                506282956@qq.com
              </a>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block"
            >
              立即咨询报价
            </a>
          </div>
        </div>
      </section>

      {/* Search Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">使用小贴士</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-bold mb-2">快速查找</h3>
              <p className="text-gray-600 text-sm">使用分类标签快速找到相关问题</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-bold mb-2">详细解答</h3>
              <p className="text-gray-600 text-sm">每个问题都有详细的专业解答</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-bold mb-2">随时咨询</h3>
              <p className="text-gray-600 text-sm">找不到答案可随时联系客服</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold mb-2">快速响应</h3>
              <p className="text-gray-600 text-sm">专业客服团队快速响应您的问题</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
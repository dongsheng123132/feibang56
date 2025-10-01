'use client';

import { useState } from 'react';

export default function CasesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const cases = [
    {
      id: 1,
      category: 'electronics',
      title: '电子产品批量运输',
      client: '深圳某电子贸易公司',
      cargo: '手机配件、充电器等电子产品',
      weight: '2.5吨',
      volume: '15立方米',
      route: '深圳 → 马尼拉',
      method: '海运',
      duration: '14天',
      savings: '节省成本35%',
      testimonial: '菲邦物流的服务非常专业，货物安全到达，价格比其他公司便宜很多，以后长期合作！',
      rating: 5,
      date: '2024年10月'
    },
    {
      id: 2,
      category: 'textiles',
      title: '服装纺织品运输',
      client: '广州某服装出口商',
      cargo: '成衣、面料、辅料',
      weight: '1.8吨',
      volume: '25立方米',
      route: '广州 → 马尼拉',
      method: '海运',
      duration: '15天',
      savings: '节省成本40%',
      testimonial: '第一次合作就很满意，双清包税服务让我们省心省力，强烈推荐！',
      rating: 5,
      date: '2024年9月'
    },
    {
      id: 3,
      category: 'machinery',
      title: '机械设备紧急运输',
      client: '东莞某机械制造厂',
      cargo: '生产设备零配件',
      weight: '800公斤',
      volume: '3立方米',
      route: '东莞 → 马尼拉',
      method: '空运',
      duration: '3天',
      savings: '时效提升80%',
      testimonial: '紧急订单，菲邦物流3天就帮我们送到了，客户非常满意，解决了大问题！',
      rating: 5,
      date: '2024年10月'
    },
    {
      id: 4,
      category: 'food',
      title: '食品调料批量运输',
      client: '福建某食品公司',
      cargo: '调味品、干货、罐头',
      weight: '3.2吨',
      volume: '12立方米',
      route: '福建 → 马尼拉',
      method: '海运',
      duration: '16天',
      savings: '节省成本30%',
      testimonial: '食品运输要求很高，菲邦物流处理得很专业，温控和包装都很到位。',
      rating: 5,
      date: '2024年8月'
    },
    {
      id: 5,
      category: 'cosmetics',
      title: '化妆品敏感货运输',
      client: '上海某化妆品品牌',
      cargo: '护肤品、彩妆、香水',
      weight: '1.2吨',
      volume: '8立方米',
      route: '上海 → 马尼拉',
      method: '海运',
      duration: '15天',
      savings: '节省成本25%',
      testimonial: '敏感货物处理很专业，清关顺利，包装完好无损，值得信赖的物流伙伴。',
      rating: 5,
      date: '2024年9月'
    },
    {
      id: 6,
      category: 'furniture',
      title: '家具建材大件运输',
      client: '佛山某家具厂',
      cargo: '办公家具、装修材料',
      weight: '5.5吨',
      volume: '35立方米',
      route: '佛山 → 马尼拉',
      method: '海运',
      duration: '14天',
      savings: '节省成本45%',
      testimonial: '大件货物运输最担心损坏，菲邦物流包装和运输都很专业，货物完好到达。',
      rating: 5,
      date: '2024年10月'
    }
  ];

  const categories = [
    { id: 'all', name: '全部案例', icon: '📦' },
    { id: 'electronics', name: '电子产品', icon: '📱' },
    { id: 'textiles', name: '服装纺织', icon: '👕' },
    { id: 'machinery', name: '机械设备', icon: '⚙️' },
    { id: 'food', name: '食品调料', icon: '🍜' },
    { id: 'cosmetics', name: '化妆品', icon: '💄' },
    { id: 'furniture', name: '家具建材', icon: '🪑' }
  ];

  const filteredCases = activeTab === 'all' ? cases : cases.filter(c => c.category === activeTab);

  const stats = [
    { label: '成功案例', value: '500+', icon: '✅' },
    { label: '满意客户', value: '300+', icon: '😊' },
    { label: '运输货量', value: '10000+吨', icon: '📦' },
    { label: '平均节省成本', value: '35%', icon: '💰' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">客户成功案例</h1>
          <p className="text-xl mb-8">真实案例见证，专业服务品质</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 案例分类 */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === category.id
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

      {/* 案例展示 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <div key={caseItem.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{caseItem.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {caseItem.method}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">客户：</span>
                      <span className="font-medium">{caseItem.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">货物：</span>
                      <span className="font-medium">{caseItem.cargo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">重量/体积：</span>
                      <span className="font-medium">{caseItem.weight} / {caseItem.volume}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">路线：</span>
                      <span className="font-medium">{caseItem.route}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">时效：</span>
                      <span className="font-medium text-green-600">{caseItem.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">优势：</span>
                      <span className="font-medium text-red-600">{caseItem.savings}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-gray-600 mr-2">客户评价：</span>
                      <div className="flex">
                        {[...Array(caseItem.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm italic">"{caseItem.testimonial}"</p>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{caseItem.date}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">成功完成</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 客户见证 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">客户真实评价</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  李
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">李总</h4>
                  <p className="text-sm text-gray-600">电子贸易公司</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700">"合作3年了，菲邦物流一直很稳定，价格实惠，服务专业，是我们最信赖的物流伙伴。"</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  王
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">王经理</h4>
                  <p className="text-sm text-gray-600">服装出口商</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700">"双清包税服务太方便了，完全不用担心清关问题，货物按时到达，客户满意度很高。"</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  张
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">张总</h4>
                  <p className="text-sm text-gray-600">机械制造厂</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700">"紧急货物3天就到了马尼拉，效率太高了！菲邦物流解决了我们的燃眉之急。"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">成为我们的下一个成功案例</h2>
          <p className="text-xl mb-8">专业的菲律宾物流服务，让您的货物安全快速到达</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              立即咨询
            </a>
            <a
              href="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              查看报价
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import { useState } from 'react';

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 模拟跟踪数据
  const mockTrackingData = {
    'FB2024001001': {
      status: 'delivered',
      orderInfo: {
        trackingNumber: 'FB2024001001',
        origin: '深圳',
        destination: '马尼拉',
        service: '海运双清包税',
        weight: '2.5吨',
        volume: '15立方米',
        estimatedDelivery: '2024-11-15',
        actualDelivery: '2024-11-14'
      },
      timeline: [
        {
          date: '2024-10-28',
          time: '09:30',
          status: '已收货',
          location: '深圳仓库',
          description: '货物已从发货地提取，正在准备出口报关'
        },
        {
          date: '2024-10-29',
          time: '14:20',
          status: '已报关',
          location: '深圳港',
          description: '货物已完成出口报关手续，准备装船'
        },
        {
          date: '2024-10-30',
          time: '16:45',
          status: '已装船',
          location: '深圳港',
          description: '货物已装船，船舶准备出港'
        },
        {
          date: '2024-11-01',
          time: '08:00',
          status: '运输中',
          location: '太平洋',
          description: '货物正在海上运输中，预计11月12日到达马尼拉港'
        },
        {
          date: '2024-11-12',
          time: '10:30',
          status: '已到港',
          location: '马尼拉港',
          description: '货物已安全到达马尼拉港，准备进口清关'
        },
        {
          date: '2024-11-13',
          time: '11:15',
          status: '清关中',
          location: '马尼拉海关',
          description: '货物正在进行进口清关，预计今日完成'
        },
        {
          date: '2024-11-13',
          time: '16:20',
          status: '清关完成',
          location: '马尼拉海关',
          description: '货物已完成进口清关，准备安排配送'
        },
        {
          date: '2024-11-14',
          time: '09:00',
          status: '派送中',
          location: '马尼拉配送中心',
          description: '货物正在配送途中，预计今日下午送达'
        },
        {
          date: '2024-11-14',
          time: '15:30',
          status: '已签收',
          location: '收货地址',
          description: '货物已成功交付，签收人：李先生'
        }
      ]
    },
    'FB2024001002': {
      status: 'in_transit',
      orderInfo: {
        trackingNumber: 'FB2024001002',
        origin: '广州',
        destination: '宿务',
        service: '空运双清包税',
        weight: '800公斤',
        volume: '3立方米',
        estimatedDelivery: '2024-11-20',
        actualDelivery: null
      },
      timeline: [
        {
          date: '2024-11-15',
          time: '10:00',
          status: '已收货',
          location: '广州仓库',
          description: '货物已从发货地提取，正在准备出口报关'
        },
        {
          date: '2024-11-16',
          time: '09:30',
          status: '已报关',
          location: '广州白云机场',
          description: '货物已完成出口报关手续，准备装机'
        },
        {
          date: '2024-11-16',
          time: '18:45',
          status: '运输中',
          location: '空中',
          description: '货物正在空运途中，预计明日到达宿务机场'
        }
      ]
    }
  };

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      alert('请输入运单号');
      return;
    }

    setIsLoading(true);
    
    // 模拟API调用延迟
    setTimeout(() => {
      const result = mockTrackingData[trackingNumber as keyof typeof mockTrackingData];
      setTrackingResult(result || null);
      setIsLoading(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'in_transit': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return '已送达';
      case 'in_transit': return '运输中';
      case 'processing': return '处理中';
      default: return '未知状态';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">货物跟踪查询</h1>
          <p className="text-xl mb-8">实时跟踪您的货物运输状态</p>
        </div>
      </section>

      {/* 跟踪查询 */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">输入运单号查询</h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="请输入运单号，如：FB2024001001"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
              <button
                onClick={handleTrack}
                disabled={isLoading}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isLoading ? '查询中...' : '查询'}
              </button>
            </div>
            
            <div className="mt-6 text-center text-gray-600">
              <p className="mb-2">示例运单号：</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setTrackingNumber('FB2024001001')}
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  FB2024001001 (已送达)
                </button>
                <button
                  onClick={() => setTrackingNumber('FB2024001002')}
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  FB2024001002 (运输中)
                </button>
              </div>
            </div>
          </div>

          {/* 高级跟踪管理入口 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 mb-8 text-white">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold mb-4">高级货物跟踪管理系统</h2>
              <p className="text-blue-100 mb-6">
                已有账户？登录专业跟踪系统，享受更多高级功能：订单管理、批量查询、数据导出等
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://sgly.logistic.wang/login/Index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  🔐 登录跟踪系统
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  📞 申请开户
                </a>
              </div>
              <div className="mt-4 text-sm text-blue-200">
                <p>💡 提示：新客户请先联系我们申请开户，获取专属账户和密码</p>
              </div>
            </div>
          </div>

          {/* 跟踪结果 */}
          {trackingResult && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* 订单信息 */}
              <div className="bg-blue-50 p-6 border-b">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      运单号：{trackingResult.orderInfo.trackingNumber}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trackingResult.status)}`}>
                        {getStatusText(trackingResult.status)}
                      </span>
                      <span className="text-gray-600">
                        {trackingResult.orderInfo.origin} → {trackingResult.orderInfo.destination}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 text-right">
                    <p className="text-gray-600">预计送达：{trackingResult.orderInfo.estimatedDelivery}</p>
                    {trackingResult.orderInfo.actualDelivery && (
                      <p className="text-green-600 font-medium">实际送达：{trackingResult.orderInfo.actualDelivery}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* 货物详情 */}
              <div className="p-6 border-b bg-gray-50">
                <h4 className="font-bold mb-4">货物信息</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <span className="text-gray-600">服务类型：</span>
                    <span className="font-medium">{trackingResult.orderInfo.service}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">重量：</span>
                    <span className="font-medium">{trackingResult.orderInfo.weight}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">体积：</span>
                    <span className="font-medium">{trackingResult.orderInfo.volume}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">起运地：</span>
                    <span className="font-medium">{trackingResult.orderInfo.origin}</span>
                  </div>
                </div>
              </div>

              {/* 运输轨迹 */}
              <div className="p-6">
                <h4 className="font-bold mb-6">运输轨迹</h4>
                <div className="space-y-6">
                  {trackingResult.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1 mr-4"></div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h5 className="font-bold text-gray-900">{event.status}</h5>
                            <p className="text-gray-600 text-sm">{event.location}</p>
                          </div>
                          <div className="text-sm text-gray-500 mt-1 sm:mt-0">
                            {event.date} {event.time}
                          </div>
                        </div>
                        <p className="text-gray-700 mt-2">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 查询无结果 */}
          {trackingNumber && !isLoading && !trackingResult && trackingNumber.trim() && (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-2">未找到相关信息</h3>
              <p className="text-gray-600 mb-6">
                请检查运单号是否正确，或联系客服查询
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:18665996202"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  📞 电话咨询
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  💬 在线咨询
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 跟踪说明 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">跟踪服务说明</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">实时跟踪</h3>
              <p className="text-gray-600">24小时实时更新货物运输状态</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">多种查询</h3>
              <p className="text-gray-600">网站、微信、电话多种查询方式</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold mb-2">状态通知</h3>
              <p className="text-gray-600">关键节点自动发送短信和邮件通知</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">详细信息</h3>
              <p className="text-gray-600">提供详细的运输轨迹和时间节点</p>
            </div>
          </div>
        </div>
      </section>

      {/* 常见状态说明 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">运输状态说明</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">已收货</h4>
                  <p className="text-sm text-gray-600">货物已从发货地提取</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">已报关</h4>
                  <p className="text-sm text-gray-600">货物已完成出口报关手续</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">运输中</h4>
                  <p className="text-sm text-gray-600">货物正在运输途中</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">已到港</h4>
                  <p className="text-sm text-gray-600">货物已到达目的港口或机场</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-yellow-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">清关中</h4>
                  <p className="text-sm text-gray-600">货物正在进行进口清关</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">清关完成</h4>
                  <p className="text-sm text-gray-600">货物已完成进口清关</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">派送中</h4>
                  <p className="text-sm text-gray-600">货物正在配送途中</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">已签收</h4>
                  <p className="text-sm text-gray-600">货物已成功交付</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系客服 */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要帮助？</h2>
          <p className="text-xl mb-8">我们的客服团队随时为您提供跟踪查询服务</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:18665996202"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              📞 18665996202
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              💬 在线咨询
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
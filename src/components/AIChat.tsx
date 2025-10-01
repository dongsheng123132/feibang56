'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink, Phone, Calculator, Package, Clock } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface QuickQuestion {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'shipping' | 'tracking' | 'general';
}

const quickQuestions: QuickQuestion[] = [
  {
    id: '1',
    question: '空运到马尼拉多少钱？',
    answer: '空运到马尼拉的价格根据重量计算：\n• 1-20公斤：28元/公斤\n• 21-50公斤：26元/公斤\n• 51-100公斤：25元/公斤\n• 101公斤以上：24元/公斤\n\n时效：2-3个工作日\n服务：双清包税到门',
    category: 'pricing'
  },
  {
    id: '2',
    question: '海运到马尼拉多少钱？',
    answer: '海运到马尼拉按体积计费：\n• 普货：750元/立方米\n• 敏感货：850元/立方米\n• 最低起运：0.3立方米\n\n时效：15-25天\n服务：双清包税到门',
    category: 'pricing'
  },
  {
    id: '3',
    question: '运输时效是多久？',
    answer: '我们提供多种时效选择：\n• 空运：2-3个工作日\n• 海运：15-25天\n• 快递小包：5-7天\n\n具体时效会根据货物类型、目的地和清关情况有所调整。',
    category: 'shipping'
  },
  {
    id: '4',
    question: '如何跟踪我的货物？',
    answer: '您可以通过以下方式跟踪货物：\n• 网站查询：输入运单号在线查询\n• 微信查询：关注我们微信公众号\n• 电话查询：18665996202\n• 专业系统：登录我们的货物跟踪管理系统',
    category: 'tracking'
  },
  {
    id: '5',
    question: '需要什么清关资料？',
    answer: '一般货物需要提供：\n• 装箱单（Packing List）\n• 发票（Invoice）\n• 收货人身份证明\n• 货物照片\n\n特殊货物可能需要额外证明文件，我们会提前告知。',
    category: 'general'
  },
  {
    id: '6',
    question: '可以发什么货物？',
    answer: '我们可以承运：\n• 普通货物：服装、鞋子、箱包等\n• 电子产品：手机、电脑、家电等\n• 化妆品：护肤品、彩妆等\n• 食品：预包装食品\n\n违禁品和危险品不能承运，具体可咨询客服。',
    category: 'general'
  }
];

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: '您好！我是菲邦物流AI智能客服 🤖\n\n我可以帮您：\n• 查询物流价格和时效\n• 了解清关要求\n• 跟踪货物状态\n• 解答各种物流问题\n\n请选择下方问题或直接输入您的问题！',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickQuestion = (question: QuickQuestion) => {
    // 添加用户问题
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: question.question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setShowQuickQuestions(false);
    setIsTyping(true);

    // 模拟AI回复延迟
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: question.answer,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowQuickQuestions(false);
    setIsTyping(true);

    // 模拟AI回复
    setTimeout(() => {
      let aiResponse = '';
      
      // 简单的关键词匹配回复
      const input = inputValue.toLowerCase();
      if (input.includes('价格') || input.includes('多少钱') || input.includes('费用')) {
        aiResponse = '关于价格咨询，我需要了解更多信息：\n• 货物重量/体积\n• 目的地城市\n• 货物类型\n• 运输方式偏好\n\n💡 建议您使用我们的专业AI系统获取精确报价，点击下方按钮访问！';
      } else if (input.includes('时效') || input.includes('多久') || input.includes('时间')) {
        aiResponse = '运输时效说明：\n• 空运：2-3个工作日\n• 海运：15-25天\n• 快递：5-7天\n\n具体时效受货物类型、清关情况影响。需要准确时效评估请联系专业客服！';
      } else if (input.includes('跟踪') || input.includes('查询') || input.includes('运单')) {
        aiResponse = '货物跟踪方式：\n• 网站查询：在跟踪页面输入运单号\n• 微信查询：关注公众号查询\n• 电话查询：18665996202\n• 专业系统：登录货物跟踪管理系统\n\n建议使用专业跟踪系统获得更详细信息！';
      } else {
        aiResponse = '感谢您的咨询！您的问题比较复杂，建议您：\n\n1️⃣ 使用我们的专业AI咨询系统，基于知识库提供精准答案\n2️⃣ 直接联系人工客服：18665996202\n3️⃣ 微信咨询：扫描二维码添加客服\n\n专业AI系统能根据您的具体需求提供详细的物流方案和报价！';
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'pricing': return <Calculator className="h-4 w-4" />;
      case 'shipping': return <Package className="h-4 w-4" />;
      case 'tracking': return <Clock className="h-4 w-4" />;
      default: return <MessageCircle className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'pricing': return 'bg-green-100 text-green-700 border-green-200';
      case 'shipping': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'tracking': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <>
      {/* 漂浮按钮 */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <MessageCircle className="h-6 w-6" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              AI
            </div>
          </button>
          
          {/* 提示气泡 */}
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 max-w-48 animate-bounce">
            <div className="text-sm text-gray-700 font-medium">有问题？问我吧！</div>
            <div className="text-xs text-gray-500">AI智能客服为您服务</div>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
          </div>
        </div>
      )}

      {/* 聊天窗口 */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* 头部 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">菲邦物流AI客服</h3>
                <p className="text-xs text-blue-100">智能助手 • 在线服务</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 消息区域 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl p-3 ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 shadow-sm border'}`}>
                    <div className="text-sm whitespace-pre-line">{message.content}</div>
                    <div className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* AI正在输入 */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl p-3 shadow-sm border">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 快速问题 */}
          {showQuickQuestions && (
            <div className="p-4 border-t bg-white">
              <div className="text-sm font-medium text-gray-700 mb-3">💡 常见问题</div>
              <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                {quickQuestions.slice(0, 4).map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuickQuestion(question)}
                    className={`text-left text-xs p-2 rounded-lg border transition-colors hover:shadow-sm ${getCategoryColor(question.category)}`}
                  >
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(question.category)}
                      <span>{question.question}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 专业AI系统入口 */}
          <div className="p-3 border-t bg-gradient-to-r from-orange-50 to-yellow-50">
            <div className="text-center">
              <div className="text-xs text-gray-600 mb-2">🚀 需要更专业的咨询？</div>
              <a
                href="https://yuanqi.tencent.com/webim/#/chat/AkgtoB?appid=1970860402797074624&experience=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs px-3 py-2 rounded-lg hover:shadow-md transition-all"
              >
                <Bot className="h-3 w-3" />
                <span>专业AI咨询系统</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* 输入区域 */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入您的问题..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-gray-500">按 Enter 发送</div>
              <a
                href="tel:18665996202"
                className="text-xs text-blue-600 hover:text-blue-700 flex items-center space-x-1"
              >
                <Phone className="h-3 w-3" />
                <span>人工客服</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
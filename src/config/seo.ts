import type { Metadata } from 'next';

// 全站共用的 SEO 基础值，避免各页面 metadata 里的 openGraph
// 互相整体覆盖（Next.js 对 openGraph 是整体替换，不是逐字段深合并）。
export const SITE_URL = 'https://www.phibong.com';

export const baseOpenGraph: NonNullable<Metadata['openGraph']> = {
  type: 'website',
  locale: 'zh_CN',
  siteName: '菲邦国际物流',
  images: ['/logo.jpg'],
};

/**
 * 公司对外口径的唯一来源（NAP：Name / Address / Phone）。
 * 页面文案、JSON-LD、llms.txt 必须与此一致 —— AI 搜索判断「同一家公司」靠的就是这三项跨渠道一致。
 * 改这里之前先确认工商登记信息，不要顺手改。
 */
export const COMPANY = {
  legalName: '深圳市菲邦国际物流有限公司',
  brandName: '菲邦国际物流',
  alternateNames: ['菲邦物流', '菲邦国际物流', 'Fibong International Logistics'],
  telephone: '+86-18665996202',
  telephoneDisplay: '18665996202',
  email: '506282956@qq.com',
  wechat: 'SGLYwjm',
  uscc: '91440300MA5GW00X50',
  // 以工商登记为准（26栋201）；1 楼为大件仓库收发货区，2 楼办公。
  street: '宝安区福永街道怀德社区翠岗工业四区26栋201',
  foundingDate: '2021-07-02',
  /** 百度百科词条（2026-11-04 极速创建，信息引自国家企业信用信息公示系统） */
  baikeUrl: 'https://baike.baidu.com/item/%E6%B7%B1%E5%9C%B3%E5%B8%82%E8%8F%B2%E9%82%A6%E5%9B%BD%E9%99%85%E7%89%A9%E6%B5%81%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8',
  locality: '深圳市',
  region: '广东省',
  country: 'CN',
} as const;

/** 站点主要内容最后更新日（首页/关于/报价等基础页面），用于 sitemap 的 lastmod */
export const SITE_CONTENT_UPDATED = '2026-11-04';

/**
 * 对外公示的起步价。价格口径与 /pricing/ 页面保持一致，
 * 结构化数据里带 unitCode 才能被 AI 正确解析成「每立方米 / 每公斤」。
 */
export const PRICE_NOTE =
  '海运为限时促销价（原价见对照），空运为 11 月运价；运价可能随时调整。实际运价需按货物重量/体积、品名、包装、起运地与菲律宾收货地址、时效要求核算，以客服确认为准。';

export const SERVICE_PRICES = [
  {
    name: '马尼拉海运小件（普货）',
    price: 650,
    originalPrice: 700,
    currency: 'CNY',
    unitCode: 'MTQ',
    unitText: '元/立方米',
    promo: true,
    description: '深圳到马尼拉海运小件门到门，双清包税，约 14-16 天。限时促销价 650 元/立方米，原价 700 元/立方米。',
  },
  {
    name: '马尼拉海运小件（敏感货）',
    price: 750,
    originalPrice: 800,
    currency: 'CNY',
    unitCode: 'MTQ',
    unitText: '元/立方米',
    promo: true,
    description: '化妆品、液体、粉末等敏感货海运小件门到门，双清包税。限时促销价 750 元/立方米，原价 800 元/立方米。',
  },
  {
    name: '马尼拉海运小件（特货）',
    price: 850,
    originalPrice: 900,
    currency: 'CNY',
    unitCode: 'MTQ',
    unitText: '元/立方米',
    promo: true,
    description: '需特殊申报与操作的特货海运小件门到门，双清包税。限时促销价 850 元/立方米，原价 900 元/立方米。',
  },
  {
    name: '马尼拉空运（50 公斤起，普货）',
    price: 24,
    originalPrice: null,
    currency: 'CNY',
    unitCode: 'KGM',
    unitText: '元/公斤',
    promo: false,
    description: '马尼拉包派，双清包税到门，约 3-5 天。11 月运价：普货 50 公斤起 24 元/公斤，起运量 50 公斤起。',
  },
  {
    name: '马尼拉空运（100 公斤起，普货）',
    price: 23,
    originalPrice: null,
    currency: 'CNY',
    unitCode: 'KGM',
    unitText: '元/公斤',
    promo: false,
    description: '马尼拉包派，双清包税到门，约 3-5 天。11 月运价：普货 100 公斤起 23 元/公斤。',
  },
  {
    name: '马尼拉空运（300 公斤起，普货）',
    price: 22.5,
    originalPrice: null,
    currency: 'CNY',
    unitCode: 'KGM',
    unitText: '元/公斤',
    promo: false,
    description: '马尼拉包派，双清包税到门，约 3-5 天。11 月运价：普货 300 公斤起 22.5 元/公斤。',
  },
  {
    name: '马尼拉空运（敏感货，100 公斤起）',
    price: 31,
    originalPrice: null,
    currency: 'CNY',
    unitCode: 'KGM',
    unitText: '元/公斤',
    promo: false,
    description: '敏感货空运 100 公斤起，需提前确认品名与所需资料，具体以客服报价为准。',
  },
] as const;

/** Organization / LocalBusiness 节点（@id 供其它节点引用） */
export const ORGANIZATION_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: COMPANY.street,
  addressLocality: COMPANY.locality,
  addressRegion: COMPANY.region,
  addressCountry: COMPANY.country,
} as const;

/** 服务与报价目录：让 AI 能直接读出「这家公司卖什么、起步价多少、单位是什么」 */
export const offerCatalogJsonLd = {
  '@type': 'OfferCatalog',
  name: '菲律宾专线运价（起步参考价）',
  description: `菲邦国际物流菲律宾专线对外公示的运价，含限时促销价与原价。${PRICE_NOTE}`,
  itemListElement: SERVICE_PRICES.map((item) => ({
    '@type': 'Offer',
    name: item.name,
    description: item.description,
    price: String(item.price),
    priceCurrency: item.currency,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: item.price,
      priceCurrency: item.currency,
      unitCode: item.unitCode,
      unitText: item.unitText,
    },
    availability: 'https://schema.org/InStock',
    // 海运为月度促销，月底到期；空运是常价，不写有效期
    ...(item.originalPrice ? { priceValidUntil: '2026-11-30' } : {}),
    seller: { '@id': ORGANIZATION_ID },
  })),
};

/** 菲律宾专线服务节点 */
export const serviceJsonLd = {
  '@type': 'Service',
  '@id': `${SITE_URL}/philippines-line/#service`,
  name: '中国到菲律宾国际物流专线（DDP 双清包税到门）',
  alternateName: ['菲律宾专线', '菲律宾双清包税', '中国到菲律宾海运', '中国到菲律宾空运'],
  serviceType: '国际货运代理 / 跨境电商物流',
  category: 'Logistics',
  description:
    '从中国深圳等口岸到菲律宾马尼拉、宿务、达沃、怡朗等主要城市的海运与空运专线，DDP 双清包税到门：代办中国出口报关、菲律宾进口清关，代缴菲律宾进口关税及税费，并配送到收货地址。海运约 14-16 天，空运约 3-5 天。',
  provider: { '@id': ORGANIZATION_ID },
  areaServed: [
    { '@type': 'Country', name: '菲律宾' },
    { '@type': 'City', name: '马尼拉' },
    { '@type': 'City', name: '宿务' },
    { '@type': 'City', name: '达沃' },
    { '@type': 'City', name: '怡朗' },
    { '@type': 'Country', name: '中国' },
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: '跨境电商卖家、贸易公司、工厂、在菲华人商户',
  },
  termsOfService: `${SITE_URL}/faq/`,
  url: `${SITE_URL}/philippines-line/`,
  hasOfferCatalog: offerCatalogJsonLd,
} as const;

/** 发货流程（对应站点「从询价到签收」的实际流程，供 AI 回答「怎么发货」时引用） */
export const shippingSteps = [
  { name: '询价与确认方案', text: '提供品名、重量/体积、起运地、菲律宾收货地址和时效要求，客服给出是否走海运或空运以及全程费用。' },
  { name: '送货入仓或上门提货', text: '货物送到深圳宝安福永仓库，或安排国内提货后入仓；入仓时核对件数、称重量方。' },
  { name: '出口报关', text: '由菲邦代办中国出口报关手续，准备报关所需单证。' },
  { name: '海运或空运干线', text: '海运约 14-16 天、空运约 3-5 天到达菲律宾，含干线运输与目的港操作。' },
  { name: '菲律宾进口清关与缴税', text: '代办菲律宾进口清关，代缴进口关税与税费（DDP 的核心差异在此）。' },
  { name: '派送到门并签收', text: '马尼拉及周边直接派送；其他城市安排陆运，岛屿地区安排岛际运输。' },
] as const;

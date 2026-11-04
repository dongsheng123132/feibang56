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
  street: '宝安区福永怀德翠岗工业园四区26栋1楼',
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
export const SERVICE_PRICES = [
  {
    name: '马尼拉海运拼箱（普货）',
    price: 700,
    currency: 'CNY',
    unitCode: 'MTQ',
    unitText: '元/立方米起',
    description: '深圳到马尼拉海运门到门，双清包税，全程约 14-16 天',
  },
  {
    name: '马尼拉海运拼箱（敏感货）',
    price: 800,
    currency: 'CNY',
    unitCode: 'MTQ',
    unitText: '元/立方米起',
    description: '化妆品、液体、粉末等敏感货海运门到门，双清包税',
  },
  {
    name: '马尼拉海运拼箱（特货）',
    price: 900,
    currency: 'CNY',
    unitCode: 'MTQ',
    unitText: '元/立方米起',
    description: '需特殊申报与操作的特货海运门到门，双清包税',
  },
  {
    name: '马尼拉空运（100 公斤以上）',
    price: 22.5,
    currency: 'CNY',
    unitCode: 'KGM',
    unitText: '元/公斤起',
    description: '深圳到马尼拉空运，双清包税到门，全程约 3-5 天；500 公斤以上 22 元/公斤，1 吨以上 21.5 元/公斤',
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
  description:
    '菲邦国际物流菲律宾专线对外公示的起步参考价。实际运价需按货物重量/体积、品名、包装、起运地与目的地、时效要求确认，敏感货与特货另行报价。',
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

// OSS配置文件
export const OSS_CONFIG = {
  // OSS基础地址
  baseUrl: 'https://feibang56.oss-cn-shenzhen.aliyuncs.com',
  
  // 图片路径前缀
  imagePath: '/website/images', // 修正为没有空格的路径
  
  // 文档路径前缀
  docPath: '/website/docs'
};

// 获取OSS图片完整地址
export function getOSSImageUrl(filename: string): string {
  return `${OSS_CONFIG.baseUrl}${OSS_CONFIG.imagePath}/${filename}`;
}

// 获取OSS文档完整地址
export function getOSSDocUrl(filename: string): string {
  return `${OSS_CONFIG.baseUrl}${OSS_CONFIG.docPath}/${filename}`;
}

// 图片加载优化函数
export const getOptimizedImageUrl = (imageName: string, width?: number, height?: number) => {
  const baseUrl = getOSSImageUrl(imageName);
  
  // 如果指定了尺寸，可以使用阿里云OSS的图片处理功能
  if (width || height) {
    const params = [];
    if (width) params.push(`w_${width}`);
    if (height) params.push(`h_${height}`);
    return `${baseUrl}?x-oss-process=image/resize,${params.join(',')},m_lfit`;
  }
  
  return baseUrl;
};

// 站内图片地址（public/ 目录，随站点一起部署）
export function getLocalImageUrl(filename: string): string {
  return `/${filename}`;
}

// 预定义的常用图片URL
// OSS 桶 feibang56 已拒绝公开访问（403 AccessDenied），这里改用 public/ 下的同名文件
export const OSS_IMAGES = {
  logo: getLocalImageUrl('logo.jpg'),
  company1: getLocalImageUrl('company-1.jpg'),
  company2: getLocalImageUrl('company-2.jpg'),
  company3: getLocalImageUrl('company-3.jpg'),
  company4: getLocalImageUrl('company-4.jpg'),
  company5: getLocalImageUrl('company-5.jpg'),
  company6: getLocalImageUrl('company-6.jpg'),
  company7: getLocalImageUrl('company-7.png'),
  company8: getLocalImageUrl('company-8.jpg'),
  company9: getLocalImageUrl('company-9.jpg'),
  company10: getLocalImageUrl('company-10.jpg'),
  company11: getLocalImageUrl('company-11.jpg'),
  company12: getLocalImageUrl('company-12.jpg'),
  wechatQR: getLocalImageUrl('wechat-qr-real.png'),
  wechatQRNew: getLocalImageUrl('wechat-qr-new.jpg')
};

// 动态获取公司图片的辅助函数
export const getCompanyImage = (index: number): string => {
  const companyImages = [
    OSS_IMAGES.company1, OSS_IMAGES.company2, OSS_IMAGES.company3,
    OSS_IMAGES.company4, OSS_IMAGES.company5, OSS_IMAGES.company6,
    OSS_IMAGES.company7, OSS_IMAGES.company8, OSS_IMAGES.company9,
    OSS_IMAGES.company10, OSS_IMAGES.company11, OSS_IMAGES.company12
  ];
  return companyImages[index - 1] || OSS_IMAGES.company1;
};
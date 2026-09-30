// 图片配置文件
// 说明：图片均来自 public/ 目录，随站点一起静态导出部署（此前曾接入阿里云 OSS，
// 但该 OSS 桶已拒绝公开访问，已全部切换为站内图片，保留 OSS_IMAGES / getLocalImageUrl
// 这两个名字是为了不改动各页面的现有引用）。

// 站内图片地址（public/ 目录，随站点一起部署）
export function getLocalImageUrl(filename: string): string {
  return `/${filename}`;
}

// 预定义的常用图片URL
export const OSS_IMAGES = {
  logo: getLocalImageUrl('logo.jpg'),
  company1: getLocalImageUrl('company-1.jpg'),
  company2: getLocalImageUrl('company-2.jpg'),
  company3: getLocalImageUrl('company-3.jpg'),
  company4: getLocalImageUrl('company-4.jpg'),
  company5: getLocalImageUrl('company-5.jpg'),
  company6: getLocalImageUrl('company-6.jpg'),
  company10: getLocalImageUrl('company-10.jpg'),
  company11: getLocalImageUrl('company-11.jpg'),
  company12: getLocalImageUrl('company-12.jpg'),
  wechatQR: getLocalImageUrl('wechat-qr-real.png'),
  wechatQRNew: getLocalImageUrl('wechat-qr-new.jpg')
};

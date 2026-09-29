import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用静态导出
  output: 'export',
  
  // 禁用图片优化（静态导出不支持）
  images: {
    unoptimized: true,
  },

  // 设置基础路径（如果需要部署到子目录）
  // basePath: '/your-subdirectory',

  // 禁用服务端功能
  trailingSlash: true,

  // 确保所有页面都被预渲染
  experimental: {
    // 如果有动态路由，需要在这里配置
  }
};

export default nextConfig;

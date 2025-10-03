import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用静态导出
  output: 'export',
  
  // 禁用图片优化（静态导出不支持）
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'feibang56.oss-cn-shenzhen.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // 设置基础路径（如果需要部署到子目录）
  // basePath: '/your-subdirectory',
  
  // 禁用服务端功能
  trailingSlash: true,
  
  // 禁用ESLint检查
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 禁用TypeScript检查
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 确保所有页面都被预渲染
  experimental: {
    // 如果有动态路由，需要在这里配置
  }
};

export default nextConfig;

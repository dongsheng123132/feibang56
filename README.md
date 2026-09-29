# 菲邦物流官网

深圳市菲邦国际物流有限公司官方网站，展示菲律宾专线物流服务（海运/空运 DDP 双清包税到门）、报价中心、客户案例、常见问题和货物跟踪等内容。

## 技术栈

- [Next.js](https://nextjs.org)（App Router，静态导出 `output: 'export'`）
- TypeScript
- Tailwind CSS 4

## 本地开发

```bash
npm ci
npm run dev
```

然后打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 构建

```bash
npm run build
```

构建产物输出到 `out/` 目录（纯静态文件）。

## 部署

代码 push 到 `main` 分支后由 Vercel 自动构建部署。

- 正式域名：https://www.phibong.com
- `feibang56.vercel.app` 是 Vercel 的预览域名，国内网络无法正常访问，**不要把这个地址发给客户**。

## 图片资源

网站所有图片放在 `public/` 目录下，随静态站点一起部署（不依赖外部图床/OSS）。

## SEO / GEO 相关文件

- `src/app/layout.tsx`：全站默认 metadata、`viewport`、以及 `LocalBusiness` / `WebSite` 的 JSON-LD 结构化数据。
- 各页面 `page.tsx`（`/`、`/philippines-line/`、`/pricing/`、`/contact/`）或对应的 `layout.tsx`（`/about/`、`/cases/`、`/faq/`、`/tracking/`）：每页独立的 `title`/`description`/`canonical`。
- `src/app/faq/page.tsx`：FAQ 全部问答均渲染进 DOM（未选中分类/未展开的答案用 CSS 隐藏），并附带 `FAQPage` JSON-LD。
- `src/app/sitemap.ts`：站点地图。
- `src/app/robots.ts`：搜索引擎与 AI 爬虫抓取规则。
- `public/llms.txt`：面向 AI 搜索/大模型的站点摘要（[llmstxt.org](https://llmstxt.org) 格式）。

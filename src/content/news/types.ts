// /news 资讯栏目的文章数据结构。
// 由 Lead 定义，内容文件请勿改动本文件，只按此结构写数据。

export type NewsTable = {
  head: string[];
  rows: string[][];
};

export type NewsSection = {
  /** 小标题。建议写成用户会搜索的问句或短语，例如「菲律宾专线海运多少钱一方？」 */
  heading: string;
  /** 正文段落，纯文本，不要 Markdown 语法 */
  paragraphs?: string[];
  /** 要点列表 */
  bullets?: string[];
  /** 可选对比表格 */
  table?: NewsTable;
};

export type NewsFaq = {
  question: string;
  answer: string;
};

export type NewsArticle = {
  /** URL 片段，小写英文连字符，例如 "philippines-ddp-guide"。全站唯一。 */
  slug: string;
  /** 页面 H1 */
  title: string;
  /** <title> 用，建议不超过 32 个汉字 */
  seoTitle: string;
  /** meta description，60-120 个汉字 */
  description: string;
  /** 发布时间 YYYY-MM-DD */
  date: string;
  /** 最后更新 YYYY-MM-DD，可选 */
  updated?: string;
  /** 作者，固定 "菲邦国际物流" */
  author: string;
  /** 标签 */
  tags: string[];
  /** 开头的直答块：40-60 字，一句话回答本文标题的问题，供 AI 直接摘引 */
  summary: string;
  /** 3-5 条核心结论，会被渲染成摘要卡片 */
  keyPoints: string[];
  /** 正文分节 */
  sections: NewsSection[];
  /** 文末 FAQ，3-5 条 */
  faqs: NewsFaq[];
  /** 本文覆盖的关键词，用于相关推荐与 llms.txt */
  relatedKeywords: string[];
  /** 权威参考来源（官方站点），渲染在文末并写入 Article.citation */
  sources?: { label: string; url: string }[];
};

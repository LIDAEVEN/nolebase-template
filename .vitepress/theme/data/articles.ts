export interface Article {
  title: string
  description: string
  date: string
  path: string
  category?: string
  tags?: string[]
  readTime?: number
}

// 文章数据
export const articles: Article[] = [
  {
    title: "在数字时代寻找内心的平静",
    description: "探讨如何在信息爆炸的时代保持内心的宁静与专注，分享一些实用的方法和思考。",
    date: "2024-01-15",
    path: "/笔记/演示目录1/文档-带评论",
    category: "思考",
    tags: ["生活", "哲学", "专注"],
    readTime: 5
  },
  {
    title: "现代前端开发的哲学思考",
    description: "从哲学角度重新审视前端开发的本质与意义，探索技术与人文的结合。",
    date: "2024-01-12",
    path: "/笔记/✍️ 文档工程/API 文档系统",
    category: "技术",
    tags: ["前端", "哲学", "开发"],
    readTime: 8
  },
  {
    title: "慢生活的艺术",
    description: "在快节奏的现代生活中学会慢下来的智慧，享受当下的美好时光。",
    date: "2024-01-10",
    path: "/笔记/✍️ 文档工程/图表即代码（CaC）图表绘制",
    category: "生活",
    tags: ["生活方式", "慢生活", "艺术"],
    readTime: 6
  },
  {
    title: "知识管理的现代方法",
    description: "分享如何构建个人知识体系，提高学习效率和知识利用率。",
    date: "2024-01-08",
    path: "/笔记/演示目录1/文档-不带评论",
    category: "学习",
    tags: ["知识管理", "学习方法", "效率"],
    readTime: 7
  },
  {
    title: "简约设计的力量",
    description: "探索简约设计背后的哲学思想，以及如何在生活和工作中应用简约原则。",
    date: "2024-01-05",
    path: "/笔记/index",
    category: "设计",
    tags: ["设计", "简约", "美学"],
    readTime: 4
  },
  {
    title: "数字化时代的阅读革命",
    description: "分析数字化阅读对传统阅读习惯的影响，以及如何在新时代保持深度阅读。",
    date: "2024-01-03",
    path: "/笔记/index",
    category: "阅读",
    tags: ["阅读", "数字化", "习惯"],
    readTime: 9
  }
]

// 获取最新文章
export function getLatestArticles(count: number = 3): Article[] {
  return articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

// 根据分类获取文章
export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(article => article.category === category)
}

// 根据标签获取文章
export function getArticlesByTag(tag: string): Article[] {
  return articles.filter(article => article.tags?.includes(tag))
}

// 获取所有分类
export function getAllCategories(): string[] {
  const categories = articles
    .map(article => article.category)
    .filter((category): category is string => category !== undefined)
  return [...new Set(categories)]
}

// 获取所有标签
export function getAllTags(): string[] {
  const tags = articles
    .flatMap(article => article.tags || [])
  return [...new Set(tags)]
}

// 格式化日期
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '.')
}

// 计算总阅读时间
export function getTotalReadTime(): number {
  return articles.reduce((total, article) => total + (article.readTime || 0), 0)
}

// 获取文章统计信息
export function getArticleStats() {
  return {
    totalArticles: articles.length,
    totalReadTime: getTotalReadTime(),
    categories: getAllCategories().length,
    tags: getAllTags().length
  }
} 
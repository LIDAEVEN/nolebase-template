export interface Article {
  title: string
  description?: string
  date?: string
  mtime?: string
  url: string
  category?: string
  tags?: string[]
  excerpt?: string
  readTime?: number
}

// @ts-ignore
import latest from '../../../.vitepress/latest.json'

export const articles: Article[] = latest

export function getLatestArticles(count: number = 3): Article[] {
  return articles
    .sort((a, b) => {
      const timeA = a.mtime ? new Date(a.mtime).getTime() : 0
      const timeB = b.mtime ? new Date(b.mtime).getTime() : 0
      return timeB - timeA
    })
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
<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  articles, 
  getAllCategories, 
  getAllTags, 
  formatDate,
  type Article 
} from '../data/articles'

// 筛选状态
const selectedCategory = ref<string>('')
const selectedTag = ref<string>('')
const searchQuery = ref<string>('')

// 获取所有分类和标签
const categories = computed(() => getAllCategories())
const tags = computed(() => getAllTags())

// 筛选后的文章
const filteredArticles = computed(() => {
  let result = [...articles]
  
  // 按分类筛选
  if (selectedCategory.value) {
    result = result.filter(article => article.category === selectedCategory.value)
  }
  
  // 按标签筛选
  if (selectedTag.value) {
    result = result.filter(article => article.tags?.includes(selectedTag.value))
  }
  
  // 按搜索关键词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.tags?.some(tag => tag.toLowerCase().includes(query))
    )
  }
  
  // 按日期排序
  return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

// 重置筛选
const resetFilters = () => {
  selectedCategory.value = ''
  selectedTag.value = ''
  searchQuery.value = ''
}

// 统计信息
const stats = computed(() => ({
  total: articles.length,
  filtered: filteredArticles.value.length,
  categories: categories.value.length,
  tags: tags.value.length
}))
</script>

<template>
  <div class="article-list">
    <!-- 搜索和筛选 -->
    <div class="filters-section">
      <div class="search-box">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="搜索文章标题、描述或标签..."
          class="search-input"
        />
      </div>
      
      <div class="filters">
        <div class="filter-group">
          <label>分类：</label>
          <select v-model="selectedCategory" class="filter-select">
            <option value="">全部分类</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        
        <div class="filter-group">
          <label>标签：</label>
          <select v-model="selectedTag" class="filter-select">
            <option value="">全部标签</option>
            <option v-for="tag in tags" :key="tag" :value="tag">
              {{ tag }}
            </option>
          </select>
        </div>
        
        <button @click="resetFilters" class="reset-btn">重置</button>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="stats-bar">
      <span>共 {{ stats.filtered }} 篇文章</span>
      <span v-if="stats.filtered !== stats.total">（从 {{ stats.total }} 篇中筛选）</span>
    </div>

    <!-- 文章列表 -->
    <div class="articles-grid">
      <article 
        v-for="article in filteredArticles" 
        :key="article.path"
        class="article-card"
      >
        <div class="article-header">
          <div class="article-meta">
            <span class="article-date">{{ formatDate(article.date) }}</span>
            <span v-if="article.category" class="article-category">{{ article.category }}</span>
          </div>
          <span v-if="article.readTime" class="read-time">{{ article.readTime }} 分钟</span>
        </div>
        
        <h3 class="article-title">
          <a :href="article.path">{{ article.title }}</a>
        </h3>
        
        <p class="article-description">{{ article.description }}</p>
        
        <div v-if="article.tags && article.tags.length > 0" class="article-tags">
          <span 
            v-for="tag in article.tags" 
            :key="tag"
            class="article-tag"
            @click="selectedTag = tag"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>

    <!-- 空状态 -->
    <div v-if="filteredArticles.length === 0" class="empty-state">
      <div class="empty-icon">📝</div>
      <h3>没有找到匹配的文章</h3>
      <p>尝试调整搜索条件或筛选器</p>
      <button @click="resetFilters" class="reset-btn">重置筛选</button>
    </div>
  </div>
</template>

<style scoped>
.article-list {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

/* 筛选区域 */
.filters-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider-light);
}

.search-box {
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 6px;
  font-size: 1rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.filters {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-group label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.filter-select {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
}

.reset-btn {
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-btn:hover {
  background: var(--vp-c-brand-2);
}

/* 统计栏 */
.stats-bar {
  margin-bottom: 1.5rem;
  padding: 0.75rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

/* 文章网格 */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.article-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.article-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  padding: 0.125rem 0.5rem;
  border: 1px solid transparent;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.article-date:hover {
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider-light);
}

.article-category {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  background: transparent;
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 12px;
  font-weight: 400;
  transition: all 0.3s ease;
}

.article-category:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.read-time {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  padding: 0.125rem 0.5rem;
  border: 1px solid transparent;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.read-time::before {
  content: '⏱ ';
}

.read-time:hover {
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider-light);
}

.article-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.article-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.3s ease;
}

.article-title a:hover {
  color: var(--vp-c-brand-1);
}

.article-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.article-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.article-tag {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider-light);
  cursor: pointer;
  transition: all 0.3s ease;
}

.article-tag:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--vp-c-text-2);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.empty-state p {
  margin-bottom: 2rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-list {
    padding: 1rem;
  }
  
  .filters-section {
    padding: 1rem;
  }
  
  .filters {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-group {
    justify-content: space-between;
  }
  
  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .article-card {
    padding: 1rem;
  }
  
  .article-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

/* 暗色模式 */
.dark .article-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style> 
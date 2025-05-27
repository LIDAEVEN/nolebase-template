<script setup lang="ts">
import { siteName } from '../../../metadata'
import { getLatestArticles, getArticleStats, formatDate, type Article } from '../data/articles'
import { computed } from 'vue'

// 获取最新文章
const latestArticles = computed(() => getLatestArticles(3))

// 获取统计信息
const stats = computed(() => getArticleStats())
</script>

<template>
  <div class="minimal-home">
    <!-- 简洁介绍 -->
    <section class="intro-section">
      <div class="intro-content">
        <h2>{{ siteName }}</h2>
        <p>一个专注于分享深度思考的知识平台</p>
      </div>
    </section>

    <!-- 最新文章 -->
    <section class="recent-posts">
      <h3>最新文章</h3>
      <div class="posts-list">
        <article 
          v-for="article in latestArticles" 
          :key="article.path"
          class="post-item"
        >
          <div class="post-meta">
            <span class="post-date">{{ formatDate(article.date) }}</span>
            <span v-if="article.category" class="post-category">{{ article.category }}</span>
            <span v-if="article.readTime" class="post-read-time">{{ article.readTime }} 分钟阅读</span>
          </div>
          <h4><a :href="article.path">{{ article.title }}</a></h4>
          <p>{{ article.description }}</p>
          <div v-if="article.tags && article.tags.length > 0" class="post-tags">
            <span 
              v-for="tag in article.tags" 
              :key="tag"
              class="post-tag"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
      
      <div class="view-all">
        <a href="/articles" class="view-all-link">查看全部文章 →</a>
      </div>
    </section>

    <!-- 简洁统计 -->
    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">{{ stats.totalArticles }}</span>
          <span class="stat-label">文章</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ stats.totalReadTime }}</span>
          <span class="stat-label">分钟</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ stats.categories }}</span>
          <span class="stat-label">分类</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.minimal-home {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 简洁介绍 */
.intro-section {
  text-align: center;
  padding: 3rem 0 4rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
  margin-bottom: 4rem;
}

.intro-content h2 {
  font-size: 2rem;
  font-weight: 300;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.intro-content p {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  font-weight: 400;
}

/* 最新文章 */
.recent-posts {
  margin-bottom: 4rem;
}

.recent-posts h3 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
  text-align: center;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
  transition: all 0.3s ease;
}

.post-item:last-child {
  border-bottom: none;
}

.post-item:hover {
  transform: translateX(8px);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.post-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  padding: 0.125rem 0.5rem;
  border: 1px solid transparent;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.post-date:hover {
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider-light);
}

.post-category {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  background: transparent;
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 12px;
  font-weight: 400;
  transition: all 0.3s ease;
}

.post-category:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.post-read-time {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  border: 1px solid transparent;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.post-read-time::before {
  content: '⏱';
}

.post-read-time:hover {
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider-light);
}

.post-item h4 {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.post-item h4 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-item h4 a:hover {
  color: var(--vp-c-brand-1);
}

.post-item p {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 0.75rem 0;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.post-tag {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider-light);
  transition: all 0.3s ease;
}

.post-tag:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.view-all {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider-light);
}

.view-all-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.view-all-link:hover {
  color: var(--vp-c-brand-2);
  transform: translateX(4px);
}

/* 简洁统计 */
.stats-section {
  text-align: center;
  padding: 3rem 0;
  border-top: 1px solid var(--vp-c-divider-light);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 400px;
  margin: 0 auto;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .minimal-home {
    padding: 0 1rem;
  }
  
  .intro-content h2 {
    font-size: 1.75rem;
  }
  
  .post-item:hover {
    transform: none;
  }
  
  .stats-grid {
    gap: 1.5rem;
  }
  
  .stat-number {
    font-size: 1.75rem;
  }
}

/* 暗色模式优化 */
.dark .post-item:hover {
  background: rgba(255, 255, 255, 0.02);
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.intro-section {
  animation: fadeInUp 0.6s ease-out;
}

.recent-posts {
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.stats-section {
  animation: fadeInUp 0.6s ease-out 0.4s both;
}
</style>

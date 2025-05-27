<script setup lang="ts">
import { siteName } from '../../../metadata'
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
        <article class="post-item">
          <div class="post-date">2024.01.15</div>
          <h4><a href="/笔记/index">在数字时代寻找内心的平静</a></h4>
          <p>探讨如何在信息爆炸的时代保持内心的宁静与专注。</p>
        </article>
        
        <article class="post-item">
          <div class="post-date">2024.01.12</div>
          <h4><a href="/笔记/index">现代前端开发的哲学思考</a></h4>
          <p>从哲学角度重新审视前端开发的本质与意义。</p>
        </article>
        
        <article class="post-item">
          <div class="post-date">2024.01.10</div>
          <h4><a href="/笔记/index">慢生活的艺术</a></h4>
          <p>在快节奏的现代生活中学会慢下来的智慧。</p>
        </article>
      </div>
      
      <div class="view-all">
        <a href="/笔记/index" class="view-all-link">查看全部文章 →</a>
      </div>
    </section>

    <!-- 简洁统计 -->
    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">128</span>
          <span class="stat-label">文章</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">25K</span>
          <span class="stat-label">阅读</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">365</span>
          <span class="stat-label">天数</span>
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

.post-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.5rem;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
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
  margin: 0;
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

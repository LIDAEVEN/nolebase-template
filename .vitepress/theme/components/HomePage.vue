<script setup lang="ts">
import { siteName } from '../../../metadata'
</script>

<template>
  <div class="prairie-home">
    <!-- 引言区域 -->
    <section class="intro-section">
      <div class="intro-content">
        <h2>欢迎来到{{ siteName }}</h2>
        <p>这里是一片思想的原野，广阔而自由。我们相信，最好的想法往往诞生在最宁静的地方，就像平原上的第一缕晨光，温暖而充满希望。</p>
      </div>
    </section>

    <!-- 精选文章 -->
    <section class="featured-posts">
      <div class="section-header">
        <h2>精选文章</h2>
        <p>来自原野深处的思考</p>
      </div>
      
      <div class="posts-grid">
        <article class="post-card featured">
          <div class="post-image">
            <div class="image-placeholder">🌅</div>
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="date">2024-01-15</span>
              <span class="category">深度思考</span>
            </div>
            <h3>在数字时代寻找内心的平静</h3>
            <p>在这个信息爆炸的时代，我们如何在喧嚣中找到属于自己的那片宁静原野？</p>
            <a href="/笔记/index" class="read-more">阅读全文 →</a>
          </div>
        </article>

        <article class="post-card">
          <div class="post-content">
            <div class="post-meta">
              <span class="date">2024-01-12</span>
              <span class="category">技术分享</span>
            </div>
            <h3>现代前端开发的哲学思考</h3>
            <p>技术不仅仅是工具，更是一种思维方式。让我们从哲学的角度重新审视前端开发。</p>
            <a href="/笔记/index" class="read-more">阅读全文 →</a>
          </div>
        </article>

        <article class="post-card">
          <div class="post-content">
            <div class="post-meta">
              <span class="date">2024-01-10</span>
              <span class="category">生活感悟</span>
            </div>
            <h3>慢生活的艺术</h3>
            <p>在快节奏的现代生活中，学会慢下来，感受生活中那些被忽略的美好瞬间。</p>
            <a href="/笔记/index" class="read-more">阅读全文 →</a>
          </div>
        </article>

        <article class="post-card">
          <div class="post-content">
            <div class="post-meta">
              <span class="date">2024-01-08</span>
              <span class="category">读书笔记</span>
            </div>
            <h3>《瓦尔登湖》重读感悟</h3>
            <p>梭罗在瓦尔登湖畔的思考，与我们在数字时代的生活有着怎样的共鸣？</p>
            <a href="/笔记/index" class="read-more">阅读全文 →</a>
          </div>
        </article>
      </div>
    </section>

    <!-- 统计信息 -->
    <section class="stats-section">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-icon">📝</div>
          <div class="stat-number">128</div>
          <div class="stat-label">篇文章</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">👁️</div>
          <div class="stat-number">25K</div>
          <div class="stat-label">次阅读</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">🏷️</div>
          <div class="stat-number">18</div>
          <div class="stat-label">个分类</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">⭐</div>
          <div class="stat-number">365</div>
          <div class="stat-label">天坚持</div>
        </div>
      </div>
    </section>

    <!-- 订阅区域 -->
    <section class="subscribe-section">
      <div class="subscribe-content">
        <h2>与{{ siteName }}同行</h2>
        <p>订阅我们的更新，第一时间收到来自原野的思考与分享</p>
        <div class="subscribe-form">
          <input type="email" placeholder="输入你的邮箱地址" />
          <button type="submit">订阅更新</button>
        </div>
        <p class="subscribe-note">我们承诺不会发送垃圾邮件，你可以随时取消订阅</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.prairie-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 引言区域 */
.intro-section {
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(240, 248, 255, 0.1) 100%);
  border-radius: 20px;
  margin: 2rem 0 4rem 0;
}

.intro-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
}

.intro-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

/* 精选文章区域 */
.featured-posts {
  margin-bottom: 6rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
}

.posts-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  height: 600px;
}

.post-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
}

.post-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.post-card.featured {
  grid-row: 1 / 3;
}

.post-image {
  height: 200px;
  background: linear-gradient(135deg, #87CEEB 0%, #98FB98 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured .post-image {
  height: 250px;
}

.image-placeholder {
  font-size: 4rem;
  opacity: 0.7;
}

.post-content {
  padding: 2rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.date {
  color: var(--vp-c-text-2);
}

.category {
  background: linear-gradient(135deg, #87CEEB, #98FB98);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.post-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.featured h3 {
  font-size: 1.6rem;
}

.post-card p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.read-more {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: var(--vp-c-brand-2);
}

/* 统计信息 */
.stats-section {
  background: linear-gradient(135deg, rgba(152, 251, 152, 0.1) 0%, rgba(135, 206, 235, 0.1) 100%);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin-bottom: 4rem;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--vp-c-text-2);
  font-size: 1rem;
}

/* 订阅区域 */
.subscribe-section {
  background: linear-gradient(135deg, #87CEEB 0%, #98FB98 100%);
  border-radius: 20px;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  margin-bottom: 4rem;
}

.subscribe-content h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.subscribe-content > p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.subscribe-form {
  display: flex;
  max-width: 400px;
  margin: 0 auto 1rem auto;
  gap: 1rem;
}

.subscribe-form input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
}

.subscribe-form button {
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.subscribe-form button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.subscribe-note {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .prairie-home {
    padding: 0 1rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }
  
  .post-card.featured {
    grid-row: auto;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .subscribe-form {
    flex-direction: column;
  }
  
  .intro-content h2 {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
}
</style>

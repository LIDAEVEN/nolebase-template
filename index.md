---
layout: home
sidebar: false

title: 遥原
titleTemplate: 探索知识的无限可能

hero:
  name: 遥原
  text: 探索知识的无限可能
  tagline: 在这里，每一个想法都值得被记录，每一份知识都值得被分享。让我们一起在知识的海洋中航行，发现属于自己的那片星空。
  actions:
    - theme: brand
      text: 开始探索 →
      link: /笔记/index
    - theme: alt
      text: 最新文章
      link: /toc
    - theme: alt
      text: 关于我们
      link: /about

features:
  - title: 💡 深度思考
    details: 不仅仅是记录，更是深度思考的结晶。每一篇文章都经过精心打磨，力求为读者带来真正的价值和启发。
    icon: 💡
  - title: 🌟 多元视角
    details: 涵盖技术、生活、哲学、艺术等多个领域，用不同的视角观察世界，用多元的思维解读生活。
    icon: 🌟
  - title: 🚀 持续更新
    details: 知识在不断演进，我们的内容也在持续更新。跟上时代的步伐，保持思维的活跃和新鲜。
    icon: 🚀
  - title: 🤝 开放交流
    details: 欢迎每一位读者的参与和交流。在这里，你可以分享观点、提出疑问、碰撞思想的火花。
    icon: 🤝
  - title: 📚 系统整理
    details: 采用现代化的知识管理方式，让信息有序、查找便捷，让知识真正为你所用。
    icon: 📚
  - title: 🎨 精美呈现
    details: 注重阅读体验，精心设计的界面和排版，让知识的获取成为一种享受。
    icon: 🎨
---

<div class="home-content">
  <section class="recent-posts">
    <h2>最新文章</h2>
    <div class="posts-grid">
      <article class="post-card">
        <div class="post-meta">
          <span class="post-date">2024-01-15</span>
          <span class="post-category">技术</span>
        </div>
        <h3>现代前端开发的思考</h3>
        <p>探讨现代前端开发中的最佳实践和未来趋势...</p>
        <a href="/posts/modern-frontend" class="read-more">阅读更多 →</a>
      </article>
      
      <article class="post-card">
        <div class="post-meta">
          <span class="post-date">2024-01-12</span>
          <span class="post-category">生活</span>
        </div>
        <h3>数字时代的深度阅读</h3>
        <p>在信息爆炸的时代，如何保持深度阅读的习惯...</p>
        <a href="/posts/deep-reading" class="read-more">阅读更多 →</a>
      </article>
      
      <article class="post-card">
        <div class="post-meta">
          <span class="post-date">2024-01-10</span>
          <span class="post-category">思考</span>
        </div>
        <h3>知识管理的艺术</h3>
        <p>如何构建属于自己的知识体系，让学习更高效...</p>
        <a href="/posts/knowledge-management" class="read-more">阅读更多 →</a>
      </article>
    </div>
  </section>

  <section class="stats-section">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">150+</div>
        <div class="stat-label">文章数量</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">50K+</div>
        <div class="stat-label">总阅读量</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">20+</div>
        <div class="stat-label">主题分类</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">365</div>
        <div class="stat-label">持续天数</div>
      </div>
    </div>
  </section>

  <section class="newsletter">
    <div class="newsletter-content">
      <h2>订阅更新</h2>
      <p>第一时间获取最新文章和思考，与我们一起成长</p>
      <div class="newsletter-form">
        <input type="email" placeholder="输入你的邮箱地址" />
        <button type="submit">订阅</button>
      </div>
    </div>
  </section>
</div>

<style>
.home-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.recent-posts {
  margin-bottom: 6rem;
}

.recent-posts h2 {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.post-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
}

.post-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.post-date {
  color: #666;
}

.post-category {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.post-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.post-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.read-more {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #764ba2;
}

.stats-section {
  margin-bottom: 6rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-size: 1.1rem;
}

.newsletter {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 30px;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
}

.newsletter h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.newsletter p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  max-width: 400px;
  margin: 0 auto;
  gap: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
}

.newsletter-form button {
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-form button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .home-content {
    padding: 2rem 1rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .recent-posts h2,
  .newsletter h2 {
    font-size: 2rem;
  }
}

.dark .post-card {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .post-card h3 {
  color: #fff;
}

.dark .post-card p {
  color: #ccc;
}

.dark .stat-item {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .stat-label {
  color: #ccc;
}
</style>

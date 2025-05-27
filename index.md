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

<div class="modern-home">
  <section class="hero-section">
    <h2>最新文章</h2>
    <div class="articles-grid">
      <article class="article-card">
        <div class="article-meta">
          <span class="date">2024-01-15</span>
          <span class="category">技术</span>
        </div>
        <h3>现代前端开发的思考</h3>
        <p>探讨现代前端开发中的最佳实践和未来趋势...</p>
        <a href="#" class="read-more">阅读更多 →</a>
      </article>
      
      <article class="article-card">
        <div class="article-meta">
          <span class="date">2024-01-12</span>
          <span class="category">生活</span>
        </div>
        <h3>数字时代的深度阅读</h3>
        <p>在信息爆炸的时代，如何保持深度阅读的习惯...</p>
        <a href="#" class="read-more">阅读更多 →</a>
      </article>
      
      <article class="article-card">
        <div class="article-meta">
          <span class="date">2024-01-10</span>
          <span class="category">思考</span>
        </div>
        <h3>知识管理的艺术</h3>
        <p>如何构建属于自己的知识体系，让学习更高效...</p>
        <a href="#" class="read-more">阅读更多 →</a>
      </article>
    </div>
  </section>
</div>

<style scoped>
.modern-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.hero-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.article-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.article-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
}

.article-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.article-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.date {
  color: #666;
}

.category {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.article-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.article-card p {
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

@media (max-width: 768px) {
  .modern-home {
    padding: 2rem 1rem;
  }
  
  .articles-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-section h2 {
    font-size: 2rem;
  }
}

.dark .article-card {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .article-card h3 {
  color: #fff;
}

.dark .article-card p {
  color: #ccc;
}
</style> 
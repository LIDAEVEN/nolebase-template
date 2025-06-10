---
layout: home
sidebar: false

title: 遥原
titleTemplate: 简约而不简单的知识分享

hero:
  name: 遥原
  text: 简约而不简单
  tagline: 记录、积累、分享。
  actions:
    - theme: brand
      text: 开始阅读
      link: /笔记/index
    - theme: alt
      text: 了解更多
      link: /about

features:
  - title: 📖 专注阅读
    details: 去除干扰，专注于内容本身，让每一次阅读都成为纯粹的思考之旅。
  - title: 🎯 精选内容
    details: 精心筛选每一篇文章，确保质量胜过数量，深度胜过广度。
  - title: 🌱 持续成长
    details: 记录学习的点点滴滴，见证思想的成长轨迹。
  - title: 💡 简约设计
    details: 简洁的界面设计，让内容成为真正的主角。

---

<HomePage />

<script setup>
import { ref, onMounted } from 'vue'
const latest = ref([])
onMounted(async () => {
  latest.value = await fetch('/latest.json').then(res => res.json())
})
</script>

<div class="recent-posts">
  <h2>最新文章</h2>
  <div v-if="latest.length">
    <div v-for="post in latest" :key="post.url" class="post-item">
      <a :href="post.url" class="post-link">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-meta">{{ post.date }}<span v-if="post.category"> · {{ post.category }}</span></div>
        <div class="post-desc">{{ post.excerpt }}</div>
        <div class="post-tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </a>
    </div>
  </div>
  <div v-else>暂无最新文章</div>
</div>

<style>
.recent-posts {
  max-width: 700px;
  margin: 3rem auto 0;
  padding: 0 1rem;
}
.recent-posts h2 {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}
.post-item {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem 1.2rem;
  margin-bottom: 1.5rem;
  box-shadow: none;
  transition: background 0.2s;
}
.post-item:hover {
  background: var(--vp-c-bg);
}
.post-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}
.post-meta {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}
.post-desc {
  font-size: 0.97rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}
.post-tags {
  margin-top: 0.5rem;
}
.tag {
  display: inline-block;
  background: #f3f3f3;
  color: #888;
  border-radius: 4px;
  font-size: 0.8rem;
  padding: 0.1em 0.6em;
  margin-right: 0.5em;
}
</style> 
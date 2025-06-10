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


<style>
.recent-posts {
  max-width: 960px;
  margin: 4rem auto;
  padding: 0 1rem;
}

.recent-posts h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.post-list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.post-item {
  display: block;
  text-decoration: none;
  color: inherit;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: none;
}

.post-item:hover {
  transform: translateY(-2px);
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.post-content h3 {
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.post-meta {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.75rem;
}

.post-desc {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .post-list {
    grid-template-columns: 1fr;
  }
  
  .recent-posts {
    margin: 2rem auto;
  }
}
</style> 
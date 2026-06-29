<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">
        <i class="fas fa-pen-fancy"></i> Articles & Insights
      </h1>
      <p class="page-subtitle">Thoughts on AI, Quantum Computing, Software Architecture, and Leadership</p>
    </div>

    <div class="blog-grid">
      <div v-for="article in articles" :key="article.id" class="glass blog-card">
        <div class="blog-card-content">
          <div class="blog-header">
            <span class="blog-category">{{ article.category }}</span>
            <span class="blog-date">{{ formatDate(article.date) }}</span>
          </div>
          <h3 class="blog-title">{{ article.title }}</h3>
          <p class="blog-excerpt">{{ article.excerpt }}</p>
          <div class="blog-footer">
            <span class="read-more">Coming Soon <i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'
import articlesData from '~/public/data/blog.json'

const articles = ref(articlesData)

const formatDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

useSEO({
  title: 'Blog',
  description: 'Thoughts on AI, Quantum Computing, Software Architecture, and Leadership.',
  url: '/blog'
})
</script>

<style scoped>
.page-container {
  padding: 2rem 0;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #0d2b3e;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.page-title i {
  color: #20b2aa;
}

.page-subtitle {
  color: #1a5c5a;
  font-size: 1.1rem;
  margin-top: 0.3rem;
  margin-bottom: 2.5rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}

.blog-card {
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(32, 178, 170, 0.08);
}

.blog-card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.blog-category {
  font-size: 0.7rem;
  font-weight: 600;
  color: #20b2aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(32, 178, 170, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
}

.blog-date {
  font-size: 0.7rem;
  color: #1a5c5a;
}

.blog-title {
  font-size: 1.2rem;
  color: #0d2b3e;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.blog-excerpt {
  color: #1a3a4a;
  line-height: 1.6;
  font-size: 0.95rem;
  flex: 1;
}

.blog-footer {
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(32, 178, 170, 0.06);
}

.read-more {
  color: #20b2aa;
  font-weight: 500;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
}

.blog-card:hover .read-more {
  gap: 0.8rem;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 2rem;
  }
}
</style>
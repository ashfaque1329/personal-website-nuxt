<template>
  <div class="page-container" v-if="poem">
    <div class="back-link">
      <NuxtLink to="/poems">
        <i class="fas fa-arrow-left"></i> Back to Poems
      </NuxtLink>
    </div>

    <article class="glass poem-detail">
      <div class="poem-header">
        <span class="poem-category">{{ poem.category }}</span>
        <span class="poem-date">{{ formatDate(poem.date) }}</span>
      </div>
      <h1 class="poem-title">{{ poem.title }}</h1>
      <div class="poem-tags">
        <span v-for="tag in poem.tags" :key="tag" class="poem-tag">#{{ tag }}</span>
      </div>
      <div class="poem-content">
        <p v-for="(line, index) in poem.content.split('\n')" :key="index">{{ line }}</p>
      </div>
    </article>

    <div class="poem-navigation">
      <NuxtLink :to="`/poems/${prevPoem?.id}`" v-if="prevPoem" class="nav-link">
        <i class="fas fa-arrow-left"></i> {{ prevPoem.title }}
      </NuxtLink>
      <NuxtLink :to="`/poems/${nextPoem?.id}`" v-if="nextPoem" class="nav-link">
        {{ nextPoem.title }} <i class="fas fa-arrow-right"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import poemsData from '~/public/data/poems.json'
import { useSEO } from '~/composables/useSEO'

const route = useRoute()
const id = computed(() => parseInt(route.params.id as string))
const poem = computed(() => (poemsData as any[]).find((p: any) => p.id === id.value))

const currentIndex = computed(() => (poemsData as any[]).findIndex((p: any) => p.id === id.value))
const prevPoem = computed(() => currentIndex.value > 0 ? (poemsData as any[])[currentIndex.value - 1] : null)
const nextPoem = computed(() => currentIndex.value < (poemsData as any[]).length - 1 ? (poemsData as any[])[currentIndex.value + 1] : null)

const formatDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

if (poem.value) {
  useSEO({
    title: poem.value.title,
    description: poem.value.excerpt.slice(0, 160),
    url: `/poems/${poem.value.id}`,
    type: 'article'
  })
}
</script>

<style scoped>
.page-container {
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  margin-bottom: 2rem;
}

.back-link a {
  text-decoration: none;
  color: #1a5c5a;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-link a:hover {
  color: #20b2aa;
}

.poem-detail {
  padding: 2.5rem 3rem;
}

.poem-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.poem-category {
  font-size: 0.8rem;
  font-weight: 600;
  color: #20b2aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(32, 178, 170, 0.08);
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
}

.poem-date {
  font-size: 0.8rem;
  color: #1a5c5a;
}

.poem-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0d2b3e;
  margin-bottom: 0.8rem;
}

.poem-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2rem;
}

.poem-tag {
  font-size: 0.75rem;
  color: #1a5c5a;
  background: rgba(32, 178, 170, 0.05);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
}

.poem-content {
  font-size: 1.1rem;
  line-height: 2.2;
  color: #1a3a4a;
  white-space: pre-line;
}

.poem-content p {
  margin-bottom: 0.5rem;
}

.poem-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #1a5c5a;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(32, 178, 170, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: #20b2aa;
  color: #20b2aa;
}

@media (max-width: 768px) {
  .poem-detail {
    padding: 1.5rem;
  }
  .poem-title {
    font-size: 1.8rem;
  }
  .poem-navigation {
    flex-direction: column;
  }
}
</style>
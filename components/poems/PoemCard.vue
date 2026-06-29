<template>
  <div class="glass poem-card">
    <NuxtLink :to="`/poems/${poem.id}`" class="poem-link">
      <div class="poem-header">
        <span class="poem-category">{{ poem.category }}</span>
        <span class="poem-date">{{ formatDate(poem.date) }}</span>
      </div>
      <h3 class="poem-title">{{ poem.title }}</h3>
      <p class="poem-excerpt">{{ poem.excerpt }}</p>
      <div class="poem-tags">
        <span v-for="tag in poem.tags" :key="tag" class="poem-tag">#{{ tag }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  poem: {
    id: number
    title: string
    category: string
    date: string
    excerpt: string
    tags: string[]
  }
}>()

const formatDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>

<style scoped>
.poem-card {
  padding: 1.5rem;
  transition: all 0.3s ease;
  height: 100%;
}

.poem-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(32, 178, 170, 0.08);
}

.poem-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.poem-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.poem-category {
  font-size: 0.7rem;
  font-weight: 600;
  color: #20b2aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(32, 178, 170, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
}

.poem-date {
  font-size: 0.7rem;
  color: #1a5c5a;
}

.poem-title {
  font-size: 1.2rem;
  color: #0d2b3e;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.poem-excerpt {
  color: #1a3a4a;
  line-height: 1.6;
  font-size: 0.95rem;
  flex: 1;
  white-space: pre-line;
}

.poem-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.8rem;
}

.poem-tag {
  font-size: 0.65rem;
  color: #1a5c5a;
  background: rgba(32, 178, 170, 0.05);
  padding: 0.1rem 0.5rem;
  border-radius: 12px;
}
</style>
<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Poems: {{ categoryName }}</h1>
      <NuxtLink to="/poems" class="back-link">
        <i class="fas fa-arrow-left"></i> All Poems
      </NuxtLink>
    </div>

    <div class="poems-grid">
      <PoemCard v-for="poem in filteredPoems" :key="poem.id" :poem="poem" />
    </div>
  </div>
</template>

<script setup lang="ts">
import poemsData from '~/public/data/poems.json'
import PoemCard from '~/components/poems/PoemCard.vue'
import { useSEO } from '~/composables/useSEO'

const route = useRoute()
const categorySlug = computed(() => route.params.category as string)

const categoryName = computed(() => {
  const cat = (poemsData as any[]).find((p: any) => p.category.toLowerCase() === categorySlug.value)
  return cat ? cat.category : categorySlug.value
})

const filteredPoems = computed(() => {
  return (poemsData as any[]).filter((p: any) => p.category.toLowerCase() === categorySlug.value)
})

useSEO({
  title: `Poems: ${categoryName.value}`,
  description: `A collection of ${categoryName.value} poems by Ashfaque Chowdhury.`,
  url: `/poems/categories/${categorySlug.value}`
})
</script>

<style scoped>
.page-container {
  padding: 2rem 0;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0d2b3e;
}

.back-link {
  text-decoration: none;
  color: #1a5c5a;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-link:hover {
  color: #20b2aa;
}

.poems-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .poems-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .poems-grid {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 2rem;
  }
}
</style>
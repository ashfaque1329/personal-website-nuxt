<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Poems</h1>
      <p class="page-subtitle">Creative expressions through poetry</p>
    </div>

    <div class="filters-section">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" v-model="searchQuery" placeholder="Search poems..." class="search-input" />
      </div>
      <div class="category-filters">
        <button v-for="cat in categories" :key="cat" class="filter-btn" :class="{ active: selectedCategory === cat }" @click="selectedCategory = cat">
          {{ cat }}
        </button>
        <button class="filter-btn" :class="{ active: selectedCategory === 'All' }" @click="selectedCategory = 'All'">
          All
        </button>
      </div>
    </div>

    <div class="poems-grid">
      <PoemCard v-for="poem in filteredPoems" :key="poem.id" :poem="poem" />
    </div>

    <div v-if="filteredPoems.length === 0" class="empty-state">
      <i class="fas fa-feather-alt"></i>
      <p>No poems found matching your search.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import poemsData from '~/public/data/poems.json'
import PoemCard from '~/components/poems/PoemCard.vue'
import { useSEO } from '~/composables/useSEO'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = computed(() => {
  const cats = new Set((poemsData as any[]).map((p: any) => p.category))
  return Array.from(cats)
})

const filteredPoems = computed(() => {
  let filtered = poemsData as any[]
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter((p: any) => p.category === selectedCategory.value)
  }
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((p: any) =>
        p.title.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some((tag: string) => tag.toLowerCase().includes(query))
    )
  }
  return filtered
})

useSEO({
  title: 'Poems',
  description: 'A collection of 50+ poems exploring technology, quantum physics, AI, and the human experience.',
  url: '/poems'
})
</script>

<style scoped>
.page-container {
  padding: 2rem 0;
}

.page-header {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #0d2b3e;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  color: #1a5c5a;
  font-size: 1.1rem;
}

.filters-section {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-box {
  position: relative;
  max-width: 400px;
}

.search-box i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #1a5c5a;
}

.search-input {
  width: 100%;
  padding: 0.7rem 1rem 0.7rem 3rem;
  border: 2px solid rgba(32, 178, 170, 0.15);
  border-radius: 2rem;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #20b2aa;
  box-shadow: 0 0 0 3px rgba(32, 178, 170, 0.1);
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.3rem 1rem;
  border: 1px solid rgba(32, 178, 170, 0.15);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.5);
  color: #1a3a4a;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: rgba(32, 178, 170, 0.05);
}

.filter-btn.active {
  background: linear-gradient(135deg, #20b2aa, #1a9e97);
  color: white;
  border-color: #20b2aa;
}

.poems-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #1a5c5a;
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #20b2aa;
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
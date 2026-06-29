<template>
  <div class="page-container">
    <h1 class="page-title">
      <i class="fas fa-heart"></i> Hobbies & Interests
    </h1>
    <p class="page-subtitle">Beyond the code and quantum circuits</p>

    <div class="glass hobbies-grid">
      <div v-for="hobby in store.allHobbies" :key="hobby" class="hobby-item">
        {{ hobby }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '~/stores/portfolio'
import { useSEO } from '~/composables/useSEO'

const store = usePortfolioStore()
await store.fetchAllData()

useSEO({
  title: 'Hobbies & Interests',
  description: 'A glimpse into my life beyond technology and research.',
  url: '/hobbies'
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

.hobbies-grid {
  padding: 1.8rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hobby-item {
  padding: 0.8rem 1.5rem;
  background: rgba(32, 178, 170, 0.06);
  border-radius: 2rem;
  border: 1px solid rgba(32, 178, 170, 0.1);
  transition: all 0.3s ease;
  font-weight: 500;
  color: #0d2b3e;
  font-size: 1.05rem;
}

.hobby-item:hover {
  background: rgba(32, 178, 170, 0.12);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 4px 15px rgba(32, 178, 170, 0.1);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
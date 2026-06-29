<template>
  <div class="page-container">
    <h1 class="page-title">
      <i class="fas fa-trophy"></i> Achievements
    </h1>
    <p class="page-subtitle">Awards, recognitions, and milestones</p>

    <div class="glass achievements-list">
      <ul>
        <li v-for="ach in store.allAchievements" :key="ach">
          <span class="icon">✦</span> {{ ach }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '~/stores/portfolio'
import { useSEO } from '~/composables/useSEO'

const store = usePortfolioStore()
await store.fetchAllData()

useSEO({
  title: 'Achievements',
  description: 'Awards, recognitions, and milestones from throughout my career.',
  url: '/achievements'
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

.achievements-list {
  padding: 1.8rem 2.2rem;
}

.achievements-list ul {
  list-style: none;
}

.achievements-list li {
  padding: 0.4rem 0 0.4rem 1.8rem;
  position: relative;
  color: #1a3a4a;
  line-height: 1.6;
  border-bottom: 1px solid rgba(32, 178, 170, 0.04);
}

.achievements-list li:last-child {
  border-bottom: 0;
}

.icon {
  position: absolute;
  left: 0;
  color: #ffb347;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
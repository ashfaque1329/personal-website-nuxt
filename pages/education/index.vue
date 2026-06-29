<template>
  <div class="page-container">
    <h1 class="page-title">
      <i class="fas fa-graduation-cap"></i> Education & Thesis
    </h1>
    <p class="page-subtitle">Academic journey and research</p>

    <div class="education-list">
      <div v-for="edu in store.allEducation" :key="edu.degree" class="glass education-card">
        <h3>{{ edu.degree }}</h3>
        <p class="institution">{{ edu.institution }}</p>
        <p class="year">{{ edu.year }}</p>
      </div>
    </div>

    <!-- Thesis Section -->
    <div class="glass thesis-card-full" v-if="store.thesisData">
      <h2><i class="fas fa-quantum"></i> MSc Thesis</h2>
      <h3>{{ store.thesisData.title }}</h3>
      <p>{{ store.thesisData.description }}</p>
      <div class="thesis-tech">
        <span class="tech-tag" v-for="tech in store.thesisData.technologies" :key="tech">
          {{ tech }}
        </span>
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
  title: 'Education & Thesis',
  description: 'Education and MSc thesis research on Quantum Circuit Born Machines for clinical imaging.',
  url: '/education'
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

.education-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.education-card {
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(32, 178, 170, 0.08);
}

.education-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0d2b3e;
}

.institution {
  color: #1a5c5a;
  font-weight: 500;
  margin: 0.2rem 0;
}

.year {
  color: #2a7a72;
  font-size: 0.85rem;
}

.thesis-card-full {
  padding: 2rem;
  background: rgba(32, 178, 170, 0.04);
  border-left: 4px solid #20b2aa;
}

.thesis-card-full h2 {
  font-size: 1.2rem;
  color: #0d2b3e;
  margin-bottom: 0.5rem;
}

.thesis-card-full h2 i {
  color: #20b2aa;
}

.thesis-card-full h3 {
  font-size: 1.1rem;
  color: #0d2b3e;
  margin-bottom: 0.8rem;
}

.thesis-card-full p {
  color: #1a3a4a;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.thesis-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  .education-list {
    grid-template-columns: 1fr;
  }
}
</style>
<template>
  <div class="page-container">
    <h1 class="page-title">
      <i class="fas fa-briefcase"></i> Experience
    </h1>
    <p class="page-subtitle">13+ years of leadership across global teams</p>

    <div class="experience-list">
      <div v-for="(exp, idx) in store.allExperience" :key="idx" class="glass experience-card">
        <div class="exp-header">
          <div>
            <h3>{{ exp.title }}</h3>
            <p class="company">{{ exp.company }}</p>
          </div>
          <span class="period">{{ exp.period }}</span>
        </div>
        <p class="exp-location"><i class="fas fa-map-pin"></i> {{ exp.location }}</p>
        <ul>
          <li v-for="(item, i) in exp.highlights" :key="i">
            <span class="bullet">▹</span> {{ item }}
          </li>
        </ul>
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
  title: 'Experience',
  description: '13+ years of leadership experience as CTO and Director of Engineering across global teams.',
  url: '/experience'
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

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.experience-card {
  padding: 1.8rem 2rem;
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(32, 178, 170, 0.08);
}

.exp-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.3rem;
}

.exp-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0d2b3e;
}

.company {
  color: #1a5c5a;
  font-weight: 500;
}

.period {
  color: #2a7a72;
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
}

.exp-location {
  color: #1a5c5a;
  font-size: 0.85rem;
  margin-bottom: 0.8rem;
}

.exp-location i {
  color: #20b2aa;
  width: 1.2rem;
}

.experience-card ul {
  list-style: none;
  padding-left: 0.3rem;
}

.experience-card li {
  padding: 0.25rem 0 0.25rem 1.8rem;
  position: relative;
  color: #1a3a4a;
  line-height: 1.6;
}

.bullet {
  position: absolute;
  left: 0;
  color: #20b2aa;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  .exp-header {
    flex-direction: column;
  }
  .period {
    margin-top: 0.2rem;
  }
}
</style>
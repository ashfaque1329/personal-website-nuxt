<template>
  <div class="page-container">
    <h1 class="page-title">Projects</h1>
    <p class="page-subtitle">A showcase of my work in AI, Quantum Computing, and Software Development</p>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.name" class="glass project-card">
        <div class="project-content">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <div class="tech-tags">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '~/stores/portfolio'
import { useSEO } from '~/composables/useSEO'

const store = usePortfolioStore()
await store.fetchAllData()

const projects = computed(() => store.allProjects)

useSEO({
  title: 'Projects',
  description: 'Explore Ashfaque\'s projects in AI, Quantum Computing, and Software Development.',
  url: '/projects'
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
  margin-bottom: 0.5rem;
}

.page-subtitle {
  color: #1a5c5a;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.project-card {
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(32, 178, 170, 0.1);
}

.project-content h3 {
  font-size: 1.2rem;
  color: #0d2b3e;
  margin-bottom: 0.5rem;
}

.project-content p {
  color: #1a3a4a;
  line-height: 1.6;
  font-size: 0.95rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.8rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
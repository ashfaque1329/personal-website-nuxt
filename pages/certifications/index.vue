<template>
  <div class="page-container">
    <h1 class="page-title">Certifications</h1>
    <p class="page-subtitle">Continuous learning and professional development</p>

    <div class="glass cert-grid">
      <div v-for="cert in certifications" :key="cert.name" class="cert-item">
        <i class="fas fa-award cert-icon"></i>
        <div class="cert-info">
          <span class="cert-name">{{ cert.name }}</span>
          <span class="cert-meta">{{ cert.issuer }} · {{ cert.date }}</span>
        </div>
        <a v-if="cert.url" :href="cert.url" target="_blank" rel="noopener noreferrer" class="cert-link">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '~/stores/portfolio'
import { useSEO } from '~/composables/useSEO'

const store = usePortfolioStore()
await store.fetchAllData()

const certifications = computed(() => store.allCertifications)

useSEO({
  title: 'Certifications',
  description: 'Ashfaque\'s certifications in AI, Quantum Computing, Software Engineering, and Cloud Architecture.',
  url: '/certifications'
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

.cert-grid {
  padding: 1.5rem;
}

.cert-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(32, 178, 170, 0.06);
  transition: all 0.3s ease;
}

.cert-item:hover {
  background: rgba(32, 178, 170, 0.04);
  border-radius: 0.5rem;
  transform: translateX(4px);
}

.cert-item:last-child {
  border-bottom: 0;
}

.cert-icon {
  color: #20b2aa;
  font-size: 1.2rem;
  width: 2rem;
}

.cert-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cert-name {
  font-weight: 500;
  color: #0d2b3e;
}

.cert-meta {
  font-size: 0.8rem;
  color: #1a5c5a;
}

.cert-link {
  color: #20b2aa;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.cert-link:hover {
  background: rgba(32, 178, 170, 0.1);
  transform: scale(1.1);
}
</style>
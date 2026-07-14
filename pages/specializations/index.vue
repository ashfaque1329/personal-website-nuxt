<template>
  <div class="page-container">
    <h1 class="page-title">
      <i class="fas fa-microscope"></i> Nanodegrees & Specializations
    </h1>
    <p class="page-subtitle">Specialized programs</p>

    <div class="glass spec-list">
      <div v-for="spec in store.allSpecializations" :key="spec.name" class="spec-item">
        <i class="fas fa-certificate spec-icon"></i>
        <div class="spec-info">
          <span class="spec-name">{{ spec.name }}</span>
          <span class="spec-meta">{{ spec.issuer }} · {{ spec.date }}</span>
        </div>
        <a v-if="spec.url" :href="spec.url" target="_blank" class="spec-link" rel="noopener noreferrer">
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

useSEO({
  title: 'Specializations & Nanodegrees',
  description: 'Advanced specializations and nanodegrees in Quantum Computing, ML, and Software Engineering.',
  url: '/specializations'
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

.spec-list {
  padding: 1.5rem 1.8rem;
}

.spec-item {
  padding: 0.8rem 0.8rem;
  border-bottom: 1px solid rgba(32, 178, 170, 0.06);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease;
}

.spec-item:hover {
  background: rgba(32, 178, 170, 0.04);
  border-radius: 0.5rem;
}

.spec-item:last-child {
  border-bottom: 0;
}

.spec-icon {
  color: #20b2aa;
  font-size: 1.2rem;
  width: 2rem;
  flex-shrink: 0;
}

.spec-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.spec-name {
  font-weight: 500;
  color: #0d2b3e;
}

.spec-meta {
  font-size: 0.78rem;
  color: #2a7a72;
}

.spec-link {
  color: #20b2aa;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.spec-link:hover {
  background: rgba(32, 178, 170, 0.1);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
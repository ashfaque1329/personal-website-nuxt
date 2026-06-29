<template>
  <div class="page-container">
    <h1 class="page-title">
      <i class="fas fa-flask"></i> Research & Collaboration
    </h1>
    <p class="page-subtitle">Exploring the intersection of Quantum Machine Learning, AI, and scalable systems</p>

    <div class="research-grid">
      <div class="glass research-card">
        <h3><i class="fas fa-microscope"></i> Current Research</h3>
        <div class="research-item">
          <h4>Quantum Generative Adversarial Networks for Clinical Image Generation</h4>
          <p>Exploring QGAN models to generate synthetic medical images under data-scarce conditions for rare disease diagnosis.</p>
          <div class="research-tags">
            <span class="tech-tag">Quantum ML</span>
            <span class="tech-tag">Medical Imaging</span>
            <span class="tech-tag">Pennylane</span>
          </div>
          <span class="research-status status-active">In Progress</span>
        </div>
      </div>

      <div class="glass research-card">
        <h3><i class="fas fa-handshake"></i> Collaboration Interests</h3>
        <div class="research-item">
          <ul class="collab-list">
            <li><i class="fas fa-check-circle"></i> Quantum Machine Learning Research</li>
            <li><i class="fas fa-check-circle"></i> Generative AI & RAG Systems</li>
            <li><i class="fas fa-check-circle"></i> Multi-Agent AI Systems</li>
            <li><i class="fas fa-check-circle"></i> Medical Imaging & AI</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="glass collaboration-cta">
      <h3>Let's Collaborate</h3>
      <p>I'm actively seeking research collaborations and academic partnerships in Quantum ML, AI, and scalable systems.</p>
      <NuxtLink to="/contact" class="cta-btn">
        <i class="fas fa-envelope"></i> Reach Out
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'

useSEO({
  title: 'Research & Collaboration',
  description: 'Research on Quantum Machine Learning, Generative AI, and scalable systems. Open to collaborations.',
  url: '/research'
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

.research-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.research-card {
  padding: 1.8rem;
}

.research-card h3 {
  font-size: 1.2rem;
  color: #0d2b3e;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.research-card h3 i {
  color: #20b2aa;
}

.research-item h4 {
  font-size: 1.05rem;
  color: #0d2b3e;
  margin-bottom: 0.3rem;
}

.research-item p {
  color: #1a3a4a;
  line-height: 1.6;
  font-size: 0.95rem;
}

.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.8rem 0;
}

.research-status {
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-active {
  background: rgba(32, 178, 170, 0.1);
  color: #0d5c5a;
}

.collab-list {
  list-style: none;
  padding: 0;
}

.collab-list li {
  padding: 0.3rem 0;
  color: #1a3a4a;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.collab-list li i {
  color: #20b2aa;
}

.collaboration-cta {
  padding: 2.5rem;
  text-align: center;
}

.collaboration-cta h3 {
  font-size: 1.5rem;
  color: #0d2b3e;
  margin-bottom: 0.5rem;
}

.collaboration-cta p {
  color: #1a3a4a;
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 2rem;
  background: linear-gradient(135deg, #20b2aa, #1a9e97);
  color: white;
  text-decoration: none;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(32, 178, 170, 0.3);
}

@media (max-width: 768px) {
  .research-grid {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 2rem;
  }
}
</style>
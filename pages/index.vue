<template>
  <div>
    <!-- Hero / Profile Section with Background Image -->
    <header class="hero-section">
      <div class="hero-bg"></div>

      <div class="hero-content">
        <h1 class="hero-name">{{ store.name }}</h1>
        <p class="hero-title">{{ store.title }}</p>
        <p class="hero-graduation">{{ store.graduation }}</p>
        <div class="hero-contact">
          <span><i class="fas fa-map-pin"></i> {{ store.location }}</span>
          <span><i class="fas fa-envelope"></i> ashfaque1329@gmail.com</span>
        </div>
        <div class="hero-links">
          <a :href="store.linkedin" target="_blank" class="hero-link" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a :href="store.github" target="_blank" class="hero-link" rel="noopener noreferrer">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
        <div class="hero-languages">
          <span class="badge" v-for="(lang, key) in store.languages" :key="key">
            <i class="fas fa-globe"></i> {{ lang }}
          </span>
        </div>
      </div>
    </header>

    <!-- ===== INFOGRAPHIC SUMMARY (Dynamic from JSON) ===== -->
    <section class="infographic-summary">
      <!-- Core Identity -->
      <div class="identity-banner">
        <div class="identity-text">
          <span class="identity-emoji">🚀</span>
          <span class="identity-title">{{ store.identityTitle }}</span>
          <span class="identity-divider">•</span>
          <span class="identity-subtitle">{{ store.identitySubtitle }}</span>
        </div>
      </div>

      <!-- Stats Dashboard -->
      <div class="stats-dashboard">
        <div class="stat-card" v-for="stat in store.statsData" :key="stat.label">
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>

      <!-- University of Liverpool -->
      <div class="university-banner">
        <div class="university-content">
          <div class="university-icon">
            <img
                src="/images/university-logo.svg"
                alt="University of Liverpool"
                class="university-logo"
                loading="lazy"
            />
          </div>
          <div class="university-info">
            <span class="university-name">{{ store.universityData.name }}</span>
            <span class="university-degree">{{ store.universityData.degree }}</span>
            <span class="university-thesis">{{ store.universityData.thesis }}</span>
          </div>
        </div>
      </div>

      <!-- Expertise Grid -->
      <div class="expertise-grid">
        <div class="expertise-card" v-for="exp in store.expertiseData" :key="exp.name">
          <div class="expertise-icon">{{ exp.icon }}</div>
          <h4>{{ exp.name }}</h4>
          <p>{{ exp.description }}</p>
        </div>
      </div>

      <!-- Domains & Compliance -->
      <div class="domains-section">
        <div class="domains-grid">
          <div class="domain-tag" v-for="domain in store.domainsData" :key="domain">
            {{ domain }}
          </div>
        </div>

        <div class="compliance-grid">
          <div class="compliance-tag" v-for="tag in store.complianceData" :key="tag">
            {{ tag }}
          </div>
        </div>
      </div>
    </section>

    <!-- ===== THESIS SECTION ===== -->
    <section>
      <h2 class="section-title"><i class="fas fa-quantum"></i> MSc Thesis</h2>
      <div class="glass thesis-container">
        <h3 class="thesis-title">{{ store.thesisData.title }}</h3>
        <p class="thesis-description">{{ store.thesisData.description }}</p>
        <div class="thesis-tech-tags">
          <span class="tech-tag" v-for="tech in store.thesisData.technologies" :key="tech">
            {{ tech }}
          </span>
        </div>
        <div class="thesis-status">
          <span class="badge"><i class="fas fa-clock"></i> {{ store.thesisData.status }}</span>
        </div>
      </div>
    </section>

    <!-- ===== TECHNOLOGY HIGHLIGHTS ===== -->
    <section>
      <h2 class="section-title"><i class="fas fa-rocket"></i> Technology Highlights</h2>
      <div class="glass tech-highlights-container">
        <div v-for="tech in store.techHighlightsData" :key="tech.id" class="tech-item">
          <div class="tech-icon">
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="tech-content">
            <h4>{{ tech.title }}</h4>
            <p>{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills - Simple Display from JSON -->
    <section>
      <h2 class="section-title"><i class="fas fa-code"></i> Skills & Technologies</h2>
      <div class="glass skills-container">
        <div class="skills-grid">
          <span class="skill-tag" v-for="skill in store.allSkills" :key="skill">
            {{ skill }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '~/stores/portfolio'
import { useSEO } from '~/composables/useSEO'

const store = usePortfolioStore()
await store.fetchAllData()

useSEO({
  title: 'Home',
  description: 'CTO / AI Researcher with 13+ years experience in AI/ML, Quantum Computing, and scalable architectures.',
  url: '/'
})
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 2.5rem 3rem;
  margin-bottom: 2.5rem;
  min-height: 280px;
  overflow: hidden;
  border-radius: 1.5rem;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.5rem;
}

.hero-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
  rgba(255, 255, 255, 0.92) 0%,
  rgba(255, 255, 255, 0.6) 40%,
  rgba(32, 178, 170, 0.15) 100%
  );
  border-radius: 1.5rem;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-name {
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #0d2b3e 0%, #20b2aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: 1.4rem;
  color: #1a5c5a;
  font-weight: 500;
  margin-top: 0.2rem;
  -webkit-text-fill-color: #1a5c5a;
}

.hero-graduation {
  font-size: 1rem;
  color: #1a5c5a;
  font-weight: 500;
  margin-top: 0.4rem;
  -webkit-text-fill-color: #1a5c5a;
}

.hero-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin-top: 1rem;
}

.hero-contact i {
  color: #20b2aa;
  width: 1.4rem;
}

.hero-contact span {
  color: #0d2b3e;
  font-weight: 500;
}

.hero-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.hero-link {
  color: #0d2b3e;
  text-decoration: none;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(32, 178, 170, 0.15);
  transition: all 0.3s ease;
}

.hero-link:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: #20b2aa;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(32, 178, 170, 0.15);
}

.hero-languages {
  display: flex;
  gap: 0.6rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  border-top: 1px solid rgba(32, 178, 170, 0.15);
}

/* ===== INFOGRAPHIC SUMMARY ===== */
.infographic-summary {
  margin-bottom: 2.5rem;
}

/* Identity Banner */
.identity-banner {
  background: linear-gradient(135deg, #0d2b3e, #1a5c5a);
  border-radius: 1.5rem;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.identity-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.identity-emoji {
  font-size: 2rem;
}

.identity-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
}

.identity-divider {
  color: rgba(255, 255, 255, 0.3);
}

.identity-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

/* Stats Dashboard */
.stats-dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(32, 178, 170, 0.1);
  border-radius: 1rem;
  padding: 1.2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(32, 178, 170, 0.1);
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 0.3rem;
}

.stat-number {
  display: block;
  font-size: 2.2rem;
  font-weight: 800;
  color: #0d2b3e;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.8rem;
  color: #1a5c5a;
  font-weight: 500;
}

/* University of Liverpool Banner - Minimal Padding */
.university-banner {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(32, 178, 170, 0.1);
  border-radius: 1.2rem;
  margin-bottom: 1.5rem;
}

.university-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
}

.university-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.university-logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
  display: block;
}

.university-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.university-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0d2b3e;
}

.university-degree {
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a5c5a;
}

.university-thesis {
  font-size: 0.8rem;
  color: #2a7a72;
  font-weight: 400;
}

/* Expertise Grid */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.expertise-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(32, 178, 170, 0.08);
  border-radius: 0.8rem;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.expertise-card:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(32, 178, 170, 0.08);
}

.expertise-icon {
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
  display: block;
}

.expertise-card h4 {
  font-size: 0.8rem;
  color: #0d2b3e;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.expertise-card p {
  font-size: 0.65rem;
  color: #1a5c5a;
  line-height: 1.3;
}

/* Domains & Compliance */
.domains-section {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(32, 178, 170, 0.1);
  border-radius: 0.8rem;
  padding: 0.8rem 1rem;
  margin-bottom: 1.5rem;
}

.domains-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
}

.domain-tag {
  background: rgba(32, 178, 170, 0.08);
  padding: 0.2rem 0.8rem;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #0d5c5a;
  border: 1px solid rgba(32, 178, 170, 0.1);
}

.compliance-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(32, 178, 170, 0.06);
}

.compliance-tag {
  font-size: 0.65rem;
  font-weight: 500;
  color: #1a5c5a;
  background: rgba(255, 255, 255, 0.5);
  padding: 0.15rem 0.6rem;
  border-radius: 10px;
  border: 1px solid rgba(32, 178, 170, 0.06);
}

/* ===== THESIS SECTION ===== */
.thesis-container {
  padding: 1.8rem 2.2rem;
  margin-bottom: 2.5rem;
}

.thesis-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0d2b3e;
  margin-bottom: 0.8rem;
}

.thesis-description {
  font-size: 0.95rem;
  color: #1a3a4a;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.thesis-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.thesis-status {
  display: flex;
  align-items: center;
}

/* ===== TECHNOLOGY HIGHLIGHTS ===== */
.tech-highlights-container {
  padding: 1.8rem 2.2rem;
  margin-bottom: 2.5rem;
}

.tech-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(32, 178, 170, 0.06);
}

.tech-item:last-child {
  border-bottom: 0;
}

.tech-icon {
  flex-shrink: 0;
  margin-top: 0.2rem;
  color: #20b2aa;
  font-size: 0.9rem;
}

.tech-content h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #0d2b3e;
  margin-bottom: 0.2rem;
}

.tech-content p {
  font-size: 0.9rem;
  color: #1a3a4a;
  line-height: 1.6;
}

/* Skills - Simple Grid */
.skills-container {
  padding: 2rem 2.2rem;
  margin-bottom: 2.5rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.9rem;
}

.skill-tag {
  background: linear-gradient(135deg, #e6f9f7, #d4f2ee);
  padding: 0.4rem 1.2rem;
  border-radius: 40px;
  font-size: 0.82rem;
  font-weight: 500;
  color: #0d5c5a;
  border: 1px solid rgba(32, 178, 170, 0.15);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: linear-gradient(135deg, #b2ebe4, #8de0d6);
  transform: scale(1.05);
}

.quick-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1.5rem;
  justify-content: center;
}

.quick-nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(32, 178, 170, 0.1);
  border-radius: 2rem;
  color: #0d2b3e;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.quick-nav-link:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: #20b2aa;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(32, 178, 170, 0.1);
}

.quick-nav-link i {
  color: #20b2aa;
}

/* Responsive */
@media (max-width: 1200px) {
  .expertise-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1.5rem;
    min-height: 220px;
  }
  .hero-name {
    font-size: 2.4rem;
  }
  .hero-title {
    font-size: 1.1rem;
  }

  .identity-text {
    flex-direction: column;
    gap: 0.3rem;
  }
  .identity-divider {
    display: none;
  }
  .identity-title {
    font-size: 1.1rem;
  }

  .stats-dashboard {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
  .stat-card {
    padding: 0.8rem;
  }
  .stat-number {
    font-size: 1.6rem;
  }

  .university-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }

  .university-info {
    text-align: center;
    align-items: center;
  }

  .university-logo {
    width: 90px;
    height: 90px;
  }

  .university-name {
    font-size: 1rem;
  }
  .university-degree {
    font-size: 0.8rem;
  }
  .university-thesis {
    font-size: 0.7rem;
  }

  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
  .expertise-card {
    padding: 0.8rem;
  }
  .expertise-icon {
    font-size: 1.5rem;
  }
  .expertise-card h4 {
    font-size: 0.75rem;
  }
  .expertise-card p {
    font-size: 0.6rem;
  }

  .domains-section {
    padding: 0.8rem 1rem;
  }

  .quick-nav {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .stats-dashboard {
    grid-template-columns: 1fr 1fr;
  }
  .stat-number {
    font-size: 1.4rem;
  }
  .expertise-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
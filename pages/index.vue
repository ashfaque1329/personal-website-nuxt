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

    <!-- Summary -->
    <section class="glass summary-section">
      <p>{{ store.summaryText }}</p>
    </section>

    <!-- Skills - Organized by Category -->
    <section>
      <h2 class="section-title"><i class="fas fa-code"></i> Skills & Technologies</h2>
      <div class="glass skills-container">
        <div class="skills-category">
          <h3 class="skills-category-title">
            <i class="fas fa-brain"></i> AI & Machine Learning
          </h3>
          <div class="skills-grid">
            <span class="skill-tag" v-for="skill in getSkillsByCategory('AI')" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="skills-category">
          <h3 class="skills-category-title">
            <i class="fas fa-atom"></i> Quantum & Advanced Computing
          </h3>
          <div class="skills-grid">
            <span class="skill-tag" v-for="skill in getSkillsByCategory('Quantum')" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="skills-category">
          <h3 class="skills-category-title">
            <i class="fas fa-globe"></i> Web & Mobile Development
          </h3>
          <div class="skills-grid">
            <span class="skill-tag" v-for="skill in getSkillsByCategory('Web')" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="skills-category">
          <h3 class="skills-category-title">
            <i class="fas fa-database"></i> Databases & Data Engineering
          </h3>
          <div class="skills-grid">
            <span class="skill-tag" v-for="skill in getSkillsByCategory('Database')" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="skills-category">
          <h3 class="skills-category-title">
            <i class="fas fa-cloud"></i> Cloud & DevOps
          </h3>
          <div class="skills-grid">
            <span class="skill-tag" v-for="skill in getSkillsByCategory('DevOps')" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="skills-category">
          <h3 class="skills-category-title">
            <i class="fas fa-gamepad"></i> Game Development & Robotics
          </h3>
          <div class="skills-grid">
            <span class="skill-tag" v-for="skill in getSkillsByCategory('Game')" :key="skill">
              {{ skill }}
            </span>
          </div>
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

const getSkillsByCategory = (category: string) => {
  const allSkills = store.allSkills || []

  const categories: Record<string, string[]> = {
    'AI': [
      'AI, Deep Learning, Machine Learning, Generative AI',
      'RAG, Multi AI Agents (CrewAI, Autogen)'
    ],
    'Quantum': [
      'Quantum Machine Learning, Qiskit, PennyLane',
      'Quantum Machine Learning'
    ],
    'Web': [
      'Web Application Frontend: ReactJS, JQuery, Svelte, NextJS, Apollo GraphQL',
      'Web Application Backend: FastAPI, Django, Flask, Node.js, Laravel, GraphQL',
      'Mobile Application Development: React Native, Android Kotlin/Java, iOS Swift'
    ],
    'Database': [
      'SQL Databases: MariaDB, MySQL, Oracle, MS SQL, Google BigQuery, Snowflake, PostgreSQL, Amazon Redshift',
      'NoSQL Databases: MongoDB, Cassandra DB, Scylla DB, Redis, Aerospike, Neo4J',
      'Vector Databases: Weaviate, ChromaDB',
      'ETL Tools: Apache Airflow/Google Cloud Composer, Pentaho Data Integration, Informatica, ODI',
      'BI Tools: Apache Superset, Tableau, Google Data Studio',
      'Real Time Data Processing: Apache Storm, Apache Kafka, Apache Spark'
    ],
    'DevOps': [
      'DevOps: Docker, Kubernetes, JenkinsCI, TravisCI, TeamCityCI, Terraform, Ansible, EFK, Prometheus, Grafana'
    ],
    'Game': [
      'Game Development: C++ - Unreal Engine, Raylib, Rust - Brackettlib',
      'Robotics using ROS2',
      'C, Modern C++, Rust, 6502 Assembly Programming',
      'Software Testing: JMeter, NightwatchJS, Lambda Test, TestMo'
    ]
  }

  return categories[category] || []
}

useSEO({
  title: 'Home',
  description: store.summaryText.slice(0, 160),
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
  font-size: 1.0rem;
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

.summary-section {
  padding: 1.8rem 2.2rem;
  margin-bottom: 2.5rem;
}

.summary-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #1a3a4a;
}

/* ===== SKILLS - ORGANIZED ===== */
.skills-container {
  padding: 2rem 2.2rem;
  margin-bottom: 2.5rem;
}

.skills-category {
  margin-bottom: 1.8rem;
}

.skills-category:last-child {
  margin-bottom: 0;
}

.skills-category-title {
  font-size: 1rem;
  font-weight: 600;
  color: #0d2b3e;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.skills-category-title i {
  color: #20b2aa;
  font-size: 1.1rem;
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
  .quick-nav {
    flex-direction: column;
    align-items: center;
  }
}
</style>
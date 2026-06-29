<template>
  <div class="page-container">
    <div class="page-header">
      <div class="page-header-content">
        <h1 class="page-title">
          <i class="fab fa-youtube" style="color: #FF0000;"></i> Favorite YouTube Channels
        </h1>
        <p class="page-subtitle">Curated resources for learning AI, Quantum Computing, Software Engineering, and more</p>
      </div>
      <div class="stats-bar">
        <div class="stat-item">
          <span class="stat-number">{{ totalChannels }}</span>
          <span class="stat-label">Channels</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ categories.length }}</span>
          <span class="stat-label">Categories</span>
        </div>
      </div>
    </div>

    <div class="category-nav">
      <button v-for="cat in categories" :key="cat.name" class="category-nav-btn" :class="{ active: selectedCategory === cat.name }" @click="selectedCategory = cat.name">
        <i :class="['fas', cat.icon]"></i> {{ cat.name }}
      </button>
      <button class="category-nav-btn" :class="{ active: selectedCategory === 'All' }" @click="selectedCategory = 'All'">
        <i class="fas fa-th-list"></i> All
      </button>
    </div>

    <div v-for="cat in filteredCategories" :key="cat.name" class="category-section">
      <div class="category-header">
        <h2 class="category-title"><i :class="['fas', cat.icon]" style="color: #20b2aa;"></i> {{ cat.name }}</h2>
        <span class="channel-count">{{ cat.channels.length }} channels</span>
      </div>

      <div class="channels-grid">
        <div v-for="channel in cat.channels" :key="channel.name" class="glass channel-card">
          <a :href="channel.url" target="_blank" rel="noopener noreferrer" class="channel-link">
            <div class="channel-header">
              <div class="channel-avatar">
                <img :src="`https://ui-avatars.com/api/?name=${encodeURIComponent(channel.name)}&background=20b2aa&color=fff&size=64`" :alt="channel.name" loading="lazy" />
              </div>
              <div class="channel-meta">
                <h3 class="channel-name">{{ channel.name }}</h3>
                <div class="channel-stats">
                  <span><i class="fas fa-users"></i> {{ channel.subscribers }}</span>
                  <span><i class="fas fa-video"></i> {{ channel.videos }}</span>
                </div>
              </div>
              <div class="channel-badge"><i class="fab fa-youtube" style="color: #FF0000;"></i></div>
            </div>
            <p class="channel-description">{{ channel.description }}</p>
            <div class="channel-footer">
              <span class="visit-channel">Visit Channel <i class="fas fa-arrow-right"></i></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import youtubeData from '~/public/data/youtube.json'
import { useSEO } from '~/composables/useSEO'

const selectedCategory = ref('All')
const categories = ref((youtubeData as any).categories)
const totalChannels = computed(() => {
  return categories.value.reduce((acc: number, cat: any) => acc + cat.channels.length, 0)
})

const filteredCategories = computed(() => {
  if (selectedCategory.value === 'All') return categories.value
  return categories.value.filter((cat: any) => cat.name === selectedCategory.value)
})

useSEO({
  title: 'Favorite YouTube Channels',
  description: 'Curated list of YouTube channels for learning AI, Quantum Computing, Software Engineering, and personal growth.',
  url: '/youtube'
})
</script>

<style scoped>
.page-container {
  padding: 2rem 0;
}

.page-header {
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #0d2b3e;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.page-subtitle {
  color: #1a5c5a;
  font-size: 1.1rem;
}

.stats-bar {
  display: flex;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.7);
  padding: 0.8rem 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(32, 178, 170, 0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0d2b3e;
}

.stat-label {
  font-size: 0.7rem;
  color: #1a5c5a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.category-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
}

.category-nav-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  border: 1px solid rgba(32, 178, 170, 0.1);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.5);
  color: #1a3a4a;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-nav-btn:hover {
  background: rgba(32, 178, 170, 0.05);
}

.category-nav-btn.active {
  background: linear-gradient(135deg, #20b2aa, #1a9e97);
  color: white;
  border-color: #20b2aa;
}

.category-section {
  margin-bottom: 2.5rem;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(32, 178, 170, 0.08);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0d2b3e;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.channel-count {
  font-size: 0.85rem;
  color: #1a5c5a;
  background: rgba(32, 178, 170, 0.05);
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
}

.channels-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}

.channel-card {
  padding: 1.5rem;
  transition: all 0.3s ease;
  height: 100%;
}

.channel-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(32, 178, 170, 0.08);
}

.channel-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.channel-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.8rem;
  align-items: flex-start;
}

.channel-avatar {
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(32, 178, 170, 0.15);
}

.channel-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.channel-meta {
  flex: 1;
  min-width: 0;
}

.channel-name {
  font-size: 1rem;
  font-weight: 700;
  color: #0d2b3e;
  margin-bottom: 0.2rem;
}

.channel-stats {
  display: flex;
  gap: 0.8rem;
  font-size: 0.7rem;
  color: #1a5c5a;
}

.channel-stats i {
  margin-right: 0.2rem;
}

.channel-badge {
  flex-shrink: 0;
  font-size: 1.2rem;
}

.channel-description {
  color: #1a3a4a;
  font-size: 0.9rem;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 0.8rem;
}

.channel-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
}

.visit-channel {
  font-size: 0.8rem;
  font-weight: 500;
  color: #20b2aa;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
}

.channel-card:hover .visit-channel {
  gap: 0.8rem;
}

@media (max-width: 1024px) {
  .channels-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .channels-grid {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 2rem;
  }
  .stats-bar {
    padding: 0.5rem 1rem;
  }
  .stat-number {
    font-size: 1.2rem;
  }
  .page-header {
    flex-direction: column;
  }
}
</style>
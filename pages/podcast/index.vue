<template>
  <div class="page-container">
    <div class="page-header">
      <div class="page-header-content">
        <h1 class="page-title">
          <i class="fas fa-microphone-alt"></i> The Quantum AI Podcast
        </h1>
        <p class="page-subtitle">Conversations with the brightest minds in AI, Quantum Computing, and Technology</p>
      </div>
      <div class="stats-bar">
        <div class="stat-item">
          <span class="stat-number">{{ stats.totalEpisodes }}</span>
          <span class="stat-label">Episodes</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ stats.guestCount }}</span>
          <span class="stat-label">Guests</span>
        </div>
      </div>
    </div>

    <div class="subscribe-bar">
      <span class="subscribe-label">Subscribe on:</span>
      <a href="#" class="subscribe-btn spotify"><i class="fab fa-spotify"></i> Spotify</a>
      <a href="#" class="subscribe-btn apple"><i class="fab fa-apple"></i> Apple</a>
      <a href="#" class="subscribe-btn youtube"><i class="fab fa-youtube"></i> YouTube</a>
    </div>

    <div class="episodes-grid">
      <div v-for="episode in episodes" :key="episode.id" class="glass episode-card">
        <NuxtLink :to="`/podcast/${episode.id}`" class="episode-link">
          <div class="episode-header">
            <img :src="episode.guestImage" :alt="episode.guest" class="guest-avatar" loading="lazy" />
            <div class="episode-meta">
              <span class="episode-category">{{ episode.category }}</span>
              <span class="episode-date">{{ formatDate(episode.date) }}</span>
              <span class="episode-duration"><i class="fas fa-clock"></i> {{ episode.duration }}</span>
            </div>
          </div>
          <h3 class="episode-title">{{ episode.title }}</h3>
          <p class="guest-name">with <strong>{{ episode.guest }}</strong></p>
          <p class="episode-summary">{{ episode.summary }}</p>
          <div class="episode-footer">
            <span class="listen-btn"><i class="fas fa-play-circle"></i> Listen Now</span>
            <span class="episode-number">Episode {{ episode.id }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import podcastData from '~/public/data/podcast.json'
import { useSEO } from '~/composables/useSEO'

const episodes = ref((podcastData as any).episodes)
const stats = ref((podcastData as any).stats)

const formatDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

useSEO({
  title: 'The Quantum AI Podcast',
  description: 'Conversations with top scientists and researchers in AI, Quantum Computing, and Technology.',
  url: '/podcast'
})
</script>

<style scoped>
.page-container {
  padding: 2rem 0;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
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

.subscribe-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  margin-bottom: 2.5rem;
}

.subscribe-label {
  font-weight: 600;
  color: #0d2b3e;
  margin-right: 0.5rem;
}

.subscribe-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1.2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.subscribe-btn.spotify {
  background: #1DB954;
  color: white;
}

.subscribe-btn.spotify:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(29, 185, 84, 0.3);
}

.subscribe-btn.apple {
  background: #8B8B8B;
  color: white;
}

.subscribe-btn.apple:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(139, 139, 139, 0.3);
}

.subscribe-btn.youtube {
  background: #FF0000;
  color: white;
}

.subscribe-btn.youtube:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
}

.episodes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.episode-card {
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.episode-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(32, 178, 170, 0.08);
}

.episode-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.episode-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
}

.guest-avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid rgba(32, 178, 170, 0.15);
  flex-shrink: 0;
}

.episode-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  flex: 1;
}

.episode-category {
  font-size: 0.7rem;
  font-weight: 600;
  color: #20b2aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(32, 178, 170, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
}

.episode-date {
  font-size: 0.7rem;
  color: #1a5c5a;
}

.episode-duration {
  font-size: 0.7rem;
  color: #1a5c5a;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.episode-title {
  font-size: 1.2rem;
  color: #0d2b3e;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.guest-name {
  color: #1a5c5a;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.episode-summary {
  color: #1a3a4a;
  font-size: 0.9rem;
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.episode-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(32, 178, 170, 0.06);
}

.listen-btn {
  color: #20b2aa;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
}

.episode-card:hover .listen-btn {
  gap: 0.8rem;
}

.episode-number {
  font-size: 0.8rem;
  color: #1a5c5a;
}

@media (max-width: 1024px) {
  .episodes-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
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
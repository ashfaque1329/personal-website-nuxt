<template>
  <div class="page-container" v-if="episode">
    <div class="back-link">
      <NuxtLink to="/podcast">
        <i class="fas fa-arrow-left"></i> Back to Podcast
      </NuxtLink>
    </div>

    <article class="glass episode-detail">
      <div class="episode-header">
        <div class="guest-section">
          <img :src="episode.guestImage" :alt="episode.guest" class="guest-avatar-large" loading="lazy" />
          <div class="guest-info">
            <h1 class="episode-title">{{ episode.title }}</h1>
            <p class="guest-name">
              with <strong>{{ episode.guest }}</strong>
              <span class="guest-title">{{ episode.guestTitle }}</span>
            </p>
            <div class="episode-meta">
              <span class="episode-category">{{ episode.category }}</span>
              <span class="episode-date">{{ formatDate(episode.date) }}</span>
              <span class="episode-duration"><i class="fas fa-clock"></i> {{ episode.duration }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="episode-content">
        <h3>About This Episode</h3>
        <p>{{ episode.summary }}</p>

        <h3>Topics Covered</h3>
        <div class="topics-list">
          <span v-for="topic in episode.topics" :key="topic" class="topic-tag">{{ topic }}</span>
        </div>

        <h3>Key Insights</h3>
        <ul class="insights-list">
          <li v-for="insight in episode.keyInsights" :key="insight">
            <i class="fas fa-check-circle"></i> {{ insight }}
          </li>
        </ul>

        <h3>Listen On</h3>
        <div class="listen-links">
          <a v-if="episode.links.spotify" :href="episode.links.spotify" target="_blank" class="listen-link spotify">
            <i class="fab fa-spotify"></i> Spotify
          </a>
          <a v-if="episode.links.apple" :href="episode.links.apple" target="_blank" class="listen-link apple">
            <i class="fab fa-apple"></i> Apple Podcasts
          </a>
          <a v-if="episode.links.youtube" :href="episode.links.youtube" target="_blank" class="listen-link youtube">
            <i class="fab fa-youtube"></i> YouTube
          </a>
        </div>
      </div>
    </article>

    <div class="episode-navigation">
      <NuxtLink :to="`/podcast/${prevEpisode?.id}`" v-if="prevEpisode" class="nav-link">
        <i class="fas fa-arrow-left"></i> {{ prevEpisode.title }}
      </NuxtLink>
      <NuxtLink :to="`/podcast/${nextEpisode?.id}`" v-if="nextEpisode" class="nav-link">
        {{ nextEpisode.title }} <i class="fas fa-arrow-right"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import podcastData from '~/public/data/podcast.json'
import { useSEO } from '~/composables/useSEO'

const route = useRoute()
const id = computed(() => parseInt(route.params.id as string))
const episode = computed(() => (podcastData as any).episodes.find((e: any) => e.id === id.value))

const currentIndex = computed(() => (podcastData as any).episodes.findIndex((e: any) => e.id === id.value))
const prevEpisode = computed(() => currentIndex.value > 0 ? (podcastData as any).episodes[currentIndex.value - 1] : null)
const nextEpisode = computed(() => currentIndex.value < (podcastData as any).episodes.length - 1 ? (podcastData as any).episodes[currentIndex.value + 1] : null)

const formatDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

if (episode.value) {
  useSEO({
    title: `${episode.value.title} - The Quantum AI Podcast`,
    description: `${episode.value.guest} discusses ${episode.value.topics.join(', ')}.`,
    url: `/podcast/${episode.value.id}`,
    type: 'article'
  })
}
</script>

<style scoped>
.page-container {
  padding: 2rem 0;
  max-width: 900px;
  margin: 0 auto;
}

.back-link {
  margin-bottom: 2rem;
}

.back-link a {
  text-decoration: none;
  color: #1a5c5a;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-link a:hover {
  color: #20b2aa;
}

.episode-detail {
  padding: 2.5rem 3rem;
}

.episode-header {
  margin-bottom: 2rem;
}

.guest-section {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.guest-avatar-large {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 3px solid rgba(32, 178, 170, 0.15);
  flex-shrink: 0;
}

.guest-info {
  flex: 1;
}

.episode-title {
  font-size: 2rem;
  font-weight: 800;
  color: #0d2b3e;
  margin-bottom: 0.3rem;
}

.guest-name {
  font-size: 1.1rem;
  color: #1a3a4a;
  margin-bottom: 0.3rem;
}

.guest-title {
  display: block;
  font-size: 0.85rem;
  color: #1a5c5a;
  font-weight: 400;
}

.episode-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.episode-category {
  font-size: 0.75rem;
  font-weight: 600;
  color: #20b2aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(32, 178, 170, 0.08);
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
}

.episode-date,
.episode-duration {
  font-size: 0.8rem;
  color: #1a5c5a;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.episode-content {
  padding-top: 1rem;
  border-top: 1px solid rgba(32, 178, 170, 0.06);
}

.episode-content h3 {
  font-size: 1.2rem;
  color: #0d2b3e;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
}

.episode-content h3:first-child {
  margin-top: 0;
}

.episode-content p {
  color: #1a3a4a;
  line-height: 1.8;
  font-size: 1rem;
}

.topics-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.topic-tag {
  font-size: 0.8rem;
  color: #0d5c5a;
  background: rgba(32, 178, 170, 0.08);
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
}

.insights-list {
  list-style: none;
  padding: 0;
}

.insights-list li {
  padding: 0.4rem 0;
  color: #1a3a4a;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.insights-list li i {
  color: #20b2aa;
  margin-top: 0.2rem;
}

.listen-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.listen-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.listen-link.spotify {
  background: #1DB954;
  color: white;
}

.listen-link.spotify:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(29, 185, 84, 0.3);
}

.listen-link.apple {
  background: #8B8B8B;
  color: white;
}

.listen-link.apple:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(139, 139, 139, 0.3);
}

.listen-link.youtube {
  background: #FF0000;
  color: white;
}

.listen-link.youtube:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
}

.episode-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #1a5c5a;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(32, 178, 170, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: #20b2aa;
  color: #20b2aa;
}

@media (max-width: 768px) {
  .episode-detail {
    padding: 1.5rem;
  }
  .guest-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .episode-title {
    font-size: 1.5rem;
  }
  .episode-navigation {
    flex-direction: column;
  }
}
</style>
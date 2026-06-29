<template>
  <div class="page-container">
    <h1 class="page-title">
      <i class="fas fa-quote-left"></i> Testimonials
    </h1>
    <p class="page-subtitle">What colleagues and collaborators say about working with me</p>

    <div class="testimonials-grid">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="glass testimonial-card">
        <div class="testimonial-header">
          <div class="testimonial-avatar">
            <img
                :src="testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=20b2aa&color=fff&size=64`"
                :alt="testimonial.name"
                loading="lazy"
            />
          </div>
          <div class="testimonial-info">
            <h3>{{ testimonial.name }}</h3>
            <p class="testimonial-title">{{ testimonial.title }}</p>
            <div class="testimonial-rating">
              <i v-for="n in 5" :key="n" class="fas fa-star" :class="{ filled: n <= testimonial.rating }"></i>
            </div>
          </div>
        </div>
        <p class="testimonial-text">"{{ testimonial.text }}"</p>
        <div class="testimonial-relation">
          <i class="fas fa-briefcase"></i> {{ testimonial.relation }}
        </div>
        <div class="testimonial-date">{{ formatDate(testimonial.date) }}</div>
      </div>
    </div>

    <div class="glass cta-section">
      <h3>Would you like to add a testimonial?</h3>
      <p>If we've worked together and you'd like to share your experience, I'd be honored.</p>
      <NuxtLink to="/contact" class="cta-btn">
        <i class="fas fa-envelope"></i> Send a Testimonial
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'
import testimonialsData from '~/public/data/testimonials.json'

const testimonials = ref(testimonialsData)

const formatDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useSEO({
  title: 'Testimonials',
  description: 'Testimonials from colleagues, collaborators, and mentors about working with Ashfaque Chowdhury.',
  url: '/testimonials'
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

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.testimonial-card {
  padding: 1.8rem;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(32, 178, 170, 0.08);
}

.testimonial-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.testimonial-avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(32, 178, 170, 0.15);
  flex-shrink: 0;
}

.testimonial-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-info h3 {
  font-size: 1rem;
  color: #0d2b3e;
}

.testimonial-title {
  font-size: 0.85rem;
  color: #1a5c5a;
}

.testimonial-rating {
  display: flex;
  gap: 0.1rem;
  margin-top: 0.1rem;
}

.testimonial-rating i {
  font-size: 0.8rem;
  color: #d1d5db;
}

.testimonial-rating i.filled {
  color: #f59e0b;
}

.testimonial-text {
  color: #1a3a4a;
  line-height: 1.7;
  font-size: 0.95rem;
  font-style: italic;
  margin-bottom: 0.8rem;
}

.testimonial-relation {
  color: #1a5c5a;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.testimonial-date {
  color: #8aaeae;
  font-size: 0.7rem;
  margin-top: 0.2rem;
}

.cta-section {
  padding: 2rem;
  text-align: center;
}

.cta-section h3 {
  font-size: 1.2rem;
  color: #0d2b3e;
  margin-bottom: 0.5rem;
}

.cta-section p {
  color: #1a3a4a;
  margin-bottom: 1rem;
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
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 2rem;
  }
}
</style>
<template>
  <div class="page-container">
    <h1 class="page-title">Recommended Books</h1>
    <p class="page-subtitle">Tech and non-tech books that have shaped my thinking</p>

    <div class="books-section">
      <h2 class="section-label">Tech & AI</h2>
      <div class="books-grid">
        <div v-for="book in techBooks" :key="book.title" class="glass book-card">
          <div class="book-icon"><i class="fas fa-robot"></i></div>
          <div class="book-content">
            <h3>{{ book.title }}</h3>
            <p>{{ book.author }}</p>
            <span class="book-tag">Tech</span>
          </div>
        </div>
      </div>
    </div>

    <div class="books-section">
      <h2 class="section-label">Non-Tech & Leadership</h2>
      <div class="books-grid">
        <div v-for="book in nonTechBooks" :key="book.title" class="glass book-card">
          <div class="book-icon"><i class="fas fa-feather-alt"></i></div>
          <div class="book-content">
            <h3>{{ book.title }}</h3>
            <p>{{ book.author }}</p>
            <span class="book-tag non-tech">Non-Tech</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'
import booksData from '~/public/data/books.json'

const techBooks = ref(booksData.tech)
const nonTechBooks = ref(booksData.nonTech)

useSEO({
  title: 'Books',
  description: 'Recommended books on technology, AI, leadership, and personal growth.',
  url: '/books'
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

.books-section {
  margin-bottom: 2.5rem;
}

.section-label {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0d2b3e;
  margin-bottom: 1.2rem;
  border-left: 4px solid #20b2aa;
  padding-left: 1rem;
}

.books-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.book-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  transition: all 0.3s ease;
}

.book-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(32, 178, 170, 0.08);
}

.book-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(32, 178, 170, 0.08);
  border-radius: 0.8rem;
  color: #20b2aa;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.book-content {
  flex: 1;
}

.book-content h3 {
  color: #0d2b3e;
  font-size: 1rem;
  font-weight: 600;
}

.book-content p {
  color: #1a5c5a;
  font-size: 0.85rem;
}

.book-tag {
  display: inline-block;
  margin-top: 0.2rem;
  font-size: 0.65rem;
  background: rgba(32, 178, 170, 0.1);
  padding: 0.1rem 0.6rem;
  border-radius: 12px;
  color: #0d5c5a;
  font-weight: 500;
}

.book-tag.non-tech {
  background: rgba(255, 179, 71, 0.1);
  color: #b3771a;
}

@media (max-width: 768px) {
  .books-grid {
    grid-template-columns: 1fr;
  }
}
</style>
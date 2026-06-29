<template>
  <div class="app-wrapper">
    <ThreeBackground />
    <AppHeader />
    <main class="app-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import ThreeBackground from '~/components/shared/ThreeBackground.vue'
import AppHeader from '~/components/common/AppHeader.vue'
import AppFooter from '~/components/common/AppFooter.vue'
</script>

<style scoped>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f0faf8;
}

.app-content {
  position: relative;
  z-index: 10;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1.5rem;
  flex: 1;
  width: 100%;
}
</style>
<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="header-container">
      <NuxtLink to="/" class="logo">
        <span class="logo-text">Ashfaque</span>
      </NuxtLink>

      <nav class="nav-desktop">
        <NuxtLink to="/" class="nav-link" :class="{ active: route.path === '/' }">
          <i class="fas fa-home"></i> Home
        </NuxtLink>

        <!-- About Dropdown - Pure CSS hover -->
        <div class="nav-dropdown">
          <span class="nav-link nav-dropdown-trigger" :class="{ active: aboutActive }">
            <i class="fas fa-user"></i> About
            <i class="fas fa-chevron-down" style="font-size: 0.5rem; margin-left: 0.3rem;"></i>
          </span>
          <div class="dropdown-menu">
            <NuxtLink to="/experience" class="dropdown-link">
              <i class="fas fa-briefcase"></i> Experience
            </NuxtLink>
            <NuxtLink to="/education" class="dropdown-link">
              <i class="fas fa-graduation-cap"></i> Education
            </NuxtLink>
            <NuxtLink to="/specializations" class="dropdown-link">
              <i class="fas fa-microscope"></i> Nanodegrees & Specializations
            </NuxtLink>
            <NuxtLink to="/achievements" class="dropdown-link">
              <i class="fas fa-trophy"></i> Achievements
            </NuxtLink>
            <NuxtLink to="/hobbies" class="dropdown-link">
              <i class="fas fa-heart"></i> Hobbies
            </NuxtLink>
          </div>
        </div>

        <!-- Work Dropdown - Pure CSS hover -->
        <div class="nav-dropdown">
          <span class="nav-link nav-dropdown-trigger" :class="{ active: workActive }">
            <i class="fas fa-code"></i> Work
            <i class="fas fa-chevron-down" style="font-size: 0.5rem; margin-left: 0.3rem;"></i>
          </span>
          <div class="dropdown-menu">
            <NuxtLink to="/projects" class="dropdown-link">
              <i class="fas fa-folder-open"></i> Projects
            </NuxtLink>
            <NuxtLink to="/certifications" class="dropdown-link">
              <i class="fas fa-certificate"></i> Certifications
            </NuxtLink>
            <!--NuxtLink to="/blog" class="dropdown-link">
              <i class="fas fa-pen-fancy"></i> Blog
            </NuxtLink-->
            <NuxtLink to="/research" class="dropdown-link">
              <i class="fas fa-flask"></i> Research
            </NuxtLink>
          </div>
        </div>

        <!-- Creative Dropdown - Pure CSS hover -->
        <div class="nav-dropdown">
          <span class="nav-link nav-dropdown-trigger" :class="{ active: creativeActive }">
            <i class="fas fa-feather-alt"></i> Creative
            <i class="fas fa-chevron-down" style="font-size: 0.5rem; margin-left: 0.3rem;"></i>
          </span>
          <div class="dropdown-menu">
            <!--NuxtLink to="/poems" class="dropdown-link">
              <i class="fas fa-feather-alt"></i> Poems
            </NuxtLink-->
            <NuxtLink to="/books" class="dropdown-link">
              <i class="fas fa-book"></i> Books
            </NuxtLink>
            <NuxtLink to="/youtube" class="dropdown-link">
              <i class="fab fa-youtube"></i> YouTube
            </NuxtLink>
            <!--NuxtLink to="/podcast" class="dropdown-link">
              <i class="fas fa-microphone-alt"></i> Podcast
            </NuxtLink-->
          </div>
        </div>

        <NuxtLink to="/testimonials" class="nav-link" :class="{ active: route.path.startsWith('/testimonials') }">
          <i class="fas fa-quote-left"></i> Testimonials
        </NuxtLink>

        <NuxtLink to="/contact" class="nav-link nav-cta" :class="{ active: route.path.startsWith('/contact') }">
          <i class="fas fa-envelope"></i> Contact
        </NuxtLink>
      </nav>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen">
        <i class="fas" :class="mobileOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="mobile-menu">
        <nav class="mobile-nav">
          <NuxtLink to="/" class="mobile-link" @click="closeMenu">
            <i class="fas fa-home"></i> Home
          </NuxtLink>

          <div class="mobile-section-label">About</div>
          <NuxtLink to="/experience" class="mobile-link" @click="closeMenu">
            <i class="fas fa-briefcase"></i> Experience
          </NuxtLink>
          <NuxtLink to="/education" class="mobile-link" @click="closeMenu">
            <i class="fas fa-graduation-cap"></i> Education
          </NuxtLink>
          <NuxtLink to="/specializations" class="mobile-link" @click="closeMenu">
            <i class="fas fa-microscope"></i> Nanodegrees & Specializations
          </NuxtLink>
          <NuxtLink to="/achievements" class="mobile-link" @click="closeMenu">
            <i class="fas fa-trophy"></i> Achievements
          </NuxtLink>
          <NuxtLink to="/hobbies" class="mobile-link" @click="closeMenu">
            <i class="fas fa-heart"></i> Hobbies
          </NuxtLink>

          <div class="mobile-section-label">Work</div>
          <NuxtLink to="/projects" class="mobile-link" @click="closeMenu">
            <i class="fas fa-folder-open"></i> Projects
          </NuxtLink>
          <NuxtLink to="/certifications" class="mobile-link" @click="closeMenu">
            <i class="fas fa-certificate"></i> Certifications
          </NuxtLink>
          <!--NuxtLink to="/blog" class="mobile-link" @click="closeMenu">
            <i class="fas fa-pen-fancy"></i> Blog
          </NuxtLink-->
          <NuxtLink to="/research" class="mobile-link" @click="closeMenu">
            <i class="fas fa-flask"></i> Research
          </NuxtLink>

          <div class="mobile-section-label">Creative</div>
          <!--NuxtLink to="/poems" class="mobile-link" @click="closeMenu">
            <i class="fas fa-feather-alt"></i> Poems
          </NuxtLink-->
          <NuxtLink to="/books" class="mobile-link" @click="closeMenu">
            <i class="fas fa-book"></i> Books
          </NuxtLink>
          <NuxtLink to="/youtube" class="mobile-link" @click="closeMenu">
            <i class="fab fa-youtube"></i> YouTube
          </NuxtLink>
          <!--NuxtLink to="/podcast" class="mobile-link" @click="closeMenu">
            <i class="fas fa-microphone-alt"></i> Podcast
          </NuxtLink-->

          <NuxtLink to="/testimonials" class="mobile-link" @click="closeMenu">
            <i class="fas fa-quote-left"></i> Testimonials
          </NuxtLink>

          <NuxtLink to="/contact" class="mobile-link mobile-cta" @click="closeMenu">
            <i class="fas fa-envelope"></i> Contact
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)
const isScrolled = ref(false)

const aboutActive = computed(() => {
  return ['/experience', '/education', '/specializations', '/achievements', '/hobbies'].some(p => route.path.startsWith(p))
})

const workActive = computed(() => {
  return ['/projects', '/certifications', '/blog', '/research'].some(p => route.path.startsWith(p))
})

const creativeActive = computed(() => {
  return ['/poems', '/books', '/youtube', '/podcast'].some(p => route.path.startsWith(p))
})

const closeMenu = () => {
  mobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {})
})
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(32, 178, 170, 0.1);
  transition: all 0.3s ease;
  padding: 0.8rem 0;
}

.app-header.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.header-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.logo-text {
  color: #0d2b3e;
}

.logo-highlight {
  color: #20b2aa;
}

.nav-desktop {
  display: flex;
  gap: 0.3rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #1a3a4a;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
}

.nav-link:hover {
  background: rgba(32, 178, 170, 0.08);
}

.nav-link.active {
  background: rgba(32, 178, 170, 0.12);
  color: #20b2aa;
}

.nav-cta {
  background: linear-gradient(135deg, #20b2aa, #1a9e97);
  color: white !important;
  padding: 0.4rem 1.2rem;
  border-radius: 2rem;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(32, 178, 170, 0.3);
}

/* ===== DROPDOWN - PURE CSS HOVER ===== */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-trigger {
  user-select: none;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(32, 178, 170, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem;
  min-width: 200px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-top: 0.2rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  z-index: 101;
}

/* Show dropdown on hover */
.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.8rem;
  color: #1a3a4a;
  text-decoration: none;
  font-size: 0.85rem;
  border-radius: 0.3rem;
  transition: all 0.2s ease;
}

.dropdown-link i {
  width: 1.2rem;
  color: #20b2aa;
  font-size: 0.85rem;
}

.dropdown-link:hover {
  background: rgba(32, 178, 170, 0.08);
  color: #20b2aa;
}

/* Mobile toggle */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #0d2b3e;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
}

.mobile-menu {
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  padding: 1.5rem;
  border-bottom: 1px solid rgba(32, 178, 170, 0.1);
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.mobile-section-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1a5c5a;
  font-weight: 600;
  padding: 0.8rem 0 0.2rem;
  border-bottom: 1px solid rgba(32, 178, 170, 0.05);
  margin-top: 0.3rem;
}

.mobile-section-label:first-of-type {
  margin-top: 0;
}

.mobile-link {
  text-decoration: none;
  color: #1a3a4a;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
}

.mobile-link:hover {
  background: rgba(32, 178, 170, 0.08);
}

.mobile-link i {
  width: 1.4rem;
  color: #20b2aa;
}

.mobile-cta {
  background: linear-gradient(135deg, #20b2aa, #1a9e97);
  color: white !important;
  justify-content: center;
  margin-top: 0.5rem;
}

.mobile-cta i {
  color: white !important;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1024px) {
  .nav-desktop .nav-link {
    font-size: 0.75rem;
    padding: 0.3rem 0.5rem;
  }
  .dropdown-link {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
  .mobile-toggle {
    display: block;
  }
}
</style>
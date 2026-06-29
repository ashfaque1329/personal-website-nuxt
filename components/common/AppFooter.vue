<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-left">
        <i class="fas fa-cube"></i>
        <span>Ashfaque Chowdhury</span>
      </div>
      <div class="footer-center">
        <span>&copy; {{ new Date().getFullYear() }} Ashfaque Chowdhury. All rights reserved.</span>
      </div>
      <div class="footer-right">
        <a href="https://linkedin.com/in/ashfaque1329" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ashfaque1329" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:ashfaque1329@gmail.com" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(32, 178, 170, 0.15);
  padding: 1.2rem 1.5rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #0d2b3e;
  font-weight: 600;
}

.footer-left i {
  color: #20b2aa;
}

.footer-center {
  color: #1a5c5a;
  font-size: 0.85rem;
}

.footer-right {
  display: flex;
  gap: 0.6rem;
}

.footer-right a {
  color: #1a5c5a;
  transition: all 0.3s ease;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(32, 178, 170, 0.05);
  border: 1px solid rgba(32, 178, 170, 0.1);
  text-decoration: none;
}

.footer-right a:hover {
  color: #20b2aa;
  background: rgba(32, 178, 170, 0.12);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
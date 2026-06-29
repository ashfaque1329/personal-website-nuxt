<template>
  <div class="page-container">
    <h1 class="page-title">Get in Touch</h1>
    <p class="page-subtitle">Have a project in mind or need consultation?</p>

    <div class="contact-grid">
      <div class="glass contact-info">
        <h3>Let's Connect</h3>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

        <div class="contact-details">
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <strong>Location</strong>
              <span>Bengaluru, India</span>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <span>ashfaque1329@gmail.com</span>
            </div>
          </div>
        </div>

        <div class="social-links">
          <a href="https://linkedin.com/in/ashfaque1329" target="_blank" class="social-link" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ashfaque1329" target="_blank" class="social-link" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>

      <form @submit.prevent="submitForm" class="glass contact-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="form.name" required placeholder="Your full name" />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="form.email" required placeholder="you@example.com" />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <select id="subject" v-model="form.subject">
            <option value="">Select a topic...</option>
            <option value="AI Consultation">AI/ML Consultation</option>
            <option value="Saas Platform">Saas Platform</option>
            <option value="Tech Architecture and Scalability">Tech Architecture and Scalability</option>
            <option value="Research Collaboration">Research Collaboration</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required placeholder="Tell me about your project..." rows="4"></textarea>
        </div>
        <button type="submit" class="submit-btn" :disabled="submitting">
          <i class="fas fa-paper-plane"></i>
          {{ submitting ? 'Sending...' : 'Send Message' }}
        </button>
        <div v-if="formSuccess" class="success-message">
          <i class="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.
        </div>
        <div v-if="formError" class="error-message">
          <i class="fas fa-exclamation-circle"></i> {{ formError }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const formSuccess = ref(false)
const formError = ref('')

const submitForm = async () => {
  submitting.value = true
  formSuccess.value = false
  formError.value = ''

  try {
    // Formspree endpoint - Replace with your form ID
    // Go to https://formspree.io/ and create a new form
    const response = await fetch('https://formspree.io/f/xjgqwjba', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject || 'Consultation Request',
        message: form.value.message,
        _replyto: form.value.email
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    const data = await response.json()
    console.log('Form submitted successfully:', data)

    formSuccess.value = true
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    setTimeout(() => {
      formSuccess.value = false
    }, 5000)

  } catch (error: any) {
    console.error('Form error:', error)
    formError.value = 'Failed to send message. Please try again or email me directly.'
  } finally {
    submitting.value = false
  }
}

useSEO({
  title: 'Contact',
  description: 'Get in touch with Ashfaque Chowdhury for consultation in AI/ML, Quantum Computing, or Tech Architecture.',
  url: '/contact'
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

.contact-info {
  padding: 2rem;
}

.contact-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0d2b3e;
  margin-bottom: 0.5rem;
}

.contact-info p {
  color: #1a3a4a;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-item i {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(32, 178, 170, 0.1);
  border-radius: 50%;
  color: #20b2aa;
  flex-shrink: 0;
}

.contact-item div {
  display: flex;
  flex-direction: column;
}

.contact-item strong {
  color: #0d2b3e;
  font-size: 0.85rem;
}

.contact-item span {
  color: #1a3a4a;
}

.social-links {
  display: flex;
  gap: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  background: rgba(32, 178, 170, 0.08);
  border-radius: 50%;
  color: #20b2aa;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: rgba(32, 178, 170, 0.15);
  transform: translateY(-2px);
}

.contact-form {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-group label {
  font-weight: 600;
  color: #0d2b3e;
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.7rem 1rem;
  border: 2px solid rgba(32, 178, 170, 0.15);
  border-radius: 0.8rem;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.5);
  color: #1a3a4a;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #20b2aa;
  box-shadow: 0 0 0 3px rgba(32, 178, 170, 0.1);
  background: white;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #20b2aa, #1a9e97);
  color: white;
  border: none;
  border-radius: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(32, 178, 170, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  padding: 0.8rem 1rem;
  background: rgba(32, 178, 170, 0.1);
  border: 1px solid #20b2aa;
  border-radius: 0.8rem;
  color: #0d5c5a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.success-message i {
  color: #20b2aa;
  font-size: 1.2rem;
}

.error-message {
  padding: 0.8rem 1rem;
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
  border-radius: 0.8rem;
  color: #c0392b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.error-message i {
  color: #e74c3c;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
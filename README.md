# Ashfaque Chowdhury · Portfolio

[![Built with Nuxt](https://img.shields.io/badge/Built%20with-Nuxt-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-000000?logo=three.js&logoColor=white)](https://threejs.org)

> Modern, interactive portfolio showcasing 13+ years of experience as CTO and AI/ML leader.

**Live Demo:** (https://ashfaque-chowdhury.com)

---

## ✨ Features

- 🎨 **Glassmorphism UI** with turquoise/teal color scheme
- 🌌 **3D Particle Background** using Three.js
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with meta tags, sitemap, and schema.org
- 📝 **Editable JSON Data** - all content in `public/data/`
- 📊 **Pinia State Management**
- 🎙️ **Podcast Section** for interviews with AI/Quantum leaders
- 📚 **Blog Articles** with category filtering
- 🧠 **Research & Collaboration** page
- ✍️ **50+ Poems** with categories and search
- 📺 **YouTube Channel Recommendations** with categories
- 📧 **Contact Form** integrated with Formspree
- ⚡ **Fast Performance** with SSR and prerendering
- 🎯 **TypeScript** for type safety

---

## 📁 Pages Structure

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Profile, summary, skills |
| Experience | `/experience` | Full work history |
| Education | `/education` | Academic background + MSc thesis |
| Specializations | `/specializations` | Nanodegrees & specializations |
| Achievements | `/achievements` | Awards & recognitions |
| Hobbies | `/hobbies` | Personal interests |
| Projects | `/projects` | Technical projects |
| Certifications | `/certifications` | All certifications |
| Books | `/books` | Recommended reading |
| YouTube | `/youtube` | Curated YouTube channels |
| Research | `/research` | Research & collaboration |
| Testimonials | `/testimonials` | Recommendations |
| Contact | `/contact` | Contact form |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Nuxt 4** | Vue.js framework with SSR |
| **Vue 3** | UI framework |
| **Pinia** | State management |
| **TypeScript** | Type safety |
| **Three.js** | 3D particle background |
| **Sass** | CSS preprocessor |
| **Vercel** | Hosting & deployment |

### Packages

```json
{
  "dependencies": {
    "@nuxt/image": "^2.0.0",
    "@nuxtjs/sitemap": "^8.2.2",
    "@pinia/nuxt": "^0.11.3",
    "nuxt": "^4.4.8",
    "nuxt-schema-org": "^6.2.3",
    "pinia": "^3.0.4",
    "three": "^0.185.0",
    "vue": "^3.5.38"
  },
  "devDependencies": {
    "@nuxtjs/google-fonts": "^3.2.0",
    "sass": "^1.101.0",
    "typescript": "^6.0.3"
  }
}
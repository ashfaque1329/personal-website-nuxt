export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  compatibilityDate: '2024-06-29',

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ],
      meta: [
        { name: 'theme-color', content: '#20b2aa' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Ashfaque Chowdhury' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: [300, 400, 500, 600, 700, 800]
      },
      display: 'swap',
      prefetch: true,
      preconnect: true
    }],
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@nuxt/image'
  ],

  nitro: {
    preset: 'vercel',
    compressPublicAssets: true
  },

  typescript: {
    strict: true
  },

  routeRules: {
    '/': { prerender: true },
    '/projects': { prerender: true },
    '/certifications': { prerender: true },
    '/poems': { prerender: true },
    '/poems/**': { prerender: true },
    '/books': { prerender: true },
    '/youtube': { prerender: true },
    '/podcast': { prerender: true },
    '/podcast/**': { prerender: true },
    '/testimonials': { prerender: true },
    '/blog': { prerender: true },
    '/research': { prerender: true },
    '/contact': { prerender: true }
  }
})
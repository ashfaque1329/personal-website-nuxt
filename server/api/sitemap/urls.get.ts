import poemsData from '~/public/data/poems.json'

export default defineEventHandler(() => {
    const baseUrl = 'https://ashfaque.dev'

    const staticPages = [
        { url: '/', priority: 1.0, changefreq: 'daily' },
        { url: '/projects', priority: 0.9, changefreq: 'weekly' },
        { url: '/certifications', priority: 0.8, changefreq: 'weekly' },
        { url: '/poems', priority: 0.8, changefreq: 'weekly' },
        { url: '/books', priority: 0.7, changefreq: 'monthly' },
        { url: '/youtube', priority: 0.7, changefreq: 'monthly' },
        { url: '/podcast', priority: 0.8, changefreq: 'weekly' },
        { url: '/testimonials', priority: 0.7, changefreq: 'monthly' },
        { url: '/blog', priority: 0.8, changefreq: 'weekly' },
        { url: '/research', priority: 0.8, changefreq: 'weekly' },
        { url: '/contact', priority: 0.6, changefreq: 'monthly' }
    ]

    const poemPages = (poemsData as any[]).map((poem: any) => ({
        url: `/poems/${poem.id}`,
        priority: 0.8,
        changefreq: 'monthly'
    }))

    const allUrls = [...staticPages, ...poemPages]

    return allUrls.map((item: any) => ({
        loc: `${baseUrl}${item.url}`,
        lastmod: new Date().toISOString(),
        changefreq: item.changefreq,
        priority: item.priority
    }))
})
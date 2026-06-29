import { useHead } from 'nuxt/app'

export const useSEO = (options: {
    title: string
    description: string
    image?: string
    url?: string
    type?: 'website' | 'article' | 'profile'
}) => {
    const baseUrl = 'https://ashfaque.dev'

    const title = options.title.includes('|') ? options.title : `${options.title} | Ashfaque Chowdhury`
    const description = options.description.slice(0, 160)
    const image = options.image || '/og-image.jpg'
    const url = options.url ? `${baseUrl}${options.url}` : baseUrl
    const type = options.type || 'website'

    useHead({
        title,
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: getKeywords() },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: `${baseUrl}${image}` },
            { property: 'og:url', content: url },
            { property: 'og:type', content: type },
            { property: 'og:site_name', content: 'Ashfaque Chowdhury' },
            { property: 'og:locale', content: 'en_US' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: `${baseUrl}${image}` },
            { name: 'twitter:creator', content: '@ashfaque1329' },
            { name: 'robots', content: 'index, follow' },
            { name: 'googlebot', content: 'index, follow' },
            { name: 'author', content: 'Ashfaque Chowdhury' },
            { name: 'theme-color', content: '#20b2aa' }
        ],
        link: [
            { rel: 'canonical', href: url }
        ]
    })

    return { title, description, url }
}

const getKeywords = () => {
    return [
        'AI', 'Machine Learning', 'Quantum Computing', 'Generative AI',
        'RAG', 'Multi-Agent Systems', 'Deep Learning', 'Quantum ML',
        'Software Architecture', 'Cloud Computing', 'Full Stack Development',
        'React', 'Python', 'Rust', 'CTO', 'Technology Leader'
    ].join(', ')
}
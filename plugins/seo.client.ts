import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
    const addPersonSchema = () => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Ashfaque Chowdhury',
            jobTitle: 'Chief Technology Officer',
            url: 'https://ashfaque.dev',
            sameAs: [
                'https://linkedin.com/in/ashfaque1329',
                'https://github.com/ashfaque1329'
            ],
            knowsAbout: [
                'Artificial Intelligence', 'Machine Learning', 'Quantum Computing',
                'Software Architecture', 'Generative AI', 'RAG Systems',
                'Multi-Agent Systems', 'Deep Learning', 'Cloud Computing'
            ],
            alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'University of Liverpool'
            },
            worksFor: {
                '@type': 'Organization',
                name: 'Lovelocal'
            }
        })
        document.head.appendChild(script)
    }

    const addWebsiteSchema = () => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Ashfaque Chowdhury - Portfolio',
            url: 'https://ashfaque.dev',
            description: 'Portfolio of Ashfaque Chowdhury, CTO with 13+ years leading global teams in AI/ML, Quantum Computing, and scalable architectures.',
            author: {
                '@type': 'Person',
                name: 'Ashfaque Chowdhury'
            }
        })
        document.head.appendChild(script)
    }

    setTimeout(() => {
        addPersonSchema()
        addWebsiteSchema()
    }, 100)
})
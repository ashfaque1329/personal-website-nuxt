import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        profile: null as any,
        summary: null as any,
        summaryInfographic: null as any,
        techHighlights: [] as any[],
        skills: [] as any[],
        experience: [] as any[],
        education: [] as any[],
        thesis: null as any,
        specializations: [] as any[],
        certifications: [] as any[],
        projects: [] as any[],
        achievements: [] as any[],
        hobbies: [] as any[],
        loading: false,
        error: null as string | null
    }),

    getters: {
        name: (state) => state.profile?.name || '',
        title: (state) => state.profile?.title || '',
        graduation: (state) => state.profile?.graduation || '',
        location: (state) => state.profile?.location || '',
        linkedin: (state) => state.profile?.linkedin || '',
        github: (state) => state.profile?.github || '',
        languages: (state) => state.profile?.languages || {},
        summaryText: (state) => state.summary?.text || '',
        summaryInfographicData: (state) => state.summaryInfographic || {},

        allSkills: (state) => state.skills,
        allExperience: (state) => state.experience,
        allEducation: (state) => state.education,
        allCertifications: (state) => state.certifications,
        allProjects: (state) => state.projects,
        allAchievements: (state) => state.achievements,
        allHobbies: (state) => state.hobbies,
        allSpecializations: (state) => state.specializations,
        thesisData: (state) => state.thesis,
        techHighlightsData: (state) => state.techHighlights,

        // Identity getters
        identityTitle: (state) => state.summaryInfographic?.identity?.title || 'CTO / AI Researcher',
        identitySubtitle: (state) => state.summaryInfographic?.identity?.subtitle || '13+ Years • 5 Countries • 4+ Domains',

        // Stats getter
        statsData: (state) => state.summaryInfographic?.stats || [],

        // Expertise getter
        expertiseData: (state) => state.summaryInfographic?.expertise || [],

        // Domains getter
        domainsData: (state) => state.summaryInfographic?.domains || [],

        // Compliance getter
        complianceData: (state) => state.summaryInfographic?.compliance || [],

        // University getter
        universityData: (state) => state.summaryInfographic?.university || {}
    },

    actions: {
        async fetchAllData() {
            this.loading = true
            this.error = null

            try {
                const base = '/data'
                const [
                    profile, summary, summaryInfographic, techHighlights, skills, experience, education,
                    thesis, specializations, certifications, projects,
                    achievements, hobbies
                ] = await Promise.all([
                    fetch(`${base}/profile.json`).then(r => r.json()),
                    fetch(`${base}/summary.json`).then(r => r.json()),
                    fetch(`${base}/summary-infographic.json`).then(r => r.json()),
                    fetch(`${base}/tech-highlights.json`).then(r => r.json()),
                    fetch(`${base}/skills.json`).then(r => r.json()),
                    fetch(`${base}/experience.json`).then(r => r.json()),
                    fetch(`${base}/education.json`).then(r => r.json()),
                    fetch(`${base}/thesis.json`).then(r => r.json()),
                    fetch(`${base}/specializations.json`).then(r => r.json()),
                    fetch(`${base}/certifications.json`).then(r => r.json()),
                    fetch(`${base}/projects.json`).then(r => r.json()),
                    fetch(`${base}/achievements.json`).then(r => r.json()),
                    fetch(`${base}/hobbies.json`).then(r => r.json())
                ])

                this.profile = profile
                this.summary = summary
                this.summaryInfographic = summaryInfographic
                this.techHighlights = techHighlights
                this.skills = skills
                this.experience = experience
                this.education = education
                this.thesis = thesis
                this.specializations = specializations
                this.certifications = certifications
                this.projects = projects
                this.achievements = achievements
                this.hobbies = hobbies

            } catch (error: any) {
                this.error = error.message
                console.error('Failed to load portfolio data:', error)
            } finally {
                this.loading = false
            }
        }
    }
})
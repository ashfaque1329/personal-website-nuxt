export interface Profile {
    name: string
    title: string
    location: string
    linkedin: string
    github: string
    languages: Record<string, string>
}

export interface Summary {
    text: string
}

export type Skill = string

export interface Experience {
    title: string
    company: string
    location: string
    period: string
    highlights: string[]
}

export interface Education {
    degree: string
    institution: string
    year: string
    gpa?: string
    thesis?: string
}

export interface Thesis {
    title: string
    description: string
    technologies: string[]
    status: string
}

export interface Specialization {
    name: string
    issuer: string
    date: string
    url: string
}

export interface Certification {
    name: string
    issuer: string
    date: string
    url: string
}

export interface Project {
    name: string
    description: string
    tech: string[]
    image?: string
}

export type Achievement = string
export type Hobby = string
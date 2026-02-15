export interface ServicePageMeta {
  title: string
  description: string
  keywords: string
  canonicalUrl: string
  ogImage?: string
}

export interface HeroSection {
  title: string
  subtitle: string
  cta: {
    primary: string
    primaryLink: string
    secondary: string
    secondaryLink: string
  }
  trustBadges: string[]
  heroImage?: string
}

export interface Challenge {
  title: string
  description: string
  icon: string
}

export interface TechnologyCategory {
  category: string
  items: string[]
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon?: string
}

export interface PricingPlan {
  name: string
  price: string
  period?: string
  features: string[]
  popular?: boolean
  cta: string
}

export interface ServiceCaseStudy {
  title: string
  client?: string
  challenge: string
  solution: string
  result: string
  technologies: string[]
  duration?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  company?: string
  rating: number
  text: string
  avatar?: string
  date?: string
}

export interface RelatedService {
  name: string
  link: string
  description?: string
}

export interface FinalCTA {
  heading: string
  description: string
  cta: {
    primary: string
    secondary: string
  }
}

export interface ServicePageDataFull {
  slug: string
  name: string
  meta: ServicePageMeta
  hero: HeroSection
  introduction: string
  challenges: Challenge[]
  technologies: TechnologyCategory[]
  howItWorks: ProcessStep[]
  pricing: PricingPlan[]
  caseStudies: ServiceCaseStudy[]
  faq: FAQItem[]
  testimonials: Testimonial[]
  finalCTA: FinalCTA
  relatedServices: RelatedService[]
}

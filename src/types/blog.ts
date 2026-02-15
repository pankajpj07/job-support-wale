export type BlogCategory = 'guides' | 'how-to' | 'technology' | 'career' | 'company'

export interface BlogPostBlock {
  type: 'p' | 'h2' | 'h3' | 'ul' | 'ol'
  content: string | string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  date: string
  dateModified?: string
  author: string
  authorRole?: string
  image?: string
  readTimeMinutes: number
  body: BlogPostBlock[]
}

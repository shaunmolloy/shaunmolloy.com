export type PostFrontmatter = {
  title: string
  date?: string
}

export type PostEntry = {
  slug: string
  title: string
  date?: string
  description: string
  content: string
}

export interface Project {
  title: string
  description: string
  meta?: 'Personal' | 'Open Source' | 'Case Study'
}

export interface Link {
  label: string
  href: string
}

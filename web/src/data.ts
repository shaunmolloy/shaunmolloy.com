import { type Project, type Link, type PostEntry, type PostFrontmatter } from './types'

export const projects: Project[] = [
  {
    title: 'Check back shortly...',
    description: '',
  },
]

export const links: Link[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shaunmolloy' },
  { label: 'GitHub', href: 'https://github.com/shaunmolloy' },
]

const postModules = import.meta.glob<string>('@content/post/*.md', {
  eager: true,
  as: 'raw'
})

const parseFrontmatter = (content: string): PostFrontmatter => {
  const frontmatterMatch = content.match(/^---\s*([\s\S]*?)\s*---/)
  if (!frontmatterMatch) {
    return { title: 'Untitled' }
  }

  const titleMatch = frontmatterMatch[1].match(/title:\s*['"]?(.+?)['"]?\s*$/m)
  return {
    title: titleMatch?.[1]?.trim() ?? 'Untitled',
  }
}

const stripFrontmatter = (content: string) =>
  content.replace(/^---\s*[\s\S]*?\s*---\s*/m, '')

export const posts: PostEntry[] = Object.entries(postModules).map(([path, content]) => {
  const frontmatter = parseFrontmatter(content)
  const slug = path.split('/').pop()?.replace(/\.md[x]?$/, '') ?? ''

  return {
    slug,
    title: frontmatter.title,
    description: '',
    content: stripFrontmatter(content).trim(),
  }
})

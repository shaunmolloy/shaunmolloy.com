import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import * as Separator from '@radix-ui/react-separator'
import './App.css'

interface Post {
  title: string
  description: string
  meta?: string // 'Jan 17 · 5 min read'
}

interface Project {
  title: string
  description: string
  meta?: 'Personal' | 'Open Source' | 'Case Study'
}

interface Link {
  label: string
  href: string
}

const posts: Post[] = [
  {
    title: 'Check back shortly...',
    description: '',
  },
]

const projects: Project[] = [
  {
    title: 'Check back shortly...',
    description: '',
  },
]

const links: Link[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shaunmolloy' },
  { label: 'GitHub', href: 'https://github.com/shaunmolloy' },
]

function Hero() {
  return (
    <header className="hero">
      <h1>Shaun Molloy</h1>
      <p className="lead">
        Software Engineer based in Manchester, leading teams and building scalable products.
      </p>
      <div className="hero-actions">
        <div className="hero-actions-links hero-actions-left">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener">
              {link.label}
              <ArrowTopRightIcon aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

function Posts() {
  return (
    <section className="section section--thin">
      <div className="section-header">
        <h2>Posts</h2>
        {/*
        <a className="muted-link" href="#">
          All posts <ArrowTopRightIcon aria-hidden="true" />
        </a>
        */}
      </div>
      <div className="list">
        {posts.map((post) => (
          <article key={post.title} className="list-item">
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
            <span className="meta">{post.meta}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
function Projects() {
  return (
    <section className="section section--thin">
      <div className="section-header">
        <h2>Projects</h2>
        {/*
        <a className="muted-link" href="#">
          View all <ArrowTopRightIcon aria-hidden="true" />
        </a>
        */}
      </div>
      <div className="list">
        {projects.map((project) => (
          <article key={project.title} className="list-item">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <span className="meta">{project.meta}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="page">
      <Hero />
      <main className="content">
        <Posts />
        <Separator.Root className="separator" />
        <Projects />
      </main>
    </div>
  )
}

export default App

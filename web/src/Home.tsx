import { Link } from 'react-router-dom'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import * as Separator from '@radix-ui/react-separator'
import { formatPostDate } from './utils'
import { links, posts, projects } from './data'

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
        {posts.map((post) => {
          const postDate = formatPostDate(post.date)

          return (
            <article key={post.slug} className="list-item">
              <div>
                <h3>
                  <Link to={`/posts/${post.slug}`}>
                    {post.title} <ArrowTopRightIcon aria-hidden="true" />
                  </Link>
                </h3>
                <p>{post.description}</p>
              </div>
              {postDate ? <span className="meta">{postDate}</span> : null}
            </article>
          )
        })}
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

function Home() {
  return (
    <>
      <Hero />
      <Posts />
      <Separator.Root className="separator" />
      <Projects />
    </>
  )
}

export default Home

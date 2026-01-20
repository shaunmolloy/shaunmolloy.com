import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { posts } from './data'
import { formatPostDate } from './utils'
import './Post.css'

function Post() {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)
  const postDate = formatPostDate(post?.date)

  useEffect(() => {
    if (!post) return
    document.title = `${post.title} - Shaun Molloy`
  }, [post])

  if (!post) {
    return (
      <section className="section section--thin">
        <h1>Post not found</h1>
        <p>Check back soon for more writing.</p>
        <Link className="muted-link" to="/">
          Back to home
        </Link>
      </section>
    )
  }

  return (
    <section className="section section--thin">
      <div className="post-header">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link className="muted-link" to="/">
            Home
          </Link>
          <span className="breadcrumbs-separator" aria-hidden="true">
            /
          </span>
          <span className="breadcrumbs-current">Posts</span>
        </nav>
        <div className="post-title">
          <h1>{post.title}</h1>
          {postDate ? <p className="meta">{postDate}</p> : null}
        </div>
      </div>
      <div className="post-body">
        {post.content.split(/\n\s*\n/).map((paragraph, index) => (
          <p key={`${post.slug}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default Post

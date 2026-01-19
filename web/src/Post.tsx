import { Link, useParams } from 'react-router-dom'
import { posts } from './data'

function Post() {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)

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
      <div className="section-header">
        <h1>{post.title}</h1>
        <Link className="muted-link" to="/">
          Back to home
        </Link>
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

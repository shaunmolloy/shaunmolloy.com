import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    document.title = `Not found - Shaun Molloy`
  }, [])

  return (
    <section className="section section--thin">
      <div className="post-header">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link className="muted-link" to="/">
            Home
          </Link>
        </nav>
        <div className="post-title">
          <h1>Not found</h1>
        </div>
      </div>
      <div className="post-body">
        <p>Whoops! The page you're looking for doesn't exist.</p>
      </div>
    </section>
  )
}

export default NotFound

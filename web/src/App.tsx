import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Post from './Post'
import NotFound from './NotFound'
import './App.css'

function App() {
  return (
    <div className="page">
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

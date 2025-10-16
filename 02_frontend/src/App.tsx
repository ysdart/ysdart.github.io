import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>ここはホーム画面です。</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>このアプリの説明ページです。</p>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>お問い合わせページです。</p>
    </div>
  )
}

function Forbidden() {
  return (
    <div>
      <h2>403 Forbidden</h2>
      <p>このページへアクセスする権限がありません。</p>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>ページが見つかりませんでした。</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/forbidden">403</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/forbidden">403</Link>
    </nav>
  )
}

export default Navbar



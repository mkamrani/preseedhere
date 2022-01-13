import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>PreSeedHere</h1>
      <div className="links">
        <Link to="/beta">Beta</Link>
        <Link to="/ready">Ready</Link>
        <Link to="/investors">Investors</Link>
        <Link to="/news">News</Link>
        <Link to="/changelog">Changelog</Link>
      </div>
    </nav>
  )
}

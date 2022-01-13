import React from 'react'
import Navbar from './Navbar'
import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>Copyright 2022 preseedhere.com</p>
      </footer>
    </div>
  )
}

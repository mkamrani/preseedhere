import React, { useState } from 'react'
import Navbar from './Navbar'
import './layout.css';
import Footer from './Footer';

export default function Layout({ children }) {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false)

  const toggleLoginMenu = () => {
    setIsLoginMenuOpen(!isLoginMenuOpen)
  }

  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

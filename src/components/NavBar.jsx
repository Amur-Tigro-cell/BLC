import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`topnav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="topnav__logo">
        <img 
          src="/Logo.jpeg" 
          alt="BAIUST Language Club Logo" 
          className="logo-image"
          loading="lazy"
        />
        <div className="logo-text">
          <span className="logo-title">BAIUST Language Club</span>
          <span className="logo-sub">Voice. Clarity. Community.</span>
        </div>
      </div>

      <div className={`topnav__links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#events" onClick={closeMenu}>Events</a>
        <a href="#team" onClick={closeMenu}>Team</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <a className="button primary small desktop-join" href="#contact">
        Join us
      </a>

      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  )
}

export default NavBar

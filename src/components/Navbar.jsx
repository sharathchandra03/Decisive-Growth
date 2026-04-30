import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import './Navbar.css'
import logoImg from '../assets/logo.png'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="navbar__container container">
        <a href="#" className="navbar__logo" id="navbar-logo">
          <img src={logoImg} alt="Decisive Growth Co." />
          <span className="navbar__brand">Decisive</span>
        </a>

        <nav className="navbar__nav hide-mobile" id="navbar-nav">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="navbar__link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="navbar__actions">
          <motion.a
            href="#contact"
            className="btn btn--primary navbar__cta hide-mobile"
            id="navbar-cta"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Let's Talk
            <span className="btn__arrow">→</span>
          </motion.a>

          <button
            className="navbar__hamburger hide-desktop"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="navbar-hamburger"
          >
            <span className={`navbar__hamburger-line ${mobileOpen ? 'open' : ''}`} />
            <span className={`navbar__hamburger-line ${mobileOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          className="navbar__mobile"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary" onClick={() => setMobileOpen(false)}>
            Let's Talk <span className="btn__arrow">→</span>
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}

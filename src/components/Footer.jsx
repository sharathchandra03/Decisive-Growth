import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Footer.css'
import logoImg from '../assets/logo.png'

const serviceLinks = {
  'Executive Search': [
    'Executive Search Firm',
    'C-Suite Executive Search',
    'Board Search',
    'Leadership Hiring',
  ],
  'Leadership & Advisory': [
    'Executive Coaching',
    'Leadership Assessment',
    'Leadership Development',
    'Performance Management',
    'Business Strategy',
  ],
  'Resources': [
    'Blogs',
    'Case Studies',
    'About Us',
    'Contact',
  ],
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const socialLinks = [
  { label: 'LinkedIn', icon: LinkedInIcon, href: '#' },
  { label: 'YouTube', icon: YouTubeIcon, href: '#' },
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer className="footer" ref={ref}>
      <div className="footer__container container">
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logoImg} alt="Decisive Growth Co." width="32" height="32" loading="lazy" />
              <span>Decisive</span>
            </div>
            <p className="footer__tagline">
              Decisive Growth Co. is a prominent player in Business Transformation,
              delivering tailored interventions in Organisational Culture, Climate,
              and Leadership Capability.
            </p>
            <div className="footer__social">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} className="footer__social-link" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(serviceLinks).map(([category, links]) => (
            <div key={category} className="footer__column">
              <h5 className="footer__column-title">{category}</h5>
              <ul className="footer__list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © {new Date().getFullYear()} Decisive Growth Co. All Rights Reserved.
          </span>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

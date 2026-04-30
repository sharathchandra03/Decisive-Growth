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
              <img src={logoImg} alt="Decisive Growth Co." />
              <span>Decisive</span>
            </div>
            <p className="footer__tagline">
              Decisive Growth Co. is a prominent player in Business Transformation,
              delivering tailored interventions in Organisational Culture, Climate,
              and Leadership Capability.
            </p>
            <div className="footer__social">
              {['LinkedIn', 'YouTube', 'Instagram'].map((platform) => (
                <a key={platform} href="#" className="footer__social-link" aria-label={platform}>
                  {platform}
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

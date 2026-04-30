import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FloatingPaths } from './ui/background-paths'
import './CTA.css'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="cta overflow-hidden relative" id="contact" ref={ref}>
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="cta__container container relative z-10">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="cta__title">
            Every Transformation<br />
            Starts With A
          </h2>

          <p className="cta__subtitle">
            Share where your organization is today,
            and we'll help you see what it can become.
          </p>

          <div className="cta__actions">
            <a href="mailto:contact@decisivegrowth.co" className="btn btn--primary btn--lg" id="cta-main">
              Get Consultation
              <span className="btn__arrow">→</span>
            </a>
          </div>

          <div className="cta__contact-info">
            <div className="cta__contact-item">
              <span className="cta__contact-label">India</span>
              <a href="tel:+919902092244" className="cta__contact-value">+91 99020 92244</a>
            </div>
            <div className="cta__contact-divider" />
            <div className="cta__contact-item">
              <span className="cta__contact-label">UAE</span>
              <a href="tel:+971528311903" className="cta__contact-value">+971 528311903</a>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="cta__deco-circle cta__deco-circle--1" />
        <div className="cta__deco-circle cta__deco-circle--2" />
      </div>
    </section>
  )
}

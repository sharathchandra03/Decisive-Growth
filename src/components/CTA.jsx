import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './CTA.css'

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63 2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.37a16 16 0 006.72 6.72l1.26-1.26a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="cta overflow-hidden relative" id="contact" ref={ref}>
      <div className="cta__container container relative z-10">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta__label section-label">Start the Journey</div>

          <h2 className="cta__title">
            Every Transformation<br />
            Starts With A{' '}
            <span className="cta__title-accent">Conversation</span>
          </h2>

          <p className="cta__subtitle">
            Share where your organization is today,
            and we'll help you see what it can become.
          </p>

          <div className="cta__actions">
            <a href="mailto:contact@decisivegrowth.co" className="btn btn--primary btn--lg" id="cta-main">
              Get Your Free Consultation
              <span className="btn__arrow">→</span>
            </a>
          </div>

          <p className="cta__trust-line">
            No commitment. Just an honest conversation about your growth.
          </p>

          <div className="cta__contact-info">
            <div className="cta__contact-item">
              <span className="cta__contact-label">India</span>
              <a href="tel:+919902092244" className="cta__contact-value">
                <PhoneIcon />
                +91 99020 92244
              </a>
            </div>
            <div className="cta__contact-divider" aria-hidden="true" />
            <div className="cta__contact-item">
              <span className="cta__contact-label">UAE</span>
              <a href="tel:+971528311903" className="cta__contact-value">
                <PhoneIcon />
                +971 528311903
              </a>
            </div>
          </div>
        </motion.div>

        <div className="cta__deco-circle cta__deco-circle--1" aria-hidden="true" />
        <div className="cta__deco-circle cta__deco-circle--2" aria-hidden="true" />
      </div>
    </section>
  )
}

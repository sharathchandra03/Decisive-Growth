import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlowCard } from './ui/spotlight-card'
import './CaseStudies.css'

const cases = [
  { title: 'Performance-Driven, Customer-Centric Airport Culture', tag: 'Aviation' },
  { title: 'Transforming Back Office to GCC', tag: 'Technology' },
  { title: 'Building India\'s Largest Airport Business Fast', tag: 'Infrastructure' },
  { title: 'Building High-Performing Global Capability Center', tag: 'GCC' },
  { title: 'Preparing Fashion Brand for IPO', tag: 'Fashion' },
  { title: 'Transforming FinTech Leadership for Profitability', tag: 'FinTech' },
]

export default function CaseStudies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="cases" id="case-studies" ref={ref}>
      <div className="cases__container container">
        <motion.div
          className="cases__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">Business Transformations</div>
          <h2>Business Growth<br />We Have Enabled</h2>
          <p>
            Snapshots of collaborations where clarity, aligned leadership and
            disciplined execution turned ambition into sustained growth.
          </p>
        </motion.div>

        <div className="cases__grid">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
              className="h-full"
            >
              <GlowCard customSize glowColor="orange" className="h-full !p-0">
                <a 
                  href="#" 
                  className="cases__card" 
                  style={{ height: '100%', margin: 0, background: 'rgba(255,255,255,0.03)', border: 'none', boxShadow: 'none' }}
                >
                  <div className="cases__card-top">
                    <span className="cases__tag">{c.tag}</span>
                    <span className="cases__arrow">↗</span>
                  </div>
                  <h4 className="cases__card-title">{c.title}</h4>
                  <span className="cases__card-link">Read Case Study</span>
                </a>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cases__footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="#" className="btn btn--outline" id="cases-view-all">
            View All Case Studies
            <span className="btn__arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

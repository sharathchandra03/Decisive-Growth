import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Stats.css'

const stats = [
  { value: 'Proven Frameworks', type: 'text' },
  { value: '·', type: 'dot' },
  { value: 'Industry Expertise', type: 'text' },
  { value: '·', type: 'dot' },
  { value: 'Lasting Results', type: 'text' },
  { value: '·', type: 'dot' },
  { value: '10+ Years', type: 'text' },
  { value: '·', type: 'dot' },
  { value: '60+ Clients', type: 'text' },
  { value: '·', type: 'dot' },
  { value: '250+ CXOs', type: 'text' },
  { value: '·', type: 'dot' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="stats" ref={ref}>
      <motion.div
        className="stats__ticker"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="stats__track">
          {[...stats, ...stats].map((item, i) => (
            <span
              key={i}
              className={`stats__item ${item.type === 'dot' ? 'stats__item--dot' : ''}`}
            >
              {item.value}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="container">
        <motion.p
          className="stats__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Business Transformation is not an event or activity. It is an intentional multi-year
          journey with a final destination and well defined milestones. We're here to partner
          with you at every step.
        </motion.p>
      </div>
    </section>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Challenges.css'

const challenges = [
  {
    num: '01',
    title: 'Execution Lags',
    desc: 'Living in past glory, unable to reimagine the future. Plans & projects move slowly, teams lack alignment, and results depend on constant follow-up.'
  },
  {
    num: '02',
    title: 'Leadership Instability',
    desc: 'Churn in senior talent, new hires struggle & leave. Work is a constant hustle and capability gaps don\'t allow growth momentum to gather.'
  },
  {
    num: '03',
    title: 'Cultural Friction',
    desc: 'Legacy behaviours, resistance to change, unwilling to learn/unlearn. Siloed teams hinder collaboration and performance.'
  },
  {
    num: '04',
    title: 'Weak Accountability',
    desc: 'Reviews lack rigor, decisions lose traction. Reasons score over results, misaligned priorities and inconsistent progress across functions.'
  },
  {
    num: '05',
    title: 'Capability Gaps',
    desc: 'Business growth is outpacing capability growth in leaders. Loyalty and past credibility score over potential and promise.'
  },
  {
    num: '06',
    title: 'Founder Dependency',
    desc: 'The business still relies too much on you for vision, strategy and direction — limiting scale, speed, and sustainability.'
  },
]

export default function Challenges() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(null)

  return (
    <section className="challenges" ref={ref}>
      <div className="challenges__container container">
        <motion.div
          className="challenges__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">Sound Familiar?</div>
          <h2>Your Company Isn't Living<br />Up to Its Potential</h2>
          <p className="challenges__subtitle">
            Your business can lead growth, capture mindspace with fresh ideas,
            and manifest ambitious goals — but only when your team reimagines the future as you do.
          </p>
        </motion.div>
        <div className="challenges__grid">
          {challenges.map((item, i) => (
            <motion.div
              key={item.num}
              className={`challenges__item ${active === i ? 'challenges__item--active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="challenges__num">{item.num}</span>
              <div>
                <h4 className="challenges__title">{item.title}</h4>
                <p className="challenges__desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

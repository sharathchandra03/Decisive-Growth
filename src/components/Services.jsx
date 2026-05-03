import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Services.css'

const services = [
  {
    id: 'lace',
    badge: 'Flagship Framework',
    title: 'LACE',
    subtitle: 'Leadership Accelerated Capability Enhancement',
    desc: 'We develop and renew the leadership presence, maturity, capability, and culture in your organization enabling it to perform consistently and scale with confidence.',
    detail: 'LACE is a holistic organisation development and change framework that addresses every aspect of the people and capability lifecycle. A ground tested, proven practitioners framework from 10 years of real transformation experience across varied industries.',
    fractional: 'Also offered as a fractional service in a 3×3×3 model.',
    flagship: true,
  },
  {
    id: 'sat',
    badge: '01',
    title: 'SAT',
    subtitle: 'Leadership Search, Assessment & Transition',
    desc: 'We help you search & select the right leaders, assess their job & cultural fit, and ensure they transition smoothly into your organization to deliver impact from year one.',
  },
  {
    id: 'vsa',
    badge: '02',
    title: 'VSA',
    subtitle: 'Vision, Strategy & Alignment',
    desc: 'We align your leadership team around a shared vision, an actionable strategy, co-create and implement an execution roadmap, to ensure predictability in results.',
  },
  {
    id: 'dr2p',
    badge: '03',
    title: 'DR²P',
    subtitle: 'Development, Review, Reward & Pivot',
    desc: 'We design and implement a disciplined system for leadership development, business reviews, rewards, and facilitate tough pivots so excellence becomes a habit, not a push.',
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState('lace')

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services__container container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">Our Services</div>
          <h2>Here's How We<br />Help You Transform</h2>
          <p>
            Proven frameworks, contextual strategy, partnership in execution
            and shared accountability to turn your aspirations into real results.
          </p>
        </motion.div>

        <div className="services__list">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className={`services__card ${service.flagship ? 'services__card--flagship' : ''} ${expanded === service.id ? 'services__card--expanded' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 }}
              onClick={() => setExpanded(expanded === service.id ? null : service.id)}
            >
              <div className="services__card-header">
                <div className="services__card-left">
                  <span className="services__badge">{service.badge}</span>
                  <div>
                    <h3 className="services__card-title">{service.title}</h3>
                    <p className="services__card-subtitle">{service.subtitle}</p>
                  </div>
                </div>
                <span className="services__toggle">
                  <ChevronIcon open={expanded === service.id} />
                </span>
              </div>

              <motion.div
                className="services__card-body"
                initial={false}
                animate={{
                  height: expanded === service.id ? 'auto' : 0,
                  opacity: expanded === service.id ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <p className="services__card-desc">{service.desc}</p>
                {service.detail && (
                  <p className="services__card-detail">{service.detail}</p>
                )}
                {service.fractional && (
                  <span className="services__fractional">{service.fractional}</span>
                )}
                <a href="#contact" className={`btn services__card-link ${service.flagship ? 'btn--outline-light' : 'btn--ghost'}`}>
                  Know More <span className="btn__arrow">→</span>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

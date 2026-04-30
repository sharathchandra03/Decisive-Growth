import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }
  })

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__container container">
        <div className="about__text">
          <motion.div className="section-label" {...fadeUp(0)}>
            The Decisive Promise
          </motion.div>

          <motion.h2 {...fadeUp(0.1)}>
            Your Visionary<br />Growth Partner
          </motion.h2>

          <motion.div className="about__intro" {...fadeUp(0.2)}>
            <p className="about__lead">
              I'm Vishwa, the Founder & CEO of Decisive Growth Co.
            </p>
            <div className="about__credentials">
              <span className="about__credential">10+ years of transformation experience</span>
              <span className="about__credential">Coached 250+ CXOs</span>
              <span className="about__credential">5000+ hours of coaching</span>
            </div>
          </motion.div>

          <motion.p {...fadeUp(0.3)}>
            We have been working with Founders and CEOs of small and medium businesses
            for more than 10 years, enabling them achieve 5X–10X growth by reengineering
            their leadership capability, culture and people/business processes.
          </motion.p>

          <motion.p {...fadeUp(0.4)}>
            Our focus is on maximising business value from human capital and process
            re-engineering. Over the years, we've built and refined different proven
            frameworks for the most critical organizational problems.
          </motion.p>

          <motion.div {...fadeUp(0.5)}>
            <a href="#contact" className="btn btn--outline" id="about-cta">
              Get Consultation
              <span className="btn__arrow">→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className="about__card-stack">
            <div className="about__card-layer about__card-layer--1" />
            <div className="about__card-layer about__card-layer--2" />
            <div className="about__card-main">
              <div className="about__equation">
                <span className="about__eq-term">Culture</span>
                <span className="about__eq-op">+</span>
                <span className="about__eq-term">Capability</span>
                <span className="about__eq-op">=</span>
                <span className="about__eq-result">Business Transformation</span>
              </div>
              <p className="about__card-text">
                Real transformation happens when culture and capability evolve together.
                The mindsets, behaviours, and ways of working must align with
                the skills, knowledge and leadership maturity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

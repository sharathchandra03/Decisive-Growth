import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './Hero.css'
import vishwaImg from '../assets/vishwa.png'

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function Hero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.12 }
    })
  }

  const titleLine1 = "Transformation".split(" ")
  const titleLine2 = "Architect".split(" ")

  const wordVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="hero" ref={ref} id="hero">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="hero__container container">
        <motion.div className="hero__content" style={{ y: textY }}>
          <motion.div
            className="hero__rating"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="hero__stars" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </span>
            <span className="score">4.9/5</span>
            <span className="hero__rating-label">Client Satisfaction</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.3 }}
          >
            <div style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}>
              {titleLine1.map((word, i) => (
                <motion.span key={`l1-${i}`} variants={wordVariants} style={{ display: "inline-block" }}>
                  {word}
                </motion.span>
              ))}
            </div>
            <div style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}>
              {titleLine2.map((word, i) => (
                <motion.span key={`l2-${i}`} variants={wordVariants} style={{ display: "inline-block" }}>
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            I'm Vishwa, your Business Transformation partner helping organizations execute strategy by reengineering leadership capability & culture to deliver year after year.
          </motion.p>

          <motion.div
            className="hero__actions"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a href="#contact" className="btn btn--primary" id="hero-cta" data-cursor="hover">
              Let's Discuss What's Possible
              <span className="btn__arrow">→</span>
            </a>
            <a href="#case-studies" className="btn btn--ghost" id="hero-cases" data-cursor="hover">
              View Case Studies
            </a>
          </motion.div>

          <motion.div
            className="hero__trust"
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="hero__trust-item">
              <span className="hero__trust-number">10+</span>
              <span className="hero__trust-label">Years Experience</span>
            </div>
            <div className="hero__trust-divider" aria-hidden="true" />
            <div className="hero__trust-item">
              <span className="hero__trust-number">60+</span>
              <span className="hero__trust-label">Clients Served</span>
            </div>
            <div className="hero__trust-divider" aria-hidden="true" />
            <div className="hero__trust-item">
              <span className="hero__trust-number">250+</span>
              <span className="hero__trust-label">CXOs Coached</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-wrapper"
          style={{ y: imageY, scale: imageScale }}
        >
          <motion.div
            className="hero__image-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <img
              src={vishwaImg}
              alt="Vishwa — Founder & CEO, Decisive Growth Co."
              className="hero__image"
              width="500"
              height="600"
              loading="eager"
            />
            <div className="hero__image-badge">
              <span className="hero__badge-line">5000+</span>
              <span className="hero__badge-sub">Coaching Hours</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

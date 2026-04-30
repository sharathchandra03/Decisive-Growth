import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Planet Ganges was crucial as a strategic consultant. Their strategic insights helped us develop a clear, actionable plan… speed up our project\'s progress.',
    name: 'Kameshwari Rao',
    role: 'CEO, Publicis Sapient',
  },
  {
    quote: 'Meaningfully helped break down barriers between teams, helped collaborate on common themes and pushed them to think and question status quo… blend theory with vast experience.',
    name: 'Shantanu Mitra',
    role: 'Bajaj Finserv',
  },
  {
    quote: 'We were particularly impressed to see the depth of knowledge… the extra mile to understand the organisational dynamics… feedback from our leadership team has been very positive.',
    name: 'Vidya Bhaskar',
    role: 'Danske IT',
  },
  {
    quote: 'I found the team responsive, perceptive, and very astute… a reflective, safe zone and helpful Coach. They have added value to our developmental journey.',
    name: 'Rohini Seth',
    role: 'Diageo',
  },
  {
    quote: 'Their consultants bring the maturity and tenacity to work with senior leaders… a high level of professionalism combined with the required flexibility makes them a reliable partner.',
    name: 'Harpreet Sandhu',
    role: 'IMGC',
  },
  {
    quote: 'The results were clearly evident by the end of the program… very professional, partners with the client to ensure success… clearly evident measurable results.',
    name: 'Vinod Vargheese',
    role: 'Alstom',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials__container container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">Testimonials</div>
          <h2>Hear It From<br />Other Leaders</h2>
        </motion.div>

        <motion.div
          className="testimonials__slider"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="testimonials__quote-mark">"</div>

          <motion.div
            key={active}
            className="testimonials__content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="testimonials__quote">
              {testimonials[active].quote}
            </blockquote>
            <div className="testimonials__author">
              <div className="testimonials__avatar">
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <span className="testimonials__name">{testimonials[active].name}</span>
                <span className="testimonials__role">{testimonials[active].role}</span>
              </div>
            </div>
          </motion.div>

          <div className="testimonials__controls">
            <button className="testimonials__btn" onClick={prev} aria-label="Previous" id="testimonial-prev">
              ←
            </button>
            <span className="testimonials__counter">
              {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <button className="testimonials__btn" onClick={next} aria-label="Next" id="testimonial-next">
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

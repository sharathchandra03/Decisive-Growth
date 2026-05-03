import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Planet Ganges was crucial as a strategic consultant. Their strategic insights helped us develop a clear, actionable plan… speed up our project\'s progress.',
    name: 'Kameshwari Rao',
    role: 'CEO',
    company: 'Publicis Sapient',
    rating: 5,
  },
  {
    quote: 'Meaningfully helped break down barriers between teams, helped collaborate on common themes and pushed them to think and question status quo… blend theory with vast experience.',
    name: 'Shantanu Mitra',
    role: 'Senior Leader',
    company: 'Bajaj Finserv',
    rating: 5,
  },
  {
    quote: 'We were particularly impressed to see the depth of knowledge… the extra mile to understand the organisational dynamics… feedback from our leadership team has been very positive.',
    name: 'Vidya Bhaskar',
    role: 'Leadership Head',
    company: 'Danske IT',
    rating: 5,
  },
  {
    quote: 'I found the team responsive, perceptive, and very astute… a reflective, safe zone and helpful Coach. They have added value to our developmental journey.',
    name: 'Rohini Seth',
    role: 'Senior Executive',
    company: 'Diageo',
    rating: 5,
  },
  {
    quote: 'Their consultants bring the maturity and tenacity to work with senior leaders… a high level of professionalism combined with the required flexibility makes them a reliable partner.',
    name: 'Harpreet Sandhu',
    role: 'Leadership Director',
    company: 'IMGC',
    rating: 5,
  },
  {
    quote: 'The results were clearly evident by the end of the program… very professional, partners with the client to ensure success… clearly evident measurable results.',
    name: 'Vinod Vargheese',
    role: 'Operations Head',
    company: 'Alstom',
    rating: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="testimonials__stars" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[active]
  const initials = t.name.split(' ').map(n => n[0]).join('')

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
          <div className="testimonials__quote-mark" aria-hidden="true">"</div>

          <motion.div
            key={active}
            className="testimonials__content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <StarRating count={t.rating} />

            <blockquote className="testimonials__quote">
              {t.quote}
            </blockquote>

            <div className="testimonials__author">
              <div className="testimonials__avatar" aria-hidden="true">
                {initials}
              </div>
              <div>
                <span className="testimonials__name">{t.name}</span>
                <span className="testimonials__role">{t.role}, {t.company}</span>
              </div>
            </div>
          </motion.div>

          <div className="testimonials__controls">
            <button
              className="testimonials__btn"
              onClick={prev}
              aria-label="Previous testimonial"
              id="testimonial-prev"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span className="testimonials__counter" aria-label={`Testimonial ${active + 1} of ${testimonials.length}`}>
              {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <button
              className="testimonials__btn"
              onClick={next}
              aria-label="Next testimonial"
              id="testimonial-next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="testimonials__dots" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                role="tab"
                aria-selected={i === active}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

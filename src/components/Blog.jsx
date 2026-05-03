import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Blog.css'

const posts = [
  {
    title: 'When to Hire an Executive Search Firm vs Recruit Internally',
    category: 'Executive Search',
    date: 'April 27, 2026',
    readTime: '6 min read',
  },
  {
    title: 'How to Improve Leadership Accountability in Your Organisation',
    category: 'Leadership & Management',
    date: 'April 27, 2026',
    readTime: '8 min read',
  },
  {
    title: 'How to Choose a Strategy Consulting Firm in India That Actually Delivers',
    category: 'Business Transformation',
    date: 'April 13, 2026',
    readTime: '7 min read',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="blog" id="blog" ref={ref}>
      <div className="blog__container container">
        <motion.div
          className="blog__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">Insights</div>
          <h2>Ideas To Grow<br />Beyond You</h2>
          <p>
            Thought provoking ideas, experience based learnings, and practical
            guides to help your business perform without constant founder push.
          </p>
        </motion.div>

        <div className="blog__grid">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="#"
              className="blog__card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 }}
            >
              <div className="blog__card-top">
                <span className="blog__category">{post.category}</span>
                <span className="blog__read-time">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
              <h4 className="blog__card-title">{post.title}</h4>
              <div className="blog__card-footer">
                <span className="blog__date">{post.date}</span>
                <span className="blog__read-more">
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Challenges from './components/Challenges'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Lenis from 'lenis'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      // enable touch smoothing for a more fluid feel on touch devices
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    })

    let rafId

    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      clearTimeout(timer)
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Cursor />
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Challenges />
          <Services />
          <CaseStudies />
          <Testimonials />
          <Blog />
          <CTA />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}

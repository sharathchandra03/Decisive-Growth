import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import './Cursor.css'

export default function Cursor() {
  const cursorX = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 })
  const cursorY = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      if (
        e.target.closest('a') || 
        e.target.closest('button') || 
        e.target.closest('[data-cursor="hover"]')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        scale: isHovered ? 2 : 1,
        opacity: isHovered ? 0.6 : 1,
        backgroundColor: isHovered ? 'transparent' : 'var(--accent-warm)',
        border: isHovered ? '1px solid var(--accent-warm)' : 'none',
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
    />
  )
}

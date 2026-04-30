import { motion } from 'framer-motion'
import './Loader.css'
import logoImg from '../assets/logo.png'

export default function Loader() {
  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="loader__inner">
        <motion.div
          className="loader__logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={logoImg} alt="Decisive" />
        </motion.div>
        <motion.div
          className="loader__bar-track"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.div
            className="loader__bar-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

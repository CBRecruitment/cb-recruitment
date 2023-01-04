import React from 'react'
import {motion} from "framer-motion"

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ")
  
  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.1, delayChildren: 0.04 * i}
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y:0,
      transition: {
        type:"spring",
        damping:12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: -300,
      transition: {
        type:"spring",
        damping:12,
        stiffness: 100,
        
      }
    }
  }

    return (
    <motion.div style={{overflow: "hidden", display: "flex"}} variants={container} initial="hidden" animate="visible">
      {words.map((word, idx) => (
        <motion.span variants={child} className="font-semibold mobile-font min-[400px]:text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white" key={idx}>
          {word}
        </motion.span>))}
    </motion.div>
    
  )
}

export default AnimatedTextWord
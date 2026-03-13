'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function StainedGlassBackground() {
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const disableAnimation = shouldReduceMotion || isMobile
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
      
      {/* Stained glass ambient glow - top left */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vh] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.45 0.18 25 / 0.4), transparent 70%)',
        }}
        animate={disableAnimation ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Stained glass ambient glow - top right */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[50vw] h-[50vh] rounded-full opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.35 0.12 250 / 0.5), transparent 70%)',
        }}
        animate={disableAnimation ? {} : {
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      {/* Golden ambient light - center */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] rounded-full opacity-10 blur-[150px]"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.75 0.14 80 / 0.3), transparent 60%)',
        }}
        animate={disableAnimation ? {} : {
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      {/* Subtle amber glow - bottom */}
      <motion.div
        className="absolute -bottom-1/4 left-1/3 w-[40vw] h-[40vh] rounded-full opacity-10 blur-[100px]"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.65 0.15 70 / 0.4), transparent 70%)',
        }}
        animate={disableAnimation ? {} : {
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.12, 0.08],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />
      
      {/* Stained glass pattern overlay - Desabilitado no mobile */}
      {!isMobile && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cathedral-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 10 Q50 50 20 80 L80 80 Q50 50 50 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
              <circle cx="50" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary/20" />
              <circle cx="50" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cathedral-pattern)" />
        </svg>
      )}
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, oklch(0.08 0.005 250 / 0.6) 100%)',
        }}
      />
    </div>
  )
}

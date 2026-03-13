'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface DustParticle {
  id: number
  left: string
  top: string
  delay: number
  duration: number
  size: number
}

export function DivineLight() {
  const dustParticles = useMemo<DustParticle[]>(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 8,
      size: 1 + Math.random() * 2,
    }))
  , [])
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary diagonal light beam from top right */}
      <motion.div
        className="absolute -top-20 -right-20 w-150 h-300 origin-top-right"
        style={{
          background: 'linear-gradient(135deg, oklch(0.95 0.08 80 / 0.08) 0%, oklch(0.95 0.08 80 / 0.02) 40%, transparent 70%)',
          transform: 'rotate(-25deg)',
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Secondary light beam */}
      <motion.div
        className="absolute -top-10 right-1/4 w-100 h-225 origin-top"
        style={{
          background: 'linear-gradient(160deg, oklch(0.90 0.10 80 / 0.05) 0%, oklch(0.90 0.10 80 / 0.01) 50%, transparent 80%)',
          transform: 'rotate(-15deg)',
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      {/* Tertiary subtle beam from left */}
      <motion.div
        className="absolute top-0 -left-20 w-75 h-200 origin-top-left"
        style={{
          background: 'linear-gradient(145deg, oklch(0.85 0.06 80 / 0.04) 0%, transparent 60%)',
          transform: 'rotate(20deg)',
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
      
      {/* Central radial glow */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-150"
        style={{
          background: 'radial-gradient(ellipse at center top, oklch(0.95 0.08 80 / 0.06) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating dust particles */}
      {dustParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, -60, -20],
            x: [-10, 10, -10],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

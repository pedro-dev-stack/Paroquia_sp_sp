'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
}

export function SectionReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  once = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once, margin: '-50px', amount: 0.2 })
  
  const directionVariants = {
    up: { y: shouldReduceMotion ? 0 : 60 },
    down: { y: shouldReduceMotion ? 0 : -60 },
    left: { x: shouldReduceMotion ? 0 : 60 },
    right: { x: shouldReduceMotion ? 0 : -60 },
    none: { x: 0, y: 0 },
  }
  
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        ...directionVariants[direction],
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
      } : {
        opacity: shouldReduceMotion ? 1 : 0,
        ...directionVariants[direction],
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  as: Component = 'p',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const words = children.split(' ')
  
  return (
    <Component ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Component>
  )
}

interface ImageRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ImageReveal({
  children,
  className = '',
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
      {/* Mask reveal overlay */}
      <motion.div
        className="absolute inset-0 bg-background"
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: 'top' }}
      />
    </div>
  )
}

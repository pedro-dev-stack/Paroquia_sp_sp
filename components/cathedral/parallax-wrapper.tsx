'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface ParallaxWrapperProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export function ParallaxWrapper({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const multiplier = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier])
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.3,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 30}%`])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1])
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y, scale }}
      />
    </div>
  )
}

interface CathedralDepthLayerProps {
  children: ReactNode
  depth: number // 0-1, 0 being furthest back
  className?: string
}

export function CathedralDepthLayer({
  children,
  depth,
  className = '',
}: CathedralDepthLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  // Closer elements (higher depth) move faster
  const speed = (1 - depth) * 100
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        opacity,
        zIndex: Math.floor(depth * 10),
      }}
    >
      {children}
    </motion.div>
  )
}

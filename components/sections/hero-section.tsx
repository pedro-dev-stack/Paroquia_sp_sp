'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { DivineLight } from '@/components/cathedral/divine-light'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Divine light effect */}
      <DivineLight />
      
      {/* Gothic arch decorative frame */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top arch shadow */}
        <div 
          className="absolute top-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to bottom, oklch(0.08 0.005 250 / 0.8), transparent)',
          }}
        />
        
        {/* Side vignettes */}
        <div 
          className="absolute top-0 left-0 bottom-0 w-40"
          style={{
            background: 'linear-gradient(to right, oklch(0.08 0.005 250 / 0.6), transparent)',
          }}
        />
        <div 
          className="absolute top-0 right-0 bottom-0 w-40"
          style={{
            background: 'linear-gradient(to left, oklch(0.08 0.005 250 / 0.6), transparent)',
          }}
        />
      </div>
      
      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ opacity, scale, y }}
      >
        {/* Decorative cross */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg
            className="mx-auto h-16 w-16 text-primary/60"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 5 L50 95 M20 35 L80 35"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="50" cy="35" r="12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="50" cy="35" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
          </svg>
        </motion.div>
        
        {/* Overline */}
        <motion.p
          className="text-sm tracking-[0.4em] uppercase text-primary/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Paróquia
        </motion.p>
        
        {/* Main title */}
        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tight text-foreground mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">São Pedro</span>
          <span className="text-primary/90">&</span>
          <span className="block">São Paulo</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Uma comunidade de fé, esperança e caridade,<br className="hidden sm:block" />
          acolhendo a todos com o amor de Cristo.
        </motion.p>
        
        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="/horarios"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 rounded"
          >
            Horários de Missa
          </a>
          <a
            href="#liturgia"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 rounded"
          >
            Liturgia do Dia
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

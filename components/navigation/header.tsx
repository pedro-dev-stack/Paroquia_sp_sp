'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Cross } from 'lucide-react'

const navigationLinks = [
  { href: '/horarios', label: 'Horários' },
  { href: '/sacramentos', label: 'Sacramentos' },
  { href: '/pastorais', label: 'Pastorais' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/historia', label: 'História' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(18, 18, 22, 0)', 'rgba(18, 18, 22, 0.95)']
  )
  
  const headerBorderOpacity = useTransform(scrollY, [0, 100], [0, 1])
  
  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor: headerBackground,
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-border"
          style={{ opacity: headerBorderOpacity }}
        />
        
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img src=".\logo_preview.png" className='w-20' />
              <div className="hidden sm:block">
                <p className="font-serif text-lg tracking-wide text-foreground">
                  São Pedro e São Paulo
                </p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">
                  Paróquia
                </p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>
      
      {/* Mobile Navigation Overlay */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden"
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navigationLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-3xl text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  )
}

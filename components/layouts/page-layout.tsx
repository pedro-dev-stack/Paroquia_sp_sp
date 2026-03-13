'use client'

import { type ReactNode } from 'react'
import { StainedGlassBackground } from '@/components/cathedral/stained-glass-background'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { WhatsAppButton } from '@/components/navigation/whatsapp-button'
import { SectionReveal } from '@/components/cathedral/section-reveal'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <StainedGlassBackground />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

interface PageHeaderProps {
  overline?: string
  title: string
  description?: string
}

export function PageHeader({ overline, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Light effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at center top, oklch(0.75 0.14 80 / 0.08), transparent 60%)',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center">
          {overline && (
            <p className="text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">
              {overline}
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

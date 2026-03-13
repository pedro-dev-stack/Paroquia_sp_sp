'use client'

import { type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { StainedGlassBackground } from '@/components/cathedral/stained-glass-background'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { SectionReveal } from '@/components/cathedral/section-reveal'

// Lazy load non-critical components
const WhatsAppButton = dynamic(
  () => import('@/components/navigation/whatsapp-button').then(mod => ({ default: mod.WhatsAppButton })),
  { ssr: false }
)

interface Breadcrumb {
  name: string
  url: string
}

interface PageLayoutProps {
  children: ReactNode
  title?: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

export function PageLayout({ children, title, subtitle, breadcrumbs }: PageLayoutProps) {
  return (
    <>
      <StainedGlassBackground />
      <Header />
      <main>
        {(title || breadcrumbs) && (
          <PageHeader
            title={title || ''}
            overline={subtitle}
            breadcrumbs={breadcrumbs}
          />
        )}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-32">
          {children}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

interface PageHeaderProps {
  overline?: string
  title: string
  description?: string
  breadcrumbs?: Breadcrumb[]
}

export function PageHeader({ overline, title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Light effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100"
          style={{
            background: 'radial-gradient(ellipse at center top, oklch(0.75 0.14 80 / 0.08), transparent 60%)',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumbs - SEO + navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {i < breadcrumbs.length - 1 ? (
                    <>
                      <Link
                        href={crumb.url}
                        className="hover:text-primary transition-colors"
                        prefetch={true}
                      >
                        {crumb.name}
                      </Link>
                      <span aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span className="text-foreground" aria-current="page">
                      {crumb.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

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
            <div className="h-px w-16 bg-linear-to-r from-transparent to-primary/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-primary/30" />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

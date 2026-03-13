'use client'

import dynamic from 'next/dynamic'
import { StainedGlassBackground } from '@/components/cathedral/stained-glass-background'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { LazyLoadSection } from '@/components/ui/lazy-load'

// Lazy load heavy sections
const WhatsAppButton = dynamic(
  () => import('@/components/navigation/whatsapp-button').then(mod => ({ default: mod.WhatsAppButton })),
  { ssr: false }
)

const MassScheduleSection = dynamic(
  () => import('@/components/sections/mass-schedule-section').then(mod => ({ default: mod.MassScheduleSection })),
  { loading: () => <div className="min-h-[600px] animate-pulse bg-muted/10" /> }
)

const LiturgySection = dynamic(
  () => import('@/components/sections/liturgy-section').then(mod => ({ default: mod.LiturgySection })),
  { loading: () => <div className="min-h-[800px] animate-pulse bg-muted/10" /> }
)

const CommunitySection = dynamic(
  () => import('@/components/sections/community-section').then(mod => ({ default: mod.CommunitySection })),
  { loading: () => <div className="min-h-[500px] animate-pulse bg-muted/10" /> }
)

const EventsSection = dynamic(
  () => import('@/components/sections/events-section').then(mod => ({ default: mod.EventsSection })),
  { loading: () => <div className="min-h-[600px] animate-pulse bg-muted/10" /> }
)

const TitheSection = dynamic(
  () => import('@/components/sections/tithe-section').then(mod => ({ default: mod.TitheSection })),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-muted/10" /> }
)

export default function HomePage() {
  return (
    <>
      <StainedGlassBackground />
      <Header />
      
      <main>
        {/* Hero - Critical, load immediately */}
        <HeroSection />
        
        {/* Mass Schedule - High priority */}
        <LazyLoadSection threshold={0.1} rootMargin="100px">
          <MassScheduleSection />
        </LazyLoadSection>
        
        {/* Daily Liturgy & Saint of the Day */}
        <LazyLoadSection threshold={0.1} rootMargin="200px">
          <LiturgySection />
        </LazyLoadSection>
        
        {/* Community Life */}
        <LazyLoadSection threshold={0.1} rootMargin="300px">
          <CommunitySection />
        </LazyLoadSection>
        
        {/* Upcoming Events */}
        <LazyLoadSection threshold={0.1} rootMargin="400px">
          <EventsSection />
        </LazyLoadSection>
        
        {/* Tithe & Donations */}
        <LazyLoadSection threshold={0.1} rootMargin="500px">
          <TitheSection />
        </LazyLoadSection>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  )
}

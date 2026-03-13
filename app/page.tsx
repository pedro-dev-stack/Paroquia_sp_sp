'use client'

import { StainedGlassBackground } from '@/components/cathedral/stained-glass-background'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { WhatsAppButton } from '@/components/navigation/whatsapp-button'
import { HeroSection } from '@/components/sections/hero-section'
import { MassScheduleSection } from '@/components/sections/mass-schedule-section'
import { LiturgySection } from '@/components/sections/liturgy-section'
import { CommunitySection } from '@/components/sections/community-section'
import { EventsSection } from '@/components/sections/events-section'
import { TitheSection } from '@/components/sections/tithe-section'

export default function HomePage() {
  return (
    <>
      <StainedGlassBackground />
      <Header />
      
      <main>
        {/* Hero - Cathedral Light */}
        <HeroSection />
        
        {/* Mass Schedule */}
        <MassScheduleSection />
        
        {/* Daily Liturgy & Saint of the Day */}
        <LiturgySection />
        
        {/* Community Life */}
        <CommunitySection />
        
        {/* Upcoming Events */}
        <EventsSection />
        
        {/* Tithe & Donations */}
        <TitheSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  )
}

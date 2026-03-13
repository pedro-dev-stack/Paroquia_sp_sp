'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionReveal, ImageReveal } from '@/components/cathedral/section-reveal'
import { Users, Heart, HandHeart } from 'lucide-react'

const communityHighlights = [
  {
    icon: Users,
    title: 'Comunidade Viva',
    description: 'Mais de 2.000 famílias unidas na fé, construindo juntas uma comunidade acolhedora.',
  },
  {
    icon: Heart,
    title: 'Obras de Caridade',
    description: 'Ações sociais que transformam vidas, levando esperança aos mais necessitados.',
  },
  {
    icon: HandHeart,
    title: 'Formação Cristã',
    description: 'Grupos de estudo, catequese e formação para todas as idades e vocações.',
  },
]

export function CommunitySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  
  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, oklch(0.75 0.14 80 / 0.03), transparent 50%)',
          }}
        />
      </motion.div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Editorial layout - asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text content - offset position */}
          <div className="lg:col-span-5 lg:col-start-1">
            <SectionReveal>
              <p className="text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">
                Nossa Família
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
                Vida da Comunidade
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Somos uma comunidade paroquial vibrante, onde cada pessoa encontra 
                seu lugar na grande família de Deus. Unidos pela fé, celebramos 
                juntos, servimos juntos e crescemos juntos.
              </p>
            </SectionReveal>
            
            {/* Highlights */}
            <div className="space-y-6">
              {communityHighlights.map((item, i) => (
                <SectionReveal key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
            
            <SectionReveal delay={0.5}>
              <a
                href="/pastorais"
                className="inline-flex items-center gap-2 mt-8 text-sm text-primary hover:text-primary/80 transition-colors duration-300"
              >
                Conhecer nossas pastorais
                <span className="text-lg">→</span>
              </a>
            </SectionReveal>
          </div>
          
          {/* Image composition - editorial style */}
          <div className="lg:col-span-6 lg:col-start-7 relative">
            <div className="relative">
              {/* Main image */}
              <ImageReveal className="relative aspect-[4/5] rounded overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="h-16 w-16 mx-auto mb-4 text-primary/30" />
                    <p className="text-sm text-muted-foreground">
                      Imagem da Comunidade
                    </p>
                  </div>
                </div>
              </ImageReveal>
              
              {/* Floating accent image */}
              <ImageReveal 
                delay={0.3}
                className="absolute -bottom-8 -left-8 w-1/2 aspect-square rounded overflow-hidden shadow-2xl shadow-background/50 border border-border/50 hidden lg:block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-primary/40" />
                </div>
              </ImageReveal>
              
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-primary/10 rounded -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

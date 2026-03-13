'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Heart, Church, Users, BookOpen } from 'lucide-react'

const impactAreas = [
  { icon: Church, label: 'Manutenção da Igreja', value: '35%' },
  { icon: Users, label: 'Obras Sociais', value: '30%' },
  { icon: BookOpen, label: 'Formação e Catequese', value: '20%' },
  { icon: Heart, label: 'Pastoral e Evangelização', value: '15%' },
]

export function TitheSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])
  
  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Atmospheric background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ opacity }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, oklch(0.75 0.14 80 / 0.05), transparent 50%)',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 70%, oklch(0.65 0.15 70 / 0.03), transparent 50%)',
          }}
        />
      </motion.div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <SectionReveal>
              <p className="text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">
                Generosidade
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
                Dízimo e Partilha
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sua contribuição sustenta a vida da paróquia e permite que 
                continuemos nossa missão de evangelização e serviço. 
                Cada oferta é um ato de fé e comunhão.
              </p>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <blockquote className="relative pl-6 border-l-2 border-primary/30 my-8">
                <p className="font-serif text-xl text-foreground/90 italic">
                  &ldquo;Dai e vos será dado: uma medida boa, recalcada, sacudida e transbordante.&rdquo;
                </p>
                <cite className="block mt-3 text-sm text-muted-foreground not-italic">
                  — Lucas 6,38
                </cite>
              </blockquote>
            </SectionReveal>
            
            <SectionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/dizimo"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 rounded"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Contribuir Agora
                </a>
                <a
                  href="/dizimo#formas"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 rounded"
                >
                  Outras formas de doar
                </a>
              </div>
            </SectionReveal>
          </div>
          
          {/* Impact visualization */}
          <SectionReveal delay={0.4}>
            <div className="relative p-8 bg-card/50 border border-border/50 rounded">
              <p className="text-sm tracking-[0.2em] uppercase text-primary/60 mb-8 text-center">
                Como sua contribuição é utilizada
              </p>
              
              <div className="space-y-6">
                {impactAreas.map((area, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                      <area.icon className="h-5 w-5 text-primary/70" />
                    </div>
                    <div className="grow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">{area.label}</span>
                        <span className="text-sm font-medium text-primary">{area.value}</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-linear-to-r from-primary/50 to-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: area.value }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <p className="mt-8 text-xs text-center text-muted-foreground">
                Relatório financeiro disponível na secretaria paroquial
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

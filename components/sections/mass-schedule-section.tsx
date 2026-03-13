'use client'

import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Clock, Calendar } from 'lucide-react'

const weekdaySchedule = [
  { day: 'Segunda a Sexta', times: ['7h00', '19h00'] },
  { day: 'Sábado', times: ['7h00', '17h00', '19h00'] },
]

const sundaySchedule = [
  { time: '7h00', description: 'Missa da Aurora' },
  { time: '9h00', description: 'Missa das Famílias' },
  { time: '11h00', description: 'Missa Solene' },
  { time: '17h00', description: 'Missa Vespertina' },
  { time: '19h00', description: 'Missa da Juventude' },
]

export function MassScheduleSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-px h-full opacity-10"
          style={{ background: 'linear-gradient(to bottom, transparent, oklch(0.75 0.14 80), transparent)' }}
        />
        <div 
          className="absolute top-0 right-1/4 w-px h-full opacity-10"
          style={{ background: 'linear-gradient(to bottom, transparent, oklch(0.75 0.14 80), transparent)' }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">
            Celebrações
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            Horários de Missa
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/30" />
            <Clock className="h-5 w-5 text-primary/60" />
            <div className="h-px w-12 bg-primary/30" />
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Weekday Schedule */}
          <SectionReveal delay={0.2}>
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="h-5 w-5 text-primary/70" />
                <h3 className="font-serif text-2xl text-foreground">
                  Dias de Semana
                </h3>
              </div>
              
              <div className="space-y-6">
                {weekdaySchedule.map((item, i) => (
                  <div
                    key={i}
                    className="group relative p-6 bg-secondary/30 border border-border/50 rounded hover:border-primary/30 transition-colors duration-500"
                  >
                    <p className="text-lg text-foreground mb-3">{item.day}</p>
                    <div className="flex flex-wrap gap-3">
                      {item.times.map((time, j) => (
                        <span
                          key={j}
                          className="inline-flex px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
          
          {/* Sunday Schedule */}
          <SectionReveal delay={0.3}>
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <h3 className="font-serif text-2xl text-foreground">
                  Domingos e Solenidades
                </h3>
              </div>
              
              <div className="space-y-4">
                {sundaySchedule.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-6 p-4 hover:bg-secondary/20 rounded transition-colors duration-300"
                  >
                    <span className="flex-shrink-0 w-20 text-2xl font-serif text-primary">
                      {item.time}
                    </span>
                    <div className="flex-grow h-px bg-border group-hover:bg-primary/30 transition-colors duration-300" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Note */}
              <p className="mt-8 text-sm text-muted-foreground italic">
                Em dias santos de guarda, consulte os avisos paroquiais para horários especiais.
              </p>
            </div>
          </SectionReveal>
        </div>
        
        {/* CTA */}
        <SectionReveal delay={0.4} className="text-center mt-16">
          <a
            href="/horarios"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300"
          >
            Ver todos os horários
            <span className="text-lg">→</span>
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}

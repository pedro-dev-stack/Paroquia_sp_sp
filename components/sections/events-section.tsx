'use client'

import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Calendar, MapPin, Clock } from 'lucide-react'

const upcomingEvents = [
  {
    date: { day: '25', month: 'Jan' },
    title: 'Festa da Conversão de São Paulo',
    description: 'Missa Solene às 19h com procissão e bênção especial.',
    location: 'Igreja Matriz',
    time: '19h00',
    featured: true,
  },
  {
    date: { day: '02', month: 'Fev' },
    title: 'Apresentação do Senhor',
    description: 'Bênção das velas e procissão das luzes.',
    location: 'Igreja Matriz',
    time: '19h00',
    featured: false,
  },
  {
    date: { day: '10', month: 'Fev' },
    title: 'Retiro Quaresmal',
    description: 'Dia de espiritualidade para adultos. Inscrições na secretaria.',
    location: 'Salão Paroquial',
    time: '8h00 às 17h00',
    featured: false,
  },
  {
    date: { day: '14', month: 'Fev' },
    title: 'Quarta-feira de Cinzas',
    description: 'Início da Quaresma. Missas às 7h, 12h e 19h.',
    location: 'Igreja Matriz',
    time: 'Vários horários',
    featured: true,
  },
]

export function EventsSection() {
  return (
    <section className="relative py-32 bg-secondary/10">
      {/* Decorative gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, oklch(0.75 0.14 80 / 0.2), transparent)',
        }}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">
            Agenda
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            Próximos Eventos
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Participe da vida da nossa comunidade. Celebrações, encontros e momentos de fé que transformam.
          </p>
        </SectionReveal>
        
        {/* Events Grid - Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingEvents.map((event, i) => (
            <SectionReveal key={i} delay={0.1 + i * 0.1}>
              <article
                className={`group relative p-8 rounded overflow-hidden transition-all duration-500 ${
                  event.featured
                    ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/40'
                    : 'bg-card/50 border border-border/50 hover:border-primary/20'
                }`}
              >
                {/* Featured badge */}
                {event.featured && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-[10px] tracking-wider uppercase bg-primary/20 text-primary rounded">
                    Destaque
                  </span>
                )}
                
                <div className="flex gap-6">
                  {/* Date */}
                  <div className="flex-shrink-0 text-center">
                    <div className={`w-16 h-16 rounded flex flex-col items-center justify-center ${
                      event.featured ? 'bg-primary/20' : 'bg-secondary'
                    }`}>
                      <span className={`text-2xl font-serif ${event.featured ? 'text-primary' : 'text-foreground'}`}>
                        {event.date.day}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        {event.date.month}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Hover decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </article>
            </SectionReveal>
          ))}
        </div>
        
        {/* CTA */}
        <SectionReveal delay={0.5} className="text-center mt-12">
          <a
            href="/eventos"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 rounded"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Ver agenda completa
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}

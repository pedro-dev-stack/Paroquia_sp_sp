'use client'

import { PageLayout, PageHeader } from '@/components/layouts/page-layout'
import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react'

const events = [
  {
    date: { day: '25', month: 'Janeiro', year: '2026' },
    title: 'Festa da Conversão de São Paulo',
    description: 'Celebração solene em honra ao padroeiro da paróquia. Missa festiva às 19h seguida de procissão pelas ruas do bairro e quermesse no salão paroquial.',
    location: 'Igreja Matriz',
    time: '19h00',
    category: 'Festa',
    featured: true,
  },
  {
    date: { day: '02', month: 'Fevereiro', year: '2026' },
    title: 'Apresentação do Senhor',
    description: 'Bênção das velas e procissão das luzes. Celebração da vida consagrada.',
    location: 'Igreja Matriz',
    time: '19h00',
    category: 'Litúrgico',
    featured: false,
  },
  {
    date: { day: '10', month: 'Fevereiro', year: '2026' },
    title: 'Retiro Quaresmal',
    description: 'Dia de recolhimento e oração para adultos. Tema: "Convertei-vos e crede no Evangelho". Inscrições limitadas na secretaria paroquial.',
    location: 'Salão Paroquial',
    time: '8h00 às 17h00',
    category: 'Formação',
    featured: true,
  },
  {
    date: { day: '14', month: 'Fevereiro', year: '2026' },
    title: 'Quarta-feira de Cinzas',
    description: 'Início da Santa Quaresma. Missas com imposição das cinzas às 7h, 12h e 19h.',
    location: 'Igreja Matriz',
    time: 'Vários horários',
    category: 'Litúrgico',
    featured: true,
  },
  {
    date: { day: '22', month: 'Fevereiro', year: '2026' },
    title: 'Curso de Noivos',
    description: 'Encontro de preparação para o matrimônio. Casais interessados devem se inscrever previamente.',
    location: 'Salão Paroquial',
    time: '9h00 às 17h00',
    category: 'Formação',
    featured: false,
  },
  {
    date: { day: '01', month: 'Março', year: '2026' },
    title: 'Via-Sacra Comunitária',
    description: 'Meditação das 14 estações da Paixão de Cristo pelas ruas do bairro.',
    location: 'Saída da Igreja Matriz',
    time: '19h00',
    category: 'Devoção',
    featured: false,
  },
  {
    date: { day: '15', month: 'Março', year: '2026' },
    title: 'Encontro de Jovens',
    description: 'Tarde de louvor, formação e confraternização para jovens de 15 a 30 anos.',
    location: 'Salão Paroquial',
    time: '14h00 às 20h00',
    category: 'Juventude',
    featured: false,
  },
  {
    date: { day: '29', month: 'Março', year: '2026' },
    title: 'Domingo de Ramos',
    description: 'Início da Semana Santa. Bênção dos Ramos às 10h30 seguida de procissão e Missa Solene.',
    location: 'Praça da Igreja',
    time: '10h30',
    category: 'Litúrgico',
    featured: true,
  },
]

const categories = ['Todos', 'Litúrgico', 'Formação', 'Festa', 'Devoção', 'Juventude']

export default function EventosPage() {
  return (
    <PageLayout>
      <PageHeader
        overline="Agenda"
        title="Eventos"
        description="Acompanhe a programação da nossa comunidade. Celebrações, encontros e momentos de fé que transformam vidas."
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <SectionReveal className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm rounded transition-all duration-300 ${
                    category === 'Todos'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </SectionReveal>
          
          {/* Events List */}
          <div className="space-y-6">
            {events.map((event, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <article
                  className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8 rounded overflow-hidden transition-all duration-500 ${
                    event.featured
                      ? 'bg-linear-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/40'
                      : 'bg-card/30 border border-border/50 hover:border-primary/20'
                  }`}
                >
                  {/* Date */}
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                    <div className={`text-center lg:text-left ${event.featured ? 'text-primary' : ''}`}>
                      <span className="block text-4xl font-serif text-foreground">
                        {event.date.day}
                      </span>
                      <span className="block text-sm uppercase tracking-wide text-muted-foreground">
                        {event.date.month}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {event.date.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-0.5 text-[10px] tracking-wider uppercase rounded ${
                        event.featured
                          ? 'bg-primary/20 text-primary'
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {event.category}
                      </span>
                      {event.featured && (
                        <span className="px-2 py-0.5 text-[10px] tracking-wider uppercase bg-amber-500/20 text-amber-400 rounded">
                          Destaque
                        </span>
                      )}
                    </div>
                    
                    <h2 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-primary/50" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary/50" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                  
                  {/* Action */}
                  <div className="lg:col-span-2 flex items-center justify-end">
                    <button className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
          
          {/* Calendar Download */}
          <SectionReveal delay={0.5} className="text-center mt-16">
            <div className="inline-flex items-center gap-4 p-6 bg-secondary/30 border border-border/50 rounded">
              <Calendar className="h-8 w-8 text-primary/70" />
              <div className="text-left">
                <p className="text-foreground font-medium">Calendário Litúrgico 2026</p>
                <p className="text-sm text-muted-foreground">Baixe o calendário completo da paróquia</p>
              </div>
              <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                Download
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}

'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PageLayout, PageHeader } from '@/components/layouts/page-layout'
import { SectionReveal, ImageReveal } from '@/components/cathedral/section-reveal'
import { Church, Cross, Users, BookOpen } from 'lucide-react'

const timeline = [
  {
    year: '1952',
    title: 'Fundação',
    description: 'A comunidade católica do bairro se reúne pela primeira vez em uma pequena capela improvisada, dando início à história da nossa paróquia.',
  },
  {
    year: '1958',
    title: 'Primeira Igreja',
    description: 'Com muito esforço da comunidade, é construída a primeira igreja de alvenaria, podendo acolher até 200 fiéis.',
  },
  {
    year: '1972',
    title: 'Elevação a Paróquia',
    description: 'A comunidade é oficialmente elevada à categoria de paróquia, recebendo o título de São Pedro e São Paulo.',
  },
  {
    year: '1985',
    title: 'Nova Igreja Matriz',
    description: 'É inaugurada a atual igreja matriz, com arquitetura que evoca as grandes catedrais, podendo acolher 800 fiéis.',
  },
  {
    year: '1995',
    title: 'Centro Pastoral',
    description: 'Construção do centro pastoral com salões para catequese, reuniões e eventos comunitários.',
  },
  {
    year: '2010',
    title: 'Restauração',
    description: 'Grande restauração da igreja matriz, incluindo novos vitrais e sistema de iluminação.',
  },
  {
    year: '2022',
    title: 'Jubileu',
    description: 'Celebração do jubileu de 70 anos de fundação, com eventos especiais durante todo o ano.',
  },
]

const priests = [
  { name: 'Pe. José Maria dos Santos', period: '1958-1972', role: 'Primeiro Pároco' },
  { name: 'Pe. Antônio Carlos Lima', period: '1972-1988', role: 'Pároco' },
  { name: 'Pe. Francisco Xavier Oliveira', period: '1988-2005', role: 'Pároco' },
  { name: 'Pe. Paulo Roberto Silva', period: '2005-2018', role: 'Pároco' },
  { name: 'Pe. Marcos Eduardo Costa', period: '2018-atual', role: 'Pároco Atual' },
]

export default function HistoriaPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  })
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  
  return (
    <PageLayout>
      <PageHeader
        overline="Nossa Trajetória"
        title="História da Paróquia"
        description="Mais de sete décadas de fé, tradição e comunidade. Conheça a história da Paróquia São Pedro e São Paulo."
      />
      
      {/* Introduction */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A história da Paróquia São Pedro e São Paulo se entrelaça com a história 
                do próprio bairro. Desde os primeiros colonizadores que aqui se estabeleceram, 
                a fé católica sempre esteve presente, guiando e unindo a comunidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O que começou como uma pequena capela de madeira, onde algumas famílias 
                se reuniam para rezar o terço, cresceu e se transformou nesta bela igreja 
                matriz que hoje acolhe milhares de fiéis.
              </p>
              <blockquote className="relative pl-6 border-l-2 border-primary/30">
                <p className="font-serif text-xl text-foreground/90 italic">
                  &ldquo;Sobre esta pedra edificarei a minha Igreja.&rdquo;
                </p>
                <cite className="block mt-3 text-sm text-muted-foreground not-italic">
                  — Mateus 16,18
                </cite>
              </blockquote>
            </SectionReveal>
            
            <ImageReveal className="aspect-[4/3] rounded overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                <Church className="h-20 w-20 text-primary/30" />
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section ref={timelineRef} className="py-20 bg-secondary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="font-serif text-4xl text-foreground mb-4">
              Linha do Tempo
            </h2>
            <p className="text-muted-foreground">
              Os marcos mais importantes da nossa história
            </p>
          </SectionReveal>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border">
              <motion.div
                className="absolute top-0 left-0 w-full bg-primary/50"
                style={{ height: lineHeight }}
              />
            </div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <SectionReveal
                  key={i}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? 'right' : 'left'}
                >
                  <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                    i % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}>
                    {/* Content */}
                    <div className={`pl-20 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:col-start-2'}`}>
                      <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-primary bg-primary/10 rounded">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-2xl text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden lg:block" />
                    
                    {/* Timeline dot */}
                    <div className="absolute left-6 lg:left-1/2 top-2 lg:-translate-x-1/2 w-5 h-5 rounded-full bg-background border-2 border-primary" />
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Priests */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="font-serif text-4xl text-foreground mb-4">
              Nossos Párocos
            </h2>
            <p className="text-muted-foreground">
              Os pastores que guiaram nossa comunidade ao longo dos anos
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priests.map((priest, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="p-6 bg-card/30 border border-border/50 rounded text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <Cross className="h-8 w-8 text-primary/50" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-1">
                    {priest.name}
                  </h3>
                  <p className="text-sm text-primary mb-1">{priest.role}</p>
                  <p className="text-sm text-muted-foreground">{priest.period}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistics */}
      <section className="py-20 bg-secondary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '70+', label: 'Anos de História', icon: Church },
              { value: '2.000+', label: 'Famílias', icon: Users },
              { value: '15.000+', label: 'Batismos', icon: Cross },
              { value: '3.000+', label: 'Matrimônios', icon: BookOpen },
            ].map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.1} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary/70" />
                <p className="text-4xl font-serif text-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

'use client'

import { PageLayout, PageHeader } from '@/components/layouts/page-layout'
import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Clock, Calendar, Cross, Church } from 'lucide-react'

const dailySchedule = [
  { day: 'Segunda-feira', masses: ['7h00', '19h00'], confessions: ['18h00 - 18h45'] },
  { day: 'Terça-feira', masses: ['7h00', '19h00'], confessions: ['18h00 - 18h45'] },
  { day: 'Quarta-feira', masses: ['7h00', '19h00'], confessions: ['18h00 - 18h45'] },
  { day: 'Quinta-feira', masses: ['7h00', '19h00'], confessions: ['18h00 - 18h45'] },
  { day: 'Sexta-feira', masses: ['7h00', '19h00'], confessions: ['18h00 - 18h45'] },
  { day: 'Sábado', masses: ['7h00', '17h00', '19h00'], confessions: ['9h00 - 11h00', '16h00 - 16h45'] },
]

const sundaySchedule = [
  { time: '7h00', name: 'Missa da Aurora', description: 'Celebração contemplativa para início do dia' },
  { time: '9h00', name: 'Missa das Famílias', description: 'Com liturgia da palavra para crianças' },
  { time: '11h00', name: 'Missa Solene', description: 'Celebração principal com coral' },
  { time: '17h00', name: 'Missa Vespertina', description: 'Celebração tranquila ao entardecer' },
  { time: '19h00', name: 'Missa da Juventude', description: 'Animação com grupo de jovens' },
]

const specialCelebrations = [
  { name: 'Adoração ao Santíssimo', schedule: 'Quinta-feira após a Missa das 19h até 22h', icon: Church },
  { name: 'Terço Mariano', schedule: 'Diariamente às 18h30', icon: Cross },
  { name: 'Via-Sacra', schedule: 'Sextas-feiras da Quaresma às 19h', icon: Cross },
  { name: 'Novenas', schedule: 'Conforme calendário litúrgico', icon: Calendar },
]

export default function HorariosPage() {
  return (
    <PageLayout>
      <PageHeader
        overline="Celebrações"
        title="Horários de Missa"
        description="Venha celebrar conosco. Nossa comunidade o acolhe com alegria em cada Eucaristia."
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Sunday Schedule - Featured */}
          <SectionReveal className="mb-20">
            <div className="relative p-8 lg:p-12 bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/50 via-primary/30 to-transparent" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                <h2 className="font-serif text-3xl text-foreground">
                  Domingos e Solenidades
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sundaySchedule.map((mass, i) => (
                  <div
                    key={i}
                    className="group p-6 bg-background/50 rounded border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="block text-3xl font-serif text-primary mb-2">
                      {mass.time}
                    </span>
                    <h3 className="text-lg text-foreground mb-1">{mass.name}</h3>
                    <p className="text-sm text-muted-foreground">{mass.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
          
          {/* Weekly Schedule */}
          <SectionReveal delay={0.2} className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="h-5 w-5 text-primary/70" />
              <h2 className="font-serif text-3xl text-foreground">
                Dias de Semana
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left text-sm font-medium text-muted-foreground">Dia</th>
                    <th className="py-4 px-6 text-left text-sm font-medium text-muted-foreground">Missas</th>
                    <th className="py-4 px-6 text-left text-sm font-medium text-muted-foreground">Confissões</th>
                  </tr>
                </thead>
                <tbody>
                  {dailySchedule.map((day, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                      <td className="py-4 px-6 font-medium text-foreground">{day.day}</td>
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-2">
                          {day.masses.map((time, j) => (
                            <span key={j} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded">
                              {time}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground">
                        {day.confessions.join(' | ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>
          
          {/* Special Celebrations */}
          <SectionReveal delay={0.3}>
            <h2 className="font-serif text-3xl text-foreground mb-8">
              Outras Celebrações
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialCelebrations.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-card/50 border border-border/50 rounded hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary/70" />
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.schedule}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
          
          {/* Note */}
          <SectionReveal delay={0.4} className="mt-16">
            <div className="p-6 bg-secondary/30 border border-border/50 rounded">
              <p className="text-sm text-muted-foreground text-center">
                Em dias santos de guarda e solenidades especiais, os horários podem sofrer alterações. 
                Consulte sempre os <a href="/avisos" className="text-primary hover:underline">avisos paroquiais</a> para informações atualizadas.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}

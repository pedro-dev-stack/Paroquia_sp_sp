/**
 * Horários page - Static Site Generation (SSG)
 * This page is pre-rendered at build time for maximum performance
 */

import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { PageLayout } from '@/components/layouts/page-layout'
import { Clock, Calendar, MapPin, Info } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Horários de Missa',
  description: 'Confira os horários de missas, confissões e celebrações da Paróquia São Pedro e São Paulo. Missas diárias, domingos e dias santos.',
  keywords: ['horários de missa', 'missa', 'celebração', 'confissão', 'adoração'],
  url: '/horarios',
})

// Static generation - no revalidation needed for schedule
export const revalidate = false

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

const confessionSchedule = [
  { day: 'Terça a Sexta', time: '18h00 - 18h45' },
  { day: 'Sábado', time: '16h00 - 16h45' },
  { day: 'Domingo', time: 'Antes de cada missa' },
]

const specialSchedule = [
  { event: 'Adoração ao Santíssimo', time: 'Quinta-feira, 20h00 - 21h00' },
  { event: 'Terço Mariano', time: 'Diariamente, 18h30' },
  { event: 'Via Sacra', time: 'Sextas-feiras da Quaresma, 19h30' },
]

export default function HorariosPage() {
  return (
    <PageLayout
      title="Horários de Missa"
      subtitle="Celebrações e Sacramentos"
      breadcrumbs={[
        { name: 'Início', url: '/' },
        { name: 'Horários', url: '/horarios' },
      ]}
    >
      <div className="space-y-16">
        {/* Missas de Semana */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl text-foreground">
              Missas de Semana
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weekdaySchedule.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <p className="text-xl font-medium text-foreground mb-4">{item.day}</p>
                <div className="flex flex-wrap gap-3">
                  {item.times.map((time, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded"
                    >
                      <Clock className="h-4 w-4" />
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Missas de Domingo */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
            <h2 className="font-serif text-3xl text-foreground">
              Domingos e Solenidades
            </h2>
          </div>
          
          <div className="space-y-4">
            {sundaySchedule.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 bg-card border border-border rounded-lg hover:bg-secondary/20 transition-colors"
              >
                <span className="shrink-0 w-24 text-2xl font-serif text-primary">
                  {item.time}
                </span>
                <div className="grow h-px bg-border" />
                <span className="text-lg text-muted-foreground">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Confissões */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl text-foreground">
              Horários de Confissão
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {confessionSchedule.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-border rounded-lg text-center"
              >
                <p className="text-lg font-medium text-foreground mb-2">{item.day}</p>
                <p className="text-primary">{item.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Celebrações Especiais */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Info className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl text-foreground">
              Celebrações Especiais
            </h2>
          </div>
          
          <div className="space-y-4">
            {specialSchedule.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-6 bg-card border border-border rounded-lg"
              >
                <span className="text-lg text-foreground">{item.event}</span>
                <span className="text-primary font-medium">{item.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Observações */}
        <section className="p-8 bg-secondary/20 border border-border rounded-lg">
          <h3 className="font-serif text-2xl text-foreground mb-4">
            Observações Importantes
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Em dias santos de guarda, consulte os avisos paroquiais para horários especiais</li>
            <li>• Durante a Semana Santa, os horários podem sofrer alterações</li>
            <li>• Recomendamos chegar com 10 minutos de antecedência</li>
            <li>• Para casamentos, batizados e outros sacramentos, entre em contato com a secretaria</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  )
}

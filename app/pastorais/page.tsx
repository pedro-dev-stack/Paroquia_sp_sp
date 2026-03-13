'use client'

import { PageLayout, PageHeader } from '@/components/layouts/page-layout'
import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Users, Heart, BookOpen, Music, Baby, UserCheck, Sparkles, HandHeart } from 'lucide-react'

const pastorals = [
  {
    icon: BookOpen,
    name: 'Catequese',
    description: 'Formação cristã para crianças, jovens e adultos, preparando para os sacramentos da iniciação cristã.',
    coordinator: 'Maria José da Silva',
    schedule: 'Terças e Quintas: 19h às 20h30',
    contact: 'catequese@paroquiaspsp.com.br',
  },
  {
    icon: Music,
    name: 'Pastoral da Música',
    description: 'Animação litúrgica através do canto e instrumentos, enriquecendo as celebrações eucarísticas.',
    coordinator: 'João Pedro Santos',
    schedule: 'Ensaios: Quartas às 20h',
    contact: 'musica@paroquiaspsp.com.br',
  },
  {
    icon: Users,
    name: 'Pastoral Familiar',
    description: 'Acompanhamento e formação de casais, fortalecendo os laços matrimoniais e familiares.',
    coordinator: 'Casal Roberto e Ana',
    schedule: 'Encontros mensais: 2º sábado às 15h',
    contact: 'familia@paroquiaspsp.com.br',
  },
  {
    icon: Sparkles,
    name: 'Pastoral da Juventude',
    description: 'Evangelização e formação dos jovens, promovendo encontros, retiros e ações missionárias.',
    coordinator: 'Pe. Lucas Oliveira',
    schedule: 'Sábados às 18h',
    contact: 'juventude@paroquiaspsp.com.br',
  },
  {
    icon: Baby,
    name: 'Pastoral do Batismo',
    description: 'Preparação de pais e padrinhos para o sacramento do Batismo de seus filhos.',
    coordinator: 'Diác. Marcos Costa',
    schedule: 'Último sábado do mês: 9h às 12h',
    contact: 'batismo@paroquiaspsp.com.br',
  },
  {
    icon: Heart,
    name: 'Pastoral da Saúde',
    description: 'Visitas a doentes, idosos e hospitalizados, levando conforto espiritual e os sacramentos.',
    coordinator: 'Ir. Tereza Mendes',
    schedule: 'Visitas: Quartas e Sextas',
    contact: 'saude@paroquiaspsp.com.br',
  },
  {
    icon: HandHeart,
    name: 'Cáritas Paroquial',
    description: 'Obras de caridade e assistência social, atendendo as necessidades dos mais pobres.',
    coordinator: 'Francisca Lima',
    schedule: 'Atendimento: Segundas e Quartas, 9h às 12h',
    contact: 'caritas@paroquiaspsp.com.br',
  },
  {
    icon: UserCheck,
    name: 'Ministros da Eucaristia',
    description: 'Serviço de distribuição da Comunhão nas celebrações e aos doentes impossibilitados.',
    coordinator: 'José Antônio Ribeiro',
    schedule: 'Formação contínua mensal',
    contact: 'eucaristia@paroquiaspsp.com.br',
  },
]

const movements = [
  { name: 'Terço dos Homens', schedule: 'Sextas às 20h' },
  { name: 'Apostolado da Oração', schedule: '1ª Sexta às 15h' },
  { name: 'Legião de Maria', schedule: 'Sábados às 15h' },
  { name: 'Renovação Carismática', schedule: 'Quintas às 20h' },
  { name: 'Vicentinos', schedule: 'Domingos às 9h' },
  { name: 'ECC - Encontro de Casais com Cristo', schedule: 'Encontros mensais' },
]

export default function PastoraisPage() {
  return (
    <PageLayout>
      <PageHeader
        overline="Comunidade"
        title="Pastorais e Movimentos"
        description="Cada batizado é chamado a servir. Conheça as diversas formas de participar ativamente da vida paroquial."
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Pastorals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {pastorals.map((pastoral, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <article className="group h-full p-8 bg-card/30 border border-border/50 rounded hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <pastoral.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {pastoral.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Coord.: {pastoral.coordinator}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {pastoral.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Horário:</span> {pastoral.schedule}
                    </p>
                    <p className="text-primary">
                      {pastoral.contact}
                    </p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
          
          {/* Movements Section */}
          <SectionReveal delay={0.4}>
            <div className="p-8 lg:p-12 bg-secondary/30 border border-border/50 rounded">
              <h2 className="font-serif text-3xl text-foreground mb-8 text-center">
                Movimentos e Grupos de Oração
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {movements.map((movement, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-background/50 rounded border border-border/30"
                  >
                    <span className="text-foreground">{movement.name}</span>
                    <span className="text-sm text-muted-foreground">{movement.schedule}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
          
          {/* CTA */}
          <SectionReveal delay={0.5} className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Quer participar de alguma pastoral ou movimento?
            </p>
            <a
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 rounded"
            >
              Entre em Contato
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}

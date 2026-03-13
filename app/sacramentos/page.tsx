'use client'

import { PageLayout, PageHeader } from '@/components/layouts/page-layout'
import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Droplets, Users, Heart, Cross, BookOpen, HandHeart, Church } from 'lucide-react'

const sacraments = [
  {
    icon: Droplets,
    name: 'Batismo',
    description: 'O Batismo é a porta de entrada na vida cristã. Através dele, nascemos para uma vida nova em Cristo e nos tornamos membros da Igreja.',
    requirements: [
      'Apresentar certidão de nascimento da criança',
      'Nomes completos e documentos dos padrinhos',
      'Participar do curso de preparação para pais e padrinhos',
      'Agendamento prévio na secretaria paroquial',
    ],
    schedule: 'Domingos às 11h30 (após a Missa Solene)',
    preparation: 'Curso para pais e padrinhos: último sábado do mês, das 9h às 12h',
  },
  {
    icon: BookOpen,
    name: 'Primeira Comunhão',
    description: 'A Primeira Comunhão Eucarística é o momento em que a criança recebe pela primeira vez o Corpo e Sangue de Cristo, completando sua iniciação cristã.',
    requirements: [
      'Ser batizado na Igreja Católica',
      'Ter entre 9 e 11 anos de idade',
      'Participar de dois anos de catequese',
      'Apresentar certidão de batismo',
    ],
    schedule: 'Celebrações em maio/junho e novembro',
    preparation: 'Catequese: terças e quintas, das 19h às 20h30',
  },
  {
    icon: Cross,
    name: 'Crisma',
    description: 'A Confirmação ou Crisma completa a graça do Batismo, fortalecendo o cristão com os dons do Espírito Santo para testemunhar a fé.',
    requirements: [
      'Ser batizado e ter feito a Primeira Comunhão',
      'Ter no mínimo 15 anos',
      'Participar de um ano de preparação',
      'Escolher um padrinho/madrinha crismado',
    ],
    schedule: 'Celebrações em outubro/novembro',
    preparation: 'Encontros aos sábados, das 15h às 17h',
  },
  {
    icon: Heart,
    name: 'Matrimônio',
    description: 'O Sacramento do Matrimônio une um homem e uma mulher numa aliança de amor fiel e fecundo, imagem do amor de Cristo pela Igreja.',
    requirements: [
      'Ambos devem ser batizados (ao menos um católico)',
      'Estar livres de impedimentos matrimoniais',
      'Apresentar documentos civis e religiosos',
      'Participar do curso de noivos',
    ],
    schedule: 'Agendamento com 6 meses de antecedência',
    preparation: 'Curso de noivos: primeiro sábado do mês',
  },
  {
    icon: HandHeart,
    name: 'Confissão',
    description: 'O Sacramento da Reconciliação nos oferece o perdão de Deus pelos pecados cometidos após o Batismo, restaurando a comunhão com Deus e a Igreja.',
    requirements: [
      'Exame de consciência prévio',
      'Arrependimento sincero',
      'Propósito de não mais pecar',
    ],
    schedule: 'De segunda a sexta: 18h às 18h45\nSábados: 9h às 11h e 16h às 16h45',
    preparation: 'Não requer agendamento',
  },
  {
    icon: Church,
    name: 'Unção dos Enfermos',
    description: 'Este sacramento oferece graça especial aos enfermos, idosos e moribundos, fortalecendo-os nas provações da doença e da velhice.',
    requirements: [
      'Estar em situação de doença grave ou idade avançada',
      'Solicitar o sacramento pessoalmente ou através de familiar',
    ],
    schedule: 'A qualquer momento, mediante solicitação',
    preparation: 'Ligar para a secretaria ou para o plantão pastoral: (11) 98765-4321',
  },
]

export default function SacramentosPage() {
  return (
    <PageLayout>
      <PageHeader
        overline="Vida Sacramental"
        title="Sacramentos"
        description="Os sacramentos são sinais eficazes da graça, instituídos por Cristo e confiados à Igreja, pelos quais nos é concedida a vida divina."
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {sacraments.map((sacrament, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 lg:p-12 bg-card/30 border border-border/50 rounded overflow-hidden">
                  {/* Icon and Title */}
                  <div className="lg:col-span-3">
                    <div className="flex lg:flex-col items-center lg:items-start gap-4">
                      <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center">
                        <sacrament.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="font-serif text-3xl text-foreground">
                        {sacrament.name}
                      </h2>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-9">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {sacrament.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Requirements */}
                      <div>
                        <h3 className="text-sm font-medium tracking-wide uppercase text-primary/70 mb-4">
                          Requisitos
                        </h3>
                        <ul className="space-y-2">
                          {sacrament.requirements.map((req, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/50 shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Schedule & Preparation */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium tracking-wide uppercase text-primary/70 mb-2">
                            Celebração
                          </h3>
                          <p className="text-sm text-foreground whitespace-pre-line">
                            {sacrament.schedule}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium tracking-wide uppercase text-primary/70 mb-2">
                            Preparação
                          </h3>
                          <p className="text-sm text-foreground">
                            {sacrament.preparation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
          
          {/* CTA */}
          <SectionReveal delay={0.6} className="text-center mt-20">
            <p className="text-muted-foreground mb-6">
              Para mais informações ou agendamentos, entre em contato com a secretaria paroquial.
            </p>
            <a
              href="/secretaria"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 rounded"
            >
              Contatar Secretaria
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}

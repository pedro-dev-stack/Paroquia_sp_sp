'use client'

import { PageLayout, PageHeader } from '@/components/layouts/page-layout'
import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Heart, CreditCard, Smartphone, Building, QrCode, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const donationMethods = [
  {
    icon: QrCode,
    name: 'PIX',
    description: 'Transferência instantânea',
    details: 'Chave PIX: contato@paroquiaspsp.com.br',
    recommended: true,
  },
  {
    icon: CreditCard,
    name: 'Cartão de Crédito/Débito',
    description: 'Doação única ou recorrente',
    details: 'Acesse nosso portal de doações',
    recommended: false,
  },
  {
    icon: Building,
    name: 'Transferência Bancária',
    description: 'Depósito em conta',
    details: 'Banco: 001 | Ag: 1234-5 | CC: 12345-6',
    recommended: false,
  },
  {
    icon: Smartphone,
    name: 'Boleto',
    description: 'Carnê mensal',
    details: 'Solicite na secretaria paroquial',
    recommended: false,
  },
]

export default function DizimoPage() {
  const [copied, setCopied] = useState(false)
  
  const copyPix = () => {
    navigator.clipboard.writeText('contato@paroquiaspsp.com.br')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <PageLayout>
      <PageHeader
        overline="Generosidade"
        title="Dízimo e Doações"
        description="Sua contribuição mantém nossa paróquia viva e permite que continuemos nossa missão de evangelização e serviço."
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Introduction */}
          <SectionReveal className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O dízimo é uma expressão de fé e gratidão a Deus por todos os bens que 
              recebemos. Através da sua generosidade, mantemos as celebrações, formações, 
              obras sociais e toda a estrutura necessária para acolher nossa comunidade.
            </p>
            
            <blockquote className="relative p-8 bg-primary/5 border-l-4 border-primary/30 text-left">
              <p className="font-serif text-xl text-foreground/90 italic mb-4">
                &ldquo;Cada um dê conforme determinou em seu coração, não com tristeza 
                ou por obrigação, pois Deus ama quem dá com alegria.&rdquo;
              </p>
              <cite className="text-sm text-muted-foreground not-italic">
                — 2 Coríntios 9,7
              </cite>
            </blockquote>
          </SectionReveal>
          
          {/* Donation Methods */}
          <div className="mb-20">
            <SectionReveal className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground mb-4">
                Formas de Contribuir
              </h2>
              <p className="text-muted-foreground">
                Escolha a forma mais conveniente para você
              </p>
            </SectionReveal>
            
            <div id="formas" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {donationMethods.map((method, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className={`relative p-8 rounded border transition-all duration-300 ${
                    method.recommended
                      ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30 hover:border-primary/50'
                      : 'bg-card/30 border-border/50 hover:border-primary/20'
                  }`}>
                    {method.recommended && (
                      <span className="absolute top-4 right-4 px-2 py-1 text-[10px] tracking-wider uppercase bg-primary/20 text-primary rounded">
                        Recomendado
                      </span>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded flex items-center justify-center ${
                        method.recommended ? 'bg-primary/20' : 'bg-secondary'
                      }`}>
                        <method.icon className={`h-6 w-6 ${method.recommended ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl text-foreground mb-1">
                          {method.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {method.description}
                        </p>
                        <div className="flex items-center gap-2 p-3 bg-background/50 rounded text-sm">
                          <code className="text-foreground flex-1">{method.details}</code>
                          {method.name === 'PIX' && (
                            <button
                              onClick={copyPix}
                              className="p-1 hover:text-primary transition-colors"
                              title="Copiar chave PIX"
                            >
                              {copied ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
          
          {/* QR Code Section */}
          <SectionReveal className="mb-20">
            <div className="max-w-md mx-auto p-8 bg-card/30 border border-border/50 rounded text-center">
              <h3 className="font-serif text-xl text-foreground mb-4">
                PIX via QR Code
              </h3>
              <div className="aspect-square max-w-[200px] mx-auto bg-white rounded p-4 mb-4">
                <div className="w-full h-full bg-secondary/20 rounded flex items-center justify-center">
                  <QrCode className="h-16 w-16 text-muted-foreground/30" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Escaneie o código acima com o aplicativo do seu banco
              </p>
            </div>
          </SectionReveal>
          
          {/* Transparency */}
          <SectionReveal>
            <div className="p-8 lg:p-12 bg-secondary/20 border border-border/50 rounded">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl text-foreground mb-4">
                    Transparência
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Prestamos contas de todas as contribuições recebidas. 
                    O relatório financeiro é apresentado mensalmente nas missas 
                    e está disponível na secretaria paroquial.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary/70" />
                      Manutenção da igreja e instalações
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary/70" />
                      Obras de caridade e assistência social
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary/70" />
                      Formação de catequistas e lideranças
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary/70" />
                      Material litúrgico e pastoral
                    </li>
                  </ul>
                </div>
                
                <div className="text-center p-8 bg-background/50 rounded">
                  <p className="text-sm text-muted-foreground mb-4">
                    Contribuição mensal sugerida
                  </p>
                  <p className="text-5xl font-serif text-primary mb-2">
                    10%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    da renda familiar
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-4">
                    Contribua conforme sua possibilidade. Toda oferta é bem-vinda.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}

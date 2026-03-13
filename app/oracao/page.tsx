'use client'

import { useState } from 'react'
import { PageLayout, PageHeader } from '@/components/layouts/page-layout'
import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Heart, Send, Church, Cross, Users } from 'lucide-react'

export default function OracaoPage() {
  const [prayerForm, setPrayerForm] = useState({
    name: '',
    email: '',
    intention: '',
  })
  
  const [massForm, setMassForm] = useState({
    name: '',
    email: '',
    phone: '',
    intentionFor: '',
    type: 'vivos',
    preferredDate: '',
    observations: '',
  })
  
  const [activeTab, setActiveTab] = useState<'oracao' | 'missa'>('oracao')
  
  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Prayer request:', prayerForm)
    // Handle submission
  }
  
  const handleMassSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Mass intention:', massForm)
    // Handle submission
  }
  
  return (
    <PageLayout>
      <PageHeader
        overline="Intercessão"
        title="Pedidos de Oração"
        description="Nossa comunidade intercede por você. Envie suas intenções e nossas orações se unirão às suas."
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Tabs */}
          <SectionReveal className="mb-12">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveTab('oracao')}
                className={`flex items-center gap-2 px-6 py-3 rounded transition-all duration-300 ${
                  activeTab === 'oracao'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <Heart className="h-4 w-4" />
                Pedido de Oração
              </button>
              <button
                onClick={() => setActiveTab('missa')}
                className={`flex items-center gap-2 px-6 py-3 rounded transition-all duration-300 ${
                  activeTab === 'missa'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <Church className="h-4 w-4" />
                Intenção de Missa
              </button>
            </div>
          </SectionReveal>
          
          {/* Prayer Request Form */}
          {activeTab === 'oracao' && (
            <SectionReveal>
              <div className="p-8 lg:p-12 bg-card/30 border border-border/50 rounded">
                <div className="text-center mb-8">
                  <Cross className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                  <h2 className="font-serif text-2xl text-foreground mb-2">
                    Pedido de Oração
                  </h2>
                  <p className="text-muted-foreground">
                    Sua intenção será incluída nas orações da nossa comunidade.
                  </p>
                </div>
                
                <form onSubmit={handlePrayerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="prayer-name" className="block text-sm font-medium text-foreground mb-2">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        id="prayer-name"
                        value={prayerForm.name}
                        onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                        placeholder="Como podemos chamá-lo?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="prayer-email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail <span className="text-muted-foreground text-xs">(opcional)</span>
                      </label>
                      <input
                        type="email"
                        id="prayer-email"
                        value={prayerForm.email}
                        onChange={(e) => setPrayerForm({ ...prayerForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="intention" className="block text-sm font-medium text-foreground mb-2">
                      Sua Intenção
                    </label>
                    <textarea
                      id="intention"
                      rows={6}
                      value={prayerForm.intention}
                      onChange={(e) => setPrayerForm({ ...prayerForm, intention: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                      placeholder="Compartilhe conosco sua intenção de oração..."
                      required
                    />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Suas intenções são tratadas com confidencialidade.
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 rounded"
                  >
                    <Send className="h-4 w-4" />
                    Enviar Pedido de Oração
                  </button>
                </form>
              </div>
            </SectionReveal>
          )}
          
          {/* Mass Intention Form */}
          {activeTab === 'missa' && (
            <SectionReveal>
              <div className="p-8 lg:p-12 bg-card/30 border border-border/50 rounded">
                <div className="text-center mb-8">
                  <Church className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                  <h2 className="font-serif text-2xl text-foreground mb-2">
                    Intenção de Missa
                  </h2>
                  <p className="text-muted-foreground">
                    Solicite que uma Missa seja celebrada por sua intenção.
                  </p>
                </div>
                
                <form onSubmit={handleMassSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="mass-name" className="block text-sm font-medium text-foreground mb-2">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        id="mass-name"
                        value={massForm.name}
                        onChange={(e) => setMassForm({ ...massForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mass-email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="mass-email"
                        value={massForm.email}
                        onChange={(e) => setMassForm({ ...massForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={massForm.phone}
                        onChange={(e) => setMassForm({ ...massForm, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                        placeholder="(11) 98765-4321"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="preferred-date" className="block text-sm font-medium text-foreground mb-2">
                        Data Preferencial
                      </label>
                      <input
                        type="date"
                        id="preferred-date"
                        value={massForm.preferredDate}
                        onChange={(e) => setMassForm({ ...massForm, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="intention-for" className="block text-sm font-medium text-foreground mb-2">
                      Nome da pessoa pela qual será celebrada a Missa
                    </label>
                    <input
                      type="text"
                      id="intention-for"
                      value={massForm.intentionFor}
                      onChange={(e) => setMassForm({ ...massForm, intentionFor: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                      placeholder="Nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Tipo de Intenção
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="vivos"
                          checked={massForm.type === 'vivos'}
                          onChange={(e) => setMassForm({ ...massForm, type: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-foreground">Pelos Vivos</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="falecidos"
                          checked={massForm.type === 'falecidos'}
                          onChange={(e) => setMassForm({ ...massForm, type: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-foreground">Pelos Falecidos</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="acao-gracas"
                          checked={massForm.type === 'acao-gracas'}
                          onChange={(e) => setMassForm({ ...massForm, type: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-foreground">Ação de Graças</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="observations" className="block text-sm font-medium text-foreground mb-2">
                      Observações <span className="text-muted-foreground text-xs">(opcional)</span>
                    </label>
                    <textarea
                      id="observations"
                      rows={3}
                      value={massForm.observations}
                      onChange={(e) => setMassForm({ ...massForm, observations: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                      placeholder="Informações adicionais..."
                    />
                  </div>
                  
                  <div className="p-4 bg-secondary/30 rounded text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Espórtula sugerida:</strong> R$ 2,00<br />
                      A secretaria entrará em contato para confirmar a data disponível.
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 rounded"
                  >
                    <Send className="h-4 w-4" />
                    Enviar Solicitação
                  </button>
                </form>
              </div>
            </SectionReveal>
          )}
          
          {/* Community Prayer */}
          <SectionReveal delay={0.2} className="mt-16">
            <div className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded text-center">
              <Users className="h-10 w-10 mx-auto mb-4 text-primary/70" />
              <h3 className="font-serif text-xl text-foreground mb-2">
                Oração Comunitária
              </h3>
              <p className="text-muted-foreground mb-6">
                Todas as intenções recebidas são lembradas nas missas e nas orações 
                dos grupos de oração da paróquia.
              </p>
              <p className="text-sm text-muted-foreground italic">
                &ldquo;Onde dois ou três estiverem reunidos em meu nome, eu estarei no meio deles.&rdquo; — Mt 18,20
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}

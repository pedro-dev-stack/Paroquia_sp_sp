'use client'

import { useState } from 'react'
import { PageLayout, PageHeader } from '@/components/layouts/page-layout'
import { SectionReveal } from '@/components/cathedral/section-reveal'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }
  
  return (
    <PageLayout>
      <PageHeader
        overline="Fale Conosco"
        title="Contato"
        description="Estamos aqui para acolher você. Entre em contato conosco por qualquer um dos canais disponíveis."
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <SectionReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl text-foreground mb-6">
                    Informações de Contato
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossa secretaria está à disposição para ajudá-lo com informações 
                    sobre sacramentos, certidões, agendamentos e outras necessidades.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        Rua da Igreja, 123<br />
                        Centro - Cidade, Estado<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Telefone</h3>
                      <p className="text-muted-foreground">
                        (11) 1234-5678<br />
                        <span className="text-sm">Secretaria Paroquial</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">E-mail</h3>
                      <p className="text-muted-foreground">
                        contato@paroquiaspsp.com.br<br />
                        secretaria@paroquiaspsp.com.br
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Horário de Funcionamento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 9h às 17h<br />
                        Sábado: 9h às 12h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="p-6 bg-[#25D366]/10 border border-[#25D366]/30 rounded">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-8 w-8 text-[#25D366]" />
                    <div>
                      <h3 className="text-foreground font-medium">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">
                        Atendimento rápido para dúvidas
                      </p>
                    </div>
                    <a
                      href="https://wa.me/5511912345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto px-4 py-2 bg-[#25D366] text-white rounded text-sm hover:bg-[#25D366]/90 transition-colors"
                    >
                      Conversar
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
            
            {/* Contact Form */}
            <SectionReveal delay={0.2}>
              <div className="p-8 bg-card/30 border border-border/50 rounded">
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Envie sua Mensagem
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="sacramentos">Sacramentos</option>
                      <option value="certidoes">Certidões</option>
                      <option value="agendamento">Agendamento</option>
                      <option value="pastorais">Pastorais</option>
                      <option value="dizimo">Dízimo</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 rounded"
                  >
                    <Send className="h-4 w-4" />
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </SectionReveal>
          </div>
          
          {/* Map */}
          <SectionReveal delay={0.3} className="mt-16">
            <div className="aspect-21/9 border border-border/50 rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31670.21918290613!2d-35.001368189160104!3d-7.1517174999999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aceed8919f3d77%3A0xdf25e983d0c43f7!2zUGFyw7NxdWlhIFPDo28gUGVkcm8gZSBTw6NvIFBhdWxv!5e0!3m2!1spt-BR!2sbr!4v1773187167830!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}

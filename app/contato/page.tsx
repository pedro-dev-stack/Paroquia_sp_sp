/**
 * Contato page - Server Side Rendering (SSR)
 * This page is rendered on each request for fresh data
 */

import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { PageLayout } from '@/components/layouts/page-layout'
import dynamic from 'next/dynamic'

// Lazy load form component (client-side only)
const ContactForm = dynamic(
  () => import('@/components/forms/contact-form').then(mod => ({ default: mod.ContactForm })),
  { 
    ssr: false,
    loading: () => <div className="h-[600px] animate-pulse bg-muted/10 rounded-lg" />
  }
)

export const metadata: Metadata = genMeta({
  title: 'Contato',
  description: 'Entre em contato com a Paróquia São Pedro e São Paulo. Telefone, e-mail, endereço e horário de atendimento da secretaria paroquial.',
  keywords: ['contato', 'telefone', 'endereço', 'secretaria', 'atendimento'],
  url: '/contato',
})

// Force dynamic rendering for contact page
export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getContactInfo() {
  // In production, this could fetch from a CMS or database
  return {
    phone: '(11) 1234-5678',
    email: 'contato@paroquiasaopedroesaopaulo.com.br',
    address: 'Rua Exemplo, 123 - Bairro - São Paulo/SP',
    cep: '01234-567',
    officeHours: [
      { day: 'Segunda a Sexta', hours: '9h00 - 12h00 e 14h00 - 18h00' },
      { day: 'Sábado', hours: '9h00 - 12h00' },
      { day: 'Domingo', hours: 'Fechado' },
    ],
    socialMedia: {
      facebook: '#',
      instagram: '#',
      youtube: '#',
    },
  }
}

export default async function ContatoPage() {
  const contactInfo = await getContactInfo()

  return (
    <PageLayout
      title="Entre em Contato"
      subtitle="Estamos aqui para ajudar"
      breadcrumbs={[
        { name: 'Início', url: '/' },
        { name: 'Contato', url: '/contato' },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Informações de Contato
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Telefone</p>
                  <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="text-foreground hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-foreground hover:text-primary transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Endereço</p>
                  <p className="text-foreground">{contactInfo.address}</p>
                  <p className="text-sm text-muted-foreground mt-1">CEP: {contactInfo.cep}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Horário de Atendimento
            </h2>
            
            <div className="space-y-3">
              {contactInfo.officeHours.map((schedule, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-foreground">{schedule.day}</span>
                  <span className="text-primary font-medium">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Redes Sociais
            </h2>
            
            <div className="flex gap-4">
              <a
                href={contactInfo.socialMedia.facebook}
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a
                href={contactInfo.socialMedia.instagram}
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a
                href={contactInfo.socialMedia.youtube}
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </section>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-6">
            Envie sua Mensagem
          </h2>
          <ContactForm />
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl text-foreground mb-6">
          Como Chegar
        </h2>
        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
          {/* Add Google Maps iframe here */}
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Mapa será carregado aqui
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

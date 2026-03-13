'use client'

import Link from 'next/link'
import { Cross, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SectionReveal } from '@/components/cathedral/section-reveal'

const quickLinks = [
  { href: '/horarios', label: 'Horários de Missa' },
  { href: '/confissoes', label: 'Confissões' },
  { href: '/sacramentos', label: 'Sacramentos' },
  { href: '/pastorais', label: 'Pastorais e Movimentos' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/dizimo', label: 'Dízimo e Doações' },
]

const institutionalLinks = [
  { href: '/historia', label: 'História da Paróquia' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/secretaria', label: 'Secretaria' },
  { href: '/avisos', label: 'Avisos Paroquiais' },
]

export function Footer() {
  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <SectionReveal className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src=".\logo_preview.png" className='w-15' />
              <div>
                <p className="font-serif text-xl tracking-wide text-foreground">
                  São Pedro e São Paulo
                </p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">
                  Paróquia
                </p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Uma comunidade de fé, esperança e caridade, 
              acolhendo a todos com o amor de Cristo.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary/70" />
                <span>Rua da Igreja, 123<br />Centro - Cidade, Estado</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary/70" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary/70" />
                <span>contato@paroquiaspsp.com.br</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 text-primary/70" />
                <span>Secretaria: Seg-Sex 9h-17h</span>
              </div>
            </div>
          </SectionReveal>
          
          {/* Quick Links */}
          <SectionReveal delay={0.1}>
            <h3 className="font-serif text-lg text-foreground mb-6">
              Vida Paroquial
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SectionReveal>
          
          {/* Institutional Links */}
          <SectionReveal delay={0.2}>
            <h3 className="font-serif text-lg text-foreground mb-6">
              Institucional
            </h3>
            <ul className="space-y-3">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SectionReveal>
          
          {/* Newsletter / Prayer Request */}
          <SectionReveal delay={0.3}>
            <h3 className="font-serif text-lg text-foreground mb-6">
              Pedido de Oração
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Envie suas intenções de oração. Nossa comunidade intercede por você.
            </p>
            <Link
              href="/oracao"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-300 rounded"
            >
              Enviar Intenção
            </Link>
          </SectionReveal>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Paróquia São Pedro e São Paulo. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground italic">
              &ldquo;Onde dois ou três estiverem reunidos em meu nome, eu estarei no meio deles.&rdquo; — Mt 18,20
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

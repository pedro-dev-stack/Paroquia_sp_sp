"use client"

import { motion } from "framer-motion"
import { Bell, Calendar, AlertCircle, Info, Clock, MapPin, Users } from "lucide-react"
import { PageLayout, PageHeader } from "@/components/layouts/page-layout"
import { SectionReveal } from "@/components/cathedral/section-reveal"

export default function AvisosPage() {
  const avisos = [
    {
      id: 1,
      tipo: "urgente",
      titulo: "Alteração no Horário das Missas",
      descricao: "Durante a Semana Santa, os horários das missas serão alterados. Confira a programação especial no mural da paróquia ou em nosso site.",
      data: "10 de Março de 2026",
      local: "Igreja Matriz"
    },
    {
      id: 2,
      tipo: "importante",
      titulo: "Inscrições para Crisma Abertas",
      descricao: "Estão abertas as inscrições para a turma de Crisma 2026. Os encontros acontecerão aos sábados às 15h. Idade mínima: 15 anos.",
      data: "Até 30 de Março",
      local: "Secretaria Paroquial"
    },
    {
      id: 3,
      tipo: "informativo",
      titulo: "Campanha do Agasalho",
      descricao: "A Pastoral da Caridade está recebendo doações de roupas de inverno em bom estado. Ajude quem mais precisa!",
      data: "Durante todo o mês",
      local: "Salão Paroquial"
    },
    {
      id: 4,
      tipo: "informativo",
      titulo: "Retiro Espiritual de Quaresma",
      descricao: "Participe do nosso retiro espiritual com o tema 'Conversão e Renovação'. Vagas limitadas.",
      data: "15 e 16 de Março",
      local: "Casa de Retiros São José"
    },
    {
      id: 5,
      tipo: "importante",
      titulo: "Reunião do Conselho Pastoral",
      descricao: "Convocamos todos os membros do Conselho Pastoral para reunião ordinária. Pauta: planejamento das atividades do segundo semestre.",
      data: "12 de Março às 19h30",
      local: "Sala de Reuniões"
    },
    {
      id: 6,
      tipo: "informativo",
      titulo: "Formação para Ministros da Eucaristia",
      descricao: "Encontro de formação continuada para todos os ministros extraordinários da Sagrada Comunhão.",
      data: "20 de Março às 19h",
      local: "Igreja Matriz"
    }
  ]

  const getTipoStyles = (tipo: string) => {
    switch (tipo) {
      case "urgente":
        return {
          bg: "bg-red-500/10",
          border: "border-red-500/30",
          icon: AlertCircle,
          iconColor: "text-red-500",
          badge: "bg-red-500 text-white"
        }
      case "importante":
        return {
          bg: "bg-amber-500/10",
          border: "border-amber-500/30",
          icon: Bell,
          iconColor: "text-amber-500",
          badge: "bg-amber-500 text-white"
        }
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          icon: Info,
          iconColor: "text-primary",
          badge: "bg-primary text-white"
        }
    }
  }

  return (
    <PageLayout>
      <PageHeader
        overline="Comunicados e Informações"
        title="Avisos Paroquiais"
        description="Fique por dentro de todas as novidades e comunicados da nossa paróquia"
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      {/* Filtros */}
      <SectionReveal>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all hover:bg-primary/90">
            Todos
          </button>
          <button className="px-6 py-2 rounded-full bg-card/50 text-foreground/70 font-medium text-sm transition-all hover:bg-card border border-border/30">
            Urgentes
          </button>
          <button className="px-6 py-2 rounded-full bg-card/50 text-foreground/70 font-medium text-sm transition-all hover:bg-card border border-border/30">
            Importantes
          </button>
          <button className="px-6 py-2 rounded-full bg-card/50 text-foreground/70 font-medium text-sm transition-all hover:bg-card border border-border/30">
            Informativos
          </button>
        </div>
      </SectionReveal>

      {/* Lista de Avisos */}
      <div className="max-w-4xl mx-auto space-y-4 mb-16">
        {avisos.map((aviso, index) => {
          const styles = getTipoStyles(aviso.tipo)
          const Icon = styles.icon

          return (
            <SectionReveal key={aviso.id}>
              <motion.div
                className={`${styles.bg} backdrop-blur-sm rounded-xl p-4 md:p-5 border ${styles.border}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className={`w-10 h-10 rounded-full ${styles.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${styles.iconColor}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider ${styles.badge}`}>
                        {aviso.tipo}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-serif text-foreground mb-2">
                      {aviso.titulo}
                    </h3>
                    
                    <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                      {aviso.descricao}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 text-xs text-foreground/60">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{aviso.data}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{aviso.local}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          )
        })}
      </div>

      {/* Avisos Fixos */}
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 mb-8">
            <h2 className="text-xl font-serif text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Informações Permanentes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-medium text-foreground text-sm">Horário da Secretaria</h3>
                <div className="space-y-1.5 text-sm text-foreground/70">
                  <p>Segunda a Sexta: 8h às 12h e 14h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-foreground text-sm">Contato para Avisos</h3>
                <div className="space-y-1.5 text-sm text-foreground/70">
                  <p>Para publicar avisos no boletim paroquial, entre em contato com a secretaria até quinta-feira.</p>
                  <p>Email: avisos@paroquiasaopedroesaopaulo.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Inscreva-se */}
        <SectionReveal>
          <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-6 text-center border border-primary/20 mb-16">
            <Users className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="text-xl font-serif text-foreground mb-2">
              Receba os Avisos por WhatsApp
            </h2>
            <p className="text-sm text-foreground/70 mb-5 max-w-xl mx-auto">
              Cadastre-se em nosso grupo de avisos e receba todas as informações diretamente no seu celular.
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de receber os avisos da paróquia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-green-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Entrar no Grupo
            </a>
          </div>
        </SectionReveal>
      </div>
      </div>
    </PageLayout>
  )
}

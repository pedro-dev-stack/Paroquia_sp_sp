"use client"

import { motion } from "framer-motion"
import { Clock, Phone, Mail, MapPin, FileText, Users, Calendar, CreditCard, ChevronRight } from "lucide-react"
import { PageLayout, PageHeader } from "@/components/layouts/page-layout"
import { SectionReveal } from "@/components/cathedral/section-reveal"

export default function SecretariaPage() {
  const servicos = [
    {
      titulo: "Certidões de Batismo",
      descricao: "Emissão de segunda via de certidão de batismo para diversos fins.",
      documentos: ["RG do solicitante", "Data aproximada do batismo", "Nome completo do batizado"],
      prazo: "3 dias úteis",
      taxa: "R$ 15,00"
    },
    {
      titulo: "Certidões de Casamento",
      descricao: "Emissão de segunda via de certidão de casamento religioso.",
      documentos: ["RG do solicitante", "Data do casamento", "Nomes dos cônjuges"],
      prazo: "3 dias úteis",
      taxa: "R$ 15,00"
    },
    {
      titulo: "Declaração de Crisma",
      descricao: "Documento comprovando a recepção do Sacramento da Confirmação.",
      documentos: ["RG do solicitante", "Data aproximada da Crisma"],
      prazo: "3 dias úteis",
      taxa: "R$ 10,00"
    },
    {
      titulo: "Inscrição para Catequese",
      descricao: "Matrícula nos cursos de catequese (infantil, perseverança e adultos).",
      documentos: ["Certidão de nascimento", "Certidão de batismo", "Comprovante de residência", "Foto 3x4"],
      prazo: "Imediato",
      taxa: "Contribuição espontânea"
    },
    {
      titulo: "Agendamento de Batizado",
      descricao: "Marcação de data para celebração do Sacramento do Batismo.",
      documentos: ["Certidão de nascimento", "RG dos pais", "Comprovante de residência", "Nomes dos padrinhos"],
      prazo: "Consultar disponibilidade",
      taxa: "Contribuição espontânea"
    },
    {
      titulo: "Processo Matrimonial",
      descricao: "Abertura de processo para celebração do Sacramento do Matrimônio.",
      documentos: ["RG e CPF dos noivos", "Certidão de nascimento atualizada", "Certidão de batismo atualizada", "Comprovante de residência"],
      prazo: "Mínimo 3 meses antes",
      taxa: "Consultar"
    },
    {
      titulo: "Intenções de Missa",
      descricao: "Solicitação de missas em intenção de pessoas vivas ou falecidas.",
      documentos: ["Nome completo da pessoa", "Intenção (ação de graças, falecimento, etc.)"],
      prazo: "Imediato",
      taxa: "Contribuição espontânea"
    },
    {
      titulo: "Reserva de Espaços",
      descricao: "Agendamento do salão paroquial e outras dependências para eventos.",
      documentos: ["Descrição do evento", "Data e horário pretendidos", "Número de participantes"],
      prazo: "Consultar disponibilidade",
      taxa: "Variável"
    }
  ]

  const horarios = [
    { dia: "Segunda-feira", horario: "8h às 12h / 14h às 18h" },
    { dia: "Terça-feira", horario: "8h às 12h / 14h às 18h" },
    { dia: "Quarta-feira", horario: "8h às 12h / 14h às 18h" },
    { dia: "Quinta-feira", horario: "8h às 12h / 14h às 18h" },
    { dia: "Sexta-feira", horario: "8h às 12h / 14h às 18h" },
    { dia: "Sábado", horario: "8h às 12h" },
    { dia: "Domingo", horario: "Fechado" }
  ]

  return (
    <PageLayout>
      <PageHeader
        overline="Atendimento e Serviços"
        title="Secretaria Paroquial"
        description="Informações sobre documentos, certidões e serviços oferecidos pela secretaria"
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
      {/* Horário de Funcionamento */}
      <SectionReveal>
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Horário de Funcionamento</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {horarios.map((item, index) => (
              <motion.div
                key={item.dia}
                className={`bg-background/50 rounded-xl p-4 text-center border border-border/20 ${
                  item.dia === "Domingo" ? "opacity-50" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-foreground mb-1">{item.dia}</h3>
                <p className="text-foreground/70 text-sm">{item.horario}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Contatos */}
      <SectionReveal>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.a
            href="tel:+551199999999"
            className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 flex items-center gap-4 hover:bg-card/50 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-foreground/60 text-sm">Telefone</p>
              <p className="text-foreground font-medium">(11) 9999-9999</p>
            </div>
          </motion.a>
          
          <motion.a
            href="mailto:secretaria@paroquiasaopedroesaopaulo.com.br"
            className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 flex items-center gap-4 hover:bg-card/50 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-foreground/60 text-sm">E-mail</p>
              <p className="text-foreground font-medium text-sm">secretaria@paroquia...</p>
            </div>
          </motion.a>
          
          <motion.div
            className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-foreground/60 text-sm">Endereço</p>
              <p className="text-foreground font-medium text-sm">Rua da Igreja, 123</p>
            </div>
          </motion.div>
        </div>
      </SectionReveal>

      {/* Serviços */}
      <SectionReveal>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Serviços Disponíveis</h2>
          </div>
          
          <div className="space-y-4">
            {servicos.map((servico, index) => (
              <motion.details
                key={servico.titulo}
                className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/20 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <summary className="p-6 cursor-pointer flex items-center justify-between hover:bg-card/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{servico.titulo}</h3>
                      <p className="text-foreground/60 text-sm">{servico.descricao}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-foreground/40 group-open:rotate-90 transition-transform" />
                </summary>
                
                <div className="px-6 pb-6 pt-2 border-t border-border/20">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Documentos Necessários</h4>
                      <ul className="space-y-1">
                        {servico.documentos.map((doc, i) => (
                          <li key={i} className="text-foreground/70 text-sm flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Prazo</h4>
                      <p className="text-foreground/70 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        {servico.prazo}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Taxa</h4>
                      <p className="text-foreground/70 text-sm flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-primary" />
                        {servico.taxa}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Equipe */}
      <SectionReveal>
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Nossa Equipe</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">Maria da Silva</h3>
              <p className="text-foreground/60 text-sm">Secretária Paroquial</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">João Santos</h3>
              <p className="text-foreground/60 text-sm">Auxiliar Administrativo</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">Ana Oliveira</h3>
              <p className="text-foreground/60 text-sm">Recepcionista</p>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Informações Importantes */}
      <SectionReveal>
        <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-border/20">
          <h2 className="text-xl font-serif text-foreground mb-4">Informações Importantes</h2>
          <ul className="space-y-3 text-foreground/70">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Para solicitação de documentos, é necessário comparecer pessoalmente ou enviar um representante com procuração.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Certidões de batismo e casamento só podem ser emitidas se o sacramento foi realizado nesta paróquia.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Para processos matrimoniais, é obrigatória a participação no curso de preparação para noivos.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Dúvidas podem ser esclarecidas por telefone ou WhatsApp antes da visita presencial.
            </li>
          </ul>
        </div>
      </SectionReveal>
      </div>
    </PageLayout>
  )
}

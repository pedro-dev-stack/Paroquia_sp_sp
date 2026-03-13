"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, GraduationCap, Calendar, Clock, MapPin, ChevronRight } from "lucide-react"
import PageLayout from "@/components/layouts/page-layout"
import { SectionReveal } from "@/components/cathedral/section-reveal"

export default function FormacaoPage() {
  const cursos = [
    {
      id: 1,
      titulo: "Catequese Infantil",
      descricao: "Formação cristã para crianças de 7 a 10 anos, preparando-as para a Primeira Eucaristia.",
      idade: "7 a 10 anos",
      duracao: "2 anos",
      horario: "Sábados, 14h às 16h",
      vagas: "Abertas",
      cor: "bg-blue-500"
    },
    {
      id: 2,
      titulo: "Catequese de Perseverança",
      descricao: "Continuação da formação após a Primeira Eucaristia, aprofundando a fé e preparando para a Crisma.",
      idade: "11 a 14 anos",
      duracao: "3 anos",
      horario: "Sábados, 16h às 18h",
      vagas: "Abertas",
      cor: "bg-green-500"
    },
    {
      id: 3,
      titulo: "Crisma Jovens e Adultos",
      descricao: "Preparação para o Sacramento da Confirmação para jovens a partir de 15 anos e adultos.",
      idade: "15+ anos",
      duracao: "1 ano",
      horario: "Sábados, 15h às 17h",
      vagas: "Abertas",
      cor: "bg-amber-500"
    },
    {
      id: 4,
      titulo: "Catequese de Adultos",
      descricao: "Para adultos que desejam receber os sacramentos de iniciação cristã (Batismo, Eucaristia e Crisma).",
      idade: "Adultos",
      duracao: "1 ano",
      horario: "Quartas, 19h30 às 21h",
      vagas: "Abertas",
      cor: "bg-primary"
    }
  ]

  const gruposEstudo = [
    {
      nome: "Lectio Divina",
      descricao: "Leitura orante da Palavra de Deus, meditando e contemplando as Escrituras.",
      horario: "Terças, 19h30",
      local: "Sala São Paulo"
    },
    {
      nome: "Estudo Bíblico",
      descricao: "Aprofundamento sistemático das Sagradas Escrituras com método histórico-crítico.",
      horario: "Quintas, 19h30",
      local: "Sala São Pedro"
    },
    {
      nome: "Doutrina Social da Igreja",
      descricao: "Estudo dos documentos sociais da Igreja e sua aplicação na vida cotidiana.",
      horario: "1º Sábado do mês, 9h",
      local: "Salão Paroquial"
    },
    {
      nome: "Teologia para Leigos",
      descricao: "Curso de formação teológica básica para aprofundar o conhecimento da fé.",
      horario: "Segundas, 19h30",
      local: "Sala São Paulo"
    }
  ]

  const formacoesEspecificas = [
    {
      titulo: "Formação para Casais",
      descricao: "Encontros mensais para casais que desejam fortalecer seu matrimônio à luz da fé.",
      proximo: "2º Sábado de cada mês"
    },
    {
      titulo: "Formação para Catequistas",
      descricao: "Capacitação pedagógica e espiritual para os catequistas da paróquia.",
      proximo: "Último sábado de cada mês"
    },
    {
      titulo: "Formação para Ministros",
      descricao: "Encontros de formação continuada para ministros da Eucaristia e da Palavra.",
      proximo: "1º Domingo de cada mês, após a Missa"
    },
    {
      titulo: "Formação para Liturgia",
      descricao: "Capacitação para coroinhas, leitores, salmistas e demais ministérios litúrgicos.",
      proximo: "Quinzenalmente, aos sábados"
    }
  ]

  return (
    <PageLayout
      title="Formação Cristã"
      subtitle="Crescendo na Fé"
      description="Cursos, estudos e formações para aprofundar seu conhecimento da fé católica"
    >
      {/* Introdução */}
      <SectionReveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-foreground/80 leading-relaxed">
            A formação cristã é essencial para o crescimento espiritual. Nossa paróquia oferece 
            diversas oportunidades para você aprofundar sua fé, conhecer melhor a doutrina da Igreja 
            e se preparar para os Sacramentos.
          </p>
        </div>
      </SectionReveal>

      {/* Catequese */}
      <SectionReveal>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Catequese</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cursos.map((curso, index) => (
              <motion.div
                key={curso.id}
                className="bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`h-2 ${curso.cor}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-serif text-foreground">{curso.titulo}</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-600 text-xs font-medium rounded-full">
                      {curso.vagas}
                    </span>
                  </div>
                  
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                    {curso.descricao}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-foreground/60">
                      <Users className="w-4 h-4" />
                      <span>Idade: {curso.idade}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/60">
                      <Calendar className="w-4 h-4" />
                      <span>Duração: {curso.duracao}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/60">
                      <Clock className="w-4 h-4" />
                      <span>{curso.horario}</span>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-primary/10 text-primary py-2 rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                    Fazer Inscrição
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Grupos de Estudo */}
      <SectionReveal>
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Grupos de Estudo</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {gruposEstudo.map((grupo, index) => (
              <motion.div
                key={grupo.nome}
                className="bg-background/50 rounded-xl p-5 border border-border/20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-medium text-foreground mb-2">{grupo.nome}</h3>
                <p className="text-foreground/70 text-sm mb-4">{grupo.descricao}</p>
                <div className="flex flex-wrap gap-4 text-xs text-foreground/60">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {grupo.horario}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {grupo.local}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Formações Específicas */}
      <SectionReveal>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Formações Específicas</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {formacoesEspecificas.map((formacao, index) => (
              <motion.div
                key={formacao.titulo}
                className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-6 border border-border/20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-medium text-foreground mb-2">{formacao.titulo}</h3>
                <p className="text-foreground/70 text-sm mb-4">{formacao.descricao}</p>
                <div className="flex items-center gap-2 text-primary text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{formacao.proximo}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Biblioteca Paroquial */}
      <SectionReveal>
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 mb-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-foreground mb-2">Biblioteca Paroquial</h2>
              <p className="text-foreground/70 leading-relaxed">
                Nossa biblioteca conta com mais de 500 títulos entre livros de espiritualidade, 
                teologia, documentos da Igreja, vidas de santos e literatura católica. 
                Os empréstimos são gratuitos para os paroquianos.
              </p>
              <p className="text-foreground/60 text-sm mt-4">
                <strong>Horário:</strong> Segunda a Sexta, 9h às 17h | <strong>Local:</strong> Sala anexa à Secretaria
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* CTA Inscrição */}
      <SectionReveal>
        <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-8 text-center border border-primary/20">
          <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-foreground mb-3">
            Inscreva-se em Nossos Cursos
          </h2>
          <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
            As inscrições podem ser feitas presencialmente na secretaria paroquial ou pelo WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Falar com a Secretaria
            </a>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de me inscrever em um curso de formação"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </SectionReveal>
    </PageLayout>
  )
}

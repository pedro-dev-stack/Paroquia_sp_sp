"use client"

import { motion } from "framer-motion"
import { Heart, Clock, Calendar, BookOpen, CheckCircle, XCircle } from "lucide-react"
import { PageLayout, PageHeader } from "@/components/layouts/page-layout"
import { SectionReveal } from "@/components/cathedral/section-reveal"

export default function ConfissoesPage() {
  const horarios = [
    { dia: "Segunda a Sexta", horario: "17h às 18h", disponivel: true },
    { dia: "Sábado", horario: "15h às 17h", disponivel: true },
    { dia: "Domingo", horario: "Antes das Missas", disponivel: true },
    { dia: "Quaresma", horario: "Horários especiais", disponivel: true }
  ]

  const passosConfissao = [
    {
      numero: 1,
      titulo: "Exame de Consciência",
      descricao: "Reserve um momento de silêncio para refletir sobre suas ações, pensamentos e omissões à luz dos mandamentos de Deus."
    },
    {
      numero: 2,
      titulo: "Arrependimento",
      descricao: "Reconheça seus pecados com sincero arrependimento, desejando verdadeiramente a reconciliação com Deus."
    },
    {
      numero: 3,
      titulo: "Confissão",
      descricao: "Confesse seus pecados ao sacerdote de forma clara e completa, sem omitir pecados graves por vergonha."
    },
    {
      numero: 4,
      titulo: "Penitência",
      descricao: "Aceite a penitência dada pelo sacerdote como forma de reparação e crescimento espiritual."
    },
    {
      numero: 5,
      titulo: "Absolvição",
      descricao: "Receba a absolvição sacramental, momento em que Deus perdoa seus pecados através do ministério do sacerdote."
    },
    {
      numero: 6,
      titulo: "Propósito de Mudança",
      descricao: "Comprometa-se firmemente a evitar o pecado e as ocasiões que levam a ele, buscando uma vida mais santa."
    }
  ]

  const exameMandamentos = [
    { mandamento: "1º - Amar a Deus sobre todas as coisas", perguntas: ["Coloquei algo ou alguém acima de Deus?", "Negligenciei a oração?", "Pratiquei superstição ou ocultismo?"] },
    { mandamento: "2º - Não tomar o Nome de Deus em vão", perguntas: ["Usei o nome de Deus de forma desrespeitosa?", "Fiz juramentos falsos?"] },
    { mandamento: "3º - Guardar domingos e festas", perguntas: ["Faltei à Missa dominical sem motivo grave?", "Trabalhei sem necessidade aos domingos?"] },
    { mandamento: "4º - Honrar pai e mãe", perguntas: ["Desobedeci ou desrespeitei meus pais?", "Negligenciei o cuidado com familiares idosos?"] },
    { mandamento: "5º - Não matar", perguntas: ["Pratiquei ou apoiei o aborto?", "Alimentei ódio ou desejo de vingança?", "Fui violento em palavras ou ações?"] },
    { mandamento: "6º e 9º - Não pecar contra a castidade", perguntas: ["Cometi adultério ou fornicação?", "Consumi pornografia?", "Tive pensamentos impuros deliberados?"] },
    { mandamento: "7º e 10º - Não roubar nem cobiçar", perguntas: ["Roubei ou prejudiquei alguém em bens materiais?", "Fui desonesto nos negócios?", "Invejei os bens alheios?"] },
    { mandamento: "8º - Não levantar falso testemunho", perguntas: ["Menti ou enganei?", "Fiz fofoca ou prejudiquei a reputação de alguém?", "Julguei precipitadamente?"] }
  ]

  return (
    <PageLayout>
      <PageHeader
        overline="Confissão"
        title="Sacramento da Reconciliação"
        description="Encontre a paz e a misericórdia de Deus através do Sacramento da Confissão"
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
      {/* Introdução */}
      <SectionReveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <blockquote className="text-xl md:text-2xl font-serif text-foreground/90 italic leading-relaxed">
            &ldquo;Se confessarmos os nossos pecados, Ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.&rdquo;
          </blockquote>
          <p className="text-foreground/60 mt-4">1 João 1,9</p>
        </div>
      </SectionReveal>

      {/* Horários */}
      <SectionReveal>
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Horários das Confissões</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {horarios.map((item, index) => (
              <motion.div
                key={item.dia}
                className="bg-background/50 rounded-xl p-5 text-center border border-border/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-medium text-foreground mb-1">{item.dia}</h3>
                <p className="text-primary font-semibold">{item.horario}</p>
                {item.disponivel && (
                  <span className="inline-flex items-center gap-1 text-xs text-green-600 mt-2">
                    <CheckCircle className="w-3 h-3" />
                    Disponível
                  </span>
                )}
              </motion.div>
            ))}
          </div>
          
          <p className="text-foreground/60 text-sm mt-6 text-center">
            Para confissões fora desses horários, entre em contato com a secretaria paroquial para agendar.
          </p>
        </div>
      </SectionReveal>

      {/* Passos da Confissão */}
      <SectionReveal>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Como se Confessar</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passosConfissao.map((passo, index) => (
              <motion.div
                key={passo.numero}
                className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{passo.numero}</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">{passo.titulo}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{passo.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Exame de Consciência */}
      <SectionReveal>
        <div className="bg-linear-to-br from-primary/5 to-transparent rounded-2xl p-8 border border-border/20 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Exame de Consciência</h2>
          </div>
          
          <div className="space-y-6">
            {exameMandamentos.map((item, index) => (
              <motion.div
                key={item.mandamento}
                className="bg-background/50 rounded-xl p-5 border border-border/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-foreground mb-3">{item.mandamento}</h3>
                <ul className="space-y-2">
                  {item.perguntas.map((pergunta, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/70 text-sm">
                      <span className="text-primary mt-1">•</span>
                      {pergunta}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Ato de Contrição */}
      <SectionReveal>
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 mb-16">
          <h2 className="text-2xl font-serif text-foreground mb-6 text-center">Ato de Contrição</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-foreground/80 leading-relaxed text-center italic">
              &ldquo;Meu Deus, porque sois infinitamente bom e Vos amo de todo o meu coração, 
              pesa-me de Vos ter ofendido. E com o auxílio da Vossa divina graça, 
              proponho firmemente emendar-me e nunca mais Vos tornar a ofender. 
              Peço e espero o perdão das minhas culpas pela Vossa infinita misericórdia. Amém.&rdquo;
            </p>
          </div>
        </div>
      </SectionReveal>

      {/* O que não é a Confissão */}
      <SectionReveal>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3 className="font-medium text-foreground">A Confissão é...</h3>
            </div>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>• Um encontro com a misericórdia de Deus</li>
              <li>• Sacramento da cura e reconciliação</li>
              <li>• Oportunidade de crescimento espiritual</li>
              <li>• Caminho para a paz interior</li>
              <li>• Restauração da comunhão com Deus e a Igreja</li>
            </ul>
          </div>
          
          <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-red-500" />
              <h3 className="font-medium text-foreground">A Confissão não é...</h3>
            </div>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>• Um tribunal de condenação</li>
              <li>• Momento de julgamento humano</li>
              <li>• Apenas uma conversa com o padre</li>
              <li>• Uma obrigação sem sentido</li>
              <li>• Motivo de vergonha ou medo</li>
            </ul>
          </div>
        </div>
      </SectionReveal>
      </div>
    </PageLayout>
  )
}

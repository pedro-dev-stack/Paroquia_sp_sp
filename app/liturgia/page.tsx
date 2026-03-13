"use client"

import { motion } from "framer-motion"
import { BookOpen, Calendar, Music, Heart, Sun, Moon, Star } from "lucide-react"
import { PageLayout, PageHeader } from "@/components/layouts/page-layout"
import { SectionReveal } from "@/components/cathedral/section-reveal"

export default function LiturgiaPage() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const liturgiaHoje = {
    corLiturgica: "Verde",
    tempo: "Tempo Comum",
    semana: "10ª Semana do Tempo Comum",
    santo: "São Barnabé, Apóstolo",
    primeiraLeitura: {
      referencia: "At 11,21b-26; 13,1-3",
      titulo: "Barnabé era homem virtuoso, cheio do Espírito Santo e de fé",
      texto: "Naqueles dias, em Antioquia, um grande número de pessoas abraçou a fé e se converteu ao Senhor. A notícia chegou aos ouvidos da Igreja de Jerusalém, e enviaram Barnabé a Antioquia..."
    },
    salmo: {
      referencia: "Sl 97(98)",
      refrão: "O Senhor fez conhecer a salvação e às nações revelou sua justiça."
    },
    evangelho: {
      referencia: "Mt 10,7-13",
      titulo: "De graça recebestes, de graça deveis dar",
      texto: "Naquele tempo, disse Jesus aos seus apóstolos: Em vosso caminho, proclamai que o Reino dos Céus está próximo. Curai os doentes, ressuscitai os mortos, purificai os leprosos, expulsai os demônios..."
    }
  }

  const cantos = [
    { momento: "Entrada", nome: "Vinde, ó cristãos, cantemos", numero: "123" },
    { momento: "Ato Penitencial", nome: "Senhor, piedade", numero: "45" },
    { momento: "Glória", nome: "Glória a Deus nas alturas", numero: "67" },
    { momento: "Aclamação", nome: "Aleluia, Aleluia", numero: "89" },
    { momento: "Ofertório", nome: "Recebe, ó Pai", numero: "234" },
    { momento: "Santo", nome: "Santo, Santo, Santo", numero: "156" },
    { momento: "Cordeiro", nome: "Cordeiro de Deus", numero: "178" },
    { momento: "Comunhão", nome: "Eu vim para que todos", numero: "345" },
    { momento: "Final", nome: "A Bênção de Deus", numero: "456" }
  ]

  return (
    <PageLayout>
      <PageHeader
        overline={formattedDate}
        title="Liturgia Diária"
        description="Acompanhe as leituras, reflexões e cantos da liturgia de hoje"
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
      {/* Cor Litúrgica */}
      <SectionReveal>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/30">
            <div className="w-4 h-4 rounded-full bg-green-600" />
            <span className="text-foreground/80">Cor Litúrgica: <strong className="text-foreground">{liturgiaHoje.corLiturgica}</strong></span>
          </div>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/30">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-foreground/80">{liturgiaHoje.tempo}</span>
          </div>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/30">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-foreground/80">{liturgiaHoje.santo}</span>
          </div>
        </div>
      </SectionReveal>

      {/* Leituras do Dia */}
      <div className="space-y-8 mb-16">
        {/* Primeira Leitura */}
        <SectionReveal>
          <motion.div
            className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Sun className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-foreground">Primeira Leitura</h3>
                <p className="text-sm text-foreground/60">{liturgiaHoje.primeiraLeitura.referencia}</p>
              </div>
            </div>
            <h4 className="text-xl font-medium text-foreground mb-4 italic">
              {liturgiaHoje.primeiraLeitura.titulo}
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              {liturgiaHoje.primeiraLeitura.texto}
            </p>
          </motion.div>
        </SectionReveal>

        {/* Salmo */}
        <SectionReveal>
          <motion.div
            className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-foreground">Salmo Responsorial</h3>
                <p className="text-sm text-foreground/60">{liturgiaHoje.salmo.referencia}</p>
              </div>
            </div>
            <p className="text-xl font-medium text-primary text-center py-4">
              &ldquo;{liturgiaHoje.salmo.refrão}&rdquo;
            </p>
          </motion.div>
        </SectionReveal>

        {/* Evangelho */}
        <SectionReveal>
          <motion.div
            className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-foreground">Evangelho</h3>
                <p className="text-sm text-foreground/60">{liturgiaHoje.evangelho.referencia}</p>
              </div>
            </div>
            <h4 className="text-xl font-medium text-foreground mb-4 italic">
              {liturgiaHoje.evangelho.titulo}
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              {liturgiaHoje.evangelho.texto}
            </p>
          </motion.div>
        </SectionReveal>
      </div>

      {/* Reflexão */}
      <SectionReveal>
        <div className="bg-linear-to-br from-primary/5 to-transparent rounded-2xl p-8 mb-16 border border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Reflexão do Dia</h2>
          </div>
          <blockquote className="text-lg text-foreground/80 leading-relaxed italic border-l-4 border-primary/30 pl-6">
            &ldquo;A gratuidade é a marca do discípulo de Cristo. O que recebemos de Deus não pode ser guardado apenas para nós, 
            mas deve ser partilhado com generosidade. O amor verdadeiro não calcula, não mede, simplesmente se doa.&rdquo;
          </blockquote>
          <p className="text-right text-foreground/60 mt-4">- Reflexão Diária</p>
        </div>
      </SectionReveal>

      {/* Cantos Sugeridos */}
      <SectionReveal>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Music className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">Cantos Sugeridos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {cantos.map((canto, index) => (
              <motion.div
                key={canto.momento}
                className="bg-card/30 backdrop-blur-sm rounded-xl p-4 border border-border/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                  {canto.momento}
                </p>
                <p className="text-foreground font-medium">{canto.nome}</p>
                <p className="text-foreground/60 text-sm">Hinário #{canto.numero}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Liturgia das Horas */}
      <SectionReveal>
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
          <h2 className="text-2xl font-serif text-foreground mb-6">Liturgia das Horas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <Sun className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Laudes (Oração da Manhã)</h3>
                <p className="text-foreground/70 text-sm">Às 6h - Louvor matinal para consagrar o dia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Vésperas (Oração da Tarde)</h3>
                <p className="text-foreground/70 text-sm">Às 18h - Ação de graças pelo dia vivido</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                <Moon className="w-6 h-6 text-indigo-500" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Completas (Oração da Noite)</h3>
                <p className="text-foreground/70 text-sm">Às 21h - Entrega do dia a Deus antes do repouso</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Hora Média</h3>
                <p className="text-foreground/70 text-sm">Às 12h - Pausa para oração no meio do dia</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
      </div>
    </PageLayout>
  )
}

'use client'

import { SectionReveal } from '@/components/cathedral/section-reveal'
import { Book, Music, Cross } from 'lucide-react'
import { useEffect, useState } from 'react'
import TiltedCard from '@/components/card_saint'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

// Dados mockados temporários (substituir por API/banco depois)
const MOCK_DATA = {
  "03-13": {
    weekday: "quinta-feira",
    weekdayNumber: 4,
    liturgy: {
      liturgicalWeek: 9,
      season: "Tempo Comum",
      rank: "Feria",
      rankOrder: 6,
      color: "Verde",
      firstReading: {
        reference: "Est 4,17l.17m-n.17r-t",
        title: "Primeira Leitura",
        excerpt: "Rainha Ester, tomada pelo terror do perigo de morte, refugiou-se no Senhor. Ela orou ao Senhor, Deus de Israel, dizendo..."
      },
      psalm: {
        reference: "Sl 137(138)",
        response: "No dia em que clamei, respondestes-me, ó Senhor.",
        verses: [
          { verse: "Dar-vos-ei graças, Senhor, de todo o coração, porque ouvistes as palavras da minha boca." },
          { verse: "No dia em que clamei, respondestes-me; aumentastes a força em minha alma." },
          { verse: "Quando caminho no meio da angústia, vós me conservais a vida." },
          { verse: "O Senhor a tudo levará a bom termo; a vossa graça, Senhor, é eterna." }
        ]
      },
      gospel: {
        reference: "Mt 7,7-12",
        title: "Evangelho",
        excerpt: "Naquele tempo, disse Jesus aos seus discípulos: 'Pedi e recebereis; buscai e encontrareis; batei e vos abrirão.'..."
      },
      prayers: {
        collect: "Pai celestial, que nos ensinastes a pedir com confiança, receber com gratidão e partilhar com generosidade, concedei-nos a fé perseverante na oração e o coração aberto ao próximo.",
        overOfferings: "Recebei, ó Senhor, estas oblações que vos apresentamos confiantes na vossa bondade.",
        afterCommunion: "Que este sacramento aumente a nossa confiança em vós, ó Pai, e nos faça tratar os outros com a generosidade com que vós nos tratais."
      }
    },
    saints: [
      {
        name: "Santa Ângela de Foligno",
        slug: "santa-angela-de-foligno",
        title: "Religiosa",
        rank: "Memória Facultativa",
        description: "Mística italiana do século XIII, terciária franciscana. Após uma conversão profunda, viveu uma vida intensa de oração e penitência.",
        feast: "13 de Março",
        image: "/Sao_rodrigo_de_cordova.jpg",
        patron: ["místicos", "viúvas"]
      },
      {
        name: "São Rodrigo de Córdoba",
        slug: "sao-rodrigo-de-cordoba",
        title: "Mártir",
        rank: "Memória Facultativa",
        description: "Sacerdote espanhol martirizado em Córdoba no século IX durante a dominação mourisca.",
        feast: "13 de Março",
        image: "/Sao_rodrigo_de_cordova.jpg",
        patron: ["Córdoba", "mártires da Espanha"]
      }
    ]
  }
}

// Função para obter a data atual no formato MM-DD
function getCurrentDateKey(): { month: string; day: string } {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return { month, day }
}

// Função para obter os dados litúrgicos do dia
async function getTodayLiturgy() {
  const { month, day } = getCurrentDateKey()
  const dateKey = `${month}-${day}`
  
  // Busca nos dados mockados
  const todayData = MOCK_DATA[dateKey as keyof typeof MOCK_DATA]
  
  if (!todayData) {
    console.log('Dados não encontrados para:', dateKey)
    return null
  }
  
  // Detecta ano litúrgico (ímpar = Ano I, par = Ano II)
  const year = new Date().getFullYear()
  const isOddYear = year % 2 !== 0
  
  const today = new Date()
  const dayName = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today)
  const dayNameCapitalized = dayName.charAt(0).toUpperCase() + dayName.slice(1)
  
  return {
    ...todayData,
    displayDate: dayNameCapitalized,
    liturgicalYear: isOddYear ? 'Ano I' : 'Ano II'
  }
}

// Função para obter a classe CSS da cor litúrgica
function getLiturgicalColorClass(color: string): string {
  const colors: { [key: string]: string } = {
    'Branco': 'bg-white text-gray-900',
    'Vermelho': 'bg-red-900/30 text-red-400',
    'Verde': 'bg-green-900/30 text-green-400',
    'Roxo': 'bg-purple-900/30 text-purple-400',
    'Rosa': 'bg-pink-900/30 text-pink-400'
  }
  return colors[color] || 'bg-green-900/30 text-green-400'
}

export function LiturgySection() {
  const [todayLiturgy, setTodayLiturgy] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Só busca os dados no cliente para evitar hydration mismatch
    getTodayLiturgy().then(data => {
      setTodayLiturgy(data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return (
      <section id="liturgia" className="relative py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-muted-foreground">Carregando liturgia do dia...</div>
        </div>
      </section>
    )
  }

  if (!todayLiturgy) {
    return (
      <section id="liturgia" className="relative py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-muted-foreground">Liturgia do dia não disponível.</div>
        </div>
      </section>
    )
  }

  const { liturgy, saints } = todayLiturgy
  const colorClass = getLiturgicalColorClass(liturgy.color)
  
  // Suporta tanto array de santos quanto objeto único (retrocompatibilidade)
  const saintsArray = Array.isArray(saints) ? saints : (saints ? [saints] : [])
  return (
    <section id="liturgia" className="relative py-32 bg-secondary/20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">
            Palavra de Deus
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            Liturgia do Dia
          </h2>
          <p className="text-lg text-muted-foreground">
            {liturgy.liturgicalWeek && liturgy.season ? `${liturgy.season} - ${liturgy.liturgicalWeek}ª Semana` : liturgy.season || ''}
          </p>
          {todayLiturgy.liturgicalYear && liturgy.rankOrder >= 5 && (
            <p className="text-sm text-muted-foreground mt-2">
              {todayLiturgy.liturgicalYear}
            </p>
          )}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs tracking-wide uppercase ${colorClass} rounded`}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'currentColor' }} />
              Cor Litúrgica: {liturgy.color}
            </span>
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Readings Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* First Reading */}
            <SectionReveal delay={0.1}>
              <div className="relative p-8 bg-card/50 border border-border/50 rounded overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary/50 via-primary/20 to-transparent" />
                
                <div className="flex items-center gap-3 mb-4">
                  <Book className="h-5 w-5 text-primary/70" />
                  <span className="text-sm tracking-wide text-muted-foreground">
                    {liturgy.firstReading.title}
                  </span>
                </div>
                
                <p className="text-sm font-medium text-primary mb-4">
                  {liturgy.firstReading.reference}
                </p>
                
                <p className="text-foreground/90 leading-relaxed">
                  {liturgy.firstReading.excerpt}
                </p>
              </div>
            </SectionReveal>
            
            {/* Psalm */}
            <SectionReveal delay={0.2}>
              <div className="relative p-8 bg-card/30 border border-border/50 rounded">
                <div className="flex items-center gap-3 mb-4">
                  <Music className="h-5 w-5 text-primary/70" />
                  <span className="text-sm tracking-wide text-muted-foreground">
                    Salmo Responsorial
                  </span>
                </div>
                
                <p className="text-sm font-medium text-primary mb-4">
                  {liturgy.psalm.reference}
                </p>
                
                <p className="font-serif text-xl text-foreground italic">
                  &ldquo;{liturgy.psalm.response}&rdquo;
                </p>
              </div>
            </SectionReveal>
            
            {/* Gospel */}
            <SectionReveal delay={0.3}>
              <div className="relative p-8 bg-linear-to-br from-primary/5 to-transparent border border-primary/20 rounded overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/50 via-primary/30 to-transparent" />
                
                <div className="flex items-center gap-3 mb-4">
                  <Cross className="h-5 w-5 text-primary" />
                  <span className="text-sm tracking-wide text-primary/80 font-medium">
                    {liturgy.gospel.title}
                  </span>
                </div>
                
                <p className="text-sm font-medium text-primary mb-4">
                  {liturgy.gospel.reference}
                </p>
                
                <p className="font-serif text-xl text-foreground leading-relaxed">
                  {liturgy.gospel.excerpt}
                </p>
                
                <a
                  href="/liturgia"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Ler leituras completas
                  <span>→</span>
                </a>
              </div>
            </SectionReveal>
          </div>
          
          {/* Saint of the Day Column */}
          <SectionReveal delay={0.4} className="lg:col-span-1">
            <div className="sticky top-28 p-8 bg-card/50 border border-border/50 rounded">
              <p className="text-sm tracking-[0.2em] uppercase text-primary/60 mb-6">
                Santo{saintsArray.length > 1 ? 's' : ''} do Dia
              </p>
              
              {saintsArray.length > 0 ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {saintsArray.map((saint, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-square mb-6 overflow-hidden">
                          {saint.image ? (
                            <TiltedCard
                              imageSrc={saint.image}
                              altText={saint.name}
                              captionText={saint.name}
                              containerHeight="100%"
                              containerWidth="100%"
                              imageHeight="100%"
                              imageWidth="100%"
                              scaleOnHover={1.05}
                              rotateAmplitude={10}
                              showMobileWarning={false}
                              showTooltip={false}
                            />
                          ) : (
                            <div className="relative aspect-square bg-secondary/50 rounded overflow-hidden">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                                  <img src="./logo_preview.png" alt="Logo" className="w-16 h-16 object-contain" />
                                </div>
                              </div>
                              <div className="absolute inset-4 border border-primary/10 rounded" />
                            </div>
                          )}
                        </div>
                        
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground mb-2">
                            {saint.feast}
                          </p>
                          <h3 className="font-serif text-2xl text-foreground mb-1">
                            {saint.name}
                          </h3>
                          <p className="text-sm text-primary/70 mb-4">
                            {saint.title}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {saint.description}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {saintsArray.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 top-[60%]" />
                      <CarouselNext className="right-2 top-[60%]" />
                    </>
                  )}
                </Carousel>
              ) : (
                <div className="text-center text-muted-foreground">
                  Nenhum santo registrado para hoje.
                </div>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

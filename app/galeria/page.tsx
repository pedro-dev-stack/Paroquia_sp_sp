'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { PageLayout, PageHeader } from '@/components/layouts/page-layout'
import { SectionReveal } from '@/components/cathedral/section-reveal'
import { X, ChevronLeft, ChevronRight, Church, Users, Heart, Calendar } from 'lucide-react'

const galleryCategories = [
  { id: 'all', label: 'Todas', icon: Church },
  { id: 'celebrations', label: 'Celebrações', icon: Church },
  { id: 'community', label: 'Comunidade', icon: Users },
  { id: 'events', label: 'Eventos', icon: Calendar },
  { id: 'charity', label: 'Obras Sociais', icon: Heart },
]

const galleryItems = [
  { id: 1, category: 'celebrations', title: 'Missa de Natal 2025', aspect: 'portrait' },
  { id: 2, category: 'community', title: 'Festa Junina', aspect: 'landscape' },
  { id: 3, category: 'celebrations', title: 'Primeira Comunhão', aspect: 'portrait' },
  { id: 4, category: 'events', title: 'Retiro Quaresmal', aspect: 'landscape' },
  { id: 5, category: 'charity', title: 'Campanha do Agasalho', aspect: 'square' },
  { id: 6, category: 'celebrations', title: 'Procissão de Corpus Christi', aspect: 'landscape' },
  { id: 7, category: 'community', title: 'Encontro de Famílias', aspect: 'portrait' },
  { id: 8, category: 'events', title: 'Semana Santa', aspect: 'landscape' },
  { id: 9, category: 'celebrations', title: 'Crisma 2025', aspect: 'square' },
  { id: 10, category: 'charity', title: 'Páscoa Solidária', aspect: 'portrait' },
  { id: 11, category: 'community', title: 'Coral Paroquial', aspect: 'landscape' },
  { id: 12, category: 'events', title: 'Festa do Padroeiro', aspect: 'portrait' },
]

function GalleryItem({ item, onClick }: { item: typeof galleryItems[0]; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const aspectClasses = {
    portrait: 'row-span-2',
    landscape: 'col-span-2',
    square: '',
  }
  
  return (
    <motion.div
      ref={ref}
      className={`relative group cursor-pointer overflow-hidden rounded bg-secondary/50 ${aspectClasses[item.aspect as keyof typeof aspectClasses]}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Church className="h-12 w-12 text-muted-foreground/20" />
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-sm text-foreground font-medium">{item.title}</p>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)
  
  const handlePrev = () => {
    if (selectedImage === null) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    setSelectedImage(filteredItems[prevIndex].id)
  }
  
  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage)
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(filteredItems[nextIndex].id)
  }
  
  return (
    <PageLayout>
      <PageHeader
        overline="Memórias"
        title="Galeria"
        description="Momentos de fé, celebração e comunhão eternizados. Reviva as memórias da nossa comunidade paroquial."
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <SectionReveal className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </SectionReveal>
          
          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={() => setSelectedImage(item.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-secondary/50 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-secondary/50 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="relative max-w-4xl max-h-[80vh] mx-auto px-20">
            <div className="aspect-video bg-secondary/30 rounded flex items-center justify-center">
              <Church className="h-20 w-20 text-muted-foreground/30" />
            </div>
            <p className="text-center text-foreground mt-4">
              {filteredItems.find(item => item.id === selectedImage)?.title}
            </p>
          </div>
        </motion.div>
      )}
    </PageLayout>
  )
}

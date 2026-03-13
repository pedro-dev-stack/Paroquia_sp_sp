# Guia Rápido de Implementação - Otimizações de Performance

## ✅ Checklist de Implementação

### 1. Configuração Base (✓ Implementado)

- [x] `next.config.mjs` otimizado com image optimization
- [x] Tree shaking e bundle optimization
- [x] Cache headers configurados
- [x] Webpack optimizations

### 2. Estrutura de Arquivos (✓ Implementado)

```
lib/
├── cache.ts              # Sistema de cache com TTL
├── metadata.ts           # Helpers de SEO
├── performance.ts        # Utilitários de performance
└── utils.ts              # Helpers gerais

components/ui/
├── lazy-load.tsx         # Lazy loading wrapper
└── optimized-image.tsx   # Image component otimizado

hooks/
└── use-device-capabilities.ts  # Detecção de dispositivo
```

### 3. Páginas Otimizadas (✓ Implementado)

- [x] Home com lazy loading de seções
- [x] `/horarios` com SSG
- [x] `/contato` com SSR
- [x] Formulário de contato otimizado

### 4. SEO (✓ Implementado)

- [x] Metadata dinâmico
- [x] JSON-LD structured data
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Breadcrumbs

---

## 🔄 Como Aplicar em Outras Páginas

### Página SSG (Conteúdo Estático)

```typescript
// app/sua-pagina/page.tsx
import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { PageLayout } from '@/components/layouts/page-layout'

export const metadata: Metadata = genMeta({
  title: 'Título da Página',
  description: 'Descrição',
  url: '/sua-pagina',
})

// Força geração estática
export const revalidate = false

export default function SuaPagina() {
  return (
    <PageLayout
      title="Título"
      subtitle="Subtítulo"
      breadcrumbs={[
        { name: 'Início', url: '/' },
        { name: 'Sua Página', url: '/sua-pagina' },
      ]}
    >
      {/* Conteúdo */}
    </PageLayout>
  )
}
```

### Página ISR (Conteúdo Dinâmico)

```typescript
// app/eventos/page.tsx
export const revalidate = 3600 // Revalida a cada 1 hora

async function getEventos() {
  const res = await fetch('https://api.exemplo.com/eventos', {
    next: { revalidate: 3600 }
  })
  return res.json()
}

export default async function EventosPage() {
  const eventos = await getEventos()
  
  return (
    <PageLayout title="Eventos">
      {eventos.map(evento => (
        <EventCard key={evento.id} {...evento} />
      ))}
    </PageLayout>
  )
}
```

### Componente com Lazy Loading

```typescript
// components/sections/heavy-section.tsx
'use client'

import dynamic from 'next/dynamic'
import { LazyLoadSection } from '@/components/ui/lazy-load'

const HeavyComponent = dynamic(
  () => import('./heavy-component'),
  { loading: () => <Skeleton /> }
)

export function HeavySection() {
  return (
    <LazyLoadSection threshold={0.1} rootMargin="200px">
      <HeavyComponent />
    </LazyLoadSection>
  )
}
```

### Imagem Otimizada

```typescript
import { OptimizedImage } from '@/components/ui/optimized-image'

<OptimizedImage
  src="/imagem.jpg"
  alt="Descrição"
  width={800}
  height={600}
  priority={false}  // true apenas para imagens above-the-fold
  aspectRatio="16/9"
/>
```

---

## 🎯 Próximos Passos

### 1. Implementar API Routes (Opcional)

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Processar formulário
  
  return NextResponse.json({ success: true })
}
```

### 2. Adicionar Mais Páginas ISR

Páginas que devem usar ISR:
- `/avisos` - Avisos paroquiais (revalidate: 1800 = 30 min)
- `/galeria` - Galeria de fotos (revalidate: 86400 = 1 dia)
- `/liturgia` - Liturgia do dia (revalidate: 86400 = 1 dia)

### 3. Implementar Web Workers (Opcional)

Para cálculos pesados:

```typescript
// lib/workers/heavy-calculation.worker.ts
self.addEventListener('message', (e) => {
  const result = heavyCalculation(e.data)
  self.postMessage(result)
})
```

### 4. Adicionar Service Worker (PWA)

```typescript
// next.config.mjs
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
  // ... config
})
```

---

## 📊 Testes de Performance

### 1. Lighthouse

```bash
npm run build
npm start
npx lighthouse http://localhost:3000 --view
```

**Targets:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 2. WebPageTest

Teste em: https://www.webpagetest.org/

**Configurações:**
- Location: São Paulo, Brazil
- Browser: Chrome
- Connection: 3G Fast

### 3. Core Web Vitals

Monitore em produção:
- Google Search Console
- Vercel Analytics
- Chrome User Experience Report

---

## 🐛 Troubleshooting

### Problema: Imagens não carregam

**Solução:**
```javascript
// next.config.mjs
images: {
  remotePatterns: [
    { protocol: 'https', hostname: '**' }
  ]
}
```

### Problema: Hydration mismatch

**Solução:**
```typescript
// Use 'use client' e useEffect para dados dinâmicos
'use client'

export function Component() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    // Fetch data apenas no cliente
  }, [])
}
```

### Problema: Bundle muito grande

**Solução:**
```bash
# Analise o bundle
ANALYZE=true npm run build

# Identifique dependências pesadas e use dynamic import
```

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Web.dev Performance](https://web.dev/performance/)
- [Vercel Analytics](https://vercel.com/analytics)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 🎓 Boas Práticas

1. **Sempre use SSG quando possível** - É a opção mais rápida
2. **ISR para conteúdo que muda periodicamente** - Melhor que SSR
3. **SSR apenas quando necessário** - Dados em tempo real
4. **Lazy load tudo que não é crítico** - Reduz First Load JS
5. **Otimize imagens** - Maior impacto no LCP
6. **Use cache agressivamente** - Reduz requests
7. **Monitore constantemente** - Performance degrada com o tempo
8. **Teste em mobile real** - Não confie apenas em simuladores

---

## ✨ Resultado Esperado

Após implementar todas as otimizações:

- **Lighthouse Score**: 90-100 em todas as categorias
- **First Load JS**: < 100KB
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TTFB**: < 600ms
- **Mobile Performance**: Excelente mesmo em 3G

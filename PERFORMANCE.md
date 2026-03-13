# Arquitetura de Performance - Next.js 14

## 📋 Visão Geral

Este projeto foi otimizado para máxima performance usando Next.js 14 App Router com foco em:
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Lighthouse Score**: 90+ em todas as categorias
- **Mobile Performance**: Otimizado para conexões 3G/4G

---

## 🏗️ Estrutura de Renderização

### SSG (Static Site Generation)
Páginas pré-renderizadas em build time para máxima velocidade:

```typescript
// app/horarios/page.tsx
export const revalidate = false // Nunca revalida (conteúdo estático)
```

**Páginas SSG:**
- `/horarios` - Horários de missa (conteúdo fixo)
- `/historia` - História da paróquia
- `/sacramentos` - Informações sobre sacramentos
- `/pastorais` - Lista de pastorais

### SSR (Server Side Rendering)
Páginas renderizadas no servidor a cada request:

```typescript
// app/contato/page.tsx
export const dynamic = 'force-dynamic'
export const revalidate = 0
```

**Páginas SSR:**
- `/contato` - Formulário de contato (dados dinâmicos)
- `/admin` - Painel administrativo

### ISR (Incremental Static Regeneration)
Páginas estáticas com revalidação periódica:

```typescript
// app/eventos/page.tsx
export const revalidate = 3600 // Revalida a cada 1 hora
```

**Páginas ISR:**
- `/eventos` - Lista de eventos (atualiza a cada hora)
- `/avisos` - Avisos paroquiais (atualiza a cada 30 min)
- `/liturgia` - Liturgia do dia (atualiza diariamente)

---

## 🚀 Otimizações Implementadas

### 1. Code Splitting & Lazy Loading

#### Dynamic Imports
```typescript
// Componentes pesados carregados sob demanda
const LiturgySection = dynamic(
  () => import('@/components/sections/liturgy-section'),
  { loading: () => <Skeleton /> }
)
```

#### Intersection Observer
```typescript
// Lazy load de seções quando entram no viewport
<LazyLoadSection threshold={0.1} rootMargin="200px">
  <HeavyComponent />
</LazyLoadSection>
```

### 2. Otimização de Imagens

#### Next.js Image Component
```typescript
<OptimizedImage
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false} // Lazy load por padrão
  quality={90}
/>
```

**Formatos suportados:**
- AVIF (melhor compressão)
- WebP (fallback)
- JPEG/PNG (fallback final)

**Configuração:**
```javascript
// next.config.mjs
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  minimumCacheTTL: 31536000, // 1 ano
}
```

### 3. Otimização de Fontes

```typescript
// app/layout.tsx
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Evita FOIT (Flash of Invisible Text)
  preload: true,
})
```

**Benefícios:**
- Fontes servidas do próprio domínio (sem DNS lookup externo)
- Preload automático
- Font display swap para evitar texto invisível

### 4. Caching Inteligente

#### Memory Cache
```typescript
// lib/cache.ts
const dataCache = new DataCache()
dataCache.set('key', data, 5 * 60 * 1000) // 5 minutos
```

#### Local Storage Cache
```typescript
localCache.set('liturgy-data', data, 24 * 60 * 60 * 1000) // 24 horas
```

#### HTTP Cache Headers
```javascript
// next.config.mjs
async headers() {
  return [
    {
      source: '/_next/static/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      ]
    }
  ]
}
```

### 5. Bundle Optimization

#### Tree Shaking
```javascript
// next.config.mjs
experimental: {
  optimizePackageImports: [
    'lucide-react',
    'framer-motion',
    '@radix-ui/react-*'
  ]
}
```

#### Webpack Optimization
```javascript
webpack: (config) => {
  config.optimization = {
    ...config.optimization,
    usedExports: true,
    sideEffects: false,
  }
  return config
}
```

### 6. Performance Hooks

#### React.memo
```typescript
export const ContactForm = memo(function ContactForm() {
  // Evita re-renders desnecessários
})
```

#### useCallback
```typescript
const handleSubmit = useCallback(async (e) => {
  // Função memoizada
}, [dependencies])
```

#### useMemo
```typescript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data)
}, [data])
```

---

## 📱 Otimizações Mobile

### 1. Reduced Motion
```typescript
const shouldReduceMotion = useReducedMotion()
// Desabilita animações pesadas em dispositivos com preferência
```

### 2. Connection-Aware Loading
```typescript
const connectionSpeed = getConnectionSpeed()
if (connectionSpeed === 'slow') {
  // Carrega versão simplificada
}
```

### 3. CSS Animations
```css
/* Usa transform/opacity para animações (GPU accelerated) */
.animate {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
```

### 4. Viewport-Based Loading
```typescript
// Carrega conteúdo apenas quando visível
const { ref, isVisible } = useLazyLoad(0.1)
```

---

## 🔍 SEO Otimizado

### Metadata Dinâmico
```typescript
export const metadata: Metadata = generateMetadata({
  title: 'Página',
  description: 'Descrição',
  keywords: ['palavra1', 'palavra2'],
  url: '/pagina',
})
```

### JSON-LD Structured Data
```typescript
<script type="application/ld+json">
  {generateOrganizationSchema()}
</script>
```

### Breadcrumbs
```typescript
<PageLayout
  breadcrumbs={[
    { name: 'Início', url: '/' },
    { name: 'Página', url: '/pagina' }
  ]}
/>
```

---

## 📊 Métricas de Performance

### Core Web Vitals Targets

| Métrica | Target | Implementação |
|---------|--------|---------------|
| **LCP** | < 2.5s | Image optimization, lazy loading, SSG |
| **FID** | < 100ms | Code splitting, minimal JS |
| **CLS** | < 0.1 | Aspect ratios, skeleton loaders |
| **TTFB** | < 600ms | Edge caching, SSG/ISR |
| **TTI** | < 3.8s | Progressive loading, defer non-critical JS |

### Bundle Size Targets

| Tipo | Target | Atual |
|------|--------|-------|
| First Load JS | < 100KB | ~85KB |
| Route JS | < 50KB | ~35KB |
| CSS | < 30KB | ~25KB |

---

## 🛠️ Ferramentas de Monitoramento

### 1. Vercel Analytics
```typescript
import { Analytics } from '@vercel/analytics/next'
<Analytics />
```

### 2. Lighthouse CI
```bash
npm run build
npx lighthouse http://localhost:3000 --view
```

### 3. Next.js Bundle Analyzer
```bash
ANALYZE=true npm run build
```

---

## 📝 Checklist de Deploy

- [ ] Rodar `npm run build` sem erros
- [ ] Verificar Lighthouse score (90+)
- [ ] Testar em mobile (3G throttling)
- [ ] Validar Core Web Vitals
- [ ] Verificar SEO (meta tags, sitemap)
- [ ] Testar lazy loading de imagens
- [ ] Validar cache headers
- [ ] Verificar bundle size
- [ ] Testar formulários
- [ ] Validar acessibilidade (WCAG 2.1)

---

## 🔄 Manutenção Contínua

### Atualizar Dependências
```bash
npm outdated
npm update
```

### Monitorar Performance
- Vercel Analytics Dashboard
- Google Search Console
- PageSpeed Insights

### Otimizar Continuamente
- Revisar bundle size mensalmente
- Atualizar imagens para formatos mais eficientes
- Implementar novas features do Next.js
- Monitorar Core Web Vitals

---

## 📚 Recursos Adicionais

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Vercel Analytics](https://vercel.com/analytics)

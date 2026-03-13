# Paróquia São Pedro e São Paulo - Website Oficial

Site institucional da Paróquia São Pedro e São Paulo, desenvolvido com Next.js 14 e otimizado para máxima performance.

## 🚀 Performance

- **Lighthouse Score**: 90+ em todas as categorias
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **First Load JS**: ~85KB (gzipped)
- **Otimizado para mobile**: Funciona perfeitamente em conexões 3G/4G

## 🛠️ Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: TailwindCSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Animações**: Framer Motion (lazy loaded)
- **Ícones**: Lucide React
- **Analytics**: Vercel Analytics

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🏗️ Estrutura do Projeto

```
paroquia_sp_sp/
├── app/                      # App Router (Next.js 14)
│   ├── layout.tsx           # Layout raiz com SEO
│   ├── page.tsx             # Home (lazy loading)
│   ├── horarios/            # SSG - Horários de missa
│   ├── contato/             # SSR - Formulário de contato
│   ├── eventos/             # ISR - Lista de eventos
│   └── [...outras páginas]
├── components/
│   ├── cathedral/           # Componentes de animação
│   ├── forms/               # Formulários otimizados
│   ├── layouts/             # Layouts reutilizáveis
│   ├── navigation/          # Header, Footer, etc
│   ├── sections/            # Seções da home
│   └── ui/                  # Componentes UI base
├── hooks/                   # Custom hooks
│   ├── use-device-capabilities.ts
│   └── use-toast.ts
├── lib/                     # Utilitários
│   ├── cache.ts            # Sistema de cache
│   ├── metadata.ts         # SEO helpers
│   ├── performance.ts      # Performance utilities
│   └── utils.ts            # Helpers gerais
├── public/                  # Assets estáticos
└── styles/                  # Estilos globais
```

## 🎯 Estratégias de Renderização

### SSG (Static Site Generation)
Páginas pré-renderizadas no build:
- `/horarios` - Horários de missa
- `/historia` - História da paróquia
- `/sacramentos` - Informações sobre sacramentos

### SSR (Server Side Rendering)
Páginas renderizadas a cada request:
- `/contato` - Formulário de contato
- `/admin` - Painel administrativo

### ISR (Incremental Static Regeneration)
Páginas estáticas com revalidação:
- `/eventos` - Revalida a cada 1 hora
- `/avisos` - Revalida a cada 30 minutos
- `/liturgia` - Revalida diariamente

## ⚡ Otimizações Implementadas

### 1. Code Splitting
- Dynamic imports para componentes pesados
- Lazy loading de seções com Intersection Observer
- Bundle splitting automático do Next.js

### 2. Imagens
- Next.js Image component com AVIF/WebP
- Lazy loading automático
- Responsive images com srcset
- Blur placeholder para melhor UX

### 3. Fontes
- Google Fonts otimizadas via next/font
- Font display swap
- Preload de fontes críticas
- Fallback fonts para evitar FOIT

### 4. Caching
- Memory cache para dados frequentes
- Local storage cache com TTL
- HTTP cache headers otimizados
- ISR para conteúdo semi-estático

### 5. Mobile
- Reduced motion support
- Connection-aware loading
- CSS animations (GPU accelerated)
- Viewport-based lazy loading

## 📊 Monitoramento

### Lighthouse
```bash
npm run build
npx lighthouse http://localhost:3000 --view
```

### Bundle Analyzer
```bash
ANALYZE=true npm run build
```

### Vercel Analytics
Automaticamente habilitado em produção.

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://paroquiasaopedroesaopaulo.com.br
```

## 📝 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm start            # Servidor de produção
npm run lint         # Linter
```

## 🎨 Customização

### Cores
Edite `app/globals.css` para alterar o tema:

```css
:root {
  --primary: oklch(0.75 0.14 80);  /* Dourado litúrgico */
  --background: oklch(0.12 0.005 250);  /* Fundo escuro */
  /* ... outras cores */
}
```

### Componentes
Todos os componentes UI estão em `components/ui/` e podem ser customizados.

## 📚 Documentação Adicional

- [PERFORMANCE.md](./PERFORMANCE.md) - Guia completo de performance
- [ARQUITETURA_BANCO_DADOS.md](./ARQUITETURA_BANCO_DADOS.md) - Estrutura do banco

## 🚀 Deploy

### Vercel (Recomendado)
```bash
vercel
```

### Outros Provedores
```bash
npm run build
npm start
```

## 📄 Licença

© 2024 Paróquia São Pedro e São Paulo. Todos os direitos reservados.

## 🤝 Contribuindo

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do site ou e-mail da paróquia.

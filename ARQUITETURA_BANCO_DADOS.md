# Arquitetura do Sistema Litúrgico com Painel Admin

## Visão Geral

Sistema de calendário litúrgico com painel administrativo para a Pastoral da Comunicação (PASCOM) gerenciar conteúdo diário.

## Estrutura do Banco de Dados

### Tabela: liturgy_days
```sql
CREATE TABLE liturgy_days (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL UNIQUE,
  weekday VARCHAR(20),
  weekday_number INT,
  liturgical_week INT,
  season VARCHAR(50),
  rank VARCHAR(50),
  rank_order INT,
  color VARCHAR(20),
  movable BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  is_archived BOOLEAN DEFAULT false,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: readings
```sql
CREATE TABLE readings (
  id SERIAL PRIMARY KEY,
  liturgy_day_id INT REFERENCES liturgy_days(id),
  type VARCHAR(20), -- 'first_reading', 'second_reading', 'psalm', 'gospel'
  cycle VARCHAR(10), -- 'yearI', 'yearII', 'yearA', 'yearB', 'yearC'
  reference VARCHAR(100),
  title VARCHAR(100),
  excerpt TEXT,
  full_text TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: prayers
```sql
CREATE TABLE prayers (
  id SERIAL PRIMARY KEY,
  liturgy_day_id INT REFERENCES liturgy_days(id),
  collect TEXT,
  over_offerings TEXT,
  after_communion TEXT,
  preface TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: saints
```sql
CREATE TABLE saints (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  title VARCHAR(100),
  rank VARCHAR(50),
  rank_order INT,
  description TEXT,
  birth_year INT,
  death_year INT,
  canonization_status VARCHAR(50),
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: saint_patrons
```sql
CREATE TABLE saint_patrons (
  id SERIAL PRIMARY KEY,
  saint_id INT REFERENCES saints(id),
  patron_of VARCHAR(100)
);
```

### Tabela: saints_days (relacionamento)
```sql
CREATE TABLE saints_days (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  saint_id INT REFERENCES saints(id),
  rank VARCHAR(50),
  rank_order INT,
  UNIQUE(date, saint_id)
);
```

### Tabela: pascom_posts (conteúdo editável)
```sql
CREATE TABLE pascom_posts (
  id SERIAL PRIMARY KEY,
  liturgy_day_id INT REFERENCES liturgy_days(id),
  type VARCHAR(50), -- 'reflection', 'announcement', 'homily'
  title VARCHAR(200),
  content TEXT,
  author VARCHAR(100),
  video_url VARCHAR(500),
  pdf_url VARCHAR(500),
  is_published BOOLEAN DEFAULT true,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Queries Principais

### Buscar liturgia do dia atual
```sql
SELECT 
  ld.*,
  json_agg(DISTINCT r.*) as readings,
  json_agg(DISTINCT s.*) as saints,
  p.* as prayers
FROM liturgy_days ld
LEFT JOIN readings r ON r.liturgy_day_id = ld.id
LEFT JOIN saints_days sd ON sd.date = ld.date
LEFT JOIN saints s ON s.id = sd.saint_id
LEFT JOIN prayers p ON p.liturgy_day_id = ld.id
WHERE ld.date = CURRENT_DATE
  AND ld.is_published = true
  AND (ld.expires_at IS NULL OR ld.expires_at > NOW())
GROUP BY ld.id, p.id;
```

### Buscar leitura correta baseada no ano
```javascript
const year = new Date().getFullYear()
const isOddYear = year % 2 !== 0
const cycle = isOddYear ? 'yearI' : 'yearII'

// Na query
WHERE r.cycle = $1 OR r.cycle IS NULL
```

### Arquivar dados antigos (não deletar)
```sql
UPDATE liturgy_days
SET is_archived = true
WHERE date < NOW() - INTERVAL '2 years'
  AND is_archived = false;
```

## Funcionalidades do Painel Admin

### Para PASCOM:

1. **Liturgia do Dia**
   - Editar leituras
   - Corrigir textos
   - Adicionar comentários
   - Publicar/Despublicar

2. **Santos**
   - Adicionar novos santos
   - Editar biografias
   - Upload de imagens
   - Gerenciar patronos

3. **Conteúdo Paroquial**
   - Reflexões diárias
   - Avisos da missa
   - Homilias (vídeo/áudio)
   - Folhetos (PDF)

4. **Calendário**
   - Visualizar mês completo
   - Ajustar celebrações
   - Marcar solenidades
   - Definir cores litúrgicas

## Estratégia de Dados

### Dados PERMANENTES (nunca deletar)
- Liturgia
- Santos
- Leituras bíblicas

### Dados EDITÁVEIS (PASCOM gerencia)
- Reflexões
- Posts
- Avisos
- Homilias

### Dados TEMPORÁRIOS (limpar automaticamente)
- Logs (> 90 dias)
- Cache
- Tokens de sessão
- Uploads temporários

## Expiração Automática

### Opção 1: Campo expires_at
```sql
-- Publicar com expiração automática
INSERT INTO pascom_posts (
  liturgy_day_id,
  content,
  expires_at
) VALUES (
  123,
  'Reflexão do dia...',
  '2026-03-14 00:00:00'
);

-- Query do site (só mostra não expirados)
WHERE expires_at IS NULL OR expires_at > NOW()
```

### Opção 2: Despublicar manualmente
```sql
-- PASCOM despublica
UPDATE pascom_posts
SET is_published = false
WHERE id = 123;
```

## Rotas da API

```
GET  /api/liturgy/today          - Liturgia de hoje
GET  /api/liturgy/:date          - Liturgia de data específica
GET  /api/saints/:slug           - Detalhes do santo
GET  /api/saints/patron/:name    - Santos por patrono

POST   /api/admin/liturgy        - Criar/editar liturgia
DELETE /api/admin/liturgy/:id    - Despublicar liturgia
POST   /api/admin/saints         - Adicionar santo
PUT    /api/admin/saints/:id     - Editar santo
```

## Páginas do Site

```
/liturgia/hoje                   - Liturgia de hoje
/liturgia/amanha                 - Liturgia de amanhã
/liturgia/2026/03/13            - Data específica
/santo/santa-angela-de-foligno  - Página do santo
/padroeiros/misticos            - Santos por patrono
```

## Vantagens desta Arquitetura

✅ **Não precisa regenerar JSON** - Tudo vem do banco
✅ **PASCOM pode corrigir erros** - Sem mexer em código
✅ **Histórico preservado** - Links antigos continuam funcionando
✅ **SEO otimizado** - URLs amigáveis com slugs
✅ **Escalável** - Pode virar SaaS para múltiplas paróquias
✅ **Flexível** - PASCOM adiciona conteúdo extra facilmente

## Próximos Passos

1. Implementar gerador automático de calendário litúrgico
2. Criar painel admin com Next.js + shadcn/ui
3. Implementar autenticação para PASCOM
4. Adicionar upload de imagens
5. Sistema de notificações
6. Exportar para PDF/impressão

## Tecnologias Recomendadas

- **Backend**: Next.js API Routes ou Node.js + Express
- **Banco**: PostgreSQL
- **ORM**: Prisma ou Drizzle
- **Auth**: NextAuth.js
- **Storage**: AWS S3 ou Cloudinary (imagens)
- **Cache**: Redis (opcional)

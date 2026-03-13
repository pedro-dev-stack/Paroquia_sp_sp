import { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://paroquiasaopedroesaopaulo.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/horarios',
    '/liturgia',
    '/confissoes',
    '/sacramentos',
    '/eventos',
    '/pastorais',
    '/formacao',
    '/dizimo',
    '/galeria',
    '/historia',
    '/secretaria',
    '/avisos',
    '/oracao',
    '/contato',
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route === '/eventos' || route === '/avisos' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/horarios' || route === '/contato' ? 0.9 : 0.7,
  }))
}

/**
 * SEO and metadata utilities
 */

import { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

const SITE_NAME = 'Paróquia São Pedro e São Paulo'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://paroquiasaopedroesaopaulo.com.br'
const DEFAULT_IMAGE = '/logo_preview.png'

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageMetadata): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  const baseKeywords = [
    'paróquia',
    'igreja católica',
    'missa',
    'sacramentos',
    'são pedro',
    'são paulo',
    'católico',
    'fé',
    'comunidade',
  ]

  return {
    title: fullTitle,
    description,
    keywords: [...baseKeywords, ...keywords],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'pt_BR',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Generate JSON-LD structured data for SEO
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    image: `${SITE_URL}/logo_preview.png`,
    description: 'Paróquia Católica São Pedro e São Paulo - Uma comunidade de fé, esperança e caridade',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    sameAs: [
      // Add social media links here
    ],
  }
}

export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location || SITE_NAME,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

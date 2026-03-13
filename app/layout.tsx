import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { generateOrganizationSchema } from '@/lib/metadata'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  title: {
    default: 'Paróquia São Pedro e São Paulo | Igreja Católica',
    template: '%s | Paróquia São Pedro e São Paulo',
  },
  description: 'Bem-vindos à Paróquia São Pedro e São Paulo. Horários de missas, confissões, sacramentos e vida comunitária. Uma comunidade de fé, esperança e caridade.',
  keywords: ['paróquia', 'igreja católica', 'missa', 'sacramentos', 'são pedro', 'são paulo', 'católico'],
  authors: [{ name: 'Paróquia São Pedro e São Paulo' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://paroquiasaopedroesaopaulo.com.br'),
  openGraph: {
    title: 'Paróquia São Pedro e São Paulo',
    description: 'Uma comunidade de fé, esperança e caridade',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Paróquia São Pedro e São Paulo',
    images: [{ url: '/logo_preview.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logo_preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/logo.jpg', media: '(prefers-color-scheme: light)' },
      { url: '/logo.jpg', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgSchema = generateOrganizationSchema()

  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

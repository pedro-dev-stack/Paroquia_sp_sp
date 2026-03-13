import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paróquia São Pedro e São Paulo | Igreja Católica',
  description: 'Bem-vindos à Paróquia São Pedro e São Paulo. Horários de missas, confissões, sacramentos e vida comunitária. Uma comunidade de fé, esperança e caridade.',
  keywords: ['paróquia', 'igreja católica', 'missa', 'sacramentos', 'são pedro', 'são paulo', 'católico'],
  authors: [{ name: 'Paróquia São Pedro e São Paulo' }],
  openGraph: {
    title: 'Paróquia São Pedro e São Paulo',
    description: 'Uma comunidade de fé, esperança e caridade',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: [
      { url: '/logo.jpg', media: '(prefers-color-scheme: light)' },
      { url: '/logo.jpg', media: '(prefers-color-scheme: dark)' },
      { url: '/logo.jpg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

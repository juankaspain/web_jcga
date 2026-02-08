import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { MouseGlow } from '@/components/effects/MouseGlow'
import { SkipToContent } from '@/components/a11y/SkipToContent'
import { WhileInViewFix } from '@/components/ui/WhileInViewFix'

// Optimized font loading via next/font
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  preload: false,
  weight: ['400', '500', '600'],
})

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://jcga.dev'),
  title: {
    default: 'Juan Carlos García Arriero | Cloud & Payments Architect',
    template: '%s | Juan Carlos García Arriero',
  },
  description:
    'Senior Technical Lead & Cloud Solutions Architect en banca digital, especializado en pagos, cloud, datos y AI. +15 años de experiencia, +140 certificaciones.',
  keywords: [
    'Cloud Architect',
    'Technical Lead',
    'Digital Banking',
    'Payments',
    'Azure',
    'DevOps',
    'Data & AI',
    'Software Architecture',
    'Santander',
    'FinTech',
  ],
  authors: [{ name: 'Juan Carlos García Arriero' }],
  creator: 'Juan Carlos García Arriero',
  publisher: 'Juan Carlos García Arriero',
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        rel: 'icon',
        url: '/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://jcga.dev',
    siteName: 'Juan Carlos García Arriero',
    title: 'Juan Carlos García Arriero | Cloud & Payments Architect',
    description:
      'Senior Technical Lead & Cloud Solutions Architect en banca digital, especializado en pagos, cloud, datos y AI.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Juan Carlos García Arriero - Cloud & Payments Architect',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Carlos García Arriero | Cloud & Payments Architect',
    description:
      'Senior Technical Lead & Cloud Solutions Architect en banca digital.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://jcga.dev',
    languages: {
      'es-ES': 'https://jcga.dev',
      'en-US': 'https://jcga.dev/en',
    },
  },
}

// Viewport configuration — dynamic per theme
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0B' },
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD Structured Data
function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Juan Carlos García Arriero',
      jobTitle: 'Senior Technical Lead & Cloud Solutions Architect',
      description:
        'Especializado en banca digital, pagos, cloud, datos y AI',
      url: 'https://jcga.dev',
      image: 'https://jcga.dev/og-image.svg',
      sameAs: [
        'https://linkedin.com/in/juancarlosgarciarriero',
        'https://github.com/juankaspain',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Santander Digital Services',
      },
      knowsAbout: [
        'Cloud Architecture',
        'Azure',
        'Digital Banking',
        'Payment Systems',
        'DevOps',
        'Data & AI',
        'Microservices',
        'API Design',
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Theme initialization script to prevent flash
const themeScript = `
  (function() {
    var theme = localStorage.getItem('jcga-theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
  })();
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
      style={{ position: 'relative' }}
    >
      <head>
        <JsonLd />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className="antialiased"
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
        }}
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <SkipToContent />
            <ScrollProgress />
            <MouseGlow />
                          <WhileInViewFix />

            <div className="relative min-h-screen flex flex-col">
              <Header />
              <main
                id="main-content"
                className="flex-1 focus:outline-none"
                tabIndex={-1}
              >
                {children}
              </main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

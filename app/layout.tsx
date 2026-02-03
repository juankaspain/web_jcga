import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SkipToContent } from "@/components/a11y/SkipToContent"

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://jcga.dev'),
  title: {
    default: 'Juan Carlos García Arriero | Cloud & Payments Architect',
    template: '%s | Juan Carlos García Arriero'
  },
  description: 'Senior Technical Lead & Cloud Solutions Architect en banca digital, especializado en pagos, cloud, datos y AI. +15 años de experiencia, +140 certificaciones.',
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
    'FinTech'
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
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://jcga.dev',
    siteName: 'Juan Carlos García Arriero',
    title: 'Juan Carlos García Arriero | Cloud & Payments Architect',
    description: 'Senior Technical Lead & Cloud Solutions Architect en banca digital, especializado en pagos, cloud, datos y AI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Carlos García Arriero | Cloud & Payments Architect',
    description: 'Senior Technical Lead & Cloud Solutions Architect en banca digital.',
  },
  alternates: {
    canonical: 'https://jcga.dev',
    languages: {
      'es-ES': 'https://jcga.dev',
      'en-US': 'https://jcga.dev/en',
    },
  },
}

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
    { media: '(prefers-color-scheme: light)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD Structured Data
function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Juan Carlos García Arriero',
    jobTitle: 'Senior Technical Lead & Cloud Solutions Architect',
    description: 'Especializado en banca digital, pagos, cloud, datos y AI',
    url: 'https://jcga.dev',
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
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html 
      lang="es" 
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-slate-950 text-slate-50 antialiased">
        <SkipToContent />
        
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Juan Carlos García Arriero',
  title: 'Juan Carlos García Arriero | Cloud & Payments Architect',
  description: 'Senior Technical Lead & Cloud Solutions Architect especializado en pagos digitales, cloud infrastructure y AI/ML. +15 años de experiencia en banca digital, +140 certificaciones profesionales.',
  url: 'https://jcga.dev',
  locale: 'es_ES',
  author: {
    name: 'Juan Carlos García Arriero',
        email: 'contact@jcga.dev',
    linkedin: 'https://linkedin.com/in/juancarlosgarciarriero',
    github: 'https://github.com/juankaspain',
  },
  keywords: [
    'Cloud Architect',
    'Payments Specialist',
    'Azure',
    'Kubernetes',
    'SEPA Instant Payments',
    'PSD2',
    'Open Banking',
    'Machine Learning',
    'DevOps',
    'Fintech',
    'Banking Technology',
    'Technical Leadership',
    'Solutions Architect',
    'Santander',
        'Panel Sistemas',
        'AVERTIA'
  ],
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
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
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'es-ES': siteConfig.url,
      'en-US': `${siteConfig.url}/en`,
    },
  },
}

// JSON-LD Structured Data
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.author.name,
  url: siteConfig.url,
  email: siteConfig.author.email,
  jobTitle: 'Senior Technical Lead & Cloud Solutions Architect',
  worksFor: {
    '@type': 'Organization',
    name: 'Santander Digital Services',
  },
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Universidad de Alicante',
    },
  ],
  knowsAbout: [
    'Cloud Architecture',
    'Payment Systems',
    'Azure',
    'Kubernetes',
    'Machine Learning',
    'DevOps',
    'Financial Technology',
    'Microservices',
    'API Design',
    'System Architecture',
  ],
  sameAs: [
    siteConfig.author.linkedin,
    siteConfig.author.github,
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  founder: {
    '@type': 'Person',
    name: siteConfig.author.name,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Alicante',
    addressCountry: 'ES',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Spain',
  },
  serviceType: [
    'Cloud Architecture Consulting',
    'Payment Systems Design',
    'Technical Leadership',
    'DevOps Implementation',
  ],
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  image?: string
): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image || `${siteConfig.url}/og-image.jpg`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

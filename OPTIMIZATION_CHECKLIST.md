# 🚀 Technical Optimization & Production Checklist

## Overview

Complete guide for optimizing the portfolio for production deployment, including data layer architecture, SEO, performance, accessibility, and security best practices.

---

## 📦 Data Layer Architecture

### Current State
- **Mock data**: Hardcoded in section components
- **Location**: `components/sections/*.tsx` files
- **Type**: Static TypeScript objects

### Recommended Migration Path

#### Option 1: Content Files (Recommended for Portfolio)

**Structure**:
```
data/
├── projects/
│   ├── sepa-platform.json
│   ├── payment-orchestrator.json
│   └── index.ts
├── experience/
│   ├── santander.json
│   ├── bbva.json
│   └── index.ts
├── skills/
│   └── categories.json
└── contact/
    └── info.json
```

**Benefits**:
- ✅ Easy to update without code changes
- ✅ Version control for content
- ✅ Type-safe with Zod schemas
- ✅ No database needed
- ✅ Fast builds (static)

**Implementation**:
```typescript
// lib/data/projects.ts
import { z } from 'zod'

const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  problem: z.string(),
  // ... rest of schema
})

export async function getProjects(locale: 'es' | 'en') {
  const data = await import(`@/data/projects/${locale}.json`)
  return z.array(ProjectSchema).parse(data.default)
}
```

#### Option 2: Headless CMS (For Frequent Updates)

**Recommended CMS**: Contentful, Sanity, or Strapi

**When to use**:
- Need non-technical editor access
- Frequent content updates
- Multi-author workflow
- Content preview before publish

**Next.js ISR Configuration**:
```typescript
// app/projects/[slug]/page.tsx
export const revalidate = 3600 // Revalidate every 1 hour

export async function generateStaticParams() {
  const projects = await getProjectsFromCMS()
  return projects.map((p) => ({ slug: p.slug }))
}
```

---

## 🔍 SEO Optimization

### 1. Meta Tags Enhancement

#### Current State
⚠️ Basic meta tags in `layout.tsx`

#### Required Implementation

**Root Layout** (`app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://jcga.dev'),
  title: {
    default: 'Juan Carlos García Arriero | Senior Technical Lead - Cloud & Payments',
    template: '%s | Juan Carlos García Arriero'
  },
  description: 'Senior Technical Lead @ Santander Digital Services. +15 años arquitectando soluciones de pago que escalan a millones de usuarios. Azure, Kubernetes, SEPA, PSD2.',
  keywords: [
    'Senior Technical Lead',
    'Cloud Architect',
    'Payment Systems',
    'SEPA Instant Payments',
    'Azure',
    'Kubernetes',
    'PSD2',
    'Open Banking',
    'Fintech',
    'Santander',
    'Financial Architecture'
  ],
  authors: [{ name: 'Juan Carlos García Arriero' }],
  creator: 'Juan Carlos García Arriero',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://jcga.dev',
    siteName: 'Juan Carlos García Arriero - Portfolio',
    title: 'Juan Carlos García Arriero | Senior Technical Lead',
    description: 'Arquitecto soluciones de pago que escalan a millones de usuarios. 2M transacciones/día, 99.95% SLA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Juan Carlos García Arriero - Senior Technical Lead'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Carlos García Arriero | Senior Technical Lead',
    description: '2M transacciones/día, 5M usuarios, 99.95% SLA. Arquitectura cloud en banca digital.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // yandex: 'YOUR_YANDEX_CODE',
  }
}
```

**Project Pages** (`app/projects/[slug]/page.tsx`):
```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject(params.slug)
  
  return {
    title: project.title,
    description: project.problem,
    openGraph: {
      title: `${project.title} - Caso de Estudio`,
      description: project.problem,
      type: 'article',
      publishedTime: project.publishedDate,
      authors: ['Juan Carlos García Arriero'],
      tags: project.tags,
      images: [{
        url: project.thumbnail,
        width: 1200,
        height: 630,
        alt: project.thumbnailAlt
      }]
    }
  }
}
```

---

### 2. Structured Data (JSON-LD)

#### Person Schema (Root Layout)

```typescript
// components/seo/PersonSchema.tsx
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Juan Carlos García Arriero',
    jobTitle: 'Senior Technical Lead - Cloud & Payments',
    worksFor: {
      '@type': 'Organization',
      name: 'Santander Digital Services'
    },
    url: 'https://jcga.dev',
    sameAs: [
      'https://linkedin.com/in/juancarlosgarciarriero',
      'https://github.com/juankaspain'
    ],
    knowsAbout: [
      'Cloud Architecture',
      'Payment Systems',
      'Azure',
      'Kubernetes',
      'SEPA Instant Payments',
      'PSD2',
      'Open Banking',
      'Microservices',
      'Machine Learning'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Microsoft Azure' // Certification authority
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

#### Project Schema (Case Studies)

```typescript
// components/seo/ProjectSchema.tsx
export function ProjectSchema({ project }: { project: Project }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.problem,
    author: {
      '@type': 'Person',
      name: 'Juan Carlos García Arriero'
    },
    datePublished: project.publishedDate,
    keywords: project.tags.join(', '),
    about: {
      '@type': 'Thing',
      name: 'Payment Systems Architecture'
    },
    workExample: {
      '@type': 'WebPage',
      url: `https://jcga.dev/projects/${project.slug}`
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

### 3. Sitemap Enhancement

**Current**: `app/sitemap.ts` exists  
**Required**: Add dynamic project URLs

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getProjects } from '@/lib/data/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects('es')
  const projectsEn = await getProjects('en')
  
  const baseUrl = 'https://jcga.dev'
  const now = new Date()

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/skills`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    // English versions
    { url: `${baseUrl}/en`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/en/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ]

  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.updatedDate || now,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  const projectPagesEn = projectsEn.map((project) => ({
    url: `${baseUrl}/en/projects/${project.slug}`,
    lastModified: project.updatedDate || now,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  return [...staticPages, ...projectPages, ...projectPagesEn]
}
```

---

### 4. Robots.txt Enhancement

```txt
# public/robots.txt
User-agent: *
Allow: /

# Disallow admin or private sections (if any)
Disallow: /api/
Disallow: /_next/

# Sitemap
Sitemap: https://jcga.dev/sitemap.xml
```

---

## ⚡ Performance Optimization

### Image Optimization Checklist

- [ ] **Convert all images to WebP/AVIF** using next/image
- [ ] **Add proper sizes prop** to all next/image instances
- [ ] **Use priority prop** for above-the-fold images (Hero)
- [ ] **Lazy load** below-the-fold images
- [ ] **Generate OG image** (`og-image.png` 1200x630)

**Example**:
```typescript
// components/projects/ProjectShowcaseCard.tsx
<Image 
  src={thumbnail}
  alt={thumbnailAlt}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Optional
  className="object-cover group-hover:scale-105 transition-transform duration-500"
/>
```

### Font Optimization

**Current**: Using next/font (already optimized ✅)

**Verify**:
- [ ] Fonts subset to used characters
- [ ] Font display: swap (prevents FOIT)
- [ ] Preload critical fonts

### Bundle Size Optimization

```bash
# Analyze bundle
npm run build
npm run analyze # Add this script if not exists

# In package.json
"scripts": {
  "analyze": "ANALYZE=true next build"
}
```

**Install analyzer**:
```bash
npm install @next/bundle-analyzer
```

**Configure** (`next.config.js`):
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... existing config
})
```

### Lighthouse Score Targets

- 🎯 **Performance**: 90+
- 🎯 **Accessibility**: 100
- 🎯 **Best Practices**: 100
- 🎯 **SEO**: 100

---

## ♿ Accessibility Audit

### Critical Checks

- [x] **Keyboard navigation** - All interactive elements focusable
- [x] **Focus indicators** - Electric Blue focus rings implemented
- [x] **ARIA labels** - Buttons have aria-label where text is not visible
- [x] **Color contrast** - Electric Blue on Navy passes WCAG AA (verify AAA)
- [x] **Reduced motion** - useReducedMotion hook implemented
- [ ] **Screen reader testing** - Test with NVDA/JAWS
- [ ] **Heading hierarchy** - Verify H1 > H2 > H3 order
- [ ] **Alt text** - All images have descriptive alt
- [ ] **Form labels** - All inputs have associated labels
- [ ] **Skip links** - Add "Skip to main content" link

### Screen Reader Optimization

```typescript
// components/layout/SkipLink.tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-electric-500 focus:text-white focus:rounded-lg"
    >
      Skip to main content
    </a>
  )
}
```

---

## 🔒 Security Best Practices

### Headers Configuration

**Add to** `next.config.js`:
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  }
}
```

### Content Security Policy (CSP)

**For production deployment** (Vercel/Netlify):
```javascript
{
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://vercel.live",
    "frame-ancestors 'none'"
  ].join('; ')
}
```

### Environment Variables

**Create** `.env.example`:
```bash
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# Contact Form (if using email service)
EMAIL_SERVICE_API_KEY=
EMAIL_FROM=
EMAIL_TO=

# CMS (if using)
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
```

---

## 📊 Analytics & Monitoring

### Google Analytics 4

**Install**:
```bash
npm install @next/third-parties
```

**Add to layout**:
```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Custom Event Tracking

```typescript
// lib/analytics.ts
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}

// Usage in SmartContactForm
trackEvent('form_submission', {
  form_name: 'contact',
  project_type: selectedType,
  timeline: timeline,
  budget_range: budget
})
```

---

## ✅ Pre-Production Deployment Checklist

### Content
- [ ] Replace placeholder images with real screenshots
- [ ] Add real project detail pages (`/projects/[slug]/page.tsx`)
- [ ] Update phone number in contact section
- [ ] Add certification badge images to `/public/certs/`
- [ ] Generate OG image (1200x630) → `/public/og-image.png`
- [ ] Review all copy for typos

### Technical
- [ ] Run `npm run build` - verify no errors
- [ ] Test all routes (/, /projects, /skills, /experience, /contact)
- [ ] Test EN locale (`/en/*`)
- [ ] Verify forms work (if backend implemented)
- [ ] Check mobile responsive (320px, 375px, 768px, 1024px)
- [ ] Test dark mode (if implemented)
- [ ] Verify all links work (internal + external)
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit (target 90+ all scores)

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags with [metatags.io](https://metatags.io)
- [ ] Add Google Analytics property
- [ ] Set up Google Search Console
- [ ] Create robots.txt
- [ ] Add structured data (Person + Project schemas)
- [ ] Verify Open Graph with [opengraph.xyz](https://www.opengraph.xyz)

### Performance
- [ ] Optimize all images (WebP/AVIF)
- [ ] Enable Next.js image optimization
- [ ] Add proper `sizes` to all images
- [ ] Bundle size < 200KB (First Load JS)
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms

### Security
- [ ] Add security headers
- [ ] Set up CSP
- [ ] Add `.env.example` for public reference
- [ ] Remove any hardcoded secrets
- [ ] Enable HTTPS redirect
- [ ] Set up domain with SSL

### Deployment
- [ ] Choose hosting (Vercel recommended)
- [ ] Connect GitHub repo
- [ ] Configure environment variables
- [ ] Set up custom domain
- [ ] Configure DNS (A/CNAME records)
- [ ] Test production build
- [ ] Set up monitoring (Vercel Analytics)
- [ ] Configure error tracking (Sentry optional)

---

## 🛠️ Maintenance Schedule

### Weekly
- Check analytics (traffic, conversions)
- Review contact form submissions
- Monitor Core Web Vitals

### Monthly
- Update project metrics if changed
- Review and update experience section
- Check for broken links
- Update certifications count

### Quarterly
- Add new projects/case studies
- Update tech stack if learned new tools
- Review SEO performance
- Update dependencies (`npm outdated`)

---

## 📌 Quick Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Linting
npm run lint

# Type checking
npx tsc --noEmit

# Bundle analysis
ANALYZE=true npm run build

# Lighthouse audit
npx lighthouse https://jcga.dev --view
```

---

**Last Updated**: February 7, 2026  
**Status**: Ready for Production Deployment  
**Next Action**: Complete checklist items and deploy 🚀

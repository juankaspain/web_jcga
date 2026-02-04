# Juan Carlos García Arriero - Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-f97316?style=flat-square)](https://turbo.build/pack)

Modern, professional portfolio website showcasing 15+ years of experience in cloud architecture, digital banking, and AI-driven solutions. Built with cutting-edge technologies and best practices.

🌐 **Live Site**: [jcga.dev](https://jcga.dev) (Coming soon)

---

## 🎯 About This Project

This portfolio demonstrates expertise in:

| Domain | Description |
|--------|-------------|
| ☁️ **Cloud Architecture** | Azure, Oracle Cloud, multi-cloud strategies |
| 💳 **Payment Systems** | SEPA, instant payments, international transfers |
| 🏦 **Digital Banking** | Channels, PFM/BFM, subscriptions management |
| 🤖 **Data &amp; AI** | Categorization engines, risk models, AI-driven services |
| 🚀 **DevOps Excellence** | CI/CD pipelines, observability, platform engineering |

---

## 🚀 Tech Stack

### Core Framework
| Technology | Version | Description |
|------------|---------|-------------|
| **Next.js** | 16.x | App Router, React Server Components, Turbopack |
| **React** | 19.0 | Latest features, concurrent rendering, `use()` hook |
| **TypeScript** | 5.7 | Full type safety throughout the codebase |

### Styling &amp; Animation
| Technology | Version | Description |
|------------|---------|-------------|
| **Tailwind CSS** | 4.0 | Utility-first CSS with CSS variables |
| **Framer Motion** | 11.15 | Scroll animations, transitions, gestures |
| **Lenis** | 1.1.18 | Smooth scrolling experience |

### Development Tools
| Tool | Description |
|------|-------------|
| **Turbopack** | Rust-based bundler for fast HMR |
| **ESLint** | 9.x with flat config format |
| **PostCSS** | CSS processing pipeline |

---

## ✨ Features

### Implemented Features

- ✅ **Bilingual Support (i18n)** - Full Spanish/English with route-based switching
- ✅ **Blog System** - Articles with likes, comments, and rich content
- ✅ **Smooth Scrolling** - Lenis-powered buttery smooth navigation
- ✅ **Scroll Progress** - Visual indicator of page position
- ✅ **Mouse Glow Effect** - Interactive cursor following gradient
- ✅ **Dark Theme** - Professional dark mode with cyan accents
- ✅ **Fully Responsive** - Mobile-first, optimized for all devices
- ✅ **SEO Optimized** - Metadata, Open Graph, JSON-LD structured data
- ✅ **Accessible** - WCAG 2.1 AA compliant, keyboard navigation
- ✅ **Server Components** - React Server Components for performance
- ✅ **Type-Safe** - 100% TypeScript coverage
- ✅ **Error Boundaries** - Graceful error handling with recovery
- ✅ **Loading States** - Skeleton loaders for better UX

### Pages &amp; Sections

| Page | Route ES | Route EN | Description |
|------|----------|----------|-------------|
| Home | `/` | `/en` | Hero, stats, highlights |
| About | `/about` | `/en/about` | Professional bio |
| Experience | `/experience` | `/en/experience` | Work timeline |
| Projects | `/projects` | `/en/projects` | Portfolio showcase |
| Certifications | `/certifications` | `/en/certifications` | 140+ badges |
| Skills | `/skills` | `/en/skills` | Technical expertise |
| Blog | `/content` | `/en/content` | Tech articles |
| Contact | `/contact` | `/en/contact` | Contact form |

---

## 📁 Project Structure

```
web_jcga/
├── app/
│   ├── (public)/                 # Route group for public pages
│   │   └── page.tsx              # Spanish home page
│   ├── en/                       # English routes (mirror structure)
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── certifications/
│   │   ├── skills/
│   │   ├── content/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── contact/
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── projects/page.tsx
│   ├── certifications/page.tsx
│   ├── skills/page.tsx
│   ├── content/                  # Blog system
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual posts
│   ├── contact/page.tsx
│   ├── api/                      # API Routes
│   │   ├── contact/route.ts      # Contact form handler
│   │   └── likes/route.ts        # Blog likes API
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── error.tsx                 # Error boundary
│   ├── not-found.tsx             # 404 page
│   ├── loading.tsx               # Loading state
│   └── sitemap.ts                # Dynamic sitemap
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky nav with i18n switcher
│   │   └── Footer.tsx            # Site footer
│   ├── home/
│   │   ├── Hero.tsx              # Animated hero section
│   │   ├── ImpactStats.tsx       # Key metrics
│   │   ├── WhatIDo.tsx           # Services overview
│   │   └── HighlightsTimeline.tsx
│   ├── experience/
│   │   └── ExperienceTimeline.tsx
│   ├── projects/
│   │   ├── ProjectsGrid.tsx
│   │   └── ProjectHeader.tsx
│   ├── certifications/
│   │   └── CertificationsGrid.tsx
│   ├── skills/
│   │   └── SkillsCategories.tsx
│   ├── blog/
│   │   ├── LikeButton.tsx        # Interactive likes
│   │   └── CommentForm.tsx       # Comment system
│   ├── contact/
│   │   └── ContactForm.tsx
│   ├── effects/
│   │   ├── ScrollProgress.tsx    # Reading progress bar
│   │   └── MouseGlow.tsx         # Cursor gradient effect
│   ├── providers/
│   │   └── SmoothScrollProvider.tsx  # Lenis provider
│   ├── a11y/
│   │   └── SkipToContent.tsx     # Accessibility skip link
│   ├── ui/                       # Reusable components
│   │   ├── Section.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   └── ErrorBoundary.tsx
│
├── lib/
│   ├── data/
│   │   ├── experience.ts         # Work history data
│   │   ├── projects.ts           # Portfolio projects
│   │   ├── skills.ts             # Technical skills
│   │   ├── certifications.ts     # Certifications data
│   │   └── blog-posts.ts         # Blog articles (i18n)
│   ├── animations/
│   │   └── variants.ts           # Framer Motion presets
│   └── utils/
│       └── classNames.ts
│
├── public/
│   ├── images/
│   ├── icon.svg
│   ├── og-image.svg
│   └── manifest.json
│
├── eslint.config.mjs             # ESLint 9.x flat config
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS config
├── tsconfig.json                 # TypeScript config
├── package.json
└── README.md
```

---

## 🛠️ Installation &amp; Setup

### Prerequisites

- **Node.js** 18.x, 20.x, or 22.x ([Download](https://nodejs.org/))
- **npm** 10+ (included with Node.js)
- **Git** for version control

### 1. Clone the Repository

```bash
git clone https://github.com/juankaspain/web_jcga.git
cd web_jcga
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The development server uses **Turbopack** for fast Hot Module Replacement.

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack on http://localhost:3000 |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run analyze` | Analyze bundle size (requires ANALYZE=true) |

---

## 🌐 Internationalization (i18n)

The site supports **Spanish** (default) and **English**:

### Route Structure

| Spanish (default) | English |
|-------------------|---------|
| `/` | `/en` |
| `/about` | `/en/about` |
| `/content/[slug]` | `/en/content/[slug]` |

### Language Switching

The Header component includes a language switcher that preserves the current route when switching languages.

### Content Structure

All translatable content uses bilingual objects:

```typescript
// lib/data/blog-posts.ts
export const blogPosts = [
  {
    slug: "azure-finops",
    title: {
      es: "Azure FinOps: Optimización de Costes",
      en: "Azure FinOps: Cost Optimization"
    },
    excerpt: {
      es: "Estrategias para optimizar...",
      en: "Strategies for optimizing..."
    },
    content: {
      es: "&lt;p&gt;Contenido en español...&lt;/p&gt;",
      en: "&lt;p&gt;English content...&lt;/p&gt;"
    }
  }
]
```

---

## 📝 Blog System

### Features

- **Rich Content** - HTML content with syntax highlighting support
- **Like System** - Interactive likes with API persistence
- **Comments** - Client-side comment form
- **Tags** - Categorization with tag badges
- **Reading Time** - Automatic calculation
- **Bilingual** - Full ES/EN support

### Adding a New Post

Edit `lib/data/blog-posts.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "4",
    slug: "my-new-post",
    title: {
      es: "Mi Nuevo Artículo",
      en: "My New Article"
    },
    excerpt: {
      es: "Resumen del artículo...",
      en: "Article summary..."
    },
    content: {
      es: "&lt;p&gt;Contenido completo...&lt;/p&gt;",
      en: "&lt;p&gt;Full content...&lt;/p&gt;"
    },
    publishedAt: "2026-02-04",
    readTime: 8,
    tags: ["Cloud", "Azure"],
    likes: 0
  }
]
```

---

## 🎨 Visual Effects

### Scroll Progress Bar

A cyan gradient progress bar at the top of the page indicating reading progress:

```tsx
// components/effects/ScrollProgress.tsx
"use client"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  
  return (
    &lt;motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 origin-left z-50"
      style={{ scaleX }}
    /&gt;
  )
}
```

### Mouse Glow Effect

A subtle gradient that follows the cursor:

```tsx
// components/effects/MouseGlow.tsx
"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function MouseGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  // ... follows cursor position
}
```

### Smooth Scrolling

Powered by Lenis for buttery-smooth scrolling:

```tsx
// components/providers/SmoothScrollProvider.tsx
"use client"
import Lenis from "lenis"

export function SmoothScrollProvider({ children }) {
  useEffect(() =&gt; {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
    // ...
  }, [])
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Next.js and deploys

### Environment Variables (Optional)

```bash
NEXT_PUBLIC_SITE_URL=https://jcga.dev
```

### Build Locally

```bash
npm run build
npm run start
```

---

## 🎯 Performance Targets

### Core Web Vitals Goals

| Metric | Target | Description |
|--------|--------|-------------|
| **LCP** | &lt; 2.5s | Largest Contentful Paint |
| **CLS** | &lt; 0.1 | Cumulative Layout Shift |
| **INP** | &lt; 200ms | Interaction to Next Paint |

### Optimization Strategies

- React Server Components for 60%+ bundle reduction
- Next.js Image optimization with WebP/AVIF
- Code splitting and lazy loading
- Edge deployment with Vercel
- Turbopack for fast development builds

---

## 🐛 Troubleshooting

### Next.js 16 Params Warning

If you see "params is a Promise" warning:

```tsx
// ❌ Old way (Next.js 15)
export default function Page({ params }: { params: { slug: string } }) {
  const post = posts.find(p =&gt; p.slug === params.slug)
}

// ✅ New way (Next.js 16)
import { use } from "react"
export default function Page({ params }: { params: Promise&lt;{ slug: string }&gt; }) {
  const { slug } = use(params)
  const post = posts.find(p =&gt; p.slug === slug)
}
```

### Clean Install

If you encounter issues:

```bash
rm -rf node_modules .next package-lock.json
npm install
npm run dev
```

### Type Errors

Regenerate types:

```bash
rm -rf .next
npm run dev
```

---

## 📄 License

This project is private and proprietary.

© 2026 Juan Carlos García Arriero. All rights reserved.

---

## 👤 Author

**Juan Carlos García Arriero**

| | |
|--|--|
| **Role** | Senior Technical Lead &amp; Cloud Solutions Architect |
| **Company** | Santander Digital Services |
| **Location** | Madrid, Spain |
| **LinkedIn** | [juancarlosgarciarriero](https://linkedin.com/in/juancarlosgarciarriero) |
| **GitHub** | [juankaspain](https://github.com/juankaspain) |
| **Email** | juanca755@hotmail.com |

### Expertise

- ☁️ Cloud Architecture (Azure, Oracle Cloud)
- 💳 Payment Systems &amp; Digital Banking
- 🤖 Data Engineering &amp; AI
- 🚀 DevOps &amp; Platform Engineering
- 👥 Technical Leadership (teams up to 12)

### Certifications

- **140+** professional certifications
- Azure Solutions Architect Expert
- Azure DevOps Engineer Expert
- Azure Data &amp; AI certifications
- Oracle Cloud Infrastructure
- MongoDB Developer &amp; DBA

---

## 🙏 Acknowledgments

Built with:

- [Next.js](https://nextjs.org/) - The React Framework
- [React](https://react.dev/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Lenis](https://lenis.studiofreight.com/) - Smooth Scroll
- [Vercel](https://vercel.com/) - Deployment Platform

---

**Status**: 🚀 Production Ready | **Version**: 1.0.0 | **Last Updated**: February 2026

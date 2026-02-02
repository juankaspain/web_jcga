# Juan Carlos García Arriero - Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)

Modern, professional portfolio website showcasing 15+ years of experience in cloud architecture, digital banking, and AI-driven solutions.

🌐 **Live Site**: Coming soon

---

## 🎯 About This Project

This portfolio demonstrates expertise in:
- ☁️ **Cloud Architecture** (Azure, Oracle Cloud)
- 💳 **Payment Systems** (SEPA, instant payments, international transfers)
- 🏦 **Digital Banking** (channels, PFM/BFM, subscriptions)
- 🤖 **Data & AI** (categorization, risk engines, AI-driven services)
- 🚀 **DevOps & Engineering Excellence** (CI/CD, testing, observability)

---

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 15.1** - App Router, React Server Components, Server Actions
- **React 19** - Latest features and concurrent rendering
- **TypeScript 5.7** - Full type safety

### Styling & Design
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion 11** - Smooth animations and scroll effects
- **Custom Design System** - Neo-naturalism digital theme

### Quality & Tooling
- **ESLint 9.x** - Latest flat config format
- **PostCSS + Autoprefixer** - CSS processing

### Future Enhancements
- **React Three Fiber** - 3D interactive elements (Hero, Skills orbit)
- **MDX** - Rich content for project case studies
- **Sanity CMS** - Optional headless CMS for content management

### Deployment
- **Vercel** - Edge network, automatic deployments
- **GitHub Actions** - CI/CD pipeline

---

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** 18.x or 20.x ([Download](https://nodejs.org/))
- **npm** 11.8.0+ (recommended), **yarn**, or **pnpm** package manager
- **Git** for version control

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/juankaspain/web_jcga.git
cd web_jcga
```

### 2. Rename Route Group (Important!)

Next.js uses parentheses for route groups. Rename the directory:

```bash
# On macOS/Linux
mv app/public_root "app/(public)"

# On Windows (PowerShell)
Rename-Item -Path "app\public_root" -NewName "(public)"

# On Windows (CMD)
ren app\public_root (public)
```

### 3. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm (recommended)
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

**Note**: You may see deprecation warnings during installation. These have been addressed in the latest package.json.

### 4. Clean Install (if needed)

If you encounter issues, perform a clean install:

```bash
# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### 5. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 6. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🐛 Troubleshooting

### Deprecation Warnings

If you see warnings about deprecated packages:

```bash
# Update npm to latest version
npm install -g npm@latest

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Security Vulnerabilities

To check and fix vulnerabilities:

```bash
# Check for vulnerabilities
npm audit

# Attempt automatic fix
npm audit fix

# Force fix (may introduce breaking changes)
npm audit fix --force
```

### ESLint Issues

This project uses ESLint 9.x with flat config format. If you see ESLint errors:

```bash
# Make sure you're using the flat config file
ls eslint.config.mjs

# Run lint
npm run lint
```

### Type Errors

If TypeScript shows errors:

```bash
# Regenerate type definitions
rm -rf .next
npm run dev
```

---

## 📁 Project Structure

```
web_jcga/
├── app/
│   ├── (public)/              # Route group (rename from public_root)
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   └── page.tsx           # Home page
│   ├── about/                 # About page
│   │   └── page.tsx
│   ├── experience/            # Professional experience
│   │   └── page.tsx
│   ├── projects/              # Portfolio projects
│   │   ├── page.tsx           # Projects listing
│   │   └── [slug]/            # Individual project pages
│   │       └── page.tsx
│   ├── certifications/        # Certifications & badges
│   │   └── page.tsx
│   ├── skills/                # Technical skills
│   │   └── page.tsx
│   ├── content/               # Blog/articles
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── contact/               # Contact form
│   │   └── page.tsx
│   ├── api/                   # API routes
│   │   └── contact/
│   │       └── route.ts
│   └── globals.css            # Global styles
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Sticky navigation
│   │   └── Footer.tsx         # Site footer
│   ├── home/
│   │   ├── Hero.tsx           # Hero section with animations
│   │   ├── ImpactStats.tsx    # Key statistics
│   │   ├── WhatIDo.tsx        # Services overview
│   │   └── HighlightsTimeline.tsx
│   ├── experience/
│   │   └── ExperienceTimeline.tsx
│   ├── projects/
│   │   ├── ProjectsGrid.tsx
│   │   └── ProjectHeader.tsx
│   ├── skills/
│   │   └── SkillsCategories.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   └── ui/                    # Reusable UI components
│       ├── Section.tsx
│       ├── Card.tsx
│       └── Badge.tsx
│
├── lib/
│   ├── data/                  # Data files
│   │   ├── experience.ts      # Work history
│   │   ├── projects.ts        # Portfolio projects
│   │   ├── skills.ts          # Technical skills
│   │   └── certifications.ts  # Certs & badges
│   ├── animations/
│   │   └── variants.ts        # Framer Motion presets
│   └── utils/
│       └── classNames.ts      # Utility functions
│
├── public/
│   └── images/                # Static assets
│
├── .gitignore
├── eslint.config.mjs          # ESLint 9.x flat config
├── next.config.mjs            # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── postcss.config.mjs         # PostCSS configuration
├── package.json               # Dependencies
└── README.md
```

---

## 🎨 Features

### Current Features
- ✅ **Modern Design** - Clean, professional UI with smooth animations
- ✅ **Fully Responsive** - Mobile-first approach, optimized for all devices
- ✅ **Dark Theme** - Eye-friendly dark mode with cyan accents
- ✅ **Server Components** - React Server Components for optimal performance
- ✅ **Type-Safe** - Full TypeScript coverage throughout
- ✅ **SEO Optimized** - Proper metadata, semantic HTML, Open Graph tags
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Smooth Animations** - Framer Motion scroll and hover effects
- ✅ **Modern Tooling** - ESLint 9.x, latest dependencies

### Coming Soon
- 🔄 Interactive 3D elements (Three.js/R3F)
- 🔄 MDX blog with code syntax highlighting
- 🔄 Contact form with API integration
- 🔄 Project case studies with detailed breakdowns
- 🔄 Multilingual support (EN/ES)

---

## 📝 Content Management

Content is managed through TypeScript files in `lib/data/`:

### `lib/data/experience.ts`
```typescript
export const experience = [
  {
    company: "Santander Digital Services",
    role: "Senior Technical Lead & Cloud Solutions Architect",
    period: "2018 - Present",
    description: "Leading technical solutions for digital banking...",
    technologies: ["Azure", "Node.js", "MongoDB", "AI"]
  }
]
```

### `lib/data/projects.ts`
```typescript
export const projects = [
  {
    slug: "payment-platform",
    title: "Multi-Channel Payment Platform",
    description: "Centralized platform for international payments...",
    tags: ["Payments", "SEPA", "Cloud"]
  }
]
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Next.js and deploys

**Environment Variables** (if needed):
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Build Locally

```bash
npm run build
npm run start
```

---

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on http://localhost:3000 |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎯 Performance Targets

Core Web Vitals goals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms

Optimization strategies:
- React Server Components for 60%+ bundle reduction
- Next.js Image component with WebP/AVIF
- Code splitting and lazy loading
- Edge deployment with Vercel

---

## 🤝 Contributing

This is a personal portfolio project. Not open for contributions.

---

## 📄 License

This project is private and proprietary.

© 2026 Juan Carlos García Arriero. All rights reserved.

---

## 👤 Author

**Juan Carlos García Arriero**

- **Role**: Senior Technical Lead & Cloud Solutions Architect
- **LinkedIn**: [juancarlosga](https://www.linkedin.com/in/juancarlosga/)
- **Email**: juanca755@hotmail.com
- **Location**: Madrid, Spain
- **Company**: Santander Digital Services

### Expertise
- ☁️ Cloud Architecture (Azure, Oracle)
- 💳 Payment Systems & Banking
- 🤖 Data Engineering & AI
- 🚀 DevOps & Platform Engineering
- 👥 Technical Leadership (teams up to 12)

### Certifications
- 140+ professional certifications
- Azure Solutions Architect Expert
- Azure DevOps Engineer Expert
- Multiple Azure Data & AI certifications
- Oracle Cloud Infrastructure
- MongoDB certifications

---

## 🙏 Acknowledgments

Built with inspiration from:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- Modern portfolio trends 2026

---

**Status**: 🚧 In Development | **Version**: 1.0.0 | **Last Updated**: February 2026

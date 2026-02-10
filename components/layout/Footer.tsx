"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const copy = {
  es: {
    description:
      'Construyendo el futuro de la banca digital y los sistemas de pago a través de soluciones cloud innovadoras.',
    quickLinksTitle: 'Enlaces',
    connectTitle: 'Conectar',
    available: 'Disponible para proyectos freelance y colaboraciones',
    craftedWith: 'Hecho con pasión.',
    online: 'Online',
    tags: ['Banca Digital', 'Pagos', 'Cloud', 'Data & AI'],
    links: [
      { name: 'Proyectos', href: '/projects' },
      { name: 'Experiencia', href: '/experience' },
      { name: 'Sobre mí', href: '/about' },
      { name: 'Contacto', href: '/contact' },
    ],
  },
  en: {
    description:
      'Building the future of digital banking and payment systems through innovative cloud solutions.',
    quickLinksTitle: 'Quick Links',
    connectTitle: 'Connect',
    available: 'Available for freelance projects and collaborations',
    craftedWith: 'Crafted with passion.',
    online: 'Online',
    tags: ['Digital Banking', 'Payments', 'Cloud', 'Data & AI'],
    links: [
      { name: 'Projects', href: '/en/projects' },
      { name: 'Experience', href: '/en/experience' },
      { name: 'About', href: '/en/about' },
      { name: 'Contact', href: '/en/contact' },
    ],
  },
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/juancarlosgarciarriero',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/juankaspain',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:contact@jcga.dev',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const locale = pathname.startsWith('/en') ? 'en' : 'es'
  const t = copy[locale]

  return (
    <footer className="relative overflow-hidden border-t theme-transition border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full blur-3xl bg-[var(--mesh-color-1)]" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] animate-pulse rounded-full blur-3xl animation-delay-2000 bg-[var(--mesh-color-2)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href={locale === 'en' ? '/en' : '/'} className="inline-block">
                <span className="text-2xl font-bold text-gradient-accent">JCGA</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full ml-0.5 align-super bg-[var(--accent-primary)]" />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {t.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full px-3 py-1 text-xs border bg-[var(--surface-secondary)] border-[var(--border-subtle)] text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[var(--text-primary)]">
              {t.quickLinksTitle}
            </h3>
            <ul className="space-y-3">
              {t.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[var(--text-primary)]">
              {t.connectTitle}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 bg-[var(--surface-secondary)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:shadow-[var(--shadow-glow-sm)]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-xs text-[var(--text-tertiary)]">{t.available}</p>
          </div>
        </div>

        <div
          className="mt-12 h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, var(--border-default), transparent)',
          }}
        />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[var(--text-tertiary)]">
            &copy; {currentYear}{' '}
            <span className="text-[var(--text-secondary)]">
              Juan Carlos García Arriero
            </span>
            . {t.craftedWith}
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[var(--success)]" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
            </span>
            <span className="text-xs text-[var(--success)]">{t.online}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

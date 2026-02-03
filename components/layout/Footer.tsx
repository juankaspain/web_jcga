"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/juancarlosgarciarriero',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    gradient: 'from-blue-400 via-blue-500 to-blue-600',
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/juankaspain',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    gradient: 'from-purple-400 via-pink-500 to-pink-600',
  },
  {
    name: 'Email',
    href: 'mailto:contact@jcga.dev',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-cyan-400 via-teal-500 to-emerald-600',
  },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contacto' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/50 bg-gradient-to-b from-slate-950 via-slate-950 to-black">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] animate-pulse rounded-full bg-purple-500/5 blur-3xl animation-delay-2000" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/20 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Description */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="inline-flex items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur" />
                  <div className="relative rounded-lg bg-slate-900 px-4 py-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
                      JCGA
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-base leading-relaxed text-slate-300">
                Building the future of digital banking and payment systems through innovative cloud solutions.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Digital Banking', 'Payments', 'Cloud', 'Data & AI'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-full border border-slate-700/50 bg-slate-900/50 px-3 py-1 text-xs font-medium text-slate-400 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-cyan-400"
                    >
                      <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${link.gradient} opacity-0 blur transition-opacity duration-500 group-hover:opacity-60`} />
                    
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-900/80 text-slate-400 backdrop-blur-sm transition-all duration-300 group-hover:border-slate-600 group-hover:bg-slate-800 group-hover:text-cyan-400 group-hover:shadow-lg"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-sm text-slate-500">
                Available for freelance projects and collaborations
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 space-y-6"
        >
          {/* Decorative gradient line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-slate-500">
              © {currentYear} <span className="text-slate-400">Juan Carlos García Arriero</span>. Crafted with passion.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                Online
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>
    </footer>
  )
}

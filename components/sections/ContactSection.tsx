"use client"

import { useRef, useState, useEffect } from 'react'
  import { motion, useInView } from 'framer-motion'

import { MagneticButton } from '@/components/ui/MagneticButton'

interface ContactSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: '¿Tienes un proyecto?',
    title: 'Hablemos',
    description: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades de colaboración.',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cta: 'Enviar mensaje',
    orConnect: 'O conecta directamente',
    availability: 'Disponible para proyectos',
  },
  en: {
    eyebrow: 'Have a project?',
    title: "Let's talk",
    description: "I'm always open to discussing new projects, creative ideas, or collaboration opportunities.",
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cta: 'Send message',
    orConnect: 'Or connect directly',
    availability: 'Available for projects',
  },
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/juancarlosgarciarriero',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/juankaspain',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    gradient: 'from-purple-400 to-pink-600',
  },
  {
    name: 'Email',
    href: 'mailto:contact@jcga.dev',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-cyan-400 to-emerald-600',
  },
]

export function ContactSection({ locale = 'es' }: ContactSectionProps) {
  const t = copy[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

    // Generate particle positions only on client to avoid hydration mismatch
  const [particles, setParticles] = useState<Array<{ left: string; top: string }>>([])
  
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 py-24 lg:py-32">
      {/* Animated background particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/10 blur-3xl animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent blur-3xl" />
        
        {/* Partículas flotantes */}
              {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
Partículas flotantes              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t.availability}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400"
        >
          {t.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-r from-slate-50 via-cyan-100 to-slate-50 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
        >
          {t.description}
        </motion.p>

        {/* CTA with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="relative mt-10"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-lg" />
          <MagneticButton
            href={locale === 'es' ? '/contacto' : '/en/contact'}
            variant="primary"
            size="lg"
            className="relative"
          >
            {t.cta}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </MagneticButton>
        </motion.div>

        {/* Social links with glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <p className="mb-8 text-sm font-medium text-slate-400">{t.orConnect}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group relative"
                aria-label={link.name}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${link.gradient} opacity-0 blur transition-opacity duration-500 group-hover:opacity-50`} />
                
                <div className="relative flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur-xl transition-all duration-300 group-hover:border-slate-600 group-hover:bg-slate-800/90 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <div className="text-slate-400 transition-colors duration-300 group-hover:text-cyan-400">
                    {link.icon}
                  </div>
                  <span className="text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                    {link.name}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  EnvelopeSimple, 
  LinkedinLogo, 
  GithubLogo,
  Phone,
  MapPin
} from '@phosphor-icons/react'
import { SmartContactForm } from '@/components/contact/SmartContactForm'

interface ContactSectionProps {
  locale?: 'es' | 'en'
}

const copy = {
  es: {
    eyebrow: 'Contacto',
    title: 'Trabajemos juntos',
    subtitle: 'Cuéntame sobre tu proyecto y veamos cómo puedo ayudarte',
    availability: 'Disponible para proyectos',
    contactInfoTitle: 'Información de contacto',
    contactInfoSubtitle: 'Prefiero discusiones estructuradas. Completa el formulario o contacta directamente:',
    email: 'Email profesional',
    emailValue: 'juanca755@hotmail.com',
    phone: 'Teléfono',
    phoneValue: '+34 XXX XXX XXX',
    location: 'Ubicación',
    locationValue: 'Alicante, España (Remote-friendly)',
    linkedin: 'LinkedIn',
    linkedinValue: '/in/juancarlosgarciarriero',
    github: 'GitHub',
    githubValue: '/juankaspain',
    responseTime: 'Tiempo de respuesta típico',
    responseTimeValue: '< 24 horas'
  },
  en: {
    eyebrow: 'Contact',
    title: "Let's work together",
    subtitle: 'Tell me about your project and let\'s see how I can help',
    availability: 'Available for projects',
    contactInfoTitle: 'Contact information',
    contactInfoSubtitle: 'I prefer structured discussions. Fill out the form or contact directly:',
    email: 'Professional email',
    emailValue: 'juanca755@hotmail.com',
    phone: 'Phone',
    phoneValue: '+34 XXX XXX XXX',
    location: 'Location',
    locationValue: 'Alicante, Spain (Remote-friendly)',
    linkedin: 'LinkedIn',
    linkedinValue: '/in/juancarlosgarciarriero',
    github: 'GitHub',
    githubValue: '/juankaspain',
    responseTime: 'Typical response time',
    responseTimeValue: '< 24 hours'
  },
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/juancarlosgarciarriero',
    icon: LinkedinLogo,
    gradient: 'from-electric-400 to-electric-600',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/juankaspain',
    icon: GithubLogo,
    gradient: 'from-slate-400 to-slate-600',
  },
]

export function ContactSection({ locale = 'es' }: ContactSectionProps) {
  const t = copy[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-navy-950 to-slate-950 py-24 lg:py-32"
    >
      {/* Premium background with grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="relative container-professional">
        
        {/* Header */}
        <div className="text-center mb-16">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass border border-success-500/20 px-4 py-2 text-sm font-medium text-success-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500" />
            </span>
            {t.availability}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-400"
          >
            {t.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-4"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Two-column layout: Form + Contact Info */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Smart Contact Form */}
          <div className="lg:col-span-7">
            <SmartContactForm locale={locale} />
          </div>

          {/* Right: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact info header */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.contactInfoTitle}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.contactInfoSubtitle}
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${t.emailValue}`}
                className="group block p-4 rounded-xl glass-card border border-slate-800 hover:border-electric-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-500/20 transition-colors">
                    <EnvelopeSimple size={20} weight="duotone" className="text-electric-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 mb-0.5">{t.email}</div>
                    <div className="text-sm font-medium text-white group-hover:text-electric-400 transition-colors">
                      {t.emailValue}
                    </div>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="block p-4 rounded-xl glass-card border border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} weight="duotone" className="text-gold-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 mb-0.5">{t.phone}</div>
                    <div className="text-sm font-medium text-white">
                      {t.phoneValue}
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="block p-4 rounded-xl glass-card border border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success-500/10 border border-success-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} weight="duotone" className="text-success-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 mb-0.5">{t.location}</div>
                    <div className="text-sm font-medium text-white">
                      {t.locationValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time callout */}
            <div className="p-4 rounded-xl bg-electric-500/5 border border-electric-500/20">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-400" />
                <div className="text-xs font-semibold text-electric-400 uppercase tracking-wide">
                  {t.responseTime}
                </div>
              </div>
              <div className="text-sm font-medium text-white">
                {t.responseTimeValue}
              </div>
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-slate-800">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
                Social
              </div>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex-1"
                      aria-label={link.name}
                      title={link.name}
                    >
                      <div className="flex items-center justify-center gap-2 p-3 rounded-xl glass-card border border-slate-800 hover:border-electric-500/30 transition-all duration-300">
                        <IconComponent 
                          size={20} 
                          weight="fill" 
                          className="text-slate-400 group-hover:text-electric-400 transition-colors" 
                        />
                        <span className="text-xs font-medium text-slate-400 group-hover:text-electric-400 transition-colors">
                          {link.name}
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

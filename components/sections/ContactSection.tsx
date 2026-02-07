"use client"

import { motion } from 'framer-motion'
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
        emailValue: 'contact@jcga.dev',
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
        emailValue: 'contact@jcga.dev',
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

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Premium background with grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-slate-950 to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.availability}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400"
          >
            {t.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-5xl"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-400 mx-auto max-w-2xl"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Two-column layout: Form + Contact Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Smart Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SmartContactForm locale={locale} />
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact info header */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{t.contactInfoTitle}</h3>
              <p className="text-slate-400 text-sm">{t.contactInfoSubtitle}</p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${t.emailValue}`}
                className="group flex items-center gap-4 p-4 rounded-xl glass-card border border-slate-700/50 hover:border-electric-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20">
                  <EnvelopeSimple size={20} weight="duotone" className="text-electric-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{t.email}</div>
                  <div className="text-sm font-medium text-white">{t.emailValue}</div>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-slate-700/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Phone size={20} weight="duotone" className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{t.phone}</div>
                  <div className="text-sm font-medium text-white">{t.phoneValue}</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-slate-700/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <MapPin size={20} weight="duotone" className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{t.location}</div>
                  <div className="text-sm font-medium text-white">{t.locationValue}</div>
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

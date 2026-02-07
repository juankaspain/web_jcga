"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import { 
  Rocket, 
  Trophy, 
  Users, 
  TrendUp,
  ArrowRight,
  Envelope 
} from "@phosphor-icons/react"

// Dynamic import para ParticleNetwork (no SSR, es Canvas)
const ParticleNetwork = dynamic(
  () => import("@/components/effects/ParticleNetwork").then(mod => mod.ParticleNetwork),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-transparent" />
  }
)

type HeroProps = {
  locale?: "es" | "en"
}

const copy = {
  es: {
    available: "Disponible para nuevos retos",
    greeting: "Hola, soy",
    name: "Juan Carlos",
    surname: "García Arriero",
    role: "Senior Technical Lead",
    specialty: "Cloud & Payments Architect",
    description: "Diseño arquitecturas cloud que procesan millones de transacciones en banca digital. Especializado en sistemas de pagos, microservicios y soluciones Data & AI.",
    cta: "Ver proyectos",
    ctaSecondary: "Contactar",
    stats: [
      { value: "15+", label: "Años experiencia", icon: Rocket },
      { value: "140+", label: "Certificaciones", icon: Trophy },
      { value: "12", label: "Equipo actual", icon: Users },
      { value: "5M+", label: "Usuarios impactados", icon: TrendUp }
    ],
    techStack: "TECH STACK",
    scroll: "SCROLL PARA EXPLORAR"
  },
  en: {
    available: "Available for new challenges",
    greeting: "Hi, I'm",
    name: "Juan Carlos",
    surname: "García Arriero",
    role: "Senior Technical Lead",
    specialty: "Cloud & Payments Architect",
    description: "I design cloud architectures processing millions of transactions in digital banking. Specialized in payment systems, microservices, and Data & AI solutions.",
    cta: "View projects",
    ctaSecondary: "Contact me",
    stats: [
      { value: "15+", label: "Years experience", icon: Rocket },
      { value: "140+", label: "Certifications", icon: Trophy },
      { value: "12", label: "Current team", icon: Users },
      { value: "5M+", label: "Users impacted", icon: TrendUp }
    ],
    techStack: "TECH STACK",
    scroll: "SCROLL TO EXPLORE"
  }
}

const techBadges = [
  { name: "Azure", color: "electric" },
  { name: "Kubernetes", color: "electric" },
  { name: "Python", color: "electric" },
  { name: "React", color: "electric" },
  { name: "Node.js", color: "electric" },
  { name: "Terraform", color: "electric" }
]

export function Hero({ locale = "es" }: HeroProps) {
  const t = copy[locale]
  const projectsLink = locale === "en" ? "/en/projects" : "/projects"
  const contactLink = locale === "en" ? "/en/contact" : "/contact"
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Financial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-slate-950 to-navy-950" />
      
      {/* Animated gradient orbs - Electric Blue + Gold palette */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
          <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-electric-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>
      )}

      {/* Neural Network Background */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 opacity-30">
          <ParticleNetwork />
        </div>
      )}

      {/* Professional grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Content */}
      <div className="relative container-professional flex min-h-screen flex-col justify-center py-24 md:py-32">
        <div className="hero-layout">
          
          {/* Left: Main content */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : "hidden"}
            animate={prefersReducedMotion ? { opacity: 1 } : "visible"}
            variants={prefersReducedMotion ? undefined : staggerContainer}
            className="hero-left"
          >
            {/* Availability badge with gold accent */}
            <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-500/20">
                <span className="relative flex h-2 w-2">
                  {!prefersReducedMotion && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75" />
                  )}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
                </span>
                <span className="text-sm font-medium text-slate-300">{t.available}</span>
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p 
              variants={prefersReducedMotion ? undefined : staggerItem}
              className="text-lg text-slate-400 mb-2"
            >
              {t.greeting}
            </motion.p>

            {/* Name with premium fintech gradient */}
            <motion.h1 variants={prefersReducedMotion ? undefined : staggerItem} className="mb-6">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-2">
                {t.name}
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-fintech tracking-tight">
                {t.surname}
              </span>
            </motion.h1>

            {/* Role with Electric Blue */}
            <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="mb-6">
              <p className="text-xl md:text-2xl font-semibold text-slate-200">{t.role}</p>
              <p className="text-xl md:text-2xl font-light text-electric-400">{t.specialty}</p>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={prefersReducedMotion ? undefined : staggerItem}
              className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
            >
              {t.description}
            </motion.p>

            {/* CTAs with Phosphor Icons */}
            <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="flex flex-wrap gap-4 mb-12">
              <MagneticButton
                href={projectsLink}
                variant="primary"
                size="lg"
                className="shadow-lg glow-electric-sm hover:glow-electric transition-shadow duration-300"
              >
                {t.cta}
                <ArrowRight size={20} weight="bold" />
              </MagneticButton>
              <MagneticButton
                href={contactLink}
                variant="secondary"
                size="lg"
                className="hover-lift"
              >
                <Envelope size={20} weight="duotone" />
                {t.ctaSecondary}
              </MagneticButton>
            </motion.div>

            {/* Tech badges with hover effects */}
            <motion.div variants={prefersReducedMotion ? undefined : staggerItem}>
              <p className="text-xs font-semibold text-slate-500 tracking-wider mb-3">{t.techStack}</p>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 text-sm font-medium text-slate-400 glass rounded-lg border border-slate-700/50 hover:border-electric-500/50 hover:text-electric-400 hover:shadow-glow-sm transition-all duration-300 cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interactive stats card with premium fintech styling */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.5, duration: 0.6 }}
            className="hero-right"
          >
            <div className="card-interactive glass-strong p-8 relative">
              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-500/20 to-transparent rounded-bl-3xl" />
              
              <div className="relative stats-grid">
                {t.stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.7 + index * 0.1 }}
                      className="group text-center p-4 rounded-xl hover:bg-slate-800/30 transition-colors duration-300"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <IconComponent 
                          size={24} 
                          weight="duotone" 
                          className="text-gold-500 group-hover:text-gold-400 transition-colors duration-300"
                        />
                        <div className="text-4xl md:text-5xl font-bold text-gradient-electric">
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-slate-500 tracking-widest">{t.scroll}</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2 hover:border-electric-500/50 transition-colors duration-300"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-electric-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

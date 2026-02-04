"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import dynamic from "next/dynamic"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"

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
      { value: "15+", label: "Años experiencia" },
      { value: "140+", label: "Certificaciones" },
      { value: "12", label: "Equipo actual" },
      { value: "5M+", label: "Usuarios impactados" }
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
      { value: "15+", label: "Years experience" },
      { value: "140+", label: "Certifications" },
      { value: "12", label: "Current team" },
      { value: "5M+", label: "Users impacted" }
    ],
    techStack: "TECH STACK",
    scroll: "SCROLL TO EXPLORE"
  }
}

const techBadges = ["Azure", "Kubernetes", "Python", "React", "Node.js", "Terraform"]

export function Hero({ locale = "es" }: HeroProps) {
  const t = copy[locale]
  const projectsLink = locale === "en" ? "/en/projects" : "/projects"
  const contactLink = locale === "en" ? "/en/contact" : "/contact"

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-40">
        <ParticleNetwork />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center md:py-32 lg:px-8">
        
        {/* Left: Main content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 max-w-2xl"
        >
          {/* Availability badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-slate-300">{t.available}</span>
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p 
            variants={staggerItem}
            className="text-lg text-slate-400 mb-2"
          >
            {t.greeting}
          </motion.p>

          {/* Name with gradient */}
          <motion.h1 variants={staggerItem} className="mb-4">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              {t.name}
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              {t.surname}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={staggerItem} className="mb-6">
            <p className="text-xl md:text-2xl font-semibold text-slate-200">{t.role}</p>
            <p className="text-xl md:text-2xl font-light text-cyan-400">{t.specialty}</p>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={staggerItem}
            className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
          >
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-12">
            <Link
              href={projectsLink}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <span className="relative z-10">{t.cta}</span>
              <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href={contactLink}
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 rounded-xl text-slate-300 font-semibold hover:border-cyan-500/50 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
            >
              {t.ctaSecondary}
            </Link>
          </motion.div>

          {/* Tech badges */}
          <motion.div variants={staggerItem}>
            <p className="text-xs font-semibold text-slate-500 tracking-wider mb-3">{t.techStack}</p>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium text-slate-400 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full md:w-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
            {/* Glow effect */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative grid grid-cols-2 gap-8">
              {t.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-slate-500 tracking-widest">{t.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

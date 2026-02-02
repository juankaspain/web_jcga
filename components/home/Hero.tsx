"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

type HeroProps = {
  locale?: "es" | "en"
}

const copy = {
  es: {
    kicker: "Cloud · Pagos · Data & AI · Banca Digital",
    title: "Juan Carlos García Arriero",
    subtitle: "Senior Technical Lead & Cloud Solutions Architect en banca, especializado en canales digitales y soluciones basadas en datos y AI.",
    body: "Diseño y lidero plataformas que dan servicio a millones de clientes, combinando arquitectura cloud, prácticas de ingeniería DevOps y una visión end-to-end del negocio financiero.",
    ctaPrimary: "Ver proyectos de alto impacto",
    ctaSecondary: "Ver experiencia completa",
    impactTitle: "Impacto",
    customers: "Soluciones para millones de clientes en varios países.",
    certifications: "+140 certificaciones en Azure, Oracle, DevOps, Data & AI, MongoDB.",
    team: "Liderazgo de equipos multidisciplinares de hasta 12 personas.",
    years: "+15 años",
    yearsDesc: "de experiencia en TI (sanidad, telecomunicaciones, banca).",
  },
  en: {
    kicker: "Cloud · Payments · Data & AI · Digital Banking",
    title: "Juan Carlos García Arriero",
    subtitle: "Senior Technical Lead & Cloud Solutions Architect in banking, specialized in digital channels and data/AI-driven solutions.",
    body: "I design and lead platforms serving millions of customers, combining cloud architecture, DevOps engineering practices, and an end-to-end view of financial services.",
    ctaPrimary: "View high-impact projects",
    ctaSecondary: "View full experience",
    impactTitle: "Impact",
    customers: "Solutions for millions of customers across multiple countries.",
    certifications: "+140 certifications in Azure, Oracle, DevOps, Data & AI, MongoDB.",
    team: "Leadership of multidisciplinary teams of up to 12 people.",
    years: "+15 years",
    yearsDesc: "of experience in IT (healthcare, telecom, banking).",
  },
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}

// Gradient orbs
function GradientOrbs() {
  return (
    <>
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  )
}

export function Hero({ locale = "es" }: HeroProps) {
  const t = copy[locale]

  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_50%)]" />
      <GradientOrbs />
      <FloatingParticles />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:py-28 lg:py-32">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl flex-1"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300"
          >
            {t.kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{t.title.split(' ')[0]} {t.title.split(' ')[1]}</span>
            <br />
            <span>{t.title.split(' ').slice(2).join(' ')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4 text-lg text-slate-300 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8 text-sm text-slate-400 leading-relaxed"
          >
            {t.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/projects" variant="primary" size="lg">
              {t.ctaPrimary}
            </Button>
            <Button href="/experience" variant="outline" size="lg">
              {t.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right content - Impact card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-3xl scale-90" />
            
            <motion.div
              className="relative glass-card rounded-3xl p-8 max-w-sm hover-lift"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {t.impactTitle}
                </span>
              </div>

              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3"
                >
                  <span className="text-2xl">🚀</span>
                  <div>
                    <span className="font-bold text-cyan-300">{t.years}</span>
                    <span className="text-sm text-slate-300"> {t.yearsDesc}</span>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3"
                >
                  <span className="text-2xl">🌍</span>
                  <span className="text-sm text-slate-300">{t.customers}</span>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-3"
                >
                  <span className="text-2xl">🏆</span>
                  <span className="text-sm text-slate-300">{t.certifications}</span>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-3"
                >
                  <span className="text-2xl">👥</span>
                  <span className="text-sm text-slate-300">{t.team}</span>
                </motion.li>
              </ul>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import dynamic from "next/dynamic"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"

// Dynamic import para ParticleNetwork (no SSR, es Canvas)
const ParticleNetwork = dynamic(
  () => import("@/components/effects/ParticleNetwork").then(mod => mod.ParticleNetwork),
  { ssr: false }
)

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
    impactItems: [
      { highlight: "+15 años", text: "de experiencia en TI (sanidad, telecomunicaciones, banca)." },
      { highlight: "Millones", text: "de clientes impactados en varios países." },
      { highlight: "+140", text: "certificaciones en Azure, Oracle, DevOps, Data & AI." },
      { highlight: "12 personas", text: "liderando equipos multidisciplinares." }
    ]
  },
  en: {
    kicker: "Cloud · Payments · Data & AI · Digital Banking",
    title: "Juan Carlos García Arriero",
    subtitle: "Senior Technical Lead & Cloud Solutions Architect in banking, specialized in digital channels and data/AI-driven solutions.",
    body: "I design and lead platforms serving millions of customers, combining cloud architecture, DevOps engineering practices, and an end-to-end view of financial services.",
    ctaPrimary: "View high-impact projects",
    ctaSecondary: "View full experience",
    impactTitle: "Impact",
    impactItems: [
      { highlight: "+15 years", text: "of experience in IT (healthcare, telecom, banking)." },
      { highlight: "Millions", text: "of customers impacted across multiple countries." },
      { highlight: "+140", text: "certifications in Azure, Oracle, DevOps, Data & AI." },
      { highlight: "12 people", text: "leading multidisciplinary teams." }
    ]
  }
}

export function Hero({ locale = "es" }: HeroProps) {
  const t = copy[locale]

  return (
    <section className="relative min-h-[90vh] overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:py-32">
        {/* Left: Text content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-xl"
        >
          <motion.p
            variants={staggerItem}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400"
          >
            {t.kicker}
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="mb-4 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl lg:text-6xl"
          >
            {t.title}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mb-4 text-lg text-slate-300 md:text-xl"
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mb-8 text-sm text-slate-400 leading-relaxed"
          >
            {t.body}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={locale === "es" ? "/projects" : "/en/projects"}
              className="group relative overflow-hidden rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="relative z-10">{t.ctaPrimary}</span>
            </Link>
            <Link
              href={locale === "es" ? "/experience" : "/en/experience"}
              className="rounded-full border border-slate-600 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-50 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-slate-800"
            >
              {t.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Impact card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="mt-8 flex-1 md:mt-0"
        >
          <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-700/50 bg-slate-900/80 p-8 backdrop-blur-md">
            {/* Glow effect */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-50" />
            
            <div className="relative">
              <div className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                {t.impactTitle}
              </div>
              
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-4"
              >
                {t.impactItems.map((item, index) => (
                  <motion.li
                    key={`impact-${index}`}
                    variants={staggerItem}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span className="text-slate-300">
                      <span className="font-bold text-cyan-300">{item.highlight}</span>{" "}
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

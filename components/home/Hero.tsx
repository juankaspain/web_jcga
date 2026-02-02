"use client"

import { motion } from "framer-motion"
import Link from "next/link"

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
  },
  en: {
    kicker: "Cloud · Payments · Data & AI · Digital Banking",
    title: "Juan Carlos García Arriero",
    subtitle:
      "Senior Technical Lead & Cloud Solutions Architect in banking, specialized in digital channels and data/AI-driven solutions.",
    body: "I design and lead platforms serving millions of customers, combining cloud architecture, DevOps engineering practices, and an end-to-end view of financial services.",
    ctaPrimary: "View high-impact projects",
    ctaSecondary: "View full experience",
    impactTitle: "Impact",
    customers: "Solutions for millions of customers across multiple countries.",
    certifications: "+140 certifications in Azure, Oracle, DevOps, Data & AI, MongoDB.",
    team: "Leadership of multidisciplinary teams of up to 12 people.",
  },
}

export function Hero({ locale = "es" }: HeroProps) {
  const t = copy[locale]

  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {t.kicker}
          </p>

          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
            {t.title}
          </h1>

          <p className="mb-4 text-lg text-slate-300">{t.subtitle}</p>

          <p className="mb-8 text-sm text-slate-400">{t.body}</p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-400"
            >
              {t.ctaPrimary}
            </Link>
            <Link
              href="/experience"
              className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-50 transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-8 flex-1 md:mt-0"
        >
          <div className="relative mx-auto h-64 w-64 max-w-xs rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {t.impactTitle}
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                <span className="font-semibold text-cyan-300">{locale === "es" ? "+15 años" : "+15 years"}</span>{" "}
                {locale === "es"
                  ? "de experiencia en TI (sanidad, telecomunicaciones, banca)."
                  : "of experience in IT (healthcare, telecom, banking)."}
              </li>
              <li>{t.customers}</li>
              <li>{t.certifications}</li>
              <li>{t.team}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

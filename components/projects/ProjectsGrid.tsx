"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { projects } from "@/lib/data/projects"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"
import { getTranslatedProject } from "@/lib/i18n/projects"

type ProjectsGridProps = {
  locale?: "es" | "en"
  limit?: number
  showFilters?: boolean
}

const categories = [
  { id: "all", label: { es: "Todos", en: "All" } },
  { id: "cloud", label: { es: "Cloud", en: "Cloud" } },
  { id: "payments", label: { es: "Pagos", en: "Payments" } },
  { id: "data", label: { es: "Data & AI", en: "Data & AI" } },
  { id: "architecture", label: { es: "Arquitectura", en: "Architecture" } }
]

export function ProjectsGrid({ locale = "es", limit, showFilters = true }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    return project.categories?.includes(activeFilter)
  })

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-50 md:text-4xl">
            {locale === "es" ? "Proyectos de Alto Impacto" : "High-Impact Projects"}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            {locale === "es"
              ? "Soluciones que han transformado operaciones y generado valor medible"
              : "Solutions that have transformed operations and generated measurable value"}
          </p>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === cat.id
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                    : "border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300"
                }`}
              >
                {cat.label[locale]}
              </button>
            ))}
          </motion.div>
        )}

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayedProjects.map((project) => (
                  const translated = getTranslatedProject(project.id, locale) || {}
                  return (
            <motion.article
              key={project.id}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Project image/preview area */}
              slate-800 to-slate-900">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 transition-opacity duration-300 group-hover:opacity-70" />

                {/* Project icon/visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {project.icon || "💼"}
                  </div>
                </div>

                {/* Category badges */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1">
                  {project.categories?.slice(0, 2).map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-slate-950/80 px-2 py-0.5 text-xs font-medium text-cyan-400 backdrop-blur-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950">
                    {locale === "es" ? "Ver detalles" : "View details"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-50 transition-colors group-hover:text-cyan-300">
                  {translated.title || project.title}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm text-slate-400">
                  {translated.description || project.description}
                </p>

                {/* Impact metrics */}
                {translated.metrics || project.metrics && translated.metrics || project.metrics.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-3">
                    {translated.metrics || project.metrics.slice(0, 2).map((metric, mIndex) => (
                      <div key={mIndex} className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{metric.value}</div>
                        <div className="text-xs text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech stack */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded bg-slate-800/50 px-2 py-0.5 text-xs text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          )
                })
        </motion.div>

        {/* View all link */}
                  )
        {limit && filteredProjects.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href={locale === "es" ? "/projects" : "/en/projects"}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-400 transition-all hover:bg-cyan-500/20"
            >
              {locale === "es" ? "Ver todos los proyectos" : "View all projects"}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

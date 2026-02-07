"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { getAllProjects } from "@/lib/data/projects"
import { staggerContainer, staggerItem } from "@/lib/animations/variants"
import { getTranslatedProject } from "@/lib/i18n/projects"
import { GlassCard } from "@/components/ui/GlassCard"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

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
  const prefersReducedMotion = useReducedMotion()
  const projects = getAllProjects(locale)

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    return project.tags?.some(tag => tag.toLowerCase().includes(activeFilter))
  })

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
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
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.2 }}
            className="mb-8 flex flex-wrap justify-center gap-3"
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

        {/* Projects grid with GlassCard */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {displayedProjects.map((project) => {
            const translated = getTranslatedProject(project.slug, locale) || {}
            const projectMetrics = translated.metrics || project.metrics
            const allTechnologies = project.techStack?.flatMap(ts => ts.technologies) || project.tags || []

            return (
              <motion.div key={project.slug} variants={staggerItem}>
                <Link href={`/projects/${project.slug}`}>
                  <GlassCard className="group relative overflow-hidden p-0 transition-all hover:scale-[1.02]">
                    {/* Project image/preview area */}
                    <div className="relative h-48 overflow-hidden">
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20" />

                      {/* Project icon/visual */}
                      <div className="flex h-full items-center justify-center">
                        <span className="text-5xl">
                          {project.highlightMetric?.icon || "\uD83D\uDCBC"}
                        </span>
                      </div>

                      {/* Category badges */}
                      <div className="absolute bottom-3 left-3 flex gap-2">
                        {project.tags?.slice(0, 2).map((tag) => (
                          <span key={tag} className="rounded-full bg-slate-900/80 px-2 py-1 text-xs text-cyan-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950">
                          {locale === "es" ? "Ver detalles" : "View details"}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-semibold text-slate-50">
                        {translated.title || project.title}
                      </h3>
                      <p className="mb-4 text-sm text-slate-400 line-clamp-2">
                        {translated.description || translated.subtitle || project.subtitle}
                      </p>

                      {/* Impact metrics */}
                      {projectMetrics && projectMetrics.length > 0 && (
                        <div className="mb-4 flex gap-6">
                          {projectMetrics.slice(0, 2).map((metric: { value: string; label: string }, mIndex: number) => (
                            <div key={mIndex}>
                              <div className="text-lg font-bold text-cyan-400">
                                {metric.value}
                              </div>
                              <div className="text-xs text-slate-500">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech stack */}
                      {allTechnologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {allTechnologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
                              {tech}
                            </span>
                          ))}
                          {allTechnologies.length > 4 && (
                            <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-500">
                              +{allTechnologies.length - 4}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View all link */}
        {limit && filteredProjects.length > limit && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {locale === "es" ? "Ver todos los proyectos" : "View all projects"}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

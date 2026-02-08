"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
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
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, amount: 0.1 })

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    return project.tags?.some(tag => tag.toLowerCase().includes(activeFilter))
  })

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects

  return (
    <section
      className="relative overflow-hidden py-20 theme-transition"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            {locale === "es" ? "Proyectos de Alto Impacto" : "High-Impact Projects"}
          </h2>
          <p className="mx-auto max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            {locale === "es"
              ? "Soluciones que han transformado operaciones y generado valor medible"
              : "Solutions that have transformed operations and generated measurable value"}
          </p>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.2 }}
            className="mb-8 flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className="rounded-full px-4 py-2 text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeFilter === cat.id ? 'var(--accent-primary)' : 'var(--surface-primary)',
                  color: activeFilter === cat.id ? 'var(--text-on-accent)' : 'var(--text-secondary)',
                  border: activeFilter === cat.id ? 'none' : '1px solid var(--border-default)',
                  boxShadow: activeFilter === cat.id ? 'var(--shadow-glow-sm)' : 'none',
                }}
              >
                {cat.label[locale]}
              </button>
            ))}
          </motion.div>
        )}

        {/* Projects grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--accent-subtle), var(--mesh-color-1), var(--mesh-color-2))' }} />
                      <div className="flex h-full items-center justify-center">
                        <span className="text-5xl">{project.highlightMetric?.icon || "\uD83D\uDCBC"}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 flex gap-2">
                        {project.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-2 py-1 text-xs"
                            style={{ backgroundColor: 'var(--surface-secondary)', color: 'var(--accent-primary)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                        style={{ backgroundColor: 'var(--bg-primary-alpha-60, rgba(0,0,0,0.6))' }}
                      >
                        <span
                          className="rounded-full px-4 py-2 text-sm font-medium"
                          style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--text-on-accent)' }}
                        >
                          {locale === "es" ? "Ver detalles" : "View details"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {translated.title || project.title}
                      </h3>
                      <p className="mb-4 text-sm line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                        {translated.description || translated.subtitle || project.subtitle}
                      </p>

                      {projectMetrics && projectMetrics.length > 0 && (
                        <div className="mb-4 flex gap-6">
                          {projectMetrics.slice(0, 2).map((metric: { value: string; label: string }, mIndex: number) => (
                            <div key={mIndex}>
                              <div className="text-lg font-bold" style={{ color: 'var(--accent-primary)' }}>{metric.value}</div>
                              <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {allTechnologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {allTechnologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded px-2 py-0.5 text-xs"
                              style={{ backgroundColor: 'var(--surface-secondary)', color: 'var(--text-secondary)' }}
                            >
                              {tech}
                            </span>
                          ))}
                          {allTechnologies.length > 4 && (
                            <span className="rounded px-2 py-0.5 text-xs" style={{ backgroundColor: 'var(--surface-secondary)', color: 'var(--text-tertiary)' }}>
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

        {limit && filteredProjects.length > limit && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 transition-colors"
              style={{ color: 'var(--accent-primary)' }}
            >
              {locale === "es" ? "Ver todos los proyectos" : "View all projects"}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

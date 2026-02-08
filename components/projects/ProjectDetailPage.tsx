"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, CheckCircle, TrendingUp, Users, Clock, Briefcase
} from "@phosphor-icons/react"
import type { Project } from "@/lib/data/projects"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

interface ProjectDetailPageProps {
  project: Project
  locale?: "es" | "en"
}

const copy = {
  es: { backToProjects: "Volver a proyectos", timeline: "Timeline", team: "Equipo", myRole: "Mi rol", techStack: "Stack T\u00e9cnico", keyResults: "Resultados Clave" },
  en: { backToProjects: "Back to projects", timeline: "Timeline", team: "Team", myRole: "My role", techStack: "Tech Stack", keyResults: "Key Results" }
}

export function ProjectDetailPage({ project, locale = "es" }: ProjectDetailPageProps) {
  const t = copy[locale]
  const prefersReducedMotion = useReducedMotion()
  const projectsLink = locale === "en" ? "/en/projects" : "/projects"

  return (
    <div className="min-h-screen theme-transition" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link 
              href={projectsLink}
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-primary)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              <ArrowLeft size={16} weight="bold" />
              {t.backToProjects}
            </Link>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mb-12"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 glass-strong rounded-full text-sm font-semibold mb-4"
              style={{ color: 'var(--warning)', border: '1px solid var(--warning)' }}
            >
              <span>{project.highlightMetric.icon}</span>
              <span>{project.highlightMetric.label}: {project.highlightMetric.value}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6"
                style={{ border: '1px solid var(--border-subtle)' }}
              >
                <div className="text-3xl font-bold text-gradient-accent mb-2">{metric.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{metric.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative aspect-video rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <Image src={project.thumbnail} alt={project.thumbnailAlt} fill className="object-cover" priority sizes="(max-width: 1280px) 100vw, 1280px" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent 40%, transparent)' }} />
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <motion.div initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-subtle)', border: '1px solid var(--accent-muted)' }}>
                  <TrendingUp size={24} weight="duotone" style={{ color: 'var(--accent-primary)' }} />
                </div>
                {project.challenge.title}
              </h2>
              <div className="space-y-4">
                {project.challenge.content.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--warning-subtle)', border: '1px solid var(--warning)' }}>
                  <CheckCircle size={24} weight="duotone" style={{ color: 'var(--warning)' }} />
                </div>
                {project.solution.title}
              </h2>
              <div className="space-y-4">
                {project.solution.content.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Impact */}
            <motion.div initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--success-subtle)', border: '1px solid var(--success)' }}>
                  <TrendingUp size={24} weight="duotone" style={{ color: 'var(--success)' }} />
                </div>
                {project.impact.title}
              </h2>
              <div className="space-y-4">
                {project.impact.content.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Results Grid */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
            {t.keyResults}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {project.results.map((result, index) => (
              <motion.div key={index} initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6" style={{ border: '1px solid var(--border-subtle)' }}>
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>{result.metric}</div>
                <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
            {t.techStack}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {project.techStack.map((stack, index) => (
              <motion.div key={index} initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6" style={{ border: '1px solid var(--border-subtle)' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" style={{ color: 'var(--warning)' }} className="flex-shrink-0 mt-0.5" />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Metadata */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.div initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card rounded-xl p-6" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-3 mb-3">
                <Clock size={24} weight="duotone" style={{ color: 'var(--accent-primary)' }} />
                <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>{t.timeline}</h3>
              </div>
              <p style={{ color: 'var(--text-primary)' }}>{project.timeline}</p>
            </motion.div>
            <motion.div initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-3 mb-3">
                <Users size={24} weight="duotone" style={{ color: 'var(--warning)' }} />
                <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>{t.team}</h3>
              </div>
              <p style={{ color: 'var(--text-primary)' }}>{project.team}</p>
            </motion.div>
            <motion.div initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6" style={{ border: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={24} weight="duotone" style={{ color: 'var(--success)' }} />
                <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>{t.myRole}</h3>
              </div>
              <p style={{ color: 'var(--text-primary)' }}>{project.role}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

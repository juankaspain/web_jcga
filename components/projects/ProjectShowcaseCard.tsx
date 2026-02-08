"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

interface ProjectMetric {
  value: string
  label: string
}

interface ProjectShowcaseCardProps {
  slug: string
  title: string
  problem: string
  thumbnail: string
  thumbnailAlt: string
  highlightMetric: { icon: string; label: string; value: string }
  tags: string[]
  metrics: [ProjectMetric, ProjectMetric, ProjectMetric]
  locale?: "es" | "en"
}

const copy = {
  es: { readCase: "Leer caso completo" },
  en: { readCase: "Read full case study" }
}

export function ProjectShowcaseCard({
  slug, title, problem, thumbnail, thumbnailAlt,
  highlightMetric, tags, metrics, locale = "es"
}: ProjectShowcaseCardProps) {
  const t = copy[locale]
  const prefersReducedMotion = useReducedMotion()
  const projectLink = locale === "en" ? `/en/projects/${slug}` : `/projects/${slug}`

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl hover-lift transition-all duration-300 theme-transition"
      style={{
        backgroundColor: 'var(--surface-primary)',
        border: '1px solid var(--border-subtle)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
    >
      {/* Thumbnail with overlay */}
      <Link href={projectLink} className="block relative h-64 overflow-hidden">
        <Image 
          src={thumbnail} alt={thumbnailAlt} fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-primary), var(--bg-primary-alpha-60, rgba(0,0,0,0.6)), transparent)' }} />
        
        {/* Highlight metric badge */}
        <div className="absolute bottom-4 left-4">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 glass-strong rounded-full text-sm font-semibold"
            style={{ color: 'var(--warning)', border: '1px solid var(--warning)' }}
          >
            <span>{highlightMetric.icon}</span>
            <span>{highlightMetric.label}: {highlightMetric.value}</span>
          </span>
        </div>
      </Link>
      
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 4).map((tag) => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 glass rounded"
              style={{ color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' }}
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-xs px-2 py-1 glass rounded" style={{ color: 'var(--text-tertiary)', border: '1px solid var(--border-subtle)' }}>
              +{tags.length - 4}
            </span>
          )}
        </div>
        
        {/* Title */}
        <Link href={projectLink}>
          <h3 className="text-2xl font-bold mb-2 transition-all duration-300 cursor-pointer" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
        </Link>
        
        {/* Problem statement */}
        <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {problem}
        </p>
        
        {/* Mini-metrics grid */}
        <div className="grid grid-cols-3 gap-4 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold" style={{ color: 'var(--accent-primary)' }}>{metric.value}</div>
              <div className="text-xs line-clamp-1" style={{ color: 'var(--text-tertiary)' }}>{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <Link 
          href={projectLink}
          className="mt-6 inline-flex items-center gap-2 font-semibold transition-colors duration-300"
          style={{ color: 'var(--accent-primary)' }}
        >
          <span className="group-hover:underline">{t.readCase}</span>
          <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
      
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, var(--accent-subtle), transparent 70%)' }}
      />
    </motion.div>
  )
}

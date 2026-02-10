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
  priority?: boolean
}

const copy = {
  es: { readCase: "Leer caso completo" },
  en: { readCase: "Read full case study" },
}

export function ProjectShowcaseCard({
  slug,
  title,
  problem,
  thumbnail,
  thumbnailAlt,
  highlightMetric,
  tags,
  metrics,
  locale = "es",
  priority,
}: ProjectShowcaseCardProps) {
  const t = copy[locale]
  const prefersReducedMotion = useReducedMotion()
  const projectLink = locale === "en" ? `/en/projects/${slug}` : `/projects/${slug}`

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl card-interactive theme-transition"
    >
      <Link
        href={projectLink}
        className="block relative h-64 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          // @ts-expect-error CSS custom properties
          "--tw-ring-color": "var(--focus-ring)",
          "--tw-ring-offset-color": "var(--focus-ring-offset)",
        }}
        aria-label={`${title} — ${t.readCase}`}
      >
        <Image
          src={thumbnail}
          alt={thumbnailAlt}
          fill
          priority={priority}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[color-mix(in_srgb,var(--bg-primary)_55%,transparent)] to-transparent" />

        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 glass-strong rounded-full text-sm font-semibold text-[var(--warning)] border border-[var(--warning)]">
            <span>{highlightMetric.icon}</span>
            <span>
              {highlightMetric.label}: {highlightMetric.value}
            </span>
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 glass rounded text-[var(--text-secondary)] border border-[var(--border-subtle)]"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-xs px-2 py-1 glass rounded text-[var(--text-tertiary)] border border-[var(--border-subtle)]">
              +{tags.length - 4}
            </span>
          )}
        </div>

        <Link
          href={projectLink}
          className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg"
          style={{
            // @ts-expect-error CSS custom properties
            "--tw-ring-color": "var(--focus-ring)",
            "--tw-ring-offset-color": "var(--focus-ring-offset)",
          }}
        >
          <h3 className="text-2xl font-bold mb-2 transition-colors duration-200 cursor-pointer text-[var(--text-primary)] group-hover:text-[var(--accent-primary)]">
            {title}
          </h3>
        </Link>

        <p className="text-sm mb-4 line-clamp-2 leading-relaxed text-[var(--text-secondary)]">
          {problem}
        </p>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[var(--border-subtle)]">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-[var(--accent-primary)]">
                {metric.value}
              </div>
              <div className="text-xs line-clamp-1 text-[var(--text-tertiary)]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <Link
          href={projectLink}
          className="mt-6 inline-flex items-center gap-2 font-semibold transition-colors duration-200 text-[var(--accent-primary)] hover:text-[var(--accent-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg"
          style={{
            // @ts-expect-error CSS custom properties
            "--tw-ring-color": "var(--focus-ring)",
            "--tw-ring-offset-color": "var(--focus-ring-offset)",
          }}
        >
          <span className="group-hover:underline">{t.readCase}</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            <ArrowRight size={18} weight="bold" />
          </span>
        </Link>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--accent-subtle),transparent_70%)]" />
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "@phosphor-icons/react"
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
  highlightMetric: {
    icon: string
    label: string
    value: string
  }
  tags: string[]
  metrics: [ProjectMetric, ProjectMetric, ProjectMetric]
  locale?: "es" | "en"
}

const copy = {
  es: {
    readCase: "Leer caso completo"
  },
  en: {
    readCase: "Read full case study"
  }
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
  locale = "es"
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
      className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-electric-500/50 transition-all duration-300 hover-lift"
    >
      {/* Thumbnail with overlay */}
      <Link href={projectLink} className="block relative h-64 overflow-hidden">
        <Image 
          src={thumbnail}
          alt={thumbnailAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        {/* Highlight metric badge */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 glass-strong border border-gold-400/30 rounded-full text-gold-400 text-sm font-semibold">
            <span>{highlightMetric.icon}</span>
            <span>{highlightMetric.label}: {highlightMetric.value}</span>
          </span>
        </div>
      </Link>
      
      <div className="p-6">
        {/* Tags as subtle pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 4).map((tag) => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 glass text-slate-400 rounded border border-slate-800"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-xs px-2 py-1 glass text-slate-500 rounded border border-slate-800">
              +{tags.length - 4}
            </span>
          )}
        </div>
        
        {/* Title */}
        <Link href={projectLink}>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient-fintech transition-all duration-300 cursor-pointer">
            {title}
          </h3>
        </Link>
        
        {/* Problem statement - visible without click */}
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {problem}
        </p>
        
        {/* Mini-metrics grid */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-electric-400">
                {metric.value}
              </div>
              <div className="text-xs text-slate-500 line-clamp-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <Link 
          href={projectLink}
          className="mt-6 inline-flex items-center gap-2 text-electric-400 font-semibold group-hover:text-electric-300 transition-colors duration-300"
        >
          <span className="group-hover:underline">{t.readCase}</span>
          <ArrowRight 
            size={18} 
            weight="bold" 
            className="group-hover:translate-x-1 transition-transform duration-300" 
          />
        </Link>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.1), transparent 70%)'
        }}
      />
    </motion.div>
  )
}

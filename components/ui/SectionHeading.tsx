"use client"

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const desc = description || subtitle
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(node)
        }
      },
      { rootMargin: '-100px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: 'var(--accent-primary)' }}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </motion.h2>

      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {desc}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 h-1 w-12 rounded-full mx-auto"
        style={{
          background: 'var(--accent-gradient)',
          transformOrigin: align === 'center' ? 'center' : 'left',
        }}
      />
    </div>
  )
}

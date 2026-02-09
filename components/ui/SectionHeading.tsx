"use client"

import { motion } from 'framer-motion'
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

  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: 'var(--accent-primary)' }}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl font-bold md:text-4xl"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </motion.h2>

      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          {desc}
        </motion.p>
      )}
    </div>
  )
}

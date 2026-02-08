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
          viewport={{ once: true, margin: '-100px' }}
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
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </motion.h2>

      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            'mt-4 text-lg',
            align === 'center' && 'mx-auto max-w-2xl'
          )}
          style={{ color: 'var(--text-secondary)' }}
        >
          {desc}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          'mt-8 h-px',
          align === 'center' && 'mx-auto max-w-xs'
        )}
        style={{
          background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)',
          opacity: 0.4,
        }}
      />
    </div>
  )
}

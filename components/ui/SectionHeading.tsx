"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400"
        >
          {eyebrow}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            'mt-4 text-lg text-slate-400',
            align === 'center' && 'mx-auto max-w-2xl'
          )}
        >
          {description}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          'mt-8 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent',
          align === 'center' && 'mx-auto max-w-xs'
        )}
      />
    </div>
  )
}

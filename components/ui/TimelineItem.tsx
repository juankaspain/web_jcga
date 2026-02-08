'use client'

import { motion } from 'framer-motion'
import { Badge } from './Badge'
import { cn } from '@/lib/utils/cn'

interface TimelineItemProps {
  date: string
  company: string
  role: string
  description: string
  technologies?: string[]
  isActive?: boolean
  side?: 'left' | 'right'
  className?: string
}

export function TimelineItem({
  date,
  company,
  role,
  description,
  technologies = [],
  isActive = false,
  side = 'left',
  className,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('relative flex items-start gap-6', className)}
    >
      {/* Dot indicator */}
      <div className="relative flex-shrink-0 mt-2">
        <div
          className={cn(
            'w-3 h-3 rounded-full border-2 transition-all duration-300',
            isActive && 'animate-pulse'
          )}
          style={{
            backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--surface-secondary)',
            borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-default)',
            boxShadow: isActive ? '0 0 12px rgba(99, 102, 241, 0.4)' : 'none',
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <time
          className="text-xs font-medium tracking-wider uppercase"
          style={{ color: 'var(--accent-primary)' }}
        >
          {date}
        </time>
        <h3
          className="mt-1 text-lg font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          {role}
        </h3>
        <p
          className="text-sm font-medium"
          style={{ color: 'var(--text-secondary)' }}
        >
          {company}
        </p>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {description}
        </p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

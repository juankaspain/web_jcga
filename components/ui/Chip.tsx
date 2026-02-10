'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface ChipProps {
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md'
}

export function Chip({
  children,
  isActive = false,
  onClick,
  className,
  size = 'md',
}: ChipProps) {
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
  }

  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        'border transition-all duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        sizes[size],
        isActive
          ? 'bg-[var(--accent-primary)] text-[var(--text-on-accent)] border-[var(--accent-primary)] shadow-[var(--shadow-glow-sm)]'
          : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-default)] hover:text-[var(--text-primary)]',
        className
      )}
      style={{
        // @ts-expect-error CSS custom properties
        '--tw-ring-color': 'var(--focus-ring)',
        '--tw-ring-offset-color': 'var(--focus-ring-offset)',
      }}
      aria-pressed={isActive}
    >
      {children}
    </motion.button>
  )
}

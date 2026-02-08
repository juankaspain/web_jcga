'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

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

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        'border transition-all duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        sizes[size],
        className
      )}
      style={{
        backgroundColor: isActive
          ? 'var(--accent-primary)'
          : 'var(--surface-secondary)',
        color: isActive
          ? 'var(--text-on-accent)'
          : 'var(--text-secondary)',
        borderColor: isActive
          ? 'var(--accent-primary)'
          : 'var(--border-subtle)',
        boxShadow: isActive
          ? '0 0 12px rgba(99, 102, 241, 0.3)'
          : 'none',
      }}
      aria-pressed={isActive}
    >
      {children}
    </motion.button>
  )
}

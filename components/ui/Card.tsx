"use client"

import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

type CardVariant = 'default' | 'glass' | 'elevated' | 'interactive'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: CardVariant
  padding?: 'none' | 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  default: {
    backgroundColor: 'var(--surface-primary)',
    border: '1px solid var(--border-subtle)',
  },
  glass: {
    // Uses .glass-card class from globals.css
  },
  elevated: {
    backgroundColor: 'var(--surface-primary)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-xl)',
  },
  interactive: {
    backgroundColor: 'var(--surface-primary)',
    border: '1px solid var(--border-subtle)',
  },
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, style, ...props }, ref) => {
    const interactiveClass =
      variant === 'interactive'
        ? 'hover-lift cursor-pointer hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow-sm)]'
        : ''

    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-2xl border transition-all duration-300 theme-transition',
          variant === 'glass' && 'glass-card',
          interactiveClass,
          paddings[padding],
          className
        )}
        style={{
          ...variantStyles[variant],
          ...style,
        }}
        whileHover={variant === 'interactive' ? { scale: 1.02 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

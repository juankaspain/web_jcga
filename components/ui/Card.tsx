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

const variants: Record<CardVariant, string> = {
  default: 'bg-slate-900/60 border border-slate-800',
  glass: 'glass-card',
  elevated: 'bg-slate-900 border border-slate-800 shadow-xl',
  interactive: 'bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 cursor-pointer',
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-2xl transition-all duration-300',
          variants[variant],
          paddings[padding],
          variant === 'interactive' && 'hover-lift',
          className
        )}
        whileHover={variant === 'interactive' ? { scale: 1.02 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

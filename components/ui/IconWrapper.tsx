'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

type IconSize = 'sm' | 'md' | 'lg'

interface IconWrapperProps {
  children: React.ReactNode
  size?: IconSize
  className?: string
  hoverEffect?: boolean
  label?: string
}

const sizes: Record<IconSize, string> = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
}

export function IconWrapper({
  children,
  size = 'md',
  className,
  hoverEffect = true,
  label,
}: IconWrapperProps) {
  const Comp = hoverEffect ? motion.div : 'div'

  const motionProps = hoverEffect
    ? {
        whileHover: { scale: 1.1, rotate: 5 },
        whileTap: { scale: 0.95 },
        transition: { type: 'spring', stiffness: 400, damping: 17 },
      }
    : {}

  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center rounded-xl',
        'transition-colors duration-200',
        sizes[size],
        className
      )}
      style={{
        backgroundColor: 'var(--surface-secondary)',
        color: 'var(--text-secondary)',
      }}
      aria-label={label}
      {...motionProps}
    >
      {children}
    </Comp>
  )
}

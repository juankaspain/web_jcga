"use client"

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const prefersReducedMotion = useReducedMotion()

  const handleMouse = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return

    const { clientX, clientY } = e
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const x = (clientX - rect.left - rect.width / 2) * 0.3
    const y = (clientY - rect.top - rect.height / 2) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-full gap-1.5',
    md: 'px-6 py-3 text-sm rounded-full gap-2',
    lg: 'px-8 py-4 text-base rounded-full gap-2',
  }

  const variantClass =
    variant === 'primary'
      ? 'bg-[var(--accent-gradient)] text-[var(--text-on-accent)] shadow-[var(--shadow-glow-sm)] hover:shadow-[var(--shadow-glow)]'
      : variant === 'secondary'
        ? 'bg-[var(--surface-primary)] text-[var(--text-primary)] border-2 border-[var(--border-default)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
        : 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--surface-hover)]'

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={cn(
        'group relative inline-flex items-center justify-center font-semibold transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'border border-transparent',
        variantClass,
        sizeClasses[size],
        className
      )}
      style={{
        // @ts-expect-error CSS custom properties
        '--tw-ring-color': 'var(--accent-primary)',
        '--tw-ring-offset-color': 'var(--bg-primary)',
      }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          }}
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )
    }
    return <Link href={href}>{content}</Link>
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  )
}

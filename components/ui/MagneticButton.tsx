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
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.3
    const y = (clientY - top - height / 2) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const variantStyles = {
    primary: {
      background: 'var(--accent-gradient)',
      color: 'var(--text-on-accent)',
      boxShadow: 'var(--shadow-glow-sm)',
    },
    secondary: {
      background: 'var(--surface-primary)',
      color: 'var(--text-primary)',
      border: '2px solid var(--border-default)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
    },
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-full gap-1.5',
    md: 'px-6 py-3 text-sm rounded-full gap-2',
    lg: 'px-8 py-4 text-base rounded-full gap-2',
  }

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
        sizeClasses[size],
        className
      )}
      style={{
        ...variantStyles[variant],
        // @ts-expect-error CSS custom properties
        '--tw-ring-color': 'var(--accent-primary)',
        '--tw-ring-offset-color': 'var(--bg-primary)',
      }}
      onMouseEnter={(e) => {
        if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--accent-primary)'
          e.currentTarget.style.color = 'var(--accent-primary)'
        } else if (variant === 'ghost') {
          e.currentTarget.style.color = 'var(--accent-primary)'
          e.currentTarget.style.backgroundColor = 'var(--surface-hover)'
        } else if (variant === 'primary') {
          e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
        }
      }}
      onMouseLeave2={(e) => {
        // Reset is handled by handleMouseLeave for position
        // Style resets handled by React re-render
      }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Premium shine effect */}
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
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

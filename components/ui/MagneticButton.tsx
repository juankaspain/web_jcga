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

  const baseStyles = cn(
    'group relative inline-flex items-center justify-center font-semibold transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
    {
      // Variants
      'bg-gradient-to-r from-electric-500 to-electric-600 text-white hover:from-electric-400 hover:to-electric-500 shadow-lg': variant === 'primary',
      'border-2 border-slate-700 bg-slate-900/50 text-slate-50 backdrop-blur-sm hover:border-electric-500/50 hover:bg-slate-800/80 hover:text-electric-400': variant === 'secondary',
      'text-slate-300 hover:text-electric-400 hover:bg-slate-800/50': variant === 'ghost',
      // Sizes
      'px-4 py-2 text-sm rounded-full gap-1.5': size === 'sm',
      'px-6 py-3 text-sm rounded-full gap-2': size === 'md',
      'px-8 py-4 text-base rounded-full gap-2': size === 'lg',
    },
    className
  )

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={baseStyles}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Premium shine effect with gold accent */}
      {variant === 'primary' && (
        <>
          <motion.span
            className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          />
          {/* Gold edge glow on hover */}
          <motion.span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, transparent 50%, rgba(14, 165, 233, 0.1) 100%)'
            }}
          />
        </>
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

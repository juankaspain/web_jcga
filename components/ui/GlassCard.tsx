"use client"

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || prefersReducedMotion) return
    const rect = ref.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={cn(
        'relative overflow-hidden rounded-2xl backdrop-blur-xl theme-transition',
        'bg-[var(--surface-primary)] border border-[var(--border-subtle)]',
        hover && 'transition-all duration-300',
        className
      )}
      whileHover={hover && !prefersReducedMotion ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 rounded-2xl p-px">
        <div
          className={cn(
            'absolute inset-0 rounded-2xl transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            background: 'linear-gradient(135deg, var(--accent-subtle), transparent 50%)',
          }}
        />
      </div>

      {hover && !prefersReducedMotion && (
        <div
          className={cn(
            'pointer-events-none absolute h-[300px] w-[300px] rounded-full transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            background: 'radial-gradient(circle, var(--accent-subtle), transparent 70%)',
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

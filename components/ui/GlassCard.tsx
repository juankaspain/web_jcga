"use client"

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'cyan' | 'purple' | 'blue'
  hover?: boolean
}

export function GlassCard({
  children,
  className,
  glowColor = 'cyan',
  hover = true,
}: GlassCardProps) {
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

  const glowColors = {
    cyan: 'rgba(6, 182, 212, 0.15)',
    purple: 'rgba(139, 92, 246, 0.15)',
    blue: 'rgba(59, 130, 246, 0.15)',
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-slate-900/60 backdrop-blur-xl',
        'border border-slate-700/50',
        hover && 'transition-all duration-300 hover:border-slate-600/80',
        className
      )}
      whileHover={hover && !prefersReducedMotion ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl p-px">
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `linear-gradient(135deg, ${glowColors[glowColor]}, transparent 50%)`,
          }}
        />
      </div>

      {/* Mouse follow glow */}
      {hover && !prefersReducedMotion && (
        <div
          className="pointer-events-none absolute h-[300px] w-[300px] rounded-full transition-opacity duration-300"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            background: `radial-gradient(circle, ${glowColors[glowColor]}, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

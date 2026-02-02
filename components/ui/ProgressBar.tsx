"use client"

import { motion, useSpring, useTransform } from 'framer-motion'
import { useScrollProgress } from '@/lib/hooks/useScrollProgress'
import { cn } from '@/lib/utils/cn'

interface ProgressBarProps {
  className?: string
  showOnScroll?: boolean
}

/**
 * Scroll progress indicator
 * Shows reading progress as user scrolls
 */
export function ProgressBar({ className, showOnScroll = true }: ProgressBarProps) {
  const progress = useScrollProgress()
  const scaleX = useSpring(progress, { stiffness: 100, damping: 30 })
  const opacity = useTransform(scaleX, [0, 0.02], [0, 1])

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 origin-left z-50',
        className
      )}
      style={{ 
        scaleX,
        opacity: showOnScroll ? opacity : 1
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progreso de lectura"
    />
  )
}

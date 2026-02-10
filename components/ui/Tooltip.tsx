'use client'

import { useId, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface TooltipProps {
  children: React.ReactNode
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

const positionStyles: Record<string, { tooltip: string; initial: { x?: number; y?: number } }> = {
  top: {
    tooltip: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    initial: { y: 4 },
  },
  bottom: {
    tooltip: 'top-full left-1/2 -translate-x-1/2 mt-2',
    initial: { y: -4 },
  },
  left: {
    tooltip: 'right-full top-1/2 -translate-y-1/2 mr-2',
    initial: { x: 4 },
  },
  right: {
    tooltip: 'left-full top-1/2 -translate-y-1/2 ml-2',
    initial: { x: -4 },
  },
}

export function Tooltip({ children, content, position = 'top', className }: TooltipProps) {
  const tooltipId = useId()
  const [isVisible, setIsVisible] = useState(false)
  const config = positionStyles[position]

  return (
    <div
      className="relative inline-flex"
      onPointerEnter={() => setIsVisible(true)}
      onPointerLeave={() => setIsVisible(false)}
      onFocusCapture={() => setIsVisible(true)}
      onBlurCapture={() => setIsVisible(false)}
      aria-describedby={isVisible ? tooltipId : undefined}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            initial={{ opacity: 0, scale: 0.95, ...config.initial }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, ...config.initial }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={cn(
              'absolute z-50 pointer-events-none',
              'px-3 py-1.5 rounded-md text-xs font-medium',
              'whitespace-nowrap shadow-lg',
              'bg-[var(--surface-tertiary)] text-[var(--text-primary)] border border-[var(--border-subtle)]',
              config.tooltip,
              className
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

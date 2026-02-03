"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface RevealTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  once?: boolean
}

export function RevealText({
  children,
  className,
  delay = 0,
  duration = 0.5,
  as: Component = 'span',
  once = true,
}: RevealTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })

  const words = children.split(' ')

  return (
    <Component ref={ref} className={cn('inline', className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration,
              delay: delay + i * 0.05,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Component>
  )
}

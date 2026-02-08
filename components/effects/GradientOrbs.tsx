"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

interface GradientOrbsProps {
  className?: string
  variant?: 'hero' | 'section' | 'subtle'
}

export function GradientOrbs({ className = '', variant = 'hero' }: GradientOrbsProps) {
  const prefersReducedMotion = useReducedMotion()

  const configs = {
    hero: {
      orbs: [
        { size: 600, x: '-10%', y: '-20%', delay: 0, duration: 8 },
        { size: 500, x: '60%', y: '50%', delay: 4, duration: 10 },
        { size: 400, x: '30%', y: '70%', delay: 2, duration: 12 },
      ],
      opacity: 0.7,
    },
    section: {
      orbs: [
        { size: 400, x: '-5%', y: '10%', delay: 0, duration: 10 },
        { size: 350, x: '70%', y: '60%', delay: 3, duration: 12 },
      ],
      opacity: 0.5,
    },
    subtle: {
      orbs: [
        { size: 300, x: '50%', y: '50%', delay: 0, duration: 14 },
      ],
      opacity: 0.3,
    },
  }

  const config = configs[variant]

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {config.orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, var(--mesh-color-${(index % 3) + 1}) 0%, transparent 70%)`,
            filter: 'blur(80px)',
            opacity: config.opacity,
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                  scale: [1, 1.05, 1],
                }
          }
          transition={
            prefersReducedMotion
              ? {}
              : {
                  duration: orb.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: orb.delay,
                }
          }
        />
      ))}
    </div>
  )
}

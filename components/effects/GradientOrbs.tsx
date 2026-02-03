"use client"

import { motion } from 'framer-motion'

export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary cyan orb */}
      <motion.div
        className="absolute -top-[40%] -left-[20%] h-[80vh] w-[80vh] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary purple orb */}
      <motion.div
        className="absolute -bottom-[30%] -right-[20%] h-[70vh] w-[70vh] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Accent blue orb */}
      <motion.div
        className="absolute top-[20%] right-[10%] h-[50vh] w-[50vh] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 80, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

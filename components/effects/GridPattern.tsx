"use client"

import { motion } from 'framer-motion'

export function GridPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Radial fade */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgb(2, 6, 23) 70%)',
        }}
      />

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

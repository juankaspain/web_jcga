"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on desktop (no touch)
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] rounded-full mix-blend-soft-light"
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)',
        opacity: 0.6,
      }}
    />
  )
}

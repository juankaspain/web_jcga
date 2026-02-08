"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

/**
 * CustomCursor + ambient MouseGlow
 * - Small circular cursor that follows mouse with lerp smoothing
 * - Scales up on hover over interactive elements
 * - Uses mix-blend-mode: difference for contrast
 * - Ambient glow effect follows with spring physics
 * - Disabled on touch devices & when prefers-reduced-motion
 */
export function MouseGlow() {
  const prefersReducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  
  // Cursor position with lerp
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const cursorX = useRef(0)
  const cursorY = useRef(0)
  
  // Glow position with spring physics
  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const springX = useSpring(glowX, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(glowY, { stiffness: 150, damping: 15, mass: 0.1 })

  // Lerp animation loop for the cursor dot
  const animateCursor = useCallback(() => {
    const lerp = 0.15
    cursorX.current += (mouseX.current - cursorX.current) * lerp
    cursorY.current += (mouseY.current - cursorY.current) * lerp
    
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorX.current}px, ${cursorY.current}px, 0)`
    }
    
    rafRef.current = requestAnimationFrame(animateCursor)
  }, [])

  useEffect(() => {
    // Only show on desktop (no touch) and respect reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      glowX.set(e.clientX - 200)
      glowY.set(e.clientY - 200)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover], .hover-lift, .card-interactive, .hover-scale'
      )
      setIsHovering(!!interactive)
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver, { passive: true })

    // Start lerp animation loop
    rafRef.current = requestAnimationFrame(animateCursor)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible, prefersReducedMotion, animateCursor, glowX, glowY])

  // Don't render on touch devices or with reduced motion
  if (prefersReducedMotion) return null
  if (!isVisible) return null

  return (
    <>
      {/* Custom cursor dot — blend-mode difference */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
        style={{
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          marginLeft: isHovering ? -24 : -6,
          marginTop: isHovering ? -24 : -6,
          backgroundColor: '#FFFFFF',
          transition: 'width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), margin 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'transform',
        }}
      />

      {/* Ambient glow — spring-based following */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full mix-blend-soft-light"
        style={{
          x: springX,
          y: springY,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)',
          opacity: 0.6,
        }}
      />
    </>
  )
}

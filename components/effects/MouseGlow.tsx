"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

/**
 * Ambient MouseGlow (disabled by default).
 *
 * Nota: Este efecto puede percibirse como “círculo negro / donut” por el mix-blend-mode.
 * Lo dejamos desactivado por defecto para priorizar UX limpia y evitar distracciones.
 */
export function MouseGlow() {
  const prefersReducedMotion = useReducedMotion()
  const [enabled] = useState(false)

  // Disabled by default
  if (!enabled || prefersReducedMotion) return null

  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const cursorX = useRef(0)
  const cursorY = useRef(0)

  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const springX = useSpring(glowX, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(glowY, { stiffness: 150, damping: 15, mass: 0.1 })

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
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      glowX.set(e.clientX - 200)
      glowY.set(e.clientY - 200)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

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

    rafRef.current = requestAnimationFrame(animateCursor)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible, animateCursor, glowX, glowY])

  if (!isVisible) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
        style={{
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          marginLeft: isHovering ? -24 : -6,
          marginTop: isHovering ? -24 : -6,
          backgroundColor: '#FFFFFF',
          transition:
            'width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), margin 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'transform',
        }}
      />

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

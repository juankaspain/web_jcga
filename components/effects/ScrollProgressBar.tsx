"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

/**
 * Barra de progreso de scroll en la parte superior de la página
 * Muestra el progreso de lectura con gradiente del acento
 * Respeta prefers-reduced-motion
 * 
 * @example
 * <ScrollProgressBar />
 */
export function ScrollProgressBar() {
  const prefersReducedMotion = useReducedMotion()
  
  // Progreso de scroll de 0 a 1
  const { scrollYProgress } = useScroll()
  
  // Animación suave con spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Si el usuario prefiere movimiento reducido, no animar
  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{
        scaleX,
        background: 'var(--accent-gradient)',
        boxShadow: '0 0 10px var(--accent-glow)',
      }}
    />
  )
}

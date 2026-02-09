"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

/**
 * Cursor personalizado premium para desktop
 * - Sigue el mouse con lerp (suavizado)
 * - Escala aumenta al hover sobre elementos interactivos
 * - Blend mode difference o cambio de color según fondo
 * - Solo se muestra en desktop (hidden en mobile/tablet)
 * - Respeta prefers-reduced-motion
 * 
 * @example
 * <CustomCursor />
 */
export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion()
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const cursorSize = isPointer ? 48 : 32

  // Motion values para posición suave
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring animation para suavizado
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const requestRef = useRef<number | undefined>(undefined)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    // No mostrar en mobile/tablet o si prefiere movimiento reducido
    if (typeof window === "undefined" || prefersReducedMotion) return
    
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
    if (isTouchDevice) return

    // Detectar elementos interactivos
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

      // Detectar si estamos sobre un elemento interactivo
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isInteractive)
    }

    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    // Actualizar posición con requestAnimationFrame para performance
    const updateCursorPosition = () => {
      cursorX.set(mouseX.current)
      cursorY.set(mouseY.current)
      requestRef.current = requestAnimationFrame(updateCursorPosition)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    requestRef.current = requestAnimationFrame(updateCursorPosition)

    // Ocultar cursor nativo
    document.body.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      document.body.style.cursor = "auto"
    }
  }, [cursorX, cursorY, prefersReducedMotion])

  // No renderizar en mobile o si prefiere movimiento reducido
  if (typeof window === "undefined" || prefersReducedMotion) return null

  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  if (isTouchDevice) return null

  return (
    <>
      {/* Cursor principal */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: cursorSize,
          height: cursorSize,
          marginLeft: -cursorSize / 2,
          marginTop: -cursorSize / 2,
        }}
        animate={{
          opacity: isHidden ? 0 : 1,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.15 },
        }}
      >
        <div
          className="w-full h-full rounded-full border-2"
          style={{
            borderColor: "white",
            backgroundColor: isPointer ? "rgba(255, 255, 255, 0.1)" : "transparent",
          }}
        />
      </motion.div>

      {/* Dot central */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
        }}
        animate={{
          opacity: isHidden ? 0 : isPointer ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            backgroundColor: "white",
          }}
        />
      </motion.div>

    </>
  )
}

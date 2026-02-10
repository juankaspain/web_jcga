"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

/**
 * Cursor personalizado premium para desktop.
 * Nota: Para evitar hydration mismatch, no renderiza nada hasta estar montado en cliente.
 */
export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || prefersReducedMotion) return

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
    if (isTouchDevice) return

    // Desactivado por defecto (se puede reactivar más adelante por configuración).
    return
  }, [mounted, prefersReducedMotion])

  // Evita mismatch SSR/CSR.
  if (!mounted) return null

  // Mantener el componente presente pero sin efectos visuales.
  if (!enabled || prefersReducedMotion) return null

  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const cursorSize = isPointer ? 48 : 32

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const requestRef = useRef<number | undefined>(undefined)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

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

    const updateCursorPosition = () => {
      cursorX.set(mouseX.current)
      cursorY.set(mouseY.current)
      requestRef.current = requestAnimationFrame(updateCursorPosition)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    requestRef.current = requestAnimationFrame(updateCursorPosition)

    document.body.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
      document.body.style.cursor = "auto"
    }
  }, [cursorX, cursorY])

  return (
    <>
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
        <div className="w-full h-full rounded-full" style={{ backgroundColor: "white" }} />
      </motion.div>
    </>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

interface TypingTextProps {
  text: string
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  loop?: boolean
  showCursor?: boolean
  onComplete?: () => void
}

/**
 * Componente de texto con efecto de escritura (typing effect)
 * Con cursor parpadeante y opciones de configuración
 * Respeta prefers-reduced-motion
 * 
 * @example
 * <TypingText 
 *   text="Hola, soy Juan Carlos"
 *   typingSpeed={80}
 *   showCursor={true}
 * />
 */
export function TypingText({
  text,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = false,
  showCursor = true,
  onComplete,
}: TypingTextProps) {
  const prefersReducedMotion = useReducedMotion()
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, mostrar texto completo inmediatamente
    if (prefersReducedMotion) {
      setDisplayedText(text)
      setIsComplete(true)
      onComplete?.()
      return
    }

    let timeout: NodeJS.Timeout

    if (!isDeleting && displayedText.length < text.length) {
      // Escribiendo
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, typingSpeed)
    } else if (!isDeleting && displayedText.length === text.length) {
      // Completado
      if (!isComplete) {
        setIsComplete(true)
        onComplete?.()
      }

      if (loop) {
        // Pausar antes de borrar
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else if (isDeleting && displayedText.length > 0) {
      // Borrando
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1))
      }, deletingSpeed)
    } else if (isDeleting && displayedText.length === 0) {
      // Reiniciar
      setIsDeleting(false)
      setIsComplete(false)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration, loop, prefersReducedMotion, isComplete, onComplete])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <AnimatePresence>
          <motion.span
            className="inline-block w-0.5 h-[1em] ml-1 align-middle"
            style={{ backgroundColor: "var(--accent-primary)" }}
            animate={{
              opacity: [1, 1, 0, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </AnimatePresence>
      )}
    </span>
  )
}

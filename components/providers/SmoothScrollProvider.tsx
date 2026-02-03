"use client"

import { useEffect, useRef, createContext, useContext, ReactNode } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface LenisContextType {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export const useLenis = () => useContext(LenisContext)

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Don't enable smooth scroll if user prefers reduced motion
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [prefersReducedMotion])

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  )
}

"use client"

import { useEffect, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    function destroyLenis() {
      if (rafIdRef.current != null) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      document.documentElement.classList.remove('lenis')
      document.body.classList.remove('lenis')
    }

    function initLenis() {
      // Avoid double init
      if (lenisRef.current) return

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        // If the tab is hidden, don't run work.
        if (document.visibilityState === 'hidden') return
        lenis.raf(time)
        rafIdRef.current = requestAnimationFrame(raf)
      }

      rafIdRef.current = requestAnimationFrame(raf)
    }

    function onVisibilityChange() {
      // Pause RAF loop when tab is not visible (battery + main-thread savings)
      if (document.visibilityState === 'hidden') {
        if (rafIdRef.current != null) {
          cancelAnimationFrame(rafIdRef.current)
          rafIdRef.current = null
        }
        return
      }

      // Resume when visible
      if (rafIdRef.current == null && lenisRef.current) {
        rafIdRef.current = requestAnimationFrame((t) => {
          // Kick RAF loop back in
          if (!lenisRef.current) return
          lenisRef.current.raf(t)
          rafIdRef.current = requestAnimationFrame(function loop(time) {
            if (!lenisRef.current) return
            if (document.visibilityState === 'hidden') return
            lenisRef.current.raf(time)
            rafIdRef.current = requestAnimationFrame(loop)
          })
        })
      }
    }

    function onMotionPreferenceChange() {
      if (media.matches) {
        destroyLenis()
      } else {
        initLenis()
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)

    // Init depending on current preference
    if (!media.matches) initLenis()

    // React to runtime changes
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', onMotionPreferenceChange)
    } else {
      // Safari fallback
      // @ts-expect-error - legacy API
      media.addListener(onMotionPreferenceChange)
    }

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)

      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', onMotionPreferenceChange)
      } else {
        // @ts-expect-error - legacy API
        media.removeListener(onMotionPreferenceChange)
      }

      destroyLenis()
    }
  }, [])

  return <>{children}</>
}

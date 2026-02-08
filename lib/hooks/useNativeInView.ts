"use client"

import { useRef, useState, useEffect, type RefObject } from 'react'

interface UseNativeInViewOptions {
  once?: boolean
  amount?: number
  margin?: string
  fallbackDelay?: number
}

/**
 * Drop-in replacement for framer-motion's useInView hook.
 * Uses native IntersectionObserver to avoid the bug in
 * Next.js 15 + React 19 + Framer Motion 11 where useInView
 * never triggers (elements stuck at opacity:0).
 *
 * @param ref - React ref to the observed element
 * @param options - Configuration options
 * @returns boolean indicating if element is in viewport
 */
export function useNativeInView(
  ref: RefObject<Element | null>,
  options: UseNativeInViewOptions = {}
): boolean {
  const {
    once = true,
    amount = 0,
    margin = '0px',
    fallbackDelay = 2500,
  } = options

  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      // No element yet - set a fallback timer
      const fallback = setTimeout(() => setIsInView(true), fallbackDelay)
      return () => clearTimeout(fallback)
    }

    // If already triggered and once mode, skip
    if (once && isInView) return

    // Fallback: force visible after delay in case IO doesn't fire
    const fallbackTimer = setTimeout(() => setIsInView(true), fallbackDelay)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          clearTimeout(fallbackTimer)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold: amount,
        rootMargin: margin,
      }
    )

    observer.observe(element)

    return () => {
      clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, once, amount, margin])

  return isInView
}

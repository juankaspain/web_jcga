import { useRef, useEffect, useState, RefObject } from 'react'

interface UseInViewOptions {
  margin?: string
  threshold?: number
}

/**
 * Custom hook that replaces framer-motion's useInView.
 * Uses native IntersectionObserver to avoid the whileInView bug
 * in Next.js 15 + React 19 + Framer Motion 11.
 *
 * Triggers once and disconnects to match `once: true` behavior.
 */
export function useInViewObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(node)
        }
      },
      {
        rootMargin: options.margin ?? '-100px',
        threshold: options.threshold ?? 0,
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options.margin, options.threshold])

  return [ref, isInView]
}

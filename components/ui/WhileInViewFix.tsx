"use client"

import { useEffect } from "react"

/**
 * Temporary fix for framer-motion whileInView not triggering
 * with Next.js 15 + Turbopack + React 19.
 *
 * This component uses IntersectionObserver to detect elements
 * stuck at opacity:0 due to whileInView not firing, and
 * forces them visible by dispatching a scroll event.
 *
 * TODO: Remove once framer-motion fixes the underlying bug.
 */
export function WhileInViewFix() {
  useEffect(() => {
    // Force a synthetic scroll event after hydration to trigger
    // IntersectionObserver callbacks that framer-motion relies on
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'))
      // Also try triggering resize which can help with viewport calculations
      window.dispatchEvent(new Event('resize'))
    }, 100)

    // Secondary fix: observe DOM for elements stuck at opacity 0
    // and force them visible after a delay
    const fixTimer = setTimeout(() => {
      const stuckElements = document.querySelectorAll('[style*="opacity: 0"]')
      stuckElements.forEach((el) => {
        const htmlEl = el as HTMLElement
        // Only fix elements that are in the viewport
        const rect = htmlEl.getBoundingClientRect()
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0
        if (inViewport) {
          htmlEl.style.opacity = '1'
          htmlEl.style.transform = 'none'
          htmlEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
        }
      })
    }, 500)

    // Continuous observer for elements that enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const style = el.getAttribute('style') || ''
            if (style.includes('opacity: 0') || style.includes('opacity:0')) {
              setTimeout(() => {
                // Re-check after a frame to allow framer-motion to handle it
                const currentStyle = el.getAttribute('style') || ''
                if (currentStyle.includes('opacity: 0') || currentStyle.includes('opacity:0')) {
                  el.style.opacity = '1'
                  el.style.transform = 'none'
                  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
                }
              }, 200)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all motion elements (framer-motion adds style attributes)
    const observeMotionElements = () => {
      document.querySelectorAll('[style]').forEach((el) => {
        const style = el.getAttribute('style') || ''
        if (style.includes('opacity') || style.includes('transform')) {
          observer.observe(el)
        }
      })
    }

    // Initial observation
    setTimeout(observeMotionElements, 200)

    // Re-observe on scroll for lazy-loaded content
    const scrollHandler = () => {
      observeMotionElements()
    }
    window.addEventListener('scroll', scrollHandler, { passive: true })

    return () => {
      clearTimeout(timer)
      clearTimeout(fixTimer)
      observer.disconnect()
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return null
}

"use client"

import { useEffect } from "react"

/**
 * Aggressive fix for framer-motion whileInView not triggering
 * with Next.js 15 + Turbopack + React 19 + Framer Motion 11 + Lenis.
 *
 * Strategy:
 * 1. Force all elements with opacity:0 + transform to become visible
 *    when they enter the viewport
 * 2. Periodic scanning to catch dynamically added elements
 * 3. Immediate fix on mount and after short delay
 */
export function WhileInViewFix() {
  useEffect(() => {
    function forceVisible(el: HTMLElement) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    }

    function isInViewport(el: HTMLElement): boolean {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight + 100 && r.bottom > -100
    }

    function scanAndFix() {
      // Find all elements with inline style containing opacity
      const els = document.querySelectorAll('[style]')
      els.forEach((el) => {
        const htmlEl = el as HTMLElement
        const s = htmlEl.getAttribute('style') || ''
        // Check for opacity: 0 or opacity:0 (with or without space)
        if (
          (s.includes('opacity: 0') || s.includes('opacity:0')) &&
          isInViewport(htmlEl)
        ) {
          forceVisible(htmlEl)
        }
      })
    }

    // Kick IO callbacks after hydration
    const t1 = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'))
      window.dispatchEvent(new Event('resize'))
      scanAndFix()
    }, 50)

    // Second pass after React finishes rendering
    const t2 = setTimeout(() => {
      scanAndFix()
    }, 300)

    // Third pass - safety net
    const t3 = setTimeout(() => {
      scanAndFix()
    }, 800)

    // Fourth pass - catch anything still stuck
    const t4 = setTimeout(() => {
      scanAndFix()
    }, 1500)

    // Re-scan on scroll (passive)
    const onScroll = () => scanAndFix()
    window.addEventListener('scroll', onScroll, { passive: true })

    // MutationObserver for dynamically added elements
    const mo = new MutationObserver(() => {
      requestAnimationFrame(scanAndFix)
    })
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style'],
    })

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      window.removeEventListener('scroll', onScroll)
      mo.disconnect()
    }
  }, [])

  return null
}
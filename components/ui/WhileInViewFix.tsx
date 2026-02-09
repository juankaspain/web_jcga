"use client"

import { useEffect } from "react"

/**
 * Aggressive fix for framer-motion whileInView not triggering
 * with Next.js 15 + Turbopack + React 19 + Framer Motion 11 + Lenis.
 *
 * Strategy:
 * 1. Force ALL elements with opacity:0 in viewport to become visible
 * 2. Use IntersectionObserver to catch elements as they scroll into view
 * 3. Multiple timed passes for safety
 * 4. MutationObserver for dynamically added elements
 */
export function WhileInViewFix() {
  useEffect(() => {
    function forceVisible(el: HTMLElement) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    }

    function scanAndFix() {
      const els = document.querySelectorAll('[style]')
      els.forEach((el) => {
        const htmlEl = el as HTMLElement
        const s = htmlEl.getAttribute('style') || ''
        if (s.includes('opacity: 0') || s.includes('opacity:0')) {
          const r = htmlEl.getBoundingClientRect()
          if (r.top < window.innerHeight + 200 && r.bottom > -200) {
            forceVisible(htmlEl)
          }
        }
      })
    }

    // Set up IntersectionObserver to watch for elements entering viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const s = el.getAttribute('style') || ''
            if (s.includes('opacity: 0') || s.includes('opacity:0')) {
              forceVisible(el)
            }
            io.unobserve(el)
          }
        })
      },
      { rootMargin: '100px', threshold: 0 }
    )

    function observeHiddenElements() {
      const els = document.querySelectorAll('[style]')
      els.forEach((el) => {
        const s = el.getAttribute('style') || ''
        if (s.includes('opacity: 0') || s.includes('opacity:0')) {
          io.observe(el)
        }
      })
    }

    // Kick IO callbacks after hydration
    const t1 = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'))
      window.dispatchEvent(new Event('resize'))
      scanAndFix()
      observeHiddenElements()
    }, 50)

    // Second pass
    const t2 = setTimeout(() => {
      scanAndFix()
      observeHiddenElements()
    }, 300)

    // Third pass
    const t3 = setTimeout(() => {
      scanAndFix()
      observeHiddenElements()
    }, 800)

    // Fourth pass
    const t4 = setTimeout(() => {
      scanAndFix()
      observeHiddenElements()
    }, 1500)

    // Fifth pass - aggressive: force ALL remaining opacity:0 elements
    const t5 = setTimeout(() => {
      const els = document.querySelectorAll('[style]')
      els.forEach((el) => {
        const htmlEl = el as HTMLElement
        const s = htmlEl.getAttribute('style') || ''
        if (s.includes('opacity: 0') || s.includes('opacity:0')) {
          forceVisible(htmlEl)
        }
      })
    }, 2500)

    // Re-scan on scroll
    const onScroll = () => scanAndFix()
    window.addEventListener('scroll', onScroll, { passive: true })

    // MutationObserver for dynamically added elements
    const mo = new MutationObserver(() => {
      requestAnimationFrame(() => {
        scanAndFix()
        observeHiddenElements()
      })
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
      clearTimeout(t5)
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}

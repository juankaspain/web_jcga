"use client"

import { useEffect } from "react"

/**
 * Nuclear fix for framer-motion whileInView not triggering
 * with Next.js 15 + Turbopack + React 19 + Framer Motion 11.
 *
 * Strategy: Use CSS class + !important to override framer-motion inline styles.
 * IntersectionObserver adds .fm-visible class when elements enter viewport.
 * CSS animation provides fallback visibility after 3s.
 */
export function WhileInViewFix() {
  useEffect(() => {
    // Inject CSS that overrides framer-motion inline opacity
    const style = document.createElement('style')
    style.textContent = `
      /* Force visibility for elements stuck at opacity:0 by framer-motion */
      .fm-visible {
        opacity: 1 !important;
        transform: none !important;
        transition: opacity 0.6s ease, transform 0.6s ease !important;
      }

      /* Ultimate fallback: after 3s, force ALL motion elements visible */
      @keyframes forceVisible {
        to {
          opacity: 1;
          transform: none;
        }
      }

      /* Apply to elements with inline opacity:0 after page load */
      body.loaded [style*="opacity"] {
        animation: forceVisible 0.6s ease forwards;
        animation-delay: 2.5s;
      }
    `
    document.head.appendChild(style)

    // Add loaded class after hydration
    requestAnimationFrame(() => {
      document.body.classList.add('loaded')
    })

    function addVisibleClass(el: Element) {
      el.classList.add('fm-visible')
    }

    // IntersectionObserver to detect elements entering viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const s = el.style.opacity
            // Only force-show elements that are hidden (opacity 0 or very low)
            if (s === '0' || s === '' || parseFloat(s) < 0.1) {
              addVisibleClass(el)
            }
            io.unobserve(el)
          }
        })
      },
      { rootMargin: '50px', threshold: 0 }
    )

    function observeHiddenElements() {
      const els = document.querySelectorAll('[style]')
      els.forEach((el) => {
        const htmlEl = el as HTMLElement
        if (htmlEl.style.opacity === '0' || (htmlEl.getAttribute('style') || '').includes('opacity')) {
          io.observe(el)
        }
      })
    }

    // Scan and observe at multiple intervals
    const timers = [
      setTimeout(() => { observeHiddenElements() }, 100),
      setTimeout(() => { observeHiddenElements() }, 500),
      setTimeout(() => { observeHiddenElements() }, 1000),
      setTimeout(() => { observeHiddenElements() }, 2000),
    ]

    // Also observe on scroll
    const onScroll = () => observeHiddenElements()
    window.addEventListener('scroll', onScroll, { passive: true })

    // MutationObserver for dynamically added elements
    const mo = new MutationObserver(() => {
      requestAnimationFrame(() => observeHiddenElements())
    })
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style'],
    })

    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
      mo.disconnect()
      style.remove()
    }
  }, [])

  return null
}
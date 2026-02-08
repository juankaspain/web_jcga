"use client"

import { useEffect } from "react"

/**
 * Robust fix for framer-motion whileInView not triggering
 * with Next.js 15 + Turbopack + React 19 + Framer Motion 11.
 *
 * Strategy:
 * 1. Dispatch scroll/resize after hydration to kick IO callbacks
 * 2. MutationObserver watches for new elements with opacity:0
 * 3. IntersectionObserver forces visibility when they enter viewport
 * 4. Handles dynamically added elements (route changes, lazy loads)
 *
 * TODO: Remove once framer-motion fixes the underlying bug.
 */
export function WhileInViewFix() {
  useEffect(() => {
    // Set of elements we're already tracking
    const tracked = new WeakSet<Element>()

    // IO that forces stuck elements visible
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          const s = el.getAttribute('style') || ''
          if (s.includes('opacity: 0') || s.includes('opacity:0')) {
            // Give framer-motion a frame to handle it
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const cur = el.getAttribute('style') || ''
                if (cur.includes('opacity: 0') || cur.includes('opacity:0')) {
                  el.style.opacity = '1'
                  el.style.transform = 'none'
                  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
                }
              })
            })
          }
          io.unobserve(el)
        }
      },
      { threshold: 0.05 }
    )

    // Track an element if it looks stuck
    function track(el: Element) {
      if (tracked.has(el)) return
      const s = el.getAttribute('style') || ''
      if (
        (s.includes('opacity: 0') || s.includes('opacity:0')) &&
        (s.includes('transform') || s.includes('translate'))
      ) {
        tracked.add(el)
        io.observe(el)
      }
    }

    // Scan existing DOM
    function scanAll() {
      document.querySelectorAll('[style]').forEach(track)
    }

    // MutationObserver for new/changed elements
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'childList') {
          m.addedNodes.forEach((n) => {
            if (n instanceof HTMLElement) {
              track(n)
              n.querySelectorAll('[style]').forEach(track)
            }
          })
        }
        if (m.type === 'attributes' && m.target instanceof HTMLElement) {
          track(m.target)
        }
      }
    })

    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style'],
    })

    // Kick framer-motion's IO after hydration
    const t1 = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'))
      window.dispatchEvent(new Event('resize'))
      scanAll()
    }, 100)

    // Safety net: force-fix anything still stuck after 1.5s
    const t2 = setTimeout(() => {
      document
        .querySelectorAll('[style*="opacity: 0"][style*="transform"]')
        .forEach((el) => {
          const htmlEl = el as HTMLElement
          const r = htmlEl.getBoundingClientRect()
          if (r.top < window.innerHeight && r.bottom > 0) {
            htmlEl.style.opacity = '1'
            htmlEl.style.transform = 'none'
            htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
          }
        })
    }, 1500)

    // Re-scan on scroll for lazy content
    const onScroll = () => scanAll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      io.disconnect()
      mo.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
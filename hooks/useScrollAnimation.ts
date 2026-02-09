import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

/**
 * Hook reutilizable para animaciones al hacer scroll
 * Compatible con Intersection Observer y prefers-reduced-motion
 * 
 * @param options - Opciones de configuración
 * @returns Referencia para el elemento y estado de visibilidad
 * 
 * @example
 * const { ref, isInView } = useScrollAnimation({ once: true })
 * return <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} />
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options?: {
  once?: boolean
  margin?: string
  amount?: "some" | "all" | number
}) {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? "-100px",
    amount: options?.amount ?? 0.3,
  })

  return { ref, isInView }
}

/**
 * Hook para detectar dirección de scroll
 * Útil para ocultar/mostrar navbar en scroll down/up
 * 
 * @param threshold - Píxeles de scroll antes de activar
 * @returns Estado de scroll y dirección
 */
export function useScrollDirection(threshold = 10) {
  const lastScrollY = useRef(0)
  const scrollDirection = useRef<"up" | "down">("up")
  const isScrolled = useRef(false)

  useEffect(() => {
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY.current) < threshold) {
        ticking = false
        return
      }

      scrollDirection.current = scrollY > lastScrollY.current ? "down" : "up"
      isScrolled.current = scrollY > 100
      lastScrollY.current = scrollY > 0 ? scrollY : 0
      ticking = false

      // Disparar custom event para que componentes puedan reaccionar
      window.dispatchEvent(
        new CustomEvent("scroll-direction", {
          detail: {
            direction: scrollDirection.current,
            isScrolled: isScrolled.current,
          },
        })
      )
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return { scrollDirection: scrollDirection.current, isScrolled: isScrolled.current }
}

/**
 * Hook para scroll spy (detectar sección activa)
 * 
 * @param sectionIds - Array de IDs de secciones a monitorear
 * @returns ID de la sección activa
 */
export function useScrollSpy(sectionIds: string[]) {
  const activeSection = useRef<string | null>(null)

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>()

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeSection.current = id
              window.dispatchEvent(
                new CustomEvent("scroll-spy-update", {
                  detail: { activeSection: id },
                })
              )
            }
          })
        },
        {
          rootMargin: "-20% 0px -80% 0px",
          threshold: 0,
        }
      )

      observer.observe(element)
      observers.set(id, observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds])

  return activeSection.current
}

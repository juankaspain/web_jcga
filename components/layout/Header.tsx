"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils/cn"
import { locales, localeLabels, type Locale } from "@/lib/i18n/config"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const navItems = [
  { href: "/", label: { es: "Inicio", en: "Home" } },
  { href: "/about", label: { es: "Sobre mí", en: "About" } },
  { href: "/experience", label: { es: "Experiencia", en: "Experience" } },
  { href: "/projects", label: { es: "Proyectos", en: "Projects" } },
  { href: "/certifications", label: { es: "Certificaciones", en: "Certifications" } },
  { href: "/skills", label: { es: "Skills", en: "Skills" } },
  { href: "/content", label: { es: "Contenido", en: "Content" } },
  { href: "/contact", label: { es: "Contacto", en: "Contact" } }
]

function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean)
  const first = segments[0]
  if (locales.includes(first as Locale)) {
    return first as Locale
  }
  return "es"
}

function localizePath(path: string, locale: Locale) {
  if (locale === "es") return path
  if (path === "/") return `/${locale}`
  return `/${locale}${path}`
}

// Throttle utility
function useThrottle<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): T {
  const lastCall = useRef<number>(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  return useCallback(
    ((...args: unknown[]) => {
      const now = Date.now()
      const timeSinceLastCall = now - lastCall.current

      if (timeSinceLastCall >= delay) {
        lastCall.current = now
        callback(...args)
      } else {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          lastCall.current = Date.now()
          callback(...args)
        }, delay - timeSinceLastCall)
      }
    }) as T,
    [callback, delay]
  )
}

// Animated Hamburger
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-center items-center">
      <motion.span
        className="absolute h-0.5 w-6 rounded-full"
        style={{ backgroundColor: 'var(--text-primary)' }}
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -6 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute h-0.5 w-6 rounded-full"
        style={{ backgroundColor: 'var(--text-primary)' }}
        animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute h-0.5 w-6 rounded-full"
        style={{ backgroundColor: 'var(--text-primary)' }}
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 6 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

export function Header() {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname || "/")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const basePath = currentLocale === "es" ? pathname : pathname.replace(/^\/en/, "") || "/"

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  const throttledHandleScroll = useThrottle(handleScroll, 100)

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [handleScroll, throttledHandleScroll])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 theme-transition",
          isScrolled
            ? "glass-strong shadow-lg"
            : "border-b"
        )}
        style={{
          backgroundColor: isScrolled ? undefined : 'color-mix(in srgb, var(--bg-primary) 80%, transparent)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* Logo */}
          <Link
            href={localizePath("/", currentLocale)}
            className="font-bold tracking-tight text-lg group"
          >
            <span
              className="transition-colors duration-200"
              style={{ color: 'var(--text-primary)' }}
            >
              JCGA
              <span
                className="inline-block w-1.5 h-1.5 rounded-full ml-0.5 align-super transition-colors duration-200"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 text-sm lg:flex relative">
            {navItems.map((item) => {
              const href = localizePath(item.href, currentLocale)
              const label = item.label[currentLocale]
              const isActive = pathname === href || (item.href !== "/" && pathname?.startsWith(href))

              return (
                <Link
                  key={item.href}
                  href={href}
                  className={cn(
                    "relative px-3 py-2 rounded-lg transition-all duration-200",
                  )}
                  style={{
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--accent-glow)'
                      e.currentTarget.style.backgroundColor = 'var(--surface-hover)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive ? 'var(--accent-primary)' : 'var(--text-secondary)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Separator */}
            <div
              className="w-px h-5 mx-2"
              style={{ backgroundColor: 'var(--border-default)' }}
            />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Switcher */}
            <div
              className="ml-2 flex items-center gap-1 rounded-full px-1 py-1 text-xs border"
              style={{
                borderColor: 'var(--border-default)',
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              {locales.map((locale) => {
                const isActive = locale === currentLocale
                const href = localizePath(basePath, locale)

                return (
                  <Link
                    key={locale}
                    href={href}
                    className={cn(
                      "rounded-full px-2.5 py-1 font-medium transition-all duration-200",
                    )}
                    style={{
                      backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
                      color: isActive ? 'var(--text-on-accent)' : 'var(--text-secondary)',
                      boxShadow: isActive ? 'var(--shadow-glow-sm)' : 'none',
                    }}
                  >
                    {localeLabels[locale]}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle size={16} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ backgroundColor: isMenuOpen ? 'var(--surface-hover)' : 'transparent' }}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              <HamburgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: 'var(--bg-overlay)' }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong lg:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <div className="flex-1 flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const href = localizePath(item.href, currentLocale)
                    const label = item.label[currentLocale]
                    const isActive = pathname === href || (item.href !== "/" && pathname?.startsWith(href))

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={href}
                          className={cn(
                            "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                          )}
                          style={{
                            color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                            backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent',
                            borderLeft: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
                          }}
                        >
                          {label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Language Switcher (Mobile) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6"
                  style={{ borderTop: '1px solid var(--border-subtle)' }}
                >
                  <p
                    className="text-xs uppercase tracking-wider mb-3 px-4"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {currentLocale === 'es' ? 'Idioma' : 'Language'}
                  </p>
                  <div className="flex gap-2 px-4">
                    {locales.map((locale) => {
                      const isActive = locale === currentLocale
                      const href = localizePath(basePath, locale)

                      return (
                        <Link
                          key={locale}
                          href={href}
                          className="flex-1 text-center rounded-xl py-2.5 font-medium transition-all duration-200"
                          style={{
                            backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--surface-secondary)',
                            color: isActive ? 'var(--text-on-accent)' : 'var(--text-secondary)',
                            boxShadow: isActive ? 'var(--shadow-glow-sm)' : 'none',
                          }}
                        >
                          {localeLabels[locale]}
                        </Link>
                      )
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

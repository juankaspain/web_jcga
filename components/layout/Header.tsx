"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import { cn } from "@/lib/utils/cn"
import { locales, localeLabels, type Locale } from "@/lib/i18n/config"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const navItems = [
  { href: "/", label: { es: "Inicio", en: "Home" } },
  { href: "/projects", label: { es: "Proyectos", en: "Projects" } },
  { href: "/experience", label: { es: "Experiencia", en: "Experience" } },
  { href: "/about", label: { es: "Sobre mí", en: "About" } },
  { href: "/contact", label: { es: "Contacto", en: "Contact" } },
]

function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean)
  const first = segments[0]
  if (locales.includes(first as Locale)) return first as Locale
  return "es"
}

function localizePath(path: string, locale: Locale) {
  if (locale === "es") return path
  if (path === "/") return `/${locale}`
  return `/${locale}${path}`
}

export function Header() {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname || "/")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const basePath =
    currentLocale === "es" ? pathname : pathname.replace(/^\/en/, "") || "/"

  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current
    const threshold = 10

    if (latest < 100) {
      setIsHidden(false)
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
      if (latest > previous && latest - previous > threshold) {
        setIsHidden(true)
      } else if (latest < previous && previous - latest > threshold) {
        setIsHidden(false)
      }
    }

    lastScrollY.current = latest
  })

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 theme-transition border-b border-[var(--border-subtle)]",
          isScrolled ? "glass-strong shadow-lg" : ""
        )}
        style={{
          backgroundColor: isScrolled
            ? undefined
            : "color-mix(in srgb, var(--bg-primary) 80%, transparent)",
        }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link
            href={localizePath("/", currentLocale)}
            className="font-bold tracking-tight text-lg group"
            aria-label={currentLocale === "en" ? "Go to home" : "Ir a inicio"}
          >
            <span className="transition-colors duration-200 text-[var(--text-primary)]">
              JCGA
              <span className="inline-block w-1.5 h-1.5 rounded-full ml-0.5 align-super transition-colors duration-200 bg-[var(--accent-primary)]" />
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 text-sm lg:flex relative"
            aria-label={currentLocale === "en" ? "Primary" : "Principal"}
          >
            {navItems.map((item) => {
              const href = localizePath(item.href, currentLocale)
              const label = item.label[currentLocale]
              const isActive =
                pathname === href ||
                (item.href !== "/" && pathname?.startsWith(href))

              return (
                <Link
                  key={item.href}
                  href={href}
                  className={cn(
                    "relative px-3 py-2 rounded-lg transition-all duration-200",
                    isActive
                      ? "text-[var(--accent-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent-glow)] hover:bg-[var(--surface-hover)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[var(--accent-primary)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}

            <div className="w-px h-5 mx-2 bg-[var(--border-default)]" />

            <ThemeToggle />

            <div
              className="ml-2 flex items-center gap-1 rounded-full px-1 py-1 text-xs border border-[var(--border-default)] bg-[var(--bg-secondary)]"
              aria-label={currentLocale === "en" ? "Language" : "Idioma"}
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
                      isActive
                        ? "bg-[var(--accent-primary)] text-[var(--text-on-accent)] shadow-[var(--shadow-glow-sm)]"
                        : "text-[var(--text-secondary)]"
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {localeLabels[locale]}
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle size={16} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                isMenuOpen ? "bg-[var(--surface-hover)]" : "bg-transparent"
              )}
              aria-label={
                isMenuOpen
                  ? currentLocale === "en"
                    ? "Close menu"
                    : "Cerrar menú"
                  : currentLocale === "en"
                    ? "Open menu"
                    : "Abrir menú"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                <motion.span
                  className="absolute h-0.5 w-6 rounded-full bg-[var(--text-primary)]"
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 0 : -6 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 rounded-full bg-[var(--text-primary)]"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    scaleX: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 rounded-full bg-[var(--text-primary)]"
                  animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 0 : 6 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: "var(--bg-overlay)" }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.nav
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong lg:hidden"
              aria-label={currentLocale === "en" ? "Mobile" : "Móvil"}
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <div className="flex-1 flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const href = localizePath(item.href, currentLocale)
                    const label = item.label[currentLocale]
                    const isActive =
                      pathname === href ||
                      (item.href !== "/" && pathname?.startsWith(href))

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
                            isActive
                              ? "text-[var(--accent-primary)] bg-[var(--accent-subtle)] border-l-2 border-[var(--accent-primary)]"
                              : "text-[var(--text-secondary)]"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 border-t border-[var(--border-subtle)]"
                >
                  <p className="text-xs uppercase tracking-wider mb-3 px-4 text-[var(--text-tertiary)]">
                    {currentLocale === "es" ? "Idioma" : "Language"}
                  </p>
                  <div className="flex gap-2 px-4">
                    {locales.map((locale) => {
                      const isActive = locale === currentLocale
                      const href = localizePath(basePath, locale)

                      return (
                        <Link
                          key={locale}
                          href={href}
                          className={cn(
                            "flex-1 text-center rounded-xl py-2.5 font-medium transition-all duration-200",
                            isActive
                              ? "bg-[var(--accent-primary)] text-[var(--text-on-accent)] shadow-[var(--shadow-glow-sm)]"
                              : "bg-[var(--surface-secondary)] text-[var(--text-secondary)]"
                          )}
                          aria-current={isActive ? "true" : undefined}
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

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils/cn"
import { locales, localeLabels, type Locale } from "@/lib/i18n/config"

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

// Hamburger Icon Component
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-center items-center">
      <motion.span
        className="absolute h-0.5 w-6 bg-slate-50 rounded-full"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -6,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute h-0.5 w-6 bg-slate-50 rounded-full"
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute h-0.5 w-6 bg-slate-50 rounded-full"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 6,
        }}
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled 
            ? "glass-strong shadow-lg" 
            : "bg-slate-950/80 backdrop-blur-sm border-b border-slate-800"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* Logo */}
          <Link 
            href={localizePath("/", currentLocale)} 
            className="font-semibold tracking-tight group"
          >
            <span className="text-slate-50 transition-colors group-hover:text-cyan-400">JCGA</span>
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
                    "hover:text-cyan-300 hover:bg-slate-800/50",
                    isActive ? "text-cyan-400" : "text-slate-300"
                  )}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Language Switcher */}
            <div className="ml-4 flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/60 px-1 py-1 text-xs">
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
                        ? "bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                        : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50"
                    )}
                  >
                    {localeLabels[locale]}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong lg:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Navigation Links */}
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
                            "hover:bg-slate-800/50 hover:text-cyan-300",
                            isActive 
                              ? "text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-500" 
                              : "text-slate-300"
                          )}
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
                  className="pt-6 border-t border-slate-800"
                >
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 px-4">
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
                          className={cn(
                            "flex-1 text-center rounded-xl py-2.5 font-medium transition-all duration-200",
                            isActive
                              ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                              : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-cyan-300"
                          )}
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

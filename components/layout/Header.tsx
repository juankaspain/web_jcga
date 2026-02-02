"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
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

export function Header() {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname || "/")

  const basePath = currentLocale === "es" ? pathname : pathname.replace(/^\/en/, "") || "/"

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href={localizePath("/", currentLocale)} className="font-semibold tracking-tight">
          <span className="text-slate-50">JCGA</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
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
                className={clsx(
                  "transition-colors hover:text-cyan-300",
                  isActive ? "text-cyan-400" : "text-slate-300"
                )}
              >
                {label}
              </Link>
            )
          })}

          <div className="ml-4 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-2 py-1 text-xs">
            {locales.map((locale) => {
              const isActive = locale === currentLocale
              const href = localizePath(basePath, locale)

              return (
                <Link
                  key={locale}
                  href={href}
                  className={clsx(
                    "rounded-full px-2 py-0.5 font-medium transition-colors",
                    isActive
                      ? "bg-cyan-500 text-slate-950"
                      : "text-slate-300 hover:text-cyan-300"
                  )}
                >
                  {localeLabels[locale]}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}

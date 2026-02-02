"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/skills", label: "Skills" },
  { href: "/content", label: "Content" },
  { href: "/contact", label: "Contact" }
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-slate-50">JCGA</span>
        </Link>
        
        <nav className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "transition-colors hover:text-cyan-300",
                pathname === item.href ? "text-cyan-400" : "text-slate-300"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

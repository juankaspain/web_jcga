"use client"

import { usePathname } from 'next/navigation'

export function SkipToContent() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')
  const text = isEnglish ? 'Skip to main content' : 'Saltar al contenido principal'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const main = document.getElementById('main-content')
    if (main) {
      main.focus()
      main.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="skip-link"
    >
      {text}
    </a>
  )
}

"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')

  const content = {
    es: {
      title: 'Página no encontrada',
      description: 'Lo sentimos, la página que buscas no existe o ha sido movida.',
      home: 'Ir al inicio',
      contact: 'Contactar',
      homeLink: '/',
      contactLink: '/contact'
    },
    en: {
      title: 'Page not found',
      description: 'Sorry, the page you are looking for does not exist or has been moved.',
      home: 'Go to home',
      contact: 'Contact',
      homeLink: '/en',
      contactLink: '/en/contact'
    }
  }

  const t = isEnglish ? content.en : content.es

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
      <div className="glass-card rounded-2xl p-8 max-w-md">
        <div className="text-8xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-2xl font-semibold text-slate-50 mb-2">
          {t.title}
        </h1>
        <p className="text-slate-400 mb-6">
          {t.description}
        </p>
        <div className="flex gap-3 justify-center">
          <Button href={t.homeLink} variant="primary">
            {t.home}
          </Button>
          <Button href={t.contactLink} variant="secondary">
            {t.contact}
          </Button>
        </div>
      </div>
    </div>
  )
}

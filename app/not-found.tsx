import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
      <div className="glass-card rounded-2xl p-8 max-w-md">
        <div className="text-8xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-2xl font-semibold text-slate-50 mb-2">
          Página no encontrada
        </h1>
        <p className="text-slate-400 mb-6">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex gap-3 justify-center">
          <Button href="/" variant="primary">
            Ir al inicio
          </Button>
          <Button href="/contact" variant="secondary">
            Contactar
          </Button>
        </div>
      </div>
    </div>
  )
}

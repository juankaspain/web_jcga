"use client"

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
      <div className="glass-card rounded-2xl p-8 max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-red-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-slate-50 mb-2">
          Algo salió mal
        </h2>
        <p className="text-slate-400 mb-6">
          Ha ocurrido un error al cargar esta página.
        </p>
        <div className="flex gap-3 justify-center">
          <Button onClick={reset} variant="primary">
            Reintentar
          </Button>
          <Button href="/" variant="secondary">
            Ir al inicio
          </Button>
        </div>
        {error.digest && (
          <p className="mt-4 text-xs text-slate-600">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}

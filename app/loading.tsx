import { Spinner } from '@/components/ui/Spinner'

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <Spinner size="lg" label="Cargando contenido..." />
      <p className="mt-4 text-slate-400 text-sm">Cargando...</p>
    </div>
  )
}

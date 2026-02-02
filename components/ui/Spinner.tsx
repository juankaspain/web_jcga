import { cn } from '@/lib/utils/cn'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
}

const sizes = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-10 h-10 border-3',
}

export function Spinner({ size = 'md', className, label = 'Cargando...' }: SpinnerProps) {
  return (
    <div className="inline-flex items-center gap-2" role="status" aria-label={label}>
      <div
        className={cn(
          'rounded-full border-slate-700 border-t-cyan-500 animate-spin',
          sizes[size],
          className
        )}
        style={{ animationDuration: '0.8s' }}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}

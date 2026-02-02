import { cn } from '@/lib/utils/cn'

interface LoadingDotsProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'w-1 h-1',
  md: 'w-1.5 h-1.5',
  lg: 'w-2 h-2',
}

export function LoadingDots({ className, size = 'md' }: LoadingDotsProps) {
  return (
    <span className={cn('loading-dots', className)} role="status" aria-label="Cargando">
      <span className={cn('bg-current rounded-full', sizes[size])} />
      <span className={cn('bg-current rounded-full', sizes[size])} />
      <span className={cn('bg-current rounded-full', sizes[size])} />
    </span>
  )
}

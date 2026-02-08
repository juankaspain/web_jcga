'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
type AvatarStatus = 'online' | 'offline' | 'busy' | 'away'

interface AvatarProps {
  src?: string
  alt: string
  size?: AvatarSize
  status?: AvatarStatus
  fallback?: string
  className?: string
}

const sizes: Record<AvatarSize, { container: string; px: number }> = {
  sm: { container: 'w-8 h-8', px: 32 },
  md: { container: 'w-12 h-12', px: 48 },
  lg: { container: 'w-16 h-16', px: 64 },
  xl: { container: 'w-24 h-24', px: 96 },
}

const statusColors: Record<AvatarStatus, string> = {
  online: 'var(--success)',
  offline: 'var(--text-tertiary)',
  busy: 'var(--error)',
  away: 'var(--warning)',
}

const statusDots: Record<AvatarSize, string> = {
  sm: 'w-2 h-2 border',
  md: 'w-3 h-3 border-2',
  lg: 'w-3.5 h-3.5 border-2',
  xl: 'w-4 h-4 border-2',
}

export function Avatar({
  src,
  alt,
  size = 'md',
  status,
  fallback,
  className,
}: AvatarProps) {
  const [hasError, setHasError] = useState(false)
  const config = sizes[size]

  const initials = fallback
    || alt
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()

  return (
    <div className={cn('relative inline-flex shrink-0', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-full',
          config.container
        )}
        style={{
          border: '2px solid var(--border-subtle)',
          background: 'var(--accent-gradient)',
        }}
      >
        {src && !hasError ? (
          <Image
            src={src}
            alt={alt}
            width={config.px}
            height={config.px}
            className="object-cover w-full h-full"
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            className="flex items-center justify-center w-full h-full text-xs font-semibold"
            style={{
              backgroundColor: 'var(--accent-subtle)',
              color: 'var(--accent-primary)',
            }}
          >
            {initials}
          </div>
        )}
      </div>
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full',
            statusDots[size]
          )}
          style={{
            backgroundColor: statusColors[status],
            borderColor: 'var(--bg-primary)',
          }}
          aria-label={status}
        />
      )}
    </div>
  )
}

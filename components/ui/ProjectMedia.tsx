'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface ProjectMediaProps {
  src: string
  alt: string
  title?: string
  description?: string
  width?: number
  height?: number
  className?: string
}

export function ProjectMedia({
  src,
  alt,
  title,
  description,
  width = 600,
  height = 400,
  className,
}: ProjectMediaProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl group',
        className
      )}
      style={{ border: '1px solid var(--border-subtle)' }}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            'object-cover w-full h-full transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>

      {/* Overlay on hover */}
      {(title || description) && (
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          }}
        >
          {title && (
            <h4 className="text-sm font-semibold text-white">{title}</h4>
          )}
          {description && (
            <p className="text-xs text-white/80 mt-1">{description}</p>
          )}
        </div>
      )}

      {/* Loading placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: 'var(--surface-secondary)' }}
        />
      )}
    </div>
  )
}

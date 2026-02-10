"use client"

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  href: string
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'className' | 'style'>

type ButtonProps = ButtonAsButton | ButtonAsLink

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

const base = [
  'inline-flex items-center justify-center gap-2 font-semibold',
  'transition-all duration-200 ease-out',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed',
].join(' ')

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--accent-primary)] text-[var(--text-on-accent)] hover:shadow-[var(--shadow-glow-sm)]',
  secondary:
    'bg-[var(--surface-secondary)] text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--accent-primary)]',
  outline:
    'bg-transparent text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] hover:bg-[var(--surface-hover)]',
  ghost:
    'bg-transparent text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--surface-hover)]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    const classes = cn(base, sizes[size], variantClass[variant], className)

    const mergedStyle: React.CSSProperties = {
      outlineColor: 'var(--focus-ring)',
      ...(variant === 'primary' ? { background: 'var(--accent-gradient)' } : null),
      ...style,
    }

    const content = (
      <>
        {isLoading ? (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </>
    )

    if (href) {
      return (
        <Link
          href={href}
          {...(props as any)}
          className={classes}
          style={{
            ...(mergedStyle || {}),
            // @ts-expect-error CSS custom properties
            '--tw-ring-color': 'var(--focus-ring)',
            '--tw-ring-offset-color': 'var(--focus-ring-offset)',
          }}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        {...(props as any)}
        className={classes}
        style={{
          ...(mergedStyle || {}),
          // @ts-expect-error CSS custom properties
          '--tw-ring-color': 'var(--focus-ring)',
          '--tw-ring-offset-color': 'var(--focus-ring-offset)',
        }}
        disabled={disabled || isLoading}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

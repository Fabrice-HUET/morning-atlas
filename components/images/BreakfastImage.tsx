'use client'

import Image from 'next/image'
import { useState } from 'react'

type BreakfastImageProps = {
  slug: string
  alt: string
  className?: string
  imageClassName?: string
  sizes?: string
  priority?: boolean
}

function getLocalBreakfastImageSrc(slug: string) {
  return `/images/breakfasts/${slug}.webp`
}

function BreakfastImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="absolute inset-0 grid place-items-center"
      style={{ background: 'linear-gradient(135deg, var(--color-oat), var(--color-cream))' }}
    >
      <svg viewBox="0 0 120 120" className="h-1/2 w-1/2" aria-hidden="true">
        <circle cx="88" cy="32" r="13" fill="var(--color-honey)" opacity="0.85" />
        <path
          d="M50 44 q-7 -11 0 -22"
          fill="none"
          stroke="var(--color-mocha)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M62 44 q7 -11 0 -22"
          fill="none"
          stroke="var(--color-mocha)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path d="M28 62 h64 a32 32 0 0 1 -64 0 z" fill="var(--color-toast)" />
        <ellipse cx="60" cy="62" rx="32" ry="7.5" fill="var(--color-mocha)" />
      </svg>
    </div>
  )
}

export function BreakfastImage({
  slug,
  alt,
  className,
  imageClassName = 'object-cover',
  sizes = '100vw',
  priority = false,
}: BreakfastImageProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-oat/50 ${className ?? ''}`}>
      {hasError ? (
        <BreakfastImagePlaceholder label={alt} />
      ) : (
        <Image
          src={getLocalBreakfastImageSrc(slug)}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imageClassName}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}

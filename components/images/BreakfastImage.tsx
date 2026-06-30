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

function getFallbackBreakfastImageSrc(slug: string) {
  return `https://picsum.photos/seed/${encodeURIComponent(slug)}/1200/900`
}

export function BreakfastImage({
  slug,
  alt,
  className,
  imageClassName = 'object-cover',
  sizes = '100vw',
  priority = false,
}: BreakfastImageProps) {
  const [isFallback, setIsFallback] = useState(false)

  const src = isFallback ? getFallbackBreakfastImageSrc(slug) : getLocalBreakfastImageSrc(slug)

  return (
    <div className={`relative overflow-hidden bg-oat/50 ${className ?? ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
        onError={() => {
          if (!isFallback) {
            setIsFallback(true)
          }
        }}
      />
    </div>
  )
}

import Link from 'next/link'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({ href, children, variant = 'primary', className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition',
        variant === 'primary'
          ? 'bg-stone-950 text-white hover:bg-stone-800'
          : 'border border-stone-300 bg-white text-stone-950 hover:border-stone-500',
        className,
      )}
    >
      {children}
    </Link>
  )
}

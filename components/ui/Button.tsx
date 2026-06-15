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
          ? 'bg-espresso text-cream shadow-sm hover:bg-mocha'
          : 'border border-mocha/35 bg-paper text-espresso hover:border-toast hover:bg-cream',
        className,
      )}
    >
      {children}
    </Link>
  )
}

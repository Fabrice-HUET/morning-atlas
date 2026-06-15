import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type PillProps = {
  children: ReactNode
  tone?: 'amber' | 'green' | 'stone'
}

export function Pill({ children, tone = 'amber' }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]',
        tone === 'amber' && 'bg-amber-100 text-amber-900',
        tone === 'green' && 'bg-emerald-100 text-emerald-900',
        tone === 'stone' && 'bg-stone-100 text-stone-700',
      )}
    >
      {children}
    </span>
  )
}

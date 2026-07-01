'use client'

import { useEffect, useState } from 'react'

const storageKey = 'morning-atlas-construction-notice-dismissed'

export function HomeConstructionNotice() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      try {
        if (localStorage.getItem(storageKey) === 'true') {
          setIsVisible(false)
        }
      } catch {
        return
      }
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [])

  function dismissNotice() {
    setIsVisible(false)

    try {
      localStorage.setItem(storageKey, 'true')
    } catch {
      return
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-xl rounded-2xl border border-toast/40 bg-paper/95 p-4 shadow-xl shadow-espresso/10 backdrop-blur sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0"
      aria-label="Information sur l’état du site"
    >
      <div className="flex gap-4">
        <div className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-honey/25 text-xl sm:flex" aria-hidden="true">
          🥐
        </div>
        <div className="min-w-0">
          <p className="text-sm font-black text-espresso">Site en construction</p>
          <p className="mt-1 text-sm leading-6 text-espresso/75">
            Morning Atlas est encore en construction. Certaines fiches sont en cours de relecture, mais tu peux déjà
            explorer le site.
          </p>
        </div>
        <button
          type="button"
          className="ml-auto inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-mocha/25 bg-cream text-xl leading-none text-espresso transition hover:border-toast hover:bg-oat/60"
          aria-label="Fermer l’avertissement de construction"
          onClick={dismissNotice}
        >
          ×
        </button>
      </div>
    </aside>
  )
}

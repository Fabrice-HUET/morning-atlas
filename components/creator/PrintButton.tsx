'use client'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="cv-noprint inline-flex min-h-11 items-center justify-center rounded-full bg-honey px-5 py-2.5 text-sm font-bold text-ink shadow-sm transition hover:bg-honey/90"
    >
      Imprimer / Enregistrer en PDF
    </button>
  )
}

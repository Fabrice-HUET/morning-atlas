import Link from 'next/link'

import type { Ingredient } from '@/types/taxonomy'

type IngredientCardProps = {
  ingredient: Ingredient
}

export function IngredientCard({ ingredient }: IngredientCardProps) {
  return (
    <Link
      href={`/ingredients/${ingredient.slug}`}
      className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">{ingredient.type}</p>
      <h3 className="mt-3 text-lg font-black text-stone-950">{ingredient.name}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-600">{ingredient.description}</p>
    </Link>
  )
}

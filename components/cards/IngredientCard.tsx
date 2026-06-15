import Link from 'next/link'

import type { Ingredient } from '@/types/taxonomy'

type IngredientCardProps = {
  ingredient: Ingredient
}

export function IngredientCard({ ingredient }: IngredientCardProps) {
  return (
    <Link
      href={`/ingredients/${ingredient.slug}`}
      className="rounded-lg border border-oat bg-paper p-5 shadow-sm transition hover:border-sage hover:shadow-md"
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-espresso">{ingredient.type}</p>
      <h3 className="mt-3 text-lg font-black text-espresso">{ingredient.name}</h3>
      <p className="mt-3 text-sm leading-6 text-espresso/75">{ingredient.description}</p>
    </Link>
  )
}

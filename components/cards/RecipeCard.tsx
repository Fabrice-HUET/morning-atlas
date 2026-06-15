import Link from 'next/link'

import type { Recipe } from '@/types/recipe'

type RecipeCardProps = {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group rounded-lg border border-oat bg-paper p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sage hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em] text-mocha">
        <span>{recipe.originLabel}</span>
        <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
      </div>
      <h3 className="mt-5 text-xl font-black text-espresso group-hover:text-mocha">{recipe.title}</h3>
      <p className="mt-3 text-sm leading-6 text-espresso/75">{recipe.shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-espresso">
        <span className="rounded-full bg-sage/20 px-3 py-1">{recipe.difficulty}</span>
        <span className="rounded-full bg-oat/80 px-3 py-1">{recipe.servings} pers.</span>
      </div>
    </Link>
  )
}

import Link from 'next/link'

import type { Recipe } from '@/types/recipe'

type RecipeCardProps = {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em] text-stone-500">
        <span>{recipe.originLabel}</span>
        <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
      </div>
      <h3 className="mt-5 text-xl font-black text-stone-950 group-hover:text-emerald-800">{recipe.title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-600">{recipe.shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-stone-700">
        <span className="rounded-full bg-emerald-50 px-3 py-1">{recipe.difficulty}</span>
        <span className="rounded-full bg-stone-100 px-3 py-1">{recipe.servings} pers.</span>
      </div>
    </Link>
  )
}

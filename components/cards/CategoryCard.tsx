import Link from 'next/link'

import type { Category } from '@/types/taxonomy'

type CategoryCardProps = {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:border-amber-300 hover:shadow-md"
    >
      <h3 className="text-lg font-black text-stone-950">{category.name}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-600">{category.description}</p>
    </Link>
  )
}

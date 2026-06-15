import Link from 'next/link'

import type { Category } from '@/types/taxonomy'

type CategoryCardProps = {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="rounded-lg border border-oat bg-paper p-5 shadow-sm transition hover:border-toast hover:shadow-md"
    >
      <h3 className="text-lg font-black text-espresso">{category.name}</h3>
      <p className="mt-3 text-sm leading-6 text-espresso/75">{category.description}</p>
    </Link>
  )
}

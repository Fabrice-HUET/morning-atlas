import { getTagBySlug } from '@/lib/content-helpers'

type TagBadgeProps = {
  slug: string
}

export function TagBadge({ slug }: TagBadgeProps) {
  const tag = getTagBySlug(slug)

  return (
    <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
      {tag?.label ?? slug.replaceAll('-', ' ')}
    </span>
  )
}

import { countries } from '@/data/countries'
import { recipes } from '@/data/recipes'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/seo'

// Flux RSS des contenus publiés (needsReview: false uniquement). Statique au build.
export const dynamic = 'force-static'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

type FeedItem = { title: string; description: string; path: string }

export function GET() {
  const publishedRecipes = recipes.filter((recipe) => !recipe.needsReview)
  const publishedCountries = countries.filter((country) => !country.needsReview)

  const items: FeedItem[] = [
    ...publishedCountries.map((country) => ({
      title: `${country.breakfastName} — ${country.country}`,
      description: country.shortDescription,
      path: `/countries/${country.slug}`,
    })),
    ...publishedRecipes.map((recipe) => ({
      title: recipe.title,
      description: recipe.shortDescription,
      path: `/recipes/${recipe.slug}`,
    })),
  ]

  const buildDate = new Date().toUTCString()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(DEFAULT_DESCRIPTION)}</description>
    <language>fr</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
${items
  .map((item) => {
    const url = absoluteUrl(item.path)
    return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description>${escapeXml(item.description)}</description>
    </item>`
  })
  .join('\n')}
  </channel>
</rss>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}

import type { ContentSource } from '@/types/editorial'

type SourceListProps = {
  sources?: ContentSource[]
}

export function SourceList({ sources }: SourceListProps) {
  const visibleSources = sources?.filter((source) => source.title.trim())

  if (!visibleSources?.length) {
    return null
  }

  return (
    <section className="mt-12 rounded-lg border border-oat bg-paper p-6">
      <h2 className="text-2xl font-black text-espresso">Sources</h2>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-espresso/75">
        {visibleSources.map((source) => (
          <li key={`${source.title}-${source.url ?? source.publisher ?? 'source'}`}>
            {source.url ? (
              <a
                href={source.url}
                className="font-semibold text-espresso underline decoration-toast/40 underline-offset-4 hover:text-toast"
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.title}
              </a>
            ) : (
              <span className="font-semibold text-espresso">{source.title}</span>
            )}
            {source.publisher ? <span> · {source.publisher}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

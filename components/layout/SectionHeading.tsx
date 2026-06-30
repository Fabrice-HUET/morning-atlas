type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  level?: 1 | 2
}

export function SectionHeading({ eyebrow, title, description, level = 2 }: SectionHeadingProps) {
  const HeadingTag = level === 1 ? 'h1' : 'h2'

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-toast">{eyebrow}</p>
      ) : null}
      <HeadingTag className="mt-3 text-3xl font-black tracking-tight text-espresso sm:text-4xl">{title}</HeadingTag>
      {description ? <p className="mt-4 text-base leading-7 text-espresso/75">{description}</p> : null}
    </div>
  )
}

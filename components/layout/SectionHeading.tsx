type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-toast">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-espresso sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-espresso/75">{description}</p> : null}
    </div>
  )
}

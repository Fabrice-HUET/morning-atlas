type FlagProps = {
  emoji: string
  label: string
}

export function Flag({ emoji, label }: FlagProps) {
  return (
    <span aria-label={label} className="text-3xl" role="img">
      {emoji}
    </span>
  )
}

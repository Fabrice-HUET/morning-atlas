export type ContentSource = {
  title: string
  url?: string
  publisher?: string
  note?: string
}

export type SimplifiedRecipeDraft = {
  title: string
  ingredients: string[]
  steps: string[]
  difficulty: 'easy' | 'medium' | 'hard'
  estimatedTimeMinutes: number
}

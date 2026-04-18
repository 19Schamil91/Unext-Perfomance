export function splitTextIntoReadableLines(text: string, targetLineLength = 78) {
  const normalized = text.trim()

  if (!normalized) {
    return []
  }

  const sentences =
    normalized.match(/[^.!?]+[.!?]?/gu)?.map((sentence) => sentence.trim()).filter(Boolean) ?? [
      normalized,
    ]

  const lines: string[] = []

  for (const sentence of sentences) {
    const phrases = sentence.split(/(?<=,)\s+/u).map((phrase) => phrase.trim()).filter(Boolean)

    let currentLine = ""

    for (const phrase of phrases) {
      const candidate = currentLine ? `${currentLine} ${phrase}` : phrase

      if (currentLine && candidate.length > targetLineLength) {
        lines.push(currentLine)
        currentLine = phrase
      } else {
        currentLine = candidate
      }
    }

    if (currentLine) {
      lines.push(currentLine)
    }
  }

  return lines
}

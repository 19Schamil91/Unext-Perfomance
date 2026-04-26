export function splitTextIntoReadableLines(text: string, targetLineLength = 78) {
  const normalized = text.trim()

  if (!normalized) {
    return []
  }

  const readableParts =
    normalized
      .match(/[^.!?,]+[.!?,]?/gu)
      ?.map((part) => part.trim())
      .filter(Boolean) ?? [normalized]

  const lines: string[] = []
  let currentLine = ""

  for (const part of readableParts) {
    const candidate = currentLine ? `${currentLine} ${part}` : part

    if (currentLine && candidate.length > targetLineLength) {
      lines.push(currentLine)
      currentLine = part
    } else {
      currentLine = candidate
    }
  }

  if (currentLine) {
    lines.push(currentLine)
  }

  return lines
}

import { splitTextIntoReadableLines } from "@/lib/text-layout"

interface ReadableTextProps {
  text: string
  className: string
  targetLineLength?: number
}

export function ReadableText({
  text,
  className,
  targetLineLength = 78,
}: ReadableTextProps) {
  const lines = splitTextIntoReadableLines(text, targetLineLength)

  return (
    <p className={className}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className={`block ${index > 0 ? "mt-2" : ""}`}>
          {line}
        </span>
      ))}
    </p>
  )
}

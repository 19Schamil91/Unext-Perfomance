/*
  Diese Datei stellt einen gut lesbaren Textabschnitt bereit.
  Sie teilt laengere Texte in kuerzere sichtbare Zeilen auf.
  Besucher lesen dadurch Fliesstext in ruhigen, uebersichtlichen Abschnitten.
*/
import { splitTextIntoReadableLines } from "@/lib/text-layout"

type ReadableTextProps = {
  text: string
  className: string
  lineGapClassName?: string
  targetLineLength?: number
}

export function ReadableText({
  text,
  className,
  lineGapClassName = "mt-2",
  targetLineLength = 78,
}: ReadableTextProps) {
  // Diese Liste enthaelt die Zeilen, die im Text untereinander angezeigt werden.
  const lines = splitTextIntoReadableLines(text, targetLineLength)

  return (
    <p className={className}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className={`block ${index > 0 ? lineGapClassName : ""}`}>
          {line}
        </span>
      ))}
    </p>
  )
}

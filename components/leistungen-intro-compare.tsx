"use client"

import { useState } from "react"
import { ReadableText } from "@/components/readable-text"

interface LeistungenIntroCompareProps {
  title: string
  description: string
  fixedLines: string[] | null
}

export function LeistungenIntroCompare({
  title,
  description,
  fixedLines,
}: LeistungenIntroCompareProps) {
  const [mode, setMode] = useState<"after" | "before">("after")
  const showAfter = mode === "after"

  return (
    <div className="mx-auto max-w-5xl text-center">
      <div className="pointer-events-none fixed inset-x-0 top-24 z-50 flex justify-center px-4">
        <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/90 p-1 shadow-[0_10px_24px_rgba(15,23,42,0.12)] backdrop-blur-md">
          <button
            type="button"
            onClick={() => setMode("before")}
            className={
              mode === "before"
                ? "rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
                : "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            Vorher
          </button>
          <button
            type="button"
            onClick={() => setMode("after")}
            className={
              mode === "after"
                ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                : "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            Nachher
          </button>
        </div>
      </div>

      <div className="h-14" />

      <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Vergleich Introbereich seit letztem Commit
      </p>

      <h1
        className={
          showAfter
            ? "mx-auto max-w-[14ch] text-display-fluid text-foreground sm:max-w-[15ch] lg:max-w-none lg:whitespace-nowrap"
            : "mx-auto max-w-[14ch] text-display-fluid text-foreground sm:max-w-[15ch] lg:max-w-none"
        }
      >
        {title}
      </h1>

      {showAfter && fixedLines ? (
        <p className="mx-auto mt-6 max-w-none text-body-fluid text-muted-foreground">
          {fixedLines.map((line) => (
            <span key={line} className="block lg:whitespace-nowrap">
              {line}
            </span>
          ))}
        </p>
      ) : (
        <ReadableText
          text={description}
          targetLineLength={76}
          className="mx-auto mt-6 measure-intro-tight text-body-fluid text-muted-foreground"
        />
      )}
    </div>
  )
}

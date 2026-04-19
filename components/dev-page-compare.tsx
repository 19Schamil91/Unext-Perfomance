"use client"

import { createContext, type ReactNode, useContext, useState } from "react"

type CompareMode = "before" | "after"

const DevCompareContext = createContext<CompareMode>("after")

interface DevPageCompareProviderProps {
  children: ReactNode
}

export function DevPageCompareProvider({ children }: DevPageCompareProviderProps) {
  const [mode, setMode] = useState<CompareMode>("after")

  return (
    <DevCompareContext.Provider value={mode}>
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

      {children}
    </DevCompareContext.Provider>
  )
}

interface DevPageCompareViewProps {
  before: ReactNode
  after: ReactNode
}

export function DevPageCompareView({ before, after }: DevPageCompareViewProps) {
  const mode = useContext(DevCompareContext)

  return <>{mode === "before" ? before : after}</>
}

/*
  Diese Datei ist ein Entwicklungs-Schalter fuer Vorher/Nachher-Vergleiche.
  Sie zeigt oben auf der Seite zwei Schaltflaechen und rendert je nach Auswahl die alte oder neue Ansicht.
  Besucher im normalen Betrieb sehen diesen Schalter nicht, weil er nur in Entwicklungsansichten eingebunden wird.
*/
"use client"

import { createContext, type ReactNode, useContext, useState } from "react"

type CompareMode = "before" | "after"

type DevPageCompareProviderProps = {
  children: ReactNode
}

type DevPageCompareViewProps = {
  before: ReactNode
  after: ReactNode
}

const DevCompareContext = createContext<CompareMode>("after")

export function DevPageCompareProvider({ children }: DevPageCompareProviderProps) {
  // Dieser Wert merkt, ob gerade die alte oder die neue Ansicht angezeigt wird.
  const [mode, setMode] = useState<CompareMode>("after")

  return (
    <DevCompareContext.Provider value={mode}>
      {/* Schalter fuer den direkten visuellen Vergleich im Entwicklungsmodus. */}
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

export function DevPageCompareView({ before, after }: DevPageCompareViewProps) {
  const mode = useContext(DevCompareContext)

  return <>{mode === "before" ? before : after}</>
}

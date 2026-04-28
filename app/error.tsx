/*
  Diese Datei zeigt den Fehlerzustand fuer die Website.
  Sie erscheint, wenn eine Seite nicht richtig geladen werden konnte.
  Nutzer koennen den Ladevorgang erneut versuchen oder zur Startseite wechseln.
*/
"use client"

import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ reset }: Props) {
  return (
    <main className="flex min-h-[70vh] items-center bg-background px-4 py-20 lg:px-8">
      <section className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-7 w-7" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-2xl font-semibold text-foreground">Seite konnte nicht geladen werden</h1>
        <p className="mt-3 text-muted-foreground">
          Bitte versuchen Sie es erneut. Wenn der Fehler bleibt, erreichen Sie UNEXT direkt telefonisch.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" onClick={reset}>
            Erneut versuchen
          </Button>
          <Button asChild variant="outline">
            <a href="tel:+493023613927">030 23613927 anrufen</a>
          </Button>
        </div>
      </section>
    </main>
  )
}

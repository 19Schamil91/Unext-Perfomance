/*
  Diese Datei zeigt die 404-Seite.
  Sie erscheint, wenn eine aufgerufene Seite nicht existiert.
  Nutzer koennen zur Startseite, zu den Leistungen oder direkt zum Kontakt wechseln.
*/

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-background px-4 py-20 lg:px-8">
      <section className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">404</p>
        <h1 className="mt-3 text-2xl font-semibold text-foreground">Seite nicht gefunden</h1>
        <p className="mt-3 text-muted-foreground">
          Die angeforderte Seite gibt es nicht oder sie wurde verschoben.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Zur Startseite</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/leistungen">Leistungen ansehen</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

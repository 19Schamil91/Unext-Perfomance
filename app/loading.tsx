/*
  Diese Datei zeigt den Ladezustand fuer die Website.
  Sie erscheint, wenn eine Seite noch vorbereitet wird.
  Nutzer sehen dadurch eine kurze Rueckmeldung statt eines leeren Bildschirms.
*/

export default function Loading() {
  return (
    <main className="min-h-[60vh] bg-background px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="h-6 w-36 animate-pulse rounded bg-muted" />
        <div className="mt-8 h-14 max-w-2xl animate-pulse rounded bg-muted" />
        <div className="mt-4 h-6 max-w-xl animate-pulse rounded bg-muted" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-36 animate-pulse rounded-2xl border border-border bg-card" />
          ))}
        </div>
      </div>
    </main>
  )
}

---
name: next-router-check
description: "Use this skill when reviewing a Next.js App Router project to check whether data-loading routes have the required loading.tsx, error.tsx, and (where sensible) not-found.tsx files. Triggers: any review or task that touches routes under /app, any quality review that references AGENTS.md §10. The skill lists routes, checks the presence of the three special files, and reports which ones are missing."
---

# next-router-check

## Zweck

Dieser Skill prüft, ob ein Next.js-Projekt die in AGENTS.md §10 verlangten Route-Zustände explizit behandelt. Er wird typischerweise vom `quality_reviewer` aufgerufen, kann aber auch vom Hauptagenten direkt genutzt werden.

## Wann dieser Skill genutzt wird

- Nach jedem Task, der eine neue Route in `/app` anlegt.
- Als Teil des Quality-Reviews vor der Fertigmeldung.
- Wenn der User einen allgemeinen Route-Audit verlangt („prüf mal alle Routen").

## Wann NICHT

- Bei reinen Komponenten-Änderungen ohne Route-Kontext.
- Bei `/app/api/*`-Route-Handlern (das sind keine UI-Routen, die Regel greift nicht).

## Ablauf

1. Alle Verzeichnisse unter `/app` auflisten, die eine `page.tsx` enthalten — das sind die Routen.
2. `/app/api/**` ausklammern, das sind Route-Handler, nicht UI-Routen.
3. Für jede Route ermitteln, ob sie datenladend ist:
   - Eine Route gilt als datenladend, wenn ihre `page.tsx` eine `async`-Funktion exportiert oder Server Actions / Daten-Fetches enthält.
   - Bei rein statischen Routen (kein `async`, kein Fetch) ist `loading.tsx`/`error.tsx` nicht zwingend.
4. Für jede datenladende Route prüfen, ob folgende Dateien **im gleichen Verzeichnis oder in einem übergeordneten Layout-Scope** existieren:
   - `loading.tsx`
   - `error.tsx`
   - `not-found.tsx` (nur wenn die Route eine nicht-existente Ressource signalisieren kann)

## Ausgabeformat

Eine Tabelle pro Route:

| Route | Datenladend? | loading.tsx | error.tsx | not-found.tsx |
| ----- | ------------ | ----------- | --------- | ------------- |
| `/` | nein | — | — | — |
| `/users` | ja | ✓ (im Scope) | ✗ **fehlt** | nicht nötig |
| `/users/[id]` | ja | ✓ | ✓ | ✗ **fehlt** (Ressource kann nicht existieren) |

Plus eine Zusammenfassung:
- **N Routen geprüft, davon M datenladend.**
- **K fehlende Pflicht-Dateien** → Liste mit Route + fehlender Datei.

## Regeln

- Eine `loading.tsx` oder `error.tsx` in einem übergeordneten Layout-Scope zählt für alle Kind-Routen als vorhanden (Next.js vererbt diese Dateien).
- Ein `loading.tsx` im Root (`/app/loading.tsx`) deckt alle Routen ab — in diesem Fall ist die Regel für alle datenladenden Routen erfüllt.
- `not-found.tsx` ist nur verlangt, wenn die Route mit `notFound()` aus Next.js eine nicht-existente Ressource anzeigen könnte. Beispiel: `/users/[id]` für einen nicht existenten User.
- Empty-State und 404-Seite sind zwei verschiedene Dinge. Empty-State (leere Liste) wird **nicht** über `not-found.tsx` abgedeckt, sondern in der `page.tsx` selbst.

## Was dieser Skill NICHT tut

- Er ändert keine Dateien.
- Er erstellt keine fehlenden `loading.tsx`/`error.tsx`/`not-found.tsx` selbst — das macht der Hauptagent.
- Er prüft nicht den Inhalt der Dateien, nur ihre Existenz.
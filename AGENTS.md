# AGENTS.md

Dieses Dokument ist für den Agenten verbindlich.
Der Agent liest es zu Beginn jeder Session und vor jedem größeren Task erneut.
Es hat Vorrang vor Gewohnheiten, Vermutungen und Standardverhalten des Agenten.

Wenn eine User-Anfrage diesem Dokument widerspricht oder wichtige Informationen fehlen:
- nicht raten,
- keine stillen Annahmen treffen,
- eine gezielte Rückfrage stellen.

Wenn eine Regel in diesem Dokument fehlt:
- konservativ entscheiden,
- bestehende Muster im Projekt kopieren,
- nichts Neues einführen, solange es nicht nötig ist,
- dem User anschließend vorschlagen, die neue Regel hier aufzunehmen.

---

## 0. Projekt-Kontext

Dieses Projekt ist die offizielle Website der **UNEXT GMBH** in Berlin —
eines Automotive-Dienstleisters mit sechs Hauptleistungen (Unfallhilfe &
Gutachten, Autovermietung, Kfz-Werkstatt & Reparatur, Fahrzeugaufbereitung,
Kfz-Zulassungsservice, Abschleppdienst & Pannenhilfe) sowie einem
Zusatzservice für Expresslieferungen.

**Zielgruppe:** Privatkunden, Geschäftskunden sowie Fahrdienstfahrer
(Uber, Bolt, Taxi) in Berlin und Umgebung.

**Wichtigste User-Journey:** Ein Besucher findet die passende Leistung,
liest die Details und nimmt Kontakt auf (Telefon, WhatsApp oder
Kontaktformular). Jede Hürde zwischen Ankunft und Kontaktaufnahme ist
eine verlorene Anfrage.

**Besondere Anforderungen:**
- **Performance** (Ladezeit, Core Web Vitals) — der Projektname
  „Unext-Perfomance" weist darauf hin, dass Geschwindigkeit ein
  Hauptziel ist.
- **SEO** — die Seite muss bei Google für regionale Automotive-Suchen
  in Berlin gut gefunden werden.
- **Accessibility (§18)** — Business-Website mit breiter Zielgruppe,
  inklusive älterer Nutzer und Menschen in Stress-Situationen
  (Unfall, Panne). Barrierefreiheit ist nicht optional.
- **Mobile-First** — ein großer Teil der Zielgruppe kommt vom Handy,
  oft in akuten Situationen.

**Projekttyp:** Lehr-/Studienprojekt, aber mit produktivem Deployment auf Vercel. Didaktische Strenge hat Vorrang vor Entwicklerkomfort. Regeln werden nicht „pragmatisch aufgeweicht".

**Bekannte offene Punkte:** Das Kontaktformular ist UI-seitig vorhanden, aber noch nicht funktional (kein echter Mail-Versand). Backend muss nachgezogen werden, bevor die Seite produktiv beworben wird.

---

## 1. Tech-Stack (verbindlich)

- **Next.js** mit **App Router** — kein Pages Router, keine Migration zurück.
- **TypeScript** mit `strict: true` — bleibt an, keine Aufweichung.
- **React Server Components** sind der Default.
- `"use client"` wird nur gesetzt, wenn mindestens einer dieser Fälle zutrifft:
  - Browser-APIs werden benötigt (z. B. `window`, `localStorage`),
  - State, der sich durch Nutzerinteraktion ändert,
  - Event-Handler im Browser (`onClick`, `onChange`, …),
  - Client-seitige Effekte (`useEffect`) für notwendige Browser-Interaktion.
- **Styling:** **Tailwind CSS** + **shadcn/ui** als Komponenten-Grundlage.
- **Datenbank / Auth:** Nicht erforderlich. Dies ist eine statische Business-Website ohne Nutzerkonten.
- **Kontaktformular:** Aktuell als UI vorhanden unter `/kontakt`, aber **ohne funktionierende Zustellung**. Die Server Action / der Mail-Versand muss noch implementiert werden. Bis dahin gilt das Formular als offenes To-do — Änderungen an der Formular-UI müssen berücksichtigen, dass der Backend-Teil nachgezogen wird. Primäre Kontaktwege sind aktuell Telefon (030 23613927) und WhatsApp.
- **Package Manager:** **npm** (erkennbar an `package-lock.json`; nicht mit pnpm/yarn mischen).

Keine neuen Dependencies ohne ausdrückliche Freigabe des Users (siehe §13).

---

## 2. Ordnerstruktur

```
/app                           Routes, Layouts, Next.js-Spezialdateien
  /api/.../route.ts            Route-Handler (dünn, delegieren an /lib)
/components                    ALLE wiederverwendbaren UI-Komponenten
  /ui                          shadcn/ui-Komponenten (von shadcn erzeugt, dürfen angepasst werden)
/hooks                         Hooks aus Libraries (z. B. shadcn `use-toast`, `use-mobile`) — NICHT für eigene Custom Hooks
/lib                           Utilities, Konstanten, Server-Logik, Data-Access — keine UI
/types                         Geteilte TypeScript-Types
/public                        Statische Assets
/styles                        Globale Styles (Tailwind-Base, globale CSS)
```

Grundsätze:
- `app/**/page.tsx` bleibt **dünn**: holt Daten, reicht sie an Komponenten aus `/components` weiter. Keine großen UI-Blöcke direkt in `page.tsx`.
- Route-Handler (`app/api/**/route.ts`) bleiben klein und delegieren Geschäftslogik an `/lib`.
- Nichts UI-Artiges in `/lib`. Nichts Logikschweres direkt in `/app`.

---

## 3. Wiederverwendungspflicht (Kernregel)

Bevor der Agent **eine neue Komponente erstellt**, führt er folgenden Ablauf durch — **sichtbar in seiner Antwort**:

1. Er prüft `/components/ui` auf passende **shadcn/ui-Komponenten**.
2. Er prüft `/components` auf projekteigene Komponenten.
3. Er listet namentlich die geprüften Komponenten in seiner Antwort.
4. Für jede geprüfte Komponente schreibt er einen Satz, warum sie **nicht** passt oder warum Erweiterung nicht sinnvoll ist.
5. Erst dann erstellt er eine neue Komponente.

**Eine Neuerstellung ohne diese schriftliche Prüfung ist ein Regelverstoß** und muss rückgängig gemacht werden.

**Besondere Regel für shadcn/ui:**
- Existiert eine shadcn-Komponente für den Anwendungsfall (Button, Dialog, Card, Input, Select, Form, Table, …), **wird sie importiert oder via `npx shadcn add` hinzugefügt** — **nicht von Hand nachgebaut**.
- Eigene Wrapper um shadcn-Komponenten sind erlaubt, wenn sie projektspezifische Logik ergänzen. Reine Style-Duplikate einer shadcn-Komponente sind verboten.

Besonders hoch ist die Duplikatsgefahr bei diesen Komponenten-Typen — **hier wird der Scan besonders gründlich durchgeführt**:

- Buttons
- Cards
- Formular-Felder und Formular-Abschnitte
- Listen und Listeneinträge
- Dialoge / Modals
- Sections und Seiten-Abschnitte
- Navigationselemente
- Input-Varianten (Text, Select, Checkbox, …)
- Statusanzeigen (Badges, Alerts, Tags)

Gleiches gilt analog für Utilities in `/lib` und Types in `/types`: erst suchen, dann erweitern, und nur als letzter Schritt neu anlegen.

Duplikate mit fast identischer Aufgabe sind Fehler.

---

## 4. Komponenten-Regeln

- Eine Komponente pro Datei.
- Dateiname = Komponentenname in **PascalCase** (`UserCard.tsx`, nicht `user-card.tsx`). Ausnahme: shadcn-Komponenten in `/components/ui` folgen shadcn-Konvention (kebab-case-Dateinamen, PascalCase-Exports).
- Benannte Exports, keine anonymen default exports.
- Props-Typ direkt über der Komponente als `type Props = { ... }`.
- Default-Werte für Props werden in der Destrukturierung gesetzt.
- Server Components haben **keine** `"use client"`-Direktive. Client Components haben sie in **Zeile 1** (direkt nach dem Kopfkommentar).
- Server Components dürfen `async` sein und Daten direkt laden. Client Components dürfen das nicht.
- Keine inline styles, außer für echt dynamische Werte (z. B. `transform: translate(${x}px)`).

---

## 5. Kommentare (absoluter Priorität)

### 5.1 Kopfkommentar — PFLICHT

Jede `.tsx`-Datei beginnt mit einem Kopfkommentar, der in einfacher Sprache erklärt:
- wofür diese Datei da ist,
- was sie auf dem Bildschirm zeigt,
- was ein Nutzer damit tun kann.

Beispiel:
```tsx
/*
  Diese Datei ist die Profilseite.
  Sie zeigt die Daten des eingeloggten Nutzers (Name, Foto, E-Mail).
  Der Nutzer kann einige einfache Details ändern, z. B. Stadt oder Name.
*/
```

**Ausnahme:** Von shadcn unveränderte Dateien in `/components/ui` brauchen keinen eigenen Kopfkommentar, da sie aus einer Library stammen. Sobald eine shadcn-Komponente projektspezifisch angepasst wird, bekommt sie einen Kopfkommentar.

### 5.2 Inline-Kommentare — gezielt, nicht flächendeckend

Ein Kommentar wird **verlangt** über:
- Werten, die Informationen für die Seite speichern (in einfacher Sprache, nicht „useState-Hook"),
- Abläufen, die beim Laden der Seite automatisch starten,
- Funktionen, die bei Klick oder Formular-Absenden ausgeführt werden,
- großen UI-Bereichen (Liste, Formular, Modal, Navigation, …),
- komplexer oder nicht offensichtlicher Logik,
- fachlichen Entscheidungen, die man im Code allein nicht versteht.

Ein Kommentar wird **nicht** geschrieben über:
- offensichtlichem JSX (`<h1>Willkommen</h1>` braucht keinen Kommentar),
- trivialen Zuweisungen,
- Dingen, die der Dateiname oder der Variablenname schon sagt.

Kein Jargon in Kommentaren: nicht „hook", „state", „props", „reducer", „memo" — sondern z. B. „Wert, der sich ändert, wenn der Nutzer tippt".

### 5.3 Qualitäts-Test

Wer ohne Programmierkenntnis **nur die Kommentare** einer Datei liest, muss verstehen, was die Datei macht. Ist das nicht erreicht, sind die Kommentare unzureichend.

### 5.4 Aktualität

Ändert sich Verhalten, wird der dazugehörige Kommentar **im selben Schritt** aktualisiert.
Veraltete, vage oder widersprüchliche Kommentare gelten als Bug.

---

## 6. Verbote (streng)

1. **Keine HOCs** — keine Funktion, die eine Komponente annimmt und eine neue zurückgibt.
2. **Keine render props** — keine Funktion als Prop, deren Zweck das Rendern von Inhalt ist.
3. **Keine eigenen custom hooks** — keine **selbst geschriebenen** `use…`-Funktionen, die Logik kapseln. Logik bleibt in der Komponente, in der sie gebraucht wird.
   - **Erlaubt sind:** eingebaute React-Hooks (`useState`, `useEffect`, `useActionState`, …) und Library-Hooks, die mit shadcn oder anderen erlaubten Dependencies mitkommen (z. B. `use-toast`, `use-mobile` in `/hooks`).
4. **Kein `any`** — immer konkrete Typen oder `unknown` mit anschließendem Narrowing.
5. **Kein `@ts-ignore` / `@ts-expect-error`** ohne Kommentar in der Zeile darüber, der erklärt, **warum**.
6. **Kein `useEffect` zum Daten-Laden** — Daten in Server Components holen oder über Server Actions.
7. **Keine stille Änderung** an Dateien außerhalb des gestellten Tasks.
8. **Keine Nicht-Null-Assertion** `!` ohne begleitenden Kommentar.
9. **Kein direkter `localStorage`/`cookies`-Zugriff** aus Komponenten — zentral in `/lib` kapseln.

---

## 7. App-Router-Spezifika

- Für jede datenladende Seite existieren: `loading.tsx`, `error.tsx`. Wo sinnvoll: `not-found.tsx`. Diese sind **nicht optional**.
- Dynamische Routen: `[param]` / `[...catchAll]`. `params` und `searchParams` werden entsprechend der tatsächlich verwendeten Next.js-Version behandelt — in Next.js 15+ sind sie asynchron und müssen `await`-et werden. Keine Annahmen ohne Prüfung der konkreten Projekt-Version.
- **Mutationen** laufen über **Server Actions** (`"use server"`), nicht über Route-Handler, wenn sie aus einem Formular kommen.
- **Route-Handler** (`app/api/.../route.ts`) sind nur für externe Clients oder Webhooks.
- Nach Mutationen, die UI betreffen: `revalidatePath` oder `revalidateTag` aufrufen.
- `redirect()` aus Server Actions nur **außerhalb** von `try/catch` verwenden.

---

## 8. TypeScript-Regeln

- `type` bevorzugen, `interface` nur bei Deklarations-Merging.
- Geteilte Types in `/types`, lokale Types dort, wo sie gebraucht werden.
- Externe Daten (API, Formular-Input, URL-Parameter) werden **validiert**, nicht nur getypt. Validierung gehört in `/lib`.
- Keine `@ts-expect-error` als Dauerlösung — wenn vorhanden, muss ein Ticket/TODO mit Begründung dabei sein.

---

## 9. Formulare

- Formulare nutzen **Server Actions** als `action`-Prop. Kein `onSubmit` für die eigentliche Datenabgabe.
- Validierung läuft **auf dem Server** (Single Source of Truth). Client-seitige Validierung ist nur UX-Zugabe.
- Feldfehler werden als Rückgabewert der Server Action transportiert (typisiertes Ergebnis-Objekt), **nicht** über Exceptions.
- Submit-States (Loading, Disabled) über `useFormStatus` (React-Built-in, kein Custom Hook).
- Jede eingegebene Information, die gespeichert wird, wird vor dem Speichern validiert.
- Formulare funktionieren so weit wie möglich auch **ohne JavaScript** (Progressive Enhancement).
- Für UI-Bausteine (Label, Input, Button) werden die shadcn-Komponenten aus `/components/ui` genutzt.

---

## 10. Loading, Error, Empty, Not-Found

Für jede Seite, die Daten zeigt, werden **alle vier Zustände** explizit behandelt:

1. **Loading** — `loading.tsx` oder Suspense-Boundary. Kein weißer Bildschirm.
2. **Error** — `error.tsx`. Zeigt verständliche Fehlermeldung und einen Weg zurück / Retry.
3. **Empty** — wenn Daten geladen werden, aber die Liste leer ist: eigener Empty-State. **Nicht** einfach nichts rendern.
4. **Not-Found** — wenn eine Ressource nicht existiert: `notFound()` aus Next.js aufrufen, `not-found.tsx` rendert das UI.

Wird ein Zustand nicht behandelt, ist das Feature nicht fertig.

---

## 11. Naming-Konventionen

- **Komponenten-Dateien (projekteigen):** `PascalCase.tsx` (`UserCard.tsx`).
- **Komponenten-Dateien (shadcn in `/components/ui`):** shadcn-Konvention (`button.tsx`, `dialog.tsx`) — nicht umbenennen.
- **Komponenten-Exports:** PascalCase, named export.
- **Route-Dateien:** vorgegebene Namen in Kleinbuchstaben (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts`).
- **Utilities in `/lib`:** `camelCase.ts` (`formatDate.ts`).
- **Types in `/types`:** `PascalCase.ts`, Type selbst `PascalCase` (`User`, `OrderStatus`).
- **Server Actions:** `camelCase`, beginnen mit einem Verb (`createPost`, `updateProfile`, `deleteComment`). Nicht `postCreate` oder `handleForm`.
- **Boolesche Variablen/Props:** beginnen mit `is`, `has`, `can`, `should` (`isOpen`, `hasError`).
- **Event-Handler-Props:** `on<Ereignis>` (`onSubmit`, `onSelect`). Interne Funktionen: `handle<Ereignis>` (`handleSubmit`).
- **Ordnernamen** innerhalb von `/components`: Kleinbuchstaben, optional mit Bindestrich (`user-profile/`).

---

## 12. Neue Dateien — Pflichtablauf

Bevor der Agent eine neue Datei erstellt:

1. **Wiederverwendungs-Prüfung** aus §3 durchführen und das Ergebnis in der Antwort zeigen.
2. **Ein Satz Begründung**, warum die neue Datei nötig ist.
3. **Richtiger Ordner** gemäß §2 gewählt.
4. **Kopfkommentar** gemäß §5.1 geschrieben.
5. **Naming** gemäß §11 eingehalten.

Keine Dateien „auf Vorrat". Keine leeren Stub-Dateien für spätere Features.

---

## 13. Risikostufen und Pflicht-Rückfragen

Die folgenden Änderungen darf der Agent **nie eigenständig** durchführen. Vor jeder dieser Aktionen ist eine explizite Rückfrage Pflicht:

- Neue Dependency hinzufügen oder bestehende entfernen (auch `npx shadcn add <neue Komponente>` zählt als neue Dependency-Integration).
- Auth-bezogenen Code ändern (Login, Session, Berechtigungen).
- Datenmodell / DB-Schema ändern (Tabellen, Spalten, Migrationen).
- Bestehende Routen umbenennen oder löschen.
- Zentrale, projektweit genutzte Komponenten löschen oder umbenennen.
- Build-Konfiguration ändern (`next.config.*`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `components.json`).
- Öffentliche API-Verträge ändern (Request/Response-Shapes von Route-Handlern).
- Environment-Variablen hinzufügen, umbenennen oder entfernen.
- Globale Styles / Theme-Tokens ändern.

Rückfrage-Format: **Was ändert sich, warum, welche Alternativen gibt es, was ist die Empfehlung.** Dann warten.

---

## 14. Pflicht-Checks / Definition of Done

Eine Aufgabe gilt **erst** als erledigt, wenn **alle** folgenden Punkte erfüllt sind:

1. `npm run lint` läuft ohne Fehler durch.
2. `npx tsc --noEmit` läuft ohne Fehler durch.
3. `npm run build` läuft erfolgreich durch.
4. Alle geänderten und neuen `.tsx`-Dateien haben korrekte Kopfkommentare (§5.1).
5. Kommentare, deren zugehöriger Code geändert wurde, sind aktualisiert.
6. Keine TODOs im Code ohne Begründung und Kontext.
7. Keine verwaisten Dateien (angelegt, aber nirgends verwendet).
8. Die gewünschte Funktionalität ist vorhanden und wurde zumindest gedanklich gegen die User-Anforderung geprüft.
9. Der Agent hat im Chat kurz erklärt, **was** geändert wurde und **warum**.

Wird ein Punkt nicht erfüllt, ist die Arbeit nicht fertig — unabhängig davon, wie „gut" der Code aussieht.

---

## 15. Arbeitsablauf pro Task

1. **AGENTS.md gelesen** (bei Session-Start, erneut bei größerem Task).
2. **Prompt-Prüfung (§20):** Beginnt der Prompt mit `/c`? Wenn ja → §20-Ablauf statt direkter Umsetzung. Sonst weiter zu Schritt 3.
3. **Verstehen:** Task in eigenen Worten kurz zusammenfassen. Bei Unklarheit **eine** gezielte Rückfrage.
4. **Risiko-Check** (§13): Fällt der Task unter eine Pflicht-Rückfrage-Kategorie? Wenn ja → stop, rückfragen.
5. **Subagent-Delegation (§19):** Prüfen, ob ein Subagent für die Vorarbeit sinnvoll ist — wenn ja, explizit spawnen.
6. **Scannen:** Wenn UI betroffen ist → `/components/ui` und `/components` prüfen (§3) und Ergebnis zeigen.
7. **Planen:** Stichpunkt-Liste der geplanten Änderungen, bevor Code geschrieben wird.
8. **Umsetzen:** Nur die geplanten Änderungen. Kein „ich habe noch das und das mitverbessert".
9. **Prüfen:** Die neun Punkte aus §14 durchgehen.
10. **Berichten:** Kurz und präzise — welche Dateien, was, warum.

---

## 16. Kommunikationsregeln

- Jede Änderung wird kurz begründet — keine stillen Umbauten.
- Bei Zweifel: eine konkrete Rückfrage, nicht raten.
- Keine ungefragten „Verbesserungen" an Stellen außerhalb des Tasks.
- Der Agent nennt Pfade zu geänderten Dateien explizit, damit der User sie nachprüfen kann.
- Der Agent beantwortet genau das, was gefragt wurde — nicht mehr, nicht weniger.

---

## 17. Konflikte und Lücken

Gibt es für eine Situation keine Regel in diesem Dokument:
1. Im Projekt nach einem bestehenden Muster suchen und es kopieren.
2. Ist kein Muster vorhanden → konservativ entscheiden (einfachste, am wenigsten umgebaute Lösung).
3. Beim User nachfragen und vorschlagen, die neue Regel in dieses Dokument aufzunehmen.

Dieses Dokument wächst. Verbesserungen werden im selben Arbeitsschritt vorgeschlagen, in dem die Lücke aufgefallen ist.

---

## 18. Accessibility und UI-Grundqualität

Barrierefreiheit ist auch in einem kleinen Projekt Pflicht, nicht Kür. Der Agent ignoriert diese Punkte nicht mit dem Argument, das Projekt sei klein oder die Zeit knapp.

**Semantisches HTML:**
- `<button>` für Aktionen, `<a href>` für Navigation.
- Kein klickbares `<div>` für etwas, das ein Button oder Link sein soll.
- Strukturelle Elemente dort verwenden, wo sie inhaltlich passen: `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`, `<section>`.

**Überschriften:**
- Genau **ein** `<h1>` pro Seite.
- Überschriften-Hierarchie in Reihenfolge (`<h1>` → `<h2>` → `<h3>`), keine Sprünge.

**Formulare:**
- Jedes Eingabefeld hat ein sichtbares `<label>` mit korrektem `htmlFor` / `id`. shadcn stellt `Label`-Komponenten bereit — nutzen.
- Placeholder-Text ist **kein** Ersatz für ein Label.
- Fehlermeldungen sind mit dem zugehörigen Feld programmatisch verknüpft (`aria-describedby` o. ä.).

**Interaktive Elemente:**
- Icon-Buttons ohne sichtbaren Text brauchen `aria-label`.
- Alles Klickbare ist auch per Tastatur erreichbar und bedienbar (Enter, Leertaste, Tab-Reihenfolge sinnvoll).
- `tabIndex` nur bewusst verwenden, kein `tabIndex={-1}` ohne Grund auf fokussierbaren Elementen.

**Bilder:**
- Jedes `<img>` hat ein `alt`-Attribut.
- Dekorative Bilder bekommen `alt=""`, informative Bilder bekommen beschreibenden Text.

**Lesbarkeit:**
- Ausreichender Farbkontrast zwischen Text und Hintergrund.
- Interaktive Zustände (hover, focus, disabled) sind sichtbar unterscheidbar.
- Fokus-Ring wird nicht pauschal per CSS entfernt (`outline: none` nur mit Ersatz).

---

## 19. Subagents — wann der Hauptagent delegiert

Dieses Projekt nutzt **drei Subagents**, die in `.codex/agents/*.toml` definiert sind. Codex spawnt Subagents **nicht automatisch** — der Hauptagent muss sie in seiner Antwort **explizit delegieren**. Alle drei Subagents arbeiten **read-only** und berichten zurück. Der Hauptagent bleibt verantwortlich für alle schreibenden Änderungen.

### 19.1 `codebase_explorer` — muss gespawnt werden vor:
- jedem Task, bei dem eine neue Komponente erstellt werden könnte (§3),
- jedem Refactoring, das mehr als eine Datei berührt,
- jedem Task, bei dem unklar ist, was im Projekt bereits existiert.

Der Hauptagent delegiert etwa so: *„Spawn codebase_explorer: Kartiere alle Komponenten in /components und /components/ui, die sich auf [Task-Thema] beziehen. Liste Namen, Pfade, Zweck."*

Das Ergebnis des Explorers fließt direkt in die sichtbare Wiederverwendungs-Prüfung aus §3 ein.

### 19.2 `quality_reviewer` — muss gespawnt werden:
- **nach** jedem schreibenden Task, bevor der Task als abgeschlossen gemeldet wird,
- insbesondere bei Code, der §5 (Kommentare), §6 (Verbote) oder §11 (Naming) betrifft.

Der Hauptagent delegiert: *„Spawn quality_reviewer: Prüfe die geänderten Dateien [Liste] gegen AGENTS.md §5, §6, §11. Nenne konkrete Verstöße mit Dateipfad und Zeilennummer."*

Verstöße, die der Reviewer findet, werden **vor** der Fertigmeldung behoben — nicht nach.

### 19.3 `a11y_checker` — muss gespawnt werden:
- bei jedem Task, der neue UI-Elemente oder Formulare einführt,
- bei Änderungen an bestehenden interaktiven Elementen.

Der Hauptagent delegiert: *„Spawn a11y_checker: Prüfe die geänderten/neuen Komponenten gegen AGENTS.md §18. Nenne konkrete Verstöße mit Dateipfad."*

### 19.4 Ausnahmen von der Delegations-Pflicht

Bei **sehr kleinen Änderungen** (einzelne Textänderung, Tippfehler, Styling-Mikro-Tweak in einer einzigen Zeile) darf der Hauptagent auf das Spawnen verzichten. Die Pflicht-Checks aus §14 bleiben trotzdem bestehen.

### 19.5 Was Subagents NICHT tun

- Sie schreiben keine Dateien (sandbox_mode = read-only).
- Sie treffen keine Architektur-Entscheidungen.
- Sie rufen keine Server Actions oder Route Handler auf.
- Sie spawnen keine weiteren Subagents.

### 19.6 Eigene Skills

Dieses Projekt definiert eigene Skills unter `.agents/skills/`:
- **`next-router-check`** — prüft, ob für eine datenladende Route `loading.tsx`, `error.tsx` und `not-found.tsx` vorhanden sind (§10 operationalisiert). Wird typischerweise vom `quality_reviewer` aufgerufen.

---

## 20. Prompt-Prüfung mit /c

Der Hauptagent unterstützt einen expliziten Klärungsmodus, der über das Schlüsselwort `/c` am Anfang einer Nachricht des Users aktiviert wird.

### 20.1 Wann der Modus greift

- **Nur** wenn der User-Prompt mit `/c` beginnt (am Anfang der Nachricht, optional gefolgt von einem Leerzeichen oder Doppelpunkt).
- Bei normalen Prompts (ohne `/c`) arbeitet der Agent wie üblich nach §15.
- Der Agent darf den Modus **nicht ungefragt aktivieren** — der User entscheidet.

### 20.2 Pflichtablauf bei /c

Wenn `/c` erkannt wird, antwortet der Agent in **genau dieser Struktur**, bevor er irgendeinen Code schreibt oder Tool ausführt:

**1. VERSTANDEN**
Eine Zusammenfassung der Aufgabe in 1-3 Sätzen, in eigenen Worten. Keine Wiederholung des Prompts, sondern Interpretation.

**2. FEHLT**
Liste konkreter Informationslücken, die der Agent vor der Umsetzung benötigt. Pro Lücke ein Stichpunkt mit der konkreten Frage. Wenn nichts fehlt, explizit schreiben: „Keine Lücken erkannt."

**3. VORSCHLAG**
Konkrete Empfehlung des Agenten zur Umsetzung. Welche Komponenten/Dateien werden angefasst, welche Architektur-Entscheidung wird vorgeschlagen, welche Alternativen wurden verworfen. Maximal 5-8 Stichpunkte.

**4. AUSFÜHRUNG**
Der Agent hält **an dieser Stelle an** und wartet auf eine Antwort des Users. Erst wenn der User die Vorschläge bestätigt oder modifiziert hat, beginnt der Agent mit der eigentlichen Umsetzung.

### 20.3 Verhalten bei der Antwort des Users

- Bestätigung („passt", „mach so", „ja"): Agent setzt nach §15 um.
- Modifikation („mach X statt Y"): Agent integriert die Änderung, beginnt umzusetzen, **ohne** erneut die vier Schritte durchzulaufen.
- Neue Klärung nötig (User stellt Gegenfrage): Agent antwortet konkret, wartet erneut.
- Abbruch („vergiss es"): Agent stoppt, wartet auf neuen Auftrag.

### 20.4 Verzahnung mit anderen Regeln

- §13 (Risikostufen) hat **Vorrang** vor §20: Fällt der Task unter eine Pflicht-Rückfrage-Kategorie, gilt die Pflicht-Rückfrage zusätzlich, auch wenn `/c` nicht genutzt wurde.
- §19 (Subagent-Delegation): Subagents werden **nach** der `/c`-Klärung gespawnt, nicht vorher. Der `/c`-Modus selbst nutzt keine Subagents.
- §3 (Wiederverwendungspflicht): Im VORSCHLAG-Schritt nennt der Agent bereits, welche bestehenden Komponenten geprüft und ggf. wiederverwendet werden — nicht erst während der Ausführung.

### 20.5 Was /c NICHT ist

- Kein Ersatz für Pflicht-Rückfragen aus §13.
- Kein Auto-Modus, der ungefragt anspringt.
- Kein Ersatz für klare Prompts: `/c` schärft den Prompt, ersetzt ihn aber nicht.
- Keine Garantie für perfekte Ergebnisse — sondern eine strukturierte Klärungsrunde, die typische Missverständnisse vor der Umsetzung abfängt.
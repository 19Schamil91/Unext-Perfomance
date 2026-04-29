# AGENTS.md

Dieses Dokument ist fÃ¼r den Agenten verbindlich.
Der Agent liest es zu Beginn jeder Session und vor jedem grÃ¶ÃŸeren Task erneut.
Es hat Vorrang vor Gewohnheiten, Vermutungen und Standardverhalten des Agenten.

Wenn eine User-Anfrage diesem Dokument widerspricht oder wichtige Informationen fehlen:
- nicht raten,
- keine stillen Annahmen treffen,
- eine gezielte RÃ¼ckfrage stellen.

Wenn eine Regel in diesem Dokument fehlt:
- konservativ entscheiden,
- bestehende Muster im Projekt kopieren,
- nichts Neues einfÃ¼hren, solange es nicht nÃ¶tig ist,
- dem User anschlieÃŸend vorschlagen, die neue Regel hier aufzunehmen.

---

## 0. Projekt-Kontext

Dieses Projekt ist die offizielle Website der **UNEXT GMBH** in Berlin â€”
eines Automotive-Dienstleisters mit sechs Hauptleistungen (Unfallhilfe &
Gutachten, Autovermietung, Kfz-Werkstatt & Reparatur, Fahrzeugaufbereitung,
Kfz-Zulassungsservice, Abschleppdienst & Pannenhilfe) sowie einem
Zusatzservice fÃ¼r Expresslieferungen.

**Zielgruppe:** Privatkunden, GeschÃ¤ftskunden sowie Fahrdienstfahrer
(Uber, Bolt, Taxi) in Berlin und Umgebung.

**Wichtigste User-Journey:** Ein Besucher findet die passende Leistung,
liest die Details und nimmt Kontakt auf (Telefon, WhatsApp oder
Kontaktformular). Jede HÃ¼rde zwischen Ankunft und Kontaktaufnahme ist
eine verlorene Anfrage.

**Besondere Anforderungen:**
- **Performance** (Ladezeit, Core Web Vitals) â€” der Projektname
  â€žUnext-Perfomance" weist darauf hin, dass Geschwindigkeit ein
  Hauptziel ist.
- **SEO** â€” die Seite muss bei Google fÃ¼r regionale Automotive-Suchen
  in Berlin gut gefunden werden.
- **Accessibility (Â§18)** â€” Business-Website mit breiter Zielgruppe,
  inklusive Ã¤lterer Nutzer und Menschen in Stress-Situationen
  (Unfall, Panne). Barrierefreiheit ist nicht optional.
- **Mobile-First** â€” ein groÃŸer Teil der Zielgruppe kommt vom Handy,
  oft in akuten Situationen.

**Projekttyp:** Lehr-/Studienprojekt, aber mit produktivem Deployment auf Vercel. Didaktische Strenge hat Vorrang vor Entwicklerkomfort. Regeln werden nicht â€žpragmatisch aufgeweicht".

**Bekannte offene Punkte:** Das Kontaktformular ist UI-seitig vorhanden, aber noch nicht funktional (kein echter Mail-Versand). Backend muss nachgezogen werden, bevor die Seite produktiv beworben wird.

---

## 1. Tech-Stack (verbindlich)

- **Next.js** mit **App Router** â€” kein Pages Router, keine Migration zurÃ¼ck.
- **TypeScript** mit `strict: true` â€” bleibt an, keine Aufweichung.
- **React Server Components** sind der Default.
- `"use client"` wird nur gesetzt, wenn mindestens einer dieser FÃ¤lle zutrifft:
  - Browser-APIs werden benÃ¶tigt (z. B. `window`, `localStorage`),
  - State, der sich durch Nutzerinteraktion Ã¤ndert,
  - Event-Handler im Browser (`onClick`, `onChange`, â€¦),
  - Client-seitige Effekte (`useEffect`) fÃ¼r notwendige Browser-Interaktion.
- **Styling:** **Tailwind CSS** + **shadcn/ui** als Komponenten-Grundlage.
- **Datenbank / Auth:** Nicht erforderlich. Dies ist eine statische Business-Website ohne Nutzerkonten.
- **Kontaktformular:** Aktuell als UI vorhanden unter `/kontakt`, aber **ohne funktionierende Zustellung**. Die Server Action / der Mail-Versand muss noch implementiert werden. Bis dahin gilt das Formular als offenes To-do â€” Ã„nderungen an der Formular-UI mÃ¼ssen berÃ¼cksichtigen, dass der Backend-Teil nachgezogen wird. PrimÃ¤re Kontaktwege sind aktuell Telefon (030 23613927) und WhatsApp.
- **Package Manager:** **npm** (erkennbar an `package-lock.json`; nicht mit pnpm/yarn mischen).

Keine neuen Dependencies ohne ausdrÃ¼ckliche Freigabe des Users (siehe Â§13).

---

## 2. Ordnerstruktur

```
/app                           Routes, Layouts, Next.js-Spezialdateien
  /api/.../route.ts            Route-Handler (dÃ¼nn, delegieren an /lib)
/components                    ALLE wiederverwendbaren UI-Komponenten
  /ui                          shadcn/ui-Komponenten (von shadcn erzeugt, dÃ¼rfen angepasst werden)
/hooks                         Hooks aus Libraries (z. B. shadcn `use-toast`, `use-mobile`) â€” NICHT fÃ¼r eigene Custom Hooks
/lib                           Utilities, Konstanten, Server-Logik, Data-Access â€” keine UI
/types                         Geteilte TypeScript-Types
/public                        Statische Assets
/styles                        Globale Styles (Tailwind-Base, globale CSS)
```

GrundsÃ¤tze:
- `app/**/page.tsx` bleibt **dÃ¼nn**: holt Daten, reicht sie an Komponenten aus `/components` weiter. Keine groÃŸen UI-BlÃ¶cke direkt in `page.tsx`.
- Route-Handler (`app/api/**/route.ts`) bleiben klein und delegieren GeschÃ¤ftslogik an `/lib`.
- Nichts UI-Artiges in `/lib`. Nichts Logikschweres direkt in `/app`.

---

## 3. Wiederverwendungspflicht (Kernregel)

Bevor der Agent **eine neue Komponente erstellt**, fÃ¼hrt er folgenden Ablauf durch â€” **sichtbar in seiner Antwort**:

1. Er prÃ¼ft `/components/ui` auf passende **shadcn/ui-Komponenten**.
2. Er prÃ¼ft `/components` auf projekteigene Komponenten.
3. Er listet namentlich die geprÃ¼ften Komponenten in seiner Antwort.
4. FÃ¼r jede geprÃ¼fte Komponente schreibt er einen Satz, warum sie **nicht** passt oder warum Erweiterung nicht sinnvoll ist.
5. Erst dann erstellt er eine neue Komponente.

**Eine Neuerstellung ohne diese schriftliche PrÃ¼fung ist ein RegelverstoÃŸ** und muss rÃ¼ckgÃ¤ngig gemacht werden.

**Besondere Regel fÃ¼r shadcn/ui:**
- Existiert eine shadcn-Komponente fÃ¼r den Anwendungsfall (Button, Dialog, Card, Input, Select, Form, Table, â€¦), **wird sie importiert oder via `npx shadcn add` hinzugefÃ¼gt** â€” **nicht von Hand nachgebaut**.
- Eigene Wrapper um shadcn-Komponenten sind erlaubt, wenn sie projektspezifische Logik ergÃ¤nzen. Reine Style-Duplikate einer shadcn-Komponente sind verboten.

Besonders hoch ist die Duplikatsgefahr bei diesen Komponenten-Typen â€” **hier wird der Scan besonders grÃ¼ndlich durchgefÃ¼hrt**:

- Buttons
- Cards
- Formular-Felder und Formular-Abschnitte
- Listen und ListeneintrÃ¤ge
- Dialoge / Modals
- Sections und Seiten-Abschnitte
- Navigationselemente
- Input-Varianten (Text, Select, Checkbox, â€¦)
- Statusanzeigen (Badges, Alerts, Tags)

Gleiches gilt analog fÃ¼r Utilities in `/lib` und Types in `/types`: erst suchen, dann erweitern, und nur als letzter Schritt neu anlegen.

Duplikate mit fast identischer Aufgabe sind Fehler.

---

## 4. Komponenten-Regeln

- Eine Komponente pro Datei.
- Dateiname = Komponentenname in **PascalCase** (`UserCard.tsx`, nicht `user-card.tsx`). Ausnahme: shadcn-Komponenten in `/components/ui` folgen shadcn-Konvention (kebab-case-Dateinamen, PascalCase-Exports).
- Benannte Exports, keine anonymen default exports.
- Props-Typ direkt Ã¼ber der Komponente als `type Props = { ... }`.
- Default-Werte fÃ¼r Props werden in der Destrukturierung gesetzt.
- Server Components haben **keine** `"use client"`-Direktive. Client Components haben sie in **Zeile 1** (direkt nach dem Kopfkommentar).
- Server Components dÃ¼rfen `async` sein und Daten direkt laden. Client Components dÃ¼rfen das nicht.
- Keine inline styles, auÃŸer fÃ¼r echt dynamische Werte (z. B. `transform: translate(${x}px)`).

---

## 5. Kommentare (absoluter PrioritÃ¤t)

### 5.1 Kopfkommentar â€” PFLICHT

Jede `.tsx`-Datei beginnt mit einem Kopfkommentar, der in einfacher Sprache erklÃ¤rt:
- wofÃ¼r diese Datei da ist,
- was sie auf dem Bildschirm zeigt,
- was ein Nutzer damit tun kann.

Beispiel:
```tsx
/*
  Diese Datei ist die Profilseite.
  Sie zeigt die Daten des eingeloggten Nutzers (Name, Foto, E-Mail).
  Der Nutzer kann einige einfache Details Ã¤ndern, z. B. Stadt oder Name.
*/
```

**Ausnahme:** Von shadcn unverÃ¤nderte Dateien in `/components/ui` brauchen keinen eigenen Kopfkommentar, da sie aus einer Library stammen. Sobald eine shadcn-Komponente projektspezifisch angepasst wird, bekommt sie einen Kopfkommentar.

### 5.2 Inline-Kommentare â€” gezielt, nicht flÃ¤chendeckend

Ein Kommentar wird **verlangt** Ã¼ber:
- Werten, die Informationen fÃ¼r die Seite speichern (in einfacher Sprache, nicht â€žuseState-Hook"),
- AblÃ¤ufen, die beim Laden der Seite automatisch starten,
- Funktionen, die bei Klick oder Formular-Absenden ausgefÃ¼hrt werden,
- groÃŸen UI-Bereichen (Liste, Formular, Modal, Navigation, â€¦),
- komplexer oder nicht offensichtlicher Logik,
- fachlichen Entscheidungen, die man im Code allein nicht versteht.

Ein Kommentar wird **nicht** geschrieben Ã¼ber:
- offensichtlichem JSX (`<h1>Willkommen</h1>` braucht keinen Kommentar),
- trivialen Zuweisungen,
- Dingen, die der Dateiname oder der Variablenname schon sagt.

Kein Jargon in Kommentaren: nicht â€žhook", â€žstate", â€žprops", â€žreducer", â€žmemo" â€” sondern z. B. â€žWert, der sich Ã¤ndert, wenn der Nutzer tippt".

### 5.3 QualitÃ¤ts-Test

Wer ohne Programmierkenntnis **nur die Kommentare** einer Datei liest, muss verstehen, was die Datei macht. Ist das nicht erreicht, sind die Kommentare unzureichend.

### 5.4 AktualitÃ¤t

Ã„ndert sich Verhalten, wird der dazugehÃ¶rige Kommentar **im selben Schritt** aktualisiert.
Veraltete, vage oder widersprÃ¼chliche Kommentare gelten als Bug.

---

## 6. Verbote (streng)

1. **Keine HOCs** â€” keine Funktion, die eine Komponente annimmt und eine neue zurÃ¼ckgibt.
2. **Keine render props** â€” keine Funktion als Prop, deren Zweck das Rendern von Inhalt ist.
3. **Keine eigenen custom hooks** â€” keine **selbst geschriebenen** `useâ€¦`-Funktionen, die Logik kapseln. Logik bleibt in der Komponente, in der sie gebraucht wird.
   - **Erlaubt sind:** eingebaute React-Hooks (`useState`, `useEffect`, `useActionState`, â€¦) und Library-Hooks, die mit shadcn oder anderen erlaubten Dependencies mitkommen (z. B. `use-toast`, `use-mobile` in `/hooks`).
4. **Kein `any`** â€” immer konkrete Typen oder `unknown` mit anschlieÃŸendem Narrowing.
5. **Kein `@ts-ignore` / `@ts-expect-error`** ohne Kommentar in der Zeile darÃ¼ber, der erklÃ¤rt, **warum**.
6. **Kein `useEffect` zum Daten-Laden** â€” Daten in Server Components holen oder Ã¼ber Server Actions.
7. **Keine stille Ã„nderung** an Dateien auÃŸerhalb des gestellten Tasks.
8. **Keine Nicht-Null-Assertion** `!` ohne begleitenden Kommentar.
9. **Kein direkter `localStorage`/`cookies`-Zugriff** aus Komponenten â€” zentral in `/lib` kapseln.

---

## 7. App-Router-Spezifika

- FÃ¼r jede datenladende Seite existieren: `loading.tsx`, `error.tsx`. Wo sinnvoll: `not-found.tsx`. Diese sind **nicht optional**.
- Dynamische Routen: `[param]` / `[...catchAll]`. `params` und `searchParams` werden entsprechend der tatsÃ¤chlich verwendeten Next.js-Version behandelt â€” in Next.js 15+ sind sie asynchron und mÃ¼ssen `await`-et werden. Keine Annahmen ohne PrÃ¼fung der konkreten Projekt-Version.
- **Mutationen** laufen Ã¼ber **Server Actions** (`"use server"`), nicht Ã¼ber Route-Handler, wenn sie aus einem Formular kommen.
- **Route-Handler** (`app/api/.../route.ts`) sind nur fÃ¼r externe Clients oder Webhooks.
- Nach Mutationen, die UI betreffen: `revalidatePath` oder `revalidateTag` aufrufen.
- `redirect()` aus Server Actions nur **auÃŸerhalb** von `try/catch` verwenden.

---

## 8. TypeScript-Regeln

- `type` bevorzugen, `interface` nur bei Deklarations-Merging.
- Geteilte Types in `/types`, lokale Types dort, wo sie gebraucht werden.
- Externe Daten (API, Formular-Input, URL-Parameter) werden **validiert**, nicht nur getypt. Validierung gehÃ¶rt in `/lib`.
- Keine `@ts-expect-error` als DauerlÃ¶sung â€” wenn vorhanden, muss ein Ticket/TODO mit BegrÃ¼ndung dabei sein.

---

## 9. Formulare

- Formulare nutzen **Server Actions** als `action`-Prop. Kein `onSubmit` fÃ¼r die eigentliche Datenabgabe.
- Validierung lÃ¤uft **auf dem Server** (Single Source of Truth). Client-seitige Validierung ist nur UX-Zugabe.
- Feldfehler werden als RÃ¼ckgabewert der Server Action transportiert (typisiertes Ergebnis-Objekt), **nicht** Ã¼ber Exceptions.
- Submit-States (Loading, Disabled) Ã¼ber `useFormStatus` (React-Built-in, kein Custom Hook).
- Jede eingegebene Information, die gespeichert wird, wird vor dem Speichern validiert.
- Formulare funktionieren so weit wie mÃ¶glich auch **ohne JavaScript** (Progressive Enhancement).
- FÃ¼r UI-Bausteine (Label, Input, Button) werden die shadcn-Komponenten aus `/components/ui` genutzt.

---

## 10. Loading, Error, Empty, Not-Found

FÃ¼r jede Seite, die Daten zeigt, werden **alle vier ZustÃ¤nde** explizit behandelt:

1. **Loading** â€” `loading.tsx` oder Suspense-Boundary. Kein weiÃŸer Bildschirm.
2. **Error** â€” `error.tsx`. Zeigt verstÃ¤ndliche Fehlermeldung und einen Weg zurÃ¼ck / Retry.
3. **Empty** â€” wenn Daten geladen werden, aber die Liste leer ist: eigener Empty-State. **Nicht** einfach nichts rendern.
4. **Not-Found** â€” wenn eine Ressource nicht existiert: `notFound()` aus Next.js aufrufen, `not-found.tsx` rendert das UI.

Wird ein Zustand nicht behandelt, ist das Feature nicht fertig.

---

## 11. Naming-Konventionen

- **Komponenten-Dateien (projekteigen):** `PascalCase.tsx` (`UserCard.tsx`).
- **Komponenten-Dateien (shadcn in `/components/ui`):** shadcn-Konvention (`button.tsx`, `dialog.tsx`) â€” nicht umbenennen.
- **Komponenten-Exports:** PascalCase, named export.
- **Route-Dateien:** vorgegebene Namen in Kleinbuchstaben (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts`).
- **Utilities in `/lib`:** `camelCase.ts` (`formatDate.ts`).
- **Types in `/types`:** `PascalCase.ts`, Type selbst `PascalCase` (`User`, `OrderStatus`).
- **Server Actions:** `camelCase`, beginnen mit einem Verb (`createPost`, `updateProfile`, `deleteComment`). Nicht `postCreate` oder `handleForm`.
- **Boolesche Variablen/Props:** beginnen mit `is`, `has`, `can`, `should` (`isOpen`, `hasError`).
- **Event-Handler-Props:** `on<Ereignis>` (`onSubmit`, `onSelect`). Interne Funktionen: `handle<Ereignis>` (`handleSubmit`).
- **Ordnernamen** innerhalb von `/components`: Kleinbuchstaben, optional mit Bindestrich (`user-profile/`).

---

## 12. Neue Dateien â€” Pflichtablauf

Bevor der Agent eine neue Datei erstellt:

1. **Wiederverwendungs-PrÃ¼fung** aus Â§3 durchfÃ¼hren und das Ergebnis in der Antwort zeigen.
2. **Ein Satz BegrÃ¼ndung**, warum die neue Datei nÃ¶tig ist.
3. **Richtiger Ordner** gemÃ¤ÃŸ Â§2 gewÃ¤hlt.
4. **Kopfkommentar** gemÃ¤ÃŸ Â§5.1 geschrieben.
5. **Naming** gemÃ¤ÃŸ Â§11 eingehalten.

Keine Dateien â€žauf Vorrat". Keine leeren Stub-Dateien fÃ¼r spÃ¤tere Features.

---

## 13. Risikostufen und Pflicht-RÃ¼ckfragen

Die folgenden Ã„nderungen darf der Agent **nie eigenstÃ¤ndig** durchfÃ¼hren. Vor jeder dieser Aktionen ist eine explizite RÃ¼ckfrage Pflicht:

- Neue Dependency hinzufÃ¼gen oder bestehende entfernen (auch `npx shadcn add <neue Komponente>` zÃ¤hlt als neue Dependency-Integration).
- Auth-bezogenen Code Ã¤ndern (Login, Session, Berechtigungen).
- Datenmodell / DB-Schema Ã¤ndern (Tabellen, Spalten, Migrationen).
- Bestehende Routen umbenennen oder lÃ¶schen.
- Zentrale, projektweit genutzte Komponenten lÃ¶schen oder umbenennen.
- Build-Konfiguration Ã¤ndern (`next.config.*`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `components.json`).
- Ã–ffentliche API-VertrÃ¤ge Ã¤ndern (Request/Response-Shapes von Route-Handlern).
- Environment-Variablen hinzufÃ¼gen, umbenennen oder entfernen.
- Globale Styles / Theme-Tokens Ã¤ndern.

RÃ¼ckfrage-Format: **Was Ã¤ndert sich, warum, welche Alternativen gibt es, was ist die Empfehlung.** Dann warten.

---

## 14. Pflicht-Checks / Definition of Done

Eine Aufgabe gilt **erst** als erledigt, wenn **alle** folgenden Punkte erfÃ¼llt sind:

1. `npm run lint` lÃ¤uft ohne Fehler durch.
2. `npx tsc --noEmit` lÃ¤uft ohne Fehler durch.
3. `npm run build` lÃ¤uft erfolgreich durch.
4. Alle geÃ¤nderten und neuen `.tsx`-Dateien haben korrekte Kopfkommentare (Â§5.1).
5. Kommentare, deren zugehÃ¶riger Code geÃ¤ndert wurde, sind aktualisiert.
6. Keine TODOs im Code ohne BegrÃ¼ndung und Kontext.
7. Keine verwaisten Dateien (angelegt, aber nirgends verwendet).
8. Die gewÃ¼nschte FunktionalitÃ¤t ist vorhanden und wurde zumindest gedanklich gegen die User-Anforderung geprÃ¼ft.
9. Der Agent hat im Chat kurz erklÃ¤rt, **was** geÃ¤ndert wurde und **warum**.

Wird ein Punkt nicht erfÃ¼llt, ist die Arbeit nicht fertig â€” unabhÃ¤ngig davon, wie â€žgut" der Code aussieht.

---

## 15. Arbeitsablauf pro Task

1. **AGENTS.md gelesen** (bei Session-Start, erneut bei grÃ¶ÃŸerem Task).
2. **Prompt-PrÃ¼fung (Â§20):** Beginnt der Prompt mit `/c`? Wenn ja â†’ Â§20-Ablauf statt direkter Umsetzung. Sonst weiter zu Schritt 3.
3. **Verstehen:** Task in eigenen Worten kurz zusammenfassen. Bei Unklarheit **eine** gezielte RÃ¼ckfrage.
4. **Risiko-Check** (Â§13): FÃ¤llt der Task unter eine Pflicht-RÃ¼ckfrage-Kategorie? Wenn ja â†’ stop, rÃ¼ckfragen.
5. **Subagent-Delegation (Â§19):** PrÃ¼fen, ob ein Subagent fÃ¼r die Vorarbeit sinnvoll ist â€” wenn ja, explizit spawnen.
6. **Scannen:** Wenn UI betroffen ist â†’ `/components/ui` und `/components` prÃ¼fen (Â§3) und Ergebnis zeigen.
7. **Planen:** Stichpunkt-Liste der geplanten Ã„nderungen, bevor Code geschrieben wird.
8. **Umsetzen:** Nur die geplanten Ã„nderungen. Kein â€žich habe noch das und das mitverbessert".
9. **PrÃ¼fen:** Die neun Punkte aus Â§14 durchgehen.
10. **Berichten:** Kurz und prÃ¤zise â€” welche Dateien, was, warum.

---

## 16. Kommunikationsregeln

- Jede Ã„nderung wird kurz begrÃ¼ndet â€” keine stillen Umbauten.
- Bei Zweifel: eine konkrete RÃ¼ckfrage, nicht raten.
- Keine ungefragten â€žVerbesserungen" an Stellen auÃŸerhalb des Tasks.
- Der Agent nennt Pfade zu geÃ¤nderten Dateien explizit, damit der User sie nachprÃ¼fen kann.
- Der Agent beantwortet genau das, was gefragt wurde â€” nicht mehr, nicht weniger.

---

## 17. Konflikte und LÃ¼cken

Gibt es fÃ¼r eine Situation keine Regel in diesem Dokument:
1. Im Projekt nach einem bestehenden Muster suchen und es kopieren.
2. Ist kein Muster vorhanden â†’ konservativ entscheiden (einfachste, am wenigsten umgebaute LÃ¶sung).
3. Beim User nachfragen und vorschlagen, die neue Regel in dieses Dokument aufzunehmen.

Dieses Dokument wÃ¤chst. Verbesserungen werden im selben Arbeitsschritt vorgeschlagen, in dem die LÃ¼cke aufgefallen ist.

---

## 18. Accessibility und UI-GrundqualitÃ¤t

Barrierefreiheit ist auch in einem kleinen Projekt Pflicht, nicht KÃ¼r. Der Agent ignoriert diese Punkte nicht mit dem Argument, das Projekt sei klein oder die Zeit knapp.

**Semantisches HTML:**
- `<button>` fÃ¼r Aktionen, `<a href>` fÃ¼r Navigation.
- Kein klickbares `<div>` fÃ¼r etwas, das ein Button oder Link sein soll.
- Strukturelle Elemente dort verwenden, wo sie inhaltlich passen: `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`, `<section>`.

**Ãœberschriften:**
- Genau **ein** `<h1>` pro Seite.
- Ãœberschriften-Hierarchie in Reihenfolge (`<h1>` â†’ `<h2>` â†’ `<h3>`), keine SprÃ¼nge.

**Formulare:**
- Jedes Eingabefeld hat ein sichtbares `<label>` mit korrektem `htmlFor` / `id`. shadcn stellt `Label`-Komponenten bereit â€” nutzen.
- Placeholder-Text ist **kein** Ersatz fÃ¼r ein Label.
- Fehlermeldungen sind mit dem zugehÃ¶rigen Feld programmatisch verknÃ¼pft (`aria-describedby` o. Ã¤.).

**Interaktive Elemente:**
- Icon-Buttons ohne sichtbaren Text brauchen `aria-label`.
- Alles Klickbare ist auch per Tastatur erreichbar und bedienbar (Enter, Leertaste, Tab-Reihenfolge sinnvoll).
- `tabIndex` nur bewusst verwenden, kein `tabIndex={-1}` ohne Grund auf fokussierbaren Elementen.

**Bilder:**
- Jedes `<img>` hat ein `alt`-Attribut.
- Dekorative Bilder bekommen `alt=""`, informative Bilder bekommen beschreibenden Text.

**Lesbarkeit:**
- Ausreichender Farbkontrast zwischen Text und Hintergrund.
- Interaktive ZustÃ¤nde (hover, focus, disabled) sind sichtbar unterscheidbar.
- Fokus-Ring wird nicht pauschal per CSS entfernt (`outline: none` nur mit Ersatz).

---

## 19. Subagents â€” wann der Hauptagent delegiert

Dieses Projekt nutzt **drei Subagents**, die in `.codex/agents/*.toml` definiert sind. Codex spawnt Subagents **nicht automatisch** â€” der Hauptagent muss sie in seiner Antwort **explizit delegieren**. Alle drei Subagents arbeiten **read-only** und berichten zurÃ¼ck. Der Hauptagent bleibt verantwortlich fÃ¼r alle schreibenden Ã„nderungen.

### 19.1 `codebase_explorer` â€” muss gespawnt werden vor:
- jedem Task, bei dem eine neue Komponente erstellt werden kÃ¶nnte (Â§3),
- jedem Refactoring, das mehr als eine Datei berÃ¼hrt,
- jedem Task, bei dem unklar ist, was im Projekt bereits existiert.

Der Hauptagent delegiert etwa so: *â€žSpawn codebase_explorer: Kartiere alle Komponenten in /components und /components/ui, die sich auf [Task-Thema] beziehen. Liste Namen, Pfade, Zweck."*

Das Ergebnis des Explorers flieÃŸt direkt in die sichtbare Wiederverwendungs-PrÃ¼fung aus Â§3 ein.

### 19.2 `quality_reviewer` â€” muss gespawnt werden:
- **nach** jedem schreibenden Task, bevor der Task als abgeschlossen gemeldet wird,
- insbesondere bei Code, der Â§5 (Kommentare), Â§6 (Verbote) oder Â§11 (Naming) betrifft.

Der Hauptagent delegiert: *â€žSpawn quality_reviewer: PrÃ¼fe die geÃ¤nderten Dateien [Liste] gegen AGENTS.md Â§5, Â§6, Â§11. Nenne konkrete VerstÃ¶ÃŸe mit Dateipfad und Zeilennummer."*

VerstÃ¶ÃŸe, die der Reviewer findet, werden **vor** der Fertigmeldung behoben â€” nicht nach.

### 19.3 `a11y_checker` â€” muss gespawnt werden:
- bei jedem Task, der neue UI-Elemente oder Formulare einfÃ¼hrt,
- bei Ã„nderungen an bestehenden interaktiven Elementen.

Der Hauptagent delegiert: *â€žSpawn a11y_checker: PrÃ¼fe die geÃ¤nderten/neuen Komponenten gegen AGENTS.md Â§18. Nenne konkrete VerstÃ¶ÃŸe mit Dateipfad."*

### 19.4 Ausnahmen von der Delegations-Pflicht

Bei **sehr kleinen Ã„nderungen** (einzelne TextÃ¤nderung, Tippfehler, Styling-Mikro-Tweak in einer einzigen Zeile) darf der Hauptagent auf das Spawnen verzichten. Die Pflicht-Checks aus Â§14 bleiben trotzdem bestehen.

### 19.5 Was Subagents NICHT tun

- Sie schreiben keine Dateien (sandbox_mode = read-only).
- Sie treffen keine Architektur-Entscheidungen.
- Sie rufen keine Server Actions oder Route Handler auf.
- Sie spawnen keine weiteren Subagents.

### 19.6 Eigene Skills

Dieses Projekt definiert eigene Skills unter `.agents/skills/`:
- **`next-router-check`** â€” prÃ¼ft, ob fÃ¼r eine datenladende Route `loading.tsx`, `error.tsx` und `not-found.tsx` vorhanden sind (Â§10 operationalisiert). Wird typischerweise vom `quality_reviewer` aufgerufen.

---

## 20. Prompt-PrÃ¼fung mit /c

Der Hauptagent unterstÃ¼tzt einen expliziten KlÃ¤rungsmodus, der Ã¼ber das SchlÃ¼sselwort `/c` am Anfang einer Nachricht des Users aktiviert wird.

### 20.1 Wann der Modus greift

- **Nur** wenn der User-Prompt mit `/c` beginnt (am Anfang der Nachricht, optional gefolgt von einem Leerzeichen oder Doppelpunkt).
- Bei normalen Prompts (ohne `/c`) arbeitet der Agent wie Ã¼blich nach Â§15.
- Der Agent darf den Modus **nicht ungefragt aktivieren** â€” der User entscheidet.

### 20.2 Pflichtablauf bei /c

Wenn `/c` erkannt wird, antwortet der Agent in **genau dieser Struktur**, bevor er irgendeinen Code schreibt oder Tool ausfÃ¼hrt:

**1. VERSTANDEN**
Eine Zusammenfassung der Aufgabe in 1-3 SÃ¤tzen, in eigenen Worten. Keine Wiederholung des Prompts, sondern Interpretation.

**2. FEHLT**
Liste konkreter InformationslÃ¼cken, die der Agent vor der Umsetzung benÃ¶tigt. Pro LÃ¼cke ein Stichpunkt mit der konkreten Frage. Wenn nichts fehlt, explizit schreiben: â€žKeine LÃ¼cken erkannt."

**3. VORSCHLAG**
Konkrete Empfehlung des Agenten zur Umsetzung. Welche Komponenten/Dateien werden angefasst, welche Architektur-Entscheidung wird vorgeschlagen, welche Alternativen wurden verworfen. Maximal 5-8 Stichpunkte.

**4. AUSFÃœHRUNG**
Der Agent hÃ¤lt **an dieser Stelle an** und wartet auf eine Antwort des Users. Erst wenn der User die VorschlÃ¤ge bestÃ¤tigt oder modifiziert hat, beginnt der Agent mit der eigentlichen Umsetzung.

### 20.3 Verhalten bei der Antwort des Users

- BestÃ¤tigung (â€žpasst", â€žmach so", â€žja"): Agent setzt nach Â§15 um.
- Modifikation (â€žmach X statt Y"): Agent integriert die Ã„nderung, beginnt umzusetzen, **ohne** erneut die vier Schritte durchzulaufen.
- Neue KlÃ¤rung nÃ¶tig (User stellt Gegenfrage): Agent antwortet konkret, wartet erneut.
- Abbruch (â€žvergiss es"): Agent stoppt, wartet auf neuen Auftrag.

### 20.4 Verzahnung mit anderen Regeln

- Â§13 (Risikostufen) hat **Vorrang** vor Â§20: FÃ¤llt der Task unter eine Pflicht-RÃ¼ckfrage-Kategorie, gilt die Pflicht-RÃ¼ckfrage zusÃ¤tzlich, auch wenn `/c` nicht genutzt wurde.
- Â§19 (Subagent-Delegation): Subagents werden **nach** der `/c`-KlÃ¤rung gespawnt, nicht vorher. Der `/c`-Modus selbst nutzt keine Subagents.
- Â§3 (Wiederverwendungspflicht): Im VORSCHLAG-Schritt nennt der Agent bereits, welche bestehenden Komponenten geprÃ¼ft und ggf. wiederverwendet werden â€” nicht erst wÃ¤hrend der AusfÃ¼hrung.

### 20.5 Was /c NICHT ist

- Kein Ersatz fÃ¼r Pflicht-RÃ¼ckfragen aus Â§13.
- Kein Auto-Modus, der ungefragt anspringt.
- Kein Ersatz fÃ¼r klare Prompts: `/c` schÃ¤rft den Prompt, ersetzt ihn aber nicht.
- Keine Garantie fÃ¼r perfekte Ergebnisse â€” sondern eine strukturierte KlÃ¤rungsrunde, die typische MissverstÃ¤ndnisse vor der Umsetzung abfÃ¤ngt.

---

## 21. DECISIONS.md â€” Pflege von Architektur-Entscheidungen

Das Projekt fÃ¼hrt eine separate `DECISIONS.md` im Repo-Root, die wichtige Architektur- und Werkzeug-Entscheidungen festhÃ¤lt (ADR-Light-Format).

### 21.1 Wann der Agent einen Eintrag vorschlÃ¤gt

Nach Abschluss eines Tasks **schlÃ¤gt der Agent einen neuen Eintrag** fÃ¼r DECISIONS.md vor, wenn der Task eines der folgenden Kriterien erfÃ¼llt:

- Wahl zwischen mehreren technischen Optionen wurde getroffen (z. B. Library A statt B, Cloud statt lokal).
- Ein neues Werkzeug, eine neue Library oder ein neues Pattern wurde eingefÃ¼hrt.
- Eine bestehende Entscheidung wurde revidiert.
- Eine projektweit wirkende Konvention wurde festgelegt oder geÃ¤ndert.

**Kein Vorschlag** bei: Bug-Fixes, Tippfehlern, kleinen UI-Anpassungen, neuen Feature-Komponenten ohne Architektur-Wirkung.

### 21.2 Format des Vorschlags

Der Agent schlÃ¤gt den Eintrag in **genau dem Format** vor, das in DECISIONS.md bereits verwendet wird:

- **Entscheidung:** was wurde entschieden.
- **Kontext:** warum war eine Entscheidung nÃ¶tig.
- **BegrÃ¼ndung:** warum so und nicht anders.
- **Konsequenz:** was bedeutet das im Alltag.
- **Status:** Aktiv / Revidiert durch Entscheidung N / Geplante Revision.

Maximal 10â€“15 Zeilen pro Eintrag. Keine Prosa, keine Wiederholung des Code-Diffs.

### 21.3 Der User entscheidet

Der Agent **schreibt nicht selbst** in DECISIONS.md. Er prÃ¤sentiert den Vorschlag im Chat. Der User antwortet:

- â€žÃ¼bernehmen" â†’ Agent fÃ¼gt den Eintrag unten an die DECISIONS.md an.
- â€žweglassen" â†’ kein Eintrag, Task gilt als zu trivial fÃ¼r DECISIONS.md.
- â€žÃ¤ndere X zu Y" â†’ Agent passt Vorschlag an, fragt erneut, Ã¼bernimmt nach BestÃ¤tigung.

### 21.4 Reihenfolge in DECISIONS.md

Neue EintrÃ¤ge werden **unten angefÃ¼gt**, alte EintrÃ¤ge bleiben unverÃ¤ndert. Wird eine alte Entscheidung revidiert, bekommt sie den Status â€žRevidiert durch Entscheidung N", und die neue Entscheidung wird als separater Eintrag unten angelegt.
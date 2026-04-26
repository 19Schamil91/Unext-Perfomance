# DECISIONS.md

Kurz dokumentierte Architektur- und Werkzeug-Entscheidungen für das UNEXT-Projekt.
Hält fest **was** entschieden wurde, **warum**, und **was es im Alltag bedeutet**.

Format: ADR-Light (Architecture Decision Records, vereinfacht).
Reihenfolge: chronologisch, jüngste Entscheidung unten.

---

## 1. AGENTS.md als zentrales Regelwerk für KI-Coding-Agents

**Entscheidung:** Eine einzige `AGENTS.md` im Projekt-Root, die alle Regeln für KI-Agents (Codex, ggf. später Cursor/Claude Code) enthält — statt verteilter Konfigurationen pro Tool.

**Kontext:** Mehrere KI-Tools nutzen mittlerweile dieselbe AGENTS.md-Konvention. Tool-spezifische Regeln (z. B. Cursor Rules in `.cursor/rules/`) wären portabilitätsfeindlich.

**Begründung:** Ein Dokument, eine Wahrheit. Wenn ich morgen das Tool wechsle, kommen meine Regeln mit. Außerdem zwingt mich AGENTS.md, präzise zu formulieren — Tool-spezifische Configs verleiten zu Prosa.

**Konsequenz:** AGENTS.md ist die Pflichtlektüre vor jedem Task. 20 nummerierte Abschnitte, klare Regeln statt Empfehlungen, harte Verbote statt Soft-Hinweise.

**Status:** Aktiv. Dokument wächst mit dem Projekt mit (siehe §17).

---

## 2. shadcn/ui + Tailwind CSS als UI-Grundlage

**Entscheidung:** Komponenten-Basis ist shadcn/ui, Styling-System ist Tailwind CSS.

**Kontext:** Die UNEXT-Website ist eine Business-Site mit hohen Anforderungen an Performance, Accessibility und Wartbarkeit. Eigene Komponenten von Grund auf zu bauen, wäre verschwendete Zeit.

**Begründung:** shadcn/ui liefert Accessibility, Konsistenz und Theme-Fähigkeit als Default. Tailwind macht Styling lokal, ohne CSS-Datei-Hopping. Beide werden aktiv gepflegt und sind Industry-Standard.

**Konsequenz:**
- Vor jeder neuen Komponente wird `/components/ui` auf passende shadcn-Komponente geprüft (AGENTS.md §3).
- Reine Style-Duplikate von shadcn-Komponenten sind verboten — Wrapper mit Logik sind erlaubt.
- Hooks aus shadcn (`use-mobile`, `use-toast`) gelten als erlaubte Library-Hooks, nicht als verbotene eigene Custom Hooks (§6.3).

**Status:** Aktiv.

---

## 3. Subagent-Architektur mit drei spezialisierten read-only Agents

**Entscheidung:** Drei dedizierte Codex-Subagents übernehmen Spezialaufgaben:
- `codebase_explorer` — kartiert bestehende Komponenten vor Neuerstellung
- `quality_reviewer` — prüft Code gegen AGENTS.md-Regeln (§5, §6, §11, §14)
- `a11y_checker` — prüft UI gegen Accessibility-Checkliste (§18)

Alle drei sind **read-only** und schreiben nichts. Schreibhoheit bleibt beim Hauptagenten.

**Kontext:** Ein einzelner Agent mit allen Aufgaben verliert in komplexen Prompts den Fokus. Spezialisierte Subagents reduzieren Halluzinationsrisiko und ermöglichen klare Verantwortlichkeiten.

**Begründung:**
- Klare Rollentrennung erleichtert Debugging („welcher Agent hat das übersehen?")
- Read-only verhindert Doppel-Schreiber, die widersprüchliche Änderungen produzieren
- Architektur ist tool-übergreifend (`.codex/agents/*.toml`), nicht in AGENTS.md-Prosa versteckt

**Konsequenz:** Hauptagent muss Subagents **explizit** spawnen (§19) — Codex spawnt nicht automatisch. Bei `/c`-Klärung (§20) werden Subagents erst nach der Klärung aufgerufen.

**Status:** Aktiv. Drei Subagents getestet und produktiv (siehe Entscheidung 4).

---

## 4. Cloud-Modell (gpt-5.4-mini) statt lokales Modell für Subagents

**Entscheidung:** Subagents nutzen `gpt-5.4-mini` über OpenAI Cloud. Lokale Ollama-Modelle wurden getestet und verworfen.

**Kontext:** Ursprünglich war geplant, Subagents lokal mit Ollama zu betreiben (qwen2.5-coder:3b für leichte Aufgaben, :7b für Reviews). Ziel: Token-Kostenfreie Subagent-Läufe. Hardware-Voraussetzung: 16 GB RAM auf dem Entwicklungs-Laptop.

**Begründung:** Tests zeigten klare Limitationen der lokalen Modelle:
- `qwen2.5-coder:3b` hat einen fiktiven Tool-Aufruf (`check_code_snippet_against_18_Agents.md`) generiert statt einen Bericht zu liefern.
- `qwen2.5-coder:7b` hat im `codebase_explorer`-Test halluzinierte Komponenten zurückgegeben (`Button.jsx`, `RegistrationForm.jsx` — existieren nicht im Projekt; falsche Endung `.jsx` statt `.tsx`; falsche Pfade `src/...`).

Test-Vergleich nach Cloud-Umstellung mit identischen Inputs:
- `a11y_checker`: 5/5 Verstöße korrekt gefunden, alle mit Zeilennummern.
- `codebase_explorer`: 79 reale Komponenten korrekt nach Thema gefiltert (16 shadcn + 2 projekteigene).
- `quality_reviewer`: 6/6 AGENTS.md-Verstöße erkannt, jeweils mit korrektem Paragraph.

**Konsequenz:**
- Subagent-Läufe kosten Tokens (geschätzt 1–5 USD über die gesamte Projektlaufzeit).
- gpt-5.4-mini verbraucht ca. 30 % der Quota von gpt-5.4 — wirtschaftlich für Subagents geeignet.
- Hauptagent nutzt weiterhin das Standard-Cloud-Modell (typischerweise gpt-5.4).
- Ollama wurde nach erfolgreichem Cloud-Test deinstalliert.

**Status:** Aktiv. Reaktivierung lokaler Modelle wäre denkbar, sobald Hardware ≥ 32 GB RAM verfügbar ist und Modelle ab `qwen2.5-coder:14b` getestet werden können.

---

## 5. `/c`-Modus für strukturierte Prompt-Klärung

**Entscheidung:** Schlüsselwort `/c` am Anfang eines User-Prompts aktiviert einen vierstufigen Klärungs-Workflow (VERSTANDEN → FEHLT → VORSCHLAG → AUSFÜHRUNG), bevor der Agent mit der Umsetzung beginnt.

**Kontext:** Schlechte Prompts produzieren schlechten Code. Vage Anweisungen wie „mach das Formular besser" werden vom Agenten oft sofort interpretiert und umgesetzt — mit ungewollten Ergebnissen, die im Nachhinein refactored werden müssen.

**Begründung:**
- Erzwingt Anforderungs-Klärung vor Umsetzung (Standard im Beratungs- und Software-Engineering)
- User entscheidet pro Prompt, ob Klärung nötig ist (kein generelles Korsett)
- Schlüsselwort `/c` ist kurz tippbar und nicht versehentlich auslösbar
- Macht typische Missverständnisse vor der Code-Änderung sichtbar

**Konsequenz:** Bei `/c` antwortet der Agent strukturiert und hält an, bis der User bestätigt oder modifiziert. Ohne `/c` läuft der normale Arbeitsablauf nach §15. Der Modus verzahnt sich mit §13 (Risikostufen haben Vorrang), §19 (Subagents werden erst nach Klärung gespawnt) und §3 (Wiederverwendungsprüfung wird im VORSCHLAG mitgenannt).

**Status:** Aktiv. Erster Test (Kontaktformular-Verbesserung) hat alle vier Schritte korrekt durchlaufen.

---

## Hinweise zur Pflege dieses Dokuments

- Eine neue Entscheidung wird als **neuer Eintrag unten** angefügt, alte Einträge bleiben unverändert (historische Wahrheit).
- Wird eine Entscheidung später revidiert, bekommt der alte Eintrag den Status „Revidiert durch Entscheidung N" und ein neuer Eintrag dokumentiert die neue Entscheidung.
- Faustregel: Eintrag schreiben, sobald eine Entscheidung über mehr als einen Arbeits-Schritt nachwirkt.
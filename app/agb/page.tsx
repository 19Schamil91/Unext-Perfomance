import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "AGB | UNEXT GMBH Berlin",
  description: "Allgemeine Geschäftsbedingungen der UNEXT GMBH Berlin.",
}

export default function AGBPage() {
  return (
    <LegalPageLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <section className="space-y-8 text-muted-foreground">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen
            der UNEXT GMBH (nachfolgend „Anbieter") und dem Kunden. Maßgeblich ist die zum
            Zeitpunkt des Vertragsschlusses gültige Fassung.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">§ 2 Vertragsschluss</h2>
          <p>
            [Platzhalter für Regelungen zum Vertragsschluss, z.B. bei Anfragen für Gutachten,
            Mietwagen, Werkstattleistungen oder Detailing]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">§ 3 Leistungen</h2>
          <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Unfallgutachten</h3>
          <p>
            [Platzhalter für spezifische Regelungen zu Unfallgutachten und dem UNFALLX-Service]
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">3.2 Autovermietung</h3>
          <p>
            [Platzhalter für spezifische Mietbedingungen, Kaution, Haftung, Kilometerbegrenzung]
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">3.3 Werkstattservice</h3>
          <p>
            [Platzhalter für Regelungen zu Reparaturen, Gewährleistung, Kostenvoranschlägen]
          </p>

          <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">3.4 Detailing</h3>
          <p>
            [Platzhalter für Regelungen zu Aufbereitungsleistungen, Haftung bei Vorschäden]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">§ 4 Preise und Zahlung</h2>
          <p>
            [Platzhalter für Regelungen zu Preisen, Zahlungsbedingungen, Fälligkeit]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">§ 5 Haftung</h2>
          <p>
            [Platzhalter für Haftungsregelungen und -beschränkungen]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">§ 6 Widerrufsrecht</h2>
          <p>
            [Platzhalter für Widerrufsbelehrung für Verbraucher, falls zutreffend]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">§ 7 Datenschutz</h2>
          <p>
            Informationen zum Datenschutz finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            § 8 Schlussbestimmungen
          </h2>
          <p>
            [Platzhalter für Gerichtsstand, anwendbares Recht, Salvatorische Klausel]
          </p>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground/70 italic">
            Stand: [Datum – Platzhalter]
            <br />
            Diese AGB sind ein Platzhalter und müssen vor der Veröffentlichung durch rechtlich
            geprüfte Allgemeine Geschäftsbedingungen ersetzt werden.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  )
}

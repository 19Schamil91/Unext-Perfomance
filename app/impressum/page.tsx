import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Impressum | UNEXT GMBH Berlin",
  description: "Impressum und rechtliche Angaben der UNEXT GMBH Berlin.",
}

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum">
      <section className="space-y-6 text-muted-foreground">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            UNEXT GMBH
            <br />
            Lübarser Str. 25
            <br />
            13435 Berlin
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Vertreten durch</h3>
          <p>[Name der Geschäftsführung – Platzhalter]</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Kontakt</h3>
          <p>
            Telefon: 0176 64365185
            <br />
            E-Mail: info@unext.de
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Registereintrag</h3>
          <p>
            Eintragung im Handelsregister.
            <br />
            Registergericht: [Amtsgericht – Platzhalter]
            <br />
            Registernummer: [HRB Nummer – Platzhalter]
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            [USt-IdNr. – Platzhalter]
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h3>
          <p>
            [Name – Platzhalter]
            <br />
            Lübarser Str. 25
            <br />
            13435 Berlin
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">EU-Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle
          </h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground/70 italic">
            Stand: [Datum – Platzhalter]
            <br />
            Dieser Impressumstext ist ein Platzhalter und muss vor der Veröffentlichung durch
            einen rechtlich geprüften Text ersetzt werden.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  )
}

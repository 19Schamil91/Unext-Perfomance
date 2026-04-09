import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | UNEXT GMBH Berlin",
  description: "Datenschutzerklärung der UNEXT GMBH Berlin.",
}

export default function DatenschutzPage() {
  return (
    <LegalPageLayout title="Datenschutzerklärung">
      <section className="space-y-8 text-muted-foreground">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="text-lg font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            2. Verantwortliche Stelle
          </h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <br />
            UNEXT GMBH
            <br />
            Lübarser Str. 25
            <br />
            13435 Berlin
            <br />
            <br />
            Telefon: 0176 64365185
            <br />
            E-Mail: info@unext.de
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            3. Datenerfassung auf dieser Website
          </h2>
          <h3 className="text-lg font-semibold text-foreground mb-2">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
            dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
            Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Cookies</h3>
          <p>
            Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf
            Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser
            Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">4. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
            <li>Berichtigung unrichtiger Daten zu verlangen</li>
            <li>Löschung Ihrer Daten zu verlangen</li>
            <li>Einschränkung der Verarbeitung zu verlangen</li>
            <li>Datenübertragbarkeit zu verlangen</li>
            <li>Widerspruch gegen die Verarbeitung einzulegen</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            5. Analyse-Tools und Werbung
          </h2>
          <p>
            [Platzhalter für Informationen zu verwendeten Analyse-Tools wie Google Analytics,
            falls zutreffend]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">6. SSL-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
            dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.
          </p>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground/70 italic">
            Stand: [Datum – Platzhalter]
            <br />
            Diese Datenschutzerklärung ist ein Platzhalter und muss vor der Veröffentlichung
            durch einen DSGVO-konformen, rechtlich geprüften Text ersetzt werden.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  )
}

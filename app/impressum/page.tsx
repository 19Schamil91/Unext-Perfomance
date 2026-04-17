import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal-page-layout"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).legal.impressum

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GMBH Berlin`,
    "Impressum der Unext GmbH gem\u00e4\u00df \u00a7 5 DDG.",
    "/impressum"
  )
}

export default async function ImpressumPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).legal.impressum

  return (
    <LegalPageLayout title={t.title} showPlaceholderAlert={false}>
      <section className="space-y-8 text-muted-foreground">
        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            {"Angaben gem\u00e4\u00df \u00a7 5 DDG"}
          </h2>
          <address className="not-italic leading-8">
            Unext GmbH
            <br />
            {"L\u00fcbarser Str. 25"}
            <br />
            13435 Berlin
            <br />
            Deutschland
          </address>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            {"Vertreten durch den Gesch\u00e4ftsf\u00fchrer"}
          </h2>
          <p>Selimchan Kasumov</p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href="tel:+493023613927" className="text-primary hover:underline">
              030 23613927
            </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:unext.gmbh@gmail.com" className="text-primary hover:underline">
              unext.gmbh@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Registereintrag</h2>
          <p className="whitespace-pre-line">
            Eintragung im Handelsregister
            {"\n"}Registergericht: Berlin (Charlottenburg)
            {"\n"}Registernummer: HRB 265091 B
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            {"Umsatzsteuer-Identifikationsnummer gem\u00e4\u00df \u00a7 27a UStG"}
          </h2>
          <p>DE369354416</p>
        </div>
      </section>
    </LegalPageLayout>
  )
}

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
  const phoneLabel =
    locale === "ru" ? "\u0422\u0435\u043b\u0435\u0444\u043e\u043d:" : locale === "en" ? "Phone:" : "Telefon:"
  const emailLabel =
    locale === "ru" ? "E-mail:" : locale === "en" ? "Email:" : "E-Mail:"

  return (
    <LegalPageLayout title={t.title} showPlaceholderAlert={false}>
      <section className="space-y-8 text-muted-foreground">
        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">{t.sections.companyDetails}</h2>
          <address className="not-italic leading-8">
            {t.companyName}
            <br />
            {t.street}
            <br />
            {t.city}
            <br />
            {t.country}
          </address>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">{t.representedByTitle}</h2>
          <p>{t.representedByName}</p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">{t.sections.contact}</h2>
          <p>
            {phoneLabel}{" "}
            <a href="tel:+493023613927" className="text-primary hover:underline">
              030 23613927
            </a>
            <br />
            {emailLabel}{" "}
            <a href="mailto:info@unext.de" className="text-primary hover:underline">
              info@unext.de
            </a>
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">{t.sections.register}</h2>
          <p className="whitespace-pre-line">
            {t.registerText}
            {"\n"}
            {t.registerCourt}
            {"\n"}
            {t.registerNumber}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">{t.vatTitle}</h2>
          <p>{t.vatNumber}</p>
        </div>
      </section>
    </LegalPageLayout>
  )
}

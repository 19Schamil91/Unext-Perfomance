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
    `${t.title} - UNEXT GMBH Berlin.`,
    "/impressum"
  )
}

export default async function ImpressumPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).legal.impressum

  return (
    <LegalPageLayout title={t.title}>
      <section className="space-y-6 text-muted-foreground">
        <div>
          <h2 className="mb-4 text-xl font-semibold text-foreground">{t.sections.companyDetails}</h2>
          <p>
            UNEXT GMBH
            <br />
            Lübarser Str. 25
            <br />
            13435 Berlin
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{t.sections.representedBy}</h3>
          <p>{t.representedByPlaceholder}</p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{t.sections.contact}</h3>
          <p>
            Telefon: 030 23613927
            <br />
            E-Mail: info@unext.de
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{t.sections.register}</h3>
          <p className="whitespace-pre-line">{t.registerPlaceholder}</p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{t.sections.vat}</h3>
          <p className="whitespace-pre-line">{t.vatPlaceholder}</p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{t.sections.responsibility}</h3>
          <p className="whitespace-pre-line">{t.responsibilityPlaceholder}</p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{t.sections.euDispute}</h3>
          <p>
            {t.euDisputeText}{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            {t.euDisputeSuffix}
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{t.sections.consumerDispute}</h3>
          <p>{t.consumerDisputeText}</p>
        </div>

        <div className="border-t border-border pt-8">
          <p className="whitespace-pre-line text-sm italic text-muted-foreground/70">{t.note}</p>
        </div>
      </section>
    </LegalPageLayout>
  )
}

import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal-page-layout"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).legal.privacy

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GMBH Berlin`,
    `${t.title} - UNEXT GMBH Berlin.`,
    "/datenschutz"
  )
}

export default async function DatenschutzPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).legal.privacy

  return (
    <LegalPageLayout title={t.title}>
      <section className="space-y-8 text-muted-foreground">
        {t.sections.map((section) => (
          <div key={("title" in section ? section.title : section.subtitle) ?? "section"}>
            {"title" in section && section.title && (
              <h2 className="mb-4 text-title-fluid font-semibold text-foreground">{section.title}</h2>
            )}
            {"subtitle" in section && section.subtitle && (
              <h3 className="mb-2 text-title-fluid font-semibold text-foreground">{section.subtitle}</h3>
            )}
            <p className="measure-intro whitespace-pre-line">{section.content}</p>
            {"list" in section && section.list ? (
              <ul className="measure-intro mt-2 list-inside list-disc space-y-1">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}

        <div className="border-t border-border pt-8">
          <p className="measure-intro whitespace-pre-line text-sm italic text-muted-foreground/70">{t.note}</p>
        </div>
      </section>
    </LegalPageLayout>
  )
}

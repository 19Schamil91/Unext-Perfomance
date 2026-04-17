import type { Metadata } from "next"
import Link from "next/link"
import { LegalPageLayout } from "@/components/legal-page-layout"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).legal.terms

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GMBH Berlin`,
    `${t.title} - UNEXT GMBH Berlin.`,
    "/agb"
  )
}

export default async function AGBPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).legal.terms

  return (
    <LegalPageLayout title={t.title}>
      <section className="space-y-8 text-muted-foreground">
        {t.sections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-4 text-title-fluid font-semibold text-foreground">{section.title}</h2>
            {"content" in section && section.content ? (
              <p className="measure-intro">
                {section.content}
                {"linkLabel" in section && section.linkLabel ? (
                  <>
                    {" "}
                    <Link href="/datenschutz" className="text-primary hover:underline">
                      {section.linkLabel}
                    </Link>
                    .
                  </>
                ) : null}
              </p>
            ) : null}

            {"subsections" in section && section.subsections ? (
              <div className="mt-4 space-y-4">
                {section.subsections.map((subsection) => (
                  <div key={subsection.title}>
                    <h3 className="mb-2 text-title-fluid font-semibold text-foreground">{subsection.title}</h3>
                    <p className="measure-intro">{subsection.content}</p>
                  </div>
                ))}
              </div>
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

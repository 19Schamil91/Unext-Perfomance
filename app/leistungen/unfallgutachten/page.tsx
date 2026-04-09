import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.accident

  return buildPageMetadata(
    locale,
    `${t.title} | UNFALLX | UNEXT GMBH Berlin`,
    t.description,
    "/leistungen/unfallgutachten"
  )
}

export default async function UnfallgutachtenPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.accident

  return (
    <>
      <SiteHeader />
      <ServicePageLayout
        title={t.title}
        subtitle={t.subtitle}
        badge={t.badge}
        description={t.description}
        image="/images/service-accident.webp"
        imageClassName="object-cover object-[58%_center] md:object-[60%_center]"
        phone="0176 64365185"
        benefits={t.benefits}
        services={t.services}
        whyChoose={t.whyChoose}
        faqs={t.faqs}
        formTitle={t.formTitle}
        serviceName="unfallgutachten"
      />
      <SiteFooter />
    </>
  )
}

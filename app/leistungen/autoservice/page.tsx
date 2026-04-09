import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.workshop

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GMBH Berlin`,
    t.description,
    "/leistungen/autoservice"
  )
}

export default async function AutoservicePage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.workshop

  return (
    <>
      <SiteHeader />
      <ServicePageLayout
        title={t.title}
        subtitle={t.subtitle}
        description={t.description}
        image="/images/service-workshop.webp"
        imageClassName="object-cover object-[60%_center] md:object-[64%_center]"
        phone="0177 7883206"
        benefits={t.benefits}
        services={t.services}
        whyChoose={t.whyChoose}
        faqs={t.faqs}
        formTitle={t.formTitle}
        serviceName="autoservice"
      />
      <SiteFooter />
    </>
  )
}

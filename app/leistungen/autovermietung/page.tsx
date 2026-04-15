import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.rental

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GMBH Berlin`,
    t.description,
    "/leistungen/autovermietung"
  )
}

export default async function AutovermietungPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.rental

  return (
    <>
      <SiteHeader />
      <ServicePageLayout
        title={t.title}
        subtitle={t.subtitle}
        description={t.description}
        image="/images/service-rental.webp"
        imageClassName="object-cover object-[24%_center] sm:object-[30%_center] md:object-[46%_center]"
        phone="0174 4292900"
        benefits={t.benefits}
        services={t.services}
        whyChoose={t.whyChoose}
        faqs={t.faqs}
        formTitle={t.formTitle}
        serviceName="autovermietung"
      />
      <SiteFooter />
    </>
  )
}

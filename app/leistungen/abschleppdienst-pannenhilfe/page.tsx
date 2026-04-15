import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.towing

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GMBH Berlin`,
    t.description,
    "/leistungen/abschleppdienst-pannenhilfe"
  )
}

export default async function AbschleppdienstPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.towing

  return (
    <>
      <SiteHeader />
      <ServicePageLayout
        title={t.title}
        subtitle={t.subtitle}
        description={t.description}
        image="/images/service-towing.webp"
        imageClassName="object-cover object-[58%_center] md:object-[60%_center]"
        heroActions={[
          { label: t.ctaLabel, href: "#abschleppdienst-anfrage", icon: "message" },
          { label: getTranslations(locale).serviceDetail.layout.contactCta, href: "/kontakt" },
        ]}
        bottomActions={[
          { label: t.ctaLabel, href: "#abschleppdienst-anfrage", icon: "message" },
          { label: getTranslations(locale).serviceDetail.layout.contactCta, href: "/kontakt" },
        ]}
        contactNote={t.contactHint}
        benefits={t.benefits}
        services={t.services}
        whyChoose={t.whyChoose}
        faqs={t.faqs}
        formTitle={t.formTitle}
        serviceName="abschleppdienst"
        formFields={{ vehicle: true, subject: true, date: false }}
      />
      <SiteFooter />
    </>
  )
}

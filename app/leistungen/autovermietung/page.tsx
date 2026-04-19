import type { Metadata } from "next"
import { DevPageCompareProvider, DevPageCompareView } from "@/components/dev-page-compare"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const rentalTitleLines = {
  de: ["Autovermietung"],
  en: ["Car Rental"],
  ru: ["Прокат авто"],
} satisfies Record<Locale, readonly string[]>

const rentalDescriptionLines = {
  de: [
    "Ob nach einem Unfall, während der Werkstattzeit oder für besondere Anlässe -",
    "wir haben das passende Fahrzeug für Sie. Schnell verfügbar, fair im Preis",
    "und immer in Top-Zustand.",
  ],
  en: [
    "Whether after an accident, during workshop time or for special occasions -",
    "we have the right vehicle for you. Available quickly, fairly priced",
    "and always in excellent condition.",
  ],
  ru: [
    "После ДТП, на время ремонта или для особых случаев -",
    "у нас есть подходящий автомобиль для вас. Быстро доступно, по честной цене",
    "и всегда в отличном состоянии.",
  ],
} satisfies Record<Locale, readonly string[]>

const rentalServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const rentalWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

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
  const beforeLayout = (
    <ServicePageLayout
      title={t.title}
      subtitle={t.subtitle}
      description={t.description}
      image="/images/service-rental.webp"
      imageClassName="object-cover object-[36%_28%] sm:object-[42%_38%] md:object-[46%_center]"
      phone="0174 4292900"
      benefits={t.benefits}
      services={t.services}
      whyChoose={t.whyChoose}
      faqs={t.faqs}
      formTitle={t.formTitle}
      serviceName="autovermietung"
    />
  )

  const afterLayout = (
    <ServicePageLayout
      title={t.title}
      subtitle={t.subtitle}
      description={t.description}
      image="/images/service-rental.webp"
      imageClassName="object-cover object-[36%_28%] sm:object-[42%_38%] md:object-[46%_center]"
      phone="0174 4292900"
      benefits={t.benefits}
      services={t.services}
      whyChoose={t.whyChoose}
      faqs={t.faqs}
      formTitle={t.formTitle}
      serviceName="autovermietung"
      balancedTypography
      singleLineHeadings
      titleLines={rentalTitleLines[locale]}
      descriptionLines={rentalDescriptionLines[locale]}
      serviceTitleLineBreaks={rentalServiceTitleLineBreaks[locale]}
      whyChooseTitleLineBreaks={rentalWhyTitleLineBreaks[locale]}
    />
  )

  return (
    <>
      <SiteHeader />
      {process.env.NODE_ENV !== "production" ? (
        <DevPageCompareProvider>
          <DevPageCompareView before={beforeLayout} after={afterLayout} />
        </DevPageCompareProvider>
      ) : (
        afterLayout
      )}
      <SiteFooter />
    </>
  )
}

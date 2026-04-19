import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const accidentTitleLines = {
  de: ["Unfallhilfe & Gutachten"],
  en: ["Accident Reports", "& Immediate Assistance"],
  ru: ["Экспертиза ДТП", "и срочная помощь"],
} satisfies Record<Locale, readonly string[]>

const accidentDescriptionLines = {
  de: [
    "Ein Unfall ist immer stressig. Wir nehmen Ihnen die Last ab:",
    "Unsere zertifizierten Gutachter erstellen unabhängige Kfz-Gutachten",
    "und unterstützen Sie kompetent bei der gesamten Schadensabwicklung - schnell, professionell und fair.",
  ],
  en: [
    "An accident is always stressful. We take the burden off your shoulders:",
    "Our certified experts prepare independent vehicle reports and support you",
    "throughout the claims process - fast, professional and fair.",
  ],
  ru: [
    "ДТП всегда связано со стрессом. Мы берем нагрузку на себя:",
    "наши сертифицированные эксперты готовят независимую автоэкспертизу",
    "и профессионально сопровождают вас в процессе урегулирования ущерба - быстро, честно и надежно.",
  ],
} satisfies Record<Locale, readonly string[]>

const accidentServiceTitleLineBreaks = {
  de: {
    "Soforthilfe nach Unfall": ["Soforthilfe", "nach Unfall"],
    "Rechtsberatung (Vermittlung)": ["Rechtsberatung", "(Vermittlung)"],
  },
  en: {
    "Immediate assistance after an accident": ["Immediate assistance", "after an accident"],
  },
  ru: {
    "Срочная помощь после ДТП": ["Срочная помощь", "после ДТП"],
    "Документация повреждений": ["Документация", "повреждений"],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

const accidentWhyTitleLineBreaks = {
  de: {
    "Zertifizierte Gutachter": ["Zertifizierte", "Gutachter"],
    "Schnelle Terminvergabe": ["Schnelle", "Terminvergabe"],
  },
  en: {
    "Certified experts": ["Certified", "experts"],
    "Fast appointments": ["Fast", "appointments"],
  },
  ru: {
    "Сертифицированные эксперты": ["Сертифицированные", "эксперты"],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

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
  const afterLayout = (
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
      balancedTypography
      titleLines={accidentTitleLines[locale]}
      descriptionLines={accidentDescriptionLines[locale]}
      serviceTitleLineBreaks={accidentServiceTitleLineBreaks[locale]}
      whyChooseTitleLineBreaks={accidentWhyTitleLineBreaks[locale]}
    />
  )

  return (
    <>
      <SiteHeader />
      {afterLayout}
      <SiteFooter />
    </>
  )
}

/*
  Diese Datei ist die Detailseite fuer Unfallhilfe & Gutachten.
  Sie zeigt den Leistungsbereich mit Einleitung, Vorteilen, Servicekarten, Gruenden, Fragen und dem Anfrageformular.
  Besucher koennen die Inhalte lesen und direkt Kontakt per Telefon, WhatsApp oder Formular aufnehmen.
*/
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
    "und unterstützen Sie kompetent bei der gesamten Schadensabwicklung",
    "- schnell, professionell und fair.",
  ],
  en: [
    "An accident is always stressful. We take the burden off your shoulders:",
    "Our certified experts prepare independent vehicle reports",
    "and support you throughout the claims process",
    "- fast, professional and fair.",
  ],
  ru: [
    "ДТП всегда связано со стрессом. Мы берем нагрузку на себя:",
    "наши сертифицированные эксперты готовят независимую автоэкспертизу",
    "и профессионально сопровождают вас в процессе урегулирования ущерба",
    "- быстро, честно и надежно.",
  ],
} satisfies Record<Locale, readonly string[]>

const accidentServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const accidentServiceDescriptionLines = {
  de: {
    "Unfallgutachten": [
      "Professionelle und unabhängige",
      "Schadensbewertung nach Verkehrsunfällen",
      "für Versicherungen und Gerichte.",
    ],
    "Soforthilfe nach Unfall": [
      "Schnelle Unterstützung direkt nach dem Unfall",
      "– wir kümmern uns um alles Notwendige.",
    ],
    "Schadensabwicklung": [
      "Komplette Unterstützung bei der",
      "Kommunikation mit Versicherungen",
      "und allen beteiligten Parteien.",
    ],
    "Wertgutachten": [
      "Fahrzeugbewertung für Kauf,",
      "Verkauf oder Versicherungszwecke",
      "durch unsere Experten.",
    ],
  },
  en: {
    "Immediate accident help": [
      "Fast support right after the accident",
      "- we take care of everything necessary.",
    ],
    "Claims handling": [
      "Complete support in communication",
      "with insurers and all parties involved.",
    ],
    "Legal referral": [
      "Referral to competent partners",
      "for legal support in damage cases.",
    ],
  },
  ru: {
    "Экспертиза ДТП": [
      "Профессиональная и независимая",
      "оценка повреждений после ДТП",
      "для страховых компаний и суда.",
    ],
    "Срочная помощь после ДТП": [
      "Быстрая поддержка сразу после аварии",
      "- мы берем на себя все необходимое.",
    ],
    "Урегулирование ущерба": [
      "Полная поддержка в коммуникации",
      "со страховыми компаниями",
      "и всеми участниками процесса.",
    ],
    "Оценка стоимости": [
      "Оценка автомобиля для покупки,",
      "продажи или страховых целей",
      "от наших специалистов.",
    ],
    "Направление к юристам": [
      "Связь с компетентными партнерами",
      "для юридической поддержки",
      "по делам о возмещении ущерба.",
    ],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

const accidentWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const accidentWhyDescriptionLines = {
  de: {
    "Zertifizierte Gutachter": [
      "Unsere Gutachter sind geprüft und zertifiziert",
      "- für rechtssichere Gutachten.",
    ],
    "Unabhängigkeit": [
      "Wir arbeiten unabhängig von Versicherungen",
      "- Ihre Interessen stehen an erster Stelle.",
    ],
    "Komplettservice": [
      "Von der ersten Beratung bis zur finalen Abwicklung",
      "- alles aus einer Hand.",
    ],
  },
  en: {
    "Certified experts": [
      "Our experts are tested and certified",
      "- for legally reliable reports.",
    ],
    "Independence": [
      "We work independently from insurance companies",
      "- your interests come first.",
    ],
    "Full service": [
      "From the initial consultation to the final settlement",
      "- everything from one source.",
    ],
  },
  ru: {
    "Сертифицированные\u00A0эксперты": [
      "Наши специалисты прошли проверку",
      "и сертификацию",
      "- для юридически надежных заключений.",
    ],
    "Быстрая запись": [
      "Мы знаем, что время важно.",
      "Краткосрочные записи у нас стандарт.",
    ],
    "Независимость": [
      "Мы работаем независимо от страховых компаний",
      "- ваши интересы на первом месте.",
    ],
    "Полный сервис": [
      "От первой консультации",
      "до окончательного урегулирования",
      "- все из одних рук.",
    ],
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
      serviceDescriptionLines={accidentServiceDescriptionLines[locale]}
      whyChooseTitleLineBreaks={accidentWhyTitleLineBreaks[locale]}
      whyChooseDescriptionLines={accidentWhyDescriptionLines[locale]}
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

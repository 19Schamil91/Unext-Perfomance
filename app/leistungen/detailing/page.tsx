/*
  Diese Datei ist die Detailseite fuer Aufbereitung & Pflege.
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

/** Geschütztes Leerzeichen: verhindert unruhige Silbentrennung bei Fachbegriffen (Wortlaut unverändert). */
const NB = "\u00A0"

const detailingTitleLines = {
  de: ["Aufbereitung & Pflege"],
  en: ["Detailing"],
  ru: ["Детейлинг"],
} satisfies Record<Locale, readonly string[]>

const detailingDescriptionLines = {
  de: [
    "Ihr Fahrzeug verdient das Beste.",
    "Unsere Detailing-Experten bringen Ihr Auto wieder auf Hochglanz",
    `- mit professionellen${NB}Methoden und Premium-Produkten`,
    "für ein Ergebnis, das begeistert.",
  ],
  en: [
    "Your vehicle deserves the best.",
    "Our detailing experts restore your car's shine",
    `using professional${NB}methods and premium${NB}products`,
    "for results that impress.",
  ],
  ru: [
    "Ваш автомобиль заслуживает лучшего.",
    "Наши специалисты по детейлингу вернут ему блеск",
    "с помощью профессиональных методов и премиальных продуктов",
    "- результат действительно впечатляет.",
  ],
} satisfies Record<Locale, readonly string[]>

const detailingServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const detailingWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const detailingServiceDescriptionLines = {
  de: {
    Lackaufbereitung: [
      "Professionelle Lackkorrektur, Politur",
      "und Versiegelung für den perfekten Glanz.",
    ],
    "Außenreinigung Premium": [
      "Intensive Außenwäsche inklusive Felgen,",
      "Reifen und Scheiben - handgewaschen.",
    ],
    "Innenreinigung Premium": [
      "Tiefenreinigung des Interieurs inklusive",
      "Polster, Leder und aller Oberflächen.",
    ],
    Keramikversiegelung: [
      "Langanhaltender Lackschutz mit",
      "hochwertiger Keramikbeschichtung.",
    ],
    Motorwäsche: [
      "Schonende Reinigung des Motorraums",
      "für ein gepflegtes Gesamtbild.",
    ],
    Komplettaufbereitung: [
      "Das Rundum-Paket: innen, außen",
      "und alle Details - wie neu.",
    ],
  },
  en: {
    "Paint correction": [
      "Professional paint correction, polishing",
      "and sealing for the perfect shine.",
    ],
    "Premium exterior cleaning": [
      "Intensive exterior wash including wheels, tires and windows - washed by hand.",
    ],
    "Premium interior cleaning": [
      "Deep cleaning of the interior including",
      "upholstery, leather and all surfaces.",
    ],
    "Ceramic coating": [
      "Long-lasting paint protection with",
      "high-quality ceramic coating.",
    ],
    "Engine bay cleaning": [
      "Gentle engine bay cleaning",
      "for a well-maintained overall appearance.",
    ],
    "Full detailing package": [
      "The complete package: inside, outside",
      "and every detail - like new.",
    ],
  },
  ru: {
    "Коррекция лака": [
      "Профессиональная коррекция лака,",
      "полировка и защита",
      "для идеального блеска.",
    ],
    "Премиальная мойка кузова": [
      "Интенсивная мойка кузова, включая диски,",
      "шины и стекла - вручную.",
    ],
    "Премиальная чистка салона": [
      "Глубокая очистка салона, включая",
      "обивку, кожу и все поверхности.",
    ],
    "Керамическое покрытие": [
      "Долговременная защита лака с помощью",
      "качественного керамического покрытия.",
    ],
    "Мойка моторного отсека": [
      "Бережная очистка моторного отсека",
      "для аккуратного общего вида.",
    ],
    "Полный пакет детейлинга": [
      "Комплексный пакет: салон, кузов",
      "и все детали - как новый.",
    ],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

const detailingWhyChooseDescriptionLines = {
  de: {
    "Echte Expertise": [
      "Unsere Detailer sind geschult und arbeiten",
      `mit professionellen${NB}Methoden.`,
    ],
    "Premium Produkte": [
      "Wir verwenden ausschließlich hochwertige",
      `Produkte renommierter${NB}Marken.`,
    ],
    Werterhalt: [
      "Regelmäßiges Detailing erhält",
      `den Wert Ihres${NB}Fahrzeugs langfristig.`,
    ],
    "Individuelle Pakete": [
      "Von der Grundreinigung bis zur Komplettaufbereitung",
      "- wir haben das richtige Paket.",
    ],
  },
  en: {
    "Real expertise": [
      "Our detailers are trained and work",
      "with professional methods.",
    ],
    "Premium products": [
      "We use only high-quality products",
      "from renowned brands.",
    ],
    "Value retention": [
      "Regular detailing helps preserve your vehicle's value",
      "over the long term.",
    ],
    "Individual packages": [
      "From basic cleaning to full detailing",
      "- we have the right package.",
    ],
  },
  ru: {
    "Настоящая экспертиза": [
      "Наши специалисты обучены и работают",
      "профессиональными методами.",
    ],
    "Премиальные продукты": [
      "Мы используем только качественные продукты",
      "известных брендов.",
    ],
    "Сохранение стоимости": [
      "Регулярный детейлинг помогает надолго сохранить",
      "стоимость вашего автомобиля.",
    ],
    "Индивидуальные пакеты": [
      "От базовой чистки до полного детейлинга",
      "- у нас есть подходящий пакет.",
    ],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.detailing

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GMBH Berlin`,
    t.description,
    "/leistungen/detailing"
  )
}

export default async function DetailingPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.detailing
  const afterLayout = (
    <ServicePageLayout
      title={t.title}
      subtitle={t.subtitle}
      description={t.description}
      image="/images/service-detailing.webp"
      imageClassName="object-cover object-[58%_center] md:object-[60%_center]"
      phone="0177 6691006"
      benefits={t.benefits}
      services={t.services}
      whyChoose={t.whyChoose}
      faqs={t.faqs}
      formTitle={t.formTitle}
      serviceName="detailing"
      balancedTypography
      singleLineHeadings
      titleLines={detailingTitleLines[locale]}
      descriptionLines={detailingDescriptionLines[locale]}
      serviceTitleLineBreaks={detailingServiceTitleLineBreaks[locale]}
      serviceDescriptionLines={detailingServiceDescriptionLines[locale]}
      whyChooseTitleLineBreaks={detailingWhyTitleLineBreaks[locale]}
      whyChooseDescriptionLines={detailingWhyChooseDescriptionLines[locale]}
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

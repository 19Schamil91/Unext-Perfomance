import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const workshopTitleLines = {
  de: ["Kfz-Werkstatt & Reparatur"],
  en: ["Workshop & Service"],
  ru: ["Сервис и мастерская"],
} satisfies Record<Locale, readonly string[]>

const workshopDescriptionLines = {
  de: [
    "Unser erfahrenes Werkstatt-Team kümmert sich professionell um Ihr Fahrzeug.",
    "Von der routinemäßigen Wartung bis zur Reparatur bieten wir zuverlässigen Service mit Qualitätsgarantie.",
  ],
  en: [
    "Our experienced workshop team takes professional care of your vehicle.",
    "From routine maintenance to repairs, we offer reliable service with a quality guarantee.",
  ],
  ru: [
    "Наша опытная команда мастерской профессионально позаботится о вашем автомобиле.",
    "От планового обслуживания до ремонта мы предлагаем надежный сервис с гарантией качества.",
  ],
} satisfies Record<Locale, readonly string[]>

const workshopServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const workshopServiceDescriptionLines = {
  de: {
    "Ölwechsel & Inspektion": ["Regelmäßiger Ölwechsel und umfassende", "Inspektionen nach Herstellervorgaben."],
    "Reifenwechsel & Einlagerung": ["Professioneller Reifenservice inklusive", "Auswuchten und optionaler Einlagerung."],
    "Dashcam-Einbau": ["Fachgerechter Einbau von Dashcams - sauber", "verlegt und professionell angeschlossen."],
    "Bremsenservice": ["Prüfung, Wartung und Austausch von", "Bremsbelägen und Bremsscheiben."],
    "Allgemeine Reparaturen": ["Von der Auspuffanlage bis zur Elektrik -", "wir reparieren zuverlässig."],
    "Fahrzeugdiagnose": ["Moderne Diagnosetechnik für die schnelle", "Fehlersuche und -behebung."],
  },
  en: {
    "Oil change & inspection": [
      "Regular oil changes and comprehensive",
      "inspections according to manufacturer",
      "specifications.",
    ],
    "Tire service & storage": ["Professional tire service including balancing", "and optional storage."],
    "Dashcam installation": ["Professional dashcam installation - neatly wired", "and correctly connected."],
    "Brake service": ["Inspection, maintenance and replacement", "of brake pads and discs."],
    "General repairs": ["From exhaust systems to electrical work -", "we repair reliably."],
    "Vehicle diagnostics": ["Modern diagnostic technology for fast", "troubleshooting and repair."],
  },
  ru: {
    "Замена масла и инспекция": ["Регулярная замена масла и комплексные проверки", "по требованиям производителя."],
    "Шиномонтаж и хранение": ["Профессиональный шинный сервис,", "включая балансировку", "и при необходимости хранение."],
    "Установка видеорегистратора": [
      "Профессиональная установка",
      "видеорегистратора - аккуратная проводка",
      "и надежное подключение.",
    ],
    "Тормозной сервис": ["Проверка, обслуживание и замена", "тормозных колодок и дисков."],
    "Общий ремонт": ["От выхлопной системы до электрики -", "мы ремонтируем надежно."],
    "Диагностика автомобиля": ["Современная диагностика для быстрого", "поиска и устранения неисправностей."],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

const workshopWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const workshopWhyDescriptionLines = {
  de: {
    "Qualifiziertes Team": ["Unser Werkstatt-Team besteht aus erfahrenen", "und zertifizierten Fachleuten."],
    "Transparente Kostenvoranschläge": ["Sie wissen vorab, was auf Sie zukommt -", "keine bösen Überraschungen."],
    "Schneller Service": ["Viele Arbeiten erledigen wir noch am gleichen Tag."],
    "Alle Marken willkommen": ["Wir betreuen Fahrzeuge", "aller Hersteller und Marken."],
  },
  en: {
    "Qualified team": ["Our workshop team consists of experienced", "and certified specialists."],
    "Transparent estimates": ["You know in advance what to expect -", "no unpleasant surprises."],
    "Fast service": ["We complete many jobs on the same day."],
    "All makes welcome": ["We service vehicles from all manufacturers and brands."],
  },
  ru: {
    "Квалифицированная команда": ["Наша команда состоит из опытных", "и сертифицированных специалистов."],
    "Прозрачные сметы": ["Вы заранее знаете, чего ожидать -", "никаких неприятных сюрпризов."],
    "Быстрый сервис": ["Многие работы мы выполняем в тот же день."],
    "Принимаем все марки": ["Мы обслуживаем автомобили", "всех производителей и брендов."],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

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
  const afterLayout = (
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
      balancedTypography
      singleLineHeadings
      titleLines={workshopTitleLines[locale]}
      descriptionLines={workshopDescriptionLines[locale]}
      serviceTitleLineBreaks={workshopServiceTitleLineBreaks[locale]}
      serviceDescriptionLines={workshopServiceDescriptionLines[locale]}
      whyChooseTitleLineBreaks={workshopWhyTitleLineBreaks[locale]}
      whyChooseDescriptionLines={workshopWhyDescriptionLines[locale]}
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

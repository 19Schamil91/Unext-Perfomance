import type { Metadata } from "next"
import { DevPageCompareProvider, DevPageCompareView } from "@/components/dev-page-compare"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const NB = "\u00A0"

const registrationTitleLines = {
  de: ["Kfz-Zulassungsservice"],
  en: ["Vehicle Registration Service"],
  ru: ["Сервис регистрации авто"],
} satisfies Record<Locale, readonly string[]>

const registrationDescriptionLines = {
  de: [
    "Wir übernehmen die Anmeldung, Abmeldung und weitere Formalitäten rund um Ihr Fahrzeug schnell, zuverlässig und unkompliziert.",
    `So sparen Sie Zeit, vermeiden unnötige Wartezeiten und müssen sich nicht selbst um${NB}Behördengänge kümmern.`,
  ],
  en: [
    "We handle registration, deregistration and other formalities for your vehicle quickly, reliably and without complications.",
    "This saves you time, avoids unnecessary waiting and means you do not have to deal with the authorities yourself.",
  ],
  ru: [
    "Мы берем на себя регистрацию, снятие с учета и другие формальности, связанные с вашим автомобилем, быстро, надежно и без лишних сложностей.",
    "Так вы экономите время, избегаете ожидания и вам не нужно самостоятельно посещать ведомства.",
  ],
} satisfies Record<Locale, readonly string[]>

const registrationServiceTitleLineBreaks = {
  de: {
    "Abmeldung bei Verkauf oder Stilllegung": ["Abmeldung bei Verkauf", "oder Stilllegung"],
    "Wunschkennzeichen & Unterlagenservice": ["Wunschkennzeichen &", "Unterlagenservice"],
  },
  en: {
    "Vehicle registration & deregistration": ["Vehicle registration", "& deregistration"],
    "Deregistration for sale or decommissioning": ["Deregistration for sale", "or decommissioning"],
    "Custom plates & document service": ["Custom plates &", "document service"],
  },
  ru: {
    "Постановка и снятие с учета": ["Постановка и", "снятие с учета"],
    "Снятие с учета при продаже или консервации": ["Снятие с учета", "при продаже или консервации"],
    "Страховой сервис с eVB": ["Страховой сервис", "с eVB"],
    "Выбор номера и сервис документов": ["Выбор номера", "и сервис документов"],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

const registrationWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const registrationServiceDescriptionLines = {
  de: {
    "Kfz-An- & Abmeldung": ["Komplette Anmeldung oder Abmeldung", "Ihres Fahrzeugs ohne unnötigen Aufwand für Sie."],
    "Abmeldung bei Verkauf oder Stilllegung": ["Schnelle und saubere Abwicklung", "bei Verkauf, Stilllegung oder Halterwechsel."],
    Kurzzeitkennzeichen: ["Organisation von Kurzzeitkennzeichen", "für Probefahrten, Überführungen oder Werkstatttermine."],
    Exportkennzeichen: ["Unterstützung bei Exportkennzeichen inklusive", "der notwendigen Abläufe und Unterlagen."],
    "Versicherungsservice inkl. eVB": ["Unterstützung bei der Vorbereitung", "der Versicherungsthemen inklusive eVB-Nummer."],
    "Wunschkennzeichen & Unterlagenservice": ["Reservierung von Wunschkennzeichen", "und Hol- & Bringservice für Unterlagen auf Anfrage."],
  },
  en: {
    "Vehicle registration & deregistration": ["Complete handling of registration", "or deregistration with minimal effort on your side."],
    "Deregistration for sale or decommissioning": ["Reliable support when a vehicle is sold,", "decommissioned or taken off the road."],
    "Temporary plates": ["Organization of temporary plates", "for test drives, transfers or workshop appointments."],
    "Export plates": ["Support with export plates including", "the required steps and documents."],
    "Insurance service incl. eVB": ["Support with the insurance-related preparation,", "including the eVB number."],
    "Custom plates & document service": ["Custom plate handling plus pickup service", "for documents on request."],
  },
  ru: {
    "Постановка и снятие с учета": [
      "Полное оформление регистрации или",
      "снятия с учета без лишней нагрузки для вас.",
    ],
    "Снятие с учета при продаже или консервации": [
      "Быстрое и корректное сопровождение",
      "при продаже, консервации или смене владельца.",
    ],
    "Временные номера": [
      "Организация временных номеров",
      "для тест-драйвов, перегонов или визитов в мастерскую.",
    ],
    "Экспортные номера": [
      "Поддержка с экспортными номерами,",
      "включая необходимые шаги и документы.",
    ],
    "Страховой сервис с eVB": ["Поддержка в вопросах страхования,", "включая подготовку номера eVB."],
    "Выбор номера и сервис документов": [
      "Бронирование желаемого номера",
      "и забор документов по запросу.",
    ],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

const registrationWhyChooseDescriptionLines = {
  de: {
    "Weniger Aufwand": ["Sie sparen Zeit und vermeiden Behördengänge,", "Wartezeiten und unnötige Abstimmungen."],
    "Schnelle Abwicklung": ["Wir kümmern uns zügig um die nötigen Schritte,", "damit Ihr Anliegen schnell erledigt ist."],
    "Persönliche Unterstützung": ["Wir begleiten Sie bei Fragen rund um Unterlagen,", "Kennzeichen und Versicherungsdetails."],
    "Alles aus einer Hand": ["Von der Abmeldung bis zur fertigen Zulassung erhalten Sie", "eine klare und zuverlässige Lösung."],
  },
  en: {
    "Less effort": ["You save time and avoid authority visits,", "waiting times and unnecessary coordination."],
    "Fast processing": ["We take care of the necessary steps quickly", "so your request is handled without delay."],
    "Personal support": ["We guide you through questions about documents,", "plates and insurance details."],
    "Everything from one source": ["From deregistration to completed registration,", "you get a clear and reliable solution."],
  },
  ru: {
    "Меньше усилий": ["Вы экономите время и избегаете посещения ведомств,", "ожидания и лишней координации."],
    "Быстрое оформление": ["Мы быстро берем на себя необходимые шаги,", "чтобы ваш вопрос был решен без задержек."],
    "Персональная поддержка": ["Мы сопровождаем вас по вопросам документов,", "номеров и страховых деталей."],
    "Все из одних рук": ["От снятия с учета до готовой регистрации", "вы получаете четкое и надежное решение."],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.registration

  return buildPageMetadata(
    locale,
    `${t.title} | UNEXT GMBH Berlin`,
    t.description,
    "/leistungen/zulassungsservice"
  )
}

export default async function ZulassungsservicePage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.pages.registration

  const layoutBase = {
    title: t.title,
    subtitle: t.subtitle,
    description: t.description,
    image: "/images/service-registration.webp" as const,
    imageClassName: "object-cover object-[60%_center] md:object-[64%_center]",
    phone: "030 23613927",
    benefits: t.benefits,
    services: t.services,
    whyChoose: t.whyChoose,
    faqs: t.faqs,
    formTitle: t.formTitle,
    serviceName: "zulassungsservice",
    formFields: { vehicle: true, subject: true, date: false } as const,
  }

  const beforeLayout = <ServicePageLayout {...layoutBase} />

  const afterLayout = (
    <ServicePageLayout
      {...layoutBase}
      balancedTypography
      singleLineHeadings
      benefitsSingleLine
      titleLines={registrationTitleLines[locale]}
      descriptionLines={registrationDescriptionLines[locale]}
      serviceTitleLineBreaks={registrationServiceTitleLineBreaks[locale]}
      serviceDescriptionLines={registrationServiceDescriptionLines[locale]}
      whyChooseTitleLineBreaks={registrationWhyTitleLineBreaks[locale]}
      whyChooseDescriptionLines={registrationWhyChooseDescriptionLines[locale]}
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

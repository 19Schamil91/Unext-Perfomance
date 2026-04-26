/*
  Diese Datei ist die Detailseite fuer Pannenhilfe & Abschleppen.
  Sie zeigt Soforthilfe, Fahrzeugtransport, Vorteile, Servicekarten, Fragen und das Anfrageformular.
  Besucher koennen die Leistungen lesen und direkt Kontakt per Telefon, WhatsApp oder Formular aufnehmen.
*/
import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ServicePageLayout } from "@/components/service-page-layout"
import type { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const towingTitleLines = {
  de: ["Pannenhilfe & Abschleppen"],
  en: ["Towing & Roadside Help"],
  ru: ["Эвакуатор и помощь на дороге"],
} satisfies Record<Locale, readonly string[]>

const towingDescriptionLines = {
  de: [
    "Wenn Ihr Fahrzeug nach einer Panne oder einem Unfall",
    "nicht mehr fahrbereit ist,",
    "sorgen wir schnell und zuverlässig für eine sichere Lösung.",
    "Vom Abschleppen bis zu den nächsten Schritten",
    "erhalten Sie Unterstützung aus einer Hand.",
  ],
  en: [
    "If your vehicle is no longer roadworthy",
    "after a breakdown or accident,",
    "we provide a fast and reliable solution.",
    "From towing to the next steps,",
    "you receive support from one source.",
  ],
  ru: [
    "Если ваш автомобиль после поломки или аварии",
    "больше не может ехать,",
    "мы быстро и надежно обеспечим безопасное решение.",
    "От эвакуации до следующих шагов",
    "вы получаете поддержку из одних рук.",
  ],
} satisfies Record<Locale, readonly string[]>

const towingServiceDescriptionLines = {
  de: {
    Pannenhilfe: [
      "Schnelle Unterstützung, wenn Ihr Fahrzeug",
      "liegen bleibt oder nach einer Panne",
      "nicht mehr sicher fahrbereit ist.",
    ],
    "Abschleppdienst vor Ort": [
      "Organisation und Durchführung",
      "des Abschleppens direkt am Einsatzort.",
    ],
    Fahrzeugtransport: [
      "Sicherer Transport zur eigenen Werkstatt",
      "oder zu einer Adresse Ihrer Wahl.",
    ],
    "Unfallbedingte Soforthilfe": [
      "Strukturierte Unterstützung nach einem Unfall,",
      "damit Ihr Fahrzeug schnell gesichert",
      "und weiter betreut wird.",
    ],
    "Weiterführende Abwicklung": [
      "Auf Wunsch koordinieren wir nach",
      "dem Abschleppen weitere Schritte",
      "wie Gutachten oder Werkstattabstimmung.",
    ],
  },
  en: {
    "Roadside assistance": [
      "Quick support when your vehicle breaks down",
      "or can no longer be driven safely.",
    ],
    "On-site towing": [
      "Organization and execution of towing",
      "directly from the location of the incident.",
    ],
    "Vehicle transport": [
      "Safe transport to our workshop",
      "or to an address of your choice.",
    ],
    "Immediate accident support": [
      "Structured support after an accident",
      "so the vehicle can be secured and handled quickly.",
    ],
    "Follow-up coordination": [
      "If required, we also coordinate the next steps",
      "after towing such as reports or workshop handling.",
    ],
  },
  ru: {
    "Помощь на дороге": [
      "Быстрая поддержка, если ваш автомобиль остановился",
      "или больше не может безопасно продолжать движение.",
    ],
    "Эвакуация на месте": [
      "Организация и выполнение эвакуации",
      "непосредственно с места происшествия.",
    ],
    "Транспортировка автомобиля": [
      "Безопасная перевозка в нашу мастерскую",
      "или по адресу по вашему выбору.",
    ],
    "Срочная помощь после аварии": [
      "Структурированная поддержка после ДТП,",
      "чтобы автомобиль был быстро зафиксирован",
      "и передан дальше.",
    ],
    "Дальнейшая координация": [
      "При необходимости мы координируем следующие шаги",
      "после эвакуации, например экспертизу",
      "или взаимодействие с мастерской.",
    ],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

const towingWhyDescriptionLines = {
  de: {
    "Schnell erreichbar": [
      "Im Notfall zählt Reaktionszeit. Wir organisieren",
      "zügig eine passende und sichere Lösung.",
    ],
    "Zuverlässiger Transport": [
      "Ihr Fahrzeug wird kontrolliert und sicher",
      "zur Werkstatt oder Wunschadresse gebracht.",
    ],
    "Entlastung in Stresssituationen": [
      "Gerade nach einer Panne oder einem Unfall",
      "nehmen wir Ihnen die nächsten organisatorischen Schritte ab.",
    ],
    "Verknüpfung mit weiteren Services": [
      "Bei Bedarf begleiten wir Sie direkt weiter",
      "zu Gutachten, Werkstatt oder anderen Folgeschritten.",
    ],
  },
  en: {
    "Fast response": [
      "In emergencies, response time matters.",
      "We organize a suitable and safe solution quickly.",
    ],
    "Reliable transport": [
      "Your vehicle is transported in a controlled and secure way",
      "to the right destination.",
    ],
    "Less stress": [
      "After a breakdown or accident, we take",
      "the next organizational steps off your shoulders.",
    ],
    "Connected services": [
      "If needed, we can connect you directly",
      "with reporting, workshop or other follow-up services.",
    ],
  },
  ru: {
    "Быстрая реакция": [
      "В экстренной ситуации важна скорость.",
      "Мы быстро организуем подходящее и безопасное решение.",
    ],
    "Надежная транспортировка": [
      "Ваш автомобиль перевозится контролируемо и безопасно",
      "к нужному месту назначения.",
    ],
    "Меньше стресса": [
      "После поломки или ДТП",
      "мы снимаем с вас следующие организационные шаги.",
    ],
    "Связка с другими услугами": [
      "При необходимости мы сразу свяжем вас",
      "с экспертизой, мастерской или другими последующими сервисами.",
    ],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

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
        imageClassName="object-cover object-[48%_center] md:object-[52%_center]"
        phone="030 23613927"
        benefits={t.benefits}
        services={t.services}
        whyChoose={t.whyChoose}
        faqs={t.faqs}
        formTitle={t.formTitle}
        serviceName="abschleppdienst"
        formFields={{ vehicle: true, subject: true, date: false }}
        balancedTypography
        singleLineHeadings
        benefitsSingleLine
        titleLines={towingTitleLines[locale]}
        descriptionLines={towingDescriptionLines[locale]}
        serviceDescriptionLines={towingServiceDescriptionLines[locale]}
        whyChooseDescriptionLines={towingWhyDescriptionLines[locale]}
      />
      <SiteFooter />
    </>
  )
}

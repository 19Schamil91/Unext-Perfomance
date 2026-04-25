/*
  Diese Datei ist die Detailseite fuer die Autovermietung.
  Sie zeigt Mietwagen-Angebote, Vorteile, Servicekarten, Gruende, Fragen und das Anfrageformular.
  Besucher koennen passende Mietwagen-Informationen lesen und direkt Kontakt aufnehmen.
*/
import type { Metadata } from "next"
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
    "Ob nach einem Unfall, während der Werkstattzeit oder für besondere Anlässe",
    "- wir haben das passende Fahrzeug für Sie.",
    "Schnell verfügbar, fair im Preis und immer in Top-Zustand.",
  ],
  en: [
    "Whether after an accident, during workshop time or for special occasions",
    "- we have the right vehicle for you.",
    "Available quickly, fairly priced and always in excellent condition.",
  ],
  ru: [
    "После ДТП, на время ремонта или для особых случаев",
    "- у нас есть подходящий автомобиль для вас.",
    "Быстро доступно, по честной цене и всегда в отличном состоянии.",
  ],
} satisfies Record<Locale, readonly string[]>

const rentalServiceTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const rentalServiceDescriptionLines = {
  de: {
    "Ersatzfahrzeuge": [
      "Schnelle Bereitstellung von Ersatzfahrzeugen",
      "bei Unfall oder während der Reparatur",
      "Ihres Fahrzeugs.",
    ],
    "Kurzzeitmiete": [
      "Flexible Anmietung für Tage oder Wochen",
      "- ideal für kurzfristige Mobilitätsbedürfnisse.",
    ],
    "Langzeitmiete": [
      "Attraktive Konditionen für längere Mietdauern",
      "- für Privat- und Geschäftskunden.",
    ],
    "Unfallersatzfahrzeuge": [
      "Bei unverschuldetem Unfall stellen wir Ihnen",
      "ein gleichwertiges Ersatzfahrzeug.",
    ],
    "Firmenfahrzeuge": [
      "Flexible Fahrzeuglösungen für Unternehmen",
      "- auch bei kurzfristigem Bedarf.",
    ],
    "Abholung & Lieferung": [
      "Auf Wunsch bringen wir das Fahrzeug zu Ihnen",
      "oder holen Sie ab.",
    ],
  },
  en: {
    "Replacement vehicles": [
      "Fast provision of replacement vehicles",
      "after an accident or while your vehicle",
      "is being repaired.",
    ],
    "Short-term rental": [
      "Flexible rental by day or week",
      "- ideal for short-term mobility needs.",
    ],
    "Long-term rental": [
      "Attractive conditions for longer rental periods",
      "- for private and business customers.",
    ],
    "Accident replacement vehicles": [
      "If you are not at fault in an accident,",
      "we provide a comparable replacement vehicle.",
    ],
    "Company vehicles": [
      "Flexible vehicle solutions for companies",
      "- even for short-notice demand.",
    ],
    "Pickup & delivery": [
      "On request, we can bring the vehicle to you",
      "or pick you up.",
    ],
  },
  ru: {
    "Подменные автомобили": [
      "Быстрое предоставление подменного автомобиля",
      "после ДТП или на время ремонта",
      "вашего авто.",
    ],
    "Краткосрочная аренда": [
      "Гибкая аренда на дни или недели",
      "- идеально для краткосрочной мобильности.",
    ],
    "Долгосрочная аренда": [
      "Выгодные условия для длительных сроков аренды",
      "- для частных и корпоративных клиентов.",
    ],
    "Авто на замену после ДТП": [
      "Если вы не виноваты в ДТП,",
      "мы предоставим равноценный подменный автомобиль.",
    ],
    "Корпоративные автомобили": [
      "Гибкие транспортные решения для компаний",
      "- даже при срочной необходимости.",
    ],
    "Доставка и выдача": [
      "По запросу мы можем доставить автомобиль вам",
      "или забрать вас.",
    ],
  },
} satisfies Record<Locale, Record<string, readonly string[]>>

const rentalWhyTitleLineBreaks = {
  de: {},
  en: {},
  ru: {},
} satisfies Record<Locale, Record<string, readonly string[]>>

const rentalWhyDescriptionLines = {
  de: {
    "Sofortige Verfügbarkeit": [
      "Wir haben immer Fahrzeuge auf Lager",
      "- keine langen Wartezeiten.",
    ],
    "Top-gepflegte Fahrzeuge": [
      "Alle unsere Mietfahrzeuge werden regelmäßig",
      "gewartet und gereinigt.",
    ],
    "Faire Preise": [
      "Transparente Preisgestaltung ohne versteckte Kosten.",
    ],
    "Persönlicher Service": [
      "Individuelle Beratung und flexible Lösungen",
      "für Ihre Bedürfnisse.",
    ],
  },
  en: {
    "Immediate availability": [
      "We always have vehicles in stock",
      "- no long waiting times.",
    ],
    "Well-maintained vehicles": [
      "All rental vehicles are",
      "regularly serviced  and cleaned.",
    ],
    "Fair prices": [
      "Transparent pricing with no hidden costs.",
    ],
    "Personal service": [
      "Individual advice and flexible solutions",
      "for your needs.",
    ],
  },
  ru: {
    "Мгновенная доступность": [
      "У нас всегда есть автомобили в наличии",
      "- без долгого ожидания.",
    ],
    "Ухоженные автомобили": [
      "Все наши арендные автомобили",
      "регулярно  обслуживаются и очищаются.",
    ],
    "Честные цены": [
      "Прозрачное ценообразование без скрытых расходов.",
    ],
    "Персональный сервис": [
      "Индивидуальная консультация и гибкие решения",
      "под ваши задачи.",
    ],
  },
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
      serviceDescriptionLines={rentalServiceDescriptionLines[locale]}
      whyChooseTitleLineBreaks={rentalWhyTitleLineBreaks[locale]}
      whyChooseDescriptionLines={rentalWhyDescriptionLines[locale]}
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

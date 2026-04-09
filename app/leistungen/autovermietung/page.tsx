import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Autovermietung | Ersatzfahrzeuge | UNEXT GMBH Berlin",
  description:
    "Ersatzfahrzeuge direkt verfügbar in Berlin. Flexible Laufzeiten, schnelle Abwicklung und geprüfte Fahrzeuge. Jetzt Mietwagen anfragen!",
}

const pageData = {
  title: "Autovermietung",
  subtitle: "Ersatzfahrzeuge",
  description:
    "Ob nach einem Unfall, während der Werkstattzeit oder für besondere Anlässe – wir haben das passende Fahrzeug für Sie. Schnell verfügbar, fair im Preis und immer in top Zustand.",
  image: "/images/service-rental.webp",
  imageClassName: "object-cover object-[42%_center] md:object-[46%_center]",
  phone: "0174 4292900",
  benefits: [
    "Sofort verfügbare Fahrzeuge",
    "Flexible Mietdauer",
    "Faire & transparente Preise",
    "Geprüfte Fahrzeuge",
    "Unkomplizierte Abwicklung",
    "Privat- und Geschäftskunden",
  ],
  services: [
    {
      title: "Ersatzfahrzeuge",
      description:
        "Schnelle Bereitstellung von Ersatzfahrzeugen bei Unfall oder während der Reparatur Ihres Fahrzeugs.",
    },
    {
      title: "Kurzzeitmiete",
      description:
        "Flexible Anmietung für Tage oder Wochen – ideal für kurzfristige Mobilitätsbedürfnisse.",
    },
    {
      title: "Langzeitmiete",
      description:
        "Attraktive Konditionen für längere Mietdauern – für Privat- und Geschäftskunden.",
    },
    {
      title: "Unfallersatzfahrzeuge",
      description:
        "Bei unverschuldetem Unfall stellen wir Ihnen ein gleichwertiges Ersatzfahrzeug.",
    },
    {
      title: "Firmenfahrzeuge",
      description:
        "Flexible Fahrzeuglösungen für Unternehmen – auch bei kurzfristigem Bedarf.",
    },
    {
      title: "Abholung & Lieferung",
      description:
        "Auf Wunsch bringen wir das Fahrzeug zu Ihnen oder holen Sie ab.",
    },
  ],
  whyChoose: [
    {
      title: "Sofortige Verfügbarkeit",
      description:
        "Wir haben immer Fahrzeuge auf Lager – keine langen Wartezeiten.",
    },
    {
      title: "Top-gepflegte Fahrzeuge",
      description:
        "Alle unsere Mietfahrzeuge werden regelmäßig gewartet und gereinigt.",
    },
    {
      title: "Faire Preise",
      description:
        "Transparente Preisgestaltung ohne versteckte Kosten.",
    },
    {
      title: "Persönlicher Service",
      description:
        "Individuelle Beratung und flexible Lösungen für Ihre Bedürfnisse.",
    },
  ],
  faqs: [
    {
      question: "Welche Fahrzeuge können gemietet werden?",
      answer:
        "Wir bieten verschiedene Fahrzeugklassen an – vom Kleinwagen bis zur gehobenen Mittelklasse. Sprechen Sie uns an für aktuelle Verfügbarkeiten.",
    },
    {
      question: "Was brauche ich für die Anmietung?",
      answer:
        "Sie benötigen einen gültigen Führerschein, Personalausweis und eine gültige Kreditkarte oder Kaution.",
    },
    {
      question: "Wer zahlt bei einem Unfall den Mietwagen?",
      answer:
        "Bei unverschuldeten Unfällen übernimmt die gegnerische Versicherung die Mietwagenkosten. Wir beraten Sie gerne.",
    },
    {
      question: "Kann ich das Fahrzeug am Wochenende abholen?",
      answer:
        "Samstags sind wir von 10:00-16:00 Uhr für Sie da. Außerhalb der Öffnungszeiten nach Vereinbarung.",
    },
    {
      question: "Gibt es eine Kilometerbegrenzung?",
      answer:
        "Unsere Tarife beinhalten in der Regel eine großzügige Kilometerpauschale. Details besprechen wir bei der Buchung.",
    },
  ],
  formTitle: "Mietwagen anfragen",
  serviceName: "autovermietung",
}

export default function AutovermietungPage() {
  return (
    <>
      <SiteHeader />
      <ServicePageLayout {...pageData} />
      <SiteFooter />
    </>
  )
}

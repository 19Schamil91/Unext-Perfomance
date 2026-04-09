import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Autoservice & Werkstatt | UNEXT GMBH Berlin",
  description:
    "Professioneller Werkstattservice in Berlin. Ölwechsel, Inspektion, Reifenwechsel, Dashcam-Einbau und allgemeine Reparaturen. Zertifiziertes Fachpersonal.",
}

const pageData = {
  title: "Autoservice & Werkstatt",
  subtitle: "Reparatur & Wartung",
  description:
    "Unser erfahrenes Werkstatt-Team kümmert sich professionell um Ihr Fahrzeug. Von der routinemäßigen Wartung bis zur Reparatur – wir bieten zuverlässigen Service mit Qualitätsgarantie.",
  image: "/images/service-workshop.webp",
  imageClassName: "object-cover object-[60%_center] md:object-[64%_center]",
  phone: "0177 7883206",
  benefits: [
    "Zertifiziertes Fachpersonal",
    "Moderne Werkstattausstattung",
    "Faire & transparente Preise",
    "Kurzfristige Termine",
    "Alle Marken & Modelle",
    "Originalteile auf Wunsch",
  ],
  services: [
    {
      title: "Ölwechsel & Inspektion",
      description:
        "Regelmäßiger Ölwechsel und umfassende Inspektionen nach Herstellervorgaben.",
    },
    {
      title: "Reifenwechsel & Einlagerung",
      description:
        "Professioneller Reifenservice inkl. Auswuchten und optionaler Einlagerung.",
    },
    {
      title: "Dashcam-Einbau",
      description:
        "Fachgerechter Einbau von Dashcams – sauber verlegt und professionell angeschlossen.",
    },
    {
      title: "Bremsenservice",
      description:
        "Prüfung, Wartung und Austausch von Bremsbelägen und Bremsscheiben.",
    },
    {
      title: "Allgemeine Reparaturen",
      description:
        "Von der Auspuffanlage bis zur Elektrik – wir reparieren zuverlässig.",
    },
    {
      title: "Fahrzeugdiagnose",
      description:
        "Moderne Diagnosetechnik für die schnelle Fehlersuche und -behebung.",
    },
  ],
  whyChoose: [
    {
      title: "Qualifiziertes Team",
      description:
        "Unser Werkstatt-Team besteht aus erfahrenen und zertifizierten Fachleuten.",
    },
    {
      title: "Transparente Kostenvoranschläge",
      description:
        "Sie wissen vorab, was auf Sie zukommt – keine bösen Überraschungen.",
    },
    {
      title: "Schneller Service",
      description:
        "Viele Arbeiten erledigen wir noch am gleichen Tag.",
    },
    {
      title: "Alle Marken willkommen",
      description:
        "Wir betreuen Fahrzeuge aller Hersteller und Marken.",
    },
  ],
  faqs: [
    {
      question: "Wie schnell kann ich einen Werkstatttermin bekommen?",
      answer:
        "Oft können wir kurzfristige Termine anbieten – manchmal sogar am gleichen Tag. Rufen Sie uns einfach an!",
    },
    {
      question: "Werden Originalteile verwendet?",
      answer:
        "Auf Wunsch verwenden wir Originalteile. Alternativ bieten wir hochwertige Qualitätsteile zu günstigeren Preisen an.",
    },
    {
      question: "Bieten Sie auch Reifeneinlagerung an?",
      answer:
        "Ja, wir lagern Ihre Sommer- oder Winterreifen fachgerecht ein und erinnern Sie rechtzeitig an den Wechsel.",
    },
    {
      question: "Kann ich während der Reparatur einen Mietwagen bekommen?",
      answer:
        "Selbstverständlich! Unsere Autovermietung ist direkt vor Ort – Sie bleiben mobil.",
    },
    {
      question: "Führen Sie auch TÜV/HU durch?",
      answer:
        "Wir bereiten Ihr Fahrzeug für die Hauptuntersuchung vor und vermitteln Sie an unsere Partner.",
    },
  ],
  formTitle: "Werkstatttermin anfragen",
  serviceName: "autoservice",
}

export default function AutoservicePage() {
  return (
    <>
      <SiteHeader />
      <ServicePageLayout {...pageData} />
      <SiteFooter />
    </>
  )
}

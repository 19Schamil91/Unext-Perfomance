import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Unfallgutachten & Soforthilfe | UNFALLX | UNEXT GMBH Berlin",
  description:
    "Schnelle Soforthilfe nach Unfällen. Unabhängige KFZ-Gutachten durch zertifizierte Gutachter. Professionelle Unterstützung bei der Schadensabwicklung in Berlin.",
}

const pageData = {
  title: "Unfallgutachten & Soforthilfe",
  subtitle: "UNFALLX",
  badge: "Zertifizierte Gutachter",
  description:
    "Ein Unfall ist immer stressig. Wir nehmen Ihnen die Last ab: Unsere zertifizierten Gutachter erstellen unabhängige KFZ-Gutachten und unterstützen Sie kompetent bei der gesamten Schadensabwicklung – schnell, professionell und fair.",
  image: "/images/service-accident.webp",
  imageClassName: "object-cover object-[58%_center] md:object-[60%_center]",
  phone: "0176 64365185",
  benefits: [
    "Schnelle Terminvergabe",
    "Unabhängige Gutachten",
    "Zertifizierte Gutachter",
    "Schadensabwicklung inklusive",
    "Kostenlose Erstberatung",
    "Vor-Ort-Service möglich",
  ],
  services: [
    {
      title: "Unfallgutachten",
      description:
        "Professionelle und unabhängige Schadensbewertung nach Verkehrsunfällen für Versicherungen und Gerichte.",
    },
    {
      title: "Soforthilfe nach Unfall",
      description:
        "Schnelle Unterstützung direkt nach dem Unfall – wir kümmern uns um alles Notwendige.",
    },
    {
      title: "Schadensabwicklung",
      description:
        "Komplette Unterstützung bei der Kommunikation mit Versicherungen und allen beteiligten Parteien.",
    },
    {
      title: "Wertgutachten",
      description:
        "Fahrzeugbewertung für Kauf, Verkauf oder Versicherungszwecke durch unsere Experten.",
    },
    {
      title: "Schadensdokumentation",
      description:
        "Umfassende fotografische und schriftliche Dokumentation aller Schäden.",
    },
    {
      title: "Rechtsberatung (Vermittlung)",
      description:
        "Vermittlung zu kompetenten Partnern für rechtliche Unterstützung bei Schadensfällen.",
    },
  ],
  whyChoose: [
    {
      title: "Zertifizierte Gutachter",
      description:
        "Unsere Gutachter sind geprüft und zertifiziert – für rechtssichere Gutachten.",
    },
    {
      title: "Schnelle Terminvergabe",
      description:
        "Wir wissen, dass Zeit wichtig ist. Kurzfristige Termine sind bei uns Standard.",
    },
    {
      title: "Unabhängigkeit",
      description:
        "Wir arbeiten unabhängig von Versicherungen – Ihre Interessen stehen an erster Stelle.",
    },
    {
      title: "Komplettservice",
      description:
        "Von der ersten Beratung bis zur finalen Abwicklung – alles aus einer Hand.",
    },
  ],
  faqs: [
    {
      question: "Wer zahlt das Unfallgutachten?",
      answer:
        "Bei unverschuldeten Unfällen übernimmt in der Regel die gegnerische Versicherung die Kosten für das Gutachten. Wir beraten Sie gerne zu Ihrem konkreten Fall.",
    },
    {
      question: "Wie schnell kann ich einen Termin bekommen?",
      answer:
        "Wir bieten kurzfristige Termine an – oft schon am gleichen oder nächsten Tag. Rufen Sie uns einfach an!",
    },
    {
      question: "Brauche ich bei jedem Unfall ein Gutachten?",
      answer:
        "Ein Gutachten ist bei Schäden über ca. 750€ empfehlenswert, um Ihre Ansprüche vollständig geltend machen zu können. Bei Bagatellschäden reicht oft ein Kostenvoranschlag.",
    },
    {
      question: "Kommen Sie auch zu mir?",
      answer:
        "Ja, wir bieten auf Wunsch auch Vor-Ort-Termine an. Sprechen Sie uns einfach bei der Terminvereinbarung darauf an.",
    },
    {
      question: "Wie lange dauert die Erstellung eines Gutachtens?",
      answer:
        "In der Regel erhalten Sie Ihr Gutachten innerhalb von 24-48 Stunden nach der Fahrzeugbesichtigung.",
    },
  ],
  formTitle: "Gutachten anfragen",
  serviceName: "unfallgutachten",
}

export default function UnfallgutachtenPage() {
  return (
    <>
      <SiteHeader />
      <ServicePageLayout {...pageData} />
      <SiteFooter />
    </>
  )
}

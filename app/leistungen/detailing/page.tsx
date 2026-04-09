import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Detailing | Premium Fahrzeugaufbereitung | UNEXT GMBH Berlin",
  description:
    "Premium Fahrzeugaufbereitung in Berlin. Lackaufbereitung, Politur, Innen- & Außenreinigung. Professionell und zertifiziert für höchste Ansprüche.",
}

const pageData = {
  title: "Detailing",
  subtitle: "Premium Fahrzeugaufbereitung",
  description:
    "Ihr Fahrzeug verdient das Beste. Unsere Detailing-Experten bringen Ihr Auto wieder auf Hochglanz – mit professionellen Methoden und Premium-Produkten für ein Ergebnis, das begeistert.",
  image: "/images/service-detailing.webp",
  imageClassName: "object-cover object-[58%_center] md:object-[60%_center]",
  phone: "0177 6691006",
  benefits: [
    "Premium Produkte & Methoden",
    "Erfahrene Detailing-Experten",
    "Werterhalt Ihres Fahrzeugs",
    "Individuelle Beratung",
    "Verschiedene Pakete verfügbar",
    "Nachhaltige Ergebnisse",
  ],
  services: [
    {
      title: "Lackaufbereitung",
      description:
        "Professionelle Lackkorrektur, Politur und Versiegelung für den perfekten Glanz.",
    },
    {
      title: "Außenreinigung Premium",
      description:
        "Intensive Außenwäsche inkl. Felgen, Reifen und Scheiben – handgewaschen.",
    },
    {
      title: "Innenreinigung Premium",
      description:
        "Tiefenreinigung des Interieurs inkl. Polster, Leder und aller Oberflächen.",
    },
    {
      title: "Keramikversiegelung",
      description:
        "Langanhaltender Lackschutz mit hochwertiger Keramikbeschichtung.",
    },
    {
      title: "Motorwäsche",
      description:
        "Schonende Reinigung des Motorraums für ein gepflegtes Gesamtbild.",
    },
    {
      title: "Komplettaufbereitung",
      description:
        "Das Rundum-Paket: Innen, außen und alle Details – wie neu!",
    },
  ],
  whyChoose: [
    {
      title: "Echte Expertise",
      description:
        "Unsere Detailer sind geschult und arbeiten mit professionellen Methoden.",
    },
    {
      title: "Premium Produkte",
      description:
        "Wir verwenden ausschließlich hochwertige Produkte renommierter Marken.",
    },
    {
      title: "Werterhalt",
      description:
        "Regelmäßiges Detailing erhält den Wert Ihres Fahrzeugs langfristig.",
    },
    {
      title: "Individuelle Pakete",
      description:
        "Von der Grundreinigung bis zur Komplettaufbereitung – wir haben das richtige Paket.",
    },
  ],
  faqs: [
    {
      question: "Wie lange dauert eine Komplettaufbereitung?",
      answer:
        "Je nach Fahrzeuggröße und Zustand dauert eine Komplettaufbereitung zwischen 4-8 Stunden. Wir planen genug Zeit ein für ein perfektes Ergebnis.",
    },
    {
      question: "Lohnt sich eine Keramikversiegelung?",
      answer:
        "Absolut! Eine Keramikversiegelung bietet langanhaltenden Schutz vor Umwelteinflüssen und erleichtert die Pflege erheblich. Die Investition lohnt sich besonders bei Neufahrzeugen.",
    },
    {
      question: "Kann ich während der Aufbereitung warten?",
      answer:
        "Bei längeren Aufbereitungen empfehlen wir, das Fahrzeug bei uns zu lassen. Gerne vereinbaren wir einen Abholtermin.",
    },
    {
      question: "Entfernt ihr auch Kratzer?",
      answer:
        "Leichte bis mittlere Kratzer können wir durch professionelle Politur oft vollständig entfernen. Bei tieferen Kratzern beraten wir Sie ehrlich über die Möglichkeiten.",
    },
    {
      question: "Wie oft sollte ich mein Fahrzeug aufbereiten lassen?",
      answer:
        "Wir empfehlen eine professionelle Innenreinigung alle 3-6 Monate und eine Außenaufbereitung mit Politur 1-2x jährlich.",
    },
  ],
  formTitle: "Detailing anfragen",
  serviceName: "detailing",
}

export default function DetailingPage() {
  return (
    <>
      <SiteHeader />
      <ServicePageLayout {...pageData} />
      <SiteFooter />
    </>
  )
}

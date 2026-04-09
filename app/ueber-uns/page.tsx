import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Target,
  Heart,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Über uns | UNEXT GMBH Berlin",
  description:
    "Lernen Sie UNEXT GMBH kennen - Ihr Automotive-Partner in Berlin seit 2024. Unfallgutachten, Autovermietung, Werkstatt und Detailing unter einem Dach.",
}

const values = [
  {
    icon: Award,
    title: "Qualität",
    description:
      "Wir setzen auf höchste Standards bei allen unseren Dienstleistungen. Qualität ist kein Zufall, sondern das Ergebnis von Engagement und Expertise.",
  },
  {
    icon: Users,
    title: "Kundenorientierung",
    description:
      "Sie stehen bei uns im Mittelpunkt. Wir hören zu, verstehen Ihre Bedürfnisse und finden die beste Lösung für Ihre Situation.",
  },
  {
    icon: Target,
    title: "Zuverlässigkeit",
    description:
      "Was wir zusagen, halten wir. Pünktlichkeit, Ehrlichkeit und Verlässlichkeit sind die Grundpfeiler unserer Arbeit.",
  },
  {
    icon: Heart,
    title: "Leidenschaft",
    description:
      "Wir lieben Autos und das, was wir tun. Diese Begeisterung spüren Sie in jedem Detail unserer Arbeit.",
  },
]

const milestones = [
  {
    year: "2024",
    title: "Gründung",
    description: "UNEXT GMBH wird in Berlin gegründet mit Fokus auf Unfallgutachten (UNFALLX).",
  },
  {
    year: "2026",
    title: "Autovermietung",
    description: "Erweiterung des Angebots um professionelle Mietfahrzeuge.",
  },
  {
    year: "2026",
    title: "Werkstatt & Detailing",
    description: "Eröffnung des Werkstattbereichs und Start des Premium-Detailing-Service.",
  },
  {
    year: "Heute",
    title: "Vollständiger Service",
    description: "Vier starke Bereiche unter einem Dach – Ihr Automotive-Partner in Berlin.",
  },
]

const stats = [
  { value: "2024", label: "Gegründet" },
  { value: "4", label: "Servicebereiche" },
  { value: "1", label: "Standort in Berlin" },
  { value: "100%", label: "Engagement" },
]

export default function UeberUnsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-car.webp"
              alt="UNEXT Teammitglied vor Fahrzeug"
              fill
              sizes="100vw"
              quality={80}
              className="object-cover object-[62%_center] md:object-[72%_center]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Über UNEXT GMBH
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Vom spezialisierten Unfallgutachter zum vollständigen Automotive-Partner. Lernen
                Sie das Team hinter UNEXT kennen und erfahren Sie, was uns antreibt.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-card border-y border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Unsere Geschichte
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Von der Vision zur Realität
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    UNEXT GMBH wurde 2024 in Berlin gegründet, mit einer klaren Mission:
                    Professionelle Unfallgutachten und Soforthilfe für Menschen, die gerade einen
                    stressigen Moment durchleben. Unter der Marke UNFALLX haben wir uns schnell als
                    zuverlässiger und kompetenter Partner etabliert.
                  </p>
                  <p>
                    Doch wir haben erkannt, dass unsere Kunden mehr brauchen. Wer nach einem Unfall
                    ein Gutachten benötigt, braucht oft auch ein Ersatzfahrzeug. Wer sein Auto zur
                    Reparatur bringt, wünscht sich einen Ansprechpartner für alles. Und wer sein
                    Fahrzeug liebt, möchte es in besten Händen wissen.
                  </p>
                  <p>
                    Deshalb haben wir unser Angebot erweitert: Autovermietung, professioneller
                    Werkstattservice und Premium-Detailing sind heute feste Bestandteile von UNEXT.
                    Vier starke Bereiche, ein kompetenter Partner – das ist unsere Vision, die wir
                    jeden Tag leben.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-primary">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Unsere Werte
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Diese Prinzipien leiten uns bei allem, was wir tun.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="text-center border-border/50 bg-background hover:border-primary/30 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UNFALLX Sub-brand Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative aspect-video overflow-hidden rounded-2xl lg:order-2">
                <Image
                  src="/images/service-accident.webp"
                  alt="UNFALLX Unfallgutachten"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={76}
                  className="object-cover object-[58%_center]"
                />
              </div>

              <div className="lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-4">
                  <span className="text-sm font-medium text-primary">Sub-Brand</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  UNFALLX – Unsere Wurzeln
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  UNFALLX ist die Marke, mit der alles begann. Als spezialisierter Service für
                  Unfallgutachten und Soforthilfe steht UNFALLX für kompetente, schnelle und
                  unabhängige Unterstützung nach Verkehrsunfällen.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Zertifizierte Gutachter",
                    "Schnelle Terminvergabe",
                    "Unabhängige Gutachten",
                    "Komplette Schadensabwicklung",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild className="gap-2">
                    <Link href="/leistungen/unfallgutachten">
                      Mehr über UNFALLX
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

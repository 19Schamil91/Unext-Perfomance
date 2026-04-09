import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileCheck, Car, Wrench, Sparkles } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Leistungen | UNEXT GMBH Berlin",
  description:
    "Unsere Services: Unfallgutachten, Autovermietung, Werkstatt und Premium Detailing. Alle Leistungen unter einem Dach in Berlin.",
}

const services = [
  {
    id: "unfallgutachten",
    icon: FileCheck,
    title: "Unfallgutachten & Soforthilfe",
    subtitle: "UNFALLX",
    description:
      "Nach einem Unfall brauchen Sie schnelle und kompetente Hilfe. Unsere zertifizierten Gutachter erstellen unabhängige KFZ-Gutachten und unterstützen Sie bei der gesamten Schadensabwicklung.",
    features: [
      "Schnelle Terminvergabe",
      "Unterstützung bei der Schadensabwicklung",
      "Unabhängige & professionelle Gutachten",
      "Zertifizierte Gutachter",
    ],
    image: "/images/service-accident.webp",
    imageClassName: "object-cover object-[58%_center]",
    href: "/leistungen/unfallgutachten",
    phone: "0176 64365185",
  },
  {
    id: "autovermietung",
    icon: Car,
    title: "Autovermietung",
    subtitle: "Ersatzfahrzeuge",
    description:
      "Brauchen Sie schnell ein Ersatzfahrzeug? Ob nach einem Unfall oder während Ihr Auto in der Werkstatt ist – wir haben immer geprüfte Fahrzeuge für Sie verfügbar.",
    features: [
      "Ersatzfahrzeuge direkt verfügbar",
      "Flexible Laufzeiten",
      "Schnelle & unkomplizierte Abwicklung",
      "Zuverlässiger & geprüfter Service",
    ],
    image: "/images/service-rental.webp",
    imageClassName: "object-cover object-[42%_center]",
    href: "/leistungen/autovermietung",
    phone: "0174 4292900",
  },
  {
    id: "autoservice",
    icon: Wrench,
    title: "Autoservice & Werkstatt",
    subtitle: "Reparatur & Wartung",
    description:
      "Unser professionelles Werkstatt-Team kümmert sich um alle Belange rund um Ihr Fahrzeug. Von der Inspektion bis zur Reparatur – alles aus einer Hand.",
    features: [
      "Ölwechsel & Inspektion",
      "Reifenwechsel & Einlagerung",
      "Dashcam-Einbau",
      "Allgemeine Reparaturen & Wartung",
    ],
    image: "/images/service-workshop.webp",
    imageClassName: "object-cover object-[60%_center]",
    href: "/leistungen/autoservice",
    phone: "0177 7883206",
  },
  {
    id: "detailing",
    icon: Sparkles,
    title: "Detailing",
    subtitle: "Premium Fahrzeugaufbereitung",
    description:
      "Gönnen Sie Ihrem Fahrzeug eine professionelle Aufbereitung. Unsere Detailing-Experten bringen Ihr Auto wieder auf Hochglanz – innen wie außen.",
    features: [
      "Lackaufbereitung & Politur",
      "Innen- & Außenreinigung",
      "Werterhalt & optische Aufwertung",
      "Professionell & zertifiziert",
    ],
    image: "/images/service-detailing.webp",
    imageClassName: "object-cover object-[56%_center]",
    href: "/leistungen/detailing",
    phone: "0177 6691006",
  },
]

export default function LeistungenPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Unsere Leistungen
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                UNEXT GMBH bietet Ihnen ein umfassendes Leistungsspektrum rund ums Fahrzeug. Vier
                starke Bereiche unter einem Dach – professionell, zuverlässig und immer für Sie da.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className="overflow-hidden border-border/50 bg-card"
                >
                  <CardContent className="p-0">
                    <div
                      className={`flex flex-col ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                      }`}
                    >
                      {/* Image */}
                      <div className="relative h-64 lg:h-auto lg:w-1/2">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          quality={76}
                          className={service.imageClassName ?? "object-cover"}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-8 lg:p-12">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <service.icon className="h-7 w-7" />
                          </div>
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-primary">
                              {service.subtitle}
                            </p>
                            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="mt-6 text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-sm text-foreground"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Actions */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                          <Button asChild className="gap-2">
                            <Link href={service.href}>
                              Mehr erfahren
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                          <a
                            href={`tel:${service.phone.replace(/\s/g, "")}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            Direkt anrufen: {service.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

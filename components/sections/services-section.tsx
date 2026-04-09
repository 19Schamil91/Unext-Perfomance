import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileCheck, Car, Wrench, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: "unfallgutachten",
    icon: FileCheck,
    title: "Unfallgutachten",
    subtitle: "UNFALLX",
    description:
      "Schnelle Soforthilfe nach Unfällen. Unabhängige KFZ-Gutachten durch zertifizierte Gutachter. Professionelle Unterstützung bei der Schadensabwicklung.",
    features: [
      "Schnelle Terminvergabe",
      "Unabhängige Gutachten",
      "Zertifizierte Gutachter",
      "Schadensabwicklung",
    ],
    image: "/images/service-accident.webp",
    imageClassName: "object-cover object-[58%_center]",
    href: "/leistungen/unfallgutachten",
    phone: "0176 64365185",
    accentColor: "from-red-500/20 to-transparent",
  },
  {
    id: "autovermietung",
    icon: Car,
    title: "Autovermietung",
    subtitle: "Ersatzfahrzeuge",
    description:
      "Ersatzfahrzeuge direkt verfügbar. Flexible Laufzeiten und schnelle, unkomplizierte Abwicklung für Privat- und Geschäftskunden.",
    features: [
      "Sofort verfügbar",
      "Flexible Laufzeiten",
      "Schnelle Abwicklung",
      "Geprüfte Fahrzeuge",
    ],
    image: "/images/service-rental.webp",
    imageClassName: "object-cover object-[42%_center]",
    href: "/leistungen/autovermietung",
    phone: "0174 4292900",
    accentColor: "from-blue-500/20 to-transparent",
  },
  {
    id: "autoservice",
    icon: Wrench,
    title: "Autoservice & Werkstatt",
    subtitle: "Reparatur & Wartung",
    description:
      "Professioneller Werkstattservice mit zertifiziertem Fachpersonal. Vom Ölwechsel bis zur kompletten Inspektion – alles aus einer Hand.",
    features: [
      "Ölwechsel & Inspektion",
      "Reifenwechsel",
      "Dashcam-Einbau",
      "Allgemeine Reparaturen",
    ],
    image: "/images/service-workshop.webp",
    imageClassName: "object-cover object-[60%_center]",
    href: "/leistungen/autoservice",
    phone: "0177 7883206",
    accentColor: "from-amber-500/20 to-transparent",
  },
  {
    id: "detailing",
    icon: Sparkles,
    title: "Detailing",
    subtitle: "Premium Aufbereitung",
    description:
      "Premium Fahrzeugaufbereitung für anspruchsvolle Kunden. Lackaufbereitung, Politur und professionelle Innen- & Außenreinigung.",
    features: [
      "Lackaufbereitung & Politur",
      "Innen- & Außenreinigung",
      "Werterhalt",
      "Professionell zertifiziert",
    ],
    image: "/images/service-detailing.webp",
    imageClassName: "object-cover object-[56%_center]",
    href: "/leistungen/detailing",
    phone: "0177 6691006",
    accentColor: "from-emerald-500/20 to-transparent",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vier starke Bereiche – ein kompetenter Partner. Entdecken Sie unser umfassendes
            Serviceangebot für Ihr Fahrzeug.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative h-48 lg:h-auto lg:w-2/5 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      quality={74}
                      className={`${service.imageClassName ?? "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.accentColor}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-primary">
                          {service.subtitle}
                        </p>
                        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="mt-6 flex items-center gap-4">
                      <Button asChild size="sm" className="gap-2">
                        <Link href={service.href}>
                          Mehr erfahren
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <a
                        href={`tel:${service.phone.replace(/\s/g, "")}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {service.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/leistungen">
              Alle Leistungen ansehen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

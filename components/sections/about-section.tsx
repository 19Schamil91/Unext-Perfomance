import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Gegründet 2024 in Berlin",
  "Ursprünglich spezialisiert auf Unfallgutachten",
  "Heute: Vollständiger Automotive-Partner",
  "Zertifizierte Mitarbeiter und Gutachter",
  "Fokus auf Qualität und Kundenzufriedenheit",
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-car.webp"
                alt="UNEXT Teammitglied vor schwarzem BMW"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={76}
                className="object-cover object-[64%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 left-6 right-6 sm:left-8 sm:right-auto">
              <div className="flex gap-4 p-4 rounded-xl bg-card border border-border shadow-lg">
                <div className="text-center px-4">
                  <p className="text-2xl font-bold text-primary">2024</p>
                  <p className="text-xs text-muted-foreground">Gegründet</p>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center px-4">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-xs text-muted-foreground">Services</p>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center px-4">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-xs text-muted-foreground">Standort</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Über UNEXT GMBH
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Vom Unfallgutachter zum vollständigen Automotive-Partner
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              UNEXT GMBH ist ein Berliner Unternehmen, das 2024 mit dem Fokus auf professionelle
              Unfallgutachten und Soforthilfe gestartet ist. Unter der Marke UNFALLX haben wir uns
              schnell als zuverlässiger Partner für Unfallopfer etabliert.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Heute sind wir mehr als das: Als umfassender Automotive-Dienstleister bieten wir
              Autovermietung, Werkstattservice und Premium-Detailing an – alles unter einem Dach.
              Unser Ziel ist es, Ihnen bei allen Fahrzeugfragen kompetent zur Seite zu stehen.
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Button asChild className="gap-2">
                <Link href="/ueber-uns">
                  Mehr über uns erfahren
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

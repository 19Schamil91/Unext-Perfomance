import {
  Award,
  Clock,
  Euro,
  ShieldCheck,
  Users,
  MapPin,
} from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Zertifiziert",
    description: "Alle unsere Gutachter und Mitarbeiter sind geprüft und zertifiziert.",
  },
  {
    icon: Clock,
    title: "Schnelle Reaktionszeiten",
    description: "Kurzfristige Termine möglich – wir sind sofort für Sie da.",
  },
  {
    icon: Euro,
    title: "Transparente & faire Preise",
    description: "Keine versteckten Kosten. Klare Kommunikation von Anfang an.",
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässiger Service",
    description: "Professionell, termingerecht und mit höchsten Qualitätsstandards.",
  },
  {
    icon: Users,
    title: "Persönliche Beratung",
    description: "Individuelle Betreuung durch unsere erfahrenen Experten.",
  },
  {
    icon: MapPin,
    title: "Alles an einem Standort",
    description: "Vier Services unter einem Dach – bequem und zeitsparend.",
  },
]

export function WhySection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Warum UNEXT GMBH?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vertrauen Sie auf unsere Expertise und Erfahrung. Wir setzen auf Qualität,
            Transparenz und Kundenzufriedenheit.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-background hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <benefit.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

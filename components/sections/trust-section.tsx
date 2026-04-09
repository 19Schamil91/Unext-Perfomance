import { Award, Shield, BadgeCheck, FileCheck } from "lucide-react"

const badges = [
  {
    icon: Award,
    title: "Zertifizierte Gutachter",
  },
  {
    icon: Shield,
    title: "Geprüfter Service",
  },
  {
    icon: BadgeCheck,
    title: "TÜV-Standard",
  },
  {
    icon: FileCheck,
    title: "Offizielle Gutachten",
  },
]

export function TrustSection() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">
            Vertrauen Sie auf Qualität
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <badge.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">{badge.title}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground text-center">
            Platzhalter für zukünftige Zertifikate und Partnerlogos
          </p>
        </div>
      </div>
    </section>
  )
}

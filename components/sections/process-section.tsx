import { Phone, MessageSquare, Clock, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Kontakt aufnehmen",
    description: "Rufen Sie uns an, schreiben Sie uns eine E-Mail oder nutzen Sie WhatsApp.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Anliegen schildern",
    description: "Beschreiben Sie kurz Ihr Anliegen – wir beraten Sie individuell.",
  },
  {
    icon: Clock,
    step: "03",
    title: "Schnelle Rückmeldung",
    description: "Wir melden uns kurzfristig zurück und besprechen das weitere Vorgehen.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Termin & Lösung",
    description: "Sie erhalten einen zeitnahen Termin und eine professionelle Lösung.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            So funktioniert&apos;s
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            In vier einfachen Schritten zu Ihrer Lösung – schnell, unkompliziert und professionell.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden lg:block -translate-y-1/2" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden lg:block translate-x-1/2 -translate-y-1/2">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

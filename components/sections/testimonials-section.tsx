import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Michael S.",
    role: "Privatkunde",
    content:
      "Nach meinem Unfall hat UNFALLX mir schnell und unkompliziert geholfen. Das Gutachten war innerhalb von 48 Stunden fertig. Sehr professionell!",
    rating: 5,
    service: "Unfallgutachten",
  },
  {
    name: "Sandra K.",
    role: "Geschäftskundin",
    content:
      "Die Autovermietung war eine Rettung, als mein Firmenwagen in der Werkstatt war. Schnelle Abwicklung und ein top gepflegtes Ersatzfahrzeug.",
    rating: 5,
    service: "Autovermietung",
  },
  {
    name: "Thomas M.",
    role: "Privatkunde",
    content:
      "Das Detailing meines BMW war erstklassig. Der Lack sieht aus wie neu! Absolut empfehlenswert für alle, die Wert auf ihr Fahrzeug legen.",
    rating: 5,
    service: "Detailing",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Das sagen unsere Kunden
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kundenzufriedenheit steht bei uns an erster Stelle. Überzeugen Sie sich selbst.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative border-border/50 bg-card hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed">{testimonial.content}</p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Placeholder Notice */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Weitere Kundenbewertungen folgen in Kürze.
        </p>
      </div>
    </section>
  )
}

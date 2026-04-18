import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function TestimonialsSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.testimonials

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((testimonial) => (
            <Card
              key={`${testimonial.name}-${testimonial.service}`}
              className="relative border-border/50 bg-card transition-all duration-300 hover:border-primary/30"
            >
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />

                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="leading-relaxed text-foreground">{testimonial.content}</p>

                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <span className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">{t.notice}</p>
      </div>
    </section>
  )
}

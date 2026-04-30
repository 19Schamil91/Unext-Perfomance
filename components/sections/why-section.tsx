/*
  Diese Datei zeigt den Bereich mit Gruenden fuer UNEXT.
  Sie zeigt Vorteile als Karten mit Icon, Titel und kurzer Erklaerung.
  Besucher koennen vergleichen, warum UNEXT fuer ihre Anfrage passt.
*/
import { Award, Clock, Euro, MapPin, ShieldCheck, Users } from "lucide-react"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const icons = [Award, Clock, Euro, ShieldCheck, Users, MapPin]

export async function WhySection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.why

  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <h2 className="mx-auto text-heading-fluid font-semibold text-foreground lg:whitespace-nowrap">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 text-body-fluid text-foreground/82 lg:whitespace-nowrap">{t.description}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.benefits.map((benefit, index) => {
            const Icon = icons[index]

            return (
              <div
                key={benefit.title}
                className="group relative flex flex-col items-center rounded-xl border border-border/50 bg-background p-6 text-center transition-all duration-300 hover:border-primary/30"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="measure-card-copy text-card-heading-fluid text-foreground">{benefit.title}</h3>
                <p className="mt-2 measure-card-copy text-body-compact text-foreground/78">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

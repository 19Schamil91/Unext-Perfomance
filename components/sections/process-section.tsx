import { CheckCircle, Clock, MessageSquare, Phone } from "lucide-react"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const icons = [Phone, MessageSquare, Clock, CheckCircle]

export async function ProcessSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.process

  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.description}</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-border lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((item, index) => {
              const Icon = icons[index]

              return (
                <div key={item.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {index < t.steps.length - 1 && (
                    <div className="absolute right-0 top-8 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

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
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <h2 className="text-[2rem] font-bold tracking-[-0.03em] text-foreground sm:text-4xl sm:tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4 sm:text-lg">{t.description}</p>
        </div>

        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {t.steps.map((item, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={item.step}
                  className="relative rounded-[1.5rem] border border-border/60 bg-background p-5 text-left shadow-sm sm:items-center sm:text-center lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none"
                >
                  <div className="relative z-10 mb-4 inline-flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background sm:h-16 sm:w-16">
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

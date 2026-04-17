import { Award, BadgeCheck, FileCheck, Shield } from "lucide-react"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const icons = [Award, Shield, BadgeCheck, FileCheck]

export async function TrustSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.trust

  return (
    <section className="border-y border-border bg-card py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-6 max-w-xs text-center text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:mb-8 sm:max-w-none sm:text-sm sm:tracking-wider">
            {t.title}
          </p>

          <div className="grid w-full gap-3 sm:gap-4 md:flex md:flex-wrap md:items-center md:justify-center md:gap-6 lg:gap-16">
            {t.badges.map((badge, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={badge}
                  className="flex items-center gap-3 rounded-[1.15rem] border border-border/70 bg-background/65 px-4 py-3 text-muted-foreground md:rounded-none md:border-none md:bg-transparent md:px-0 md:py-0"
                >
                  <Icon className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8" />
                  <span className="measure-card-copy text-sm font-medium leading-5 [text-wrap:balance]">{badge}</span>
                </div>
              )
            })}
          </div>

          {t.note ? <p className="mt-8 text-center text-xs text-muted-foreground">{t.note}</p> : null}
        </div>
      </div>
    </section>
  )
}

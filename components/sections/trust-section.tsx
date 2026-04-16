import { Award, BadgeCheck, FileCheck, Shield } from "lucide-react"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const icons = [Award, Shield, BadgeCheck, FileCheck]

export async function TrustSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.trust

  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t.title}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-16">
            {t.badges.map((badge, index) => {
              const Icon = icons[index]

              return (
                <div key={badge} className="flex items-center gap-3 text-muted-foreground">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">{badge}</span>
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

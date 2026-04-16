import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function AboutSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.about

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative lg:pr-6">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-sm">
              <Image
                src="/images/hero-car.webp"
                alt="UNEXT team member"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={76}
                className="object-cover object-[64%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-transparent dark:from-background/28" />
            </div>

            <div className="absolute -bottom-6 left-4 right-4 sm:left-8 sm:right-auto">
              <div className="flex flex-wrap justify-center gap-4 rounded-xl border border-border bg-card p-4 shadow-lg sm:flex-nowrap">
                <div className="min-w-[84px] px-2 text-center">
                  <p className="text-2xl font-bold text-primary">2024</p>
                  <p className="text-xs text-muted-foreground">{t.stats.founded}</p>
                </div>
                <div className="hidden w-px bg-border sm:block" />
                <div className="min-w-[84px] px-2 text-center">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-xs text-muted-foreground">{t.stats.services}</p>
                </div>
                <div className="hidden w-px bg-border sm:block" />
                <div className="min-w-[84px] px-2 text-center">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-xs text-muted-foreground">{t.stats.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{t.paragraph1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.paragraph2}</p>

            <ul className="mt-8 space-y-3">
              {t.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild className="gap-2">
                <Link href="/ueber-uns">
                  {t.cta}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

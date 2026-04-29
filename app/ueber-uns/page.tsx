/*
  Diese Datei ist die Ueber-uns-Seite.
  Sie zeigt Informationen zur UNEXT GMBH, ihre Werte und die Marke UNFALLX.
  Der Nutzer kann mehr ueber das Unternehmen lesen und zur passenden Leistung wechseln.
*/

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle, Heart, Target, Users } from "lucide-react"
import { CtaSection } from "@/components/sections/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).aboutPage

  return buildPageMetadata(locale, `${t.title} | UNEXT GMBH Berlin`, t.description, "/ueber-uns")
}

const icons = [Award, Users, Target, Heart]

export default async function UeberUnsPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).aboutPage

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-car.webp"
              alt="UNEXT team member"
              fill
              sizes="100vw"
              quality={80}
              className="object-cover object-[62%_center] md:object-[72%_center]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-5xl">
              <h1 className="text-display-fluid text-foreground lg:whitespace-nowrap">
                {t.title}
              </h1>
              <p className="mt-6 max-w-none text-[clamp(1rem,0.98rem+0.18vw,1.15rem)] leading-[1.72] text-muted-foreground/92">
                {t.description.split("\n").map((line, index) => (
                  <span key={`${line}-${index}`} className="block lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {t.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t.storyEyebrow}
                </p>
                <h2 className="mt-2 measure-heading text-heading-fluid font-semibold text-foreground">
                  {t.storyTitle}
                </h2>
                <div className="mt-6 measure-intro-tight space-y-4 text-body-fluid text-muted-foreground">
                  {t.storyParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-primary/30 pl-8 lg:pl-10">
                <div className="space-y-8">
                  {t.milestones.map((milestone, index) => (
                    <div key={`${milestone.year}-${milestone.title}`} className="relative">
                      <div className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {milestone.year}
                        </span>
                        <h3 className="max-w-none text-title-fluid font-semibold text-foreground lg:whitespace-nowrap">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 max-w-[42ch] text-[0.98rem] leading-[1.62] text-muted-foreground">
                          {milestone.description.split("\n").map((line, index) => (
                            <span key={`${line}-${index}`} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mx-auto measure-heading text-heading-fluid font-semibold text-foreground">
                {t.valuesTitle}
              </h2>
              <p className="mx-auto mt-4 measure-intro text-body-fluid text-muted-foreground">{t.valuesDescription}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.values.map((value, index) => {
                const Icon = icons[index]

                return (
                  <Card
                    key={value.title}
                    className="border-border/50 bg-background text-center transition-all hover:border-primary/30"
                  >
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="measure-card-copy text-title-fluid font-semibold text-foreground">{value.title}</h3>
                      <p className="mt-2 measure-card-copy text-body-compact text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-12">
              <div className="lg:order-2 lg:pl-6">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[21rem] overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-sm lg:max-w-[20rem] xl:max-w-[22rem]">
                  {/* Dieses Foto zeigt den Mitarbeiter im Buero ohne Beschnitt oder Verzerrung. */}
                  <Image
                    src="/images/about-office.webp"
                    alt="UNEXT Mitarbeiter im Büro"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={82}
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="lg:order-1">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                  <span className="text-sm font-semibold text-primary">{t.subBrandBadge}</span>
                </div>
                <h2 className="measure-heading text-heading-fluid font-semibold text-foreground">
                  {t.subBrandTitle}
                </h2>
                <p className="mt-6 max-w-[64ch] text-body-compact leading-[1.72] text-muted-foreground">
                  {t.subBrandDescription.split("\n").map((line, index, lines) => (
                    <span key={`${line}-${index}`} className="inline lg:block">
                      {line}
                      {index < lines.length - 1 ? " " : null}
                    </span>
                  ))}
                </p>
                <ul className="mt-6 space-y-3">
                  {t.subBrandHighlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild className="gap-2">
                    <Link href="/leistungen/unfallgutachten">
                      {t.subBrandCta}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

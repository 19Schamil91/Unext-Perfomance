import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Car, FileCheck, Sparkles, Wrench } from "lucide-react"
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
  const t = getTranslations(locale).servicesPage

  return buildPageMetadata(locale, `${t.title} | UNEXT GMBH Berlin`, t.description, "/leistungen")
}

const serviceMeta = [
  {
    icon: FileCheck,
    image: "/images/service-accident.webp",
    imageClassName: "object-cover object-[58%_center]",
    href: "/leistungen/unfallgutachten",
    phone: "0176 64365185",
  },
  {
    icon: Car,
    image: "/images/service-rental.webp",
    imageClassName: "object-cover object-[42%_center]",
    href: "/leistungen/autovermietung",
    phone: "0174 4292900",
  },
  {
    icon: Wrench,
    image: "/images/service-workshop.webp",
    imageClassName: "object-cover object-[60%_center]",
    href: "/leistungen/autoservice",
    phone: "0177 7883206",
  },
  {
    icon: Sparkles,
    image: "/images/service-detailing.webp",
    imageClassName: "object-cover object-[56%_center]",
    href: "/leistungen/detailing",
    phone: "0177 6691006",
  },
] as const

export default async function LeistungenPage() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).servicesPage

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-16">
              {t.items.map((service, index) => {
                const meta = serviceMeta[index]

                return (
                  <Card key={service.title} className="overflow-hidden border-border/50 bg-card">
                    <CardContent className="p-0">
                      <div className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                        <div className="relative h-64 lg:h-auto lg:w-1/2">
                          <Image
                            src={meta.image}
                            alt={service.title}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            quality={76}
                            className={meta.imageClassName}
                          />
                        </div>

                        <div className="flex-1 p-8 lg:p-12">
                          <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <meta.icon className="h-7 w-7" />
                            </div>
                            <div>
                              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                                {service.subtitle}
                              </p>
                              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                                {service.title}
                              </h2>
                            </div>
                          </div>

                          <p className="mt-6 leading-relaxed text-muted-foreground">
                            {service.description}
                          </p>

                          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button asChild className="gap-2">
                              <Link href={meta.href}>
                                {getTranslations(locale).home.services.learnMore}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                            <a
                              href={`tel:${meta.phone.replace(/\s/g, "")}`}
                              className="text-sm text-muted-foreground transition-colors hover:text-primary"
                            >
                              {t.directCall} {meta.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

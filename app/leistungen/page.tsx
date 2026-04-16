import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Car, ClipboardCheck, FileCheck, Phone, Sparkles, Truck, Wrench } from "lucide-react"
import { CtaSection } from "@/components/sections/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceSelectionLink } from "@/components/service-selection-link"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

interface ServiceMeta {
  icon: typeof FileCheck
  image: string
  imageClassName: string
  href: string
  contactText?: string
  contactHref: string
}

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
    contactText: "0176 64365185",
    contactHref: "tel:+4917664365185",
  },
  {
    icon: Car,
    image: "/images/service-rental.webp",
    imageClassName: "object-cover object-[38%_30%] sm:object-[42%_38%] lg:object-[42%_center]",
    href: "/leistungen/autovermietung",
    contactText: "0174 4292900",
    contactHref: "tel:+491744292900",
  },
  {
    icon: Wrench,
    image: "/images/service-workshop.webp",
    imageClassName: "object-cover object-[60%_center]",
    href: "/leistungen/autoservice",
    contactText: "0177 7883206",
    contactHref: "tel:+491777883206",
  },
  {
    icon: Sparkles,
    image: "/images/service-detailing.webp",
    imageClassName: "object-cover object-[56%_center]",
    href: "/leistungen/detailing",
    contactText: "0177 6691006",
    contactHref: "tel:+491776691006",
  },
  {
    icon: ClipboardCheck,
    image: "/images/service-registration.webp",
    imageClassName: "object-cover object-[38%_center]",
    href: "/leistungen/zulassungsservice",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
  },
  {
    icon: Truck,
    image: "/images/service-towing.webp",
    imageClassName: "object-cover object-[44%_center]",
    href: "/leistungen/abschleppdienst-pannenhilfe",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
  },
] satisfies readonly ServiceMeta[]

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
                const contactText = meta.contactText ?? ""

                return (
                  <Card key={service.title} className="overflow-hidden border-border/50 bg-card">
                    <CardContent className="p-4 sm:p-5 lg:p-6">
                      <div
                        className={`flex flex-col gap-5 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-stretch`}
                      >
                        <div className="relative h-64 overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-sm sm:h-72 lg:w-[42%] lg:min-h-[320px]">
                          <Image
                            src={meta.image}
                            alt={service.title}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            quality={76}
                            className={meta.imageClassName}
                          />
                        </div>

                        <div className="flex-1 px-1 py-1 sm:px-2 lg:px-4 lg:py-4">
                          <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <meta.icon className="h-7 w-7" />
                            </div>
                            <div>
                              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                                {service.subtitle}
                              </p>
                              <h2 className="text-xl font-bold text-foreground sm:text-3xl">
                                {service.title}
                              </h2>
                            </div>
                          </div>

                          <p className="mt-5 leading-7 text-muted-foreground sm:mt-6">
                            {service.description}
                          </p>

                          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-foreground">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button asChild className="gap-2">
                              <ServiceSelectionLink
                                href={meta.href}
                                serviceName={meta.href.split("/").at(-1) ?? service.title}
                                serviceTitle={service.title}
                              >
                                {getTranslations(locale).home.services.learnMore}
                                <ArrowRight className="h-4 w-4" />
                              </ServiceSelectionLink>
                            </Button>
                            <Button asChild variant="outline" className="w-full gap-2 sm:hidden">
                              <a href={meta.contactHref}>
                                <Phone className="h-4 w-4" />
                                {contactText}
                              </a>
                            </Button>
                            <a
                              href={meta.contactHref}
                              className="hidden text-sm leading-6 text-muted-foreground transition-colors hover:text-primary sm:inline"
                            >
                              {`${t.directCall} ${contactText}`}
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

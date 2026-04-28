/*
  Diese Datei zeigt den Leistungsbereich auf der Startseite.
  Sie zeigt die sechs Hauptleistungen als Karten mit Bild, Kurztext, Vorteilen und Kontaktaktion.
  Besucher koennen eine Leistung ansehen, Details oeffnen oder direkt anrufen.
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Car, ClipboardCheck, FileCheck, Phone, Sparkles, Truck, Wrench } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceSelectionLink } from "@/components/service-selection-link"
import { homeServiceAnchors } from "@/lib/service-anchors"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

type ServiceMeta = {
  icon: typeof FileCheck
  image: string
  imageClassName: string
  href: string
  contactText?: string
  contactHref?: string
  accentColor: string
}

const serviceMeta = [
  {
    icon: FileCheck,
    image: "/images/home-service-accident.webp",
    imageClassName: "object-cover object-center",
    href: "/leistungen/unfallgutachten",
    contactText: "0176 64365185",
    contactHref: "tel:+4917664365185",
    accentColor: "from-red-500/20 to-transparent",
  },
  {
    icon: Car,
    image: "/images/home-service-rental.webp",
    imageClassName: "object-cover object-[42%_center]",
    href: "/leistungen/autovermietung",
    contactText: "0174 4292900",
    contactHref: "tel:+491744292900",
    accentColor: "from-blue-500/20 to-transparent",
  },
  {
    icon: Wrench,
    image: "/images/home-service-workshop.webp",
    imageClassName: "object-cover object-[58%_center]",
    href: "/leistungen/autoservice",
    contactText: "0177 7883206",
    contactHref: "tel:+491777883206",
    accentColor: "from-amber-500/20 to-transparent",
  },
  {
    icon: Sparkles,
    image: "/images/home-service-detailing.webp",
    imageClassName: "object-cover object-[42%_center]",
    href: "/leistungen/detailing",
    contactText: "0177 6691006",
    contactHref: "tel:+491776691006",
    accentColor: "from-emerald-500/20 to-transparent",
  },
  {
    icon: ClipboardCheck,
    image: "/images/home-service-registration.webp",
    imageClassName: "object-cover object-[42%_center]",
    href: "/leistungen/zulassungsservice",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-cyan-500/20 to-transparent",
  },
  {
    icon: Truck,
    image: "/images/service-towing.webp",
    imageClassName: "object-cover object-[44%_center]",
    href: "/leistungen/abschleppdienst-pannenhilfe",
    contactText: "030 23613927",
    contactHref: "tel:+493023613927",
    accentColor: "from-orange-500/20 to-transparent",
  },
] satisfies readonly ServiceMeta[]

export async function ServicesSection() {
  // Diese Daten bestimmen pro Leistung Bild, Icon und direkte Kontaktaktion.
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.services

  return (
    <section className="bg-background py-22 lg:py-30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-5xl text-center sm:mb-16">
          <h2 className="mx-auto max-w-[24rem] text-[clamp(1.85rem,1.58rem+1.1vw,2.2rem)] leading-[1.08] font-semibold text-foreground sm:max-w-[15ch] sm:text-[clamp(1.9rem,1.35rem+1.45vw,3.15rem)] sm:leading-[1.04] sm:tracking-[-0.03em] sm:font-[650] lg:max-w-none">
            {t.title}
          </h2>
          <ReadableText
            text={t.description}
            targetLineLength={180}
            className="mx-auto mt-3 max-w-[34rem] text-[1rem] leading-[1.7] text-muted-foreground sm:mt-4 sm:max-w-none sm:text-[clamp(1rem,0.98rem+0.24vw,1.12rem)] sm:leading-[1.78]"
          />
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {t.items.map((service, index) => {
            const meta = serviceMeta[index]
            const contactText = meta.contactText ?? ""

            return (
              <Card
                key={service.title}
                id={homeServiceAnchors[index]}
                className="group relative scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-border/65 bg-card/98 shadow-[0_16px_38px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_22px_48px_rgba(15,23,42,0.14)]"
              >
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex h-full flex-col">
                    <div className="relative aspect-square overflow-hidden rounded-[1.45rem] border border-border/55 bg-background shadow-[0_10px_22px_rgba(15,23,42,0.08)]">
                      <Image
                        src={meta.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
                        quality={74}
                        className={`${meta.imageClassName} transition-transform duration-500 group-hover:scale-105`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${meta.accentColor}`} />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col px-1 pt-5 sm:px-2 lg:px-1">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <meta.icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
                            {service.subtitle}
                          </p>
                          <h3 className="mt-1 text-[clamp(1.14rem,1.02rem+0.38vw,1.42rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground lg:whitespace-nowrap">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-7 text-muted-foreground">
                        {service.description}
                      </p>

                      <ul className="mt-5 grid gap-y-3.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="grid grid-cols-[0.45rem_minmax(0,1fr)] items-start gap-x-3 rounded-xl border border-border/55 bg-background/70 px-3 py-2.5 text-body-compact text-muted-foreground"
                          >
                            <span className="mt-[0.58rem] h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-3 border-t border-border/55 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <Button asChild size="sm" className="w-full gap-2 sm:w-auto">
                          <ServiceSelectionLink
                            href={meta.href}
                            serviceName={meta.href.split("/").at(-1) ?? service.title}
                            serviceTitle={service.title}
                          >
                            {t.learnMore}
                            <ArrowRight className="h-4 w-4" />
                          </ServiceSelectionLink>
                        </Button>
                        {meta.contactHref ? (
                          <>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="group w-full gap-2 border-primary/40 bg-primary/12 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:!border-primary/55 hover:!bg-primary/12 hover:!text-foreground sm:ml-auto sm:w-auto"
                            >
                              <a href={meta.contactHref}>
                                <Phone className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110" />
                                <span className="transition-colors duration-300 group-hover:text-primary">{contactText}</span>
                              </a>
                            </Button>
                          </>
                        ) : (
                          <span className="text-sm text-muted-foreground">{contactText}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Button asChild variant="outline" size="lg" className="w-full gap-2 sm:w-auto">
            <Link href="/leistungen">
              {t.viewAll}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

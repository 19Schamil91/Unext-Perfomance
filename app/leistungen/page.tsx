/*
  Diese Datei ist die Uebersichtsseite fuer alle Leistungen.
  Sie zeigt die sechs Hauptleistungen mit Bildern, Vorteilen und Kontaktaktionen.
  Besucher koennen eine Leistung auswaehlen, Details oeffnen oder direkt anrufen.
*/
import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Car, ClipboardCheck, FileCheck, Phone, Sparkles, Truck, Wrench } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { CtaSection } from "@/components/sections/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceSelectionLink } from "@/components/service-selection-link"
import type { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

type ServiceMeta = {
  icon: typeof FileCheck
  image: string
  imageClassName: string
  href: string
  contactText?: string
  contactHref: string
}

const serviceTitleLineBreaks: Partial<Record<Locale, Record<string, string[]>>> = {
  en: {
    "Accident Reports & Immediate Assistance": ["Accident Reports", "& Immediate Assistance"],
    "Towing & Roadside Help": ["Towing & Roadside", "Help"],
  },
  ru: {
    "Экспертиза ДТП и срочная помощь": ["Экспертиза ДТП", "и срочная помощь"],
    "Сервис регистрации авто": ["Сервис регистрации", "авто"],
    "Эвакуатор и помощь на дороге": ["Эвакуатор", "и помощь на дороге"],
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).servicesPage

  return buildPageMetadata(locale, `${t.title} | UNEXT GMBH Berlin`, t.description, "/leistungen")
}

const serviceMeta = [
  {
    icon: FileCheck,
    image: "/images/home-service-accident.webp",
    imageClassName: "object-cover object-[center_top]",
    href: "/leistungen/unfallgutachten",
    contactText: "0176 64365185",
    contactHref: "tel:+4917664365185",
  },
  {
    icon: Car,
    image: "/images/home-service-rental.webp",
    imageClassName: "object-cover object-[42%_top]",
    href: "/leistungen/autovermietung",
    contactText: "0174 4292900",
    contactHref: "tel:+491744292900",
  },
  {
    icon: Wrench,
    image: "/images/home-service-workshop.webp",
    imageClassName: "object-cover object-[58%_top]",
    href: "/leistungen/autoservice",
    contactText: "0177 7883206",
    contactHref: "tel:+491777883206",
  },
  {
    icon: Sparkles,
    image: "/images/home-service-detailing.webp",
    imageClassName: "object-cover object-[42%_top]",
    href: "/leistungen/detailing",
    contactText: "0177 6691006",
    contactHref: "tel:+491776691006",
  },
  {
    icon: ClipboardCheck,
    image: "/images/home-service-registration.webp",
    imageClassName: "object-cover object-[42%_center]",
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
  const fixedIntroLines =
    locale === "de"
      ? [
          "Diese 6 Hauptleistungen bilden den Kern von UNEXT.",
          "Sie sehen sofort, wobei wir Sie direkt unterstützen können - klar, schnell und ohne Umwege.",
        ]
      : locale === "en"
        ? [
            "UNEXT GMBH offers a comprehensive range of vehicle-related services.",
            "Six strong business areas under one roof - professional, reliable and always there for you.",
          ]
        : locale === "ru"
          ? [
              "UNEXT GMBH предлагает полный спектр услуг вокруг автомобиля.",
              "Шесть сильных направлений под одной крышей - профессионально, надежно и всегда рядом.",
            ]
      : null

  const renderServiceTitle = (title: string, balanced: boolean) => {
    const lines = balanced ? serviceTitleLineBreaks[locale]?.[title] : null

    if (!lines) {
      return <span className={balanced ? "text-balance" : undefined}>{title}</span>
    }

    return lines.map((line) => (
      <span key={`${title}-${line}`} className="block">
        {line}
      </span>
    ))
  }

  const renderServiceCards = () => (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {t.items.map((service, index) => {
        const meta = serviceMeta[index]
        const contactText = meta.contactText ?? ""

        return (
          <Card
            key={service.title}
            className="overflow-hidden rounded-[1.45rem] border border-border/55 bg-card shadow-[0_14px_32px_rgba(15,23,42,0.07)] transition-colors hover:border-primary/30"
          >
            <CardContent className="flex h-full flex-col p-4 sm:p-5">
              <div className="relative aspect-[16/8.5] overflow-hidden rounded-[1.15rem] border border-border/50 bg-background shadow-sm">
                  <Image
                    src={meta.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 100vw"
                    quality={72}
                    className={meta.imageClassName}
                  />
              </div>

              <div className="flex min-w-0 flex-1 flex-col pt-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <meta.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
                      {service.subtitle}
                    </p>
                    <h2 className="mt-1 text-card-heading-fluid text-foreground">
                      {renderServiceTitle(service.title, true)}
                    </h2>
                  </div>
                </div>

                <p className="mt-4 max-w-[42ch] text-[0.98rem] leading-[1.62] text-foreground/78 text-pretty">
                  {service.description}
                </p>

                <ul className="mt-5 grid gap-y-2.5">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="grid grid-cols-[0.45rem_minmax(0,1fr)] items-start gap-x-3 rounded-xl border border-border/45 bg-background/55 px-3 py-2.5 text-sm leading-6 text-foreground/82"
                    >
                      <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 border-t border-border/50 pt-5 sm:flex-row sm:items-center sm:justify-between">
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
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group w-full gap-2 border-primary/40 bg-primary/10 font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:!border-primary/55 hover:!bg-primary/12 hover:!text-foreground sm:ml-auto sm:w-auto"
                  >
                    <a href={meta.contactHref}>
                      <Phone className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110" />
                      <span className="transition-colors duration-300 group-hover:text-primary">{contactText}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="mx-auto max-w-[24rem] text-[clamp(2rem,1.74rem+1.2vw,2.45rem)] leading-[1.05] font-semibold text-foreground sm:max-w-[15ch] sm:text-[clamp(2.35rem,1.65rem+2.7vw,4.9rem)] sm:leading-[0.98] sm:tracking-[-0.04em] lg:max-w-none lg:whitespace-nowrap">
                {t.title}
              </h1>
              {fixedIntroLines ? (
                <p className="mx-auto mt-5 max-w-[36rem] text-[1rem] leading-[1.7] text-muted-foreground sm:mt-6 sm:max-w-none sm:text-[clamp(1rem,0.98rem+0.24vw,1.12rem)] sm:leading-[1.78]">
                  {fixedIntroLines.map((line, index) => (
                    <span key={line} className="inline sm:block lg:whitespace-nowrap">
                      {line}
                      {index < fixedIntroLines.length - 1 ? " " : null}
                    </span>
                  ))}
                </p>
              ) : (
                <ReadableText
                  text={t.description}
                  targetLineLength={76}
                  className="mx-auto mt-6 measure-intro-tight text-body-fluid text-muted-foreground"
                />
              )}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">{renderServiceCards()}</div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

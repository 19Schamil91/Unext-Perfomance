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

interface ServiceMeta {
  icon: typeof FileCheck
  image: string
  imageClassName: string
  href: string
  contactText?: string
  contactHref: string
}

const serviceDescriptionLineLength = {
  de: 54,
  en: 50,
  ru: 48,
} satisfies Record<Locale, number>

const serviceTitleLineBreaks: Partial<Record<Locale, Record<string, string[]>>> = {
  de: {
    "Kfz-Werkstatt & Reparatur": ["Kfz-Werkstatt", "& Reparatur"],
    "Abschleppdienst & Pannenhilfe": ["Abschleppdienst", "& Pannenhilfe"],
  },
  en: {
    "Accident Reports & Immediate Assistance": ["Accident Reports", "& Immediate Assistance"],
    "Vehicle Registration Service": ["Vehicle Registration", "Service"],
    "Towing & Roadside Assistance": ["Towing", "& Roadside Assistance"],
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
  const descriptionLineLength = serviceDescriptionLineLength[locale]
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

  const renderServiceCards = (balancedText: boolean) => (
    <div className="space-y-16">
      {t.items.map((service, index) => {
        const meta = serviceMeta[index]
        const contactText = meta.contactText ?? ""

        return (
          <Card
            key={service.title}
            className="overflow-hidden rounded-[1.85rem] border border-border/55 bg-card shadow-[0_16px_38px_rgba(15,23,42,0.08)]"
          >
            <CardContent className="p-4 sm:p-5 lg:p-6">
              <div
                className={`flex flex-col gap-5 ${index % 2 === 1 ? "lg:grid-cols-[minmax(0,1fr)_18rem]" : "lg:grid-cols-[18rem_minmax(0,1fr)]"} lg:grid lg:items-stretch lg:gap-6`}
              >
                <div className="relative h-64 overflow-hidden rounded-[1.6rem] border border-border/50 bg-background shadow-sm sm:h-72 lg:h-full lg:min-h-[21rem]">
                  <Image
                    src={meta.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={76}
                    className={meta.imageClassName}
                  />
                </div>

                <div className="flex min-w-0 flex-col px-1 py-1 sm:px-2 lg:px-1 lg:py-2">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <meta.icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
                        {service.subtitle}
                      </p>
                      <h2
                        className={
                          balancedText
                            ? "mt-1 max-w-[19ch] text-[clamp(1.22rem,1.06rem+0.46vw,1.58rem)] leading-[1.12] font-bold tracking-[-0.02em] text-foreground text-balance"
                            : "mt-1 text-[clamp(1.22rem,1.06rem+0.46vw,1.58rem)] leading-[1.08] font-bold tracking-[-0.02em] text-foreground lg:whitespace-nowrap"
                        }
                      >
                        {renderServiceTitle(service.title, balancedText)}
                      </h2>
                    </div>
                  </div>

                  {balancedText ? (
                    <ReadableText
                      text={service.description}
                      targetLineLength={descriptionLineLength}
                      className="mt-5 max-w-[64ch] text-[1rem] leading-8 text-muted-foreground sm:mt-6"
                    />
                  ) : (
                    <p className="mt-5 max-w-[62ch] text-[1rem] leading-8 text-muted-foreground sm:mt-6">
                      {service.description}
                    </p>
                  )}

                  <ul className="mt-6 grid gap-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="grid grid-cols-[0.45rem_minmax(0,1fr)] items-start gap-x-3 rounded-xl border border-border/45 bg-background/55 px-3 py-2.5 text-body-compact text-foreground"
                      >
                        <span className="mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
                      className="group w-full gap-2 border-primary/40 bg-primary/12 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:!border-primary/55 hover:!bg-primary/12 hover:!text-foreground sm:ml-auto sm:w-auto"
                    >
                      <a href={meta.contactHref}>
                        <Phone className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110" />
                        <span className="transition-colors duration-300 group-hover:text-primary">{contactText}</span>
                      </a>
                    </Button>
                  </div>
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
              <h1 className="mx-auto max-w-[14ch] text-display-fluid text-foreground sm:max-w-[15ch] lg:max-w-none lg:whitespace-nowrap">
                {t.title}
              </h1>
              {fixedIntroLines ? (
                <p className="mx-auto mt-6 max-w-none text-body-fluid text-muted-foreground">
                  {fixedIntroLines.map((line) => (
                    <span key={line} className="block lg:whitespace-nowrap">
                      {line}
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
          <div className="mx-auto max-w-7xl px-4 lg:px-8">{renderServiceCards(true)}</div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

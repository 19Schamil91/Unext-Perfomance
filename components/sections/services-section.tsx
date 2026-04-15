import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Car, ClipboardCheck, FileCheck, Sparkles, Truck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

interface ServiceMeta {
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
    image: "/images/service-accident.webp",
    imageClassName: "object-cover object-[58%_center]",
    href: "/leistungen/unfallgutachten",
    contactText: "0176 64365185",
    contactHref: "tel:+4917664365185",
    accentColor: "from-red-500/20 to-transparent",
  },
  {
    icon: Car,
    image: "/images/service-rental.webp",
    imageClassName: "object-cover object-[28%_center] sm:object-[36%_center] lg:object-[42%_center]",
    href: "/leistungen/autovermietung",
    contactText: "0174 4292900",
    contactHref: "tel:+491744292900",
    accentColor: "from-blue-500/20 to-transparent",
  },
  {
    icon: Wrench,
    image: "/images/service-workshop.webp",
    imageClassName: "object-cover object-[60%_center]",
    href: "/leistungen/autoservice",
    contactText: "0177 7883206",
    contactHref: "tel:+491777883206",
    accentColor: "from-amber-500/20 to-transparent",
  },
  {
    icon: Sparkles,
    image: "/images/service-detailing.webp",
    imageClassName: "object-cover object-[56%_center]",
    href: "/leistungen/detailing",
    contactText: "0177 6691006",
    contactHref: "tel:+491776691006",
    accentColor: "from-emerald-500/20 to-transparent",
  },
  {
    icon: ClipboardCheck,
    image: "/images/service-registration.webp",
    imageClassName: "object-cover object-[38%_center]",
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
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.services

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.items.map((service, index) => {
            const meta = serviceMeta[index]
            const contactText = meta.contactText ?? ""

            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative h-56 overflow-hidden sm:h-60 lg:h-auto lg:w-2/5">
                      <Image
                        src={meta.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        quality={74}
                        className={`${meta.imageClassName} transition-transform duration-500 group-hover:scale-105`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${meta.accentColor}`} />
                    </div>

                    <div className="flex-1 p-5 sm:p-6 lg:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <meta.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-primary">
                            {service.subtitle}
                          </p>
                          <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
                        {service.description}
                      </p>

                      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <Button asChild size="sm" className="gap-2">
                          <Link href={meta.href}>
                            {t.learnMore}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        {meta.contactHref ? (
                          <a
                            href={meta.contactHref}
                            className="text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {contactText}
                          </a>
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

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
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

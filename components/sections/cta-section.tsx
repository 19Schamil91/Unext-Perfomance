/*
  Diese Datei definiert den abschliessenden Kontaktbereich auf der Startseite.
  Sie hebt die schnelle Kontaktaufnahme visuell hervor und bietet mehrere direkte Aktionen.
  Nutzer koennen direkt anrufen, WhatsApp oeffnen oder zur Kontaktseite wechseln.
*/
import Link from "next/link"
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { Button } from "@/components/ui/button"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function CtaSection() {
  // Dieser Bereich zeigt pro Sprache eine fest kontrollierte Zeilenaufteilung.
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.cta
  const fixedDescriptionLines =
    locale === "de"
      ? [
          "Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Wir sagen Ihnen direkt,",
          "wie wir Ihnen bei Unfall, Werkstatt, Mietwagen, Zulassung oder Pannenhilfe weiterhelfen.",
        ]
      : locale === "en"
        ? [
            "Call us or write to us on WhatsApp. We will tell you directly",
            "how we can help with accidents, workshop service, rental cars,",
            "registration or roadside assistance.",
          ]
        : locale === "ru"
          ? [
              "Позвоните нам или напишите в WhatsApp. Мы сразу скажем,",
              "как можем помочь с ДТП, автосервисом, арендой автомобиля,",
              "регистрацией или помощью на дороге.",
            ]
          : null

  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-card py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(115,18,28,0.42),rgba(115,18,28,0.18)_42%,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-4xl xl:max-w-none">
            <div className="mb-4 flex items-center gap-2 text-primary-foreground/80">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">{t.badge}</span>
            </div>
            <h2 className="max-w-[22rem] text-[clamp(1.85rem,1.5rem+1.15vw,2.65rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-primary-foreground sm:max-w-[18ch] lg:max-w-none lg:whitespace-nowrap">
              {t.title}
            </h2>
            {fixedDescriptionLines ? (
              <p className="mt-4 max-w-[36rem] text-body-fluid text-primary-foreground/86 sm:max-w-[46ch] lg:max-w-none">
                {fixedDescriptionLines.map((line, index) => (
                  <span key={line} className="inline sm:block lg:whitespace-nowrap">
                    {line}
                    {index < fixedDescriptionLines.length - 1 ? " " : null}
                  </span>
                ))}
              </p>
            ) : (
              <ReadableText
                text={t.description}
                targetLineLength={56}
                className="mt-4 max-w-[62ch] text-body-fluid text-primary-foreground/86"
              />
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full gap-2 bg-white font-semibold text-primary shadow-[0_16px_34px_rgba(15,23,42,0.28)] hover:bg-white/92 sm:w-auto"
            >
              <a href="tel:+493023613927">
                <Phone className="h-5 w-5" />
                030 23613927
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full gap-2 border-white/35 bg-transparent text-white hover:bg-white/12 hover:text-white sm:w-auto"
            >
              <a href="https://wa.me/4917664365185" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t.whatsapp}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full gap-2 border-white/35 bg-transparent text-white hover:bg-white/12 hover:text-white sm:w-auto"
            >
              <Link href="/kontakt">
                {t.inquiry}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

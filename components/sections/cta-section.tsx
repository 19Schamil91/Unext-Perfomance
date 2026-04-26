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
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_0%,_rgba(0,0,0,0.36)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/35" />

      <div className="relative mx-auto max-w-[90rem] px-4 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-4xl xl:max-w-none">
            <div className="mb-4 flex items-center gap-2 text-primary-foreground/80">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">{t.badge}</span>
            </div>
            <h2 className="max-w-[14ch] text-heading-fluid font-semibold tracking-[-0.03em] text-primary-foreground sm:max-w-[16ch] lg:max-w-none lg:text-[clamp(2.8rem,4.2vw,4.35rem)] lg:leading-[1.02] lg:whitespace-nowrap">
              {t.title}
            </h2>
            {fixedDescriptionLines ? (
              <p className="mt-4 max-w-[38ch] text-body-fluid text-primary-foreground/80 sm:max-w-[46ch] lg:max-w-none">
                {fixedDescriptionLines.map((line) => (
                  <span key={line} className="block lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            ) : (
              <ReadableText
                text={t.description}
                targetLineLength={56}
                className="mt-4 max-w-[62ch] text-body-fluid text-primary-foreground/80"
              />
            )}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full gap-2 bg-white text-primary shadow-[0_14px_30px_rgba(15,23,42,0.24)] hover:bg-white/92 sm:w-auto"
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

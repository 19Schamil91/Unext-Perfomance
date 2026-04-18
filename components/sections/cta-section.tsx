import Link from "next/link"
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { Button } from "@/components/ui/button"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function CtaSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.cta
  const fixedDescriptionLines =
    locale === "de"
      ? [
          "Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Wir sagen Ihnen direkt,",
          "wie wir Ihnen bei Unfall, Werkstatt, Mietwagen, Zulassung oder Pannenhilfe weiterhelfen.",
        ]
      : null

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />

      <div className="relative mx-auto max-w-[90rem] px-4 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-4xl xl:max-w-none">
            <div className="mb-4 flex items-center gap-2 text-primary-foreground/80">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">{t.badge}</span>
            </div>
            <h2 className="max-w-[14ch] text-heading-fluid tracking-[-0.03em] text-primary-foreground sm:max-w-[16ch] lg:max-w-none lg:text-[clamp(2.8rem,4.2vw,4.35rem)] lg:leading-[1.02] lg:whitespace-nowrap">
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
              className="w-full gap-2 bg-white text-primary hover:bg-white/90 sm:w-auto"
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
              className="w-full gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
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
              className="w-full gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
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

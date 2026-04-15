import Link from "next/link"
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function CtaSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.cta

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-primary-foreground/80">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">{t.badge}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">{t.description}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-primary hover:bg-white/90"
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
              className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
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
              className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
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

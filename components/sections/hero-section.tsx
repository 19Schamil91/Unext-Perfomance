import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function HeroSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.hero

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/home-hero-team.webp"
          alt="UNEXT team"
          fill
          sizes="100vw"
          quality={78}
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/96 via-background/84 to-background/36" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="block">{t.title1}</span>
            <span className="block text-primary">{t.title2}</span>
            <span className="mt-2 block text-2xl font-normal text-muted-foreground sm:text-3xl lg:text-4xl">
              {t.title3}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <a href="tel:+4917664365185">
                <Phone className="h-5 w-5" />
                {t.callNow}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/kontakt">
                {t.inquiry}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href="https://wa.me/4917664365185" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t.whatsapp}
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{t.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">{t.scrollLabel}</span>
          <div className="h-12 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

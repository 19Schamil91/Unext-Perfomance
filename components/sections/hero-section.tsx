import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

interface HeroContentProps {
  title1: string
  title2: string
  title3: string
  description: string
  callNow: string
  inquiry: string
  whatsapp: string
  address: string
  className?: string
}

function HeroContent({
  title1,
  title2,
  title3,
  description,
  callNow,
  inquiry,
  whatsapp,
  address,
  className,
}: HeroContentProps) {
  return (
    <div className={className}>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        <span className="block">{title1}</span>
        <span className="block text-primary">{title2}</span>
        <span className="mt-2 block text-2xl font-normal text-muted-foreground sm:text-3xl lg:text-4xl">
          {title3}
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg" className="gap-2">
          <a href="tel:+493023613927">
            <Phone className="h-5 w-5" />
            {callNow}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="gap-2">
          <Link href="/kontakt">
            {inquiry}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary" className="gap-2">
          <a href="https://wa.me/4917664365185" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" />
            {whatsapp}
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
          <span>{address}</span>
        </div>
      </div>
    </div>
  )
}

export async function HeroSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.hero

  return (
    <section className="overflow-hidden bg-background">
      <div className="md:hidden">
        <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),transparent_58%),linear-gradient(180deg,rgba(26,26,31,0.02),rgba(26,26,31,0.16))]">
          <Image
            src="/images/home-hero-team.webp"
            alt="UNEXT team"
            fill
            sizes="100vw"
            quality={78}
            className="object-contain object-center object-bottom"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/65 to-transparent" />
        </div>

        <div className="px-4 pb-14 pt-8">
          <HeroContent
            title1={t.title1}
            title2={t.title2}
            title3={t.title3}
            description={t.description}
            callNow={t.callNow}
            inquiry={t.inquiry}
            whatsapp={t.whatsapp}
            address={t.address}
            className="mx-auto max-w-2xl"
          />
        </div>
      </div>

      <div className="relative hidden min-h-[90vh] items-center overflow-hidden md:flex">
        <div className="absolute inset-0">
          <Image
            src="/images/home-hero-team.webp"
            alt="UNEXT team"
            fill
            sizes="100vw"
            quality={78}
            className="object-contain object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/88 via-background/70 md:via-background/42 to-background/12" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/72 via-transparent to-background/10 md:from-background/44" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <HeroContent
            title1={t.title1}
            title2={t.title2}
            title3={t.title3}
            description={t.description}
            callNow={t.callNow}
            inquiry={t.inquiry}
            whatsapp={t.whatsapp}
            address={t.address}
            className="mt-14 max-w-xl lg:mt-16 lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  )
}

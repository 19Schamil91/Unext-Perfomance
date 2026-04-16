import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

interface HeroContentProps {
  badge: string
  title1: string
  title2: string
  title3: string
  description: string
  services: readonly string[]
  callNow: string
  inquiry: string
  whatsapp: string
  address: string
  viewAllServices: string
  className?: string
}

function HeroContent({
  badge,
  title1,
  title2,
  title3,
  description,
  services,
  callNow,
  inquiry,
  whatsapp,
  address,
  viewAllServices,
  className,
}: HeroContentProps) {
  return (
    <div className={className}>
      <div className="inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/78 backdrop-blur-sm sm:text-xs sm:tracking-[0.18em]">
        {badge}
      </div>

      <h1 className="mt-4 text-[2rem] leading-[1.02] font-bold tracking-[-0.045em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.34)] sm:text-5xl sm:tracking-tight lg:text-6xl">
        <span className="block">{title1}</span>
        <span className="block text-primary">{title2}</span>
        <span className="mt-1.5 block text-[1.08rem] font-normal text-white/84 drop-shadow-[0_2px_12px_rgba(0,0,0,0.26)] sm:mt-2 sm:text-3xl lg:text-4xl">
          {title3}
        </span>
      </h1>

      <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] sm:mt-6 sm:text-lg">
        {description}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:hidden">
        {services.map((service) => (
          <span
            key={service}
            className="rounded-[1rem] border border-white/12 bg-white/8 px-3 py-2 text-[0.83rem] leading-5 text-white/82 backdrop-blur-sm"
          >
            {service}
          </span>
        ))}
      </div>

      <div className="mt-6 hidden max-w-3xl flex-wrap gap-2 sm:flex">
        {services.map((service) => (
          <span
            key={service}
            className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-sm text-white/82 backdrop-blur-sm"
          >
            {service}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
          <a href="tel:+493023613927">
            <Phone className="h-5 w-5" />
            {callNow}
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary" className="w-full gap-2 sm:w-auto">
          <a href="https://wa.me/4917664365185" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" />
            {whatsapp}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="hidden w-full gap-2 sm:inline-flex sm:w-auto">
          <Link href="/kontakt">
            {inquiry}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      <div className="mt-4 sm:hidden">
        <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-medium text-white/78 transition-colors hover:text-white">
          {viewAllServices}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-3 text-sm text-white/72 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
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
  const home = getTranslations(locale).home
  const t = home.hero
  const mainServices = home.services.items.map((service) => service.title)
  const viewAllServices = home.services.viewAll
  const heroMobileImageSrc = "/images/home-hero-team-balanced.webp"
  const heroDesktopImageSrc = "/images/home-hero-team-desktop.webp"

  return (
    <section className="overflow-hidden bg-background">
      <div className="md:hidden">
        <div className="relative aspect-[16/11] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),transparent_58%),linear-gradient(180deg,rgba(26,26,31,0.02),rgba(26,26,31,0.16))]">
          <Image
            src={heroMobileImageSrc}
            alt="UNEXT team"
            fill
            sizes="100vw"
            quality={78}
            className="object-cover object-[center_12%]"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        <div className="px-4 pb-12 pt-6">
          <HeroContent
            title1={t.title1}
            title2={t.title2}
            title3={t.title3}
            badge={t.badge}
            description={t.description}
            services={mainServices}
            callNow={t.callNow}
            inquiry={t.inquiry}
            whatsapp={t.whatsapp}
            address={t.address}
            viewAllServices={viewAllServices}
            className="mx-auto max-w-2xl"
          />
        </div>
      </div>

      <div className="relative hidden min-h-[88vh] items-center overflow-hidden md:flex">
        <div className="absolute inset-0">
          <Image
            src={heroDesktopImageSrc}
            alt="UNEXT team"
            fill
            sizes="100vw"
            quality={78}
            className="object-cover object-[center_18%] lg:object-[center_16%]"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,14,20,0.22))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/54 via-background/20 via-42% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/8 via-transparent to-background/12" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/40 via-background/12 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <HeroContent
            title1={t.title1}
            title2={t.title2}
            title3={t.title3}
            badge={t.badge}
            description={t.description}
            services={mainServices}
            callNow={t.callNow}
            inquiry={t.inquiry}
            whatsapp={t.whatsapp}
            address={t.address}
            viewAllServices={viewAllServices}
            className="mt-14 max-w-xl lg:mt-16 lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  )
}

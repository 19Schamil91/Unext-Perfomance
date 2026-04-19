import Image from "next/image"
import Link from "next/link"
import { ArrowRight, DoorOpen, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { homeServiceAnchors } from "@/lib/service-anchors"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

interface HeroContentProps {
  tone: "surface" | "overlay"
  badge?: string
  title1: string
  title2: string
  title3: string
  description: string
  services: readonly { title: string; anchor: string }[]
  callNow: string
  inquiry: string
  whatsapp: string
  address: string
  viewAllServices: string
  className?: string
}

function renderHeroDescription(description: string) {
  const protectedTerm = "Kfz-Werkstatt"
  const desktopBreakMarkers = ["Autovermietung,", "Berlin."]
  const protectedTerms = [protectedTerm, "Taxi-Fahrer"]

  const renderProtectedLine = (line: string) => {
    const segments: Array<string | { protected: string }> = []
    let cursor = 0

    while (cursor < line.length) {
      let nextMatch: { index: number; term: string } | null = null

      for (const term of protectedTerms) {
        const index = line.indexOf(term, cursor)

        if (index !== -1 && (!nextMatch || index < nextMatch.index)) {
          nextMatch = { index, term }
        }
      }

      if (!nextMatch) {
        segments.push(line.slice(cursor))
        break
      }

      if (nextMatch.index > cursor) {
        segments.push(line.slice(cursor, nextMatch.index))
      }

      segments.push({ protected: nextMatch.term })
      cursor = nextMatch.index + nextMatch.term.length
    }

    return segments.map((segment, index) =>
      typeof segment === "string" ? (
        <span key={`${segment}-${index}`}>{segment}</span>
      ) : (
        <span key={`${segment.protected}-${index}`} className="whitespace-nowrap">
          {segment.protected}
        </span>
      )
    )
  }

  if (description.includes("\n")) {
    return (
      <>
        {description
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
          .map((line, index) => (
            <span key={`${line}-${index}`} className="block">
              {renderProtectedLine(line)}
            </span>
          ))}
      </>
    )
  }

  let remaining = description
  const lines: string[] = []

  for (const marker of desktopBreakMarkers) {
    const markerIndex = remaining.indexOf(marker)

    if (markerIndex === -1) {
      continue
    }

    const lineEnd = markerIndex + marker.length
    lines.push(remaining.slice(0, lineEnd).trim())
    remaining = remaining.slice(lineEnd).trimStart()
  }

  if (lines.length === 0) {
    lines.push(description)
  } else if (remaining) {
    lines.push(remaining)
  }

  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block">
          {renderProtectedLine(line)}
        </span>
      ))}
    </>
  )
}

function HeroContent({
  tone,
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
  const isOverlay = tone === "overlay"

  return (
    <div className={`min-w-0 ${className ?? ""}`}>
      {badge ? (
        <div
          className={
            isOverlay
              ? "mb-5 inline-flex max-w-full rounded-full border border-white/10 bg-white/5 px-3 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/68 backdrop-blur-sm sm:text-xs sm:tracking-[0.18em]"
              : "mb-5 inline-flex max-w-full rounded-full border border-border/70 bg-accent px-3 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]"
          }
        >
          {badge}
        </div>
      ) : null}

      <h1
        className={
          isOverlay
            ? "max-w-none text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.28)]"
            : "measure-display text-display-fluid text-foreground"
        }
      >
        <span
          className={
            isOverlay
              ? "block text-[clamp(2.5rem,4.05vw,4.15rem)] leading-[0.99] font-semibold tracking-[-0.036em] lg:whitespace-nowrap"
              : "block"
          }
        >
          {title1}
        </span>
        <span
          className={
            isOverlay
              ? "mt-0.5 block text-[clamp(2.5rem,4.05vw,4.15rem)] leading-[0.99] font-semibold tracking-[-0.036em] text-primary lg:whitespace-nowrap"
              : "block text-primary"
          }
        >
          {title2}
        </span>
        <span
          className={
            isOverlay
              ? "mt-2 block text-[clamp(1.28rem,1.55vw,2rem)] leading-[1.05] font-light tracking-[-0.022em] text-white/46 drop-shadow-[0_2px_8px_rgba(0,0,0,0.14)] lg:whitespace-nowrap"
              : "mt-1.5 block max-w-[18ch] text-[clamp(1.05rem,0.84rem+1vw,2.35rem)] leading-[1.12] font-normal text-muted-foreground sm:mt-2"
          }
        >
          {title3}
        </span>
      </h1>

      <p
        className={
          isOverlay
            ? "mt-7 max-w-[56ch] text-[clamp(0.98rem,0.95rem+0.1vw,1.03rem)] leading-[1.8] text-white/56 drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)] sm:mt-7"
            : "measure-intro-tight mt-4 text-body-fluid text-muted-foreground sm:mt-6"
        }
      >
        {renderHeroDescription(description)}
      </p>

      <div className="mt-8 sm:mt-9">
        <p
          className={
            isOverlay
              ? "text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/42 sm:text-[0.72rem]"
              : "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.72rem]"
          }
        >
          Direkt zu den Hauptleistungen
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:hidden">
        {services.map((service) => (
          <Link
            key={service.anchor}
            href={`#${service.anchor}`}
            className={
              isOverlay
                ? "group flex min-h-[4.5rem] min-w-0 items-center justify-between gap-3 rounded-[1.1rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.06))] px-3 py-3 text-[0.83rem] leading-5 text-white/88 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all hover:border-primary/55 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.08))] hover:text-white"
                : "group flex min-h-[4.5rem] min-w-0 items-center justify-between gap-3 rounded-[1.1rem] border border-border/70 bg-card px-3 py-3 text-[0.83rem] leading-5 text-foreground shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-all hover:border-primary/45 hover:bg-accent"
            }
          >
            <span className="min-w-0 [text-wrap:balance]">{service.title}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/12 text-primary transition-transform group-hover:translate-x-0.5">
              <DoorOpen className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-6 hidden max-w-[54rem] grid-cols-2 gap-2.5 sm:grid lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.anchor}
            href={`#${service.anchor}`}
            className={
              isOverlay
                ? "group flex min-h-[3.3rem] min-w-0 items-center justify-between gap-3 rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] px-4 py-3 text-[0.92rem] text-white/70 shadow-[0_6px_14px_rgba(0,0,0,0.07)] backdrop-blur-sm transition-all hover:border-primary/36 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] hover:text-white/90"
                : "group inline-flex min-w-0 items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm text-foreground shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition-all hover:border-primary/45 hover:bg-accent"
            }
          >
            <span className="min-w-0 [text-wrap:balance]">{service.title}</span>
            <DoorOpen className="h-3.5 w-3.5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
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
        <Link
          href="/leistungen"
          className={
            isOverlay
              ? "inline-flex items-center gap-2 text-sm font-medium text-white/78 transition-colors hover:text-white"
              : "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          }
        >
          {viewAllServices}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div
        className={
          isOverlay
            ? "mt-8 flex flex-col gap-3 text-sm text-white/54 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
            : "mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
        }
      >
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
  const mainServices = home.services.items.map((service, index) => ({
    title: service.title,
    anchor: homeServiceAnchors[index] ?? homeServiceAnchors[0],
  }))
  const viewAllServices = home.services.viewAll
  const heroMobileImageSrc = "/images/home-hero-team-balanced.webp"
  const heroDesktopImageSrc = "/images/home-hero-team-desktop.webp"

  return (
    <section className="overflow-x-clip overflow-y-hidden bg-background">
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,15,0.14),rgba(7,10,15,0.34))]" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/42 via-black/12 to-transparent" />
        </div>

        <div className="px-5 pb-12 pt-6">
          <HeroContent
            tone="surface"
            badge={t.badge}
            title1={t.title1}
            title2={t.title2}
            title3={t.title3}
            description={t.description}
            services={mainServices}
            callNow={t.callNow}
            inquiry={t.inquiry}
            whatsapp={t.whatsapp}
            address={t.address}
            viewAllServices={viewAllServices}
            className="mx-auto max-w-[23rem] sm:max-w-2xl"
          />
        </div>
      </div>

      <div className="relative hidden min-h-[88vh] items-end overflow-hidden md:flex">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/56 via-black/22 via-42% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/12" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/24 via-black/8 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-24 lg:px-8 lg:pb-20">
          <HeroContent
            tone="overlay"
            title1={t.title1}
            title2={t.title2}
            title3={t.title3}
            description={t.description}
            services={mainServices}
            callNow={t.callNow}
            inquiry={t.inquiry}
            whatsapp={t.whatsapp}
            address={t.address}
            viewAllServices={viewAllServices}
            className="mx-auto max-w-[54rem]"
          />
        </div>
      </div>
    </section>
  )
}

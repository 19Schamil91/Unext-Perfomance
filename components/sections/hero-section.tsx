/*
  Diese Datei definiert den Hero-Bereich der Startseite.
  Sie zeigt den zentralen Einstieg mit Hauptbotschaft, Leistungslinks und schnellen Kontaktaktionen.
  Nutzer koennen von hier direkt anrufen, per WhatsApp schreiben oder zu Leistungen springen.
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, DoorOpen, MapPin, MessageCircle, Phone } from "lucide-react"
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
  combinePrimaryTitle?: boolean
  description: string
  services: readonly { title: string; anchor: string }[]
  callNow: string
  inquiry: string
  whatsapp: string
  address: string
  directServicesLabel: string
  viewAllServices: string
  className?: string
  headingElement?: "h1" | "div"
}

function renderHeroDescription(description: string, lineClassName?: string) {
  // Diese Begriffe bleiben zusammen, damit sie in allen Sprachen lesbar umbrechen.
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
          .map((line, index, lines) => (
            <span key={`${line}-${index}`} className={`inline sm:block ${lineClassName ?? ""}`.trim()}>
              {renderProtectedLine(line)}
              {index < lines.length - 1 ? " " : null}
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
        <span key={`${line}-${index}`} className={`inline sm:block ${lineClassName ?? ""}`.trim()}>
          {renderProtectedLine(line)}
          {index < lines.length - 1 ? " " : null}
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
  combinePrimaryTitle = false,
  description,
  services,
  callNow,
  inquiry,
  whatsapp,
  address,
  directServicesLabel,
  viewAllServices,
  className,
  headingElement = "h1",
}: HeroContentProps) {
  const isOverlay = tone === "overlay"
  const HeadingElement = headingElement
  const addressParts = address.split(",").map((part) => part.trim()).filter(Boolean)
  const addressPrimary = addressParts[0] ?? address
  const addressSecondary = addressParts.slice(1).join(", ")
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <div className={`min-w-0 ${className ?? ""}`}>
      <div
        className={
          isOverlay
            ? "relative max-w-[62rem] px-2 py-2"
            : ""
        }
      >
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

        <HeadingElement
          className={
            isOverlay
              ? combinePrimaryTitle
                ? "relative z-10 inline-flex max-w-none flex-col items-center text-center text-white drop-shadow-[0_10px_34px_rgba(0,0,0,0.42)]"
                : "relative z-10 max-w-none text-center text-white drop-shadow-[0_10px_34px_rgba(0,0,0,0.42)]"
              : "max-w-none text-[clamp(2rem,1.78rem+1vw,2.35rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          }
        >
          {isOverlay && combinePrimaryTitle ? (
            <span className="block bg-gradient-to-r from-white via-white to-white/82 bg-clip-text text-[clamp(2.15rem,3.3vw,3.9rem)] leading-[0.94] font-semibold tracking-[-0.04em] text-transparent lg:whitespace-nowrap">
              <span>{title1} </span>
              <span className="text-primary">{title2}</span>
            </span>
          ) : (
            <>
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
            </>
          )}
          <span
            className={
              isOverlay
                ? combinePrimaryTitle
                  ? "mt-4 block text-center text-[clamp(1.08rem,1.22vw,1.38rem)] leading-none font-medium tracking-[0.08em] text-white/88 drop-shadow-[0_8px_22px_rgba(0,0,0,0.42)]"
                  : "mt-2 block text-[clamp(1.28rem,1.55vw,2rem)] leading-[1.05] font-light tracking-[-0.022em] text-white/68 drop-shadow-[0_2px_8px_rgba(0,0,0,0.14)] lg:whitespace-nowrap"
                : "mt-1.5 block max-w-none text-[clamp(1rem,0.9rem+0.45vw,1.22rem)] leading-[1.25] font-normal tracking-normal text-foreground/78 sm:mt-2 sm:max-w-[18ch] sm:text-[clamp(1.05rem,0.84rem+1vw,2.35rem)] sm:leading-[1.12]"
            }
          >
            {title3}
          </span>
        </HeadingElement>

        <p
          className={
            isOverlay
              ? "relative z-10 mx-auto mt-20 translate-y-10 max-w-[78ch] text-center text-[clamp(1rem,0.97rem+0.14vw,1.12rem)] leading-[1.8] text-white/94 drop-shadow-[0_8px_24px_rgba(0,0,0,0.44)] sm:mt-20"
              : "mt-4 max-w-none text-body-fluid text-foreground/82 sm:mt-6"
          }
        >
          {renderHeroDescription(description, isOverlay ? "lg:whitespace-nowrap" : undefined)}
        </p>
      </div>

      <div className="mt-9 sm:mt-10">
        <p
          className={
            isOverlay
              ? "text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-[0.76rem]"
              : "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/68 sm:text-[0.72rem]"
          }
        >
          {directServicesLabel}
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
                ? "group relative flex min-h-[3.65rem] min-w-0 items-center justify-between gap-3 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,14,19,0.88),rgba(11,14,19,0.64))] px-4 py-3.5 text-[0.94rem] text-white/84 shadow-[0_16px_38px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.32),transparent)] before:content-[''] hover:-translate-y-0.5 hover:border-white/18 hover:text-white"
                : "group inline-flex min-w-0 items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm text-foreground shadow-[0_10px_22px_rgba(15,23,42,0.08)] transition-all hover:border-primary/45 hover:bg-accent"
            }
          >
            <span className={isOverlay ? "min-w-0 font-medium [text-wrap:balance]" : "min-w-0 [text-wrap:balance]"}>
              {service.title}
            </span>
            {isOverlay ? (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-primary/92 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                <DoorOpen className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            ) : (
              <DoorOpen className="h-3.5 w-3.5 shrink-0 text-primary/92 transition-transform duration-300 group-hover:translate-x-0.5" />
            )}
          </Link>
        ))}
      </div>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
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
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isOverlay
              ? "group inline-flex w-full max-w-full items-start gap-3 text-left text-white/86 transition-all duration-300 hover:text-white sm:ml-6 sm:w-auto sm:justify-end"
              : "group inline-flex max-w-full items-center gap-3 rounded-[1.1rem] border border-border/70 bg-card px-4 py-3 text-left text-foreground shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-accent"
          }
        >
          <span
            className={
              isOverlay
                ? "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/28 bg-primary/10 text-primary"
                : "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/8 text-primary"
            }
          >
            <MapPin className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span
              className={
                isOverlay
                  ? "block truncate text-[1rem] font-semibold leading-tight text-white"
                  : "block truncate text-[0.95rem] font-semibold leading-tight text-foreground"
              }
            >
              {addressPrimary}
            </span>
            {addressSecondary ? (
              <span
                className={
                  isOverlay
                    ? "mt-1 block truncate text-[0.74rem] font-medium uppercase tracking-[0.22em] text-white/70"
                    : "mt-1 block truncate text-[0.76rem] font-medium uppercase tracking-[0.14em] text-foreground/68"
                }
              >
                {addressSecondary}
              </span>
            ) : null}
          </span>
        </a>
      </div>

      <div className="mt-4 sm:hidden">
        <Link
          href="/leistungen"
          className={
            isOverlay
              ? "inline-flex items-center gap-2 text-sm font-medium text-white/82 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
              : "inline-flex items-center gap-2 text-sm font-medium text-foreground/72 transition-colors hover:text-foreground"
          }
        >
          {viewAllServices}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export async function HeroSection() {
  // Diese Inhalte werden serverseitig nach aktueller Sprache geladen.
  const locale = await getCurrentLocale()
  const home = getTranslations(locale).home
  const t = home.hero
  const mainServices = home.services.items.map((service, index) => ({
    title: service.title,
    anchor: homeServiceAnchors[index] ?? homeServiceAnchors[0],
  }))
  const viewAllServices = home.services.viewAll
  const heroMobileImageSrc = "/images/home-hero-team-new.webp.png"
  const heroDesktopImageSrc = "/images/home-hero-team-new.webp.png"

  return (
    <section className="overflow-x-clip overflow-y-hidden bg-background">
      <div className="md:hidden">
        <div className="relative aspect-video overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),transparent_58%),linear-gradient(180deg,rgba(26,26,31,0.02),rgba(26,26,31,0.16))]">
          <Image
            src={heroMobileImageSrc}
            alt="UNEXT team"
            fill
            sizes="100vw"
            quality={92}
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,15,0.14),rgba(7,10,15,0.34))]" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/42 via-black/12 to-transparent" />
        </div>

        <div className="px-5 pb-14 pt-7">
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
            directServicesLabel={t.directServicesLabel}
            viewAllServices={viewAllServices}
            className="mx-auto max-w-[26rem] sm:max-w-2xl"
          />
        </div>
      </div>

      <div className="relative hidden h-[90svh] min-h-[46rem] max-h-[58rem] items-end overflow-hidden md:flex">
        <div className="absolute inset-0">
          <Image
            src={heroDesktopImageSrc}
            alt="UNEXT team"
            fill
            sizes="100vw"
            quality={92}
            className="object-cover object-[center_18%] lg:object-[center_16%]"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(255,255,255,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(11,14,20,0.08))]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,12,0.42)_0%,rgba(8,10,14,0.22)_24%,rgba(8,10,14,0.08)_52%,rgba(8,10,14,0.04)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/6 via-transparent to-black/14" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/24 via-black/6 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 lg:px-8 lg:pb-24">
          <HeroContent
            tone="overlay"
            title1={t.title1}
            title2={t.title2}
            title3={t.title3}
            combinePrimaryTitle
            description={t.description}
            services={mainServices}
            callNow={t.callNow}
            inquiry={t.inquiry}
            whatsapp={t.whatsapp}
            address={t.address}
            directServicesLabel={t.directServicesLabel}
            viewAllServices={viewAllServices}
            className="max-w-[62rem]"
            headingElement="div"
          />
        </div>
      </div>
    </section>
  )
}

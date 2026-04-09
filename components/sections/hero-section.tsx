import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home-hero-team.webp"
          alt="UNEXT Team im Startseiten-Hero"
          fill
          sizes="100vw"
          quality={78}
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/96 via-background/84 to-background/36" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Überall zertifiziert</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="block">Ihr starker Partner</span>
            <span className="block text-primary">rund ums Fahrzeug</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground mt-2">
              in Berlin
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Unfallgutachten, Autovermietung, Werkstatt und Premium Detailing – alles unter einem
            Dach. Professionell, schnell und zuverlässig seit 2024.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <a href="tel:+4917664365185">
                <Phone className="h-5 w-5" />
                Jetzt anrufen
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/kontakt">
                Anfrage senden
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a
                href="https://wa.me/4917664365185"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Location */}
          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              <span>Lübarser Str. 25, 13435 Berlin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">Mehr erfahren</span>
          <div className="h-12 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <div className="h-2 w-1 rounded-full bg-primary mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

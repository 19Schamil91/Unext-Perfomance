import Link from "next/link"
import { Phone, MessageCircle, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary-foreground/80 mb-4">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Kurzfristige Termine möglich
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Jetzt anrufen oder direkt schreiben – wir sind sofort für Sie da!
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Ob Unfall, Mietwagen, Werkstatttermin oder Detailing – kontaktieren Sie uns und wir
              kümmern uns um Ihr Anliegen.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-primary hover:bg-white/90"
            >
              <a href="tel:+4917664365185">
                <Phone className="h-5 w-5" />
                0176 64365185
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href="https://wa.me/4917664365185"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/kontakt">
                Anfrage senden
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

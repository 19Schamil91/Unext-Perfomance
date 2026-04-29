/*
  Diese Datei definiert den Fussbereich der Website mit Kontakt, Navigationslinks und Social-Bereich.
  Sie zeigt alle wichtigen Zusatzinformationen am Seitenende in einer klaren Struktur.
  Nutzer koennen von hier direkt zu Services, rechtlichen Seiten und Kontaktkanaelen springen.
*/
"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { getTranslations } from "@/lib/translations"

const serviceLinks = [
  { href: "/leistungen/unfallgutachten" },
  { href: "/leistungen/autovermietung" },
  { href: "/leistungen/autoservice" },
  { href: "/leistungen/detailing" },
  { href: "/leistungen/zulassungsservice" },
  { href: "/leistungen/abschleppdienst-pannenhilfe" },
] as const

export function SiteFooter() {
  // Diese Texte werden pro Sprache fuer alle Footer-Bereiche geladen.
  const { locale } = useLocale()
  const t = getTranslations(locale)

  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/unext-logo.webp"
                alt="UNEXT GMBH Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-[30ch] text-sm leading-6 text-foreground/76">{t.footer.description}</p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/60 px-3 py-2.5 text-foreground/76">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/60 px-3 py-2.5 text-foreground/76">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:info@unext.de"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  info@unext.de
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-primary/35 bg-primary/10 px-3 py-2.5 font-semibold text-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="tel:+493023613927"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  030 23613927
                </a>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/60 px-3 py-2.5 text-foreground/76">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p>{t.footer.hoursWeek}</p>
                  <p>{t.footer.hoursSat}</p>
                  <p className="text-xs text-foreground/62">{t.footer.hoursNote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">{t.footer.columns.services}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {serviceLinks.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/72 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {t.header.navigation[2].children[index].name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">{t.footer.columns.company}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {t.footer.companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/72 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">{t.footer.columns.legal}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {t.footer.legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/72 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-foreground">{t.footer.columns.social}</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {t.footer.socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/72 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} UNEXT GMBH. {t.footer.copyright}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground sm:justify-end">
              <span>{t.footer.bottomLocation}</span>
              <span>•</span>
              <span>{t.footer.bottomCertified}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

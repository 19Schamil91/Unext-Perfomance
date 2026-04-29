/*
  Diese Datei definiert den Fussbereich der Website mit kompakten Kontakt- und Navigationslinks.
  Sie zeigt Logo, Standort, zentrale Kontaktwege, Social Links und die wichtigsten Seitenlinks.
  Nutzer koennen von hier schnell anrufen, mailen, Social Media oeffnen oder zu wichtigen Seiten springen.
*/
"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"
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

const linkClassName =
  "text-sm text-foreground/72 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export function SiteFooter() {
  // Diese Texte werden pro Sprache fuer alle Footer-Bereiche geladen.
  const { locale } = useLocale()
  const t = getTranslations(locale)
  // Diese Links bleiben im Footer bewusst kurz; detaillierte Oeffnungszeiten stehen auf der Kontaktseite.
  const footerContactLinks = [
    {
      href: "https://maps.google.com/?q=L%C3%BCbarser+Str.+25,+13435+Berlin",
      label: t.footer.address,
      icon: MapPin,
      isExternal: true,
    },
    {
      href: "tel:+493023613927",
      label: "030 23613927",
      icon: Phone,
      isExternal: false,
    },
    {
      href: "mailto:info@unext.de",
      label: "info@unext.de",
      icon: Mail,
      isExternal: false,
    },
  ] as const

  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-7 border-b border-border/70 pb-7 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/unext-logo.webp"
                alt="UNEXT GMBH Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-[52ch] text-sm leading-6 text-foreground/76">{t.footer.description}</p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap gap-2">
              {footerContactLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border/65 bg-background/70 px-3 text-sm text-foreground/78 transition-colors hover:border-primary/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              {t.footer.socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border/65 bg-background/45 px-3 text-sm text-foreground/72 transition-colors hover:border-primary/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Instagram className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav className="grid grid-cols-1 gap-7 py-7 sm:grid-cols-3" aria-label="Footer">
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.footer.columns.services}</h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {serviceLinks.map((item, index) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName}>
                    {t.header.navigation[2].children[index].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.footer.columns.company}</h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {t.footer.companyLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClassName}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.footer.columns.legal}</h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {t.footer.legalLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClassName}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="border-t border-border pt-5">
          <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} UNEXT GMBH. {t.footer.copyright}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-muted-foreground sm:justify-end">
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

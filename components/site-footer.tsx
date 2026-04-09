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
] as const

export function SiteFooter() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  return (
    <footer className="border-t border-border bg-card">
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
            <p className="mt-4 text-sm text-muted-foreground">{t.footer.description}</p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@unext.de" className="hover:text-foreground">
                  info@unext.de
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+493023613927" className="hover:text-foreground">
                  030 23613927
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p>{t.footer.hoursWeek}</p>
                  <p>{t.footer.hoursSat}</p>
                  <p className="text-xs">{t.footer.hoursNote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">{t.footer.columns.services}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {serviceLinks.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
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
                      className="text-sm text-muted-foreground hover:text-foreground"
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
                      className="text-sm text-muted-foreground hover:text-foreground"
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
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
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
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} UNEXT GMBH. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
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

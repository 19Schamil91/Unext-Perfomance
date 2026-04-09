import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Clock, Instagram } from "lucide-react"

const footerNavigation = {
  leistungen: [
    { name: "Unfallgutachten", href: "/leistungen/unfallgutachten" },
    { name: "Autovermietung", href: "/leistungen/autovermietung" },
    { name: "Autoservice & Werkstatt", href: "/leistungen/autoservice" },
    { name: "Detailing", href: "/leistungen/detailing" },
  ],
  unternehmen: [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Karriere", href: "/kontakt" },
  ],
  rechtliches: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
  ],
}

const socialLinks = [
  { name: "Instagram @unfallx", href: "https://instagram.com/unfallx", icon: Instagram },
  { name: "Instagram @unext.performance", href: "https://instagram.com/unext.performance", icon: Instagram },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
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
            <p className="mt-4 text-sm text-muted-foreground">
              Ihr starker Partner rund ums Fahrzeug in Berlin. Unfallgutachten, Autovermietung,
              Werkstatt und Premium Detailing unter einem Dach.
            </p>

            {/* Contact Info */}
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Lübarser Str. 25, 13435 Berlin</span>
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
                  <p>Mo–Fr: 9:00–18:00</p>
                  <p>Sa: 10:00–16:00</p>
                  <p className="text-xs">sonst nach Vereinbarung</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Leistungen</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {footerNavigation.leistungen.map((item) => (
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
              <h3 className="text-sm font-semibold text-foreground">Unternehmen</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {footerNavigation.unternehmen.map((item) => (
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
              <h3 className="text-sm font-semibold text-foreground">Rechtliches</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {footerNavigation.rechtliches.map((item) => (
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

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-foreground">Social Media</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name.replace("Instagram ", "")}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} UNEXT GMBH. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Standort: Berlin</span>
              <span>•</span>
              <span>Überall zertifiziert</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

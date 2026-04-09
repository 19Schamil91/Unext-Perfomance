"use client"

import { useState } from "react"
import Image from "next/image"
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Instagram,
  CheckCircle,
  FileCheck,
  Car,
  Wrench,
  Sparkles,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"

const contactMethods = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Lübarser Str. 25",
    detail: "13435 Berlin",
    href: "https://maps.google.com/?q=Lübarser+Str.+25,+13435+Berlin",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@unext.de",
    detail: "Wir antworten innerhalb von 24h",
    href: "mailto:info@unext.de",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    content: "Mo–Fr: 9:00–18:00",
    detail: "Sa: 10:00–16:00",
  },
]

const serviceContacts = [
  {
    icon: FileCheck,
    title: "Unfallgutachten",
    subtitle: "UNFALLX",
    phone: "0176 64365185",
    social: "@unfallx",
  },
  {
    icon: Car,
    title: "Autovermietung",
    subtitle: "Ersatzfahrzeuge",
    phone: "0174 4292900",
    social: "@unext.performance",
  },
  {
    icon: Wrench,
    title: "Autoservice",
    subtitle: "Werkstatt",
    phone: "0177 7883206",
    social: "@unext.performance",
  },
  {
    icon: Sparkles,
    title: "Detailing",
    subtitle: "Premium Aufbereitung",
    phone: "0177 6691006",
    social: "@unext.performance",
  },
]

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Kontakt
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir sind für Sie da –
                telefonisch, per E-Mail oder über WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{method.title}</h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary hover:underline"
                      >
                        {method.content}
                      </a>
                    ) : (
                      <p className="text-foreground">{method.content}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{method.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Contacts */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8">
              Direktkontakt nach Service
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Für schnelle Hilfe erreichen Sie unsere Servicebereiche auch direkt:
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {serviceContacts.map((service) => (
                <Card key={service.title} className="border-border/50 bg-card">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {service.subtitle}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>

                    <div className="mt-4 space-y-2">
                      <a
                        href={`tel:${service.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        {service.phone}
                      </a>
                      <a
                        href={`https://wa.me/49${service.phone.replace(/\s/g, "").replace(/^0/, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                      <a
                        href={`https://instagram.com/${service.social.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="h-4 w-4" />
                        {service.social}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Map Section */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Form */}
              <div>
                {isSubmitted ? (
                  <Card className="border-primary/30 bg-background">
                    <CardContent className="p-8 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Nachricht gesendet!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.
                      </p>
                      <Button
                        className="mt-6"
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Neue Nachricht
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-border/50 bg-background">
                    <CardHeader>
                      <CardTitle>Schreiben Sie uns</CardTitle>
                      <CardDescription>
                        Füllen Sie das Formular aus und wir melden uns bei Ihnen.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit}>
                        <FieldGroup className="space-y-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="name">Name *</FieldLabel>
                              <Input id="name" name="name" placeholder="Ihr Name" required />
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="phone">Telefonnummer</FieldLabel>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="0176 12345678"
                              />
                            </Field>
                          </div>

                          <Field>
                            <FieldLabel htmlFor="email">E-Mail *</FieldLabel>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="ihre@email.de"
                              required
                            />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="subject">Betreff *</FieldLabel>
                            <Input
                              id="subject"
                              name="subject"
                              placeholder="Worum geht es?"
                              required
                            />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="message">Nachricht *</FieldLabel>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Ihre Nachricht..."
                              rows={5}
                              required
                            />
                          </Field>

                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <Spinner className="mr-2" />
                                Wird gesendet...
                              </>
                            ) : (
                              "Nachricht senden"
                            )}
                          </Button>

                          <p className="text-xs text-muted-foreground text-center">
                            Mit dem Absenden stimmen Sie unserer{" "}
                            <a href="/datenschutz" className="underline hover:text-foreground">
                              Datenschutzerklärung
                            </a>{" "}
                            zu.
                          </p>
                        </FieldGroup>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Unser Standort</h3>
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border mb-6">
                  <Image
                    src="/images/hero-car.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={74}
                    className="object-cover object-[64%_center]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                    <div className="text-center p-6">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-foreground font-semibold">Lübarser Str. 25</p>
                      <p className="text-muted-foreground">13435 Berlin</p>
                      <Button asChild className="mt-4" variant="outline">
                        <a
                          href="https://maps.google.com/?q=Lübarser+Str.+25,+13435+Berlin"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          In Google Maps öffnen
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-border/50 bg-background">
                  <h4 className="font-semibold text-foreground mb-4">Öffnungszeiten</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Montag – Freitag</span>
                      <span className="text-foreground">9:00 – 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samstag</span>
                      <span className="text-foreground">10:00 – 16:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sonntag</span>
                      <span className="text-foreground">Geschlossen</span>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2 border-t border-border mt-4">
                      Außerhalb der Öffnungszeiten nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-16 lg:py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <MessageCircle className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Schnelle Hilfe per WhatsApp
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Schreiben Sie uns direkt über WhatsApp – wir antworten so schnell wie möglich!
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 gap-2 bg-white text-primary hover:bg-white/90"
            >
              <a
                href="https://wa.me/4917664365185"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp öffnen
              </a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

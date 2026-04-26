/*
  Diese Datei zeigt die Kontaktseite.
  Sie zeigt Kontaktwege, das Kontaktformular, direkte Servicekontakte und den Standort.
  Besucher koennen anrufen, WhatsApp oeffnen, eine Nachricht senden oder den Standort ansehen.
*/
"use client"

import { useState } from "react"
import {
  Car,
  CheckCircle,
  ClipboardCheck,
  FileCheck,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { useLocale } from "@/components/locale-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import type { ContactFormDraft } from "@/lib/browser-storage"
import { getTranslations } from "@/lib/translations"

const serviceMeta = [
  { icon: FileCheck, phone: "0176 64365185", social: "@unfallx" },
  { icon: Car, phone: "0174 4292900", social: "@unext.performance" },
  { icon: Wrench, phone: "0177 7883206", social: "@unext.performance" },
  { icon: Sparkles, phone: "0177 6691006", social: "@unext.performance" },
  { icon: ClipboardCheck, phone: "030 23613927", social: "@unext.performance" },
  { icon: Truck, phone: "030 23613927", social: "@unext.performance" },
] as const

const fallbackServiceMeta = {
  icon: Phone,
  phone: "030 23613927",
  social: "@unext.performance",
} as const

const emptyContactDraft: ContactFormDraft = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
}

function splitAtSentenceBoundary(text: string) {
  const match = text.match(/^(.+?[.!?])(\s+.+)$/)

  if (!match) {
    return { lead: text, rest: "" }
  }

  return {
    lead: match[1],
    rest: match[2].trim(),
  }
}

export function ContactPageClient() {
  // Diese Werte steuern den Formularstatus und speichern aktuelle Eingaben.
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<ContactFormDraft>(emptyContactDraft)
  const { locale } = useLocale()
  const t = getTranslations(locale).contactPage
  const descriptionParts = splitAtSentenceBoundary(t.description)
  const primaryPhone = "030 23613927"
  const whatsappPhone = "0176 64365185"

  // Diese Funktion aktualisiert einzelne Eingabefelder waehrend des Tippens.
  const handleFieldChange = (field: keyof ContactFormDraft, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))
  }

  // Dieser Ablauf simuliert die Formularabgabe und zeigt danach den Erfolgszustand.
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
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:gap-16">
              <div className="measure-intro max-w-[58rem]">
                <h1 className="measure-display text-display-fluid text-foreground">
                  {t.title}
                </h1>
                <p className="measure-intro mt-6 text-body-fluid text-muted-foreground">
                  <span>{descriptionParts.lead}</span>
                  {descriptionParts.rest ? (
                    <>
                      <span className="block">{descriptionParts.rest}</span>
                    </>
                  ) : null}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-2xl border border-border/55 bg-background/78 px-6 py-4 text-foreground shadow-[0_10px_26px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">{t.form.phone}</p>
                    <p className="font-semibold">{primaryPhone}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/49${whatsappPhone.replace(/\s/g, "").replace(/^0/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border/55 bg-background/78 px-6 py-4 text-foreground shadow-[0_10px_26px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold">{whatsappPhone}</p>
                  </div>
                </a>
                <a
                  href="mailto:info@unext.de"
                  className="flex items-center gap-4 rounded-2xl border border-border/55 bg-background/78 px-6 py-4 text-foreground shadow-[0_10px_26px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">E-Mail</p>
                    <p className="font-semibold">info@unext.de</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl">
              {isSubmitted ? (
                <Card className="border-primary/35 bg-background">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{t.form.successTitle}</h3>
                    <p className="mt-2 text-muted-foreground">{t.form.successText}</p>
                    <Button
                      className="mt-6"
                      variant="outline"
                      onClick={() => {
                        setFormData(emptyContactDraft)
                        setIsSubmitted(false)
                      }}
                    >
                      {t.form.newMessage}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border/60 bg-background">
                  <CardHeader>
                    <CardTitle>{t.form.title}</CardTitle>
                    <CardDescription>{t.form.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <FieldGroup className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <Field>
                            <FieldLabel htmlFor="name">{t.form.name}</FieldLabel>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={(event) => handleFieldChange("name", event.target.value)}
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="phone">{t.form.phone}</FieldLabel>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(event) => handleFieldChange("phone", event.target.value)}
                            />
                          </Field>
                        </div>

                        <Field>
                          <FieldLabel htmlFor="email">{t.form.email}</FieldLabel>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(event) => handleFieldChange("email", event.target.value)}
                            required
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="subject">{t.form.subject}</FieldLabel>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={(event) => handleFieldChange("subject", event.target.value)}
                            required
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="message">{t.form.message}</FieldLabel>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={(event) => handleFieldChange("message", event.target.value)}
                            rows={5}
                            required
                          />
                        </Field>

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Spinner className="mr-2" />
                              {t.form.submitting}
                            </>
                          ) : (
                            t.form.submit
                          )}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          {t.form.privacyPrefix}{" "}
                          <a href="/datenschutz" className="underline hover:text-foreground">
                            {t.form.privacyLink}
                          </a>{" "}
                          {t.form.privacySuffix}
                        </p>
                      </FieldGroup>
                    </form>
                  </CardContent>
                </Card>
              )}

              <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-[0_10px_26px_rgba(15,23,42,0.07)] sm:flex-row sm:items-center">
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">{t.whatsappCtaTitle}</p>
                  <p className="text-sm text-muted-foreground">{t.whatsappCtaDescription}</p>
                </div>
                <Button asChild variant="outline" className="shrink-0 gap-2">
                  <a
                    href={`https://wa.me/49${whatsappPhone.replace(/\s/g, "").replace(/^0/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {t.whatsappOpen}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {t.serviceContactsTitle}
              </h2>
              <p className="mt-3 text-body-compact text-muted-foreground">
                {t.serviceContactsDescription}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.serviceContacts.map((service, index) => {
                const meta = serviceMeta[index] ?? fallbackServiceMeta

                return (
                  <Card key={service.title} className="border-border/60 bg-background">
                    <CardContent className="flex gap-4 p-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <meta.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {service.subtitle}
                        </p>
                        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                          <a
                            href={`tel:${meta.phone.replace(/\s/g, "")}`}
                            className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                          >
                            <Phone className="h-4 w-4" />
                            {meta.phone}
                          </a>
                          <a
                            href={`https://wa.me/49${meta.phone.replace(/\s/g, "").replace(/^0/, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            <MessageCircle className="h-4 w-4" />
                            {t.whatsapp}
                          </a>
                          <a
                            href={`https://instagram.com/${meta.social.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            <Instagram className="h-4 w-4" />
                            {meta.social}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t.locationTitle}
            </h2>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:gap-12">
              <div className="min-h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-[0_14px_34px_rgba(15,23,42,0.1)]">
                  <iframe
                    title="UNEXT GMBH Standortkarte"
                    src="https://www.google.com/maps?q=L%C3%BCbarser%20Str.%2025%2C%2013435%20Berlin&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="min-h-[22rem] flex-1 border-0"
                  />
                  <div className="flex flex-col items-center border-t border-border/60 bg-background p-5 text-center sm:flex-row sm:justify-between sm:text-left">
                    <div>
                      <p className="font-semibold text-foreground">Lübarser Str. 25</p>
                      <p className="text-muted-foreground">13435 Berlin</p>
                    </div>
                    <Button asChild className="mt-4 sm:mt-0" variant="outline">
                      <a
                        href="https://maps.google.com/?q=Lübarser+Str.+25,+13435+Berlin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4" />
                        {t.openMaps}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                <h3 className="mb-4 font-semibold text-foreground">{t.openingHoursTitle}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{t.openingHours.mondayFriday}</span>
                    <span className="text-right text-foreground">{t.openingHours.mondayFridayValue}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{t.openingHours.saturday}</span>
                    <span className="text-right text-foreground">{t.openingHours.saturdayValue}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{t.openingHours.sunday}</span>
                    <span className="text-right text-foreground">{t.openingHours.sundayValue}</span>
                  </div>
                  <p className="mt-4 border-t border-border pt-2 text-xs text-muted-foreground">
                    {t.openingHours.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Car,
  CheckCircle,
  ClipboardCheck,
  Clock,
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

export function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { locale } = useLocale()
  const t = getTranslations(locale).contactPage

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
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { icon: MapPin, data: t.methods.address, href: "https://maps.google.com/?q=Lübarser+Str.+25,+13435+Berlin" },
                { icon: Mail, data: t.methods.email, href: "mailto:info@unext.de" },
                { icon: Clock, data: t.methods.hours },
              ].map((method) => (
                <div
                  key={method.data.title}
                  className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{method.data.title}</h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary hover:underline"
                      >
                        {method.data.content}
                      </a>
                    ) : (
                      <p className="text-foreground">{method.data.content}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{method.data.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t.serviceContactsTitle}
            </h2>
            <p className="mb-12 max-w-2xl text-muted-foreground">{t.serviceContactsDescription}</p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.serviceContacts.map((service, index) => {
                const meta = serviceMeta[index] ?? fallbackServiceMeta

                return (
                  <Card key={service.title} className="border-border/50 bg-card">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <meta.icon className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        {service.subtitle}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>

                      <div className="mt-4 space-y-2">
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
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                {isSubmitted ? (
                  <Card className="border-primary/30 bg-background">
                    <CardContent className="p-8 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{t.form.successTitle}</h3>
                      <p className="mt-2 text-muted-foreground">{t.form.successText}</p>
                      <Button className="mt-6" variant="outline" onClick={() => setIsSubmitted(false)}>
                        {t.form.newMessage}
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-border/50 bg-background">
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
                              <Input id="name" name="name" placeholder={t.form.namePlaceholder} required />
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="phone">{t.form.phone}</FieldLabel>
                              <Input id="phone" name="phone" type="tel" placeholder={t.form.phonePlaceholder} />
                            </Field>
                          </div>

                          <Field>
                            <FieldLabel htmlFor="email">{t.form.email}</FieldLabel>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder={t.form.emailPlaceholder}
                              required
                            />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="subject">{t.form.subject}</FieldLabel>
                            <Input id="subject" name="subject" placeholder={t.form.subjectPlaceholder} required />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="message">{t.form.message}</FieldLabel>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder={t.form.messagePlaceholder}
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
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">{t.locationTitle}</h3>
                <div className="relative mb-6 aspect-[16/11] overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-sm">
                  <Image
                    src="/images/hero-car.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={74}
                    className="object-cover object-[64%_center]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                    <div className="p-6 text-center">
                      <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
                      <p className="font-semibold text-foreground">Lübarser Str. 25</p>
                      <p className="text-muted-foreground">13435 Berlin</p>
                      <Button asChild className="mt-4" variant="outline">
                        <a
                          href="https://maps.google.com/?q=Lübarser+Str.+25,+13435+Berlin"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.openMaps}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/50 bg-background p-6">
                  <h4 className="mb-4 font-semibold text-foreground">{t.openingHoursTitle}</h4>
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
          </div>
        </section>

        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              {t.whatsappCtaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t.whatsappCtaDescription}
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 gap-2 bg-white text-primary hover:bg-white/90"
            >
              <a href="https://wa.me/4917664365185" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t.whatsappOpen}
              </a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

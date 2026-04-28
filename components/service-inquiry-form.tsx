/*
  Diese Datei zeigt das Anfrageformular auf den Leistungsseiten.
  Besucher koennen ihre Kontaktdaten, Fahrzeugdaten und eine Nachricht eingeben.
  Nach dem Absenden wird die Anfrage per Server verarbeitet und als E-Mail zugestellt.
*/
"use client"

import { useActionState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { FormSubmitButton } from "@/components/FormSubmitButton"
import { useLocale } from "@/components/locale-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendServiceInquiry } from "@/lib/contactActions"
import { initialContactActionState } from "@/lib/contactForm"
import { getTranslations } from "@/lib/translations"

type ServiceInquiryFormProps = {
  serviceName: string
  serviceTitle: string
  fields?: ServiceInquiryFields
}

export type ServiceInquiryFields = {
  vehicle?: boolean
  date?: boolean
  subject?: boolean
}

export function ServiceInquiryForm({
  serviceName,
  serviceTitle,
  fields = { vehicle: true, date: true, subject: false },
}: ServiceInquiryFormProps) {
  // Dieser Wert enthaelt die Server-Antwort nach dem Absenden der Anfrage.
  const [formState, formAction] = useActionState(sendServiceInquiry, initialContactActionState)
  const pathname = usePathname()
  const { locale } = useLocale()
  const t = getTranslations(locale).serviceDetail.form

  // Diese Kurzfunktion holt die passende Fehlermeldung zu einem Formularfeld.
  const getFieldError = (field: string) => formState.fieldErrors[field]

  if (formState.status === "success") {
    return (
      <Card className="rounded-[1.6rem] border-primary/30 bg-card shadow-[0_16px_36px_rgba(15,23,42,0.06)]">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{t.successTitle}</h3>
          <p className="mt-2 text-muted-foreground">{formState.message || t.successText}</p>
          <Button asChild className="mt-6" variant="outline">
            <Link href={pathname}>{t.newInquiry}</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="rounded-[1.6rem] border-border/50 bg-card shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
      <CardHeader className="space-y-3 p-7 pb-5 sm:p-8 sm:pb-6">
        <CardTitle className="max-w-[22ch] text-[clamp(1.22rem,1.08rem+0.5vw,1.65rem)] leading-[1.14]">
          {serviceTitle}
        </CardTitle>
        <CardDescription className="max-w-none text-body-compact text-muted-foreground lg:whitespace-nowrap">
          {t.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-7 pb-7 pt-0 sm:px-8 sm:pb-8">
        {/* Dieses Formular sendet die Service-Anfrage an den Server, damit daraus eine E-Mail entsteht. */}
        <form action={formAction}>
          <FieldGroup className="space-y-4">
            <input type="hidden" name="locale" value={locale} />
            <input type="hidden" name="service" value={serviceName} />
            {formState.status === "error" ? (
              <div
                role="alert"
                className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {formState.message}
              </div>
            ) : null}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field data-invalid={Boolean(getFieldError("name"))}>
                <FieldLabel htmlFor="name">{t.name}</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder={t.namePlaceholder}
                  aria-invalid={Boolean(getFieldError("name"))}
                  aria-describedby={getFieldError("name") ? "name-error" : undefined}
                  required
                />
                <FieldError id="name-error">{getFieldError("name")}</FieldError>
              </Field>
              <Field data-invalid={Boolean(getFieldError("phone"))}>
                <FieldLabel htmlFor="phone">{t.phone}</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  aria-invalid={Boolean(getFieldError("phone"))}
                  aria-describedby={getFieldError("phone") ? "phone-error" : undefined}
                  required
                />
                <FieldError id="phone-error">{getFieldError("phone")}</FieldError>
              </Field>
            </div>

            <Field data-invalid={Boolean(getFieldError("email"))}>
              <FieldLabel htmlFor="email">{t.email}</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                aria-invalid={Boolean(getFieldError("email"))}
                aria-describedby={getFieldError("email") ? "email-error" : undefined}
                required
              />
              <FieldError id="email-error">{getFieldError("email")}</FieldError>
            </Field>

            {fields.vehicle && (
              <Field data-invalid={Boolean(getFieldError("vehicle"))}>
                <FieldLabel htmlFor="vehicle">{t.vehicle}</FieldLabel>
                <Input
                  id="vehicle"
                  name="vehicle"
                  placeholder={t.vehiclePlaceholder}
                  aria-invalid={Boolean(getFieldError("vehicle"))}
                  aria-describedby={getFieldError("vehicle") ? "vehicle-error" : undefined}
                />
                <FieldError id="vehicle-error">{getFieldError("vehicle")}</FieldError>
              </Field>
            )}

            {fields.subject && (
              <Field data-invalid={Boolean(getFieldError("subject"))}>
                <FieldLabel htmlFor="subject">{t.subject}</FieldLabel>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t.subjectPlaceholder}
                  aria-invalid={Boolean(getFieldError("subject"))}
                  aria-describedby={getFieldError("subject") ? "subject-error" : undefined}
                />
                <FieldError id="subject-error">{getFieldError("subject")}</FieldError>
              </Field>
            )}

            {fields.date && (
              <Field data-invalid={Boolean(getFieldError("date"))}>
                <FieldLabel htmlFor="date">{t.date}</FieldLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  aria-invalid={Boolean(getFieldError("date"))}
                  aria-describedby={getFieldError("date") ? "date-error" : undefined}
                />
                <FieldError id="date-error">{getFieldError("date")}</FieldError>
              </Field>
            )}

            <Field data-invalid={Boolean(getFieldError("message"))}>
              <FieldLabel htmlFor="message">{t.message}</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder={t.messagePlaceholder}
                aria-invalid={Boolean(getFieldError("message"))}
                aria-describedby={getFieldError("message") ? "message-error" : undefined}
                rows={4}
              />
              <FieldError id="message-error">{getFieldError("message")}</FieldError>
            </Field>

            <FormSubmitButton submitLabel={t.submit} pendingLabel={t.submitting} />

            <p className="mx-auto max-w-[42ch] text-center text-xs leading-6 text-muted-foreground">
              {t.privacyPrefix}{" "}
              <a href="/datenschutz" className="underline hover:text-foreground">
                {t.privacyLink}
              </a>{" "}
              {t.privacySuffix}
            </p>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

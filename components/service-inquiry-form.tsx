"use client"

import { useEffect, useMemo, useState } from "react"
import { CheckCircle } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import {
  removeStorage,
  type ServiceInquiryDraft,
  readStorage,
  writeStorage,
} from "@/lib/browser-storage"
import { getTranslations } from "@/lib/translations"

interface ServiceInquiryFormProps {
  serviceName: string
  serviceTitle: string
  fields?: ServiceInquiryFields
}

export interface ServiceInquiryFields {
  vehicle?: boolean
  date?: boolean
  subject?: boolean
}

export function ServiceInquiryForm({
  serviceName,
  serviceTitle,
  fields = { vehicle: true, date: true, subject: false },
}: ServiceInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<ServiceInquiryDraft>({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    subject: "",
    date: "",
    message: "",
  })
  const { locale } = useLocale()
  const t = getTranslations(locale).serviceDetail.form
  const draftKey = useMemo(() => `unext.service-inquiry.${serviceName}`, [serviceName])

  useEffect(() => {
    const savedDraft = readStorage<ServiceInquiryDraft>(draftKey)

    if (savedDraft) {
      setFormData((current) => ({
        ...current,
        ...savedDraft,
      }))
    }
  }, [draftKey])

  useEffect(() => {
    if (isSubmitted) {
      return
    }

    writeStorage(draftKey, formData)
  }, [draftKey, formData, isSubmitted])

  const handleFieldChange = (field: keyof ServiceInquiryDraft, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    removeStorage(draftKey)
  }

  if (isSubmitted) {
    return (
      <Card className="border-primary/30 bg-card">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{t.successTitle}</h3>
          <p className="mt-2 text-muted-foreground">{t.successText}</p>
          <Button
            className="mt-6"
            variant="outline"
            onClick={() => {
              setFormData({
                name: "",
                phone: "",
                email: "",
                vehicle: "",
                subject: "",
                date: "",
                message: "",
              })
              setIsSubmitted(false)
            }}
          >
            {t.newInquiry}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle>{serviceTitle}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">{t.name}</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(event) => handleFieldChange("name", event.target.value)}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">{t.phone}</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={(event) => handleFieldChange("phone", event.target.value)}
                  required
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="email">{t.email}</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={(event) => handleFieldChange("email", event.target.value)}
                required
              />
            </Field>

            {fields.vehicle && (
              <Field>
                <FieldLabel htmlFor="vehicle">{t.vehicle}</FieldLabel>
                <Input
                  id="vehicle"
                  name="vehicle"
                  placeholder={t.vehiclePlaceholder}
                  value={formData.vehicle}
                  onChange={(event) => handleFieldChange("vehicle", event.target.value)}
                />
              </Field>
            )}

            {fields.subject && (
              <Field>
                <FieldLabel htmlFor="subject">{t.subject}</FieldLabel>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t.subjectPlaceholder}
                  value={formData.subject}
                  onChange={(event) => handleFieldChange("subject", event.target.value)}
                />
              </Field>
            )}

            {fields.date && (
              <Field>
                <FieldLabel htmlFor="date">{t.date}</FieldLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.date}
                  onChange={(event) => handleFieldChange("date", event.target.value)}
                />
              </Field>
            )}

            <Field>
              <FieldLabel htmlFor="message">{t.message}</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={(event) => handleFieldChange("message", event.target.value)}
                rows={4}
              />
            </Field>

            <input type="hidden" name="service" value={serviceName} />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner className="mr-2" />
                  {t.submitting}
                </>
              ) : (
                t.submit
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
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

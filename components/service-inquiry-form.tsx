"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { CheckCircle } from "lucide-react"

interface ServiceInquiryFormProps {
  serviceName: string
  serviceTitle: string
  fields?: {
    vehicle?: boolean
    date?: boolean
    subject?: boolean
  }
}

export function ServiceInquiryForm({
  serviceName,
  serviceTitle,
  fields = { vehicle: true, date: true, subject: false },
}: ServiceInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-primary/30 bg-card">
        <CardContent className="p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Anfrage gesendet!</h3>
          <p className="mt-2 text-muted-foreground">
            Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.
          </p>
          <Button
            className="mt-6"
            variant="outline"
            onClick={() => setIsSubmitted(false)}
          >
            Neue Anfrage
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle>{serviceTitle}</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
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
                <FieldLabel htmlFor="phone">Telefonnummer *</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0176 12345678"
                  required
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

            {fields.vehicle && (
              <Field>
                <FieldLabel htmlFor="vehicle">Fahrzeug</FieldLabel>
                <Input
                  id="vehicle"
                  name="vehicle"
                  placeholder="z.B. BMW 320d, 2021"
                />
              </Field>
            )}

            {fields.subject && (
              <Field>
                <FieldLabel htmlFor="subject">Betreff</FieldLabel>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Ihr Anliegen"
                />
              </Field>
            )}

            {fields.date && (
              <Field>
                <FieldLabel htmlFor="date">Wunschtermin</FieldLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                />
              </Field>
            )}

            <Field>
              <FieldLabel htmlFor="message">Nachricht</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Beschreiben Sie Ihr Anliegen..."
                rows={4}
              />
            </Field>

            <input type="hidden" name="service" value={serviceName} />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner className="mr-2" />
                  Wird gesendet...
                </>
              ) : (
                "Anfrage absenden"
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
  )
}

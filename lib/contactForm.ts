import { z } from "zod"

export type ContactActionStatus = "idle" | "success" | "error"

export type ContactActionState = {
  status: ContactActionStatus
  message: string
  fieldErrors: Record<string, string>
}

export const initialContactActionState: ContactActionState = {
  status: "idle",
  message: "",
  fieldErrors: {},
}

export type ContactFormValues = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export type ServiceInquiryValues = {
  service: string
  name: string
  phone: string
  email: string
  vehicle: string
  subject: string
  date: string
  message: string
}

const requiredText = z.string().trim().min(1)
const optionalText = z.string().trim()

const contactFormSchema = z.object({
  name: requiredText.max(120),
  phone: optionalText.max(60),
  email: requiredText.email().max(180),
  subject: requiredText.max(160),
  message: requiredText.max(4000),
})

const serviceInquirySchema = z.object({
  service: requiredText.max(160),
  name: requiredText.max(120),
  phone: requiredText.max(60),
  email: requiredText.email().max(180),
  vehicle: optionalText.max(160),
  subject: optionalText.max(160),
  date: optionalText.max(40),
  message: optionalText.max(4000),
})

export function readFormText(formData: FormData, key: string) {
  const value = formData.get(key)

  return typeof value === "string" ? value : ""
}

export function validateContactForm(formData: FormData) {
  return contactFormSchema.safeParse({
    name: readFormText(formData, "name"),
    phone: readFormText(formData, "phone"),
    email: readFormText(formData, "email"),
    subject: readFormText(formData, "subject"),
    message: readFormText(formData, "message"),
  })
}

export function validateServiceInquiry(formData: FormData) {
  return serviceInquirySchema.safeParse({
    service: readFormText(formData, "service"),
    name: readFormText(formData, "name"),
    phone: readFormText(formData, "phone"),
    email: readFormText(formData, "email"),
    vehicle: readFormText(formData, "vehicle"),
    subject: readFormText(formData, "subject"),
    date: readFormText(formData, "date"),
    message: readFormText(formData, "message"),
  })
}

export function buildFieldErrors(error: z.ZodError) {
  const fieldErrors: Record<string, string> = {}

  for (const issue of error.issues) {
    const fieldName = issue.path[0]

    if (typeof fieldName === "string" && !fieldErrors[fieldName]) {
      fieldErrors[fieldName] = issue.message
    }
  }

  return fieldErrors
}

export function buildContactEmail(values: ContactFormValues) {
  return {
    subject: `Kontaktformular: ${values.subject}`,
    text: [
      "Neue Nachricht ueber das Kontaktformular.",
      "",
      `Name: ${values.name}`,
      `Telefon: ${values.phone || "Nicht angegeben"}`,
      `E-Mail: ${values.email}`,
      `Betreff: ${values.subject}`,
      "",
      "Nachricht:",
      values.message,
    ].join("\n"),
  }
}

export function buildServiceInquiryEmail(values: ServiceInquiryValues) {
  return {
    subject: `Service-Anfrage: ${values.service}`,
    text: [
      "Neue Anfrage ueber eine Leistungsseite.",
      "",
      `Leistung: ${values.service}`,
      `Name: ${values.name}`,
      `Telefon: ${values.phone}`,
      `E-Mail: ${values.email}`,
      `Fahrzeug: ${values.vehicle || "Nicht angegeben"}`,
      `Betreff: ${values.subject || "Nicht angegeben"}`,
      `Wunschtermin: ${values.date || "Nicht angegeben"}`,
      "",
      "Nachricht:",
      values.message || "Nicht angegeben",
    ].join("\n"),
  }
}

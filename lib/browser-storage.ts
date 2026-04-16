import type { Locale } from "@/lib/i18n"

export const storageKeys = {
  locale: "unext.locale",
  contactForm: "unext.contact-form",
  lastSelectedService: "unext.last-selected-service",
} as const

export interface LastSelectedService {
  serviceName: string
  serviceTitle: string
  href?: string
  savedAt: string
}

export interface ContactFormDraft {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export interface ServiceInquiryDraft {
  name: string
  phone: string
  email: string
  vehicle: string
  subject: string
  date: string
  message: string
}

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined"
}

export function readStorage<T>(key: string): T | null {
  if (!canUseStorage()) {
    return null
  }

  try {
    const rawValue = window.localStorage.getItem(key)
    return rawValue ? (JSON.parse(rawValue) as T) : null
  } catch {
    return null
  }
}

export function writeStorage<T>(key: string, value: T) {
  if (!canUseStorage()) {
    return
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Ignore quota/storage errors and keep the UI usable.
  }
}

export function removeStorage(key: string) {
  if (!canUseStorage()) {
    return
  }

  try {
    window.localStorage.removeItem(key)
  } catch {
    // Ignore storage errors.
  }
}

export function persistLocale(locale: Locale) {
  writeStorage(storageKeys.locale, { locale })
}


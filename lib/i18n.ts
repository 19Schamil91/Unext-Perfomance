export const locales = ["de", "en", "ru"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "de"

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

export function normalizeLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale
}

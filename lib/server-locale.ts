import { cache } from "react"
import { cookies } from "next/headers"
import { normalizeLocale, type Locale } from "@/lib/i18n"

export const getCurrentLocale = cache(async (): Promise<Locale> => {
  const cookieStore = await cookies()
  return normalizeLocale(cookieStore.get("locale")?.value)
})

"use client"

import {
  createContext,
  useContext,
  useState,
  useTransition,
  type ReactNode,
} from "react"
import { useRouter } from "next/navigation"
import type { Locale } from "@/lib/i18n"

interface LocaleContextValue {
  locale: Locale
  isPending: boolean
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

interface LocaleProviderProps {
  initialLocale: Locale
  children: ReactNode
}

export function LocaleProvider({ initialLocale, children }: LocaleProviderProps) {
  const router = useRouter()
  const [locale, setLocaleState] = useState(initialLocale)
  const [isPending, startTransition] = useTransition()

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`
    setLocaleState(nextLocale)

    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <LocaleContext.Provider value={{ locale, isPending, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider")
  }

  return context
}

"use client"

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"
import { type Locale } from "@/lib/i18n"

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
  const [locale, setLocaleState] = useState(initialLocale)
  const [isPending, setIsPending] = useState(false)

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`
    setLocaleState(nextLocale)
    setIsPending(true)
    window.location.reload()
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

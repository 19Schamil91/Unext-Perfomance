/*
  Diese Datei stellt die aktuelle Sprache fuer die Website bereit.
  Sie merkt sich die ausgewaehlte Sprache im Browser und laedt die Seite danach neu.
  Nutzer koennen dadurch zwischen Deutsch, Englisch und Russisch wechseln.
*/
"use client"

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"
import { type Locale } from "@/lib/i18n"

type LocaleContextValue = {
  locale: Locale
  isPending: boolean
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

type LocaleProviderProps = {
  initialLocale: Locale
  children: ReactNode
}

export function LocaleProvider({ initialLocale, children }: LocaleProviderProps) {
  // Diese Werte speichern die aktuell sichtbare Sprache und ob gerade neu geladen wird.
  const [locale, setLocaleState] = useState(initialLocale)
  const [isPending, setIsPending] = useState(false)

  // Diese Funktion speichert die neue Sprache und laedt die Seite kurz danach neu.
  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`
    setLocaleState(nextLocale)
    setIsPending(true)

    window.setTimeout(() => {
      window.location.reload()
    }, 80)
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

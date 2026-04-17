"use client"

import {
  createContext,
  useEffect,
  useContext,
  useState,
  type ReactNode,
} from "react"
import { isLocale, type Locale } from "@/lib/i18n"
import { persistLocale, readStorage, storageKeys } from "@/lib/browser-storage"

interface LocaleContextValue {
  locale: Locale
  isPending: boolean
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)
const scrollRestoreKey = "unext.locale-scroll-y"

interface LocaleProviderProps {
  initialLocale: Locale
  children: ReactNode
}

export function LocaleProvider({ initialLocale, children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState(initialLocale)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setLocaleState(initialLocale)
  }, [initialLocale])

  useEffect(() => {
    const savedScrollY = window.sessionStorage.getItem(scrollRestoreKey)

    if (!savedScrollY) {
      return
    }

    window.sessionStorage.removeItem(scrollRestoreKey)

    requestAnimationFrame(() => {
      window.scrollTo(0, Number(savedScrollY))
    })
  }, [])

  useEffect(() => {
    const storedLocale = readStorage<{ locale?: string }>(storageKeys.locale)?.locale

    if (!isLocale(storedLocale) || storedLocale === initialLocale) {
      return
    }

    document.cookie = `locale=${storedLocale}; path=/; max-age=31536000; SameSite=Lax`
    setLocaleState(storedLocale)
    setIsPending(true)
    window.sessionStorage.setItem(scrollRestoreKey, String(window.scrollY))
    window.location.reload()
  }, [initialLocale])

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`
    persistLocale(nextLocale)
    setLocaleState(nextLocale)
    setIsPending(true)
    window.sessionStorage.setItem(scrollRestoreKey, String(window.scrollY))
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

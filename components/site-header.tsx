"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Globe, Menu, MessageCircle, Phone } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { locales, type Locale } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

type NavigationItem = {
  name: string
  href: string
  children?: readonly { name: string; href: string }[]
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const languageMenuRef = useRef<HTMLDivElement | null>(null)
  const servicesMenuRef = useRef<HTMLDivElement | null>(null)
  const { locale, setLocale, isPending } = useLocale()
  const t = getTranslations(locale)
  const navigation = t.header.navigation as readonly NavigationItem[]
  const pageNavigation = navigation.filter((item) => !item.children)
  const serviceNavigation = navigation.find((item) => item.children)
  const languages = locales.map((code) => ({ code, name: t.languages[code] }))
  const themeLabels = {
    de: { light: "Hellmodus aktivieren", dark: "Darkmodus aktivieren" },
    en: { light: "Switch to light mode", dark: "Switch to dark mode" },
    ru: {
      light: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0432\u0435\u0442\u043b\u0443\u044e \u0442\u0435\u043c\u0443",
      dark: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0435\u043c\u043d\u0443\u044e \u0442\u0435\u043c\u0443",
    },
  } as const

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale)
    setLanguageMenuOpen(false)
    setServicesMenuOpen(false)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    if (!languageMenuOpen && !servicesMenuOpen) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setLanguageMenuOpen(false)
      }
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setServicesMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageMenuOpen(false)
        setServicesMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [languageMenuOpen, servicesMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-8 lg:py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/unext-logo.webp"
            alt="UNEXT GMBH Logo"
            width={140}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {pageNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}

          {serviceNavigation ? (
            <div ref={servicesMenuRef} className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                aria-expanded={servicesMenuOpen}
                aria-haspopup="menu"
                onClick={() => setServicesMenuOpen((open) => !open)}
              >
                {serviceNavigation.name}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${servicesMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesMenuOpen ? (
                <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-border bg-popover p-1 shadow-lg">
                  <Link
                    href={serviceNavigation.href}
                    className="block w-full rounded-lg px-3 py-2 text-sm leading-5 text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setServicesMenuOpen(false)}
                  >
                    {t.header.allServices}
                  </Link>
                  {serviceNavigation.children?.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block w-full rounded-lg px-3 py-2 text-sm leading-5 text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setServicesMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div ref={languageMenuRef} className="relative hidden sm:block">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              aria-expanded={languageMenuOpen}
              aria-haspopup="menu"
              disabled={isPending}
              onClick={() => setLanguageMenuOpen((open) => !open)}
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase">{locale}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${languageMenuOpen ? "rotate-180" : ""}`}
              />
            </Button>

            {languageMenuOpen ? (
              <div className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] rounded-xl border border-border bg-popover p-1 shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    className="flex w-full items-center rounded-lg px-3 py-2 text-left text-sm leading-5 text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                    disabled={isPending}
                    onClick={() => handleLocaleChange(lang.code)}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <ThemeToggle
            lightLabel={themeLabels[locale].light}
            darkLabel={themeLabels[locale].dark}
            className="h-10 w-10 rounded-full border border-border/80 bg-card text-foreground shadow-sm transition-colors hover:bg-accent"
          />

          <Button asChild variant="ghost" size="icon" className="h-10 w-10 sm:hidden">
            <a href="tel:+493023613927" aria-label="Jetzt anrufen">
              <Phone className="h-4 w-4" />
            </a>
          </Button>

          <Button asChild variant="ghost" size="sm" className="hidden md:flex">
            <a href="tel:+493023613927" className="gap-2">
              <Phone className="h-4 w-4" />
              <span>030 23613927</span>
            </a>
          </Button>

          <Button asChild className="hidden sm:flex">
            <Link href="/kontakt">{t.header.inquiry}</Link>
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full border border-border/80 bg-card text-foreground shadow-sm transition-colors hover:bg-accent lg:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t.header.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] max-w-[20rem] overflow-y-auto border-l border-border/70 bg-card/98 px-3.5 pb-5 pt-4 backdrop-blur"
            >
              <div className="flex min-h-full flex-col gap-5 pt-2">
                <div className="rounded-[1.35rem] border border-border/60 bg-background/70 p-4 shadow-sm">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                    <Image
                      src="/images/unext-logo.webp"
                      alt="UNEXT GMBH Logo"
                      width={120}
                      height={35}
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>

                <div>
                  <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {t.header.quickContact}
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button asChild className="w-full">
                      <a href="tel:+493023613927" onClick={() => setMobileMenuOpen(false)} className="gap-2">
                        <Phone className="h-4 w-4" />
                        {t.header.callNow}
                      </a>
                    </Button>
                    <Button asChild variant="ghost" className="w-full">
                      <a
                        href="https://wa.me/4917664365185"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="gap-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                        {t.header.inquiry}
                      </Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {t.header.navigationTitle}
                  </p>
                  <nav className="rounded-[1.35rem] border border-border/60 bg-background/50 p-2">
                    {pageNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between rounded-[1rem] px-3.5 py-3 text-base font-semibold leading-6 text-foreground transition-colors hover:bg-accent/60"
                      >
                        <span className="min-w-0 [text-wrap:balance]">{item.name}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </nav>
                </div>

                {serviceNavigation?.children ? (
                  <div>
                    <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {t.header.servicesTitle}
                    </p>
                    <div className="rounded-[1.35rem] border border-border/60 bg-background/50 p-2">
                      {serviceNavigation.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between rounded-[1rem] px-3.5 py-3 text-sm font-medium leading-5 text-foreground transition-colors hover:bg-accent/40"
                        >
                          <span className="min-w-0 [text-wrap:balance]">{child.name}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="border-t border-border pt-4">
                  <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {t.header.languageTitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant={locale === lang.code ? "secondary" : "ghost"}
                        size="sm"
                        className="min-w-14 rounded-full px-3"
                        disabled={isPending}
                        onClick={() => handleLocaleChange(lang.code)}
                      >
                        {lang.code.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={serviceNavigation?.href ?? "/leistungen"} onClick={() => setMobileMenuOpen(false)}>
                      {t.header.allServices}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

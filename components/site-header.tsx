"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Globe, Menu, MessageCircle, Phone } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
  const { locale, setLocale, isPending } = useLocale()
  const t = getTranslations(locale)
  const navigation = t.header.navigation as readonly NavigationItem[]
  const pageNavigation = navigation.filter((item) => !item.children)
  const serviceNavigation = navigation.find((item) => item.children)
  const languages = locales.map((code) => ({ code, name: t.languages[code] }))
  const themeLabels = {
    de: { light: "Hellmodus aktivieren", dark: "Darkmodus aktivieren" },
    en: { light: "Switch to light mode", dark: "Switch to dark mode" },
    ru: { light: "Включить светлую тему", dark: "Включить темную тему" },
  } as const

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale)
    setMobileMenuOpen(false)
  }

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
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href={item.href} className="w-full">
                      {t.header.allServices}
                    </Link>
                  </DropdownMenuItem>
                  {item.children?.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href} className="w-full">
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden gap-2 sm:flex">
                <Globe className="h-4 w-4" />
                <span className="uppercase">{locale}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  className="cursor-pointer"
                  disabled={isPending}
                  onClick={() => handleLocaleChange(lang.code)}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center"
                  >
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
                      <a
                        href="tel:+493023613927"
                        onClick={() => setMobileMenuOpen(false)}
                        className="gap-2"
                      >
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
                        <span>{item.name}</span>
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
                          <span>{child.name}</span>
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

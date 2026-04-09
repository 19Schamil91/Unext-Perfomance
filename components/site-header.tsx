"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Globe, Menu, Phone } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
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
  const languages = locales.map((code) => ({ code, name: t.languages[code] }))

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/unext-logo.webp"
            alt="UNEXT GMBH Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
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

        <div className="flex items-center gap-4">
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
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t.header.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col gap-6 pt-6">
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

                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-foreground"
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="mt-2 flex flex-col gap-2 pl-4">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-muted-foreground hover:text-foreground"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="border-t border-border pt-4">
                  <div className="flex flex-col gap-3">
                    <Button asChild className="w-full">
                      <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                        {t.header.inquiry}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="tel:+493023613927" className="gap-2">
                        <Phone className="h-4 w-4" />
                        {t.header.callNow}
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={locale === lang.code ? "secondary" : "ghost"}
                      size="sm"
                      disabled={isPending}
                      onClick={() => handleLocaleChange(lang.code)}
                    >
                      {lang.code.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

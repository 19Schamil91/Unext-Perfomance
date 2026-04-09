"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Über uns", href: "/ueber-uns" },
  {
    name: "Leistungen",
    href: "/leistungen",
    children: [
      { name: "Unfallgutachten", href: "/leistungen/unfallgutachten" },
      { name: "Autovermietung", href: "/leistungen/autovermietung" },
      { name: "Autoservice & Werkstatt", href: "/leistungen/autoservice" },
      { name: "Detailing", href: "/leistungen/detailing" },
    ],
  },
  { name: "Kontakt", href: "/kontakt" },
]

const languages = [
  { code: "de", name: "Deutsch" },
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentLang] = useState("de")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
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

        {/* Desktop Navigation */}
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
                      Alle Leistungen
                    </Link>
                  </DropdownMenuItem>
                  {item.children.map((child) => (
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

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden gap-2 sm:flex">
                <Globe className="h-4 w-4" />
                <span className="uppercase">{currentLang}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} className="cursor-pointer">
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Phone CTA */}
          <Button asChild variant="ghost" size="sm" className="hidden md:flex">
            <a href="tel:+493023613927" className="gap-2">
              <Phone className="h-4 w-4" />
              <span>030 23613927</span>
            </a>
          </Button>

          {/* Primary CTA */}
          <Button asChild className="hidden sm:flex">
            <Link href="/kontakt">Anfrage senden</Link>
          </Button>

          {/* Mobile menu button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col gap-6 pt-6">
                {/* Mobile Logo */}
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

                {/* Mobile Navigation */}
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
                          {item.children.map((child) => (
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

                {/* Mobile Actions */}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button asChild className="w-full">
                    <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                      Anfrage senden
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+493023613927" className="gap-2">
                      <Phone className="h-4 w-4" />
                      Jetzt anrufen
                    </a>
                  </Button>
                </div>

                {/* Mobile Language */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={currentLang === lang.code ? "secondary" : "ghost"}
                      size="sm"
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

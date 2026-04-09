import { AlertTriangle } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

interface LegalPageLayoutProps {
  title: string
  children: React.ReactNode
}

export async function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).legal

  return (
    <>
      <SiteHeader />
      <main className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>

          <Alert className="mb-8 border-amber-500/50 bg-amber-500/10">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertTitle className="text-amber-500">{t.alertTitle}</AlertTitle>
            <AlertDescription className="text-amber-500/80">
              {t.alertText}
            </AlertDescription>
          </Alert>

          <div className="prose prose-invert max-w-none">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

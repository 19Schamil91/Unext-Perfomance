import { AlertTriangle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface LegalPageLayoutProps {
  title: string
  children: React.ReactNode
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
            {title}
          </h1>

          <Alert className="mb-8 border-amber-500/50 bg-amber-500/10">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertTitle className="text-amber-500">Platzhalter</AlertTitle>
            <AlertDescription className="text-amber-500/80">
              Dies ist eine Platzhalterseite. Der rechtliche Text muss vor der Veröffentlichung
              durch einen qualifizierten Rechtstext ersetzt werden.
            </AlertDescription>
          </Alert>

          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

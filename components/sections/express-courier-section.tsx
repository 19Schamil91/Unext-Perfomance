import Image from "next/image"
import { ArrowRight, Clock3, Package, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

const contactHref = "tel:+493023613927"
const contactNumber = "030 23613927"
const imageSrc = "/images/service-express-courier.webp"
const imageWidth = 1536
const imageHeight = 1024

export async function ExpressCourierSection() {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).home.expressCourier

  return (
    <section className="bg-card py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Card className="overflow-hidden border-border/50 bg-background">
          <CardContent className="p-0">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Truck className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {t.eyebrow}
                    </p>
                    <h2 className="mt-1 measure-heading text-heading-fluid text-foreground">
                      {t.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-5 measure-intro-tight text-body-compact text-muted-foreground">
                  {t.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {t.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4"
                    >
                      <Package className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="measure-card-copy text-body-compact text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Button asChild className="gap-2">
                    <a href={contactHref}>
                      {t.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <a
                    href={contactHref}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t.contactLabel} {contactNumber}
                  </a>
                </div>
              </div>

              <div className="border-t border-border/50 bg-card/60 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="flex h-full flex-col gap-6">
                  <div className="overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-sm">
                    <Image
                      src={imageSrc}
                      alt={t.title}
                      width={imageWidth}
                      height={imageHeight}
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                      quality={74}
                      className="aspect-[16/11] h-auto w-full object-cover object-[52%_center]"
                    />
                  </div>

                  <div className="rounded-2xl border border-border/50 bg-background p-6 sm:p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock3 className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 measure-card-copy text-title-fluid font-semibold text-foreground">
                      {t.highlightTitle}
                    </h3>
                    <p className="mt-3 measure-card-copy-wide text-body-compact text-muted-foreground">
                      {t.highlightDescription}
                    </p>
                    <div className="mt-6 rounded-xl border border-border/50 bg-card px-4 py-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        {t.contactBoxLabel}
                      </p>
                      <a
                        href={contactHref}
                        className="mt-2 inline-block text-lg font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {contactNumber}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

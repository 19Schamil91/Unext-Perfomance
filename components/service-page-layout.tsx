import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceInquiryForm, type ServiceInquiryFields } from "@/components/service-inquiry-form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  description: string
  image: string
  imageClassName?: string
  phone?: string
  heroActions?: readonly ServiceAction[]
  bottomActions?: readonly ServiceAction[]
  contactNote?: string
  benefits: readonly string[]
  services: readonly { title: string; description: string }[]
  whyChoose: readonly { title: string; description: string }[]
  faqs?: readonly { question: string; answer: string }[]
  formTitle: string
  serviceName: string
  badge?: string
  formFields?: ServiceInquiryFields
}

interface ServiceAction {
  label: string
  href: string
  icon?: "phone" | "message"
  external?: boolean
}

export async function ServicePageLayout({
  title,
  subtitle,
  description,
  image,
  imageClassName,
  phone,
  heroActions,
  bottomActions,
  contactNote,
  benefits,
  services,
  whyChoose,
  faqs,
  formTitle,
  serviceName,
  badge,
  formFields,
}: ServicePageLayoutProps) {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).serviceDetail.layout
  const inquiryId = `${serviceName}-anfrage`

  const defaultHeroActions = phone
    ? [
        { label: phone, href: `tel:${phone.replace(/\s/g, "")}`, icon: "phone" as const },
        {
          label: "WhatsApp",
          href: `https://wa.me/49${phone.replace(/\s/g, "").replace(/^0/, "")}`,
          icon: "message" as const,
          external: true,
        },
      ]
    : []

  const defaultBottomActions = phone
    ? [
        { label: phone, href: `tel:${phone.replace(/\s/g, "")}`, icon: "phone" as const },
        { label: t.contactCta, href: "/kontakt" },
      ]
    : [{ label: t.contactCta, href: "/kontakt" }]

  const resolvedHeroActions = heroActions ?? defaultHeroActions
  const resolvedBottomActions = bottomActions ?? defaultBottomActions

  const renderAction = (
    action: ServiceAction,
    variant: "default" | "outline" | "secondary",
    className?: string
  ) => {
    const icon =
      action.icon === "phone" ? (
        <Phone className="h-5 w-5" />
      ) : action.icon === "message" ? (
        <MessageCircle className="h-5 w-5" />
      ) : null

    const content = (
      <>
        {icon}
        {action.label}
      </>
    )

    return (
      <Button asChild size="lg" variant={variant} className={className}>
        {action.external ? (
          <a href={action.href} target="_blank" rel="noopener noreferrer" className="gap-2">
            {content}
          </a>
        ) : action.href.startsWith("/") ? (
          <Link href={action.href} className="gap-2">
            {content}
          </Link>
        ) : (
          <a href={action.href} className="gap-2">
            {content}
          </a>
        )}
      </Button>
    )
  }

  return (
    <main>
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            quality={78}
            className={imageClassName ?? "object-cover"}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/84 to-background/72 md:bg-gradient-to-r md:from-background md:via-background/90 md:to-background/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/leistungen"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToServices}
          </Link>

          <div className="max-w-2xl">
            {badge && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                <span className="text-sm font-medium text-primary">{badge}</span>
              </div>
            )}

            <p className="text-sm font-medium uppercase tracking-wider text-primary">{subtitle}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
              {description}
            </p>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm leading-6 text-foreground">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>

            {resolvedHeroActions.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {resolvedHeroActions.map((action, index) =>
                  renderAction(action, index === 0 ? "default" : "outline", "w-full sm:w-auto")
                )}
              </div>
            )}

            {contactNote && <p className="mt-4 text-sm text-muted-foreground">{contactNote}</p>}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-12 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t.servicesTitle}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-border/50 bg-background p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id={inquiryId} className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {t.whyTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {t.whyDescription}
              </p>

              <div className="mt-8 space-y-6">
                {whyChoose.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ServiceInquiryForm
                serviceName={serviceName}
                serviceTitle={formTitle}
                fields={formFields}
              />
            </div>
          </div>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t.faqTitle}
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
            {t.questionsTitle}
          </h2>
          <p className="mt-4 text-primary-foreground/80">{t.questionsDescription}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {resolvedBottomActions.map((action, index) =>
              renderAction(
                action,
                index === 0 ? "secondary" : "outline",
                index === 0
                  ? "gap-2 bg-white text-primary hover:bg-white/90"
                  : "gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              )
            )}
          </div>
          {contactNote && <p className="mt-4 text-sm text-primary-foreground/80">{contactNote}</p>}
        </div>
      </section>
    </main>
  )
}

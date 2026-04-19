import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, MessageCircle, Phone } from "lucide-react"
import { ReadableText } from "@/components/readable-text"
import { SelectedServiceTracker } from "@/components/selected-service-tracker"
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
  balancedTypography?: boolean
  singleLineHeadings?: boolean
  titleLines?: readonly string[]
  descriptionLines?: readonly string[]
  serviceTitleLineBreaks?: Readonly<Record<string, readonly string[]>>
  whyChooseTitleLineBreaks?: Readonly<Record<string, readonly string[]>>
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
  balancedTypography = false,
  singleLineHeadings = false,
  titleLines,
  descriptionLines,
  serviceTitleLineBreaks,
  whyChooseTitleLineBreaks,
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

  const renderLines = (text: string, lines?: readonly string[]) => {
    if (!lines || lines.length === 0) {
      return text
    }

    return lines.map((line, index) => (
      <span key={`${text}-${line}-${index}`} className="block">
        {line}
      </span>
    ))
  }

  const renderAction = (
    action: ServiceAction,
    variant: "default" | "outline" | "secondary",
    className?: string
  ) => {
    const isPhoneAction = action.icon === "phone"
    const label = isPhoneAction ? (
      <span className="transition-colors duration-300 group-hover:text-primary">{action.label}</span>
    ) : (
      action.label
    )
    const icon =
      isPhoneAction ? (
        <Phone className="h-5 w-5 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110" />
      ) : action.icon === "message" ? (
        <MessageCircle className="h-5 w-5" />
      ) : null

    const actionClassName = [
      className,
      isPhoneAction
        ? "group transition-all duration-300 hover:-translate-y-0.5 hover:!border-primary/55 hover:!bg-primary/12 hover:!text-foreground"
        : "",
    ]
      .filter(Boolean)
      .join(" ")

    const contentClassName = isPhoneAction ? "group gap-2" : "gap-2"

    const content = (
      <>
        {icon}
        {label}
      </>
    )

    return (
      <Button asChild size="lg" variant={variant} className={actionClassName}>
        {action.external ? (
          <a href={action.href} target="_blank" rel="noopener noreferrer" className={contentClassName}>
            {content}
          </a>
        ) : action.href.startsWith("/") ? (
          <Link href={action.href} className={contentClassName}>
            {content}
          </Link>
        ) : (
          <a href={action.href} className={contentClassName}>
            {content}
          </a>
        )}
      </Button>
    )
  }

  return (
    <main>
      <SelectedServiceTracker serviceName={serviceName} serviceTitle={title} />

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
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToServices}
          </Link>

          <div className="max-w-4xl xl:max-w-[68rem]">
            {badge && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/12 px-4 py-1.5">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.12em]">{badge}</span>
              </div>
            )}

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.14em]">{subtitle}</p>
            <h1
              className={
                balancedTypography
                  ? `mt-3 max-w-[18ch] text-display-fluid leading-[0.96] tracking-[-0.03em] text-foreground sm:max-w-[20ch] lg:max-w-none ${singleLineHeadings ? "lg:whitespace-nowrap" : "lg:text-balance"}`
                  : "mt-3 max-w-[16ch] text-display-fluid text-foreground sm:max-w-[18ch] lg:max-w-[20ch]"
              }
            >
              {renderLines(title, titleLines)}
            </h1>
            {descriptionLines ? (
              <p className="mt-5 max-w-[76ch] text-body-fluid text-muted-foreground sm:mt-6">
                {descriptionLines.map((line, index) => (
                  <span key={`${description}-${line}-${index}`} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ) : (
              <ReadableText
                text={description}
                targetLineLength={balancedTypography ? 74 : 82}
                className="mt-5 max-w-[74ch] text-body-fluid text-muted-foreground sm:mt-6"
              />
            )}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/72 px-4 py-3 text-body-compact text-foreground shadow-[0_12px_26px_rgba(15,23,42,0.06)] backdrop-blur-sm"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className={balancedTypography ? "max-w-[34ch] text-balance" : "max-w-[34ch]"}>{benefit}</span>
                </li>
              ))}
            </ul>

            {resolvedHeroActions.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {resolvedHeroActions.map((action, index) => (
                  <div key={`${action.href}-${action.label}`} className="contents">
                    {renderAction(
                      action,
                      index === 0 ? "default" : "outline",
                      "w-full gap-2 sm:w-auto sm:min-w-[12rem]"
                    )}
                  </div>
                )
                )}
              </div>
            )}

            {contactNote && (
              <ReadableText
                text={contactNote}
                targetLineLength={74}
                className="mt-4 max-w-[72ch] text-sm leading-7 text-muted-foreground"
              />
            )}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-12 max-w-[20ch] text-heading-fluid font-semibold text-foreground">
            {t.servicesTitle}
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-[1.6rem] border border-border/55 bg-background p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] transition-colors hover:border-primary/25"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-primary/70" />
                <h3
                  className={
                    balancedTypography
                      ? `max-w-[24ch] text-title-fluid leading-[1.12] font-semibold tracking-[-0.02em] text-foreground ${singleLineHeadings ? "lg:max-w-none lg:whitespace-nowrap" : "text-balance"}`
                      : "max-w-[24ch] text-title-fluid font-semibold text-foreground"
                  }
                >
                  {renderLines(service.title, serviceTitleLineBreaks?.[service.title])}
                </h3>
                <ReadableText
                  text={service.description}
                  targetLineLength={balancedTypography ? 34 : 38}
                  className="mt-3 max-w-[38ch] text-body-compact text-muted-foreground"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id={inquiryId} className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
            <div>
              <h2 className="max-w-[18ch] text-heading-fluid font-semibold text-foreground">
                {t.whyTitle}
              </h2>
              <ReadableText
                text={t.whyDescription}
                targetLineLength={68}
                className="mt-4 max-w-[60ch] text-body-compact text-muted-foreground"
              />

              <div className="mt-8 space-y-4">
                {whyChoose.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[1.4rem] border border-border/50 bg-card p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        className={
                          balancedTypography
                            ? `max-w-[24ch] text-title-fluid leading-[1.12] font-semibold tracking-[-0.02em] text-foreground ${singleLineHeadings ? "lg:max-w-none lg:whitespace-nowrap" : "text-balance"}`
                            : "max-w-[24ch] text-title-fluid font-semibold text-foreground"
                        }
                      >
                        {renderLines(item.title, whyChooseTitleLineBreaks?.[item.title])}
                      </h3>
                      <ReadableText
                        text={item.description}
                        targetLineLength={balancedTypography ? 36 : 40}
                        className="mt-2 max-w-[42ch] text-body-compact text-muted-foreground"
                      />
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
            <h2 className="mx-auto mb-12 max-w-[18ch] text-heading-fluid font-semibold text-center text-foreground">
              {t.faqTitle}
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border border-border/55 bg-background px-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                >
                  <AccordionTrigger
                    className={
                      balancedTypography
                        ? "py-5 text-left text-[1rem] leading-7 font-medium text-balance sm:text-[1.05rem]"
                        : "py-5 text-left text-[1rem] leading-7 font-medium sm:text-[1.05rem]"
                    }
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ReadableText
                      text={faq.answer}
                      targetLineLength={72}
                      className="max-w-[64ch] pb-1 text-body-compact text-muted-foreground"
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="mx-auto max-w-[18ch] text-heading-fluid font-semibold text-primary-foreground">
            {t.questionsTitle}
          </h2>
          <ReadableText
            text={t.questionsDescription}
            targetLineLength={76}
            className="mx-auto mt-4 max-w-[64ch] text-body-fluid text-primary-foreground/80"
          />
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {resolvedBottomActions.map((action, index) => (
              <div key={`${action.href}-${action.label}`} className="contents">
                {renderAction(
                  action,
                  index === 0 ? "secondary" : "outline",
                  index === 0
                    ? "w-full gap-2 bg-white text-primary hover:bg-white/90 sm:w-auto sm:min-w-[12rem]"
                    : "w-full gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto sm:min-w-[12rem]"
                )}
              </div>
            )
            )}
          </div>
          {contactNote && (
            <ReadableText
              text={contactNote}
              targetLineLength={74}
              className="mx-auto mt-4 max-w-[62ch] text-sm leading-7 text-primary-foreground/80"
            />
          )}
        </div>
      </section>
    </main>
  )
}

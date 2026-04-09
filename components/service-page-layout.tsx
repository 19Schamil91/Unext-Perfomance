import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceInquiryForm } from "@/components/service-inquiry-form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  description: string
  image: string
  imageClassName?: string
  phone: string
  benefits: string[]
  services: { title: string; description: string }[]
  whyChoose: { title: string; description: string }[]
  faqs?: { question: string; answer: string }[]
  formTitle: string
  serviceName: string
  badge?: string
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  image,
  imageClassName,
  phone,
  benefits,
  services,
  whyChoose,
  faqs,
  formTitle,
  serviceName,
  badge,
}: ServicePageLayoutProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          {/* Back Link */}
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zu Leistungen
          </Link>

          <div className="max-w-2xl">
            {badge && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                <span className="text-sm font-medium text-primary">{badge}</span>
              </div>
            )}

            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {subtitle}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Quick Benefits */}
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <a href={`tel:${phone.replace(/\s/g, "")}`}>
                  <Phone className="h-5 w-5" />
                  {phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a
                  href={`https://wa.me/49${phone.replace(/\s/g, "").replace(/^0/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-12">
            Unsere Leistungen
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-border/50 bg-background"
              >
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Warum UNEXT wählen?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Vertrauen Sie auf unsere Erfahrung und Expertise.
              </p>

              <div className="mt-8 space-y-6">
                {whyChoose.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <ServiceInquiryForm
                serviceName={serviceName}
                serviceTitle={formTitle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center mb-12">
              Häufig gestellte Fragen
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
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

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
            Haben Sie Fragen?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Kontaktieren Sie uns jetzt – wir beraten Sie gerne!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-primary hover:bg-white/90"
            >
              <a href={`tel:${phone.replace(/\s/g, "")}`}>
                <Phone className="h-5 w-5" />
                {phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

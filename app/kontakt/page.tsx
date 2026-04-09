import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact-page-client"
import { buildPageMetadata } from "@/lib/metadata"
import { getCurrentLocale } from "@/lib/server-locale"
import { getTranslations } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale()
  const t = getTranslations(locale).contactPage

  return buildPageMetadata(locale, `${t.title} | UNEXT GMBH Berlin`, t.description, "/kontakt")
}

export default function KontaktPage() {
  return <ContactPageClient />
}

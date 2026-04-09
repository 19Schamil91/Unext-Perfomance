import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"

const openGraphLocales: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
  ru: "ru_RU",
}

const homeMeta: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  de: {
    title: "UNEXT GMBH | Ihr starker Partner rund ums Fahrzeug in Berlin",
    description:
      "UNEXT GMBH Berlin - Unfallgutachten, Autovermietung, Autoservice & Werkstatt, Premium Detailing. Zertifiziert, schnell und zuverlässig. Jetzt Kontakt aufnehmen!",
    keywords: [
      "Unfallgutachten Berlin",
      "KFZ Gutachter Berlin",
      "Autovermietung Berlin",
      "Werkstatt Berlin",
      "Auto Detailing Berlin",
      "UNEXT",
      "UNFALLX",
    ],
  },
  en: {
    title: "UNEXT GMBH | Your trusted automotive partner in Berlin",
    description:
      "UNEXT GMBH Berlin - accident reports, car rental, workshop service and premium detailing. Certified, fast and reliable. Get in touch now.",
    keywords: [
      "accident reports Berlin",
      "car appraiser Berlin",
      "car rental Berlin",
      "workshop Berlin",
      "auto detailing Berlin",
      "UNEXT",
      "UNFALLX",
    ],
  },
  ru: {
    title: "UNEXT GMBH | Ваш надежный автомобильный партнер в Берлине",
    description:
      "UNEXT GMBH Berlin - экспертиза ДТП, прокат авто, сервис и мастерская, премиальный детейлинг. Сертифицированно, быстро и надежно. Свяжитесь с нами.",
    keywords: [
      "экспертиза ДТП Берлин",
      "автоэксперт Берлин",
      "прокат авто Берлин",
      "автосервис Берлин",
      "детейлинг Берлин",
      "UNEXT",
      "UNFALLX",
    ],
  },
}

export function buildSiteMetadata(locale: Locale): Metadata {
  const meta = homeMeta[locale]

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "UNEXT GMBH" }],
    creator: "UNEXT GMBH",
    publisher: "UNEXT GMBH",
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: "https://unext.de",
      siteName: "UNEXT GMBH",
      title: meta.title,
      description: meta.description,
    },
  }
}

export function buildPageMetadata(
  locale: Locale,
  title: string,
  description: string,
  path = ""
): Metadata {
  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: `https://unext.de${path}`,
      siteName: "UNEXT GMBH",
      title,
      description,
    },
  }
}

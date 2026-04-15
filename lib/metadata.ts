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
      "UNEXT GMBH Berlin - Unfallgutachten, Autovermietung, Autoservice & Werkstatt, Kfz-Zulassungsservice, Abschleppdienst und Premium Detailing. Zertifiziert, schnell und zuverlässig.",
    keywords: [
      "Unfallgutachten Berlin",
      "Kfz-Gutachter Berlin",
      "Autovermietung Berlin",
      "Werkstatt Berlin",
      "Auto Detailing Berlin",
      "Kfz-Zulassungsservice Berlin",
      "Abschleppdienst Berlin",
      "UNEXT",
      "UNFALLX",
    ],
  },
  en: {
    title: "UNEXT GMBH | Your trusted automotive partner in Berlin",
    description:
      "UNEXT GMBH Berlin - accident reports, car rental, workshop service, vehicle registration, towing and premium detailing. Certified, fast and reliable.",
    keywords: [
      "accident reports Berlin",
      "car appraiser Berlin",
      "car rental Berlin",
      "workshop Berlin",
      "vehicle registration Berlin",
      "towing Berlin",
      "auto detailing Berlin",
      "UNEXT",
      "UNFALLX",
    ],
  },
  ru: {
    title: "UNEXT GMBH | Ваш надежный автомобильный партнер в Берлине",
    description:
      "UNEXT GMBH Berlin - экспертиза ДТП, прокат авто, сервис и мастерская, регистрация автомобиля, эвакуатор и премиальный детейлинг. Быстро, надежно и профессионально.",
    keywords: [
      "экспертиза ДТП Берлин",
      "автоэксперт Берлин",
      "прокат авто Берлин",
      "автосервис Берлин",
      "регистрация авто Берлин",
      "эвакуатор Берлин",
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

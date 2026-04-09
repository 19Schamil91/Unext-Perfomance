import type { Locale } from "@/lib/i18n"
import { contactTranslations } from "@/lib/translations/contact"
import { headerFooterTranslations } from "@/lib/translations/header-footer"
import { homeTranslations } from "@/lib/translations/home"
import { legalTranslations } from "@/lib/translations/legal"
import { serviceDetailTranslations } from "@/lib/translations/service-details"
import { servicePagesPart1 } from "@/lib/translations/service-pages-part1"
import { servicePagesPart2 } from "@/lib/translations/service-pages-part2"
import { servicesAndAboutTranslations } from "@/lib/translations/services-and-about"

const dictionaries = {
  de: {
    ...headerFooterTranslations.de,
    home: homeTranslations.de,
    servicesPage: servicesAndAboutTranslations.de.servicesPage,
    aboutPage: servicesAndAboutTranslations.de.aboutPage,
    serviceDetail: {
      layout: serviceDetailTranslations.de.layout,
      form: serviceDetailTranslations.de.form,
      pages: {
        ...servicePagesPart1.de,
        ...servicePagesPart2.de,
      },
    },
    contactPage: contactTranslations.de,
    legal: legalTranslations.de,
  },
  en: {
    ...headerFooterTranslations.en,
    home: homeTranslations.en,
    servicesPage: servicesAndAboutTranslations.en.servicesPage,
    aboutPage: servicesAndAboutTranslations.en.aboutPage,
    serviceDetail: {
      layout: serviceDetailTranslations.en.layout,
      form: serviceDetailTranslations.en.form,
      pages: {
        ...servicePagesPart1.en,
        ...servicePagesPart2.en,
      },
    },
    contactPage: contactTranslations.en,
    legal: legalTranslations.en,
  },
  ru: {
    ...headerFooterTranslations.ru,
    home: homeTranslations.ru,
    servicesPage: servicesAndAboutTranslations.ru.servicesPage,
    aboutPage: servicesAndAboutTranslations.ru.aboutPage,
    serviceDetail: {
      layout: serviceDetailTranslations.ru.layout,
      form: serviceDetailTranslations.ru.form,
      pages: {
        ...servicePagesPart1.ru,
        ...servicePagesPart2.ru,
      },
    },
    contactPage: contactTranslations.ru,
    legal: legalTranslations.ru,
  },
} as const

export type TranslationDictionary = (typeof dictionaries)[Locale]

export function getTranslations(locale: Locale): TranslationDictionary {
  return dictionaries[locale]
}

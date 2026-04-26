import type { Locale } from "@/lib/i18n"

export const headerFooterTranslations = {
  de: {
    languages: {
      de: "Deutsch",
      en: "Englisch",
      ru: "Russisch",
    },
    header: {
      navigation: [
        { name: "Startseite", href: "/" },
        { name: "Über uns", href: "/ueber-uns" },
        {
          name: "Leistungen",
          href: "/leistungen",
          children: [
            { name: "Unfallhilfe & Gutachten", href: "/leistungen/unfallgutachten" },
            { name: "Autovermietung", href: "/leistungen/autovermietung" },
            { name: "Werkstatt & Service", href: "/leistungen/autoservice" },
            { name: "Aufbereitung & Pflege", href: "/leistungen/detailing" },
            { name: "Kfz-Zulassung", href: "/leistungen/zulassungsservice" },
            { name: "Pannenhilfe & Abschleppen", href: "/leistungen/abschleppdienst-pannenhilfe" },
          ],
        },
        { name: "Kontakt", href: "/kontakt" },
      ],
      allServices: "Alle Leistungen",
      inquiry: "Anfrage senden",
      callNow: "Jetzt anrufen",
      quickContact: "Schnellkontakt",
      navigationTitle: "Navigation",
      servicesTitle: "Hauptleistungen",
      languageTitle: "Sprache",
      menuDescription: "Klare Wege auf Mobile: zuerst Kontakt, dann die wichtigsten Seiten und direkt darunter die 6 Hauptleistungen.",
      openMenu: "Menü öffnen",
    },
    footer: {
      description:
        "Kompletter Fahrzeug-Service in Berlin: Unfallhilfe & Gutachten, Autovermietung, Werkstatt & Service, Aufbereitung & Pflege, Kfz-Zulassung und Pannenhilfe & Abschleppen aus einer Hand.",
      address: "Lübarser Str. 25, 13435 Berlin",
      hoursWeek: "Mo-Fr: 09:00-18:00",
      hoursSat: "Sa: 10:00-16:00",
      hoursNote: "sonst nach Vereinbarung",
      columns: {
        services: "Leistungen",
        company: "Unternehmen",
        legal: "Rechtliches",
        social: "Social Media",
      },
      companyLinks: [
        { name: "Über uns", href: "/ueber-uns" },
        { name: "Kontakt", href: "/kontakt" },
      ],
      legalLinks: [
        { name: "Impressum", href: "/impressum" },
        { name: "Datenschutz", href: "/datenschutz" },
        { name: "AGB", href: "/agb" },
      ],
      socialLinks: [
        { name: "@unfallx", href: "https://instagram.com/unfallx" },
        { name: "@unext.performance", href: "https://instagram.com/unext.performance" },
      ],
      copyright: "Alle Rechte vorbehalten.",
      bottomLocation: "Standort: Berlin",
      bottomCertified: "Alles aus einer Hand",
    },
  },
  en: {
    languages: {
      de: "German",
      en: "English",
      ru: "Russian",
    },
    header: {
      navigation: [
        { name: "Home", href: "/" },
        { name: "About", href: "/ueber-uns" },
        {
          name: "Services",
          href: "/leistungen",
          children: [
            { name: "Accident Reports", href: "/leistungen/unfallgutachten" },
            { name: "Car Rental", href: "/leistungen/autovermietung" },
            { name: "Workshop & Service", href: "/leistungen/autoservice" },
            { name: "Detailing", href: "/leistungen/detailing" },
            { name: "Vehicle Registration Service", href: "/leistungen/zulassungsservice" },
            { name: "Towing & Roadside Assistance", href: "/leistungen/abschleppdienst-pannenhilfe" },
          ],
        },
        { name: "Contact", href: "/kontakt" },
      ],
      allServices: "All services",
      inquiry: "Send inquiry",
      callNow: "Call now",
      quickContact: "Quick contact",
      navigationTitle: "Navigation",
      servicesTitle: "Main services",
      languageTitle: "Language",
      menuDescription: "On mobile, the fastest path comes first: contact options, main navigation and direct access to the 6 core services.",
      openMenu: "Open menu",
    },
    footer: {
      description:
        "Your strong automotive partner in Berlin. Accident reports, car rental, workshop service, vehicle registration, towing, premium detailing and express delivery from one source.",
      address: "Lübarser Str. 25, 13435 Berlin",
      hoursWeek: "Mon-Fri: 09:00 AM-6:00 PM",
      hoursSat: "Sat: 10:00 AM-4:00 PM",
      hoursNote: "otherwise by appointment",
      columns: {
        services: "Services",
        company: "Company",
        legal: "Legal",
        social: "Social media",
      },
      companyLinks: [
        { name: "About", href: "/ueber-uns" },
        { name: "Contact", href: "/kontakt" },
      ],
      legalLinks: [
        { name: "Legal notice", href: "/impressum" },
        { name: "Privacy policy", href: "/datenschutz" },
        { name: "Terms & conditions", href: "/agb" },
      ],
      socialLinks: [
        { name: "@unfallx", href: "https://instagram.com/unfallx" },
        { name: "@unext.performance", href: "https://instagram.com/unext.performance" },
      ],
      copyright: "All rights reserved.",
      bottomLocation: "Location: Berlin",
      bottomCertified: "Everything from one source",
    },
  },
  ru: {
    languages: {
      de: "Немецкий",
      en: "Английский",
      ru: "Русский",
    },
    header: {
      navigation: [
        { name: "Главная", href: "/" },
        { name: "О нас", href: "/ueber-uns" },
        {
          name: "Услуги",
          href: "/leistungen",
          children: [
            { name: "Экспертиза ДТП", href: "/leistungen/unfallgutachten" },
            { name: "Прокат авто", href: "/leistungen/autovermietung" },
            { name: "Сервис и мастерская", href: "/leistungen/autoservice" },
            { name: "Детейлинг", href: "/leistungen/detailing" },
            { name: "Сервис регистрации авто", href: "/leistungen/zulassungsservice" },
            { name: "Эвакуатор и помощь на дороге", href: "/leistungen/abschleppdienst-pannenhilfe" },
          ],
        },
        { name: "Контакты", href: "/kontakt" },
      ],
      allServices: "Все услуги",
      inquiry: "Отправить запрос",
      callNow: "Позвонить",
      quickContact: "Быстрый контакт",
      navigationTitle: "Навигация",
      servicesTitle: "Основные услуги",
      languageTitle: "Язык",
      menuDescription: "В мобильной версии сначала идут быстрые контакты, затем навигация и прямой доступ к 6 основным услугам.",
      openMenu: "Открыть меню",
    },
    footer: {
      description:
        "Ваш надежный автомобильный партнер в Берлине. Экспертиза ДТП, прокат авто, сервис, регистрация, эвакуатор и премиальный детейлинг под одной крышей.",
      address: "Lübarser Str. 25, 13435 Berlin",
      hoursWeek: "Пн-Пт: 09:00-18:00",
      hoursSat: "Сб: 10:00-16:00",
      hoursNote: "в другое время по договоренности",
      columns: {
        services: "Услуги",
        company: "Компания",
        legal: "Правовая информация",
        social: "Соцсети",
      },
      companyLinks: [
        { name: "О нас", href: "/ueber-uns" },
        { name: "Контакты", href: "/kontakt" },
      ],
      legalLinks: [
        { name: "Юридическая информация", href: "/impressum" },
        { name: "Политика конфиденциальности", href: "/datenschutz" },
        { name: "Условия и положения", href: "/agb" },
      ],
      socialLinks: [
        { name: "@unfallx", href: "https://instagram.com/unfallx" },
        { name: "@unext.performance", href: "https://instagram.com/unext.performance" },
      ],
      copyright: "Все права защищены.",
      bottomLocation: "Локация: Berlin",
      bottomCertified: "Сертифицированный сервис",
    },
  },
} as const satisfies Record<Locale, unknown>

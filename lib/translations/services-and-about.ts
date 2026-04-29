import type { Locale } from "@/lib/i18n"

export const servicesAndAboutTranslations = {
  de: {
    servicesPage: {
      title: "6 Hauptleistungen rund ums Fahrzeug",
      description:
        "Diese 6 Hauptleistungen bilden den Kern von UNEXT. Sie sehen sofort, wobei wir Sie direkt unterstützen können - klar, schnell und ohne Umwege.",
      directCall: "Direkt anrufen:",
      onRequestContact: "Telefon auf Anfrage · @unext.performance",
      items: [
        {
          title: "Unfallhilfe & Gutachten",
          subtitle: "UNFALLX",
          description:
            "Nach einem Unfall erhalten Sie schnelle Unterstützung, ein unabhängiges Gutachten und eine klare Orientierung für\u00A0die\u00A0nächsten Schritte.",
          features: [
            "Schnelle Ersteinschätzung",
            "Unterstützung bei der Schadensabwicklung",
            "Unabhängiges Gutachten",
            "Weitere Schritte über UNEXT möglich",
          ],
        },
        {
          title: "Autovermietung",
          subtitle: "Ersatzfahrzeuge",
          description:
            "Brauchen Sie schnell ein Ersatzfahrzeug? Ob nach einem Unfall oder während Ihr Auto in der Werkstatt ist - wir haben immer geprüfte Fahrzeuge für Sie verfügbar.",
          features: [
            "Ersatzfahrzeuge direkt verfügbar",
            "Flexible Laufzeiten",
            "Schnelle & unkomplizierte Abwicklung",
            "Zuverlässiger & geprüfter Service",
          ],
        },
        {
          title: "Werkstatt & Service",
          subtitle: "Wartung & Reparatur",
          description:
            "Von Inspektion bis Reparatur kümmern wir uns zuverlässig um die Technik Ihres Fahrzeugs - auch wenn es schnell gehen muss.",
          features: [
            "Inspektion & Ölservice",
            "Reifenservice",
            "Diagnose & Reparatur",
            "Auch für Fahrdienstfahrzeuge",
          ],
        },
        {
          title: "Aufbereitung & Pflege",
          subtitle: "Detailing",
          description:
            "Professionelle Innen- und Außenaufbereitung für gepflegte Fahrzeuge, Werterhalt und einen sauberen Gesamteindruck.",
          features: [
            "Innen- & Außenreinigung",
            "Lackaufbereitung & Politur",
            "Werterhalt",
            "Individuelle Pakete",
          ],
        },
        {
          title: "Kfz-Zulassung",
          subtitle: "Anmeldung & Kennzeichen",
          description:
            "Wir übernehmen den gesamten Ablauf für Sie - von\u00A0der\u00A0Abmeldung\u00A0bis\u00A0zur\u00A0fertigen\u00A0Zulassung. Kein Termin, kein Behördengang, kein Aufwand für Sie.",
          features: [
            "Kfz-Zulassung",
            "Kurzzeit- & Exportkennzeichen",
            "Versicherungsservice inkl. eVB",
            "Wunschkennzeichen-Service",
          ],
        },
        {
          title: "Pannenhilfe & Abschleppen",
          subtitle: "Soforthilfe & Transport",
          description:
            "Im Notfall sind wir schnell für Sie da und sorgen für eine sichere Lösung. Sie müssen sich um nichts kümmern - wir übernehmen die nächsten Schritte für Sie.",
          features: [
            "Schnelle Hilfe bei Unfall oder Panne",
            "Abschleppdienst direkt vor Ort",
            "Fahrzeugtransport zur Wunschadresse",
            "Komplette Abwicklung auf Wunsch",
          ],
        },
      ],
    },
    aboutPage: {
      title: "Über UNEXT GMBH",
      description:
        "Vom spezialisierten Unfallgutachter zum vollständigen Automotive-Partner. Lernen Sie das Team hinter UNEXT kennen und erfahren Sie, was uns antreibt.",
      storyEyebrow: "Unsere Geschichte",
      storyTitle: "Von der Vision zur Realität",
      storyParagraphs: [
        "UNEXT GMBH wurde 2024 in Berlin gegründet, mit einer klaren Mission: professionelle Unfallgutachten und Soforthilfe für Menschen, die gerade einen stressigen Moment durchleben. Unter der Marke UNFALLX haben wir uns schnell als zuverlässiger und kompetenter Partner etabliert.",
        "Doch wir haben erkannt, dass unsere Kunden mehr brauchen. Wer nach einem Unfall ein Gutachten benötigt, braucht oft auch ein Ersatzfahrzeug. Wer sein Auto zur Reparatur bringt, wünscht sich einen Ansprechpartner für alles. Und wer sein Fahrzeug liebt, möchte es in besten Händen wissen.",
        "Deshalb haben wir unser Angebot erweitert: Autovermietung, Werkstatt & Service, Aufbereitung & Pflege, Kfz-Zulassung und Pannenhilfe & Abschleppen sind heute feste Bestandteile von UNEXT. Sechs starke Bereiche, ein kompetenter Partner - das ist unsere Vision, die wir jeden Tag leben.",
      ],
      valuesTitle: "Unsere Werte",
      valuesDescription: "Diese Prinzipien leiten uns bei allem, was wir tun.",
      values: [
        {
          title: "Qualität",
          description:
            "Wir setzen auf höchste Standards bei allen unseren Dienstleistungen. Qualität ist kein Zufall, sondern das Ergebnis von Engagement und Expertise.",
        },
        {
          title: "Kundenorientierung",
          description:
            "Sie stehen bei uns im Mittelpunkt. Wir hören zu, verstehen Ihre Bedürfnisse und finden die beste Lösung für Ihre Situation.",
        },
        {
          title: "Zuverlässigkeit",
          description:
            "Was wir zusagen, halten wir. Pünktlichkeit, Ehrlichkeit und Verlässlichkeit sind die Grundpfeiler unserer Arbeit.",
        },
        {
          title: "Leidenschaft",
          description:
            "Wir lieben Autos und das, was wir tun. Diese Begeisterung spüren Sie in jedem Detail unserer Arbeit.",
        },
      ],
      stats: [
        { value: "2024", label: "Gegründet" },
        { value: "6", label: "Servicebereiche" },
        { value: "1", label: "Standort in Berlin" },
        { value: "100%", label: "Engagement" },
      ],
      milestones: [
        {
          year: "2024",
          title: "Gründung",
          description: "UNEXT GMBH wird in Berlin gegründet mit Fokus auf Unfallgutachten (UNFALLX).",
        },
        { year: "2026", title: "Autovermietung", description: "Erweiterung des Angebots um professionelle Mietfahrzeuge." },
        { year: "2026", title: "Werkstatt & Detailing", description: "Eröffnung des Werkstattbereichs und Start des Premium-Detailing-Service." },
        { year: "Heute", title: "Vollständiger Service", description: "Sechs starke Bereiche unter einem Dach - Ihr Automotive-Partner in Berlin." },
      ],
      subBrandBadge: "Unsere Marke",
      subBrandTitle: "UNFALLX - Unsere Wurzeln",
      subBrandDescription:
        "UNFALLX ist die Marke von UNEXT GmbH, mit der alles begann.\nAls spezialisierter Service für Unfallgutachten und Soforthilfe steht UNFALLX für kompetente, schnelle und unabhängige Unterstützung nach Verkehrsunfällen.",
      subBrandHighlights: ["Zertifizierte Gutachter", "Schnelle Terminvergabe", "Unabhängige Gutachten", "Komplette Schadensabwicklung"],
      subBrandCta: "Mehr über UNFALLX",
    },
  },
  en: {
    servicesPage: {
      title: "Our services",
      description:
        "UNEXT GMBH offers a comprehensive range of vehicle-related services. Six strong business areas under one roof - professional, reliable and always there for you.",
      directCall: "Call directly:",
      onRequestContact: "Phone on request · @unext.performance",
      items: [
        {
          title: "Accident Reports & Immediate Assistance",
          subtitle: "UNFALLX",
          description:
            "After an accident, you need fast and competent support. Our certified experts prepare independent vehicle reports and assist\u00A0you\u00A0throughout the claims process.",
          features: ["Fast appointments", "Support with claims handling", "Independent & professional reports", "Certified experts"],
        },
        {
          title: "Car Rental",
          subtitle: "Replacement vehicles",
          description:
            "Need a replacement vehicle quickly? Whether after an accident or while your car is in the workshop - we always have inspected vehicles ready for you.",
          features: ["Replacement vehicles available immediately", "Flexible rental terms", "Fast & straightforward processing", "Reliable & inspected service"],
        },
        {
          title: "Workshop & Service",
          subtitle: "Repairs & maintenance",
          description:
            "Our professional workshop team takes care of every aspect of your vehicle. From inspections to repairs - everything from one source.",
          features: ["Oil change & inspection", "Tire service & storage", "Dashcam installation", "General repairs & maintenance"],
        },
        {
          title: "Detailing",
          subtitle: "Premium vehicle care",
          description:
            "Give your vehicle professional care. Our detailing experts restore your car's shine inside and out.",
          features: ["Paint correction & polish", "Interior & exterior cleaning", "Value retention & visual upgrade", "Professional & certified"],
        },
        {
          title: "Vehicle Registration Service",
          subtitle: "Registration & license plates",
          description:
            "We handle the entire process for you - from\u00A0deregistration\u00A0to\u00A0completed\u00A0registration. No appointments, no authority visits and no extra effort on your side.",
          features: [
            "Vehicle registration",
            "Temporary & export plates",
            "Insurance service incl. eVB number",
            "Custom plate service",
          ],
        },
        {
          title: "Towing & Roadside Help",
          subtitle: "Immediate help & transport",
          description:
            "In emergencies, we are there quickly and provide a safe solution. You do not have to take care of anything - we handle the next steps for you.",
          features: [
            "Fast help after accidents or breakdowns",
            "On-site towing service",
            "Vehicle transport to your destination",
            "Complete follow-up handling on request",
          ],
        },
      ],
    },
    aboutPage: {
      title: "About UNEXT GMBH",
      description:
        "From a specialized accident expert to a full automotive partner. Get to know the team behind UNEXT and learn what drives us.",
      storyEyebrow: "Our story",
      storyTitle: "From vision to reality",
      storyParagraphs: [
        "UNEXT GMBH was founded in Berlin in 2024 with a clear mission: professional accident reports and immediate assistance for people going through a stressful moment. Under the UNFALLX brand, we quickly established ourselves as a reliable and competent partner.",
        "But we realized our customers need more. Anyone needing an accident report often also needs a replacement vehicle. Anyone bringing a car in for repairs wants one point of contact for everything. And anyone who loves their vehicle wants it in the best hands.",
        "That is why we expanded our services: car rental, professional workshop service, premium detailing, vehicle registration and towing are now integral parts of UNEXT. Six strong business areas, one competent partner - that is the vision we live every day.",
      ],
      valuesTitle: "Our values",
      valuesDescription: "These principles guide everything we do.",
      values: [
        { title: "Quality", description: "We maintain the highest standards in all our services. Quality is not coincidence, but the result of commitment and expertise." },
        { title: "Customer focus", description: "You are at the center of everything we do. We listen, understand your needs and find the best solution for your situation." },
        { title: "Reliability", description: "We keep what we promise. Punctuality, honesty and dependability are the foundations of our work." },
        { title: "Passion", description: "We love cars and what we do. You can feel that passion in every detail of our work." },
      ],
      stats: [
        { value: "2024", label: "Founded" },
        { value: "6", label: "Service areas" },
        { value: "1", label: "Berlin location" },
        { value: "100%", label: "Commitment" },
      ],
      milestones: [
        { year: "2024", title: "Founded", description: "UNEXT GMBH is founded in Berlin with a focus on accident reports (UNFALLX)." },
        { year: "2026", title: "Car Rental", description: "Expansion of the portfolio with professional rental vehicles." },
        { year: "2026", title: "Workshop & Detailing", description: "Opening of the workshop area and launch of the premium detailing service." },
        { year: "Today", title: "Full Service", description: "Six strong business areas under one roof - your automotive partner in Berlin." },
      ],
      subBrandBadge: "Our brand",
      subBrandTitle: "UNFALLX - Our roots",
      subBrandDescription:
        "UNFALLX is the UNEXT GmbH brand where it all began.\nAs a specialized service for accident reports and immediate assistance, UNFALLX stands for competent, fast and independent support after road accidents.",
      subBrandHighlights: ["Certified experts", "Fast appointments", "Independent reports", "Complete claims handling"],
      subBrandCta: "More about UNFALLX",
    },
  },
  ru: {
    servicesPage: {
      title: "Наши услуги",
      description:
        "UNEXT GMBH предлагает полный спектр услуг вокруг автомобиля. Шесть сильных направлений под одной крышей - профессионально, надежно и всегда рядом.",
      directCall: "Позвонить напрямую:",
      onRequestContact: "Телефон по запросу · @unext.performance",
      items: [
        {
          title: "Экспертиза ДТП и срочная помощь",
          subtitle: "UNFALLX",
          description:
            "После ДТП вам нужна быстрая и компетентная помощь. Наши сертифицированные эксперты готовят независимые автоэкспертизы и сопровождают вас на всем этапе урегулирования ущерба.",
          features: ["Быстрая запись", "Поддержка по урегулированию ущерба", "Независимая и профессиональная экспертиза", "Сертифицированные эксперты"],
        },
        {
          title: "Прокат авто",
          subtitle: "Подменные автомобили",
          description:
            "Нужен автомобиль быстро? После ДТП или пока ваша машина в сервисе - у нас всегда есть проверенные автомобили для вас.",
          features: ["Подменные автомобили доступны сразу", "Гибкие сроки аренды", "Быстрое и простое оформление", "Надежный и проверенный сервис"],
        },
        {
          title: "Сервис и мастерская",
          subtitle: "Ремонт и обслуживание",
          description:
            "Наша профессиональная команда мастерской позаботится обо всем, что касается вашего автомобиля. От инспекции до ремонта - все из одних рук.",
          features: ["Замена масла и инспекция", "Шиномонтаж и хранение шин", "Установка видеорегистратора", "Общий ремонт и обслуживание"],
        },
        {
          title: "Детейлинг",
          subtitle: "Премиальный уход за автомобилем",
          description:
            "Подарите вашему автомобилю профессиональный уход. Наши специалисты по детейлингу вернут блеск вашему авто внутри и снаружи.",
          features: ["Коррекция лака и полировка", "Чистка салона и кузова", "Сохранение стоимости и визуальное обновление", "Профессионально и сертифицированно"],
        },
        {
          title: "Сервис регистрации авто",
          subtitle: "Оформление и номера",
          description:
            "Мы берем на себя весь процесс - от снятия с учета до готовой регистрации. Без записи, без посещения ведомств и без лишних хлопот для вас.",
          features: [
            "Регистрация авто",
            "Временные и экспортные номера",
            "Страховой сервис с eVB",
            "Сервис выбора номера",
          ],
        },
        {
          title: "Эвакуатор и помощь на дороге",
          subtitle: "Срочная помощь и транспортировка",
          description:
            "В экстренной ситуации мы быстро приезжаем и обеспечиваем безопасное решение. Вам не нужно ни о чем заботиться - мы берем следующие шаги на себя.",
          features: [
            "Быстрая помощь при ДТП или поломке",
            "Эвакуатор прямо на место",
            "Доставка авто по нужному адресу",
            "Полное сопровождение по запросу",
          ],
        },
      ],
    },
    aboutPage: {
      title: "О UNEXT GMBH",
      description:
        "От специализированного эксперта по ДТП до полноценного автомобильного партнера. Познакомьтесь с командой UNEXT и узнайте, что нас вдохновляет.",
      storyEyebrow: "Наша история",
      storyTitle: "От идеи к реальности",
      storyParagraphs: [
        "UNEXT GMBH была основана в Берлине в 2024 году с четкой миссией: профессиональная экспертиза ДТП и срочная помощь людям в стрессовой ситуации. Под брендом UNFALLX мы быстро стали надежным и компетентным партнером.",
        "Но мы поняли, что клиентам нужно больше. Тем, кому нужна экспертиза после ДТП, часто нужен и подменный автомобиль. Тем, кто отдает машину в ремонт, нужен единый контакт по всем вопросам. А те, кто любят свой автомобиль, хотят доверить его лучшим рукам.",
        "Поэтому мы расширили спектр услуг: прокат авто, профессиональная мастерская, премиальный детейлинг, регистрация автомобилей и эвакуатор теперь являются частью UNEXT. Шесть сильных направлений, один компетентный партнер - именно так выглядит наша ежедневная работа.",
      ],
      valuesTitle: "Наши ценности",
      valuesDescription: "Эти принципы направляют нас во всем, что мы делаем.",
      values: [
        {
          title: "Качество",
          description:
            "Мы придерживаемся самых высоких стандартов во всех наших услугах. Качество - это не случайность, а результат вовлеченности и экспертизы.",
        },
        {
          title: "Ориентация на клиента",
          description:
            "Вы в центре нашего внимания. Мы слушаем, понимаем ваши потребности и находим лучшее решение для вашей ситуации.",
        },
        {
          title: "Надежность",
          description:
            "Мы выполняем то, что обещаем. Пунктуальность, честность и надежность - основа нашей работы.",
        },
        {
          title: "Страсть",
          description:
            "Мы любим автомобили и свое дело. Эта вовлеченность ощущается в каждой детали нашей работы.",
        },
      ],
      stats: [
        { value: "2024", label: "Основана" },
        { value: "6", label: "Направлений" },
        { value: "1", label: "Локация в Берлине" },
        { value: "100%", label: "Вовлеченность" },
      ],
      milestones: [
        {
          year: "2024",
          title: "Основание",
          description: "UNEXT GMBH основана в Берлине с фокусом на экспертизе ДТП (UNFALLX).",
        },
        { year: "2026", title: "Прокат авто", description: "Расширение портфолио за счет профессиональных арендных автомобилей." },
        { year: "2026", title: "Мастерская и детейлинг", description: "Открытие мастерской и запуск премиального детейлинга." },
        { year: "Сегодня", title: "Полный сервис", description: "Шесть сильных направлений под одной крышей - ваш автомобильный партнер в Берлине." },
      ],
      subBrandBadge: "\u041d\u0430\u0448 \u0431\u0440\u0435\u043d\u0434",
      subBrandTitle: "UNFALLX - наши корни",
      subBrandDescription:
        "UNFALLX - бренд UNEXT GmbH, с которого все началось.\nКак специализированный сервис по экспертизе ДТП и срочной помощи, UNFALLX означает компетентную, быструю и независимую поддержку после дорожных происшествий.",
      subBrandHighlights: ["Сертифицированные эксперты", "Быстрая запись", "Независимые заключения", "Полное сопровождение по ущербу"],
      subBrandCta: "Подробнее об UNFALLX",
    },
  },
} as const satisfies Record<Locale, unknown>

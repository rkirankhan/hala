import type { HalaCopy } from './copy';

/**
 * German copy — a rewrite, not a translation.
 *
 * Decisions baked in here, so they stay consistent if someone edits one string:
 *
 *  - Register is SIE throughout. Restaurateurs and venue owners are the buyer,
 *    and du would read as presumptuous to a large part of that market. If the
 *    brand ever moves to du, it has to move in every string at once.
 *  - Times are 24-hour (20:15, not 8:15 PM) and thousands use a dot (1.200).
 *  - Prices are quoted in euros. The numbers are carried over from the pound
 *    figures as a placeholder — they are a commercial decision, not a
 *    translation one, so confirm them before this page goes live.
 *  - "Diary" is Reservierungsbuch, the word a German restaurant actually uses.
 *
 * Written to be idiomatic rather than faithful, then still worth a native
 * speaker's pass before launch — particularly the headlines, where the English
 * relies on rhythm that does not survive word-for-word.
 */
export const de: HalaCopy = {
  meta: {
    title: 'Hala | Ihr KI-Mitarbeiter für die Kundenkommunikation',
    description:
      'Hala nimmt jeden Anruf und jede Nachricht beim ersten Klingeln an, trägt Termine ein, fasst nach und übergibt an Ihr Team, sobald jemand einen Menschen braucht.',
  },

  nav: {
    byline: 'von Khaas Hub',
    links: [
      { label: 'Warum', href: '#why' },
      { label: 'Kanäle', href: '#channels' },
      { label: 'Preise', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: 'Demo vereinbaren',
  },

  hero: {
    badge: 'KI-Agenten für Restaurants',
    h1: 'Jeder Anruf beantwortet. Jeder Tisch besetzt.',
    sub: 'Hala übernimmt Telefon, Nachrichten und Nachfassen für Ihr Team — niemand landet in der Warteschleife, und keine Reservierung geht verloren.',
    ctaPrimary: 'Demo vereinbaren',
    ctaSecondary: 'Live anhören',
    callLabel: 'Laufendes Gespräch',
    messages: [
      { who: 'guest', t: 'Hallo — ein Tisch für vier am Freitag, so gegen acht?' },
      { who: 'agent', t: 'Ich hätte 20:15 oder 20:45. Was passt Ihnen besser?' },
      { who: 'guest', t: '20:15. Einer von uns hat eine Nussallergie.' },
    ],
    cards: [
      { label: 'Reservierung erstellt', value: 'Fr · 20:15 · 4 Gäste' },
      { label: 'Küche informiert', value: 'Nussallergie vermerkt' },
    ],
  },

  stat: {
    line1: '1 Agent.',
    line2: '6 Kanäle.',
    line3: 'Rund um die Uhr.',
    cards: [
      {
        k: 'Nie wieder Anrufbeantworter',
        v: 'Gäste erreichen beim ersten Klingeln ein echtes Gespräch — auch außerhalb Ihrer Öffnungszeiten.',
      },
      {
        k: 'Ein Gedächtnis, alle Kanäle',
        v: 'Wer gestern angerufen und heute geschrieben hat, ist derselbe Gast — nicht zwei Fremde.',
      },
      {
        k: 'Ihr Team bleibt im Service',
        v: 'Niemand verlässt den Tisch, um ans Telefon zu gehen, und nichts wird doppelt notiert.',
      },
    ],
  },

  bands: {
    heading: 'Alles, was ein volles Restaurant braucht. Nichts, was es nicht braucht.',
    voice: {
      eyebrow: 'Sprach-Agent',
      title: 'Er geht ans Telefon wie Ihr bester Gastgeber.',
      body: 'Reservierungen, Allergene, Öffnungszeiten und große Gruppen — vollständig erledigt, auf Deutsch oder Englisch, ohne dass jemand den Service verlassen muss.',
      metaTop: 'Eingehend · 19:42',
      metaBottom: 'Reservierung eingetragen · Küche informiert',
      messages: [
        'Ein Tisch für vier am Freitag, so gegen acht?',
        'Ich hätte 20:15 oder 20:45. Was passt Ihnen besser?',
        '20:15. Einer von uns hat eine Nussallergie.',
      ],
    },
    chat: {
      eyebrow: 'Chat-Agent',
      title: 'Er antwortet, bevor woanders reserviert wird.',
      body: 'WhatsApp und Instagram in Sekunden beantwortet, mit dem Reservierungslink direkt im Chat — während Ihr Gast noch überlegt.',
      metaTop: 'WhatsApp · 21:48',
      metaBottom: 'In 4 Sekunden geantwortet',
      messages: [
        'Haben Sie noch offen? Tisch für 2?',
        'Die Küche schließt um 22:30 — ich kann Sie um 21:15 setzen.',
        'Ja, gerne',
      ],
    },
    automations: {
      eyebrow: 'Automatisierungen',
      title: 'Das Nachfassen, zu dem nie jemand kommt.',
      body: 'Eine SMS innerhalb einer Minute nach jedem verpassten Anruf. Eine Erinnerung, wenn eine Anfrage liegen bleibt. Eine Bitte um Bewertung, solange der Abend noch frisch ist.',
      metaTop: 'Verpasster Anruf · Freitag 19:42',
      metaBottom: '3 Sequenzen aktiv',
      rows: [
        ['Anruf verpasst', 'SMS in 60 Sek.', 'Reservierungslink'],
        ['24 h keine Antwort', 'WhatsApp-Erinnerung', 'Neu reservieren'],
      ],
    },
  },

  why: {
    eyebrow: 'Warum ein KI-Agent',
    heading: 'Vier Gründe, warum das Telefon Sie kein Geld mehr kostet.',
    items: [
      {
        title: 'Er lässt niemanden warten.',
        body: 'Jeder Anruf beim ersten Klingeln beantwortet — freitags um sieben, am Feiertag, um Mitternacht, wenn Sie geschlossen haben.',
      },
      {
        title: 'Er kennt Ihr Restaurant.',
        body: 'Ihre Öffnungszeiten, Ihre Karte, Ihre Allergene, Ihre letzte Sitzung. Kein generischer Bot, der ein Skript abliest.',
      },
      {
        title: 'Er trägt ins Reservierungsbuch ein.',
        body: 'Reservierungen landen dort, wo Ihr Team ohnehin nachsieht. Niemand tippt etwas doppelt.',
      },
      {
        title: 'Er übergibt sauber.',
        body: 'Wenn ein Gast einen Menschen braucht, übernimmt Ihr Team und weiß bereits, wer anruft und warum.',
      },
    ],
  },

  journey: {
    heading: 'Eine Nummer. Jede Art von Anruf.',
    liveLabel: 'Heute im Einsatz',
    scopedLabel: 'Gemeinsam geplant',
    intents: [
      {
        key: 'book',
        label: 'Tisch reservieren',
        line: '„Ein Tisch für vier am Freitag, gegen acht?“',
        steps: [
          'Reservierungsbuch prüfen',
          'Echte Zeiten anbieten',
          'Allergene vermerken',
          'Per SMS bestätigen',
        ],
        outcome: 'Reservierung im Buch. Die Küche hat den Allergie-Hinweis bereits.',
      },
      {
        key: 'menu',
        label: 'Karte & Allergene',
        line: '„Ist das Risotto glutenfrei?“',
        steps: ['Mit Ihrer Karte abgleichen', 'In Ihren Worten antworten', 'Reservierung anbieten'],
        outcome: 'Beantwortet aus Ihrer echten Karte. Niemand wurde aus dem Service geholt.',
      },
      {
        key: 'hours',
        label: 'Zeiten & Anfahrt',
        line: '„Wann schließen Sie sonntags?“',
        steps: ['Aus Ihren Zeiten antworten', 'Ausnahmen berücksichtigen', 'Anfahrt per SMS'],
        outcome: 'SMS mit Adresse, Parkmöglichkeiten und Öffnungszeiten verschickt.',
      },
      {
        key: 'groups',
        label: 'Große Gruppen',
        line: '„Wir sind zwölf für einen Geburtstag — gibt es ein Menü?“',
        steps: ['Gruppengröße klären', 'Datum & Budget erfassen', 'Team briefen'],
        outcome: 'Ihr Team bekommt eine vorbereitete Anfrage statt eines kalten Rückrufs.',
      },
      {
        key: 'other',
        label: 'Alles andere',
        line: '„Ich habe gestern Abend meine Jacke bei Ihnen liegen lassen…“',
        steps: ['Erkennen, dass ein Mensch nötig ist', 'Zusammenfassen', 'Mit Kontext weiterleiten'],
        outcome: 'Ihr Team nimmt ab und weiß bereits, warum der Gast anruft.',
      },
      {
        key: 'order',
        label: 'Bestellung aufnehmen',
        line: '„Zwei große Pepperoni zum Abholen um sieben?“',
        steps: ['Artikel aufnehmen', 'Summe bestätigen', 'An die Küche senden'],
        outcome: 'Bestellung am Pass, der Gast weiß, wann sie fertig ist.',
        note: 'Benötigt ein Kassen- oder Küchensystem zum Eintragen — wird beim Onboarding gemeinsam geklärt.',
      },
    ],
  },

  steps: {
    heading: 'Vier Schritte. In 48 Stunden am Telefon.',
    items: [
      {
        t: 'Ein 15-Minuten-Gespräch',
        b: 'Wir lernen Ihre Öffnungszeiten, Ihre Karte, Ihre Reservierungsregeln und wie Sie mit Ihren Gästen sprechen.',
      },
      {
        t: 'Wir bauen Ihren Agenten',
        b: 'Stimme und Tonfall auf Ihr Restaurant abgestimmt, auf Deutsch und Englisch, wenn Sie beides brauchen.',
      },
      {
        t: 'Nummer verbinden',
        b: 'Sie behalten Ihre Rufnummer. Anrufe gehen an den Agenten, wenn niemand abnimmt — oder immer.',
      },
      {
        t: 'In 48 Stunden live',
        b: 'Er antwortet, reserviert und fasst nach, ab dem ersten Tag. In den ersten Wochen bleiben wir dran.',
      },
    ],
  },

  industries: {
    heading: 'Wenn Ihr Telefon klingelt, während Sie im Service sind, ist das hier für Sie.',
    items: [
      'Restaurants & Bistros',
      'Lieferdienste & Abholung',
      'Cafés & Bäckereien',
      'Eventlocations',
      'Hotelrestaurants',
      'Salons & Praxen',
    ],
  },

  pricing: {
    heading: 'Keine Überraschungen. Keine versteckten Kosten.',
    sub: 'Einmalige Einrichtung, danach eine monatliche Gebühr inklusive Ihrer Minuten. Die Preise für Sprache sind vorgeschlagen und noch nicht final.',
    currency: '€',
    perMonth: ' /Monat',
    setupSuffix: 'Einrichtung',
    mostChosen: 'Am häufigsten gewählt',
    plans: [
      {
        name: 'Essential',
        price: '249',
        setup: '1.195',
        mins: '500 Minuten',
        features: [
          'Jeder Anruf beantwortet, rund um die Uhr',
          'Reservierungen in Ihr Buch',
          'Fragen zu Karte & Allergenen',
        ],
      },
      {
        name: 'Professional',
        price: '459',
        setup: '2.195',
        mins: '1.200 Minuten',
        features: [
          'Alles aus Essential',
          'Gruppen & Events qualifiziert',
          'Warme Übergabe mit Kontext',
        ],
      },
      {
        name: 'Premium',
        price: '795',
        setup: '3.750',
        mins: '3.000 Minuten',
        features: [
          'Alles aus Professional',
          'Beide Sprachen, Ihr Tonfall',
          'Mehrere Standorte, ein Konto',
        ],
      },
    ],
  },

  proof: {
    eyebrow: 'Reserviert — echter Kundenbeleg',
    heading: 'Echte Restaurants. Echte Zahlen.',
    body: 'Reserviert für ein namentlich genanntes Restaurant: beantwortete Anrufe, gebuchte Gedecke und was sich für das Team verändert hat. Das ist die größte Lücke auf dieser Seite — ein echter Kunde, der sich zitieren lässt, wirkt mehr als jeder andere Abschnitt hier.',
  },

  channels: {
    eyebrow: 'Alle Kanäle',
    heading: 'Ein Agent. Überall, wo Ihre Gäste Sie erreichen.',
    body: 'Telefon, WhatsApp, Instagram, Messenger, Website-Chat, E-Mail und SMS — beantwortet vom selben Agenten, mit einem Gedächtnis für jeden Gast.',
    nodes: ['Telefonanrufe', 'WhatsApp', 'Instagram', 'Messenger', 'Website-Chat', 'E-Mail & SMS'],
    coreLabel: 'Ein Agent',
    liveLabel: 'Live',
  },

  faq: {
    heading: 'Noch Fragen?',
    headingSub: 'Fragen Sie den Agenten selbst.',
    body: 'Derselbe Agent, der Ihre Gäste bedient, beantwortet auch Ihre Fragen. Kein Formular, kein Warten.',
    askCta: 'Agenten fragen',
    askNote:
      'In der Live-Version öffnet dies den echten Agenten. Anzubinden an das bestehende GoHighLevel-Chat-Widget oder an den Sprach-Agenten für eine gesprochene Antwort.',
    items: [
      {
        q: 'Klingt er für meine Gäste wie ein Roboter?',
        a: 'Nein. Er wird auf den Tonfall Ihres Restaurants trainiert und antwortet in natürlicher Sprache, auf Deutsch oder Englisch. Die meisten Anrufer fragen gar nicht nach.',
      },
      {
        q: 'Was passiert, wenn er nicht weiterhelfen kann?',
        a: 'Er leitet an Ihr Team weiter — mit dem gesamten Gespräch bereits zusammengefasst, sodass niemand von vorn anfangen muss.',
      },
      {
        q: 'Wie lange dauert es, bis er Anrufe annimmt?',
        a: '48 Stunden. Wir richten Ihre Öffnungszeiten, Ihre Karte und Ihre Reservierungsregeln ein und behalten Ihre bestehende Rufnummer.',
      },
      {
        q: 'Muss ich mein Reservierungssystem wechseln?',
        a: 'Nein. Er trägt in das Buch ein, das Sie bereits nutzen. Welches das ist, klären wir beim Onboarding.',
      },
    ],
  },

  closing: {
    heading: 'Starten Sie noch heute mit Hala.',
    body: 'Fünfzehn Minuten. Wir rufen Ihre Nummer an, der Agent ist live, und Sie fragen ihn, was Sie wollen.',
    cta: 'Demo vereinbaren',
  },

  footer: {
    rights: '© 2026 Hala — ein',
    productSuffix: 'Produkt',
    links: ['Datenschutz', 'AGB', 'Impressum', 'info@khaashub.com'],
  },
};

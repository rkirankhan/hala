import type { HalaCopy } from './copy';
import { legalDe } from './legal';

/**
 * German copy — a rewrite, not a translation.
 *
 * Decisions baked in here, so they stay consistent if someone edits one string:
 *
 *  - Register is SIE throughout. Business owners are the buyer, and du would
 *    read as presumptuous to a large part of that market. If the brand ever
 *    moves to du, it has to move in every string at once.
 *  - Hala is named as the subject wherever a pronoun would otherwise be needed.
 *    German forces a gender choice — sie for the name, er for "der
 *    KI-Mitarbeiter" — and naming her sidesteps a decision the English never
 *    has to make.
 *  - Times are 24-hour (14:15, not 2:15 PM) and thousands use a dot (1.200).
 *  - Prices are quoted in euros. The numbers are carried over from the pound
 *    figures as a placeholder — a commercial decision, not a translation one,
 *    so confirm them before this page goes live.
 *
 * Written to be idiomatic rather than faithful, and still worth a native
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
      { label: 'Branchen', href: '#industries' },
      { label: 'Kanäle', href: '#channels' },
      { label: 'Preise', href: '#pricing' },
    ],
    cta: 'Demo vereinbaren',
    languageLabel: 'Sprache wechseln',
    languageNames: { en: 'Englisch', de: 'Deutsch', ar: 'Arabisch' },
  },

  hero: {
    badge: 'Ein KI-Mitarbeiter für Ihr Unternehmen',
    h1: 'Machen Sie aus jedem Gespräch einen Kunden',
    h1Accent: 'Kunden',
    sub: 'Jeder Anruf, jede Nachricht und jede Anfrage wird zur Chance. Hala antwortet beim ersten Klingeln, bucht Kunden ein und fasst bei denen nach, die sich nicht mehr melden — damit Ihrem Team kein Kunde entgeht.',
    ctaPrimary: 'Demo vereinbaren',
    ctaSecondary: 'Live anhören',
    callLabel: 'Antwortet gerade',
    messages: [
      { who: 'guest', t: 'Hallo — haben Sie am Donnerstagnachmittag noch etwas frei?' },
      { who: 'agent', t: 'Ich hätte Donnerstag 14:15 oder 16:30. Was passt Ihnen besser?' },
      { who: 'guest', t: '14:15, bitte. Kann ich vor Ort bezahlen?' },
    ],
    cards: [
      { label: 'Termin gebucht', value: 'Do · 14:15' },
      { label: 'Team informiert', value: 'Erinnerung geplant' },
    ],
  },

  stat: {
    line1: '1 Mitarbeiter.',
    line2: '6 Kanäle.',
    line3: 'Rund um die Uhr.',
    cards: [
      {
        k: 'Nie wieder Anrufbeantworter',
        v: 'Kunden erreichen beim ersten Klingeln ein echtes Gespräch — auch außerhalb Ihrer Öffnungszeiten.',
      },
      {
        k: 'Ein Gedächtnis, alle Kanäle',
        v: 'Wer gestern angerufen und heute geschrieben hat, ist derselbe Kunde — nicht zwei Fremde.',
      },
      {
        k: 'Ihr Team bleibt bei der Arbeit',
        v: 'Niemand unterbricht seine Arbeit, um ans Telefon zu gehen, und nichts wird doppelt notiert.',
      },
    ],
  },

  bands: {
    heading: 'Alles, was ein vielbeschäftigtes Unternehmen braucht. Nichts darüber hinaus.',
    voice: {
      eyebrow: 'Am Telefon',
      title: 'Hala geht ans Telefon wie Ihr bester Mitarbeiter.',
      body: 'Termine, Preise, Öffnungszeiten und knifflige Fragen — vollständig erledigt, auf Deutsch oder Englisch, ohne dass jemand seine Arbeit unterbrechen muss.',
      metaTop: 'Eingehend · 19:42',
      metaBottom: 'Termin eingetragen · Team informiert',
      messages: [
        'Haben Sie am Donnerstagnachmittag noch etwas frei?',
        'Ich hätte 14:15 oder 16:30. Was passt Ihnen besser?',
        '14:15, bitte. Kann ich vor Ort bezahlen?',
      ],
    },
    chat: {
      eyebrow: 'Im Posteingang',
      title: 'Hala antwortet, bevor woanders gebucht wird.',
      body: 'WhatsApp, Instagram und Website-Chat in Sekunden beantwortet, mit dem Buchungslink direkt im Chat — während Ihr Kunde noch überlegt.',
      metaTop: 'WhatsApp · 21:48',
      metaBottom: 'In 4 Sekunden geantwortet',
      messages: [
        'Haben Sie morgen offen? Ich bräuchte einen Termin.',
        'Wir öffnen um 9:00 — ich kann Sie für 9:30 eintragen.',
        'Ja, gerne',
      ],
    },
    automations: {
      eyebrow: 'Im Hintergrund',
      title: 'Das Nachfassen, zu dem nie jemand kommt.',
      body: 'Eine SMS innerhalb einer Minute nach jedem verpassten Anruf. Eine Erinnerung, wenn eine Anfrage liegen bleibt. Eine Bitte um Bewertung, solange der Besuch noch frisch ist.',
      metaTop: 'Verpasster Anruf · Freitag 19:42',
      metaBottom: '3 Sequenzen aktiv',
      rows: [
        ['Anruf verpasst', 'SMS in 60 Sek.', 'Buchungslink'],
        ['24 h keine Antwort', 'WhatsApp-Erinnerung', 'Neu buchen'],
      ],
    },
  },

  why: {
    eyebrow: 'Warum ein KI-Mitarbeiter',
    heading: 'Vier Gründe, warum das Telefon Sie kein Geld mehr kostet.',
    items: [
      {
        title: 'Hala lässt niemanden warten.',
        body: 'Jeder Anruf beim ersten Klingeln beantwortet — freitags um sieben, am Feiertag, um Mitternacht, wenn Sie geschlossen haben.',
      },
      {
        title: 'Hala kennt Ihr Unternehmen.',
        body: 'Ihre Öffnungszeiten, Ihre Leistungen, Ihre Preise, Ihre Regeln. Kein generischer Bot, der ein Skript abliest.',
      },
      {
        title: 'Hala schreibt in Ihre Systeme.',
        body: 'Termine landen in dem Kalender, den Ihr Team ohnehin nutzt. Niemand tippt etwas doppelt.',
      },
      {
        title: 'Hala arbeitet neben Ihrem Team.',
        body: 'Wenn ein Kunde einen Menschen braucht, übernimmt Ihr Team und weiß bereits, wer anruft und warum.',
      },
    ],
  },

  flow: {
    eyebrow: 'Von Anfang bis Ende',
    heading: 'Ein Gespräch. Vollständig erledigt.',
    sub: 'Was tatsächlich passiert, wenn ein Kunde Kontakt aufnimmt — derselbe Weg, ob per Anruf, Nachricht oder Formular.',
    stages: [
      {
        key: 'contact',
        title: 'Der Kunde meldet sich',
        body: 'Ein Anruf kurz vor Feierabend, eine Nachricht um Mitternacht, ein Formular am Sonntag.',
        chips: ['Telefon', 'WhatsApp', 'Instagram', 'Website-Chat', 'SMS', 'E-Mail'],
      },
      {
        key: 'understand',
        title: 'Hala nimmt an und klärt das Anliegen',
        body: 'Beim ersten Klingeln, in Ihrem Tonfall — und erkennt, wer schon einmal da war.',
        chips: ['Erkennt Stammkunden', 'Antwortet aus Ihren eigenen Informationen'],
      },
      {
        key: 'handle',
        title: 'Es wird erledigt',
        body: 'Was auch immer der Anlass war: Es ist abgeschlossen — nicht auf einem Zettel für später notiert.',
        chips: [],
      },
      {
        key: 'follow',
        title: 'Und es wird nachgefasst',
        body: 'Der Teil, für den nie jemand Zeit hat — jedes Mal erledigt.',
        chips: [
          'Bestätigung',
          'Erinnerung vorab',
          'Feedback danach',
          'Unzufrieden? Ihr Team erfährt es zuerst',
        ],
      },
    ],
    branches: [
      { label: 'Nimmt eine Bestellung auf', line: 'Bestätigt, an Küche oder Theke weitergeleitet, Bon gedruckt.' },
      { label: 'Bucht einen Termin', line: 'Echte Zeiten aus Ihrem Kalender, direkt in Ihr Buch eingetragen.' },
      { label: 'Beantwortet eine Frage', line: 'Öffnungszeiten, Preise oder Verfügbarkeit — mit Buchungslink in der Antwort.' },
    ],
    map: {
      columns: ['Jeder Kanal', 'Angenommen & verstanden', 'Erledigt', 'Nachgefasst'],
      contact: 'Kunde meldet sich',
      contactNote: 'Telefon, WhatsApp, Instagram, Web-Chat, E-Mail',
      answer: 'Hala',
      badge: 'Erkennt Stammkunden',
      follow: 'Nachfassen & Bewertungen',
      followNote: 'Bestätigungen, Erinnerungen, Bewertungsanfragen — und Kontakt halten',
    },
    footnote: 'Ihr Team hört nur von den Fällen, die einen Menschen brauchen.',
  },

  versus: {
    eyebrow: 'Die Alternativen',
    heading: 'Beim Telefon haben Sie derzeit drei schlechte Optionen.',
    options: [
      {
        title: 'Sie gehen selbst ran',
        points: [
          'Unterbrochen mitten in der Arbeit, mitten im Termin',
          'Werbeanrufe kosten Sie genauso viel Zeit wie echte',
          'Was klingelt, während Sie beschäftigt sind, geht trotzdem verloren',
        ],
      },
      {
        title: 'Es landet auf der Mailbox',
        points: [
          'Die meisten hinterlassen keine Nachricht',
          'Sie rufen stattdessen beim Nächsten auf Google an',
          'Bis Sie zurückrufen, ist woanders gebucht',
        ],
      },
      {
        title: 'Sie zahlen einen Telefonservice',
        points: [
          'Abrechnung nach Minuten, egal wer anruft',
          'Anrufer warten in der Schleife auf eine fremde Person',
          'Dort wird ein Skript gelesen — Ihre Preise kennt niemand',
        ],
      },
    ],
    answer: {
      title: 'Wenn Hala rangeht',
      points: [
        'Jeder Anruf beim ersten Klingeln, Tag und Nacht',
        'Kennt Ihre Zeiten, Leistungen, Preise und Regeln',
        'Bucht ein und trägt es in Ihre Systeme ein',
        'Übergibt an Ihr Team, sobald jemand einen Menschen braucht',
      ],
    },
  },

  integrations: {
    eyebrow: 'Verbindet sich mit',
    heading: 'Es schreibt in die Systeme, mit denen Sie ohnehin arbeiten.',
    sub: 'Termine, Aufträge und Kontakte landen dort, wo Ihr Team ohnehin nachsieht — niemand tippt etwas doppelt, niemand lernt ein neues System.',
    groups: [
      { key: 'calendars', label: 'Kalender', items: [{ key: 'gcal', name: 'Google Kalender' }, { key: 'outlook', name: 'Outlook' }, { key: 'calendly', name: 'Calendly' }] },
      { key: 'food', label: 'Restaurants & Lieferdienste', items: [{ key: 'opentable', name: 'OpenTable' }, { key: 'sevenrooms', name: 'SevenRooms' }, { key: 'resdiary', name: 'ResDiary' }] },
      { key: 'crm', label: 'CRM & Marketing', items: [{ key: 'ghl', name: 'GoHighLevel' }, { key: 'hubspot', name: 'HubSpot' }, { key: 'pipedrive', name: 'Pipedrive' }] },
      { key: 'messaging', label: 'Messaging', items: [{ key: 'whatsapp', name: 'WhatsApp Business' }, { key: 'instagram', name: 'Instagram' }, { key: 'messenger', name: 'Messenger' }] },
    ],
    note: 'Sie nutzen etwas anderes? Wir binden es beim Onboarding an.',
  },

  languages: {
    eyebrow: 'Sprache',
    heading: 'Für Ihren Markt gebaut, in Ihrer Sprache.',
    sub: 'Ihr Hala wird in einer Sprache eingerichtet und beherrscht sie richtig — kein englischer Bot mit vorgeschalteter Übersetzung.',
    items: [
      {
        name: 'Vereinigtes Königreich',
        native: 'English',
        line: 'Natürliches britisches Englisch, UK-Formate',
      },
      {
        name: 'Deutschland',
        native: 'Deutsch',
        line: 'Förmliches Sie, 24-Stunden-Zeiten, wie erwartet',
      },
    ],
    note: 'Englisch für Großbritannien, Deutsch für Deutschland — jeweils nativ aufgebaut.',
  },

  showcase: {
    eyebrow: 'Auf Ihre Branche zugeschnitten',
    heading: 'Ein Mitarbeiter. Jede Art von Unternehmen.',
    sub: 'Hala lernt Ihre Leistungen, Ihre Preise und Ihre Regeln. So klingt das in der Praxis.',
    handlesLabel: 'Was Hala hier übernimmt',
    items: [
      {
        key: 'restaurants',
        flow: [
          { label: 'Tisch reserviert', note: 'In Ihr Buch eingetragen, Allergien vermerkt', system: 'Reservierungsbuch · Küche informiert · SMS-Bestätigung' },
          { label: 'Bestellung aufgenommen', note: 'An die Küche geschickt, Bon gedruckt', system: 'Küchenbon · Beleg gedruckt · SMS' },
          { label: 'Frage beantwortet', note: 'Karte, Öffnungszeiten oder Parken — mit Buchungslink', system: 'Anfrage erfasst · Details gesendet' },
        ],
        label: 'Restaurants & Cafés',
        line: 'Ein Tisch für vier am Freitag, so gegen acht?',
        reply: 'Ich hätte 20:15 oder 20:45. Was passt Ihnen besser?',
        handles: ['Reservierungen', 'Karte & Allergene', 'Öffnungszeiten', 'Große Gruppen'],
        outcome: 'Reservierung im Buch, Allergie vermerkt, Küche bereits informiert.',
      },
      {
        key: 'takeaways',
        flow: [
          { label: 'Abholung gebucht', note: 'Abholzeit vereinbart', system: 'Zeitfenster erfasst · SMS-Bestätigung' },
          { label: 'Bestellung aufgenommen', note: 'Artikel und Summe bestätigt', system: 'Küchenbon · Beleg gedruckt' },
          { label: 'Frage beantwortet', note: 'Liefergebiet, Wartezeit oder Allergene', system: 'Anfrage erfasst · Details gesendet' },
        ],
        label: 'Lieferdienste & Abholung',
        line: 'Zwei große Pepperoni zum Abholen um sieben?',
        reply: 'Das macht 24,50 €, fertig um 19:00. Abholung oder Lieferung?',
        handles: ['Bestellungen & Abholung', 'Karte & Allergene', 'Liefergebiete', 'Wartezeiten'],
        outcome: 'Bestellung in der Küche, der Kunde weiß, wann sie fertig ist.',
      },
      {
        key: 'salons',
        flow: [
          { label: 'Termin gebucht', note: 'Beim gewünschten Stylisten', system: 'Stylisten-Kalender · Erinnerung gesetzt' },
          { label: 'Leistung kalkuliert', note: 'Aus Ihrer Preisliste', system: 'Angebot erfasst · Ihre Preisliste angewendet' },
          { label: 'Frage beantwortet', note: 'Öffnungszeiten, Produkte oder Allergietest', system: 'Anfrage erfasst · Details gesendet' },
        ],
        label: 'Salons & Praxen',
        line: 'Wäre Samstag noch etwas für Schnitt und Farbe frei?',
        reply: 'Samstag ist voll, aber ich hätte Freitag um 16:30 oder Sonntag um 11:00.',
        handles: ['Termine', 'Wunsch-Stylist', 'Preislisten', 'Erinnerungen gegen No-Shows'],
        outcome: 'Ein Stuhl belegt, der sonst leer geblieben wäre — mit Erinnerung am Vortag.',
      },
    ],
  },

  steps: {
    heading: 'Vier Schritte. In 48 Stunden am Telefon.',
    items: [
      {
        t: 'Ein 15-Minuten-Gespräch',
        b: 'Wir lernen Ihre Öffnungszeiten, Ihre Leistungen, Ihre Buchungsregeln und wie Sie mit Ihren Kunden sprechen.',
      },
      {
        t: 'Wir bauen Ihren Mitarbeiter',
        b: 'Stimme und Tonfall auf Ihr Unternehmen abgestimmt, auf Deutsch oder Englisch.',
      },
      {
        t: 'Nummer verbinden',
        b: 'Sie behalten Ihre Rufnummer. Anrufe gehen an Hala, wenn niemand abnimmt — oder immer.',
      },
      {
        t: 'In 48 Stunden live',
        b: 'Hala antwortet, bucht und fasst nach, ab dem ersten Tag. In den ersten Wochen bleiben wir dran.',
      },
    ],
  },

  pricing: {
    heading: 'Keine Überraschungen. Keine versteckten Kosten.',
    sub: 'Eine einmalige Einrichtungsgebühr, danach ein Monatsplan inklusive Ihrer KI-Minuten. Wird mehr verbraucht, gilt ein fester Minutenpreis — keine Überraschungen auf der Rechnung.',
    currency: '€',
    perMonth: ' /Monat',
    setupSuffix: 'Einrichtung',
    mostChosen: 'Am häufigsten gewählt',
    plans: [
      {
        name: 'Empfang',
        line: 'Niemand landet mehr auf der Mailbox.',
        price: '249',
        setup: '299',
        mins: '2.500 Minuten',
        overage: '0,20 € je Zusatzminute',
        features: [
          'Jeder Anruf beim ersten Klingeln beantwortet, rund um die Uhr',
          'Telefon, WhatsApp, Instagram, Messenger, Web-Chat, SMS und E-Mail',
          'Antworten aus Ihren Öffnungszeiten, Leistungen und Preisen',
          'Anfragen qualifiziert, bevor sie Ihr Team erreichen',
          'Warme Übergabe an eine Person, Kontext bereits erfasst',
          'Jede Eskalation im CRM protokolliert',
        ],
      },
      {
        name: 'Vollservice',
        line: 'Das Gespräch wird zu Ende gebracht, nicht weitergereicht.',
        price: '449',
        setup: '499',
        mins: '5.000 Minuten',
        overage: '0,18 € je Zusatzminute',
        features: [
          'Alles aus Empfang',
          'Buchung passend zu Ihrer Branche — Tische, Termine oder Bestellungen',
          'Direkt in den Kalender und die Systeme geschrieben, die Sie schon nutzen',
          'Bestätigung und Erinnerung per SMS — weniger Nichterscheinen',
          'Nachfassen nach dem Termin, jedes Mal',
          'Stammkunden werden erkannt und nicht zweimal gefragt',
        ],
      },
      {
        name: 'Wachstumspartner',
        line: 'Die Arbeit, für die sonst nie Zeit bleibt — täglich erledigt.',
        price: '749',
        setup: '799',
        mins: '10.000 Minuten',
        overage: '0,15 € je Zusatzminute',
        features: [
          'Alles aus Vollservice',
          'Bewertungsanfrage an jeden Kunden — von unzufriedenen erfahren Sie noch am selben Abend, nicht später bei Google',
          'Lead-Scoring: die Anfragen, die einen Rückruf lohnen, stehen oben',
          'Eigenes Dashboard: beantwortete Anrufe, gebuchte Termine, deren Wert',
          'Mehrere Standorte, ein Konto',
          'Individuelle Systemintegrationen auf Anfrage',
        ],
      },
    ],
  },

  proof: {
    eyebrow: 'Reserviert — echter Kundenbeleg',
    heading: 'Echte Unternehmen. Echte Zahlen.',
    body: 'Reserviert für einen namentlich genannten Kunden: beantwortete Anrufe, gebuchte Termine und was sich für das Team verändert hat. Das ist die größte Lücke auf dieser Seite — ein echter Kunde, der sich zitieren lässt, wirkt mehr als jeder andere Abschnitt hier.',
  },

  channels: {
    eyebrow: 'Alle Kanäle',
    heading: 'Ein Mitarbeiter. Überall, wo Ihre Kunden Sie erreichen.',
    body: 'Telefon, WhatsApp, Instagram, Messenger, Website-Chat, E-Mail und SMS — alles von Hala beantwortet, mit einem Gedächtnis für jeden Kunden.',
    nodes: ['Telefonanrufe', 'WhatsApp', 'Instagram', 'Messenger', 'Website-Chat', 'E-Mail & SMS'],
    coreLabel: 'Ein Mitarbeiter',
    liveLabel: 'Live',
  },

  faq: {
    heading: 'Fragen, die uns',
    headingSub: 'vor jedem Termin erreichen.',
    body: 'Was Inhaber wissen wollen, bevor sie ihre Anrufe einer KI übergeben.',
    items: [
      {
        q: 'Klingt Hala für meine Kunden wie ein Roboter?',
        a: 'Nein. Hala wird auf Ihren Tonfall trainiert und antwortet in natürlicher Sprache, auf Deutsch oder Englisch. Die meisten Anrufer fragen gar nicht nach.',
      },
      {
        q: 'Ersetzt das meine Mitarbeiter?',
        a: 'Nein. Hala nimmt ihnen die wiederkehrenden Gespräche ab — die Anrufe kurz vor Feierabend, die immer gleichen fünf Fragen, das Nachfassen, zu dem niemand kommt — damit sie sich auf die Arbeit konzentrieren können, die einen Menschen braucht.',
      },
      {
        q: 'Meine Branche steht nicht auf Ihrer Liste. Funktioniert das trotzdem?',
        a: 'Mit hoher Wahrscheinlichkeit ja. Hala wird auf Ihre Leistungen, Preise und Regeln eingerichtet, nicht auf eine feste Branchenvorlage — die Beispiele oben sind lediglich die Bereiche, für die wir bisher am meisten gebaut haben.',
      },
      {
        q: 'Muss ich mein Buchungssystem wechseln?',
        a: 'Nein. Hala trägt in den Kalender ein, den Sie bereits nutzen. Welcher das ist, klären wir beim Onboarding.',
      },
    ],
  },

  closing: {
    heading: 'Starten Sie noch heute mit Hala.',
    body: 'Fünfzehn Minuten. Wir rufen Ihre Nummer an, Hala ist live, und Sie fragen sie, was Sie wollen.',
    cta: 'Demo vereinbaren',
  },

  footer: {
    rights: '© 2026 Hala — ein',
    productSuffix: 'Produkt',
    links: [
      { label: 'Datenschutz', to: legalDe.privacy.slug },
      { label: 'Nutzungsbedingungen', to: legalDe.terms.slug },
      { label: 'Impressum', to: legalDe.impressum.slug },
      { label: 'info@khaashub.com', to: 'mailto:info@khaashub.com' },
    ],
  },

  legal: legalDe,
};

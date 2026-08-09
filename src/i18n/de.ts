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
    sub: 'Jeder Anruf, jede Nachricht und jede Anfrage wird zur Chance. Hala antwortet beim ersten Klingeln, bucht Kunden ein und fasst bei denen nach, die sich nicht mehr melden — damit Ihrem Team kein Kunde entgeht.',
    ctaPrimary: 'Demo vereinbaren',
    ctaSecondary: 'Live anhören',
    callLabel: 'Laufendes Gespräch',
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
    footnote: 'Ihr Team hört nur von den Fällen, die einen Menschen brauchen.',
  },

  showcase: {
    eyebrow: 'Auf Ihre Branche zugeschnitten',
    heading: 'Ein Mitarbeiter. Jede Art von Unternehmen.',
    sub: 'Hala lernt Ihre Leistungen, Ihre Preise und Ihre Regeln. So klingt das in der Praxis.',
    handlesLabel: 'Was Hala hier übernimmt',
    items: [
      {
        key: 'restaurants',
        label: 'Restaurants & Lieferdienste',
        line: 'Ein Tisch für vier am Freitag, so gegen acht?',
        reply: 'Ich hätte 20:15 oder 20:45. Was passt Ihnen besser?',
        handles: ['Reservierungen', 'Karte & Allergene', 'Öffnungszeiten', 'Große Gruppen'],
        outcome: 'Reservierung im Buch, Allergie vermerkt, Küche bereits informiert.',
      },
      {
        key: 'clinics',
        label: 'Kosmetikkliniken',
        line: 'Was kostet eine Beratung für Filler?',
        reply: 'Die Beratung kostet 50 €, anrechenbar auf die Behandlung. Ich hätte Donnerstag um 14:15.',
        handles: [
          'Behandlungspreise',
          'Beratungstermine',
          'Fragen zur Nachsorge',
          'Anzahlungen & Erinnerungen',
        ],
        outcome: 'Beratung gebucht, Anzahlung erhalten, Erinnerung bereits geplant.',
      },
      {
        key: 'property',
        label: 'Immobilienmakler',
        line: 'Ist die Wohnung in der Mühlenstraße noch frei?',
        reply: 'Ja — Besichtigungen sind Donnerstag und Samstag. Soll ich Sie eintragen?',
        handles: [
          'Besichtigungsanfragen',
          'Fragen zum Objekt',
          'Interessenten qualifizieren',
          'Rückrufe für Eigentümer',
        ],
        outcome: 'Besichtigung gebucht und der Interessent qualifiziert, bevor jemand zum Hörer greift.',
      },
      {
        key: 'salons',
        label: 'Salons & Barbiere',
        line: 'Wäre Samstag noch etwas für Schnitt und Farbe frei?',
        reply: 'Samstag ist voll, aber ich hätte Freitag um 16:30 oder Sonntag um 11:00.',
        handles: ['Termine', 'Wunsch-Stylist', 'Preislisten', 'Erinnerungen gegen No-Shows'],
        outcome: 'Ein Stuhl belegt, der sonst leer geblieben wäre — mit Erinnerung am Vortag.',
      },
      {
        key: 'trades',
        label: 'Handwerk & Haustechnik',
        line: 'Die Heizung ist undicht — kann heute noch jemand kommen?',
        reply: 'Ich kann Ihnen heute zwischen 14 und 16 Uhr einen Techniker schicken. Wie ist die Postleitzahl?',
        handles: [
          'Notfalleinsätze',
          'Angebotsanfragen',
          'Terminplanung',
          'Rückruf-SMS bei verpassten Anrufen',
        ],
        outcome: 'Auftrag gebucht, Adresse und Fehler erfasst — während Sie unter der Spüle lagen.',
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
        b: 'Stimme und Tonfall auf Ihr Unternehmen abgestimmt, auf Deutsch und Englisch, wenn Sie beides brauchen.',
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
    sub: 'Einmalige Einrichtung, danach eine monatliche Gebühr inklusive Ihrer Minuten. Die Preise sind vorgeschlagen und noch nicht final.',
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
          'Termine in Ihren Kalender',
          'Antworten aus Ihren eigenen Informationen',
        ],
      },
      {
        name: 'Professional',
        price: '459',
        setup: '2.195',
        mins: '1.200 Minuten',
        features: [
          'Alles aus Essential',
          'Anfragen qualifiziert und weitergeleitet',
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
    heading: 'Noch Fragen?',
    headingSub: 'Fragen Sie Hala selbst.',
    body: 'Hala beantwortet Ihre Fragen genauso wie die Ihrer Kunden. Kein Formular, kein Warten.',
    askCta: 'Hala fragen',
    askNote:
      'In der Live-Version öffnet dies den echten Agenten. Anzubinden an das bestehende GoHighLevel-Chat-Widget oder an den Sprach-Agenten für eine gesprochene Antwort.',
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

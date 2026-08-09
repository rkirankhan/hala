import type { LegalSet } from './copy';

/**
 * Legal page content, kept out of copy.ts purely for file size.
 *
 * IMPORTANT — these are drafts, not legal advice. Two things need a human
 * before they go live:
 *
 *  1. Every [[PLACEHOLDER]] must be filled with real company details. The
 *     renderer highlights them in amber precisely so an unfilled one cannot be
 *     published unnoticed.
 *  2. A German Impressum and Datenschutzerklärung carry real liability — the
 *     Abmahnung industry exists specifically to profit from bad ones. Have
 *     these reviewed by someone qualified in German law before launch.
 *
 * The German versions are not translations of the English. An Impressum has a
 * statutory shape under § 5 DDG and § 18 MStV, so that page is written to the
 * German requirement and the English one mirrors it for readers who need it.
 *
 * Deliberately omitted: the EU Online Dispute Resolution clause. The ODR
 * platform was shut down in July 2025, so the boilerplate link most templates
 * still carry now points at nothing. Verify before adding it back.
 */

export const legalEn: LegalSet = {
  backLabel: 'Back to Hala',
  updatedLabel: 'Last updated',
  updatedDate: '9 August 2026',

  privacy: {
    slug: '/privacy',
    title: 'Privacy Policy',
    intro:
      'This policy explains what happens to your information when you visit this website. It covers this site only — if you become a Hala customer, how we handle your business’s data is set out in your service agreement.',
    sections: [
      {
        h: 'Who we are',
        body: [
          'Hala is a product of Khaas Hub Ltd, registered at 5th Floor, 167-169 Great Portland Street, London W1W 5PF. We are the data controller for information collected through this website.',
          'You can reach us at info@khaashub.com.',
        ],
      },
      {
        h: 'What this site collects',
        body: [
          'This is a marketing website. We do not ask you for personal information, and there are no forms, logins or accounts on it.',
          'Our hosting provider records standard server logs for every request: your IP address, browser type, the page requested and the time. These are used to serve the site, diagnose faults and protect against abuse. We do not use them to identify individuals.',
        ],
      },
      {
        h: 'Cookies',
        body: [
          'This site sets no cookies and runs no analytics, advertising or tracking scripts.',
          'Your language choice is part of the web address — /de rather than a stored setting — so nothing is written to your device to remember it. That is why you have not been shown a cookie banner: there is nothing to consent to.',
        ],
      },
      {
        h: 'Hosting',
        body: [
          'This site is hosted by Vercel Inc., a company based in the United States. Requests are served from the location nearest to you, which may mean your IP address is processed outside the UK and EEA. Vercel offers Standard Contractual Clauses for these transfers.',
          '[[CONFIRM: data processing agreement signed with Vercel]]',
        ],
      },
      {
        h: 'Fonts',
        body: [
          'This site currently loads its typefaces from Google Fonts. That means your IP address is transmitted to Google when the page loads.',
          '[[DECISION NEEDED: self-host the fonts to remove this transfer entirely — see the note in the project README]]',
        ],
      },
      {
        h: 'Your rights',
        body: [
          'You have the right to ask what personal data we hold about you, to have it corrected or erased, to restrict or object to how we use it, and to receive a copy of it.',
          'To exercise any of these, email info@khaashub.com. If you are not satisfied with our response, you can complain to the Information Commissioner’s Office in the UK, or to the data protection authority in your country if you are in the EEA.',
        ],
      },
      {
        h: 'How long we keep things',
        body: ['Server logs are retained for [[RETENTION PERIOD]] and then deleted.'],
      },
      {
        h: 'Changes to this policy',
        body: [
          'If this policy changes we will update this page and the date at the top of it. Material changes will be made obvious rather than slipped in quietly.',
        ],
      },
    ],
  },

  terms: {
    slug: '/terms',
    title: 'Website Terms',
    intro:
      'These terms govern your use of this website. They are not the terms of a Hala subscription — if you become a customer, a separate service agreement covers what we provide, what it costs and how your data is handled.',
    sections: [
      {
        h: 'Using this site',
        body: [
          'You are welcome to read, share and link to anything here.',
          'Please do not attempt to disrupt the site, gain unauthorised access to it, or extract its content by automated means for a competing service.',
        ],
      },
      {
        h: 'Our content',
        body: [
          'The text, design, images and code on this site belong to Khaas Hub Ltd unless stated otherwise. Hala and Khaas Hub are our trademarks.',
        ],
      },
      {
        h: 'Information on this site',
        body: [
          'We describe what Hala does as accurately as we can, but capabilities, timings and prices may change as the product develops.',
          'Any prices shown are indicative and do not constitute an offer. Nothing on this website forms a contract — a Hala service only begins under a signed agreement.',
        ],
      },
      {
        h: 'Links to other sites',
        body: [
          'Where we link elsewhere, we do so for convenience. We do not control those sites and are not responsible for their content or their privacy practices.',
        ],
      },
      {
        h: 'Availability and liability',
        body: [
          'This website is provided as it is. We do not guarantee it will always be available or error-free.',
          'To the extent the law allows, we are not liable for loss arising from your use of this website. Nothing here excludes liability for death or personal injury caused by negligence, or for fraud.',
        ],
      },
      {
        h: 'Changes',
        body: ['We may update these terms. The current version is always the one on this page.'],
      },
      {
        h: 'Governing law',
        body: [
          'These terms are governed by the laws of England and Wales, and disputes fall to the courts of England and Wales.',
        ],
      },
    ],
  },

  impressum: {
    slug: '/impressum',
    title: 'Legal Notice',
    intro:
      'German law requires an Impressum — a legal notice identifying who operates a website. This is the English rendering; the German version is the authoritative one.',
    sections: [
      {
        h: 'Operator',
        body: [
          'Khaas Hub Ltd',
          '5th Floor, 167-169 Great Portland Street',
          'London W1W 5PF, United Kingdom',
        ],
      },
      {
        h: 'Represented by',
        body: ['[[NAME OF DIRECTOR / OWNER]]'],
      },
      {
        h: 'Contact',
        body: ['Telephone: [[PHONE NUMBER]]', 'Email: info@khaashub.com'],
      },
      {
        h: 'Registration',
        body: [
          'Registered at Companies House, England and Wales',
          'Company number: 16721132',
          'VAT number: [[UK VAT NUMBER, or “not VAT registered”]]',
        ],
      },
      {
        h: 'Responsible for content',
        body: ['[[NAME OF DIRECTOR]]', '5th Floor, 167-169 Great Portland Street, London W1W 5PF'],
      },
      {
        h: 'Consumer dispute resolution',
        body: [
          'We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.',
        ],
      },
    ],
  },
};

export const legalDe: LegalSet = {
  backLabel: 'Zurück zu Hala',
  updatedLabel: 'Zuletzt aktualisiert',
  updatedDate: '9. August 2026',

  privacy: {
    slug: '/de/datenschutz',
    title: 'Datenschutzerklärung',
    intro:
      'Diese Erklärung beschreibt, was mit Ihren Daten geschieht, wenn Sie diese Website besuchen. Sie gilt ausschließlich für diese Website — wenn Sie Hala-Kunde werden, regelt Ihr Servicevertrag, wie wir die Daten Ihres Unternehmens verarbeiten.',
    sections: [
      {
        h: 'Verantwortlicher',
        body: [
          'Hala ist ein Produkt von Khaas Hub Ltd, 5th Floor, 167-169 Great Portland Street, London W1W 5PF. Wir sind Verantwortlicher im Sinne der DSGVO für die über diese Website erhobenen Daten.',
          'Sie erreichen uns unter info@khaashub.com.',
        ],
      },
      {
        h: 'Welche Daten diese Website erhebt',
        body: [
          'Dies ist eine reine Informationswebsite. Wir fragen keine personenbezogenen Daten ab; es gibt keine Formulare, Logins oder Benutzerkonten.',
          'Unser Hoster speichert bei jedem Aufruf technisch notwendige Server-Logfiles: IP-Adresse, Browsertyp, aufgerufene Seite und Zeitpunkt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO — unser berechtigtes Interesse am sicheren und störungsfreien Betrieb der Website.',
        ],
      },
      {
        h: 'Cookies',
        body: [
          'Diese Website setzt keine Cookies und verwendet keine Analyse-, Werbe- oder Tracking-Dienste.',
          'Ihre Sprachwahl ist Teil der Adresse — /de statt einer gespeicherten Einstellung — es wird also nichts auf Ihrem Gerät abgelegt. Deshalb sehen Sie auch kein Cookie-Banner: Es gibt nichts einzuwilligen.',
        ],
      },
      {
        h: 'Hosting',
        body: [
          'Diese Website wird von der Vercel Inc. mit Sitz in den USA gehostet. Die Auslieferung erfolgt über den nächstgelegenen Standort, wodurch Ihre IP-Adresse auch außerhalb der EU verarbeitet werden kann. Vercel stellt hierfür Standardvertragsklauseln bereit.',
          '[[PRÜFEN: Auftragsverarbeitungsvertrag mit Vercel abgeschlossen]]',
        ],
      },
      {
        h: 'Schriftarten',
        body: [
          'Diese Website lädt ihre Schriftarten derzeit von Google Fonts. Dabei wird Ihre IP-Adresse an Google übermittelt.',
          '[[ENTSCHEIDUNG ERFORDERLICH: Schriften lokal einbinden, um diese Übermittlung vollständig zu vermeiden]]',
        ],
      },
      {
        h: 'Ihre Rechte',
        body: [
          'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht, der Verarbeitung zu widersprechen.',
          'Wenden Sie sich dafür an info@khaashub.com. Unabhängig davon steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.',
        ],
      },
      {
        h: 'Speicherdauer',
        body: ['Server-Logfiles werden nach [[SPEICHERDAUER]] gelöscht.'],
      },
      {
        h: 'Änderungen dieser Erklärung',
        body: [
          'Bei Änderungen aktualisieren wir diese Seite und das Datum oben. Wesentliche Änderungen weisen wir deutlich aus.',
        ],
      },
    ],
  },

  terms: {
    slug: '/de/agb',
    title: 'Nutzungsbedingungen',
    intro:
      'Diese Bedingungen gelten für die Nutzung dieser Website. Sie sind nicht die AGB eines Hala-Vertrags — für Kunden gilt eine gesonderte Vereinbarung über Leistung, Preise und Datenverarbeitung.',
    sections: [
      {
        h: 'Nutzung dieser Website',
        body: [
          'Sie dürfen die Inhalte dieser Website lesen, teilen und verlinken.',
          'Nicht gestattet sind Versuche, den Betrieb zu stören, sich unbefugt Zugang zu verschaffen oder Inhalte automatisiert für einen konkurrierenden Dienst auszulesen.',
        ],
      },
      {
        h: 'Inhalte und Rechte',
        body: [
          'Texte, Gestaltung, Bilder und Quellcode dieser Website stehen, soweit nicht anders angegeben, im Eigentum von Khaas Hub Ltd. Hala und Khaas Hub sind unsere Marken.',
        ],
      },
      {
        h: 'Angaben auf dieser Website',
        body: [
          'Wir beschreiben Hala so genau wie möglich. Funktionsumfang, Zeitangaben und Preise können sich im Zuge der Produktentwicklung ändern.',
          'Angegebene Preise sind unverbindlich und stellen kein Angebot dar. Durch diese Website kommt kein Vertrag zustande — eine Leistung beginnt erst mit einer unterzeichneten Vereinbarung.',
        ],
      },
      {
        h: 'Externe Links',
        body: [
          'Für verlinkte externe Websites sind ausschließlich deren Betreiber verantwortlich. Auf deren Inhalte und Datenschutzpraxis haben wir keinen Einfluss.',
        ],
      },
      {
        h: 'Verfügbarkeit und Haftung',
        body: [
          'Diese Website wird ohne Zusicherung ständiger Verfügbarkeit oder Fehlerfreiheit bereitgestellt.',
          'Die Haftung für Schäden aus der Nutzung dieser Website ist im gesetzlich zulässigen Rahmen ausgeschlossen. Unberührt bleibt die Haftung für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.',
        ],
      },
      {
        h: 'Änderungen',
        body: ['Wir können diese Bedingungen anpassen. Maßgeblich ist stets die hier veröffentlichte Fassung.'],
      },
      {
        h: 'Anwendbares Recht',
        body: ['Es gilt das Recht von England und Wales. Gerichtsstand ist England und Wales.'],
      },
    ],
  },

  impressum: {
    slug: '/de/impressum',
    title: 'Impressum',
    intro: 'Angaben gemäß § 5 DDG.',
    sections: [
      {
        h: 'Anbieter',
        body: ['Khaas Hub Ltd', '5th Floor, 167-169 Great Portland Street', 'London W1W 5PF, Vereinigtes Königreich'],
      },
      {
        h: 'Vertreten durch',
        body: ['[[NAME DER GESCHÄFTSFÜHRUNG / INHABER]]'],
      },
      {
        h: 'Kontakt',
        body: ['Telefon: [[TELEFONNUMMER]]', 'E-Mail: info@khaashub.com'],
      },
      {
        h: 'Registereintrag',
        body: [
          'Register: Companies House, England and Wales',
          'Registernummer: 16721132',
          'Umsatzsteuer-Identifikationsnummer: [[USt-IdNr. bei Registrierung in der EU, sonst „nicht in Deutschland umsatzsteuerlich registriert“]]',
        ],
      },
      {
        h: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
        body: ['[[NAME DER GESCHÄFTSFÜHRUNG]]', '5th Floor, 167-169 Great Portland Street, London W1W 5PF'],
      },
      {
        h: 'Verbraucherstreitbeilegung',
        body: [
          'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        ],
      },
    ],
  },
};

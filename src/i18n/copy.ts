/**
 * Every user-visible string on the Hala page, in one place per language.
 *
 * Deliberately NOT typed with `as const`. Typing an English source that way
 * makes each string its own literal type, so a translation can never satisfy
 * it — the mistake that left 369 type errors in the agency site's German file.
 * Here the shape is declared once with plain `string`, and both languages check
 * against it: a missing or misspelled key is a build error, a translated value
 * is not.
 *
 * POSITIONING: the spine of this page is industry-neutral — customers,
 * enquiries, appointments. Anything sector-specific belongs in `showcase`,
 * which is the one section that speaks a given trade's language. Adding an
 * industry should never require touching the rest of the copy.
 */

import { legalEn } from './legal';

export interface Message {
  who: 'guest' | 'agent';
  t: string;
}

/** One legal document. `slug` is the route it lives at, per language. */
export interface LegalDoc {
  slug: string;
  title: string;
  intro: string;
  sections: { h: string; body: string[] }[];
}

export interface LegalSet {
  backLabel: string;
  updatedLabel: string;
  updatedDate: string;
  privacy: LegalDoc;
  terms: LegalDoc;
  impressum: LegalDoc;
}

export interface HalaCopy {
  meta: { title: string; description: string };

  nav: {
    byline: string;
    links: { label: string; href: string }[];
    cta: string;
    /** Language menu. Names are localised, so the German page offers
     *  "Englisch / Deutsch / Arabisch" rather than English words. */
    languageLabel: string;
    languageNames: { en: string; de: string; ar: string };
  };

  hero: {
    badge: string;
    h1: string;
    /**
     * The word inside `h1` to set in the accent colour. Kept as a substring
     * rather than splitting the headline into parts, so a translator can move
     * the emphasis to wherever it falls naturally in their language.
     */
    h1Accent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    callLabel: string;
    messages: Message[];
    cards: { label: string; value: string }[];
  };

  stat: {
    line1: string;
    line2: string;
    line3: string;
    cards: { k: string; v: string }[];
  };

  bands: {
    heading: string;
    voice: BandCopy;
    chat: BandCopy;
    automations: Omit<BandCopy, 'messages'> & { rows: string[][] };
  };

  why: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };

  /**
   * The end-to-end journey: one entry point, three possible intents, one shared
   * follow-up tail.
   *
   * This is the section that answers "what actually happens". The capability
   * bands never quite do, because three bands read as three separate products
   * rather than one connected system — and the connection is the product.
   *
   * The three branches are deliberately generic (order / booking / question).
   * They are the same three for a restaurant, a clinic and a plumber; only the
   * words inside a sector's example change, and those live in `showcase`.
   */
  flow: {
    eyebrow: string;
    heading: string;
    sub: string;
    stages: { key: string; title: string; body: string; chips: string[] }[];
    branches: { label: string; line: string }[];
    /** Short labels for the diagram. Node tiles cannot carry a full sentence. */
    map: {
      /** Stage headings above the diagram's columns. Wide layout only. */
      columns: string[];
      contact: string;
      /** Reinforces the icon row on the entry node for anyone not reading it. */
      contactNote: string;
      answer: string;
      badge: string;
      follow: string;
      followNote: string;
    };
    footnote: string;
  };

  /**
   * The alternatives a buyer is actually choosing between. Competitors lead with
   * outcome claims; this argues against the three things an owner is doing today,
   * which works without any customer numbers to quote.
   */
  versus: {
    eyebrow: string;
    heading: string;
    options: { title: string; points: string[] }[];
    answer: { title: string; points: string[] };
  };

  /** Named systems. "The calendar you already use" reads as no integration. */
  integrations: {
    eyebrow: string;
    heading: string;
    sub: string;
    /** `key` maps to an icon and is never translated. */
    groups: { key: string; label: string; items: { key: string; name: string }[] }[];
    note: string;
  };

  /** Three languages is the one thing no competitor offers. */
  languages: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: { name: string; native: string; line: string }[];
    note: string;
  };

  /** The one sector-specific section. Everything else stays neutral. */
  showcase: {
    eyebrow: string;
    heading: string;
    sub: string;
    handlesLabel: string;
    items: {
      /** Stable key — the component maps it to an icon. Never translated. */
      key: string;
      label: string;
      line: string;
      reply: string;
      handles: string[];
      outcome: string;
      /**
       * The three outcome nodes on the flow map, in this sector's words.
       * `system` is what lands in the business's own tools — the part an owner
       * cares about most, and the part a chat transcript never shows.
       */
      flow: { label: string; note: string; system: string }[];
    }[];
  };

  steps: {
    heading: string;
    items: { t: string; b: string }[];
  };

  pricing: {
    heading: string;
    sub: string;
    /** Currency symbol, so the German page can quote euros rather than pounds. */
    currency: string;
    perMonth: string;
    setupSuffix: string;
    mostChosen: string;
    plans: {
      name: string; price: string; setup: string; mins: string;
      /** Per-minute rate once the included minutes run out. */
      overage: string;
      features: string[];
    }[];
  };

  proof: {
    eyebrow: string;
    heading: string;
    body: string;
  };

  channels: {
    eyebrow: string;
    heading: string;
    body: string;
    nodes: string[];
    coreLabel: string;
    liveLabel: string;
  };

  faq: {
    heading: string;
    headingSub: string;
    body: string;
    askCta: string;
    /** Placeholder shown until the button is wired to the live agent. */
    askNote: string;
    items: { q: string; a: string }[];
  };

  closing: {
    heading: string;
    body: string;
    cta: string;
  };

  footer: {
    rights: string;
    productSuffix: string;
    /** `to` is an in-app path, or a mailto:/https: URL for external links. */
    links: { label: string; to: string }[];
  };

  legal: LegalSet;
}

interface BandCopy {
  eyebrow: string;
  title: string;
  body: string;
  metaTop: string;
  metaBottom: string;
  messages: string[];
}

export const en: HalaCopy = {
  meta: {
    /* Keep in step with index.html — that file carries these as the static
       defaults for crawlers that do not run JavaScript, and useHalaMeta
       overwrites them at runtime. If they drift, the two tell different stories. */
    title: 'Hala | AI Employee for customer conversations',
    description:
      'Hala answers every call, message and enquiry on the first ring, books customers in, follows up, and hands over to your team when someone needs a person.',
  },

  nav: {
    byline: 'by Khaas Hub',
    links: [
      { label: 'Why', href: '#why' },
      { label: 'Industries', href: '#industries' },
      { label: 'Channels', href: '#channels' },
      { label: 'Pricing', href: '#pricing' },
    ],
    cta: 'Book a demo',
    languageLabel: 'Switch language',
    languageNames: { en: 'English', de: 'German', ar: 'Arabic' },
  },

  hero: {
    badge: 'An AI Employee for your business',
    h1: 'Turn Every Conversation Into a Lead',
    h1Accent: 'Lead',
    sub: 'Every call, message and enquiry becomes an opportunity. Hala answers on the first ring, books customers in, and follows up with the ones who go quiet — so your team never misses the chance to connect.',
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'Hear it answer',
    callLabel: 'Call in progress',
    messages: [
      { who: 'guest', t: 'Hi — do you have anything Thursday afternoon?' },
      { who: 'agent', t: 'I have 2:15 or 4:30 on Thursday. Which suits you better?' },
      { who: 'guest', t: '2:15 please. Can I pay on the day?' },
    ],
    cards: [
      { label: 'Appointment booked', value: 'Thu · 2:15 PM' },
      { label: 'Team notified', value: 'Reminder scheduled' },
    ],
  },

  stat: {
    line1: '1 employee.',
    line2: '6 channels.',
    line3: 'Every hour of the day.',
    cards: [
      {
        k: 'Never the answerphone',
        v: 'Customers reach a real conversation on the first ring, including the hours you are closed.',
      },
      {
        k: 'One memory, every channel',
        v: 'Someone who called yesterday and messages today is the same customer, not two strangers.',
      },
      {
        k: 'Your team stays on the job',
        v: 'Nobody stops what they are doing to answer a phone, and nothing is written down twice.',
      },
    ],
  },

  bands: {
    heading: 'Everything a busy business needs. Nothing it doesn’t.',
    voice: {
      eyebrow: 'On the phone',
      title: 'It answers the phone like your best team member would.',
      body: 'Bookings, prices, opening hours and awkward questions — handled to the end, in English or German, without pulling anyone off the job.',
      metaTop: 'Incoming · 19:42',
      metaBottom: 'Booking written · team notified',
      messages: [
        'Do you have anything Thursday afternoon?',
        'I have 2:15 or 4:30. Which suits you better?',
        '2:15 please. Can I pay on the day?',
      ],
    },
    chat: {
      eyebrow: 'In the inbox',
      title: 'It replies before they go somewhere else.',
      body: 'WhatsApp, Instagram and website chat answered in seconds, with the booking link in the thread — while your customer is still deciding.',
      metaTop: 'WhatsApp · 21:48',
      metaBottom: 'Replied in 4 seconds',
      messages: [
        'Are you open tomorrow? Need an appointment.',
        'We open at 9:00 — I can book you in for 9:30.',
        'Yes please',
      ],
    },
    automations: {
      eyebrow: 'In the background',
      title: 'The follow-up nobody ever gets round to.',
      body: 'A text back within a minute of every missed call. A nudge when an enquiry goes quiet. A review request while the visit is still fresh.',
      metaTop: 'Missed call · Friday 19:42',
      metaBottom: '3 sequences running',
      rows: [
        ['Call missed', 'Text within 60s', 'Booking link'],
        ['No reply 24h', 'WhatsApp nudge', 'Rebook'],
      ],
    },
  },

  why: {
    eyebrow: 'Why an AI Employee',
    heading: 'Four reasons the phone stops costing you money.',
    items: [
      {
        title: 'It never puts anyone on hold.',
        body: 'Every call answered on the first ring — at seven on a Friday, on a bank holiday, at midnight when you are closed.',
      },
      {
        title: 'It knows your business.',
        body: 'Your hours, your services, your prices, your policies. Not a generic bot reading a script.',
      },
      {
        title: 'It writes to your systems.',
        body: 'Bookings land in the calendar your team already uses. Nobody retypes anything.',
      },
      {
        title: 'It works alongside your team.',
        body: 'When a customer needs a person, your team picks up already knowing who is calling and why.',
      },
    ],
  },

  flow: {
    eyebrow: 'End to end',
    heading: 'One conversation. Handled to the end.',
    sub: 'What actually happens when a customer gets in touch — the same path whether they call, message or fill in a form.',
    stages: [
      {
        key: 'contact',
        title: 'They get in touch',
        body: 'A call at closing time, a message at midnight, a form on a Sunday.',
        chips: ['Phone', 'WhatsApp', 'Instagram', 'Website chat', 'SMS', 'Email'],
      },
      {
        key: 'understand',
        title: 'Hala answers and works out what they need',
        body: 'On the first ring, in your tone — and it knows the ones who have been in before.',
        chips: ['Recognises returning customers', 'Answers from your own information'],
      },
      {
        key: 'handle',
        title: 'It gets handled',
        body: 'Whatever they came for is finished — not written on a pad for someone to deal with later.',
        chips: [],
      },
      {
        key: 'follow',
        title: 'And it follows up',
        body: 'The part nobody ever has time for, done every single time.',
        chips: [
          'Confirmation',
          'Reminder before',
          'Feedback afterwards',
          'Unhappy? Your team hears first',
        ],
      },
    ],
    branches: [
      { label: 'Takes an order', line: 'Confirmed, sent through to the kitchen or counter, receipt printed.' },
      { label: 'Books them in', line: 'Real times from your calendar, written straight into your diary.' },
      { label: 'Answers a question', line: 'Hours, prices or availability — with a booking link in the reply.' },
    ],
    map: {
      columns: ['Any channel', 'Answered & understood', 'Handled', 'Followed up'],
      contact: 'Customer gets in touch',
      contactNote: 'Phone, WhatsApp, Instagram, web chat, email',
      answer: 'Hala',
      badge: 'Recognises returning customers',
      follow: 'Follow-up & reviews',
      followNote: 'Confirmations, reminders, review requests — and keeping in touch',
    },
    footnote: 'Your team only hears about the ones that need a person.',
  },

  versus: {
    eyebrow: 'The alternatives',
    heading: 'Right now the phone has three bad answers.',
    options: [
      {
        title: 'You answer it yourself',
        points: [
          'Interrupted mid-job, mid-appointment, mid-service',
          'Spam and sales calls cost you the same time as real ones',
          'The ones that come while you are busy still go missed',
        ],
      },
      {
        title: 'It goes to voicemail',
        points: [
          'Most people never leave a message',
          'They call the next business on Google instead',
          'By the time you ring back they have booked elsewhere',
        ],
      },
      {
        title: 'You pay an answering service',
        points: [
          'Billed by the minute, whoever is calling',
          'Callers wait in a queue to reach a stranger',
          'They read a script — they do not know your prices',
        ],
      },
    ],
    answer: {
      title: 'Or Hala answers',
      points: [
        'Every call on the first ring, day or night',
        'Knows your hours, services, prices and rules',
        'Books them in and writes it to your systems',
        'Hands to your team the moment someone needs a person',
      ],
    },
  },

  integrations: {
    eyebrow: 'Connects to',
    heading: 'It writes into the tools you already run on.',
    sub: 'Bookings, jobs and contacts land where your team already looks — nobody retypes anything, and nobody learns a new system.',
    groups: [
      { key: 'calendars', label: 'Calendars', items: [{ key: 'gcal', name: 'Google Calendar' }, { key: 'outlook', name: 'Outlook' }, { key: 'calendly', name: 'Calendly' }] },
      { key: 'food', label: 'Restaurants & takeaways', items: [{ key: 'opentable', name: 'OpenTable' }, { key: 'sevenrooms', name: 'SevenRooms' }, { key: 'resdiary', name: 'ResDiary' }] },
      { key: 'beauty', label: 'Salons & clinics', items: [{ key: 'fresha', name: 'Fresha' }, { key: 'treatwell', name: 'Treatwell' }, { key: 'phorest', name: 'Phorest' }] },
      { key: 'crm', label: 'CRM & marketing', items: [{ key: 'ghl', name: 'GoHighLevel' }, { key: 'hubspot', name: 'HubSpot' }, { key: 'pipedrive', name: 'Pipedrive' }] },
      { key: 'messaging', label: 'Messaging', items: [{ key: 'whatsapp', name: 'WhatsApp Business' }, { key: 'instagram', name: 'Instagram' }, { key: 'messenger', name: 'Messenger' }] },
    ],
    note: 'Using something else? We connect it during onboarding.',
  },

  languages: {
    eyebrow: 'Language',
    heading: 'Built for your market, in your language.',
    sub: 'Your Hala is set up in one language and does it properly — not an English agent with a translation bolted on the front.',
    items: [
      {
        name: 'United Kingdom',
        native: 'English',
        line: 'Natural British phrasing, UK dates, times and postcodes',
      },
      {
        name: 'Germany',
        native: 'Deutsch',
        line: 'Formal Sie, 24-hour times, as German business expects',
      },
    ],
    note: 'English for the UK, German for Germany — each built natively.',
  },

  showcase: {
    eyebrow: 'Built around your industry',
    heading: 'One employee. Every kind of business.',
    sub: 'Hala learns your services, your prices and your rules. Here is what that sounds like in practice.',
    handlesLabel: 'What it handles here',
    items: [
      {
        key: 'restaurants',
        flow: [
          { label: 'Table booked', note: 'Written into the diary, allergies noted', system: 'Diary · kitchen notified · SMS confirmation' },
          { label: 'Order taken', note: 'Sent to the kitchen, receipt printed', system: 'Kitchen ticket · receipt · SMS to customer' },
          { label: 'Question answered', note: 'Menu, hours or parking — with a booking link', system: 'Enquiry logged · details sent' },
        ],
        label: 'Restaurants & cafés',
        line: 'Table for four this Friday, around eight?',
        reply: 'I have 8:15 or 8:45. Which suits you better?',
        handles: ['Bookings & covers', 'Menu & allergens', 'Opening hours', 'Large groups'],
        outcome: 'Booking in your diary, allergy noted, and the kitchen already told.',
      },
      {
        key: 'takeaways',
        flow: [
          { label: 'Collection booked', note: 'Ready time agreed', system: 'Time slot logged · SMS confirmation' },
          { label: 'Order taken', note: 'Items and total confirmed', system: 'Kitchen ticket · receipt printed' },
          { label: 'Question answered', note: 'Delivery area, wait times or allergens', system: 'Enquiry logged · details sent' },
        ],
        label: 'Takeaways & delivery',
        line: 'Two large pepperoni for collection at seven?',
        reply: 'That is £24.50, ready at 7:00. Collection or delivery?',
        handles: ['Orders & collection', 'Menu & allergens', 'Delivery areas', 'Busy-time waits'],
        outcome: 'Order through to the kitchen, customer told when it will be ready.',
      },
      {
        key: 'salons',
        flow: [
          { label: 'Appointment booked', note: 'With the stylist they asked for', system: 'Stylist calendar · reminder set' },
          { label: 'Service priced', note: 'Quoted from your price list', system: 'Quote logged · your price list applied' },
          { label: 'Question answered', note: 'Hours, products or patch tests', system: 'Enquiry logged · details sent' },
        ],
        label: 'Salons & clinics',
        line: 'Any chance of a cut and colour on Saturday?',
        reply: 'Saturday is full, but I have Friday at 4:30 or Sunday at 11:00.',
        handles: ['Appointments', 'Stylist or practitioner', 'Price lists', 'No-show reminders'],
        outcome: 'A chair filled that would have sat empty, with a reminder sent the day before.',
      },
    ],
  },

  steps: {
    heading: 'Four steps. Answering calls in 48 hours.',
    items: [
      {
        t: 'A 15-minute call',
        b: 'We learn your hours, your services, your booking rules and how you like customers spoken to.',
      },
      {
        t: 'We build your employee',
        b: 'Voice and tone configured to your business, in English or German.',
      },
      {
        t: 'Connect your number',
        b: 'Keep the number you have. Calls divert to Hala whenever nobody picks up — or always.',
      },
      {
        t: 'Live in 48 hours',
        b: 'It answers, books and follows up from day one. We stay on it in the first weeks.',
      },
    ],
  },

  pricing: {
    heading: 'No surprises. No hidden fees.',
    sub: 'One setup fee, then a monthly plan with your AI minutes included. Go over and the extra minutes are charged at a flat rate — no surprise bills.',
    currency: '£',
    perMonth: ' /month',
    setupSuffix: 'setup',
    mostChosen: 'Most chosen',
    plans: [
      {
        name: 'Essential',
        price: '199',
        setup: '299',
        mins: '2,500 minutes',
        overage: '£0.20 / extra minute',
        features: [
          'Every call answered, 24/7',
          'Bookings to your calendar',
          'Answers from your own information',
        ],
      },
      {
        name: 'Professional',
        price: '349',
        setup: '499',
        mins: '5,000 minutes',
        overage: '£0.18 / extra minute',
        features: [
          'Everything in Essential',
          'Enquiries qualified and routed',
          'Warm transfer with context',
        ],
      },
      {
        name: 'Premium',
        price: '549',
        setup: '799',
        mins: '10,000 minutes',
        overage: '£0.15 / extra minute',
        features: [
          'Everything in Professional',
          'Lowest per-minute rate',
          'Multi-site, one account',
        ],
      },
    ],
  },

  proof: {
    eyebrow: 'Reserved — real customer proof',
    heading: 'Real businesses. Real numbers.',
    body: 'Reserved for a named customer: calls answered, appointments booked, and what changed for the team. This is the single biggest gap on the page — one real business willing to be quoted will do more than any other section here.',
  },

  channels: {
    eyebrow: 'Every channel',
    heading: 'One employee. Everywhere your customers reach you.',
    body: 'Phone, WhatsApp, Instagram, Messenger, website chat, email and SMS — answered by the same employee, with one memory of every customer.',
    nodes: ['Phone calls', 'WhatsApp', 'Instagram', 'Messenger', 'Website chat', 'Email & SMS'],
    coreLabel: 'One employee',
    liveLabel: 'Live',
  },

  faq: {
    heading: 'Got questions?',
    headingSub: 'Ask Hala yourself.',
    body: 'The same employee that answers your customers can answer you. No form, no waiting.',
    askCta: 'Ask Hala',
    askNote:
      'In production this opens the live agent. Wire it to the existing GoHighLevel chat widget, or to the voice agent for a spoken answer.',
    items: [
      {
        q: 'Will it sound like a robot to my customers?',
        a: 'No. It is trained on your own tone and answers in natural speech, in English or German. Most callers never ask.',
      },
      {
        q: 'Is this replacing my staff?',
        a: 'No. It takes the repetitive interactions off them — the calls at closing time, the same five questions, the follow-ups nobody gets round to — so they can spend their time on the work that needs a person.',
      },
      {
        q: 'My business is not on your list. Will it work?',
        a: 'Almost certainly. Hala is configured around your services, prices and rules rather than a fixed industry template — the examples above are just the sectors we have built for most.',
      },
      {
        q: 'Do I have to change my booking system?',
        a: 'No. It writes into the calendar you already use. We confirm which one during onboarding.',
      },
    ],
  },

  closing: {
    heading: 'Get started with Hala today.',
    body: 'Fifteen minutes. We ring your number with Hala live and you throw whatever you like at it.',
    cta: 'Book a demo',
  },

  footer: {
    rights: '© 2026 Hala — a',
    productSuffix: 'product',
    links: [
      { label: 'Privacy', to: legalEn.privacy.slug },
      { label: 'Terms', to: legalEn.terms.slug },
      { label: 'Legal Notice', to: legalEn.impressum.slug },
      { label: 'info@khaashub.com', to: 'mailto:info@khaashub.com' },
    ],
  },

  legal: legalEn,
};

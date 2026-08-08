/**
 * Every user-visible string on the Hala page, in one place per language.
 *
 * Deliberately NOT typed with `as const`. The agency's src/i18n/en.ts does that
 * and derives `Translations = typeof en`, which makes each English string its own
 * literal type — so the German file can never satisfy it. That is the entire
 * cause of the 369 type errors sitting in src/i18n/de.ts today. Here the shape is
 * declared once as an interface with plain `string`, and both languages check
 * against it: a missing or misspelled key is a build error, and translating a
 * value is not.
 */

export interface Message {
  who: 'guest' | 'agent';
  t: string;
}

export interface HalaCopy {
  meta: { title: string; description: string };

  nav: {
    byline: string;
    links: { label: string; href: string }[];
    cta: string;
  };

  hero: {
    badge: string;
    h1: string;
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
    voice: {
      eyebrow: string;
      title: string;
      body: string;
      metaTop: string;
      metaBottom: string;
      messages: string[];
    };
    chat: {
      eyebrow: string;
      title: string;
      body: string;
      metaTop: string;
      metaBottom: string;
      messages: string[];
    };
    automations: {
      eyebrow: string;
      title: string;
      body: string;
      metaTop: string;
      metaBottom: string;
      rows: string[][];
    };
  };

  why: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };

  journey: {
    heading: string;
    liveLabel: string;
    scopedLabel: string;
    intents: {
      key: string;
      label: string;
      line: string;
      steps: string[];
      outcome: string;
      note?: string;
    }[];
  };

  steps: {
    heading: string;
    items: { t: string; b: string }[];
  };

  industries: {
    heading: string;
    items: string[];
  };

  pricing: {
    heading: string;
    sub: string;
    /** Currency symbol, so the German page can quote euros rather than pounds. */
    currency: string;
    perMonth: string;
    setupSuffix: string;
    mostChosen: string;
    plans: { name: string; price: string; setup: string; mins: string; features: string[] }[];
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
    links: string[];
  };
}

export const en: HalaCopy = {
  meta: {
    /* Keep in step with index.html — that file carries these as the static
       defaults for crawlers that do not run JavaScript, and this hook overwrites
       them at runtime. If they drift, the two tell different stories. */
    title: 'Hala | AI Employee for customer conversations',
    description:
      'Hala answers every call, message and enquiry on the first ring, books customers in, follows up, and hands over to your team when someone needs a person.',
  },

  nav: {
    byline: 'by Khaas Hub',
    links: [
      { label: 'Why', href: '#why' },
      { label: 'Channels', href: '#channels' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: 'Book a demo',
  },

  hero: {
    badge: 'AI agents for restaurants',
    h1: 'Answer every call. Fill every table.',
    sub: 'Hala takes the phone, the DMs and the follow-up off your team — so nobody is left on hold and no booking walks out the door.',
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'Hear it answer',
    callLabel: 'Call in progress',
    messages: [
      { who: 'guest', t: 'Hi — table for four this Friday, around eight?' },
      { who: 'agent', t: 'I have 8:15 or 8:45. Which suits you better?' },
      { who: 'guest', t: '8:15. One of us has a nut allergy.' },
    ],
    cards: [
      { label: 'Booking created', value: 'Fri · 8:15 PM · 4 guests' },
      { label: 'Kitchen notified', value: 'Nut allergy flagged' },
    ],
  },

  stat: {
    line1: '1 agent.',
    line2: '6 channels.',
    line3: 'Every hour of the day.',
    cards: [
      {
        k: 'Never the answerphone',
        v: 'Guests reach a real conversation on the first ring, including the hours you are closed.',
      },
      {
        k: 'One memory, every channel',
        v: 'A guest who called yesterday and messages today is the same guest, not two strangers.',
      },
      {
        k: 'Your team stays on the floor',
        v: 'Nobody leaves a table to answer a phone, and nothing is written down twice.',
      },
    ],
  },

  bands: {
    heading: 'Everything a busy restaurant needs. Nothing it doesn’t.',
    voice: {
      eyebrow: 'Voice agent',
      title: 'It answers the phone like your best host would.',
      body: 'Bookings, allergens, opening hours and large groups — handled to the end, in English or German, without pulling anyone off the floor.',
      metaTop: 'Incoming · 19:42',
      metaBottom: 'Booking written · kitchen notified',
      messages: [
        'Table for four this Friday, around eight?',
        'I have 8:15 or 8:45. Which suits you better?',
        '8:15. One of us has a nut allergy.',
      ],
    },
    chat: {
      eyebrow: 'Chat agent',
      title: 'It replies before they book somewhere else.',
      body: 'WhatsApp and Instagram answered in seconds, with the booking link in the thread — while your guest is still deciding.',
      metaTop: 'WhatsApp · 21:48',
      metaBottom: 'Replied in 4 seconds',
      messages: [
        'Are you still open? Table for 2?',
        'Kitchen closes at 22:30 — I can seat you at 21:15.',
        'Yes please',
      ],
    },
    automations: {
      eyebrow: 'Automations',
      title: 'The follow-up nobody ever gets round to.',
      body: 'A text back within a minute of every missed call. A nudge when an enquiry goes quiet. A review request while the evening is still fresh.',
      metaTop: 'Missed call · Friday 19:42',
      metaBottom: '3 sequences running',
      rows: [
        ['Call missed', 'Text within 60s', 'Booking link'],
        ['No reply 24h', 'WhatsApp nudge', 'Rebook'],
      ],
    },
  },

  why: {
    eyebrow: 'Why an AI agent',
    heading: 'Four reasons the phone stops costing you money.',
    items: [
      {
        title: 'It never puts anyone on hold.',
        body: 'Every call answered on the first ring — at seven on a Friday, on a bank holiday, at midnight when you are closed.',
      },
      {
        title: 'It knows your restaurant.',
        body: 'Your hours, your menu, your allergens, your last sitting. Not a generic bot reading a script.',
      },
      {
        title: 'It writes to your diary.',
        body: 'Bookings land where your team already looks. Nobody retypes anything.',
      },
      {
        title: 'It hands over cleanly.',
        body: 'When a guest needs a person, your team picks up already knowing who is calling and why.',
      },
    ],
  },

  journey: {
    heading: 'One number. Every kind of call.',
    liveLabel: 'Running today',
    scopedLabel: 'Scoped with you',
    intents: [
      {
        key: 'book',
        label: 'Book a table',
        line: '“Table for four on Friday, around eight?”',
        steps: ['Check the diary', 'Offer real times', 'Flag allergens', 'Confirm by text'],
        outcome: 'Booking in your diary. Kitchen already has the allergy note.',
      },
      {
        key: 'menu',
        label: 'Menu & allergens',
        line: '“Is the risotto gluten free?”',
        steps: ['Match to your menu', 'Answer in your words', 'Offer to book'],
        outcome: 'Answered from your actual menu. Nobody pulled off the floor.',
      },
      {
        key: 'hours',
        label: 'Hours & directions',
        line: '“What time do you close on a Sunday?”',
        steps: ['Answer from your hours', 'Handle exceptions', 'Text directions'],
        outcome: 'Text sent with address, parking and opening times.',
      },
      {
        key: 'groups',
        label: 'Large groups',
        line: '“We’re twelve for a birthday — set menu?”',
        steps: ['Qualify party size', 'Collect date & budget', 'Brief your team'],
        outcome: 'Your team gets a briefed enquiry, not a cold callback.',
      },
      {
        key: 'other',
        label: 'Anything else',
        line: '“I left my jacket there last night…”',
        steps: ['Recognise it needs a person', 'Summarise', 'Transfer with context'],
        outcome: 'Staff pick up already knowing why the guest is calling.',
      },
      {
        key: 'order',
        label: 'Take an order',
        line: '“Two large pepperoni for collection at seven?”',
        steps: ['Take the items', 'Confirm the total', 'Send to kitchen'],
        outcome: 'Order on the pass, guest told when it will be ready.',
        note: 'Needs a till or kitchen system to write into — scoped with you at onboarding.',
      },
    ],
  },

  steps: {
    heading: 'Four steps. Answering calls in 48 hours.',
    items: [
      {
        t: 'A 15-minute call',
        b: 'We learn your hours, your menu, your booking rules and how you like guests spoken to.',
      },
      {
        t: 'We build your agent',
        b: 'Voice and tone configured to your restaurant, in English and German if you need both.',
      },
      {
        t: 'Connect your number',
        b: 'Keep the number you have. Calls divert to the agent whenever nobody picks up — or always.',
      },
      {
        t: 'Live in 48 hours',
        b: 'It answers, books and follows up from day one. We stay on it in the first weeks.',
      },
    ],
  },

  industries: {
    heading: 'If your phone rings while you’re serving, this is for you.',
    items: [
      'Restaurants & bistros',
      'Takeaways & delivery',
      'Cafés & bakeries',
      'Event venues',
      'Hotel restaurants',
      'Salons & clinics',
    ],
  },

  pricing: {
    heading: 'No surprises. No hidden fees.',
    sub: 'One setup, then a monthly fee with your minutes included. Voice pricing is proposed and still to be confirmed.',
    currency: '£',
    perMonth: ' /month',
    setupSuffix: 'setup',
    mostChosen: 'Most chosen',
    plans: [
      {
        name: 'Essential',
        price: '249',
        setup: '1,195',
        mins: '500 minutes',
        features: ['Every call answered, 24/7', 'Bookings to your diary', 'Menu & allergen questions'],
      },
      {
        name: 'Professional',
        price: '459',
        setup: '2,195',
        mins: '1,200 minutes',
        features: ['Everything in Essential', 'Groups & events qualified', 'Warm transfer with context'],
      },
      {
        name: 'Premium',
        price: '795',
        setup: '3,750',
        mins: '3,000 minutes',
        features: ['Everything in Professional', 'Both languages, your tone', 'Multi-site, one account'],
      },
    ],
  },

  proof: {
    eyebrow: 'Reserved — real customer proof',
    heading: 'Real restaurants. Real numbers.',
    body: 'Reserved for a named restaurant: calls answered, covers booked, and what changed for the team. This is the single biggest gap on the page — one real customer willing to be quoted will do more than any other section here.',
  },

  channels: {
    eyebrow: 'Every channel',
    heading: 'One agent. Everywhere your guests reach you.',
    body: 'Phone, WhatsApp, Instagram, Messenger, website chat, email and SMS — answered by the same agent, with one memory of every guest.',
    nodes: ['Phone calls', 'WhatsApp', 'Instagram', 'Messenger', 'Website chat', 'Email & SMS'],
    coreLabel: 'One agent',
    liveLabel: 'Live',
  },

  faq: {
    heading: 'Got questions?',
    headingSub: 'Ask the agent yourself.',
    body: 'The same agent that answers your guests can answer you. No form, no waiting.',
    askCta: 'Ask the agent',
    askNote:
      'In production this opens the live agent. Wire it to the existing GoHighLevel chat widget, or to the voice agent for a spoken answer.',
    items: [
      {
        q: 'Will it sound like a robot to my guests?',
        a: 'No. It is trained on your restaurant’s own tone and answers in natural speech, in English or German. Most callers never ask.',
      },
      {
        q: 'What happens if it cannot help?',
        a: 'It transfers to your team with the whole conversation already summarised — so nobody has to start again.',
      },
      {
        q: 'How long until it is answering calls?',
        a: '48 hours. We configure your hours, menu and booking rules, and keep your existing phone number.',
      },
      {
        q: 'Do I have to change my booking system?',
        a: 'No. It writes into the diary you already use. We confirm which one during onboarding.',
      },
    ],
  },

  closing: {
    heading: 'Get started with Hala today.',
    body: 'Fifteen minutes. We ring your number with the agent live and you throw whatever you like at it.',
    cta: 'Book a demo',
  },

  footer: {
    rights: '© 2026 Hala — a',
    productSuffix: 'product',
    links: ['Privacy', 'Terms', 'Impressum', 'info@khaashub.com'],
  },
};

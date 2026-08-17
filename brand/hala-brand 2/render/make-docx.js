const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, BorderStyle, AlignmentType, LevelFormat, ShadingType, convertInchesToTwip,
} = require('docx');
const fs = require('fs');

const INDIGO = '6E7BF2', GREEN = '3ECF8E', DARK = '08080A', MUT = '5A5A5E', RED = 'C0504D';

const t = (text, opts = {}) => new TextRun({ text, font: 'Inter', size: 21, color: '222226', ...opts });
const b = (text, opts = {}) => t(text, { bold: true, ...opts });
const p = (children, opts = {}) => new Paragraph({ children: Array.isArray(children) ? children : [children], spacing: { after: 160 }, ...opts });

const h1 = (num, text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 520, after: 200 },
  children: [
    new TextRun({ text: num + '  ', font: 'Consolas', size: 22, color: INDIGO }),
    new TextRun({ text, font: 'Plus Jakarta Sans', bold: true, size: 40, color: DARK }),
  ],
});
const h2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 340, after: 140 },
  children: [new TextRun({ text, font: 'Plus Jakarta Sans', bold: true, size: 27, color: DARK })],
});

const bullet = (children, ref = 'dots') => new Paragraph({
  numbering: { reference: ref, level: 0 },
  spacing: { after: 120 },
  children: Array.isArray(children) ? children : [children],
});

const cellBorders = { top: { style: BorderStyle.SINGLE, size: 2, color: 'DDDDDD' }, bottom: { style: BorderStyle.SINGLE, size: 2, color: 'DDDDDD' }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };
const th = (text, w) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: cellBorders, shading: { type: ShadingType.CLEAR, fill: 'F4F4F6' }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text, font: 'Consolas', size: 17, color: MUT, allCaps: true })] })] });
const td = (runs, w, fill) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: cellBorders, shading: fill ? { type: ShadingType.CLEAR, fill } : undefined, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: Array.isArray(runs) ? runs : [runs] })] });

const W = 9360; // content width DXA

const colourRows = [
  ['Night', '#08080A', 'The background. Every social canvas starts here.'],
  ['Panel', '#141418', 'Cards and raised surfaces.'],
  ['Inset', '#1C1C21', 'Bubbles, inputs, inner surfaces.'],
  ['Deep Indigo', '#6E7BF2', 'The accent. One emphasised word per headline, primary buttons, the ring.'],
  ['Indigo Bright', '#8E9BFF', 'Small sizes and small text on dark, where #6E7BF2 loses contrast.'],
  ['Live Green', '#3ECF8E', 'Live status, confirmations, booked outcomes, the dot. Nothing else.'],
  ['White', '#FFFFFF', 'Headlines and primary text on dark.'],
  ['Muted', '#A8A8A8', 'Body copy on dark.'],
  ['Faint', '#707070', 'Captions, metadata, eyebrows, bylines.'],
  ['Hairline', 'rgba(255,255,255,0.10)', 'Borders and dividers — the brand draws with hairlines, not filled boxes.'],
  ['Accent soft', 'rgba(110,123,242,0.14)', 'Indigo washes: agent bubbles, tinted panels, glows.'],
];

const doc = new Document({
  numbering: {
    config: [
      { reference: 'dots', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: convertInchesToTwip(0.3), hanging: convertInchesToTwip(0.18) } } } }] },
      { reference: 'xs', levels: [{ level: 0, format: LevelFormat.BULLET, text: '✕', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: convertInchesToTwip(0.3), hanging: convertInchesToTwip(0.18) } } } }] },
    ],
  },
  styles: { default: { document: { run: { font: 'Inter', size: 21, color: '222226' } } } },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1250, bottom: 1250, left: 1250, right: 1250 } } },
    children: [
      // ── Cover-ish header
      new Paragraph({ spacing: { before: 1200, after: 60 }, children: [new TextRun({ text: 'HALA — A KHAAS HUB PRODUCT', font: 'Consolas', size: 18, color: INDIGO })] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: 'Brand Guidelines', font: 'Plus Jakarta Sans', bold: true, size: 72, color: DARK })] }),
      p([t('How Hala looks, sounds and behaves in marketing — built from the product site at hala.khaashub.com, for anyone making social content on the brand’s behalf.', { size: 23, color: '44444A' })]),
      p([t('Version 1.0 · August 2026 · Editable working copy — the designed reference is hala-brand-guidelines.html / .pdf', { size: 18, color: MUT, italics: true })]),

      // 01
      h1('01', 'The brand'),
      p([b('Hala answers every call, message and enquiry on the first ring, books customers in, follows up, and hands over to your team when someone needs a person. '), t('That sentence is the brand — every piece of marketing is some part of it made concrete.')]),
      h2('The name'),
      p([t('هالة means halo. The name also lands as a greeting — “Hala!” is how you welcome someone in much of the Arabic-speaking world, and it sounds close to “Hello”. In every language the brand is written '), b('Hala'), t(' in Latin script — including inside German and Arabic sentences.')]),
      h2('Who it speaks to'),
      p([t('Owners of busy local businesses — restaurants, takeaways, salons, clinics, trades — who lose customers every day to an unanswered phone. Practical, time-poor, allergic to tech hype. The brand speaks to them in their working day: Friday 19:42, mid-service, plating desserts. Never in AI-industry language.')]),
      h2('Positioning spine'),
      p([t('The core promise is industry-neutral — customers, enquiries, appointments. Sector-specific words (covers, allergens, stylists, patch tests) belong only in industry-scene content, one sector at a time. Adding an industry never changes the core message.')]),
      h2('Product and parent'),
      p([t('Hala is a Khaas Hub product. The lockup is “Hala by Khaas Hub” — Hala leads, the byline stays quiet. On social, Hala gets its own accounts; Khaas Hub appears in the byline and about text only.')]),
      p([b('The one-sentence test: ', { color: '2E8B62' }), t('if a post can’t be traced back to “answers on the first ring, books, follows up, hands over”, it’s off-brand — however clever it is.')]),

      // 02
      h1('02', 'Logo'),
      p([t('The mark is an open ring — a halo — with a dot resting where the ring opens. The gap reads as a speech tail, the dot as the reply. The dot is Live Green, the same green the product uses for live status. The 90° gap is centred at the bottom so both ends land at the 4 and 8 o’clock positions, where a headset’s earcups sit: '), b('a halo to anyone who knows the name’s meaning, a headset to everyone else.')]),
      h2('Variants'),
      bullet([b('Primary'), t(' — colour on dark (ring #6E7BF2, dot #3ECF8E). Use at 24px and larger. File: hala-mark-color.svg')]),
      bullet([b('Small cut'), t(' — below 24px: heavier stroke, ring brightened to #8E9BFF. File: hala-mark-small.svg')]),
      bullet([b('Mono white / mono black'), t(' — single-colour contexts: print, embroidery, watermarks.')]),
      bullet([b('Lockup'), t(' — mark + “Hala” in Plus Jakarta Sans 700, tracking −0.01em. Minimum 32px tall.')]),
      bullet([b('Avatar'), t(' — the mark alone at ~60% of the tile on the Night background. Never the lockup in a small circle.')]),
      h2('Clear space & minimum size'),
      p([t('Clear space equal to half the ring’s diameter on every side. Minimums: 20px small cut, 24px standard, 32px lockup.')]),
      h2('Don’t'),
      bullet([t('“Correct” the gap into a tidy speech-bubble opening, or close it into a full circle — the 4-and-8-o’clock opening is the whole idea.')], 'xs'),
      bullet([t('Recolour the dot — it is green because green means “live” everywhere in the product.')], 'xs'),
      bullet([t('Add a second dot, rotate the mark, outline it, add gradients or shadows, or set it in a container shape.')], 'xs'),
      bullet([t('Place the colour mark on busy photography or mid-tone backgrounds — switch to mono.')], 'xs'),
      bullet([t('Redraw the wordmark in any other face or weight.')], 'xs'),

      // 03
      h1('03', 'Colour'),
      p([t('Hala is a dark brand: near-black surfaces, white type, one indigo accent, hairlines instead of boxes. Colour is used sparingly enough that when it appears, it carries information.')]),
      new Table({
        width: { size: W, type: WidthType.DXA }, columnWidths: [1900, 2300, 5160],
        rows: [
          new TableRow({ children: [th('Name', 1900), th('Value', 2300), th('Use', 5160)] }),
          ...colourRows.map(([n, v, u]) => new TableRow({ children: [
            td(b(n), 1900), td(new TextRun({ text: v, font: 'Consolas', size: 18, color: '444448' }), 2300), td(t(u, { size: 19 }), 5160),
          ]})),
        ],
      }),
      h2('Rules'),
      bullet([t('Roughly 90% of any canvas is Night, Panel and type. Indigo is an accent, not a fill — if a design feels “very purple”, it’s wrong.')]),
      bullet([t('One indigo word per headline, chosen for meaning (“lead”, “first ring”) — never whole sentences.')]),
      bullet([t('Green only ever means live / confirmed / booked. Don’t decorate with it.')]),
      bullet([t('WhatsApp green #25D366 and amber #F59E0B appear only as channel/automation icon tones.')]),
      bullet([t('On light backgrounds (print, co-branding): Night for type, Deep Indigo as accent, same green rule.')]),

      // 04
      h1('04', 'Typography'),
      p([b('Plus Jakarta Sans'), t(' carries every headline, price and UI label. '), b('Inter'), t(' carries body copy. A system monospace carries eyebrows and metadata (uppercase, +0.13em letter-spacing). All fonts are open (OFL) and free for commercial use.')]),
      bullet([b('Display'), t(' — Jakarta 700, tracking −0.025em, 32px and up.')]),
      bullet([b('Heading'), t(' — Jakarta 600, tracking −0.02em, 22–31px.')]),
      bullet([b('UI / card titles'), t(' — Jakarta 600, tracking −0.01em, below 22px.')]),
      bullet([b('Body'), t(' — Inter 400–500; Muted (#A8A8A8) on dark, nothing lighter than 400.')]),
      bullet([b('Arabic'), t(' — IBM Plex Sans Arabic inside the same stacks; Latin words, including “Hala”, keep the Latin face.')]),
      p([t('Sentence case everywhere except mono eyebrows. Statement headlines end with a full stop. When brand fonts are unavailable, fall back to system sans — never a serif or rounded display face.')]),

      // 05
      h1('05', 'Voice & tone'),
      p([t('Hala sounds like a sharp, calm colleague explaining something over the counter — not a SaaS landing page. British, direct, specific. If a sentence could appear in any AI company’s deck, it doesn’t belong here.')]),
      h2('Principles'),
      bullet([b('Scenes, not claims. '), t('Start where the reader is standing: “Friday, 19:42. Everyone’s mid-service.”')]),
      bullet([b('Numbers do the talking. '), t('First ring. 60 seconds. 24 hours. Live in 48 hours. Never “revolutionary”, “seamless”, “game-changing”.')]),
      bullet([b('Second person, their world. '), t('“Your hours, your services, your prices, your policies.”')]),
      bullet([b('An employee, not a bot — but never a secret. '), t('Write about Hala like a capable colleague, and always disclose that customers are talking to an AI. Warm, never deceptive.')]),
      bullet([b('Short sentences with rhythm. '), t('“1 employee. 6 channels. Every hour of the day.” Fragments are fine. Exclamation marks are not.')]),
      bullet([b('Honest to a fault. '), t('No invented stats, no fake testimonials, no unconfirmed integrations. Proof stays empty until a real customer will be named.')]),
      h2('German'),
      p([t('German copy is a rewrite, not a translation. Register is Sie throughout, without exception. Where English uses “it”, German names Hala as the subject (“Hala antwortet …”). Times are 24-hour (14:15), thousands use a dot (1.200), prices in euros. Everything German gets a native speaker’s pass before publishing.')]),
      p([b('Claims discipline: ', { color: 'A05A00' }), t('never claim an agent that switches language per caller (one agent, one language), an unconfirmed integration, or any customer numbers that don’t exist yet.')]),

      // 06
      h1('06', 'Social media'),
      p([t('The strongest thing Hala can post is the product doing its job: a conversation, a booked outcome, a green light. Content recreates the site’s rhythm — dark canvas, one idea per card, one accent word, the URL in the footer.')]),
      h2('Content pillars'),
      bullet([b('Scenes'), t(' — a moment from the owner’s day where a call would have been missed, and wasn’t. One industry at a time. (Chat cards.)')]),
      bullet([b('How it works'), t(' — one capability per post: missed-call text-back, one memory across channels, warm handover, live in 48 hours. (Feature cards.)')]),
      bullet([b('Straight answers'), t(' — the pre-demo questions answered honestly: “Will it sound like a robot?” “Is this replacing my staff?” (Headline cards.)')]),
      bullet([b('The three bad answers'), t(' — answer it yourself / voicemail / answering service. (Carousel.)')]),
      bullet([b('Proof'), t(' — reserved for real, named customers with real numbers; becomes the lead pillar the moment one exists. (Stat cards.)')]),
      h2('Formats per platform'),
      new Table({
        width: { size: W, type: WidthType.DXA }, columnWidths: [1800, 3100, 4460],
        rows: [
          new TableRow({ children: [th('Platform', 1800), th('Sizes', 3100), th('Notes', 4460)] }),
          new TableRow({ children: [td(b('Instagram'), 1800), td(t('1080×1080 feed · 1080×1920 story/reel', { size: 19 }), 3100), td(t('Scenes and chat cards lead. 3–5 concrete hashtags. Link in bio to the demo.', { size: 19 }), 4460)] }),
          new TableRow({ children: [td(b('LinkedIn'), 1800), td(t('1200×627 post image · banner 1584×396', { size: 19 }), 3100), td(t('Longer captions work; lead with the scene, end with the demo line. 0–3 hashtags.', { size: 19 }), 4460)] }),
          new TableRow({ children: [td(b('Facebook'), 1800), td(t('1080×1080 posts · cover 1640×624', { size: 19 }), 3100), td(t('Where local owners are. Same posts as IG; captions can run longer. No hashtags.', { size: 19 }), 4460)] }),
          new TableRow({ children: [td(b('TikTok / YouTube'), 1800), td(t('1080×1920 vertical · YT art 2560×1440', { size: 19 }), 3100), td(t('Real call recordings (with consent) are the format. Keep YT art content in the 1546×423 safe area.', { size: 19 }), 4460)] }),
        ],
      }),
      h2('Template rules'),
      bullet([t('Every card carries the mark + wordmark top-left and hala.khaashub.com in the footer, separated by a hairline.')]),
      bullet([t('One indigo word per headline; in German the accent moves to wherever the emphasis naturally falls.')]),
      bullet([t('Chat cards show real product behaviour only — guest in grey on the left, Hala in indigo wash on the right, outcome card with the green check underneath.')]),
      bullet([t('The “Answering now” live badge is reserved for content showing the product live.')]),
      bullet([t('The oversized ghost ring sits at ~5% white opacity, cropped by a corner — never fully visible, never in colour.')]),
      bullet([t('Photography, when it arrives: real businesses mid-service in low warm light. No stock handshakes, no headsets, no robots — ever.')]),
      p([b('Compliance: ', { color: 'A05A00' }), t('if the Hala account replies with AI assistance, say so — the EU AI Act requires customers to know they’re talking to an AI, and the brand treats that as a feature (“most callers never ask”), not small print.')]),

      // 07
      h1('07', 'Asset pack'),
      bullet([new TextRun({ text: 'logo/', font: 'Consolas', size: 19 }), t('  Mark SVGs (colour, small cut, mono ×2) · PNGs 32–512px · lockups · avatars 1024px dark/light')]),
      bullet([new TextRun({ text: 'templates/', font: 'Consolas', size: 19 }), t('  Feed cards 1080×1080 (headline, stat, chat, feature) · stories 1080×1920 · LinkedIn 1200×627')]),
      bullet([new TextRun({ text: 'banners/', font: 'Consolas', size: 19 }), t('  LinkedIn 1584×396 · Facebook cover 1640×624 · YouTube 2560×1440')]),
      bullet([new TextRun({ text: 'copy/', font: 'Consolas', size: 19 }), t('  sample-posts.md (EN + DE) · profile-kit.md (bios per platform)')]),
      bullet([new TextRun({ text: 'guide/', font: 'Consolas', size: 19 }), t('  Designed guidelines (HTML + PDF) and this editable copy')]),
      bullet([new TextRun({ text: 'render/', font: 'Consolas', size: 19 }), t('  Editable HTML template sources + render.js (Node + Playwright) to regenerate every PNG')]),
      p([t('Questions about the brand: info@khaashub.com', { size: 19, color: MUT })]),
    ],
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('/home/claude/hala-brand/guide/hala-brand-guidelines.docx', buf);
  console.log('docx written');
});

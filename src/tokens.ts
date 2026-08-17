/**
 * Option 4 tokens — shared by PageV4 and sections.tsx.
 *
 * Accent is #6E7BF2, the Deep Indigo already approved on the theme switcher, so
 * this page does not introduce a fourth palette.
 *
 * Display face is a sans rather than a high-contrast serif — see the note on
 * `display` below. A serif was the single thing that most made this page read
 * as the reference site; a sans keeps the aurora aesthetic without the resemblance.
 */

export const C = {
  black: '#08080A',
  panel: '#141418',
  inset: '#1C1C21',
  line: 'rgba(255,255,255,0.10)',
  white: '#FFFFFF',
  muted: '#A8A8A8',
  faint: '#707070',
  accent: '#6E7BF2',
  accentSoft: 'rgba(110,123,242,0.14)',
  live: '#3ECF8E',
} as const;

/**
 * Display face — Plus Jakarta Sans.
 *
 * Chosen over four serif candidates (Bodoni Moda, Playfair Display, Instrument
 * Serif, Fraunces) after previewing all five on the real headlines. The serifs
 * looked good in the hero and then turned fragile at section-heading size on a
 * dark background — and every one of them pulled the page toward
 * fashion-editorial, which is the wrong register for software a restaurateur
 * trusts with their phone line. Jakarta holds its weight the whole way down and
 * is the only option that does not share a register with the reference site.
 */
export const display =
  "'Plus Jakarta Sans', 'IBM Plex Sans Arabic', 'Inter', system-ui, sans-serif";

/**
 * Letter-spacing scale, by optical size rather than one value everywhere.
 *
 * The page previously used -0.035em on both a 22px wordmark and a 50px heading.
 * Tracking has to work the other way round: large type needs it pulled in,
 * small type needs it left alone, and a single negative value applied to
 * everything makes the small text look cramped. Plus Jakarta Sans is a fairly
 * narrow geometric face with a tall x-height, which exaggerates the effect.
 */
export const tracking = {
  /** 32px and up — hero, section headings, prices. */
  display: '-0.025em',
  /** Roughly 22–31px — sub-headings, band titles. */
  heading: '-0.02em',
  /** 22px and below — wordmark, card titles, legal headings. */
  ui: '-0.01em',
} as const;

/**
 * Arabic sits in the stack rather than behind a locale switch. Neither Plus
 * Jakarta Sans nor Inter carries Arabic glyphs, so the browser falls through to
 * IBM Plex Sans Arabic per character — Latin words keep the Latin face even
 * inside an Arabic sentence, which is what the brand name needs.
 */
export const sans =
  "'Inter', 'IBM Plex Sans Arabic', system-ui, -apple-system, sans-serif";
export const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

export const wrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 48px)',
} as const;

/**
 * The GoHighLevel booking widget, embedded rather than linked. Same calendar
 * the agency site at khaashub.com/call uses — one place for the team to change
 * availability, one set of notifications — but a visitor who has just read the
 * pricing books without leaving the page they were persuaded on.
 *
 * A plain lazy iframe: the widget sizes itself and needs no embed script, which
 * is how the agency site loads it too.
 *
 * PLACEHOLDER. This is still the agency's "Khaas Hub — Free Strategy Call",
 * so the widget introduces itself with the wrong brand and the wrong pitch
 * ("what's holding your business back online") to someone who has just read a
 * page about an AI receptionist. A dedicated Hala calendar is being set up;
 * swap the URL here and nothing else needs to change.
 */
export const BOOKING_EMBED =
  'https://api.khaashub.com/widget/bookings/khaas-hub-free-strategy-call';

/**
 * Where enquiries go. The agency site posts to this same GoHighLevel inbound
 * webhook, so leads land in the CRM the team already works from — no second
 * inbox to remember, no new credentials.
 *
 * Every payload carries `source: 'hala'` and the plan the visitor was reading,
 * because a Hala enquiry needs a different reply from an agency one. If the two
 * funnels ever need separate automations, make a second webhook in GoHighLevel
 * and change this line.
 */
export const ENQUIRY_WEBHOOK =
  'https://services.leadconnectorhq.com/hooks/1mbcu7rJEYHMYexor1GD/webhook-trigger/a803c5ce-d02f-41cf-b4e7-e7bf0d11a348';

/**
 * The explainer film, on YouTube.
 *
 * Served from youtube-nocookie.com, and only mounted once someone opens the
 * dialog — so no request reaches Google until a visitor asks for the video.
 * That is the two-click pattern German privacy guidance expects, and it keeps
 * the landing page free of a third-party player it does not need. The Google
 * Fonts transfer noted in the README is a separate and still-open problem.
 */
export const VIDEO_ID = 'n8nwUpPSqiw';

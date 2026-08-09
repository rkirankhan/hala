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
export const display = "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif";

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

export const sans = "'Inter', system-ui, -apple-system, sans-serif";
export const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

export const wrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 48px)',
} as const;

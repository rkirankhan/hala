# Hala

Hala is Khaas Hub's AI Employee — it answers calls, messages and enquiries across
channels, books customers in, follows up, and hands over to a human when someone
needs personal attention.

This repo is the product's marketing site, served at **hala.khaashub.com**. The
agency site (khaashub.com) is a separate codebase.

## Running it

```bash
npm install
npm run dev
```

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Vite dev server                       |
| `npm run build`   | Typecheck, then production build       |
| `npm run typecheck` | Types only                          |

## Languages

English at `/`, German at `/de`, Arabic at `/ar`. Language is a **route**, not a
stored preference — so each version has a real URL that can be linked, indexed
and given an `hreflang` tag.

Arabic is right-to-left. `dir` is set on the page root from the locale, and the
layout uses logical CSS properties (`insetInlineStart`, `borderEndStartRadius`,
`textAlign: start`) so it mirrors on its own. The one exception is the step
arrow, a glyph rather than an icon, flipped with a `[dir='rtl']` rule.

Arabic glyphs come from IBM Plex Sans Arabic, which sits *inside* the existing
font stacks rather than behind a locale switch: neither Plus Jakarta Sans nor
Inter carries Arabic, so the browser falls through per character. Latin words —
including the brand name — keep the Latin face inside an Arabic sentence.

All copy lives in `src/i18n`:

- `copy.ts` — the `HalaCopy` interface plus the English strings
- `de.ts` — the German strings
- `ar.ts` — the Arabic strings
- `legal.ts` — privacy, terms and Impressum in all three
- `index.ts` — the locale context and the language-switcher helper

The interface uses plain `string`, not `as const`. That matters: typing an
English source with `as const` makes every string its own literal type, so a
translation can never satisfy it. Adding a key is a build error in both
languages; translating a value is not.

To add a language: add a file next to `de.ts`, register it in `index.ts`, and add
a route in `HalaRoutes.tsx`.

## Before launch

- [ ] `index.html` is set to `noindex, nofollow`. Flip it to `index, follow` when
      the launch copy is final.
- [ ] Pricing is proposed, not confirmed — see `src/i18n/copy.ts`. German prices
      are the pound figures carried across as a placeholder.
- [ ] German and Arabic copy both need a native speaker's pass, especially the
      headlines, where the English relies on rhythm that does not translate.
- [ ] Arabic prices are still in pounds. If that page is aimed at Gulf buyers
      rather than Arabic speakers in the UK, currency and pricing both need
      revisiting — a commercial decision, not a translation one.
- [ ] The brand stays "Hala" in Latin script inside Arabic text. Switching to
      هلا or هالة is a branding decision if you want it.
- [ ] The proof section is an empty placeholder awaiting a named customer.
- [ ] No favicon or OG image yet.

## Legal pages

Nine routes, one per document per language:

| English | German | Arabic |
| ------- | ------ | ------ |
| `/privacy` | `/de/datenschutz` | `/ar/privacy` |
| `/terms` | `/de/agb` | `/ar/terms` |
| `/impressum` | `/de/impressum` | `/ar/impressum` |

Content is in `src/i18n/legal.ts`. All nine are `noindex, follow` — a privacy
policy outranking the product page for the brand name is an avoidable own goal.

**These are drafts, not legal advice.** Before launch:

- [ ] Fill every `[[PLACEHOLDER]]` — they render in amber on the page so an
      unfilled one is impossible to miss. Outstanding: registered address,
      company number, VAT number, director's name, phone number, which UK
      jurisdiction, and the log retention period.
- [ ] Have the German Impressum and Datenschutzerklärung reviewed by someone
      qualified in German law. The Abmahnung industry exists to profit from bad
      ones, and a UK company running a German-language site is a visible target.
- [ ] **GDPR Article 27** — Khaas Hub Ltd is a UK company with no EU
      establishment. Targeting German customers may require appointing an EU
      representative. The exemption for occasional, low-risk processing probably
      covers this marketing site today, but almost certainly will not once
      German customers are onboarded. Worth settling before the first one signs.
- [ ] **Google Fonts is loaded from Google's CDN**, which transmits visitor IP
      addresses to Google. German courts have ruled against this (LG München,
      2022) and it is a favourite of Abmahnung letters. Self-hosting the two
      font families removes the transfer entirely and is roughly an hour's work.
- [ ] Confirm a data processing agreement is in place with Vercel.
- [ ] The website terms are not service terms. A Hala subscription needs its own
      agreement covering the service, pricing, SLA and a customer-facing DPA.
- [ ] **EU AI Act** — customers must be told they are talking to an AI. That
      belongs in the agent's opening line, not just the small print.

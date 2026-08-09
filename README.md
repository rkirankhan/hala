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

English is at `/`, German at `/de`. Language is a **route**, not a stored
preference — so each version has a real URL that can be linked, indexed and given
an `hreflang` tag.

All copy lives in `src/i18n`:

- `copy.ts` — the `HalaCopy` interface plus the English strings
- `de.ts` — the German strings
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
- [ ] German copy needs a native speaker's pass, especially the headlines.
- [ ] The proof section is an empty placeholder awaiting a named customer.
- [ ] Copy is written for restaurants; the product positioning is cross-industry.
- [ ] No favicon or OG image yet.

## Legal pages

Six routes, one per document per language:

| English | German |
| ------- | ------ |
| `/privacy` | `/de/datenschutz` |
| `/terms` | `/de/agb` |
| `/impressum` | `/de/impressum` |

Content is in `src/i18n/legal.ts`. All six are `noindex, follow` — a privacy
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

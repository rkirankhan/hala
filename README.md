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
- [ ] Footer links (Privacy, Terms, Impressum) are not wired up. An Impressum and
      a Datenschutzerklärung are legally required for the German market.
- [ ] No favicon or OG image yet.

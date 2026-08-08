import { createContext, useContext } from 'react';
import { en, type HalaCopy } from './copy';
import { de } from './de';

export type { HalaCopy } from './copy';

export type HalaLocale = 'en' | 'de';

export const COPY: Record<HalaLocale, HalaCopy> = { en, de };

/**
 * Locale comes from the URL, not from localStorage.
 *
 * The agency site stores its language choice in localStorage only, which means
 * its German version has no address: it cannot be linked, cannot be indexed, and
 * cannot carry an hreflang tag. Hala is meant to be marketed in Germany, so the
 * language lives in the path — /de — and this context just carries the value the
 * route already decided.
 */
const LocaleContext = createContext<HalaLocale>('en');

export const HalaLocaleProvider = LocaleContext.Provider;

export function useHalaLocale(): HalaLocale {
  return useContext(LocaleContext);
}

export function useHalaCopy(): HalaCopy {
  return COPY[useContext(LocaleContext)];
}

/**
 * The other language, for the switcher in the nav. The href is computed from the
 * current pathname rather than stored here, because the tree mounts at two
 * different roots (/ on the subdomain, /hala on the agency domain).
 *
 * aria-label is written in the target language — a screen reader user switching
 * to German wants to hear the German label.
 */
export const OTHER: Record<HalaLocale, { locale: HalaLocale; label: string; ariaLabel: string }> = {
  en: { locale: 'de', label: 'DE', ariaLabel: 'Auf Deutsch ansehen' },
  de: { locale: 'en', label: 'EN', ariaLabel: 'View in English' },
};

/** Path of the same page in the other language, from wherever it is mounted. */
export function otherLocalePath(pathname: string, locale: HalaLocale): string {
  const base = pathname.replace(/\/+$/, '');
  if (locale === 'de') return base.replace(/\/de$/, '') || '/';
  return `${base}/de`;
}

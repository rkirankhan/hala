import { createContext, useContext } from 'react';
import { en, type HalaCopy } from './copy';
import { de } from './de';
import { ar } from './ar';

export type { HalaCopy, LegalDoc, LegalSet } from './copy';

export type HalaLocale = 'en' | 'de' | 'ar';

export const COPY: Record<HalaLocale, HalaCopy> = { en, de, ar };

/** Display order in the switcher. English first because it is the default. */
export const LOCALES: { code: HalaLocale; label: string; name: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'EN', name: 'English', dir: 'ltr' },
  { code: 'de', label: 'DE', name: 'Deutsch', dir: 'ltr' },
  { code: 'ar', label: 'AR', name: 'العربية', dir: 'rtl' },
];

export function dirOf(locale: HalaLocale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

/**
 * Locale comes from the URL, not from localStorage.
 *
 * The agency site stores its language choice in localStorage only, which means
 * its German version has no address: it cannot be linked, cannot be indexed, and
 * cannot carry an hreflang tag. Hala is marketed in more than one language, so
 * the language lives in the path — /de, /ar — and this context just carries the
 * value the route already decided.
 */
const LocaleContext = createContext<HalaLocale>('en');

export const HalaLocaleProvider = LocaleContext.Provider;

export function useHalaLocale(): HalaLocale {
  return useContext(LocaleContext);
}

export function useHalaCopy(): HalaCopy {
  return COPY[useContext(LocaleContext)];
}

const DOC_KEYS = ['privacy', 'terms', 'impressum'] as const;

/**
 * The same page in another language.
 *
 * Legal documents have a different slug per language (/privacy vs
 * /de/datenschutz vs /ar/khsawsyt), so switching language from one of them has
 * to map document-to-document rather than rewrite the path. Anything else falls
 * back to that language's home page.
 */
export function localePath(pathname: string, target: HalaLocale): string {
  const path = pathname.replace(/\/+$/, '') || '/';

  for (const { code } of LOCALES) {
    for (const key of DOC_KEYS) {
      if (COPY[code].legal[key].slug === path) return COPY[target].legal[key].slug;
    }
  }

  return target === 'en' ? '/' : `/${target}`;
}

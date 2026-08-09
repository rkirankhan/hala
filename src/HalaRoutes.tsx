import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HalaPage } from './HalaPage';
import { LegalPage } from './LegalPage';
import { COPY, HalaLocaleProvider, LOCALES, type LegalSet } from './i18n';
import { IndustryProvider } from './industry';

/**
 * Serves the root of hala.khaashub.com.
 *
 * Language is a route rather than a stored preference, so every version has a
 * real address that can be linked, indexed and given an hreflang tag. The agency
 * site keeps its language in localStorage, which is why its German version has
 * no URL and cannot be found by search — the mistake this avoids.
 *
 * Routes are generated from the locale list and each language's own legal slugs
 * (/privacy, /de/datenschutz, /ar/privacy) rather than written out twelve times,
 * so adding a language is a copy file plus one entry in LOCALES.
 */
const DOCS: { key: string; pick: (set: LegalSet) => LegalSet[keyof LegalSet] }[] = [
  { key: 'privacy', pick: (l) => l.privacy },
  { key: 'terms', pick: (l) => l.terms },
  { key: 'impressum', pick: (l) => l.impressum },
];

/** Slugs are stored absolute for use in links; routes want them relative. */
const rel = (slug: string) => slug.replace(/^\//, '');

export default function HalaRoutes() {
  return (
    <Routes>
      {LOCALES.map(({ code }) => (
        <Fragment key={code}>
          <Route
            {...(code === 'en' ? { index: true } : { path: code })}
            element={
              <HalaLocaleProvider value={code}>
                <IndustryProvider>
                  <HalaPage />
                </IndustryProvider>
              </HalaLocaleProvider>
            }
          />
          {DOCS.map((doc) => (
            <Route
              key={`${code}-${doc.key}`}
              path={rel(COPY[code].legal[doc.key as 'privacy'].slug)}
              element={
                <HalaLocaleProvider value={code}>
                  <LegalPage pick={doc.pick as (set: LegalSet) => LegalSet['privacy']} />
                </HalaLocaleProvider>
              }
            />
          ))}
        </Fragment>
      ))}

      {/* Absolute, not relative: `to="."` inside a splat route resolves to the
          matched path itself, so an unknown URL rendered a blank page instead of
          going home. Showed up the moment Arabic was unpublished and /ar stopped
          matching. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

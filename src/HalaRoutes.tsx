import { Navigate, Route, Routes } from 'react-router-dom';
import { HalaPage } from './HalaPage';
import { LegalPage } from './LegalPage';
import { HalaLocaleProvider, type HalaLocale } from './i18n';

/**
 * Serves the root of hala.khaashub.com. Paths stay relative so the tree also
 * works unchanged if it is ever mounted under a prefix again.
 *
 * Language is a route rather than a stored preference, so /de is a real address
 * that can be linked, indexed and given an hreflang tag. The agency site keeps
 * its language in localStorage, which is why its German version has no URL and
 * cannot be found by search — the mistake this avoids.
 *
 * Legal pages use each language's own slug (/privacy vs /de/datenschutz) rather
 * than a shared path, so a German visitor never sees an English word in the
 * address bar of a legal document.
 */
function Localised({ locale, children }: { locale: HalaLocale; children: React.ReactNode }) {
  return <HalaLocaleProvider value={locale}>{children}</HalaLocaleProvider>;
}

export default function HalaRoutes() {
  return (
    <Routes>
      <Route
        index
        element={
          <Localised locale="en">
            <HalaPage />
          </Localised>
        }
      />
      <Route
        path="privacy"
        element={
          <Localised locale="en">
            <LegalPage pick={(l) => l.privacy} />
          </Localised>
        }
      />
      <Route
        path="terms"
        element={
          <Localised locale="en">
            <LegalPage pick={(l) => l.terms} />
          </Localised>
        }
      />
      <Route
        path="impressum"
        element={
          <Localised locale="en">
            <LegalPage pick={(l) => l.impressum} />
          </Localised>
        }
      />

      <Route
        path="de"
        element={
          <Localised locale="de">
            <HalaPage />
          </Localised>
        }
      />
      <Route
        path="de/datenschutz"
        element={
          <Localised locale="de">
            <LegalPage pick={(l) => l.privacy} />
          </Localised>
        }
      />
      <Route
        path="de/agb"
        element={
          <Localised locale="de">
            <LegalPage pick={(l) => l.terms} />
          </Localised>
        }
      />
      <Route
        path="de/impressum"
        element={
          <Localised locale="de">
            <LegalPage pick={(l) => l.impressum} />
          </Localised>
        }
      />

      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}

import { Navigate, Route, Routes } from 'react-router-dom';
import { HalaPage } from './HalaPage';
import { HalaLocaleProvider } from './i18n';

/**
 * The Hala product's own route tree.
 *
 * Serves the root of hala.khaashub.com. Paths stay relative so the tree also
 * works unchanged if it is ever mounted under a prefix again.
 *
 * Language is a route rather than a stored preference, so /de is a real address
 * that can be linked, indexed and given an hreflang tag. The agency site keeps
 * its language in localStorage, which is why its German version has no URL and
 * cannot be found by search — the mistake this avoids.
 */
export default function HalaRoutes() {
  return (
    <Routes>
      <Route
        index
        element={
          <HalaLocaleProvider value="en">
            <HalaPage />
          </HalaLocaleProvider>
        }
      />
      <Route
        path="de"
        element={
          <HalaLocaleProvider value="de">
            <HalaPage />
          </HalaLocaleProvider>
        }
      />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}

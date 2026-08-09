import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { useHalaCopy } from './i18n';

/**
 * The selected industry, shared across the page.
 *
 * There are two places to change it — the chips in the hero and the tabs on the
 * flow map — and they have to agree. Two independent selections would let the
 * hero show a restaurant while the map below showed an estate agent, which
 * reads as a bug rather than a feature.
 *
 * The key is a stable id rather than a label, so switching language keeps the
 * chosen sector.
 */
interface IndustryState {
  key: string;
  setKey: (key: string) => void;
}

const IndustryContext = createContext<IndustryState | null>(null);

export function IndustryProvider({ children }: { children: ReactNode }) {
  const c = useHalaCopy();
  const [key, setKey] = useState(c.showcase.items[0].key);
  const value = useMemo(() => ({ key, setKey }), [key]);

  return <IndustryContext.Provider value={value}>{children}</IndustryContext.Provider>;
}

export function useIndustry() {
  const c = useHalaCopy();
  const ctx = useContext(IndustryContext);
  const key = ctx?.key ?? c.showcase.items[0].key;
  const industry = c.showcase.items.find((i) => i.key === key) ?? c.showcase.items[0];

  return { key, setKey: ctx?.setKey ?? (() => {}), industry, items: c.showcase.items };
}

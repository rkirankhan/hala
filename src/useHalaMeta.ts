import { useEffect } from 'react';
import type { HalaCopy, HalaLocale } from './i18n';

/**
 * index.html carries Hala's English tags. This swaps in the German set on /de
 * and adds the hreflang pair, which is the whole reason the German copy lives at
 * a URL instead of in localStorage.
 *
 * Because the English defaults are now baked into the HTML rather than injected,
 * link previews on WhatsApp, Slack and iMessage — none of which run JavaScript —
 * show Hala correctly. Those crawlers will still read the English tags on /de;
 * fixing that needs prerendering, which is not worth it until the German page is
 * being shared in the wild.
 */
const ORIGIN = 'https://hala.khaashub.com';

const ALTERNATES: { hreflang: string; href: string }[] = [
  { hreflang: 'en', href: `${ORIGIN}/` },
  { hreflang: 'de', href: `${ORIGIN}/de` },
  { hreflang: 'x-default', href: `${ORIGIN}/` },
];

const SELECTORS = {
  description: 'meta[name="description"]',
  ogTitle: 'meta[property="og:title"]',
  ogDescription: 'meta[property="og:description"]',
  ogUrl: 'meta[property="og:url"]',
} as const;

function setMeta(selector: string, content: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.content = content;
}

function getMeta(selector: string) {
  return document.head.querySelector<HTMLMetaElement>(selector)?.content ?? '';
}

export function useHalaMeta(copy: HalaCopy, locale: HalaLocale) {
  useEffect(() => {
    /* Restore on unmount, so switching language and back leaves the head exactly
       as it was rather than accumulating state. */
    const previous = {
      title: document.title,
      lang: document.documentElement.lang,
      description: getMeta(SELECTORS.description),
      ogTitle: getMeta(SELECTORS.ogTitle),
      ogDescription: getMeta(SELECTORS.ogDescription),
      ogUrl: getMeta(SELECTORS.ogUrl),
    };

    document.title = copy.meta.title;
    /* Screen readers pick pronunciation from this — a German page announced as
       English is close to unusable. */
    document.documentElement.lang = locale;
    setMeta(SELECTORS.description, copy.meta.description);
    setMeta(SELECTORS.ogTitle, copy.meta.title);
    setMeta(SELECTORS.ogDescription, copy.meta.description);
    setMeta(SELECTORS.ogUrl, locale === 'de' ? `${ORIGIN}/de` : `${ORIGIN}/`);

    const links = ALTERNATES.map(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href;
      link.dataset.hala = 'alternate';
      document.head.appendChild(link);
      return link;
    });

    return () => {
      document.title = previous.title;
      document.documentElement.lang = previous.lang;
      setMeta(SELECTORS.description, previous.description);
      setMeta(SELECTORS.ogTitle, previous.ogTitle);
      setMeta(SELECTORS.ogDescription, previous.ogDescription);
      setMeta(SELECTORS.ogUrl, previous.ogUrl);
      links.forEach((l) => l.remove());
    };
  }, [copy, locale]);
}

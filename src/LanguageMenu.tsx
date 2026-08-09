import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { C, mono, sans } from './tokens';
import { LOCALES, dirOf, localePath, useHalaCopy, useHalaLocale } from './i18n';

/**
 * Language dropdown.
 *
 * A custom menu rather than a native <select> because a select cannot render
 * Links, and language switching should be real navigation — each language has
 * its own URL, so the options need to be crawlable and openable in a new tab.
 *
 * The options are localised, not fixed English: the German page offers
 * "Englisch / Deutsch / Arabisch". Each is also tagged with its own `lang` so a
 * screen reader pronounces العربية in Arabic rather than spelling it out in the
 * page language.
 */
export function LanguageMenu() {
  const c = useHalaCopy();
  const locale = useHalaLocale();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={c.nav.languageLabel}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          padding: '8px 11px', borderRadius: 8, cursor: 'pointer',
          background: open ? 'rgba(255,255,255,0.06)' : 'transparent',
          border: `1px solid ${C.line}`, color: C.muted,
          fontFamily: sans, fontSize: 13, whiteSpace: 'nowrap',
        }}
      >
        <Globe size={14} strokeWidth={2} />
        <span>{c.nav.languageNames[locale]}</span>
        <ChevronDown
          size={13}
          strokeWidth={2.4}
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 140ms' }}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={c.nav.languageLabel}
          style={{
            position: 'absolute', top: 'calc(100% + 8px)',
            /* Logical inset so the menu hangs off the correct edge under RTL. */
            insetInlineEnd: 0,
            minWidth: 180, padding: 6, zIndex: 60,
            background: 'rgba(20,20,24,0.98)', backdropFilter: 'blur(12px)',
            border: `1px solid ${C.line}`, borderRadius: 12,
            boxShadow: '0 24px 50px -20px rgba(0,0,0,0.85)',
            animation: 'v4Fade 140ms ease-out both',
          }}
        >
          <div
            style={{
              fontFamily: mono, fontSize: 9.5, letterSpacing: '0.13em',
              textTransform: 'uppercase', color: C.faint, padding: '6px 10px 8px',
            }}
          >
            {c.nav.languageLabel}
          </div>

          {LOCALES.map(({ code }) => {
            const active = code === locale;
            return (
              <Link
                key={code}
                to={localePath(pathname, code)}
                hrefLang={code}
                lang={code}
                dir={dirOf(code)}
                role="menuitem"
                aria-current={active ? 'true' : undefined}
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 12, padding: '9px 10px', borderRadius: 8,
                  textDecoration: 'none', fontSize: 14,
                  background: active ? 'rgba(110,123,242,0.16)' : 'transparent',
                  color: active ? '#C3CAFF' : C.white,
                }}
              >
                <span>{c.nav.languageNames[code]}</span>
                {active && <Check size={14} strokeWidth={2.6} style={{ flexShrink: 0 }} />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { C, display, mono, sans, tracking, wrap } from './tokens';
import { dirOf, useHalaCopy, useHalaLocale, type LegalDoc, type LegalSet } from './i18n';
import { useLegalMeta } from './useHalaMeta';

/**
 * Renders one legal document — privacy, terms or the Impressum.
 *
 * Placeholders written as [[LIKE THIS]] in src/i18n/legal.ts render in amber
 * with a dotted underline. That is deliberate: an unfilled company number on a
 * live Impressum is a legal problem, and it should be impossible to miss on the
 * page rather than something you have to remember to grep for.
 */
const PLACEHOLDER = /(\[\[[^\]]+\]\])/g;

function Body({ text }: { text: string }) {
  const parts = text.split(PLACEHOLDER);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('[[') ? (
          <mark
            key={i}
            style={{
              background: 'rgba(245,158,11,0.14)',
              color: '#F5B342',
              borderBottom: '1px dotted rgba(245,158,11,0.7)',
              padding: '1px 4px',
              borderRadius: 4,
              fontFamily: mono,
              fontSize: '0.86em',
            }}
          >
            {part.slice(2, -2)}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function LegalPage({ pick }: { pick: (set: LegalSet) => LegalDoc }) {
  const c = useHalaCopy();
  const locale = useHalaLocale();
  const doc = pick(c.legal);
  const home = locale === 'de' ? '/de' : '/';

  useLegalMeta(doc.title, locale);

  return (
    <div
      dir={dirOf(locale)}
      style={{ background: C.black, color: C.white, fontFamily: sans, minHeight: '100vh' }}
    >
      <div
        style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: 'rgba(8,8,10,0.72)', backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', gap: 24, height: 68 }}>
          <Link
            to={home}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              color: C.muted, textDecoration: 'none', fontSize: 14.5,
            }}
          >
            <ArrowLeft size={16} strokeWidth={2} />
            {c.legal.backLabel}
          </Link>
        </div>
      </div>

      <main style={{ ...wrap, maxWidth: 760, padding: 'clamp(48px, 7vw, 88px) clamp(20px, 5vw, 48px) 96px' }}>
        <span
          style={{
            fontFamily: mono, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: C.faint,
          }}
        >
          {c.legal.updatedLabel} · {c.legal.updatedDate}
        </span>

        <h1
          style={{
            fontFamily: display, fontWeight: 700,
            fontSize: 'clamp(2rem, 4.4vw, 3rem)',
            lineHeight: 1.06, letterSpacing: tracking.heading,
            margin: '18px 0 0',
          }}
        >
          {doc.title}
        </h1>

        <p style={{ margin: '20px 0 0', fontSize: 16.5, lineHeight: 1.65, color: C.muted }}>
          <Body text={doc.intro} />
        </p>

        {doc.sections.map((s) => (
          <section key={s.h} style={{ marginTop: 'clamp(32px, 4vw, 48px)' }}>
            <h2
              style={{
                fontFamily: display, fontWeight: 600, fontSize: 19,
                letterSpacing: tracking.ui, margin: 0,
                paddingBottom: 12, borderBottom: `1px solid ${C.line}`,
              }}
            >
              {s.h}
            </h2>
            {s.body.map((line, i) => (
              <p
                key={i}
                style={{
                  margin: '14px 0 0', fontSize: 15,
                  lineHeight: 1.7, color: 'rgba(255,255,255,0.78)',
                }}
              >
                <Body text={line} />
              </p>
            ))}
          </section>
        ))}
      </main>

      <footer style={{ borderTop: `1px solid ${C.line}` }}>
        <div
          style={{
            ...wrap, padding: '30px clamp(20px, 5vw, 48px)',
            display: 'flex', flexWrap: 'wrap', gap: 16,
            alignItems: 'center', justifyContent: 'space-between',
            fontSize: 13, color: C.faint,
          }}
        >
          <span>
            {c.footer.rights}{' '}
            <a href="https://khaashub.com" style={{ color: C.muted, textDecoration: 'none' }}>
              Khaas Hub
            </a>{' '}
            {c.footer.productSuffix}
          </span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: 22 }}>
            {c.footer.links.map((l) =>
              l.to.startsWith('/') ? (
                <Link key={l.to} to={l.to} style={{ color: C.faint, textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ) : (
                <a key={l.to} href={l.to} style={{ color: C.faint, textDecoration: 'none' }}>
                  {l.label}
                </a>
              ),
            )}
          </span>
        </div>
      </footer>
    </div>
  );
}

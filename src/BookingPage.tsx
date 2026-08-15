import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BOOKING_EMBED, C, display, mono, sans, tracking, wrap } from './tokens';
import { dirOf, useHalaCopy, useHalaLocale } from './i18n';
import { useLegalMeta } from './useHalaMeta';
import { HalaMark } from './HalaMark';

/**
 * The booking page — one job, the calendar.
 *
 * The widget was embedded in the closing section of the landing page first,
 * where it was 900px of someone else's interface sitting between the last
 * argument and the footer. On its own page it can have the room it needs, and
 * the landing page ends on a sentence instead of a form.
 *
 * Same shell as the legal pages: back to Hala, nothing else to click. Someone
 * who got here came to book, and a full nav is an invitation to wander off.
 */
export function BookingPage() {
  const c = useHalaCopy();
  const [ready, setReady] = useState(false);
  const locale = useHalaLocale();
  const home = locale === 'en' ? '/' : `/${locale}`;

  useLegalMeta(c.booking.title, locale);

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

      <main style={{ ...wrap, maxWidth: 980, padding: 'clamp(40px, 5.5vw, 72px) clamp(20px, 5vw, 48px) 96px' }}>
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: mono, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: C.faint,
            }}
          >
            <HalaMark size={18} title="" /> Hala
          </span>

          <h1
            style={{
              fontFamily: display, fontWeight: 600,
              fontSize: 'clamp(2rem, 4.4vw, 3rem)',
              lineHeight: 1.14, letterSpacing: tracking.heading,
              margin: '16px 0 0',
            }}
          >
            {c.booking.title}
          </h1>

          <p
            style={{
              margin: '16px auto 0', fontSize: 16, lineHeight: 1.6,
              color: C.muted, maxInlineSize: '52ch',
            }}
          >
            {c.booking.body}
          </p>
        </div>

        {/* GoHighLevel serves this widget light and honours no theme parameter,
            and it is cross-origin, so no stylesheet of ours can reach inside it.
            Inverting and rotating the hue back is the only lever left: white
            becomes near-black, the blues stay blue. Not as good as a calendar
            that was designed dark — if GoHighLevel ever exposes an appearance
            setting, use that and delete this.

            The filter is on the iframe rather than the wrapper so the loading
            overlay above it keeps its own colours — inside a filtered element
            the accent would inverted too.

            900px because at 700 the calendar scrolled inside its own frame,
            which reads as broken. */}
        <div
          aria-busy={!ready}
          style={{
            position: 'relative',
            margin: 'clamp(28px, 3.4vw, 44px) 0 0',
            borderRadius: 18,
            overflow: 'hidden',
            border: `1px solid ${C.line}`,
            background: C.panel,
            minHeight: 900,
          }}
        >
          <iframe
            src={BOOKING_EMBED}
            title={c.booking.title}
            onLoad={() => setReady(true)}
            style={{
              width: '100%', minHeight: 900, border: 0, display: 'block',
              filter: 'invert(1) hue-rotate(180deg)',
              /* Fade in rather than appear: the widget paints white for a frame
                 or two before its own styles land, and a white flash on a black
                 page is more jarring than the wait it replaces. */
              opacity: ready ? 1 : 0,
              transition: 'opacity 300ms ease-out',
            }}
          />

          {/* The mark is a ring with a gap, so spinning it is the whole
              spinner. Kept mounted until the frame reports back, then faded
              rather than cut, so a fast connection does not flash it. */}
          <div
            aria-hidden={ready}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 18,
              background: C.panel,
              opacity: ready ? 0 : 1,
              pointerEvents: ready ? 'none' : 'auto',
              transition: 'opacity 300ms ease-out',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                animation: 'halaSpin 1.1s linear infinite',
              }}
            >
              <HalaMark size={40} title="" />
            </span>
            <span
              style={{
                fontFamily: mono, fontSize: 10.5, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: C.faint,
              }}
            >
              {c.booking.loading}
            </span>
          </div>
        </div>

      </main>
    </div>
  );
}

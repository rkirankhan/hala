import { useEffect, useState } from 'react';
import { C, display, tracking } from './tokens';

/**
 * The opening animation: the ring draws itself, the dot lands, the name
 * arrives, and the whole thing lifts away.
 *
 * Three rules keep an intro from becoming a toll booth:
 *
 *   1. Once per session. Somebody who reads the pricing, opens /book and comes
 *      back does not want to watch it three times.
 *   2. Skipped entirely under prefers-reduced-motion — not merely sped up. The
 *      global rule in index.css would freeze the drawing mid-stroke and leave
 *      a half-finished ring on screen for the full hold.
 *   3. Short. 1.6s total, and a click or a key skips the rest of it.
 *
 * The page underneath is fully rendered the whole time. This is a cover, not a
 * gate: nothing waits on it, and a crawler never sees it at all.
 */
const KEY = 'hala-splash-seen';

/* Circumference of the r=20 ring, normalised by pathLength so the dash maths
   is in round numbers: 94 of 125 units drawn, leaving the 31-unit gap the mark
   is built around. Drawing it on means dasharray "94 94" — the second 94
   overruns the path, so what remains after the stroke is exactly that gap. */
const ARC = 94;

export function Splash() {
  const [state, setState] = useState<'hidden' | 'playing' | 'leaving'>('hidden');

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem(KEY, '1');
      return;
    }

    setState('playing');

    /* The flag is written when the splash starts leaving, not when it starts
       playing. StrictMode runs this effect twice in development — mount,
       clean up, mount again — and writing it up front made the second pass
       return early, having already torn down the first pass's timers. The
       cover then sat there forever. */
    const leave = () => {
      sessionStorage.setItem(KEY, '1');
      setState('leaving');
    };
    const done = () => setState('hidden');

    const t1 = window.setTimeout(leave, 1600);
    const t2 = window.setTimeout(done, 2100);
    /* Any input skips it. An intro nobody can dismiss is the kind people learn
       to sit through with their finger already on the back button. */
    window.addEventListener('pointerdown', leave, { once: true });
    window.addEventListener('keydown', leave, { once: true });
    window.addEventListener('wheel', leave, { once: true, passive: true });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener('pointerdown', leave);
      window.removeEventListener('keydown', leave);
      window.removeEventListener('wheel', leave);
    };
  }, []);

  if (state === 'hidden') return null;

  const leaving = state === 'leaving';

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 22,
        background: C.black,
        /* The aurora the hero uses, so the cover lifts into a page that looks
           like where it came from rather than cutting to a different one. */
        backgroundImage:
          'radial-gradient(1100px 620px at 50% 38%, rgba(79,70,229,0.20) 0%, rgba(8,8,10,0) 68%)',
        opacity: leaving ? 0 : 1,
        transform: leaving ? 'scale(1.04)' : 'none',
        transition: 'opacity 480ms ease-out, transform 480ms ease-out',
        pointerEvents: leaving ? 'none' : 'auto',
      }}
    >
      <svg width="96" height="96" viewBox="0 0 64 64" role="presentation">
        <circle
          cx="32" cy="32" r="20"
          fill="none"
          stroke={C.accent}
          strokeWidth="6"
          strokeLinecap="round"
          pathLength={125}
          strokeDasharray={`${ARC} ${ARC}`}
          transform="rotate(135 32 32)"
          style={{ animation: 'halaDraw 760ms cubic-bezier(0.4, 0, 0.2, 1) both' }}
        />
        <circle
          cx="17.9" cy="46.1" r="6.5"
          fill={C.live}
          /* Lands where the stroke finishes, a beat after it gets there. */
          style={{
            transformOrigin: '17.9px 46.1px',
            animation: 'halaLand 420ms cubic-bezier(0.34, 1.56, 0.64, 1) 620ms both',
          }}
        />
      </svg>

      <div
        style={{
          fontFamily: display, fontWeight: 600,
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          letterSpacing: tracking.heading,
          animation: 'halaRise 520ms ease-out 820ms both',
        }}
      >
        Hala
      </div>
    </div>
  );
}

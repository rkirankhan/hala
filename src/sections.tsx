import { useState } from 'react';
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Facebook,
  Globe,
  Home,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Scissors,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { C, display, mono, sans, tracking, wrap } from './tokens';
import { dirOf, useHalaCopy, useHalaLocale } from './i18n';

/**
 * The sections added after reviewing the reference site end to end.
 *
 * What the full-page view showed that the section screenshots did not is that
 * its real strength is RHYTHM: a bold numeric claim, then a run of
 * full-width tinted feature bands each carrying one idea and one piece of
 * product UI, then steps, then a single LIGHT band for pricing that resets the
 * eye, then proof, then the FAQ. Our page had good sections in a flat sequence;
 * this gives them a shape.
 *
 * Assets folded in from /preview/hero rather than rebuilt: the six-intent
 * restaurant journey, the channel fragments and the industries grid — those are
 * the strongest things we already had.
 */

/* ── Numeric claim ────────────────────────────────────────────────────── */

export function StatBand() {
  const c = useHalaCopy();

  return (
    <section style={{ ...wrap, padding: 'clamp(64px, 8vw, 110px) clamp(20px, 5vw, 48px)' }}>
      <h2
        style={{
          fontFamily: display,
          fontWeight: 600,
          fontSize: 'clamp(2.2rem, 5.4vw, 4rem)',
          lineHeight: 1.08,
          letterSpacing: tracking.display,
          margin: 0,
          maxInlineSize: '16ch',
        }}
      >
        {c.stat.line1}
        <span style={{ display: 'block', color: C.accent }}>{c.stat.line2}</span>
        <span style={{ display: 'block', color: C.muted }}>{c.stat.line3}</span>
      </h2>

      <div
        className="v4-stat-cols"
        style={{ display: 'grid', gap: 28, margin: 'clamp(36px, 4vw, 56px) 0 0' }}
      >
        {c.stat.cards.map((card) => (
          <div key={card.k} style={{ borderTop: `1px solid ${C.line}`, paddingTop: 18 }}>
            <div style={{ fontSize: 15.5, fontWeight: 600, marginBottom: 8 }}>{card.k}</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: C.muted }}>{card.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Tinted feature bands ─────────────────────────────────────────────── */

interface Band {
  tint: string;
  glow: string;
  eyebrow: string;
  title: string;
  body: string;
  visual: React.ReactNode;
}

function Bubble({ side, text, tone }: { side: 'in' | 'out'; text: string; tone: string }) {
  const out = side === 'out';
  return (
    <div style={{ display: 'flex', justifyContent: out ? 'flex-end' : 'flex-start' }}>
      <span
        style={{
          maxWidth: '82%',
          padding: '9px 13px',
          borderRadius: 13,
          /* Logical, not physical: the tail must sit on the reading-end side
             for outbound and the start side for inbound, which swaps under RTL. */
          borderEndEndRadius: out ? 4 : 13,
          borderEndStartRadius: out ? 13 : 4,
          fontSize: 13,
          lineHeight: 1.5,
          background: out ? `${tone}1E` : 'rgba(255,255,255,0.06)',
          border: `1px solid ${out ? `${tone}44` : 'transparent'}`,
          color: out ? tone : 'rgba(255,255,255,0.86)',
        }}
      >
        {text}
      </span>
    </div>
  );
}

function Fragment({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'rgba(8,8,10,0.72)',
        border: `1px solid ${C.line}`,
        borderRadius: 14,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 9,
        backdropFilter: 'blur(6px)',
      }}
    >
      {children}
    </div>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: 9.5,
        letterSpacing: '0.13em',
        textTransform: 'uppercase',
        color: C.faint,
      }}
    >
      {children}
    </div>
  );
}

/** Palette per band is a design constant; every word in them comes from copy. */
function useBands(): Band[] {
  const { bands } = useHalaCopy();

  return [
    {
      tint: 'rgba(110,123,242,0.14)',
      glow: 'rgba(110,123,242,0.45)',
      eyebrow: bands.voice.eyebrow,
      title: bands.voice.title,
      body: bands.voice.body,
      visual: (
        <Fragment>
          <Meta>{bands.voice.metaTop}</Meta>
          <Bubble side="in" text={bands.voice.messages[0]} tone="#6E7BF2" />
          <Bubble side="out" text={bands.voice.messages[1]} tone="#6E7BF2" />
          <Bubble side="in" text={bands.voice.messages[2]} tone="#6E7BF2" />
          <Meta>{bands.voice.metaBottom}</Meta>
        </Fragment>
      ),
    },
    {
      tint: 'rgba(37,211,102,0.12)',
      glow: 'rgba(37,211,102,0.38)',
      eyebrow: bands.chat.eyebrow,
      title: bands.chat.title,
      body: bands.chat.body,
      visual: (
        <Fragment>
          <Meta>{bands.chat.metaTop}</Meta>
          <Bubble side="in" text={bands.chat.messages[0]} tone="#25D366" />
          <Bubble side="out" text={bands.chat.messages[1]} tone="#25D366" />
          <Bubble side="in" text={bands.chat.messages[2]} tone="#25D366" />
          <Meta>{bands.chat.metaBottom}</Meta>
        </Fragment>
      ),
    },
    {
      tint: 'rgba(245,158,11,0.12)',
      glow: 'rgba(245,158,11,0.36)',
      eyebrow: bands.automations.eyebrow,
      title: bands.automations.title,
      body: bands.automations.body,
      visual: (
        <Fragment>
          <Meta>{bands.automations.metaTop}</Meta>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {bands.automations.rows.map((row, i) => (
              <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {row.map((step) => (
                  <span
                    key={step}
                    style={{
                      padding: '6px 10px',
                      borderRadius: 8,
                      background: 'rgba(255,255,255,0.06)',
                      border: `1px solid ${C.line}`,
                      fontSize: 11.5,
                      color: 'rgba(255,255,255,0.84)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {step}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <Meta>{bands.automations.metaBottom}</Meta>
        </Fragment>
      ),
    },
  ];
}

export function FeatureBands() {
  const c = useHalaCopy();
  const BANDS = useBands();

  return (
    <section style={{ padding: '0 0 clamp(48px, 6vw, 80px)' }}>
      <div style={{ ...wrap, textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 52px)' }}>
        <h2
          style={{
            fontFamily: display,
            fontWeight: 600,
            fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
            lineHeight: 1.06,
            letterSpacing: tracking.heading,
            margin: 0,
            maxInlineSize: '20ch',
            marginInline: 'auto',
          }}
        >
          {c.bands.heading}
        </h2>
      </div>

      <div style={{ ...wrap, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {BANDS.map((b) => (
          <div
            key={b.eyebrow}
            className="v4-band"
            style={{
              display: 'grid',
              gap: 'clamp(24px, 3vw, 48px)',
              alignItems: 'center',
              padding: 'clamp(26px, 3.4vw, 46px)',
              borderRadius: 22,
              border: `1px solid ${C.line}`,
              background: `linear-gradient(135deg, ${b.tint} 0%, rgba(12,12,15,0.6) 62%)`,
              boxShadow: `0 40px 90px -60px ${b.glow}`,
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 10.5,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.62)',
                }}
              >
                {b.eyebrow}
              </span>
              <h3
                style={{
                  fontFamily: display,
                  fontWeight: 600,
                  fontSize: 'clamp(1.4rem, 2.6vw, 2.1rem)',
                  lineHeight: 1.12,
                  letterSpacing: tracking.heading,
                  margin: '14px 0 0',
                  maxInlineSize: '20ch',
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  margin: '14px 0 0',
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: C.muted,
                  maxInlineSize: '44ch',
                }}
              >
                {b.body}
              </p>
            </div>
            <div>{b.visual}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Industry showcase ────────────────────────────────────────────────── */

/**
 * The one sector-specific section on the page.
 *
 * Everything above and below it is written for any business; this is where a
 * restaurateur, a clinic owner and a plumber each see their own words. Icons are
 * keyed by a stable id rather than by position, so translating a label — or
 * reordering the list in one language and not the other — cannot break the
 * mapping.
 *
 * Adding an industry is a copy change in src/i18n plus one line here.
 */
const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  restaurants: UtensilsCrossed,
  clinics: Sparkles,
  property: Home,
  salons: Scissors,
  trades: Wrench,
};

/* ── Four steps ───────────────────────────────────────────────────────── */

export function HowItWorks() {
  const c = useHalaCopy();
  /* Numbering is positional, so it never needs translating. */
  const STEPS = c.steps.items.map((s, i) => ({ ...s, n: String(i + 1).padStart(2, '0') }));

  return (
    <section style={{ ...wrap, padding: '0 clamp(20px, 5vw, 48px) clamp(56px, 7vw, 100px)' }}>
      <h2
        style={{
          fontFamily: display, fontWeight: 600,
          fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
          lineHeight: 1.06, letterSpacing: tracking.heading,
          margin: '0 0 clamp(28px, 3.4vw, 44px)', maxInlineSize: '16ch',
        }}
      >
        {c.steps.heading}
      </h2>

      <div className="v4-steps" style={{ display: 'grid', gap: 12 }}>
        {STEPS.map((s) => (
          <div
            key={s.n}
            style={{
              background: C.panel, border: `1px solid ${C.line}`,
              borderRadius: 16, padding: 'clamp(20px, 2.2vw, 26px)',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}
          >
            <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.16em', color: C.accent }}>
              {s.n}
            </span>
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: 17, letterSpacing: tracking.ui }}>
              {s.t}
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: C.muted }}>{s.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Pricing ──────────────────────────────────────────────────────────── */
/* Was a light band, on the reasoning that one pale section resets the eye after
 * ~6,000px of near-black. Switched to dark on request. The featured plan now
 * carries the accent border and glow to keep a focal point, since it can no
 * longer be the one dark card in a light row. */

/** Which plan is highlighted is a commercial decision, not a translated one. */
const HERO_PLAN = 1;

export function Pricing() {
  const c = useHalaCopy();
  const PLANS = c.pricing.plans.map((p, i) => ({ ...p, hero: i === HERO_PLAN }));

  return (
    <section id="pricing" style={{ ...wrap, padding: 'clamp(64px, 8vw, 110px) clamp(20px, 5vw, 48px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 3.6vw, 46px)' }}>
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
            lineHeight: 1.06, letterSpacing: tracking.heading, margin: 0,
          }}
        >
          {c.pricing.heading}
        </h2>
        <p style={{ margin: '14px auto 0', fontSize: 15.5, color: C.muted, maxInlineSize: '46ch' }}>
          {c.pricing.sub}
        </p>
      </div>

      <div className="v4-plans" style={{ display: 'grid', gap: 12 }}>
        {PLANS.map((p) => (
          <div
            key={p.name}
            style={{
              background: p.hero ? 'rgba(110,123,242,0.10)' : C.panel,
              border: `1px solid ${p.hero ? C.accent : C.line}`,
              borderRadius: 18,
              padding: 'clamp(22px, 2.6vw, 30px)',
              display: 'flex', flexDirection: 'column', gap: 16,
              boxShadow: p.hero ? '0 40px 90px -50px rgba(110,123,242,0.75)' : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  fontFamily: mono, fontSize: 10.5, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: p.hero ? C.accent : C.faint,
                }}
              >
                {p.name}
              </span>
              {p.hero && (
                <span
                  style={{
                    padding: '3px 9px', borderRadius: 99,
                    background: C.accent, color: C.white,
                    fontFamily: mono, fontSize: 9, letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {c.pricing.mostChosen}
                </span>
              )}
            </div>

            <div>
              <span style={{ fontFamily: display, fontWeight: 600, fontSize: 'clamp(2rem,3.2vw,2.6rem)', letterSpacing: tracking.display }}>
                {c.pricing.currency}
                {p.price}
              </span>
              <span style={{ fontSize: 14, color: C.muted }}>{c.pricing.perMonth}</span>
              <div style={{ fontSize: 13.5, marginTop: 6, color: C.muted }}>
                + {c.pricing.currency}
                {p.setup} {c.pricing.setupSuffix} · {p.mins}
              </div>
            </div>

            <div
              style={{
                display: 'flex', flexDirection: 'column', gap: 9,
                paddingTop: 16, borderTop: `1px solid ${C.line}`,
              }}
            >
              {p.features.map((x) => (
                <span key={x} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <Check size={14} strokeWidth={2.6} style={{ marginTop: 3, flexShrink: 0, color: C.accent }} />
                  <span style={{ fontSize: 13.5, lineHeight: 1.5, color: C.muted }}>{x}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Proof slot ───────────────────────────────────────────────────────── */

export function ProofSlot() {
  const c = useHalaCopy();

  return (
    <section style={{ ...wrap, padding: 'clamp(56px, 7vw, 100px) clamp(20px, 5vw, 48px)' }}>
      <div
        style={{
          border: `1px dashed ${C.line}`,
          borderRadius: 20,
          padding: 'clamp(30px, 4vw, 56px)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.faint }}>
          {c.proof.eyebrow}
        </span>
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            lineHeight: 1.1, letterSpacing: tracking.heading,
            margin: '16px auto 0', maxInlineSize: '24ch', color: C.muted,
          }}
        >
          {c.proof.heading}
        </h2>
        <p style={{ margin: '14px auto 0', fontSize: 14.5, lineHeight: 1.6, color: C.faint, maxInlineSize: '54ch' }}>
          {c.proof.body}
        </p>
      </div>
    </section>
  );
}

/* ── Closing ──────────────────────────────────────────────────────────── */

export function ClosingCTA() {
  const c = useHalaCopy();

  return (
    <section id="book" style={{ ...wrap, padding: '0 clamp(20px, 5vw, 48px) clamp(72px, 9vw, 120px)' }}>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 26,
          border: `1px solid ${C.line}`,
          padding: 'clamp(44px, 6vw, 84px) clamp(24px, 4vw, 56px)',
          textAlign: 'center',
          background: 'linear-gradient(140deg, rgba(79,70,229,0.28) 0%, rgba(168,85,247,0.18) 45%, rgba(12,12,15,0.9) 100%)',
        }}
      >
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(2rem, 4.6vw, 3.4rem)',
            lineHeight: 1.08, letterSpacing: tracking.display,
            margin: 0, maxInlineSize: '18ch', marginInline: 'auto',
          }}
        >
          {c.closing.heading}
        </h2>
        <p style={{ margin: '18px auto 0', fontSize: 16, color: 'rgba(255,255,255,0.72)', maxInlineSize: '44ch' }}>
          {c.closing.body}
        </p>
        <a
          href="#book"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            margin: '28px 0 0', padding: '16px 30px', borderRadius: 10,
            background: C.white, color: '#0B0B0D', fontWeight: 600, fontSize: 15.5,
            textDecoration: 'none',
          }}
        >
          {c.closing.cta} <ArrowRight size={16} strokeWidth={2.4} />
        </a>
      </div>
    </section>
  );
}

/* ── Channel orbit ────────────────────────────────────────────────────── */

/**
 * Every channel wired into one agent.
 *
 * The reference board this answers is static: icons scattered on a circuit
 * board with dotted lines to a chip. Three things make this one better rather
 * than a copy:
 *
 *  1. It MOVES. Pulses travel along each path toward the core, so the diagram
 *     shows traffic being answered rather than a wiring diagram.
 *  2. It is legible. Channels sit on a deliberate arc with labels, instead of
 *     scattered at arbitrary angles, so it reads at a glance.
 *  3. It is honest about direction. Paths flow inward — guests reach you on six
 *     channels, one agent answers. That is the actual claim.
 *
 * No third-party brand marks: generic line icons tinted to each platform's
 * colour, which avoids reproducing trademarked logos.
 */

const W = 980;
const H = 520;
const CX = W / 2;
const CY = H / 2;

/** Geometry and platform colours are fixed; the labels come from copy, by index. */
const NODE_META = [
  { icon: Phone,         colour: '#6E7BF2', x: 150, y: 86 },
  { icon: MessageCircle, colour: '#25D366', x: 96,  y: 260 },
  { icon: Instagram,     colour: '#E1306C', x: 150, y: 434 },
  { icon: Facebook,      colour: '#0084FF', x: 830, y: 86 },
  { icon: Globe,         colour: '#A855F7', x: 884, y: 260 },
  { icon: Mail,          colour: '#F59E0B', x: 830, y: 434 },
];

function useNodes() {
  const { channels } = useHalaCopy();
  return NODE_META.map((n, i) => ({ ...n, label: channels.nodes[i] }));
}

/** Curve that bows toward the horizontal centre line as it approaches the core. */
function pathFor(x: number, y: number) {
  const towardCore = x < CX ? 1 : -1;
  const cx1 = x + towardCore * 190;
  const cy1 = y;
  const cx2 = CX - towardCore * 150;
  const cy2 = CY;
  const endX = CX - towardCore * 86;
  return `M ${x} ${y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${endX} ${CY}`;
}

export function ChannelOrbit() {
  const c = useHalaCopy();
  const NODES = useNodes();

  return (
    <div
      className="v4-orbit"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: W,
        margin: '0 auto',
        aspectRatio: `${W} / ${H}`,
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="100%"
        style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
        aria-hidden
      >
        <defs>
          {NODES.map((n, i) => (
            <path key={n.label} id={`v4path${i}`} d={pathFor(n.x, n.y)} fill="none" />
          ))}
          <radialGradient id="v4core">
            <stop offset="0%" stopColor="rgba(110,123,242,0.55)" />
            <stop offset="70%" stopColor="rgba(110,123,242,0.10)" />
            <stop offset="100%" stopColor="rgba(110,123,242,0)" />
          </radialGradient>
        </defs>

        {/* Core glow */}
        <circle cx={CX} cy={CY} r={190} fill="url(#v4core)" />

        {NODES.map((n, i) => (
          <g key={n.label}>
            <use href={`#v4path${i}`} stroke={C.line} strokeWidth={1.4} strokeDasharray="3 7" />
            {/* Traffic arriving at the agent */}
            <circle r={3.6} fill={n.colour}>
              <animateMotion dur="3.4s" begin={`${i * 0.55}s`} repeatCount="indefinite">
                <mpath href={`#v4path${i}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.12;0.8;1"
                dur="3.4s"
                begin={`${i * 0.55}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Channel tiles */}
      {NODES.map(({ icon: Icon, label, colour, x, y }) => (
        <div
          key={label}
          style={{
            position: 'absolute',
            left: `${(x / W) * 100}%`,
            top: `${(y / H) * 100}%`,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 14px',
            borderRadius: 12,
            background: 'rgba(20,20,24,0.94)',
            border: `1px solid ${C.line}`,
            backdropFilter: 'blur(8px)',
            boxShadow: `0 18px 40px -22px ${colour}80`,
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 30, height: 30, borderRadius: 8,
              background: `${colour}22`, color: colour, flexShrink: 0,
            }}
          >
            <Icon size={15} strokeWidth={2} />
          </span>
          <span style={{ fontSize: 13.5, fontWeight: 500 }}>{label}</span>
        </div>
      ))}

      {/* The agent */}
      <div
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 172, height: 172, borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 25%, #262636 0%, #12121A 70%)',
          border: `1px solid rgba(110,123,242,0.45)`,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: '0 0 70px -8px rgba(110,123,242,0.55)',
        }}
      >
        <Sparkles size={24} strokeWidth={1.8} style={{ color: C.accent }} />
        <span
          style={{
            fontFamily: display, fontWeight: 700, fontSize: 15,
            letterSpacing: tracking.ui,
          }}
        >
          Hala
        </span>
        <span
          style={{
            fontFamily: mono, fontSize: 9, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: C.faint,
          }}
        >
          {c.channels.coreLabel}
        </span>
      </div>
    </div>
  );
}

/** Below the orbit breakpoint the arc stops being legible — plain rows instead. */
export function ChannelList() {
  const c = useHalaCopy();
  const NODES = useNodes();

  return (
    <div
      className="v4-orbit-list"
      style={{
        background: C.panel,
        border: `1px solid ${C.line}`,
        borderRadius: 18,
        overflow: 'hidden',
      }}
    >
      {NODES.map(({ icon: Icon, label, colour }, i) => (
        <div
          key={label}
          style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '14px 16px',
            borderTop: i === 0 ? 'none' : `1px solid ${C.line}`,
            borderLeft: `2px solid ${colour}`,
          }}
        >
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 30, height: 30, borderRadius: 8,
              background: `${colour}1A`, color: colour, flexShrink: 0,
            }}
          >
            <Icon size={15} strokeWidth={2} />
          </span>
          <span style={{ fontSize: 14.5, fontWeight: 500 }}>{label}</span>
          <span style={{ flex: 1 }} />
          <span
            style={{
              fontFamily: mono, fontSize: 10, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: C.live,
            }}
          >
            {c.channels.liveLabel}
          </span>
        </div>
      ))}
    </div>
  );
}


/* ── Flow map ─────────────────────────────────────────────────────────── */

/**
 * The journey as a diagram: one entry, a fork into three outcomes, one shared
 * follow-up tail.
 *
 * Same construction as ChannelOrbit — an SVG for the connectors plus HTML tiles
 * positioned by percentage — because tiles as HTML keep the text selectable,
 * wrappable and translatable, which <text> nodes in SVG are not.
 *
 * Shown only from 1000px up. Below that the vertical rail takes over: five nodes
 * across a phone screen is unreadable at any font size that fits.
 *
 * RTL: the canvas is mirrored with scaleX(-1) and each tile is counter-mirrored,
 * so the diagram reads right-to-left in Arabic while the words stay the right
 * way round. Centering with translate(-50%) is direction-agnostic, so the
 * positions need no adjustment.
 */
const MAP_W = 1100;
const MAP_H = 400;

const MAP_PATHS = [
  'M 160 200 L 232 200',
  'M 372 200 C 470 200, 470 70, 543 70',
  'M 372 200 L 533 200',
  'M 372 200 C 470 200, 470 330, 543 330',
  'M 697 70 C 790 70, 790 200, 862 200',
  'M 707 200 L 862 200',
  'M 697 330 C 790 330, 790 200, 862 200',
];

function MapTile({
  x, y, width, icon: Icon, label, note, accent, rtl,
}: {
  x: number; y: number; width: number; icon: LucideIcon;
  label: string; note?: string; accent?: boolean; rtl: boolean;
}) {
  return (
    <div
      className="v4-map-tile"
      style={{
        position: 'absolute',
        left: `${(x / MAP_W) * 100}%`,
        top: `${(y / MAP_H) * 100}%`,
        /* Counter-mirror inline, not in CSS: the stylesheet cannot override an
           inline transform, and this element needs one for centering anyway. */
        transform: `translate(-50%, -50%)${rtl ? ' scaleX(-1)' : ''}`,
        width,
        padding: '13px 15px',
        borderRadius: 14,
        background: accent ? 'rgba(110,123,242,0.14)' : 'rgba(20,20,24,0.96)',
        border: `1px solid ${accent ? 'rgba(110,123,242,0.42)' : C.line}`,
        boxShadow: '0 18px 40px -24px rgba(0,0,0,0.9)',
      }}
    >
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 26, height: 26, borderRadius: 8, marginBottom: 9,
          background: accent ? C.accent : 'rgba(255,255,255,0.07)',
          color: accent ? C.white : C.accent,
        }}
      >
        <Icon size={14} strokeWidth={2} />
      </span>
      <div style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.3 }}>{label}</div>
      {note && (
        <div style={{ fontSize: 11.5, lineHeight: 1.45, color: C.muted, marginTop: 5 }}>{note}</div>
      )}
    </div>
  );
}

function FlowMap({ outcomes }: { outcomes: { label: string; note: string }[] }) {
  const { flow } = useHalaCopy();
  const rtl = dirOf(useHalaLocale()) === 'rtl';
  const [a, b, cc] = outcomes;

  return (
    <div
      className="v4-map"
      style={{ position: 'relative', width: '100%', maxWidth: MAP_W, margin: '0 auto' }}
    >
      <div className="v4-map-canvas" style={{ position: 'relative', aspectRatio: `${MAP_W} / ${MAP_H}` }}>
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          width="100%" height="100%" aria-hidden
          style={{ position: 'absolute', inset: 0 }}
        >
          {MAP_PATHS.map((d, i) => (
            <g key={i}>
              <path d={d} fill="none" stroke={C.line} strokeWidth={1.4} strokeDasharray="3 7" />
              {/* A pulse per path, so the diagram shows traffic moving rather
                  than a static wiring chart. */}
              <circle r={3} fill={C.accent}>
                <animateMotion dur="3.6s" begin={`${i * 0.45}s`} repeatCount="indefinite" path={d} />
                <animate
                  attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1"
                  dur="3.6s" begin={`${i * 0.45}s`} repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </svg>

        <MapTile x={90} y={200} width={140} icon={Phone} label={flow.map.contact} rtl={rtl} />
        <MapTile x={302} y={200} width={140} icon={Sparkles} label={flow.map.answer} accent rtl={rtl} />
        <MapTile x={620} y={70} width={172} icon={CalendarCheck} label={a.label} note={a.note} rtl={rtl} />
        <MapTile x={620} y={200} width={172} icon={ShoppingBag} label={b.label} note={b.note} rtl={rtl} />
        <MapTile x={620} y={330} width={172} icon={MessageCircle} label={cc.label} note={cc.note} rtl={rtl} />
        <MapTile
          x={952} y={200} width={168} icon={Check}
          label={flow.map.follow} note={flow.map.followNote} accent rtl={rtl}
        />

        {/* Badge on the qualifying step — the memory claim, made concrete. */}
        <div
          className="v4-map-tile"
          style={{
            position: 'absolute', left: `${(302 / MAP_W) * 100}%`, top: `${(96 / MAP_H) * 100}%`,
            transform: `translate(-50%, -50%)${rtl ? ' scaleX(-1)' : ''}`, whiteSpace: 'nowrap',
            padding: '5px 10px', borderRadius: 99,
            background: 'rgba(62,207,142,0.10)', border: '1px solid rgba(62,207,142,0.30)',
            fontFamily: mono, fontSize: 10, letterSpacing: '0.06em', color: C.live,
          }}
        >
          {flow.map.badge}
        </div>
      </div>
    </div>
  );
}

/* ── End-to-end flow ──────────────────────────────────────────────────── */

/**
 * The journey section: one entry point, three possible intents, one shared
 * follow-up tail.
 *
 * Built as a vertical rail rather than the left-to-right diagram it is drawn
 * from. Three reasons: a four-stage horizontal flow becomes unreadable on a
 * phone, the stages carry very different amounts of content (one has three
 * branches, another has four chips) which a row forces into ragged columns, and
 * a vertical rail mirrors for Arabic with logical properties alone — no
 * mirrored SVG coordinates to maintain.
 *
 * The branch labels are generic on purpose. Order, booking and question are the
 * same three endings for a restaurant, a clinic and a plumber; only the sector's
 * wording differs, and that lives in the industry showcase below.
 */
const FLOW_ICONS: Record<string, LucideIcon> = {
  contact: Phone,
  understand: Sparkles,
  handle: Check,
  follow: MessageCircle,
};

export function FlowSection() {
  const c = useHalaCopy();
  const [key, setKey] = useState(c.showcase.items[0].key);
  const industry = c.showcase.items.find((i) => i.key === key) ?? c.showcase.items[0];
  const pad = 'clamp(18px, 2.2vw, 26px)';

  return (
    <section
      id="industries"
      style={{ ...wrap, padding: 'clamp(56px, 7vw, 100px) clamp(20px, 5vw, 48px)' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 52px)' }}>
        <span
          style={{
            fontFamily: mono, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: C.faint,
          }}
        >
          {c.showcase.eyebrow}
        </span>
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
            lineHeight: 1.06, letterSpacing: tracking.heading,
            margin: '18px auto 0', maxInlineSize: '18ch',
          }}
        >
          {c.flow.heading}
        </h2>
        <p style={{ margin: '16px auto 0', fontSize: 16, color: C.muted, maxInlineSize: '52ch' }}>
          {c.flow.sub}
        </p>
      </div>

      <div className="v4-intents" style={{ display: 'grid', gap: 10, marginBottom: 'clamp(20px, 2.6vw, 30px)' }}>
        {c.showcase.items.map((i) => {
          const on = i.key === key;
          const Icon = INDUSTRY_ICONS[i.key];
          return (
            <button
              key={i.key}
              onClick={() => setKey(i.key)}
              aria-pressed={on}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '13px 15px', borderRadius: 12, cursor: 'pointer',
                textAlign: 'start', font: 'inherit', fontFamily: sans,
                background: on ? 'rgba(110,123,242,0.16)' : C.panel,
                border: `1px solid ${on ? C.accent : C.line}`,
                color: on ? '#C3CAFF' : C.white,
              }}
            >
              {Icon && <Icon size={16} strokeWidth={2} style={{ flexShrink: 0 }} />}
              <span style={{ fontSize: 13.5, fontWeight: 500 }}>{i.label}</span>
            </button>
          );
        })}
      </div>

      <FlowMap outcomes={industry.flow} />

      <div className="v4-map-list" style={{ maxInlineSize: 780, marginInline: 'auto' }}>
        {c.flow.stages.map((stage, i) => {
          const Icon = FLOW_ICONS[stage.key];
          const last = i === c.flow.stages.length - 1;

          return (
            <div key={stage.key} style={{ display: 'flex', gap: 'clamp(14px, 2.4vw, 24px)' }}>
              {/* Rail: node plus the line down to the next stage. */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    background: C.accentSoft, border: `1px solid rgba(110,123,242,0.32)`,
                    color: C.accent,
                  }}
                >
                  {Icon && <Icon size={17} strokeWidth={2} />}
                </span>
                {!last && <span style={{ flex: 1, width: 1, background: C.line, minHeight: 24 }} />}
              </div>

              <div style={{ paddingBottom: last ? 0 : 'clamp(26px, 3.2vw, 40px)', minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: mono, fontSize: 11, color: C.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontFamily: display, fontWeight: 600, fontSize: 'clamp(1.05rem, 1.9vw, 1.35rem)',
                      letterSpacing: tracking.ui, margin: 0,
                    }}
                  >
                    {stage.title}
                  </h3>
                </div>

                <p style={{ margin: '10px 0 0', fontSize: 15, lineHeight: 1.6, color: C.muted }}>
                  {stage.body}
                </p>

                {stage.chips.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 14 }}>
                    {stage.chips.map((chip) => (
                      <span
                        key={chip}
                        style={{
                          padding: '6px 11px', borderRadius: 8,
                          background: 'rgba(255,255,255,0.05)', border: `1px solid ${C.line}`,
                          fontSize: 12.5, color: 'rgba(255,255,255,0.82)',
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}

                {/* The one stage that forks. */}
                {stage.key === 'handle' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
                    {industry.flow.map((b) => (
                      <div
                        key={b.label}
                        style={{
                          display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 10px',
                          padding: '12px 14px', borderRadius: 12,
                          background: C.panel, border: `1px solid ${C.line}`,
                          /* Marks the fork on the reading-start edge, so it
                             moves to the right under RTL. */
                          borderInlineStartWidth: 2,
                          borderInlineStartColor: C.accent,
                        }}
                      >
                        <span style={{ fontSize: 14, fontWeight: 600 }}>{b.label}</span>
                        <span style={{ fontSize: 13.5, color: C.muted }}>{b.note}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 'clamp(20px, 2.6vw, 30px)',
          background: C.panel, border: `1px solid ${C.line}`,
          borderRadius: 18, overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: pad, borderBottom: `1px solid ${C.line}`,
            display: 'flex', flexDirection: 'column', gap: 12,
          }}
        >
          <Bubble side="in" text={industry.line} tone={C.accent} />
          <Bubble side="out" text={industry.reply} tone={C.accent} />
        </div>

        <div style={{ padding: pad, borderBottom: `1px solid ${C.line}` }}>
          <Meta>{c.showcase.handlesLabel}</Meta>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
            {industry.handles.map((h) => (
              <span
                key={h}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '9px 13px', borderRadius: 10,
                  background: C.inset, border: `1px solid ${C.line}`,
                  fontSize: 13, color: 'rgba(255,255,255,0.88)',
                }}
              >
                <Check size={13} strokeWidth={2.6} style={{ color: C.accent, flexShrink: 0 }} />
                {h}
              </span>
            ))}
          </div>
        </div>

        <div style={{ padding: pad, background: 'rgba(110,123,242,0.10)' }}>
          <p style={{ margin: 0, fontSize: 15.5, fontWeight: 500, color: '#C3CAFF' }}>
            {industry.outcome}
          </p>
        </div>
      </div>

      <p
        style={{
          margin: 'clamp(28px, 3.4vw, 44px) auto 0', textAlign: 'center',
          fontSize: 15.5, fontWeight: 500, color: '#C3CAFF', maxInlineSize: '44ch',
        }}
      >
        {c.flow.footnote}
      </p>
    </section>
  );
}

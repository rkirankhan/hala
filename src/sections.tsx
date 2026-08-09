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
  X,
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
              <div style={{ fontFamily: mono, fontSize: 11, marginTop: 7, color: C.faint }}>
                {p.overage}
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
 * Two layouts of the same nodes rather than one squeezed. A five-node
 * left-to-right diagram is illegible on a phone at any font size that fits, so
 * narrow screens get a vertical version with the fork drawn down a left-hand
 * trunk. Both are rendered and toggled in CSS, which avoids a resize listener
 * and keeps the markup identical for both.
 *
 * Same construction as ChannelOrbit — SVG for the connectors, HTML tiles
 * positioned by percentage — because tiles as HTML keep the text selectable,
 * wrappable and translatable, which SVG <text> is not.
 *
 * RTL: the canvas mirrors with scaleX(-1) and each tile counter-mirrors itself.
 * That has to be inline rather than a stylesheet rule, because the tiles carry
 * an inline transform for centering and CSS cannot override it.
 */
/**
 * Connector stroke. C.line (white at 10%) is right for panel borders but far too
 * faint for lines that have to be followed across the page — at that weight the
 * tiles read as a scattered grid rather than a route. Accent-tinted and heavier,
 * with a tighter dash, so the path is legible without competing with the tiles.
 */
const MAP_STROKE = 'rgba(110,123,242,0.55)';

interface Layout {
  w: number;
  h: number;
  paths: string[];
  /**
   * Firing order for the trace animation, one slot per path. Slots are 0.8s.
   * Repeats are allowed — the vertical layout runs two path segments in one
   * slot, since its trunk is drawn in two pieces but reads as one movement.
   */
  seq: number[];
  /**
   * When each node flashes, in seconds, timed to land as its incoming trace
   * arrives. The follow-up node takes an array because all three branches feed
   * it, so it lights once per branch.
   */
  nodes: { contact: number[]; answer: number[]; outcomes: number[][]; follow: number[] };
  /** x positions for the stage headings, wide layout only. */
  columnsAt?: number[];
  columnsY?: number;
  contact: [number, number, number];
  answer: [number, number, number];
  badge: [number, number];
  outcomes: [number, number, number][];
  follow: [number, number, number];
}

const WIDE: Layout = {
  w: 1100,
  h: 580,
  /**
   * Note there is no join from the third outcome to the follow-up.
   *
   * Someone who asked what time you close has not booked anything: there is no
   * confirmation to send, no appointment to remind them about, and no visit to
   * review. Drawing that arrow would promise a review request to a person who
   * has never been a customer — odd on its own terms, and against Google's
   * review policies besides. The enquiry is logged and nudged instead, which the
   * node's own system line says.
   */
  paths: [
    'M 210 290 L 250 290',
    'M 390 290 C 460 290, 460 100, 510 100',
    'M 390 290 L 510 290',
    'M 390 290 C 460 290, 460 480, 510 480',
    'M 780 100 C 832 100, 832 290, 862 290',
    'M 780 290 L 862 290',
  ],
  seq: [0, 1, 2, 3, 4, 5],
  nodes: {
    contact: [0],
    answer: [0.6],
    outcomes: [[1.4], [2.2], [3.0]],
    follow: [3.8, 4.6],
  },
  columnsAt: [112, 320, 645, 952],
  columnsY: 26,
  contact: [112, 290, 188],
  answer: [320, 290, 140],
  badge: [320, 178],
  /* Wide and short rather than narrow and tall. At 176 units the three lines
     wrapped into 180px towers and the map became a column to scroll rather than
     a picture to scan; at 262 they sit in roughly half that. */
  outcomes: [
    [645, 100, 262],
    [645, 290, 262],
    [645, 480, 262],
  ],
  follow: [952, 290, 180],
};

/** Phone layout: a vertical trunk on the reading-start side carries the fork. */
const TALL: Layout = {
  w: 600,
  h: 1500,
  /**
   * The phone layout keeps a single trunk into the follow-up rather than
   * collecting only the two branches that feed it. A second collector down the
   * right-hand side is what correctness would need, and at 375px it turns the
   * diagram into spaghetti. The desktop map carries the distinction; here the
   * trunk reads as "the conversation continues", which is close enough at this
   * size.
   */
  paths: [
    'M 330 226 L 330 246',
    'M 330 358 C 330 412, 70 402, 70 452',
    'M 70 452 L 70 1200',
    'M 70 540 L 158 540',
    'M 70 810 L 158 810',
    'M 70 1080 L 158 1080',
    'M 70 1200 C 70 1272, 330 1262, 330 1248',
  ],
  seq: [0, 1, 1, 2, 3, 4, 5],
  nodes: {
    contact: [0],
    answer: [0.6],
    outcomes: [[2.2], [3.0], [3.8]],
    follow: [4.6],
  },
  contact: [330, 120, 360],
  answer: [330, 300, 360],
  badge: [330, 388],
  outcomes: [
    [350, 540, 380],
    [350, 810, 380],
    [350, 1080, 380],
  ],
  follow: [330, 1350, 360],
};

/**
 * The channels a conversation can arrive on, tinted to each platform.
 *
 * Shown as a row on the entry node rather than a single phone icon: "gets in
 * touch" is the claim that the whole diagram rests on, and one telephone made it
 * look like a phone product. Generic line icons, not brand marks.
 */
const CHANNEL_ICONS: { icon: LucideIcon; colour: string }[] = [
  { icon: Phone, colour: '#6E7BF2' },
  { icon: MessageCircle, colour: '#25D366' },
  { icon: Instagram, colour: '#E1306C' },
  { icon: Facebook, colour: '#0084FF' },
  { icon: Globe, colour: '#A855F7' },
  { icon: Mail, colour: '#F59E0B' },
];

function MapTile({
  layout, x, y, width, icon: Icon, label, note, system, accent, rtl, channels,
  flashes = [], tone,
}: {
  layout: Layout; x: number; y: number; width: number; icon: LucideIcon;
  label: string; note?: string; system?: string; accent?: boolean; rtl: boolean;
  channels?: boolean; flashes?: number[]; tone?: string;
}) {
  /* Geometry in percent and type in container query units, both against the
     canvas — so the diagram holds its proportions whether it has the full page,
     half of it, or a phone. Fixed pixels only worked at one size: tiles started
     colliding the moment the canvas narrowed. */
  return (
    <div
      className="v4-map-tile"
      style={{
        position: 'absolute',
        left: `${(x / layout.w) * 100}%`,
        top: `${(y / layout.h) * 100}%`,
        transform: `translate(-50%, -50%)${rtl ? ' scaleX(-1)' : ''}`,
        width: `${(width / layout.w) * 100}%`,
        padding: 'clamp(8px, 2.6cqw, 13px) clamp(9px, 2.9cqw, 15px)',
        borderRadius: 'clamp(9px, 2.6cqw, 14px)',
        background: accent
          ? 'rgba(110,123,242,0.14)'
          : tone
            ? `linear-gradient(150deg, ${tone}1A 0%, rgba(20,20,24,0.96) 70%)`
            : 'rgba(20,20,24,0.96)',
        border: `1px solid ${accent ? 'rgba(110,123,242,0.42)' : tone ? `${tone}3D` : C.line}`,
        boxShadow: tone
          ? `0 24px 50px -30px ${tone}66`
          : '0 18px 40px -24px rgba(0,0,0,0.9)',
      }}
    >
      {/* One overlay per flash, rather than animating the tile itself: the tile
          sets border and box-shadow inline, which a stylesheet cannot override,
          and the follow-up node needs to light three times per cycle. */}
      {flashes.map((delay, i) => (
        <span
          key={i}
          aria-hidden
          className="v4-flash"
          style={{ borderRadius: 'inherit', animationDelay: `${delay}s` }}
        />
      ))}
      {channels ? (
        <span
          style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            gap: 'clamp(3px, 0.8cqw, 5px)', marginBottom: 'clamp(5px, 1.8cqw, 9px)',
          }}
        >
          {CHANNEL_ICONS.map(({ icon: Ch, colour }, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 'clamp(15px, 3.4cqw, 20px)', height: 'clamp(15px, 3.4cqw, 20px)',
                borderRadius: 6, background: `${colour}1F`, color: colour,
              }}
            >
              <Ch size={11} strokeWidth={2} />
            </span>
          ))}
        </span>
      ) : (
        <span
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 'clamp(20px, 5cqw, 26px)', height: 'clamp(20px, 5cqw, 26px)',
            borderRadius: 8, marginBottom: 'clamp(5px, 1.8cqw, 9px)',
            background: accent ? C.accent : 'rgba(255,255,255,0.07)',
            color: accent ? C.white : C.accent,
          }}
        >
          <Icon size={13} strokeWidth={2} />
        </span>
      )}
      <div style={{ fontSize: 'clamp(11px, 2.7cqw, 13.5px)', fontWeight: 600, lineHeight: 1.3 }}>
        {label}
      </div>
      {note && (
        <div
          style={{
            fontSize: 'clamp(9.5px, 2.3cqw, 11.5px)', lineHeight: 1.4,
            color: C.muted, marginTop: 'clamp(3px, 1cqw, 5px)',
          }}
        >
          {note}
        </div>
      )}
      {system && (
        /* What lands in the business's own tools. Set apart by a hairline and
           the mono face so it reads as machinery rather than more prose. */
        <div
          style={{
            marginTop: 'clamp(6px, 1.6cqw, 9px)',
            paddingTop: 'clamp(5px, 1.4cqw, 8px)',
            borderTop: `1px solid ${C.line}`,
            fontFamily: mono,
            fontSize: 'clamp(8px, 1.9cqw, 10px)',
            lineHeight: 1.5,
            color: C.faint,
          }}
        >
          {system}
        </div>
      )}
    </div>
  );
}

function FlowMap({
  outcomes, layout, className,
}: {
  outcomes: { label: string; note: string; system: string }[];
  layout: Layout;
  className: string;
}) {
  const { flow } = useHalaCopy();
  const rtl = dirOf(useHalaLocale()) === 'rtl';
  const [a, b, cc] = outcomes;
  const tiles = [
    {
      pos: layout.contact, icon: Phone, label: flow.map.contact,
      note: flow.map.contactNote, accent: false, channels: true,
      flashes: layout.nodes.contact,
    },
    {
      pos: layout.answer, icon: Sparkles, label: flow.map.answer, accent: true,
      flashes: layout.nodes.answer,
    },
  ];
  const outIcons = [CalendarCheck, ShoppingBag, MessageCircle];
  /* One colour per branch, taken from the feature bands so the page keeps a
     single palette. Five identical dark tiles made the fork look like a list;
     tinting them says "these are three different endings" before a word is
     read. */
  const outTones = ['#6E7BF2', '#F59E0B', '#25D366'];

  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', maxWidth: layout.w, margin: '0 auto' }}
    >
      <div
        className="v4-map-canvas"
        style={{
          position: 'relative', aspectRatio: `${layout.w} / ${layout.h}`,
          containerType: 'inline-size',
        }}
      >
        <svg
          viewBox={`0 0 ${layout.w} ${layout.h}`}
          width="100%" height="100%" aria-hidden
          style={{ position: 'absolute', inset: 0 }}
        >
          {/* Two layers per connector: the dashed route, always visible, and a
              bright segment that traces it when its turn comes round. One
              segment is lit at a time, so the eye follows a single journey
              instead of seven simultaneous loops. */}
          {layout.paths.map((d, i) => (
            <path
              key={`base-${i}`}
              d={d}
              fill="none"
              stroke={MAP_STROKE}
              strokeWidth={1.8}
              strokeDasharray="5 5"
              strokeLinecap="round"
            />
          ))}
          {layout.paths.map((d, i) => (
            <path
              key={`trace-${i}`}
              className="v4-trace"
              d={d}
              pathLength={1}
              fill="none"
              stroke={C.accent}
              strokeWidth={2.6}
              strokeLinecap="round"
              style={{ animationDelay: `${layout.seq[i] * 0.8}s` }}
            />
          ))}
        </svg>

        {layout.columnsAt?.map((cx, i) => (
          <div
            key={i}
            className="v4-map-tile"
            style={{
              position: 'absolute',
              left: `${(cx / layout.w) * 100}%`,
              top: `${((layout.columnsY ?? 26) / layout.h) * 100}%`,
              transform: `translate(-50%, -50%)${rtl ? ' scaleX(-1)' : ''}`,
              whiteSpace: 'nowrap',
              fontFamily: mono,
              fontSize: 'clamp(8px, 1.05cqw, 10.5px)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: C.faint,
            }}
          >
            {flow.map.columns[i]}
          </div>
        ))}

        {tiles.map((t) => (
          <MapTile
            key={t.label}
            layout={layout}
            x={t.pos[0]} y={t.pos[1]} width={t.pos[2]}
            icon={t.icon} label={t.label} note={t.note} accent={t.accent}
            channels={t.channels} flashes={t.flashes} rtl={rtl}
          />
        ))}

        {[a, b, cc].map((o, i) => (
          <MapTile
            key={o.label}
            layout={layout}
            x={layout.outcomes[i][0]} y={layout.outcomes[i][1]} width={layout.outcomes[i][2]}
            icon={outIcons[i]} label={o.label} note={o.note} system={o.system}
            tone={outTones[i]} flashes={layout.nodes.outcomes[i]} rtl={rtl}
          />
        ))}

        <MapTile
          layout={layout}
          x={layout.follow[0]} y={layout.follow[1]} width={layout.follow[2]}
          icon={Check} label={flow.map.follow} note={flow.map.followNote} accent
          flashes={layout.nodes.follow} rtl={rtl}
        />

        {/* Badge on the qualifying step — the memory claim, made concrete. */}
        <div
          className="v4-map-tile"
          style={{
            position: 'absolute',
            left: `${(layout.badge[0] / layout.w) * 100}%`,
            top: `${(layout.badge[1] / layout.h) * 100}%`,
            transform: `translate(-50%, -50%)${rtl ? ' scaleX(-1)' : ''}`,
            whiteSpace: 'nowrap',
            padding: 'clamp(4px, 1.1cqw, 5px) clamp(8px, 2cqw, 10px)', borderRadius: 99,
            background: 'rgba(62,207,142,0.10)', border: '1px solid rgba(62,207,142,0.30)',
            fontFamily: mono, fontSize: 'clamp(8px, 1.9cqw, 10px)',
            letterSpacing: '0.06em', color: C.live,
          }}
        >
          {flow.map.badge}
        </div>
      </div>
    </div>
  );
}


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

      <FlowMap outcomes={industry.flow} layout={WIDE} className="v4-map-wide" />
      <FlowMap outcomes={industry.flow} layout={TALL} className="v4-map-tall" />


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

/* ── Versus the alternatives ──────────────────────────────────────────── */

/**
 * Argues against what the owner is doing today rather than asserting outcomes.
 *
 * Every competitor leads with numbers — calls handled, hours saved, satisfaction
 * scores. With no customers yet we have none of those, and inventing them is not
 * an option. This section needs no proof at all: the reader recognises their own
 * situation in one of the three columns, which does the same work.
 */
export function Versus() {
  const c = useHalaCopy();

  return (
    <section style={{ ...wrap, padding: 'clamp(56px, 7vw, 100px) clamp(20px, 5vw, 48px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 52px)' }}>
        <span
          style={{
            fontFamily: mono, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: C.faint,
          }}
        >
          {c.versus.eyebrow}
        </span>
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
            lineHeight: 1.06, letterSpacing: tracking.heading,
            margin: '18px auto 0', maxInlineSize: '20ch',
          }}
        >
          {c.versus.heading}
        </h2>
      </div>

      <div className="v4-versus" style={{ display: 'grid', gap: 12 }}>
        {c.versus.options.map((o) => (
          <div
            key={o.title}
            style={{
              background: C.panel, border: `1px solid ${C.line}`,
              borderRadius: 16, padding: 'clamp(20px, 2.2vw, 26px)',
            }}
          >
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: 16.5, letterSpacing: tracking.ui }}>
              {o.title}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 14 }}>
              {o.points.map((pt) => (
                <span key={pt} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <X size={13} strokeWidth={2.6} style={{ marginTop: 3, flexShrink: 0, color: C.faint }} />
                  <span style={{ fontSize: 13.5, lineHeight: 1.55, color: C.muted }}>{pt}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 12, borderRadius: 18,
          padding: 'clamp(22px, 2.6vw, 30px)',
          background: 'rgba(110,123,242,0.10)',
          border: `1px solid ${C.accent}`,
          boxShadow: '0 40px 90px -60px rgba(110,123,242,0.75)',
        }}
      >
        <div style={{ fontFamily: display, fontWeight: 600, fontSize: 19, letterSpacing: tracking.ui }}>
          {c.versus.answer.title}
        </div>
        <div className="v4-versus-yes" style={{ display: 'grid', gap: 10, marginTop: 16 }}>
          {c.versus.answer.points.map((pt) => (
            <span key={pt} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
              <Check size={14} strokeWidth={2.6} style={{ marginTop: 3, flexShrink: 0, color: C.accent }} />
              <span style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.88)' }}>{pt}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Integrations ─────────────────────────────────────────────────────── */

export function Integrations() {
  const c = useHalaCopy();

  return (
    <section style={{ ...wrap, padding: '0 clamp(20px, 5vw, 48px) clamp(56px, 7vw, 100px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 3.4vw, 44px)' }}>
        <span
          style={{
            fontFamily: mono, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: C.faint,
          }}
        >
          {c.integrations.eyebrow}
        </span>
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(1.7rem, 3.6vw, 2.5rem)',
            lineHeight: 1.08, letterSpacing: tracking.heading,
            margin: '18px auto 0', maxInlineSize: '22ch',
          }}
        >
          {c.integrations.heading}
        </h2>
        <p style={{ margin: '16px auto 0', fontSize: 15.5, color: C.muted, maxInlineSize: '52ch' }}>
          {c.integrations.sub}
        </p>
      </div>

      <div className="v4-integrations" style={{ display: 'grid', gap: 12 }}>
        {c.integrations.groups.map((g) => (
          <div
            key={g.label}
            style={{
              background: C.panel, border: `1px solid ${C.line}`,
              borderRadius: 14, padding: '16px 18px',
            }}
          >
            <Meta>{g.label}</Meta>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 11 }}>
              {g.items.map((i) => (
                <span key={i} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.86)' }}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p style={{ margin: '20px auto 0', textAlign: 'center', fontSize: 14, color: C.faint }}>
        {c.integrations.note}
      </p>
    </section>
  );
}

/* ── Languages ────────────────────────────────────────────────────────── */

/**
 * The one claim no competitor on the market makes. Slang, Rosie and Goodcall are
 * all English only.
 *
 * Note this is about what the employee SPEAKS to callers, which is a different
 * thing from which languages this website is published in.
 */
export function Languages() {
  const c = useHalaCopy();

  return (
    <section style={{ ...wrap, padding: '0 clamp(20px, 5vw, 48px) clamp(56px, 7vw, 100px)' }}>
      <div
        style={{
          borderRadius: 22, border: `1px solid ${C.line}`,
          padding: 'clamp(28px, 3.6vw, 48px)',
          background: 'linear-gradient(140deg, rgba(110,123,242,0.14) 0%, rgba(12,12,15,0.6) 62%)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              fontFamily: mono, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: C.faint,
            }}
          >
            {c.languages.eyebrow}
          </span>
          <h2
            style={{
              fontFamily: display, fontWeight: 600,
              fontSize: 'clamp(1.7rem, 3.6vw, 2.5rem)',
              lineHeight: 1.08, letterSpacing: tracking.heading,
              margin: '18px auto 0', maxInlineSize: '20ch',
            }}
          >
            {c.languages.heading}
          </h2>
          <p style={{ margin: '16px auto 0', fontSize: 15.5, color: C.muted, maxInlineSize: '50ch' }}>
            {c.languages.sub}
          </p>
        </div>

        <div className="v4-langs" style={{ display: 'grid', gap: 12, marginTop: 'clamp(24px, 3vw, 36px)' }}>
          {c.languages.items.map((l) => (
            <div
              key={l.name}
              style={{
                background: 'rgba(8,8,10,0.5)', border: `1px solid ${C.line}`,
                borderRadius: 14, padding: '20px', textAlign: 'center',
              }}
            >
              <div
                lang={l.native === 'العربية' ? 'ar' : undefined}
                dir={l.native === 'العربية' ? 'rtl' : undefined}
                style={{ fontFamily: display, fontWeight: 600, fontSize: 20, letterSpacing: tracking.ui }}
              >
                {l.native}
              </div>
              <div style={{ fontSize: 13, color: C.accent, marginTop: 4 }}>{l.name}</div>
              <p style={{ margin: '10px 0 0', fontSize: 13.5, lineHeight: 1.55, color: C.muted }}>
                {l.line}
              </p>
            </div>
          ))}
        </div>

        <p style={{ margin: '22px auto 0', textAlign: 'center', fontSize: 14.5, color: '#C3CAFF' }}>
          {c.languages.note}
        </p>
      </div>
    </section>
  );
}

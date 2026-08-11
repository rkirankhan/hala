import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  Check,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Repeat,
  Scissors,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  Utensils,
  UtensilsCrossed,
  Workflow,
  X,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { C, display, mono, sans, tracking, wrap } from './tokens';
import { dirOf, useHalaCopy, useHalaLocale } from './i18n';
import { useIndustry } from './industry';
import { HalaMark } from './HalaMark';

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
          lineHeight: 1.14,
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

/**
 * Three capability cards.
 *
 * Was three full-width bands, each with its own chat mockup. Three problems: the
 * page already showed a conversation in the hero and another in the industry
 * showcase, so this was the third and fourth; the alternating left-right layout
 * was motion without meaning; and it borrowed the flow map's three colours to
 * mean something entirely different, which quietly broke the one place colour
 * carries information.
 *
 * Now equal cards, neutral panels, colour only on the icon. Roughly a third of
 * the height, and the map keeps colour to itself.
 */
export function FeatureBands() {
  const c = useHalaCopy();

  const cards = [
    { icon: Phone, tone: '#6E7BF2', copy: c.bands.voice },
    { icon: MessageCircle, tone: '#25D366', copy: c.bands.chat },
    { icon: Repeat, tone: '#F59E0B', copy: c.bands.automations },
  ];

  return (
    <section style={{ ...wrap, padding: '0 clamp(20px, 5vw, 48px) clamp(56px, 7vw, 100px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 3.4vw, 44px)' }}>
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(1.7rem, 3.6vw, 2.5rem)',
            lineHeight: 1.14, letterSpacing: tracking.heading,
            margin: 0, maxInlineSize: '22ch', marginInline: 'auto',
          }}
        >
          {c.bands.heading}
        </h2>
      </div>

      <div className="v4-caps" style={{ display: 'grid', gap: 12 }}>
        {cards.map(({ icon: Icon, tone, copy }) => (
          <div
            key={copy.eyebrow}
            style={{
              display: 'flex', flexDirection: 'column',
              background: C.panel, border: `1px solid ${C.line}`,
              borderRadius: 18, padding: 'clamp(22px, 2.6vw, 30px)',
            }}
          >
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 34, height: 34, borderRadius: 10,
                background: `${tone}1F`, color: tone,
              }}
            >
              <Icon size={16} strokeWidth={2} />
            </span>

            <div style={{ marginTop: 16 }}>
              <Meta>{copy.eyebrow}</Meta>
            </div>

            <h3
              style={{
                fontFamily: display, fontWeight: 600,
                fontSize: 'clamp(1.15rem, 1.9vw, 1.4rem)',
                lineHeight: 1.18, letterSpacing: tracking.ui,
                margin: '10px 0 0', maxInlineSize: '18ch',
              }}
            >
              {copy.title}
            </h3>

            <p style={{ margin: '12px 0 0', fontSize: 14.5, lineHeight: 1.6, color: C.muted }}>
              {copy.body}
            </p>

            {/* Same mono treatment the flow map uses for what lands in your
                systems, so the two sections rhyme instead of competing. */}
            <div
              style={{
                marginTop: 'auto', paddingTop: 18,
                fontFamily: mono, fontSize: 10.5, letterSpacing: '0.04em', color: tone,
              }}
            >
              {copy.metaBottom}
            </div>
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
export const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  restaurants: UtensilsCrossed,
  takeaways: ShoppingBag,
  salons: Scissors,
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
          lineHeight: 1.14, letterSpacing: tracking.heading,
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
            lineHeight: 1.14, letterSpacing: tracking.heading, margin: 0,
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

            {/* The tier names no longer describe themselves — "Full Service"
                says less than "Professional" pretended to — so each carries a
                line saying what changes at that step. */}
            <p
              style={{
                margin: '-4px 0 0', fontSize: 14.5, lineHeight: 1.45,
                color: p.hero ? '#C3CAFF' : C.white, maxInlineSize: '26ch',
              }}
            >
              {p.line}
            </p>

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

            {/* Pinned to the bottom by the auto margin, so the three buttons
                sit on one line however far the feature lists run. Solid on the
                chosen tier, outlined on the others — three equally loud
                buttons would undo the work the highlight does. */}
            <Link
              to={c.booking.slug}
              style={{
                marginTop: 'auto',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '13px 18px', borderRadius: 10,
                background: p.hero ? C.accent : 'transparent',
                border: `1px solid ${p.hero ? C.accent : C.line}`,
                color: p.hero ? C.white : 'rgba(255,255,255,0.88)',
                fontWeight: 600, fontSize: 14.5, textDecoration: 'none',
              }}
            >
              {c.pricing.cta} <ArrowRight size={15} strokeWidth={2.4} />
            </Link>
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
            lineHeight: 1.14, letterSpacing: tracking.heading,
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
            lineHeight: 1.14, letterSpacing: tracking.display,
            margin: 0, maxInlineSize: '18ch', marginInline: 'auto',
          }}
        >
          {c.closing.heading}
        </h2>
        <p style={{ margin: '18px auto 0', fontSize: 16, color: 'rgba(255,255,255,0.72)', maxInlineSize: '44ch' }}>
          {c.closing.body}
        </p>
        {/* No button here for now. "Test Hala" promises a conversation with the
            agent, and the only thing behind it today is a calendar — so it went
            rather than get relabelled into a third "Book a demo". The copy
            (c.closing.cta) is still in all three locale files, ready for
            whenever the live agent is wired up. */}
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
        <HalaMark size={30} />
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
 * One colour per branch, shared by the tiles and the lines that feed them, so a
 * connector is read as belonging to its destination rather than as generic
 * wiring. Taken from the feature bands rather than adding new colours.
 */
const BRANCH_TONES = ['#6E7BF2', '#F59E0B', '#25D366'];

/** Trunk sections that belong to no single branch. */
const MAP_ACCENT = '#6E7BF2';

/** Connectors sit at 55% so they carry across the page without shouting. */
const stroke = (tone: string) => `${tone}8C`;

/**
 * Arrowhead ids have to be unique per document, and both layouts render at once
 * with one hidden — so the map's own class name namespaces them. Without that
 * the second SVG's markers would silently win.
 */
const arrowId = (ns: string, tone: string) => `${ns}-arrow-${tone.replace('#', '')}`;

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
  /** Colour per path, index-matched to `paths`. */
  pathTones: string[];
  /**
   * Which paths get an arrowhead. Only segments that terminate at a node do —
   * a trunk that carries several branches should not appear to point at
   * anything, or the arrow lands in empty space.
   */
  arrows: boolean[];
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
   * All three outcomes feed the follow-up, including the enquiry.
   *
   * Worth being clear what that means, because the follow-up node covers several
   * things and not all of them apply to every branch. An enquiry that goes quiet
   * gets nudged — that is the promise the hero makes and it is the right
   * behaviour. A review request is not: only someone who actually became a
   * customer can review the visit, and inviting anyone else breaches Google's
   * policies. Same node, different subset per branch.
   */
  paths: [
    'M 210 290 L 250 290',
    'M 390 290 C 460 290, 460 100, 510 100',
    'M 390 290 L 510 290',
    'M 322 334 C 322 420, 300 470, 341 500',
    'M 780 100 C 834 100, 838 262, 862 266',
    'M 780 290 L 862 290',
    'M 605 505 C 730 505, 802 400, 862 314',
  ],
  /* Each branch keeps its colour the whole way: out to its outcome and on to
     the follow-up, so the eye can trace one route through the fork. */
  pathTones: [
    MAP_ACCENT,
    BRANCH_TONES[0],
    BRANCH_TONES[1],
    BRANCH_TONES[2],
    BRANCH_TONES[0],
    BRANCH_TONES[1],
    BRANCH_TONES[2],
  ],
  arrows: [true, true, true, true, true, true, true],
  seq: [0, 1, 2, 3, 4, 5, 6],
  nodes: {
    contact: [0],
    answer: [0.6],
    outcomes: [[1.4], [2.2], [3.0]],
    follow: [3.8, 4.6, 5.4],
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
    /* Pulled left and down, out of the column the other two sit in. It is the
       one branch that does not carry on to the follow-up, and standing it apart
       says so before the missing connector does — while using the empty space
       the fork left in the bottom-left corner. */
    [472, 500, 262],
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
    'M 70 452 L 70 1350',
    'M 70 540 L 158 540',
    'M 70 810 L 158 810',
    'M 70 1080 L 158 1080',
    'M 70 1350 L 148 1350',
  ],
  /* The trunk runs the full height and stubs sideways into every node,
     follow-up included. It previously stopped short and curved up into the
     follow-up from below, which left the arrowhead pointing away from the tile
     it was meant to enter — and put a second arrowhead in mid-air where the
     trunk ended. */
  arrows: [true, false, false, true, true, true, true],
  /* The trunk carries every branch, so it stays neutral; only the stubs into
     each outcome take that outcome's colour. */
  pathTones: [
    MAP_ACCENT,
    MAP_ACCENT,
    MAP_ACCENT,
    BRANCH_TONES[0],
    BRANCH_TONES[1],
    BRANCH_TONES[2],
    MAP_ACCENT,
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
export const CHANNEL_ICONS: { icon: LucideIcon; colour: string }[] = [
  { icon: Phone, colour: '#6E7BF2' },
  { icon: MessageCircle, colour: '#25D366' },
  { icon: Instagram, colour: '#E1306C' },
  { icon: Facebook, colour: '#0084FF' },
  { icon: Globe, colour: '#A855F7' },
  { icon: Mail, colour: '#F59E0B' },
];

function MapTile({
  layout, x, y, width, icon: Icon, label, note, system, accent, mark, rtl, channels,
  flashes = [], tone,
}: {
  layout: Layout; x: number; y: number; width: number; icon: LucideIcon;
  label: string; note?: string; system?: string; accent?: boolean; mark?: boolean;
  rtl: boolean; channels?: boolean; flashes?: number[]; tone?: string;
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
        /* Enough to lift the tile off the canvas, not enough to read as a glow
           — the coloured bloom under the amber and green tiles was competing
           with the connector lines it was supposed to be echoing. */
        boxShadow: tone
          ? `0 14px 30px -28px ${tone}59`
          : '0 12px 26px -24px rgba(0,0,0,0.8)',
        textAlign: !note && !system ? 'center' : 'start',
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
      {/* Tiles carrying only an icon and a label centre; ones with a note and a
          system line stay left-aligned, because centred body copy is harder to
          read the moment it wraps. */}
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
      ) : mark ? (
        /* The accent tile is Hala itself, so it wears the mark rather than a
           generic sparkle in a box. Sized by the class rule, not the component's
           `size` prop, so it scales with the canvas like everything else here. */
        <span
          className="v4-map-mark"
          style={{
            display: 'inline-flex',
            width: 'clamp(22px, 5.6cqw, 28px)', height: 'clamp(22px, 5.6cqw, 28px)',
            marginBottom: 'clamp(5px, 1.8cqw, 9px)',
          }}
        >
          <HalaMark size={28} title="" />
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
      pos: layout.answer, icon: Sparkles, label: flow.map.answer, accent: true, mark: true,
      flashes: layout.nodes.answer,
    },
  ];
  const outIcons = [CalendarCheck, ShoppingBag, MessageCircle];
  /* One colour per branch, taken from the feature bands so the page keeps a
     single palette. Five identical dark tiles made the fork look like a list;
     tinting them says "these are three different endings" before a word is
     read. */
  const outTones = BRANCH_TONES;

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
          <defs>
            {[...new Set(layout.pathTones)].map((tone) => (
              <marker
                key={tone}
                id={arrowId(className, tone)}
                viewBox="0 0 10 10"
                refX={8}
                refY={5}
                markerWidth={4.5}
                markerHeight={4.5}
                orient="auto-start-reverse"
              >
                <path
                  d="M 1 1.5 L 8 5 L 1 8.5"
                  fill="none"
                  stroke={tone}
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            ))}
          </defs>

          {/* Two layers per connector: the dashed route, always visible, and a
              bright segment that traces it when its turn comes round. One
              segment is lit at a time, so the eye follows a single journey
              instead of seven simultaneous loops. */}
          {layout.paths.map((d, i) => (
            <path
              key={`base-${i}`}
              d={d}
              fill="none"
              stroke={stroke(layout.pathTones[i])}
              strokeWidth={1.8}
              strokeDasharray="5 5"
              strokeLinecap="round"
              markerEnd={
                layout.arrows[i] ? `url(#${arrowId(className, layout.pathTones[i])})` : undefined
              }
            />
          ))}
          {layout.paths.map((d, i) => (
            <path
              key={`trace-${i}`}
              className="v4-trace"
              d={d}
              pathLength={1}
              fill="none"
              stroke={layout.pathTones[i]}
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
            icon={t.icon} label={t.label} note={t.note} accent={t.accent} mark={t.mark}
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
  const { key, setKey, industry } = useIndustry();

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
            lineHeight: 1.14, letterSpacing: tracking.heading,
            margin: '18px auto 0', maxInlineSize: '18ch',
          }}
        >
          {c.flow.heading}
        </h2>
        <p style={{ margin: '16px auto 0', fontSize: 16, color: C.muted, maxInlineSize: '52ch' }}>
          {c.flow.sub}
        </p>
      </div>

      {/* A quick way to change the map without scrolling past it to the cards.
          Both write to the same selection, so whichever you use the other
          follows — see IndustryProvider. */}
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8,
          marginBottom: 'clamp(20px, 2.6vw, 30px)',
        }}
      >
        {c.showcase.items.map((i) => {
          const on = i.key === key;
          const Icon = INDUSTRY_ICONS[i.key];
          return (
            <button
              key={i.key}
              onClick={() => setKey(i.key)}
              aria-pressed={on}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 16px', borderRadius: 999, cursor: 'pointer',
                font: 'inherit', fontFamily: sans, fontSize: 13.5, fontWeight: 500,
                background: on ? 'rgba(110,123,242,0.16)' : C.panel,
                border: `1px solid ${on ? 'rgba(110,123,242,0.55)' : C.line}`,
                color: on ? '#C3CAFF' : C.white,
              }}
            >
              {Icon && <Icon size={15} strokeWidth={2} style={{ flexShrink: 0 }} />}
              {i.label}
            </button>
          );
        })}
      </div>

      <FlowMap outcomes={industry.flow} layout={WIDE} className="v4-map-wide" />
      <FlowMap outcomes={industry.flow} layout={TALL} className="v4-map-tall" />


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
            lineHeight: 1.14, letterSpacing: tracking.heading,
            margin: '18px auto 0', maxInlineSize: '20ch',
          }}
        >
          {c.versus.heading}
        </h2>
      </div>

      {/* Three dim boxes and a bright one below them read as four options of
          equal weight. Stacking the alternatives into a single muted column
          beside the answer makes it a comparison instead of a list: a wall of
          things that go wrong on one side, one lit panel on the other. */}
      <div className="v4-versus" style={{ display: 'grid', gap: 'clamp(12px, 1.4vw, 18px)', alignItems: 'stretch' }}>
        <div
          style={{
            background: C.panel, border: `1px solid ${C.line}`,
            borderRadius: 18, overflow: 'hidden',
          }}
        >
          {c.versus.options.map((o, i) => (
            <div
              key={o.title}
              style={{
                padding: 'clamp(18px, 2vw, 24px) clamp(20px, 2.2vw, 26px)',
                borderTop: i === 0 ? 'none' : `1px solid ${C.line}`,
                display: 'grid', gap: 10,
              }}
            >
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: display, fontWeight: 600, fontSize: 16.5,
                  letterSpacing: tracking.ui, color: C.muted,
                }}
              >
                {/* The number keeps the three readable as one enumerated
                    argument — "three bad answers" — now that they share a box. */}
                <span
                  style={{
                    fontFamily: mono, fontSize: 11, color: C.faint,
                    border: `1px solid ${C.line}`, borderRadius: 6,
                    padding: '2px 7px', flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {o.title}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 22px' }}>
                {o.points.map((pt) => (
                  <span key={pt} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', maxInlineSize: '34ch' }}>
                    <X size={13} strokeWidth={2.6} style={{ marginTop: 3, flexShrink: 0, color: C.faint }} />
                    <span style={{ fontSize: 13.5, lineHeight: 1.55, color: C.faint }}>{pt}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            borderRadius: 18,
            padding: 'clamp(24px, 2.8vw, 34px)',
            background: 'rgba(110,123,242,0.10)',
            border: `1px solid ${C.accent}`,
            boxShadow: '0 40px 90px -60px rgba(110,123,242,0.75)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <HalaMark size={22} />
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: 20, letterSpacing: tracking.ui }}>
              {c.versus.answer.title}
            </div>
          </div>
          <div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
            {c.versus.answer.points.map((pt) => (
              <span key={pt} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Check size={14} strokeWidth={2.6} style={{ marginTop: 3, flexShrink: 0, color: C.accent }} />
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.9)' }}>{pt}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

/* ── Integrations ─────────────────────────────────────────────────────── */

/**
 * Integrations as one panel of labelled rows rather than six columns of plain
 * text.
 *
 * Six narrow columns made it a table to read; rows with a category on the
 * reading-start side and the tools as chips make it a thing to scan. The chips
 * also give the section some texture — it was the flattest block on the page.
 *
 * No brand marks: these are trademarked logos we have no licence to reproduce,
 * and a wordmark in our own type is both safer and more consistent.
 */
/**
 * A glyph per tool. These are functional icons, not brand logos: those are
 * trademarked marks we have no licence to reproduce, and a row of mismatched
 * third-party logos would fight the design anyway. Same approach the channel
 * icons take.
 */
const TOOL_ICONS: Record<string, LucideIcon> = {
  gcal: CalendarDays,
  outlook: Mail,
  calendly: CalendarClock,
  opentable: UtensilsCrossed,
  sevenrooms: Utensils,
  resdiary: BookOpen,
  ghl: Workflow,
  hubspot: Users,
  pipedrive: TrendingUp,
  whatsapp: MessageCircle,
  instagram: Instagram,
  messenger: Facebook,
};

const INTEGRATION_ICONS: Record<string, LucideIcon> = {
  calendars: CalendarCheck,
  food: UtensilsCrossed,
  crm: Users,
  messaging: MessageCircle,
};

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
            lineHeight: 1.14, letterSpacing: tracking.heading,
            margin: '18px auto 0', maxInlineSize: '22ch',
          }}
        >
          {c.integrations.heading}
        </h2>
        <p style={{ margin: '16px auto 0', fontSize: 15.5, color: C.muted, maxInlineSize: '52ch' }}>
          {c.integrations.sub}
        </p>
      </div>

      <div
        style={{
          border: `1px solid ${C.line}`, borderRadius: 20, overflow: 'hidden',
          background: 'linear-gradient(160deg, rgba(110,123,242,0.07) 0%, rgba(12,12,15,0.5) 55%)',
        }}
      >
        {c.integrations.groups.map((g, i) => {
          const Icon = INTEGRATION_ICONS[g.key];
          return (
            <div
              key={g.key}
              className="v4-int-row"
              style={{
                display: 'grid', alignItems: 'center',
                gap: 'clamp(10px, 1.6vw, 24px)',
                padding: 'clamp(16px, 1.9vw, 22px) clamp(18px, 2.2vw, 28px)',
                borderTop: i === 0 ? 'none' : `1px solid ${C.line}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, minWidth: 0 }}>
                <span
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 30, height: 30, borderRadius: 9, flexShrink: 0,
                    background: 'rgba(110,123,242,0.14)', color: C.accent,
                  }}
                >
                  {Icon && <Icon size={14} strokeWidth={2} />}
                </span>
                <span
                  style={{
                    fontFamily: mono, fontSize: 10.5, letterSpacing: '0.13em',
                    textTransform: 'uppercase', color: C.muted,
                  }}
                >
                  {g.label}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.items.map((item) => {
                  const ToolIcon = TOOL_ICONS[item.key];
                  return (
                    <span
                      key={item.key}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '8px 13px', borderRadius: 9,
                        background: 'rgba(255,255,255,0.05)',
                        border: `1px solid ${C.line}`,
                        fontSize: 13.5, color: 'rgba(255,255,255,0.88)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {ToolIcon && (
                        <ToolIcon size={14} strokeWidth={1.9} style={{ color: C.muted, flexShrink: 0 }} />
                      )}
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
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
              lineHeight: 1.14, letterSpacing: tracking.heading,
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

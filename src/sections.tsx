import { useState } from 'react';
import {
  ArrowRight,
  CalendarCheck,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Check,
  Clock,
  Coffee,
  Hotel,
  PartyPopper,
  PhoneForwarded,
  Scissors,
  ShoppingBag,
  UtensilsCrossed,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { C, display, mono, sans, wrap } from './tokens';
import { useHalaCopy } from './i18n';

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
          lineHeight: 1.04,
          letterSpacing: '-0.04em',
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
          borderBottomRightRadius: out ? 4 : 13,
          borderBottomLeftRadius: out ? 13 : 4,
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
            letterSpacing: '-0.035em',
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
                  letterSpacing: '-0.03em',
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

/* ── Restaurant journey, folded in from /preview/hero ─────────────────── */

interface Intent {
  key: string;
  icon: LucideIcon;
  label: string;
  live: boolean;
  line: string;
  steps: string[];
  outcome: string;
  note?: string;
}

/** Icon and shipped-or-not are product facts; the words come from copy. Keyed so
 *  the two lists cannot drift out of order when a translator reorders anything. */
const INTENT_META: Record<string, { icon: LucideIcon; live: boolean }> = {
  book: { icon: CalendarCheck, live: true },
  menu: { icon: UtensilsCrossed, live: true },
  hours: { icon: Clock, live: true },
  groups: { icon: Users, live: true },
  other: { icon: PhoneForwarded, live: true },
  order: { icon: ShoppingBag, live: false },
};

export function Journey() {
  const c = useHalaCopy();
  const INTENTS: Intent[] = c.journey.intents.map((i) => ({
    ...i,
    icon: INTENT_META[i.key].icon,
    live: INTENT_META[i.key].live,
  }));

  const [key, setKey] = useState(INTENTS[0].key);
  const a = INTENTS.find((i) => i.key === key) ?? INTENTS[0];

  return (
    <section style={{ ...wrap, padding: 'clamp(56px, 7vw, 100px) clamp(20px, 5vw, 48px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 3.4vw, 44px)' }}>
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
            lineHeight: 1.06, letterSpacing: '-0.035em',
            margin: 0, maxInlineSize: '18ch', marginInline: 'auto',
          }}
        >
          {c.journey.heading}
        </h2>
      </div>

      <div className="v4-intents" style={{ display: 'grid', gap: 10 }}>
        {INTENTS.map((i) => {
          const on = i.key === key;
          const Icon = i.icon;
          return (
            <button
              key={i.key}
              onClick={() => setKey(i.key)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '13px 15px', borderRadius: 12, cursor: 'pointer',
                textAlign: 'left', font: 'inherit', fontFamily: sans,
                background: on ? 'rgba(110,123,242,0.16)' : C.panel,
                border: `1px ${i.live ? 'solid' : 'dashed'} ${on ? C.accent : C.line}`,
                color: on ? '#C3CAFF' : C.white,
              }}
            >
              <Icon size={16} strokeWidth={2} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 13.5, fontWeight: 500 }}>{i.label}</span>
            </button>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 12,
          background: C.panel,
          border: `1px ${a.live ? 'solid' : 'dashed'} ${C.line}`,
          borderRadius: 18,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', gap: 14,
            alignItems: 'center', justifyContent: 'space-between',
            padding: 'clamp(18px, 2.2vw, 26px)',
            borderBottom: `1px solid ${C.line}`,
          }}
        >
          <span style={{ fontSize: 'clamp(15px, 1.7vw, 19px)', lineHeight: 1.45 }}>{a.line}</span>
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 10px', borderRadius: 99,
              fontFamily: mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
              background: a.live ? 'rgba(62,207,142,0.12)' : 'rgba(255,255,255,0.06)',
              color: a.live ? C.live : C.faint,
              border: `1px solid ${a.live ? 'rgba(62,207,142,0.28)' : C.line}`,
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: 99, background: a.live ? C.live : C.faint }} />
            {a.live ? c.journey.liveLabel : c.journey.scopedLabel}
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 'clamp(18px, 2.2vw, 26px)' }}>
          {a.steps.map((s, i) => (
            <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '9px 13px', borderRadius: 10,
                  background: C.inset, border: `1px solid ${C.line}`,
                  fontSize: 13, color: 'rgba(255,255,255,0.88)',
                }}
              >
                <span style={{ fontFamily: mono, fontSize: 10, color: C.accent }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s}
              </span>
              {i < a.steps.length - 1 && (
                <span className="v4-step-arrow" style={{ color: C.accent, fontSize: 13 }}>→</span>
              )}
            </span>
          ))}
        </div>

        <div
          style={{
            padding: 'clamp(18px, 2.2vw, 26px)',
            borderTop: `1px solid ${C.line}`,
            background: a.live ? 'rgba(110,123,242,0.10)' : 'transparent',
          }}
        >
          <p style={{ margin: 0, fontSize: 15.5, fontWeight: 500, color: a.live ? '#C3CAFF' : C.muted }}>
            {a.outcome}
          </p>
          {a.note && (
            <p style={{ margin: '10px 0 0', fontSize: 13, color: C.faint, maxInlineSize: '62ch' }}>
              {a.note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

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
          lineHeight: 1.06, letterSpacing: '-0.035em',
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
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em' }}>
              {s.t}
            </div>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: C.muted }}>{s.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Industries, folded in from /preview/hero ─────────────────────────── */

const VERTICAL_ICONS: LucideIcon[] = [
  UtensilsCrossed,
  ShoppingBag,
  Coffee,
  PartyPopper,
  Hotel,
  Scissors,
];

export function Industries() {
  const c = useHalaCopy();
  const VERTICALS = c.industries.items.map((name, i) => ({ icon: VERTICAL_ICONS[i], name }));

  return (
    <section style={{ ...wrap, padding: '0 clamp(20px, 5vw, 48px) clamp(56px, 7vw, 100px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(26px, 3vw, 40px)' }}>
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)',
            lineHeight: 1.08, letterSpacing: '-0.035em',
            margin: 0, maxInlineSize: '22ch', marginInline: 'auto',
          }}
        >
          {c.industries.heading}
        </h2>
      </div>
      <div className="v4-verticals" style={{ display: 'grid', gap: 10 }}>
        {VERTICALS.map(({ icon: Icon, name }) => (
          <div
            key={name}
            style={{
              display: 'flex', alignItems: 'center', gap: 11,
              padding: '14px 16px', borderRadius: 12,
              background: C.panel, border: `1px solid ${C.line}`,
              fontSize: 14,
            }}
          >
            <Icon size={16} strokeWidth={2} style={{ color: C.accent, flexShrink: 0 }} />
            {name}
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
            lineHeight: 1.06, letterSpacing: '-0.035em', margin: 0,
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
              <span style={{ fontFamily: display, fontWeight: 600, fontSize: 'clamp(2rem,3.2vw,2.6rem)', letterSpacing: '-0.04em' }}>
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
            lineHeight: 1.1, letterSpacing: '-0.03em',
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
            lineHeight: 1.04, letterSpacing: '-0.04em',
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
            letterSpacing: '-0.02em',
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

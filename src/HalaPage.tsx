import { ArrowRight, Phone } from 'lucide-react';
import { C, display, mono, sans, tracking, wrap } from './tokens';
import { useHalaMeta } from './useHalaMeta';
import { Link } from 'react-router-dom';
import { dirOf, useHalaCopy, useHalaLocale } from './i18n';
import { LanguageMenu } from './LanguageMenu';
import { HalaMark } from './HalaMark';
import { INDUSTRY_ICONS } from './sections';
import { useIndustry } from './industry';
import {
  CHANNEL_ICONS,
  ChannelList,
  ChannelOrbit,
  ClosingCTA,
  FeatureBands,
  FlowSection,
  HowItWorks,
  Integrations,
  Languages,
  Pricing,
  ProofSlot,
  StatBand,
  Versus,
} from './sections';

/**
 * Hala — the product landing page. Served at the root of hala.khaashub.com, and
 * at /hala on the agency domain so preview deploys and local dev can reach it.
 *
 * Grew out of the "option 4" prototype, the design the team signed off on.
 *
 * The five elements they called out, rebuilt for a restaurant voice agent:
 *
 *   1. Colour      near-black + aurora gradient + a single blue-indigo accent.
 *                  Accent is #6E7BF2 — the Deep Indigo already approved on the
 *                  theme switcher — so this stays consistent with that decision
 *                  rather than introducing a fourth palette.
 *   2. Hero        aurora mesh, high-contrast serif headline, device mockup with
 *                  conversation cards breaking out of the frame.
 *   3. "Why"       oversized gradient word behind scattered, tilted cards.
 *   4. Channels    every platform wired into one engine.
 *   5. FAQ         answers as a chat thread, with "Ask our AI" opening the real
 *                  agent instead of an accordion.
 *
 * Everything here is written from scratch — layout, copy and visuals. Nothing is
 * lifted from any reference site, and no third-party brand marks are reproduced: the
 * channel icons are generic line icons tinted to each platform's colour.
 */


function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: mono,
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: C.faint,
      }}
    >
      {children}
    </span>
  );
}

export function HalaPage() {
  const c = useHalaCopy();
  const { key: industryKey, setKey: setIndustry, industry, items: industries } = useIndustry();
  const locale = useHalaLocale();
  const dir = dirOf(locale);
  useHalaMeta(c, locale);

  return (
    <div
      dir={dir}
      style={{ background: C.black, color: C.white, fontFamily: sans, minHeight: '100vh' }}
    >
      <style>{`
        /* The step arrow is a glyph, not an icon, so it does not mirror on its
           own. Everything else on the page uses logical properties and flips
           with dir. */
        [dir='rtl'] .v4-step-arrow { transform: scaleX(-1); }

        /* Anchor links must clear the 68px sticky nav. Set the offset in one
           place — scroll-padding-top on the root — and keep scroll-margin-top at
           zero, so the two never stack and overshoot.
           (The overflow-x: clip rule that keeps position: sticky working now
           lives in src/index.css.) */
        html { scroll-behavior: smooth; scroll-padding-top: 84px; }
        section[id] { scroll-margin-top: 0; }

        @keyframes v4Float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        @keyframes v4Wave  { 0%,100% { height: 9px; opacity: .55; } 50% { height: 26px; opacity: 1; } }
        @keyframes v4Fade  { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        @keyframes v4Dash  { to { background-position: 200px 0; } }

        /* One connector traces at a time. pathLength=1 normalises the dash
           maths, so the same keyframes work on a 40-unit stub and a 500-unit
           curve. Seven slots at 0.8s each. */
        @keyframes v4Trace {
          0%   { stroke-dashoffset: 1; opacity: 0; }
          1%   { opacity: 1; }
          12%  { stroke-dashoffset: 0; opacity: 1; }
          14%  { stroke-dashoffset: 0; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        /* Node flash: an overlay ring that lights as the trace arrives, then
           fades. Same 5.6s cycle as the connectors, so the two stay in step. */
        @keyframes v4Flash {
          0%   { opacity: 0.85; transform: scale(1); }
          9%   { opacity: 0; transform: scale(1.02); }
          100% { opacity: 0; transform: scale(1); }
        }
        .v4-flash {
          position: absolute;
          inset: -1px;
          pointer-events: none;
          opacity: 0;
          border: 1px solid rgba(110,123,242,0.9);
          box-shadow: 0 0 20px -2px rgba(110,123,242,0.55);
          animation: v4Flash 5.6s linear infinite;
        }

        .v4-trace {
          stroke-dasharray: 0.22 1;
          stroke-dashoffset: 1;
          opacity: 0;
          animation: v4Trace 5.6s linear infinite;
        }

        .v4-hero { grid-template-columns: minmax(0,1fr); gap: 48px; }
        @media (min-width: 1040px) { .v4-hero { grid-template-columns: minmax(0,1.05fr) minmax(0,1fr); gap: 56px; } }

        /* Scattered cards need absolute positioning to read as "scattered";
           below 1040px they stack into an honest grid instead. */
        /* Numbered rows, not scattered cards — see the note in the Why block. */
        .v4-why-row { grid-template-columns: minmax(0,1fr); gap: 10px; }
        @media (min-width: 800px) {
          .v4-why-row { grid-template-columns: 88px minmax(0,0.85fr) minmax(0,1.15fr); gap: 32px; align-items: baseline; }
        }

        /* The arc only reads with room for it; narrower than this the tiles
           collide, so the plain list takes over. */
        .v4-orbit { display: none; }
        .v4-orbit-list { display: block; }
        @media (min-width: 1000px) {
          .v4-orbit { display: block; }
          .v4-orbit-list { display: none; }
        }

        .v4-faq { grid-template-columns: minmax(0,1fr); gap: 40px; }
        @media (min-width: 940px) { .v4-faq { grid-template-columns: minmax(0,0.8fr) minmax(0,1.2fr); gap: 56px; } }

        .v4-stat-cols { grid-template-columns: minmax(0,1fr); }
        @media (min-width: 860px) { .v4-stat-cols { grid-template-columns: repeat(3, minmax(0,1fr)); gap: 40px; } }

        /* Equal-height capability cards; the mono footer pins to the bottom so
           the three lines sit on one baseline regardless of body length. */
        .v4-caps { grid-template-columns: minmax(0,1fr); }
        @media (min-width: 760px) { .v4-caps { grid-template-columns: repeat(3, minmax(0,1fr)); } }

        @media (max-width: 640px) { .v4-step-arrow { display: none; } }

        .v4-steps { grid-template-columns: minmax(0,1fr); }
        @media (min-width: 640px) { .v4-steps { grid-template-columns: repeat(2, minmax(0,1fr)); } }
        @media (min-width: 1040px) { .v4-steps { grid-template-columns: repeat(4, minmax(0,1fr)); } }

        .v4-verticals { grid-template-columns: repeat(2, minmax(0,1fr)); }
        @media (min-width: 900px) { .v4-verticals { grid-template-columns: repeat(3, minmax(0,1fr)); } }

        .v4-plans { grid-template-columns: minmax(0,1fr); }
        @media (min-width: 900px) { .v4-plans { grid-template-columns: repeat(3, minmax(0,1fr)); align-items: start; } }

        /* Two layouts of the same diagram: horizontal where there is room,
           vertical on phones. Squeezing the five-node horizontal version onto a
           phone is illegible at any font size that fits. */
        .v4-map-wide { display: none; }
        .v4-map-tall { display: block; }
        @media (min-width: 900px) {
          .v4-map-wide { display: block; }
          .v4-map-tall { display: none; }
        }

        /* Mirror the diagram for Arabic. Each tile un-mirrors itself inline —
           see MapTile — because a stylesheet rule cannot override the inline
           transform the tiles need for centering. */
        [dir='rtl'] .v4-map-canvas { transform: scaleX(-1); }

        /* The alternatives take the wider column: they carry nine lines to the
           answer's four, and the answer earns its weight from contrast, not size. */
        .v4-versus { grid-template-columns: minmax(0,1fr); }
        @media (min-width: 940px) { .v4-versus { grid-template-columns: 1.25fr 1fr; } }

        /* Category label beside the chips once there is room; stacked below it
           on narrow, where a fixed label column would squeeze the chips. */
        .v4-int-row { grid-template-columns: minmax(0,1fr); }
        @media (min-width: 720px) { .v4-int-row { grid-template-columns: 220px minmax(0,1fr); } }

        /* auto-fit with a capped track and centred justification, so the row
           sits in the middle of the box whether there are two markets or three
           — the count changed once already and will again. */
        .v4-langs { grid-template-columns: minmax(0,1fr); }
        @media (min-width: 720px) {
          .v4-langs {
            grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
            justify-content: center;
          }
        }

        .v4-navlinks { display: none; }
        @media (min-width: 820px) { .v4-navlinks { display: flex; } }
      `}</style>

      {/* ── Nav ── */}
      <div
        style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: 'rgba(8,8,10,0.72)', backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', gap: 24, height: 68 }}>
          {/* Endorsed lockup: Hala carries the page, Khaas Hub signs it. The
              byline links back to the agency site — the only crossing point
              between the two properties. */}
          <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <HalaMark size={26} />
            <span style={{ fontFamily: display, fontWeight: 600, fontSize: 22, letterSpacing: tracking.ui }}>
              Hala
            </span>
            <a
              href="https://khaashub.com"
              style={{ fontSize: 12.5, color: C.faint, textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              {c.nav.byline}
            </a>
          </span>
          <span style={{ flex: 1 }} />
          <span className="v4-navlinks" style={{ gap: 28, fontSize: 14.5 }}>
            {c.nav.links.map(({ label, href }) => (
              <a key={href} href={href} style={{ color: C.muted, textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </span>
          <LanguageMenu />
          <a
            href="#book"
            style={{
              padding: '10px 18px', borderRadius: 9, background: C.accent,
              color: C.white, fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            {c.nav.cta}
          </a>
        </div>
      </div>

      {/* ── 2. Hero ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Signal rings.
            The aurora mesh this replaces is the most recognisable thing about
            the reference site, so it had to go. Concentric rings radiating from
            the call panel say the same "something is happening here" without
            borrowing anyone's signature — and they mean something for us: a
            phone ringing, a voice carrying. */}
        <div
          aria-hidden
          style={{
            position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute', top: '-10%', right: '-6%',
              width: 1120, height: 1120, borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(110,123,242,0.20) 0%, rgba(110,123,242,0.06) 42%, transparent 68%)',
            }}
          />
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                top: '50%', right: '18%',
                width: 420 + i * 260, height: 420 + i * 260,
                marginTop: -(210 + i * 130), marginRight: -(210 + i * 130),
                borderRadius: '50%',
                border: `1px solid rgba(110,123,242,${0.20 - i * 0.04})`,
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 55%, #08080A 100%)',
            }}
          />
        </div>

        <div
          className="v4-hero"
          style={{
            ...wrap,
            position: 'relative',
            display: 'grid',
            alignItems: 'center',
            paddingTop: 'clamp(56px, 8vw, 108px)',
            paddingBottom: 'clamp(56px, 8vw, 104px)',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 99,
                background: 'rgba(255,255,255,0.08)',
                border: `1px solid ${C.line}`,
                fontFamily: mono, fontSize: 10.5, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)',
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: 99, background: C.live }} />
              {c.hero.badge}
            </span>

            <h1
              style={{
                fontFamily: display, fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5.6vw, 4.4rem)',
                lineHeight: 1.14, letterSpacing: tracking.display,
                margin: '26px 0 0', maxInlineSize: '13ch',
              }}
            >
              {/* Split on the accent word rather than hard-coding the last few
                  words: German and Arabic put the emphasis in a different
                  place, and a missing match just renders the headline plain. */}
              {c.hero.h1.split(c.hero.h1Accent).flatMap((part, i) =>
                i === 0
                  ? [part]
                  : [
                      <span key={i} style={{ color: C.accent }}>
                        {c.hero.h1Accent}
                      </span>,
                      part,
                    ],
              )}
            </h1>

            <p
              style={{
                margin: '24px 0 0', maxInlineSize: '48ch',
                fontSize: 'clamp(16px, 1.5vw, 18.5px)', lineHeight: 1.55, color: C.muted,
              }}
            >
              {c.hero.sub}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '32px 0 0' }}>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 9,
                  padding: '15px 26px', borderRadius: 10, background: C.accent,
                  color: C.white, fontWeight: 600, fontSize: 15,
                }}
              >
                {c.hero.ctaPrimary} <ArrowRight size={16} strokeWidth={2.4} />
              </span>
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 9,
                  padding: '15px 24px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.07)', border: `1px solid ${C.line}`,
                  fontWeight: 500, fontSize: 15,
                }}
              >
                <Phone size={15} strokeWidth={2.2} /> {c.hero.ctaSecondary}
              </span>
            </div>
          </div>

          {/* Device mockup */}
          <div style={{ position: 'relative', animation: 'v4Float 7s ease-in-out infinite' }}>
            {/* Sector chips. Shares its selection with the flow map, so choosing
                here changes the diagram further down too. */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 14 }}>
              {industries.map((i) => {
                const on = i.key === industryKey;
                const Icon = INDUSTRY_ICONS[i.key];
                return (
                  <button
                    key={i.key}
                    onClick={() => setIndustry(i.key)}
                    aria-pressed={on}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      padding: '7px 11px', borderRadius: 99, cursor: 'pointer',
                      font: 'inherit', fontFamily: sans, fontSize: 12.5,
                      background: on ? 'rgba(110,123,242,0.18)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${on ? C.accent : C.line}`,
                      color: on ? '#C3CAFF' : C.muted,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {Icon && <Icon size={13} strokeWidth={2} />}
                    {i.label}
                  </button>
                );
              })}
            </div>

            <div
              style={{
                background: C.panel, border: `1px solid ${C.line}`,
                borderRadius: 26, padding: 18,
                boxShadow: '0 50px 120px -40px rgba(0,0,0,0.9)',
              }}
            >
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  paddingBottom: 14, borderBottom: `1px solid ${C.line}`,
                }}
              >
                <span
                  style={{
                    width: 8, height: 8, borderRadius: 99, background: C.live,
                    boxShadow: `0 0 0 4px rgba(62,207,142,0.16)`,
                  }}
                />
                <span style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)' }}>
                  {c.hero.callLabel}
                </span>
                <span style={{ flex: 1 }} />
                {/* The same six channels the flow map opens with. The panel used
                    to say "call in progress", which sold a phone product when
                    the argument is that every channel lands in one place. */}
                <span style={{ display: 'flex', gap: 5 }}>
                  {CHANNEL_ICONS.map(({ icon: Ch, colour }, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: 19, height: 19, borderRadius: 5,
                        background: `${colour}1F`, color: colour,
                      }}
                    >
                      <Ch size={10} strokeWidth={2} />
                    </span>
                  ))}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '18px 2px 6px' }}>
                {[
                  { who: 'guest', t: industry.line },
                  { who: 'agent', t: industry.reply },
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: m.who === 'agent' ? 'flex-end' : 'flex-start' }}>
                    <span
                      style={{
                        maxWidth: '86%', padding: '10px 14px', borderRadius: 14,
                        fontSize: 13.5, lineHeight: 1.5,
                        background: m.who === 'agent' ? C.accentSoft : C.inset,
                        border: `1px solid ${m.who === 'agent' ? 'rgba(110,123,242,0.32)' : 'transparent'}`,
                        color: m.who === 'agent' ? '#C3CAFF' : 'rgba(255,255,255,0.88)',
                      }}
                    >
                      {m.t}
                    </span>
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, height: 28, paddingInlineStart: 4 }}>
                  {[0, 1, 2, 3, 4, 5].map((b) => (
                    <span
                      key={b}
                      style={{
                        width: 3, borderRadius: 99, background: C.accent,
                        animation: `v4Wave 950ms ease-in-out ${b * 105}ms infinite`,
                      }}
                    />
                  ))}
                </div>

                {/* Mirrors the system line on each outcome in the flow map: the
                    conversation is not the deliverable, what it left in your
                    tools is. */}
                <div
                  style={{
                    marginTop: 6, paddingTop: 12,
                    borderTop: `1px solid ${C.line}`,
                    fontFamily: mono, fontSize: 10.5, letterSpacing: '0.04em',
                    color: C.live,
                  }}
                >
                  {industry.flow[0].system}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <FlowSection />
      <StatBand />

      {/* ── 3. Why ──
          Was an oversized gradient word with tilted cards scattered around it.
          That was the most literal borrowing on the page, so it is now a
          numbered editorial list: hairline rules, big numerals, left-aligned.
          Same four arguments, a register nobody else in the category is using. */}
      <section id="why" style={{ ...wrap, padding: 'clamp(72px, 10vw, 130px) clamp(20px, 5vw, 48px)' }}>
        <Eyebrow>{c.why.eyebrow}</Eyebrow>
        <h2
          style={{
            fontFamily: display, fontWeight: 600,
            fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
            lineHeight: 1.14, letterSpacing: tracking.heading,
            margin: '18px 0 clamp(36px, 4.5vw, 60px)', maxInlineSize: '17ch',
          }}
        >
          {c.why.heading}
        </h2>

        <div>
          {c.why.items.map((row, i) => (
            <div
              key={row.title}
              className="v4-why-row"
              style={{
                display: 'grid',
                padding: 'clamp(22px, 2.8vw, 34px) 0',
                borderTop: `1px solid ${C.line}`,
                ...(i === c.why.items.length - 1 ? { borderBottom: `1px solid ${C.line}` } : {}),
              }}
            >
              <span
                style={{
                  fontFamily: display, fontWeight: 600,
                  fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
                  letterSpacing: tracking.display, lineHeight: 1,
                  color: C.accent,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                style={{
                  fontFamily: display, fontWeight: 600,
                  fontSize: 'clamp(1.15rem, 1.9vw, 1.5rem)',
                  letterSpacing: tracking.heading, lineHeight: 1.18, margin: 0,
                  maxInlineSize: '20ch',
                }}
              >
                {row.title}
              </h3>
              <p
                style={{
                  margin: 0, fontSize: 15, lineHeight: 1.62,
                  color: C.muted, maxInlineSize: '52ch',
                }}
              >
                {row.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Versus />
      <FeatureBands />
      <HowItWorks />
      <Integrations />
      <Languages />

      {/* ── 4. Channels ── */}
      <section id="channels" style={{ ...wrap, padding: '0 clamp(20px, 5vw, 48px) clamp(72px, 10vw, 130px)' }}>
        <div style={{ textAlign: 'center' }}>
          <Eyebrow>{c.channels.eyebrow}</Eyebrow>
          <h2
            style={{
              fontFamily: display, fontWeight: 600,
              fontSize: 'clamp(1.9rem, 4.2vw, 3.1rem)',
              lineHeight: 1.14, letterSpacing: tracking.heading,
              margin: '18px auto 0', maxInlineSize: '18ch',
            }}
          >
            {c.channels.heading}
          </h2>
          <p style={{ margin: '16px auto 0', fontSize: 16, color: C.muted, maxInlineSize: '48ch' }}>
            {c.channels.body}
          </p>
        </div>

        <div style={{ marginTop: 'clamp(28px, 4vw, 52px)' }}>
          <ChannelOrbit />
          <ChannelList />
        </div>
      </section>

      <Pricing />
      <ProofSlot />

      {/* ── 5. FAQ as a conversation ── */}
      <section id="faq" style={{ ...wrap, padding: '0 clamp(20px, 5vw, 48px) clamp(72px, 10vw, 130px)' }}>
        <div className="v4-faq" style={{ display: 'grid', alignItems: 'start' }}>
          <div>
            <h2
              style={{
                fontFamily: display, fontWeight: 600,
                fontSize: 'clamp(1.9rem, 4vw, 2.9rem)',
                lineHeight: 1.14, letterSpacing: tracking.heading, margin: 0,
              }}
            >
              {c.faq.heading}
              <span style={{ display: 'block', color: C.muted }}>{c.faq.headingSub}</span>
            </h2>
            <p style={{ margin: '20px 0 0', fontSize: 15.5, lineHeight: 1.6, color: C.muted, maxInlineSize: '38ch' }}>
              {c.faq.body}
            </p>

          </div>

          {/* Thread */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {c.faq.items.map((item) => (
              <div key={item.q} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <span
                    style={{
                      maxWidth: '84%', padding: '13px 17px', borderRadius: 16,
                      borderBottomRightRadius: 5,
                      background: C.inset, border: `1px solid ${C.line}`,
                      fontSize: 14.5, fontWeight: 500, lineHeight: 1.45,
                    }}
                  >
                    {item.q}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <span
                    style={{
                      maxWidth: '88%', padding: '13px 17px', borderRadius: 16,
                      borderBottomLeftRadius: 5,
                      background: C.accentSoft, border: '1px solid rgba(110,123,242,0.28)',
                      fontSize: 14.5, lineHeight: 1.55, color: '#D5DAFF',
                    }}
                  >
                    {item.a}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />

      {/* ── Footer ── */}
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

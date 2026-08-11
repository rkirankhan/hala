import { useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { C, ENQUIRY_WEBHOOK, display, mono, sans, tracking, wrap } from './tokens';
import { dirOf, useHalaCopy, useHalaLocale } from './i18n';
import { useLegalMeta } from './useHalaMeta';
import { HalaMark } from './HalaMark';

/**
 * The enquiry form.
 *
 * Replaces a mailto: link, which asks the visitor's machine to have a mail
 * client configured and pointed somewhere they actually read — false on plenty
 * of office machines and phones, and it fails silently when it is false. A form
 * posts whether or not anything is set up.
 *
 * It writes to the same GoHighLevel webhook the agency site uses, so enquiries
 * land in the CRM the team already works from. `source` and `plan` ride along:
 * a Hala enquiry needs a different reply from an agency one, and knowing which
 * tier someone was reading is most of the qualification done for you.
 */
type Status = 'idle' | 'submitting' | 'success';

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function Field({
  label, hint, children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 7, marginBottom: 7 }}>
        <span style={{ fontSize: 13.5, fontWeight: 500 }}>{label}</span>
        {hint && (
          <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.08em', color: C.faint }}>
            {hint}
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 10,
  background: C.inset,
  border: `1px solid ${C.line}`,
  color: C.white,
  fontFamily: sans,
  fontSize: 15,
  /* Below 16px iOS zooms the whole page on focus and never zooms back. */
  lineHeight: 1.5,
};

export function ContactPage() {
  const c = useHalaCopy();
  const locale = useHalaLocale();
  const t = c.contact;
  const home = locale === 'en' ? '/' : `/${locale}`;

  const [params] = useSearchParams();
  /* The tier the visitor was reading when they clicked, carried through so the
     reply can start from the right plan instead of asking which one. */
  const plan = params.get('plan') ?? '';

  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  useLegalMeta(t.title, locale);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? '').trim();
    const [name, email, phone, business, message] =
      ['name', 'email', 'phone', 'business', 'message'].map(get);

    if (name.length < 2) return setError(t.errName);
    if (!EMAIL.test(email)) return setError(t.errEmail);
    if (message.length < 4) return setError(t.errMessage);

    setError(null);
    setStatus('submitting');

    try {
      const res = await fetch(ENQUIRY_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'hala',
          plan: plan || undefined,
          language: locale,
          name,
          email,
          phone: phone || undefined,
          business: business || undefined,
          message,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
    } catch (err) {
      console.error('[hala enquiry] submission failed:', err);
      setError(t.errGeneric);
      setStatus('idle');
    }
  };

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

      <main style={{ ...wrap, maxWidth: 620, padding: 'clamp(40px, 5.5vw, 72px) clamp(20px, 5vw, 48px) 96px' }}>
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
            fontSize: 'clamp(1.8rem, 3.8vw, 2.5rem)',
            lineHeight: 1.14, letterSpacing: tracking.heading,
            margin: '16px 0 0',
          }}
        >
          {status === 'success' ? t.successTitle : t.title}
        </h1>

        <p style={{ margin: '14px 0 0', fontSize: 16, lineHeight: 1.6, color: C.muted }}>
          {status === 'success' ? t.successBody : t.body}
        </p>

        {status === 'success' ? (
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              margin: '28px 0 0', padding: '18px 20px', borderRadius: 14,
              background: 'rgba(62,207,142,0.10)', border: '1px solid rgba(62,207,142,0.30)',
            }}
          >
            <Check size={18} strokeWidth={2.6} style={{ color: C.live, flexShrink: 0 }} />
            <Link to={c.booking.slug} style={{ color: C.white, fontSize: 14.5 }}>
              {t.orBook}
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate style={{ display: 'grid', gap: 16, marginTop: 28 }}>
            {plan && (
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '11px 14px', borderRadius: 10,
                  background: 'rgba(110,123,242,0.10)', border: `1px solid ${C.accent}`,
                }}
              >
                <span
                  style={{
                    fontFamily: mono, fontSize: 10, letterSpacing: '0.16em',
                    textTransform: 'uppercase', color: C.faint,
                  }}
                >
                  {t.planLabel}
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#C3CAFF' }}>{plan}</span>
              </div>
            )}

            <Field label={t.name}>
              <input name="name" autoComplete="name" style={inputStyle} />
            </Field>

            <Field label={t.email}>
              <input name="email" type="email" inputMode="email" autoComplete="email" style={inputStyle} />
            </Field>

            <Field label={t.phone} hint={t.optional}>
              <input name="phone" type="tel" inputMode="tel" autoComplete="tel" style={inputStyle} />
            </Field>

            <Field label={t.business} hint={t.optional}>
              <input name="business" autoComplete="organization" style={inputStyle} />
            </Field>

            <Field label={t.message}>
              <textarea name="message" rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
            </Field>

            {error && (
              <p
                role="alert"
                style={{
                  margin: 0, padding: '12px 14px', borderRadius: 10,
                  background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)',
                  fontSize: 13.5, lineHeight: 1.5, color: '#F5B342',
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
                padding: '15px 26px', borderRadius: 10,
                background: C.accent, color: C.white, border: 'none',
                fontFamily: sans, fontWeight: 600, fontSize: 15,
                cursor: status === 'submitting' ? 'default' : 'pointer',
                opacity: status === 'submitting' ? 0.65 : 1,
              }}
            >
              {status === 'submitting' ? t.sending : t.submit}
              {status !== 'submitting' && <ArrowRight size={16} strokeWidth={2.4} />}
            </button>

            <Link
              to={c.booking.slug}
              style={{ fontSize: 13.5, color: C.muted, textAlign: 'center', marginTop: 2 }}
            >
              {t.orBook}
            </Link>
          </form>
        )}
      </main>
    </div>
  );
}

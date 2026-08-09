import { C } from './tokens';

/**
 * The Hala mark.
 *
 * An open ring — هالة means halo — with a dot resting where the ring opens, so
 * the gap reads as a speech tail and the dot as the reply. The dot is the same
 * green the page already uses for live status: the hero's "answering now"
 * indicator and the returning-customer badge. By the time a visitor reaches the
 * mark, the page has taught them what that green means.
 *
 * `mono` collapses both elements to currentColor for single-colour print,
 * embroidery and anywhere a two-colour mark cannot go. Defining it here rather
 * than leaving it to be improvised later is the point.
 */
export function HalaMark({
  size = 28,
  mono = false,
  title = 'Hala',
}: {
  size?: number;
  mono?: boolean;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      style={{ flexShrink: 0, display: 'block' }}
    >
      <title>{title}</title>
      <circle
        cx="32"
        cy="32"
        r="20"
        fill="none"
        stroke={mono ? 'currentColor' : C.accent}
        strokeWidth="6"
        strokeLinecap="round"
        /* A 90-degree gap centred at the bottom, so both ends land at the 4 and
           8 o'clock positions where a headset's earcups sit. The double reading
           is deliberate: a halo to anyone who knows هالة means halo, a headset
           to everyone who does not — and a headset is what a restaurateur
           recognises in a fraction of a second, with no story attached.
           Do not "correct" the gap into a tidy speech-bubble opening. */
        strokeDasharray="94 31"
        transform="rotate(135 32 32)"
      />
      {/* One end weighted, one left plain. Two earcups would be a headset and
          nothing more; one dot keeps the ring reading as a ring. */}
      <circle cx="17.9" cy="46.1" r="6.5" fill={mono ? 'currentColor' : C.live} />
    </svg>
  );
}

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { C, VIDEO, sans } from './tokens';

/**
 * The explainer film, in a dialog over the page.
 *
 * Over rather than in: a player embedded in the hero pushes the headline and
 * the call to action down the fold on every visit, for the minority who watch
 * it. In a dialog it costs nothing until someone asks.
 *
 * It also means nothing is requested from Google until that click, which is
 * what German privacy guidance expects of an embedded player and why the
 * component mounts the iframe rather than hiding one.
 */
export function VideoDialog({ title, onClose }: { title: string; onClose: () => void }) {
  /* Chosen once, when the dialog opens. Reacting to a rotation mid-play would
     swap the src and restart the video from zero, which is worse than a ratio
     that no longer quite fits. */
  const [cut] = useState(() =>
    window.matchMedia('(max-width: 760px)').matches ? VIDEO.tall : VIDEO.wide,
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    /* The page behind must not scroll under the dialog — on a phone the
       backdrop otherwise slides away and leaves the video floating. */
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(16px, 4vw, 40px)',
        background: 'rgba(6,6,8,0.86)', backdropFilter: 'blur(8px)',
        animation: 'v4Fade 180ms ease-out both',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative', width: '100%', fontFamily: sans,
          /* The vertical cut is bounded by height, not width, or it runs off
             the bottom of a phone the moment the address bar is showing. */
          maxWidth: cut === VIDEO.tall ? 'min(100%, calc(76vh * 9 / 16))' : 1000,
        }}
      >
        <button
          onClick={onClose}
          aria-label={title}
          style={{
            position: 'absolute', insetInlineEnd: 0, bottom: 'calc(100% + 10px)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34, borderRadius: 9, cursor: 'pointer',
            background: 'rgba(255,255,255,0.08)', border: `1px solid ${C.line}`,
            color: C.white,
          }}
        >
          <X size={17} strokeWidth={2.2} />
        </button>

        {/* The frame takes the film's own shape rather than letterboxing it. */}
        <div
          style={{
            position: 'relative',
            aspectRatio: cut.ratio,
            borderRadius: 16,
            overflow: 'hidden',
            background: '#000',
            border: `1px solid ${C.line}`,
            boxShadow: '0 60px 120px -40px rgba(0,0,0,0.9)',
          }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${cut.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef, type CSSProperties } from 'react';
import { Banknote } from 'lucide-react';
import { PasswordGate } from '@/components/PasswordGate';

// Each label glides through a vertical band of the hero image (fractions of
// the image's height). As its band scrolls past, the label eases down the
// band on an S-curve - decelerating to a near-still hold mid-band, then
// settling softly onto the band's lower edge, where it "lands".
const TREE_REGION = { start: 0.12, end: 0.56 };
// start: the soil line - where the trunk base meets the dark earth (~70%).
const SOIL_REGION = { start: 0.7, end: 0.96 };

// Viewport height fraction the label passes through at its mid-band hold.
const PIN_FRACTION = 0.4;

// The image fades to fully transparent at its top and bottom edges, so it
// dissolves into the page with no visible seam. The bottom fade is long so
// the soil dissolves gradually into the page rather than ending on an edge.
const HERO_MASK =
  'linear-gradient(to bottom, transparent 0%, #000 12%, #000 80%, transparent 100%)';

const LABEL_CLASS =
  'absolute font-display text-ink text-center leading-snug px-6 py-3 bg-cream/55 backdrop-blur-sm border border-stone/40 shadow-[0_12px_32px_-12px_rgba(63,46,31,0.5)]';

const LABEL_STYLE: CSSProperties = {
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: 'clamp(15px, 1.8vw, 27px)',
  maxWidth: 'min(86vw, 600px)',
};

// A C1-continuous clamp: follows `s` directly through the open middle, but
// bends into a flat rest at each bound across a parabolic knee of half-width
// `k`. With k = 0 it is exactly Math.min(Math.max(s, lo), hi); with k at half
// the lo..hi span the whole curve is one smooth S with no straight segment -
// the label decelerates to a kiss of zero velocity mid-band, then accelerates
// away. The knee also stretches the glide over twice the scroll distance.
const softClamp = (s: number, lo: number, hi: number, k: number) => {
  if (hi <= lo) return lo;
  k = Math.max(0, Math.min(k, (hi - lo) / 2));
  let v = s;
  if (s <= lo - k) v = lo;
  else if (k > 0 && s < lo + k) v = lo + (s - lo + k) ** 2 / (4 * k);
  if (v >= hi + k) v = hi;
  else if (k > 0 && v > hi - k) v = hi - (hi + k - v) ** 2 / (4 * k);
  return v;
};

export function Partnership() {
  const figureRef = useRef<HTMLElement>(null);
  const treeRef = useRef<HTMLParagraphElement>(null);
  const soilRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let rafId = 0;

    const place = (
      label: HTMLElement | null,
      region: { start: number; end: number },
      figureTop: number,
      figureH: number,
      pinY: number,
    ) => {
      if (!label) return;
      const lo = region.start * figureH;
      const hi = region.end * figureH - label.offsetHeight;
      // `s` is the top that would hold the label at pinY in the viewport.
      // Easing the clamp with a knee half the travel wide turns the old hard
      // catch / hard release into one smooth glide that lands softly.
      const s = pinY - figureTop;
      label.style.top = `${softClamp(s, lo, hi, (hi - lo) / 2)}px`;
    };

    const update = () => {
      const figure = figureRef.current;
      if (!figure) return;
      const rect = figure.getBoundingClientRect();
      const pinY = window.innerHeight * PIN_FRACTION;
      place(treeRef.current, TREE_REGION, rect.top, rect.height, pinY);
      place(soilRef.current, SOIL_REGION, rect.top, rect.height, pinY);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <PasswordGate>
      <section className="min-h-screen pb-32">
        <div className="px-6 pt-[160px] pb-14 flex flex-col items-center">
          <div className="text-eyebrow text-eyebrow-rule mb-14">partnership</div>
          <h1 className="text-display text-center max-w-[1000px] mx-auto">
            Sketch + Hammer &amp; Unosquare:
            <br />
            <span className="accent">flourishing together</span>
          </h1>
        </div>

        {/* Full-bleed hero - the moneytree, masked to transparent at top and
            base so it dissolves into the page. Each label eases down its band
            of the painting and settles onto the band's lower edge. */}
        <figure ref={figureRef} className="relative w-full fade-up">
          <img
            src="/moneytree.webp"
            alt="An orchard tree in full fruit and blossom, its roots cradling a hoard of buried gold."
            width={1024}
            height={1024}
            className="block w-full"
            style={{ maskImage: HERO_MASK, WebkitMaskImage: HERO_MASK }}
          />
          <p
            ref={treeRef}
            className={LABEL_CLASS}
            style={{ ...LABEL_STYLE, top: '12%' }}
          >
            Unosquare needs a money tree.
          </p>
          <p
            ref={soilRef}
            className={LABEL_CLASS}
            style={{ ...LABEL_STYLE, top: '70%' }}
          >
            Sketch + Hammer needs soil to thrive and grow in.
          </p>
        </figure>

        <p className="text-display text-center max-w-[900px] mx-auto mt-16 px-6">
          Together we can{' '}
          <span className="accent">
            make it rain
            <Banknote
              aria-hidden="true"
              className="inline-block align-[-0.12em] ml-[0.16em]"
              style={{ width: '1em', height: '1em' }}
            />
          </span>
        </p>

        <p className="text-center text-ink-light text-eyebrow px-6 mt-12">
          partnership details coming soon
        </p>
      </section>
    </PasswordGate>
  );
}

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
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

// Body copy for the pitch sections - one shared paragraph treatment.
const PARA = 'mb-5 text-ink-soft text-[1.0625rem] leading-[1.8]';

// The proposed deal, point by point - rendered as a "+"-marked list.
const DEAL_POINTS = [
  'unosquare licenses the proprietary framework and accompanying toolset into build.unosquare from Sketch + Hammer.',
  'unosquare salaries Alanna and I as the first practitioners (Business Leads) applying the framework and tools in practice for design + front-end build. unosquare provides the back-end build.',
  'Sketch + Hammer shares in the profits of the AI accelerator practice alongside unosquare.',
  'Sketch + Hammer retains its identity, its IP, and its independent consumer product line.',
];

/** A numbered pitch section - mono index, Fraunces heading, then its body. */
function PitchSection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-24 first:mt-0">
      <div className="text-eyebrow mb-3">{`0${index}`}</div>
      <h2 className="font-display font-light text-wood-deep tracking-[-0.02em] leading-[1.14] text-[clamp(26px,3.4vw,40px)] mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

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
            Sketch{' '}
            <span className="font-body font-medium text-terracotta text-[1.05em]">
              +
            </span>{' '}
            Hammer &amp;{' '}
            <img
              src="/unosquare-logo.svg"
              alt="unosquare"
              className="inline-block align-[-0.2em] ml-[0.15em]"
              style={{ height: '1em', width: 'auto' }}
            />
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
            unosquare needs a money tree.
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
            make it <em>rain</em>
            <img
              src="/flying-dollar.svg"
              alt=""
              aria-hidden="true"
              className="inline-block align-middle ml-[0.2em] dollar-float"
              style={{ height: '1.15em', width: 'auto' }}
            />
          </span>
        </p>

        {/* The pitch - five numbered sections, in a narrow reading column
            held in the hero's warm palette. Replaces the placeholder line. */}
        <div className="max-w-[640px] mx-auto px-6 mt-28">
          <PitchSection index={1} title="The candle">
            <p className={PARA}>
              You started with a candle. Before unosquare was unosquare, you
              were making something with your hands and learning what it
              meant to own the thing you made.
            </p>
            <p className={PARA}>
              Alanna and I have been quietly building our own version of
              that. A studio. A place where the products are ours. A name on
              the door that's ours.
            </p>
          </PitchSection>

          <PitchSection index={2} title="The proposal">
            <p className={PARA}>
              I don't want to leave unosquare. I'm proposing something I
              think serves both of us more than anything either of us could
              do alone.
            </p>
            <p className={PARA}>
              unosquare needs an AI accelerator arm. A defensible service
              line that no peer firm has. The kind of capability you can't
              hire your way into because it requires a methodology that was{' '}
              <strong className="font-bold">
                forged through the actual building of products
              </strong>
              , not the{' '}
              <strong className="font-bold">theorizing</strong> about them.
              Practitioners who are <em>masters</em>, not just pretty good at
              what they
              do.
            </p>
            <p className={PARA}>
              Sketch + Hammer needs soil. A place to grow. The infrastructure
              that will help a two-founder studio thrive. A pipeline of real
              clients (Panopto first, then more) where the framework can be
              applied at scale.
            </p>
          </PitchSection>

          <PitchSection index={3} title="Proposed high-level shape of the deal">
            <ul className="list-disc pl-5 space-y-4 marker:text-[#8FA07B]">
              {DEAL_POINTS.map((point) => (
                <li
                  key={point}
                  className="pl-1.5 text-ink-soft text-[1.0625rem] leading-[1.75]"
                >
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-12 font-display font-light text-wood-deep text-center tracking-[-0.02em] leading-[1.18] text-[clamp(23px,3vw,33px)]">
              You get the <span className="text-terracotta">money tree</span>.
              We get the <span className="text-terracotta">soil</span>.
            </p>
          </PitchSection>

          <PitchSection
            index={4}
            title="The Corporate Venture Studio model is not novel"
          >
            <p className={PARA}>
              IDEO and Steelcase ran a version of this from 1996 to 2010.
              Steelcase took an equity position, David Kelley held an officer
              role at Steelcase and remained chairman of IDEO. The IDEO brand
              stayed independent, and a management buyback path was built in.
              The structure produced the Leap chair, the Node chair, and a
              body of joint work spanning fourteen years. The model has a
              thirty year track record.
            </p>
            <p className={PARA}>
              What we're proposing is the early phase of that arc, modified for
              our context, with potential IP licensing in place of equity
              sale. Cleaner structure. Lower stakes. Same shape.
            </p>
            <p className="mt-7 border-l-2 border-stone/50 pl-4 text-[0.875rem] italic leading-[1.7] text-ink-light">
              Other corporate venture studios include P&amp;G Ventures, ENGIE
              Factory, and L'Oréal's Founders Factory partnership.
            </p>
          </PitchSection>

          <PitchSection index={5} title="What we're asking for">
            <p className="mb-6 font-display text-wood-deep text-[clamp(20px,2.6vw,27px)] leading-[1.25] tracking-[-0.015em]">
              A conversation.
            </p>
            <p className={PARA}>
              We want to sit with you and walk through the structure: what the
              licensing looks like, what the salary and profit-share
              mechanics look like, where the lines are between Sketch +
              Hammer and unosquare. We want to do this in the way that
              protects all of us and gives the partnership room to evolve.
            </p>
          </PitchSection>
        </div>
      </section>
    </PasswordGate>
  );
}

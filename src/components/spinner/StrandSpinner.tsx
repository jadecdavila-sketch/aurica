import { type ReactNode, useEffect, useRef, useState } from 'react';
import { LobeHeader } from '@/components/LobeHeader';
import './StrandSpinner.css';

/**
 * StrandSpinner - prototype, iteration 5.
 *
 * One spinner toy: a spiral whorl at the top; two billowed lobes of hairline
 * strands (the North Star and the Council); then a short spindle to the
 * bottom pole, with the Foundation in the clear below where it lands.
 *
 * The twist follows the CouncilStrands model exactly: openness and twist are
 * one coupled progress. Fully open (1) the strands carry NO twist - clean
 * meridian billows, like the council's expanded sphere. Wound shut (0) they
 * coil into a tight twisted column. The transition rides a single cubic-bezier
 * curve (the council's --ease-slow) over a fixed duration, then stops. The toy
 * is never animated at rest.
 *
 * On load it untwists open once. Clicking the whorl toggles it - the first
 * click twists shut, the next untwists open.
 *
 * The council lobe carries one extra move: while the council ring inside it
 * is expanded, the lobe billows wider, then settles back when it collapses.
 *
 * Reference: the council's twist/untwist on expand/collapse (CouncilStrands).
 */

const VIEW_W = 1440;
const VIEW_H = 3590;
const CX = VIEW_W / 2;

const WHORL_CY = 110; // the spiral sits at the top of the toy
const WHORL_R = 46;

const STRAND_TOP = 195; // strands gather just below the whorl
const STRAND_BASE = 2330; // bottom of the spindle - lands above the Foundation
const SPAN = STRAND_BASE - STRAND_TOP;

const NECK_FLOOR = 13;
const TAPER = 90; // at the top pole the strands draw in to a point
const STRAND_COUNT = 22;
const SAMPLES = 200;

const TWIST = Math.PI * 7.5; // total coil, pole to pole, when fully wound
const DURATION = 1000; // ms - one untwist transition, then still
const COUNCIL_DURATION = 800; // ms - council lobe billow, matched to the ring

/**
 * Two billowed lobes - North Star and Council.
 *  - `amp` is the billow's resting half-width; `contentW` is the section's
 *    own width - narrower than the billow, so the strands stay visible past
 *    the section on either side.
 *  - `anchor` is the fraction of the lobe's height at which its content is
 *    centred. Omitted, it sits on the equator (0.5); lower values lift the
 *    content towards the top pole.
 *  - `ampExpanded`, if set, is the wider half-width the lobe billows out to
 *    while its section is expanded - the council lobe grows with the ring.
 */
interface Lobe {
  id: string;
  top: number;
  bottom: number;
  amp: number;
  contentW: number;
  anchor?: number;
  ampExpanded?: number;
}

const LOBES: Lobe[] = [
  { id: 'north', top: 250, bottom: 860, amp: 440, contentW: 780 },
  { id: 'council', top: 1000, bottom: 2140, amp: 340, ampExpanded: 540, contentW: 920 },
];

/**
 * The Foundation is not a lobe. Below the Council the strands gather to a
 * short spindle that ends at the bottom pole; the Foundation sits in the
 * clear below it, its title just under where the spindle lands.
 */
const FOUND_TOP = 2360;

/** The y at which a lobe's content is centred - its equator, unless `anchor`
    lifts it towards the top pole. */
const anchorY = (l: Lobe) => l.top + (l.anchor ?? 0.5) * (l.bottom - l.top);

const WARM = ['gold', 'wood', 'olive'];
const strandHue = (k: number): string =>
  k % 2 === 0 ? 'terracotta' : (WARM[((k - 1) / 2) % WARM.length] ?? 'gold');

// Varied hairline weights - a fine, uneven field rather than uniform threads.
const WEIGHTS = [0.42, 0.55, 0.38, 0.7, 0.48, 0.6, 0.4, 0.66];
const strandWidth = (k: number): number => WEIGHTS[k % WEIGHTS.length] ?? 0.5;

/** cubic-bezier solver - mirrors CouncilStrands' --ease-slow. */
function makeEasing(p1x: number, p1y: number, p2x: number, p2y: number) {
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;
  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
  return (x: number) => {
    let t = x;
    for (let i = 0; i < 6; i++) {
      const err = sampleX(t) - x;
      if (Math.abs(err) < 1e-4) break;
      const slope = (3 * ax * t + 2 * bx) * t + cx;
      if (Math.abs(slope) < 1e-6) break;
      t -= err / slope;
    }
    return sampleY(t);
  };
}
const easeSlow = makeEasing(0.22, 0.61, 0.36, 1);

/** Lobe half-width at height `y` - `open` 1 billows it full, 0 collapses it;
    `councilOpen` 1 widens any lobe with an `ampExpanded` to that width. */
function envelope(y: number, open: number, councilOpen: number): number {
  let amp = NECK_FLOOR; // a neck - strands stay gathered near the axis
  for (const l of LOBES) {
    if (y >= l.top && y <= l.bottom) {
      // Elliptical profile - rounded at the poles, so the lobes read as
      // ovals rather than pointed onions.
      const u = (2 * (y - l.top)) / (l.bottom - l.top) - 1;
      // The council lobe widens with its ring; the rest hold their amp.
      const half =
        l.ampExpanded !== undefined
          ? l.amp + (l.ampExpanded - l.amp) * councilOpen
          : l.amp;
      amp = NECK_FLOOR + half * open * Math.sqrt(1 - u * u);
      break;
    }
  }
  // The strands draw to a point at the top pole; the bottom is left a square
  // edge - a flat-ended bundle.
  const taper = Math.min(1, (y - STRAND_TOP) / TAPER);
  return amp * Math.max(0, taper);
}

/**
 * One strand at openness `open`. Twist is coupled to openness the council's
 * way: phi = TWIST * (1 - open) - zero twist when fully open.
 */
function strandPath(k: number, open: number, councilOpen: number): string {
  const phi = TWIST * (1 - open);
  const base = (2 * Math.PI * k) / STRAND_COUNT;
  let d = '';
  for (let i = 0; i <= SAMPLES; i++) {
    const f = i / SAMPLES;
    const y = STRAND_TOP + f * SPAN;
    const lon = base + phi * f;
    const x = CX + envelope(y, open, councilOpen) * Math.sin(lon);
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }
  return d;
}

// The whorl - an Archimedean spiral around the origin. Its <g> is translated
// to the top of the toy and rotated as the strands untwist.
const WHORL_D = (() => {
  const turns = 2.8;
  const steps = 150;
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const f = i / steps;
    const a = f * turns * 2 * Math.PI;
    const r = f * WHORL_R;
    d += `${i === 0 ? 'M' : 'L'}${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`;
  }
  return d;
})();

interface StrandSpinnerProps {
  /** The three lobe contents - the real homepage sections, unchanged. */
  northStar: ReactNode;
  council: ReactNode;
  foundation: ReactNode;
  /** True while the council ring inside the council lobe is expanded. The
      council lobe billows wider to follow it. */
  councilExpanded?: boolean;
}

export function StrandSpinner({
  northStar,
  council,
  foundation,
  councilExpanded = false,
}: StrandSpinnerProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const whorl = useRef<SVGGElement>(null);
  const openRef = useRef(0); // 0 wound shut … 1 untwisted open
  const councilRef = useRef(0); // 0 council lobe at rest … 1 billowed wide
  const api = useRef<{ setTarget: (t: number) => void } | null>(null);
  const councilApi = useRef<{ setTarget: (t: number) => void } | null>(null);
  const [wound, setWound] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const draw = () => {
      const o = openRef.current;
      const c = councilRef.current;
      for (let k = 0; k < STRAND_COUNT; k++) {
        paths.current[k]?.setAttribute('d', strandPath(k, o, c));
      }
      whorl.current?.setAttribute(
        'transform',
        `translate(${CX} ${WHORL_CY}) rotate(${((1 - o) * 200).toFixed(1)})`,
      );
      wrap.current?.style.setProperty('--open', o.toFixed(3));
      wrap.current?.style.setProperty('--council', c.toFixed(3));
    };

    // Reduced motion: settle open, no untwist animation. The council lobe
    // still tracks its ring, but snaps rather than billowing.
    if (reduced) {
      openRef.current = 1;
      draw();
      api.current = { setTarget: () => {} };
      councilApi.current = {
        setTarget: (t) => {
          councilRef.current = t;
          draw();
        },
      };
      return;
    }

    // One eased transition over `ref`, council-style: ease from its current
    // value to the target over `duration`, then stop. Nothing runs at rest.
    // Each channel - the twist, the council billow - owns its own frame loop.
    const channel = (ref: { current: number }, duration: number) => {
      let raf = 0;
      const setTarget = (to: number) => {
        if (raf) cancelAnimationFrame(raf);
        const from = ref.current;
        if (from === to) {
          draw();
          raf = 0;
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const linear = Math.min(1, (now - start) / duration);
          ref.current = from + (to - from) * easeSlow(linear);
          draw();
          if (linear < 1) {
            raf = requestAnimationFrame(tick);
          } else {
            ref.current = to;
            raf = 0;
          }
        };
        raf = requestAnimationFrame(tick);
      };
      const cancel = () => {
        if (raf) cancelAnimationFrame(raf);
      };
      return { setTarget, cancel };
    };

    const twist = channel(openRef, DURATION);
    const billow = channel(councilRef, COUNCIL_DURATION);
    api.current = { setTarget: twist.setTarget };
    councilApi.current = { setTarget: billow.setTarget };

    // The one entrance: begin coiled, untwist and open, then rest.
    openRef.current = 0;
    draw();
    twist.setTarget(1);

    return () => {
      twist.cancel();
      billow.cancel();
    };
  }, [reduced]);

  // The council lobe billows wide while the council ring is expanded and
  // settles back when it collapses, over the ring's own transition.
  useEffect(() => {
    councilApi.current?.setTarget(councilExpanded ? 1 : 0);
  }, [councilExpanded]);

  // Click the whorl to toggle, the council ring's model: the first click
  // twists the toy shut, the next untwists it open.
  const toggle = () => {
    const next = !wound;
    setWound(next);
    api.current?.setTarget(next ? 0 : 1);
  };

  return (
    <div className={`strand-spinner${wound ? ' is-wound' : ''}`} ref={wrap}>
      {/* The strand armature - drawn behind the sections it billows around. */}
      <svg
        className="ss-svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-label="A spinner toy. The spiral whorl at the top is the human in the loop, who orchestrates the whole framework; the North Star and the Council billow from it as lobes of hairline strands, with the Foundation in the open below."
      >
        <line className="ss-axis" x1={CX} y1={WHORL_CY} x2={CX} y2={STRAND_BASE} />

        <g className="ss-strands">
          {Array.from({ length: STRAND_COUNT }, (_, k) => (
            <path
              key={k}
              ref={(el) => {
                paths.current[k] = el;
              }}
              className={`ss-strand ss-strand--${strandHue(k)}`}
              strokeWidth={strandWidth(k)}
              d={strandPath(k, 0, 0)}
            />
          ))}
        </g>

        {/* The whorl - the abstract human, at the top. Click to toggle: the
            first click twists the toy shut, the next untwists it open. */}
        <g
          className="ss-whorl"
          role="button"
          tabIndex={0}
          aria-label={wound ? 'Untwist the spinner open' : 'Wind the spinner shut'}
          aria-pressed={wound}
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              toggle();
            } else if (e.key === 'Escape' && wound) {
              setWound(false);
              api.current?.setTarget(1);
            }
          }}
        >
          <circle className="ss-whorl-hit" cx={CX} cy={WHORL_CY} r={WHORL_R + 26} />
          <g ref={whorl} transform={`translate(${CX} ${WHORL_CY}) rotate(200)`}>
            <path className="ss-whorl-spiral" d={WHORL_D} />
            <circle className="ss-whorl-core" r={5} />
          </g>
        </g>

        {/* The pointer from the spiral to the human's header. */}
        <line
          className="ss-human-link"
          x1={CX + WHORL_R + 14}
          y1={WHORL_CY}
          x2={CX + WHORL_R + 72}
          y2={WHORL_CY}
        />
      </svg>

      {/* The lobe contents - the real sections, each in its open clearing.
          They scale and fade with --open: full when untwisted, coiled away
          when the whorl is wound shut. */}
      <div className="ss-lobes">
        {/* The spiral named - in the same header style as the three lobes. */}
        <div className="ss-human" style={humanStyle()}>
          <LobeHeader
            title="The human in the loop"
            description="orchestrating the framework"
          />
        </div>
        {/* The cream halos - one per lobe, an ellipse the size of that
            lobe's strand billow, so each section lifts off the strands with
            an even, lobe-shaped fade. Drawn behind their content. */}
        <div className="ss-halo" style={lobeHaloStyle(LOBES[0])} aria-hidden />
        <div className="ss-lobe" style={lobeStyle(LOBES[0])} aria-hidden={wound || undefined}>
          {northStar}
        </div>
        <div className="ss-halo" style={lobeHaloStyle(LOBES[1])} aria-hidden />
        <div className="ss-lobe" style={lobeStyle(LOBES[1])} aria-hidden={wound || undefined}>
          {council}
        </div>
        <div className="ss-panel" style={foundationStyle()} aria-hidden={wound || undefined}>
          {foundation}
        </div>
      </div>
    </div>
  );
}

/** Place a lobe's content at its anchor height, sized to the section's own
    width. */
function lobeStyle(l: Lobe): React.CSSProperties {
  return {
    top: `${(anchorY(l) / VIEW_H) * 100}%`,
    width: `${(l.contentW / VIEW_W) * 100}%`,
  };
}

/** Place a lobe's cream halo over its full elliptical billow - centred on the
    equator and sized to the lobe ellipse (2 * amp wide, the lobe's height
    tall), so the cream fades the strands along the lobe's own edge. The
    council halo widens with `--council` as its lobe billows out. */
function lobeHaloStyle(l: Lobe): React.CSSProperties {
  const pct = (n: number) => `${n.toFixed(3)}%`;
  const equator = (l.top + l.bottom) / 2;
  const restW = ((2 * l.amp) / VIEW_W) * 100;
  return {
    top: pct((equator / VIEW_H) * 100),
    height: pct(((l.bottom - l.top) / VIEW_H) * 100),
    width:
      l.ampExpanded === undefined
        ? pct(restW)
        : `calc(${pct(restW)} + ${pct(
            ((2 * (l.ampExpanded - l.amp)) / VIEW_W) * 100,
          )} * var(--council))`,
  };
}

/** Place the Foundation in the clear below the spindle, anchored at its top. */
function foundationStyle(): React.CSSProperties {
  return {
    top: `${((FOUND_TOP / VIEW_H) * 100).toFixed(3)}%`,
    width: '94%',
  };
}

/** Place the human's header level with the spiral, off to its side. */
function humanStyle(): React.CSSProperties {
  return { top: `${((WHORL_CY / VIEW_H) * 100).toFixed(3)}%` };
}

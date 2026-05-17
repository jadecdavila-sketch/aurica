import { useEffect, useRef } from 'react';

/**
 * CouncilStrands — the human-in-the-loop thread, woven through the council.
 *
 * Thin terracotta strands anchored at two poles (the top and bottom council
 * seats). Collapsed, they twist into a tight coil; convening the council
 * untwists them into a billowed meridian sphere, the six councils riding it
 * like beads on a thread. Inspired by a magic-strand spinner toy.
 *
 * Prototype: additive — it does not yet touch the existing radial
 * `council-lines`. This is the first of three woven instances; the North Star
 * and the Foundation are the other two, all driven by the same expand state.
 */

interface CouncilStrandsProps {
  expanded: boolean;
}

// Geometry is authored in desktop viewBox units. The SVG element is sized
// down on small screens (see CouncilRing.css), which scales it to match the
// responsive ring radii — the same trick that keeps `.council-lines` in register.
const STRAND_COUNT = 12;
const SAMPLES = 28;
const R_COLLAPSED = 68; // --ring-radius-collapsed
const R_EXPANDED = 230; // --ring-radius-expanded
const TWIST = Math.PI * 2.5; // total coil angle, pole to pole, when collapsed
const DURATION = 900; // matches the council member transition

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** cubic-bezier solver — mirrors --ease-slow: cubic-bezier(0.22,0.61,0.36,1). */
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

/**
 * One strand's path at progress `p` (0 = collapsed coil, 1 = open sphere).
 * Each strand is a meridian twisted by `phi`; the sphere bulge comes from a
 * sine envelope — zero at the poles, widest at the equator.
 */
function strandPath(k: number, p: number): string {
  const radius = lerp(R_COLLAPSED, R_EXPANDED, p);
  const phi = TWIST * (1 - p);
  const base = (2 * Math.PI * k) / STRAND_COUNT;
  let d = '';
  for (let i = 0; i <= SAMPLES; i++) {
    const t = i / SAMPLES;
    const y = -radius + t * 2 * radius;
    const envelope = Math.sin(Math.PI * t);
    const longitude = base + phi * t;
    const x = radius * envelope * Math.sin(longitude);
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }
  return d;
}

export function CouncilStrands({ expanded }: CouncilStrandsProps) {
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const progress = useRef(expanded ? 1 : 0);

  useEffect(() => {
    const draw = (p: number) => {
      progress.current = p;
      for (let k = 0; k < STRAND_COUNT; k++) {
        paths.current[k]?.setAttribute('d', strandPath(k, p));
      }
    };

    const from = progress.current;
    const to = expanded ? 1 : 0;
    if (from === to) {
      draw(to);
      return;
    }

    // Reduced motion: settle into the target state without the coil animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const linear = Math.min(1, (now - start) / DURATION);
      draw(from + (to - from) * easeSlow(linear));
      if (linear < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [expanded]);

  return (
    <svg
      className="council-strands"
      viewBox="-240 -240 480 480"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {Array.from({ length: STRAND_COUNT }, (_, k) => (
        <path
          key={k}
          ref={(el) => {
            paths.current[k] = el;
          }}
          d={strandPath(k, expanded ? 1 : 0)}
        />
      ))}
    </svg>
  );
}

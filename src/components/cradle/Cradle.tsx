import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { stages, sphereImages } from '@/data';

const SVG_NS = 'http://www.w3.org/2000/svg';

interface Dims {
  SPHERE_SIZE: number;
  STRING_LEN: number;
  SPHERE_R: number;
  SPACING: number;
  N: number;
}

function readDims(): Dims {
  const cs = getComputedStyle(document.documentElement);
  const SPHERE_SIZE = parseFloat(cs.getPropertyValue('--sphere-size'));
  const STRING_LEN = parseFloat(cs.getPropertyValue('--string-len'));
  return {
    SPHERE_SIZE,
    STRING_LEN,
    SPHERE_R: SPHERE_SIZE / 2,
    SPACING: SPHERE_SIZE + 1,
    N: stages.length,
  };
}

function computeAnchors(D: Dims) {
  const out: { x: number; y: number }[] = [];
  for (let i = 0; i < D.N; i++) {
    out.push({ x: i * D.SPACING + D.SPHERE_R, y: 0 });
  }
  return out;
}

interface CradleProps {
  /**
   * Invoked with a stage id when a sphere is clicked. Must be referentially
   * stable (e.g. wrapped in useCallback) — the physics simulation re-initialises
   * whenever this changes, since it lives in the setup effect's dependencies.
   */
  onSelectStage: (id: string) => void;
}

export function Cradle({ onSelectStage }: CradleProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const pendulumsRef = useRef<HTMLDivElement>(null);
  const shadowTrackRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stageEl = stageRef.current;
    const pendulumsLayer = pendulumsRef.current;
    const shadowTrack = shadowTrackRef.current;
    const labelsLayer = labelsRef.current;
    if (!stageEl || !pendulumsLayer || !shadowTrack || !labelsLayer) return;

    const { Engine, Bodies, Body, Composite, Constraint } = Matter;

    let D = readDims();
    let anchors = computeAnchors(D);

    const stringEls: SVGLineElement[] = [];
    const sphereEls: HTMLDivElement[] = [];
    const shadowEls: HTMLDivElement[] = [];
    const labelEls: HTMLDivElement[] = [];

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'strings-svg');
    svg.setAttribute('preserveAspectRatio', 'none');
    pendulumsLayer.appendChild(svg);

    function sizeSvg() {
      if (!pendulumsLayer) return;
      const w = pendulumsLayer.clientWidth;
      const h = pendulumsLayer.clientHeight;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.setAttribute('width', String(w));
      svg.setAttribute('height', String(h));
    }
    sizeSvg();
    window.addEventListener('resize', sizeSvg);

    for (let i = 0; i < D.N; i++) {
      const a = anchors[i];

      const line = document.createElementNS(SVG_NS, 'line');
      line.setAttribute('x1', String(a.x));
      line.setAttribute('y1', String(a.y));
      line.setAttribute('x2', String(a.x));
      line.setAttribute('y2', String(a.y + D.STRING_LEN + D.SPHERE_R));
      line.setAttribute('stroke', '#5A5248');
      line.setAttribute('stroke-width', '1');
      line.setAttribute('opacity', '0.65');
      svg.appendChild(line);
      stringEls.push(line);

      const sphere = document.createElement('div');
      sphere.className = 'sphere';
      sphere.dataset.idx = String(i);
      sphere.style.backgroundImage = `url(${sphereImages[i]})`;
      sphere.addEventListener('click', (e) => {
        e.stopPropagation();
        onSelectStage(stages[i].id);
      });
      pendulumsLayer.appendChild(sphere);
      sphereEls.push(sphere);

      const shadow = document.createElement('div');
      shadow.className = 'shadow';
      shadow.style.left = `${a.x - D.SPHERE_R * 1.05}px`;
      shadowTrack.appendChild(shadow);
      shadowEls.push(shadow);

      const label = document.createElement('div');
      label.className = 'label';
      label.textContent = stages[i].name.toLowerCase();
      label.style.left = `${a.x - D.SPHERE_R}px`;
      labelsLayer.appendChild(label);
      labelEls.push(label);
    }

    const revealTimer = window.setTimeout(
      () => stageEl.classList.add('is-revealed'),
      800,
    );

    const engine = Engine.create({
      enableSleeping: true,
      constraintIterations: 6,
      positionIterations: 10,
      velocityIterations: 10,
    });
    engine.gravity.y = 1.0;
    engine.gravity.scale = 0.0011;
    const world = engine.world;

    let bodies: Matter.Body[] = [];
    let constraints: Matter.Constraint[] = [];

    function buildPhysics(D: Dims, anchors: { x: number; y: number }[]) {
      for (const b of bodies) Composite.remove(world, b);
      for (const c of constraints) Composite.remove(world, c);
      bodies = [];
      constraints = [];

      for (let i = 0; i < D.N; i++) {
        const a = anchors[i];
        const restX = a.x;
        const restY = a.y + D.STRING_LEN + D.SPHERE_R;

        const body = Bodies.circle(restX, restY, D.SPHERE_R, {
          density: 0.04,
          restitution: 0.96,
          friction: 0.005,
          frictionAir: 0.0006,
          label: `sphere-${i}`,
          slop: 0.05,
        });

        const constraint = Constraint.create({
          pointA: { x: a.x, y: a.y },
          bodyB: body,
          pointB: { x: 0, y: 0 },
          length: D.STRING_LEN + D.SPHERE_R,
          stiffness: 1.0,
          damping: 0.0,
        });

        Composite.add(world, [body, constraint]);
        bodies.push(body);
        constraints.push(constraint);
      }
    }

    buildPhysics(D, anchors);

    let rafId = 0;
    function render() {
      for (let i = 0; i < D.N; i++) {
        const body = bodies[i];
        const anchor = anchors[i];
        if (!body) continue;

        const sx = body.position.x;
        const sy = body.position.y;

        const el = sphereEls[i];
        el.style.transform = `translate3d(${sx - D.SPHERE_R}px, ${
          sy - D.SPHERE_R
        }px, 0)`;

        stringEls[i].setAttribute('x2', String(sx));
        stringEls[i].setAttribute('y2', String(sy));

        const dx = sx - anchor.x;
        const restY = anchor.y + D.STRING_LEN + D.SPHERE_R;
        const liftAmount = Math.max(0, (restY - sy) / (D.STRING_LEN * 0.4));
        const liftClamped = Math.min(1, liftAmount);

        const offset = dx;
        const opacity = 1 - 0.55 * liftClamped;
        const blur = 3 + 8 * liftClamped;
        const scale = 1 + 0.25 * liftClamped;

        shadowEls[i].style.setProperty('--shadow-offset', `${offset}px`);
        shadowEls[i].style.setProperty('--shadow-opacity', String(opacity));
        shadowEls[i].style.setProperty('--shadow-blur', `${blur}px`);
        shadowEls[i].style.setProperty('--shadow-scale', String(scale));
      }
      rafId = requestAnimationFrame(render);
    }

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    rafId = requestAnimationFrame(render);

    const liftingIndices = new Set<number>();

    function liftAndRelease(idx: number, targetAngleRad: number) {
      if (liftingIndices.has(idx)) return;
      liftingIndices.add(idx);

      const a = anchors[idx];
      const body = bodies[idx];
      const len = D.STRING_LEN + D.SPHERE_R;
      const startTime = performance.now();
      const liftDuration = 900;

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      function step() {
        const now = performance.now();
        const t = Math.min(1, (now - startTime) / liftDuration);
        const eased = easeOutCubic(t);
        const angle = targetAngleRad * eased;
        const px = a.x + Math.sin(angle) * len;
        const py = a.y + Math.cos(angle) * len;
        Body.setPosition(body, { x: px, y: py });
        Body.setVelocity(body, { x: 0, y: 0 });
        Body.setAngularVelocity(body, 0);
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          liftingIndices.delete(idx);
        }
      }
      step();
    }

    function totalKineticEnergy() {
      let ke = 0;
      for (const b of bodies) {
        ke += b.velocity.x * b.velocity.x + b.velocity.y * b.velocity.y;
      }
      return ke;
    }

    const onEnter = () => {
      if (liftingIndices.size > 0) return;
      if (totalKineticEnergy() < 0.05) liftAndRelease(0, -0.45);
    };
    stageEl.addEventListener('mouseenter', onEnter);

    const demoTimer = window.setTimeout(() => liftAndRelease(0, -0.45), 1400);

    let resizeTimer: number | null = null;
    const onResize = () => {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const newD = readDims();
        if (newD.SPHERE_SIZE !== D.SPHERE_SIZE) {
          D = newD;
          anchors = computeAnchors(D);
          for (let i = 0; i < D.N; i++) {
            const a = anchors[i];
            stringEls[i].setAttribute('x1', String(a.x));
            stringEls[i].setAttribute('y1', String(a.y));
            shadowEls[i].style.left = `${a.x - D.SPHERE_R * 1.05}px`;
            labelEls[i].style.left = `${a.x - D.SPHERE_R}px`;
          }
          buildPhysics(D, anchors);
        }
      }, 200);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      Matter.Runner.stop(runner);
      Engine.clear(engine);
      window.clearTimeout(revealTimer);
      window.clearTimeout(demoTimer);
      if (resizeTimer) window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', sizeSvg);
      window.removeEventListener('resize', onResize);
      stageEl.removeEventListener('mouseenter', onEnter);
      // Children we appended:
      for (const el of [...sphereEls, ...shadowEls, ...labelEls]) el.remove();
      svg.remove();
    };
  }, [onSelectStage]);

  return (
    <div ref={stageRef} className="cradle-stage" id="cradle-stage">
      <div className="cradle-frame" />
      <div ref={pendulumsRef} className="pendulums" id="pendulums" />
      <div ref={shadowTrackRef} className="shadow-track" id="shadow-track" />
      <div ref={labelsRef} className="labels" id="labels" />
    </div>
  );
}

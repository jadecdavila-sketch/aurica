import { useEffect, useState } from 'react';
import './Foundation.css';

/**
 * Foundation — the Living Architecture Documentation, drawn as a road atlas.
 *
 * Placed below the Council: every change clears the council first, then routes
 * through the docs. The atlas makes the doc system's own metaphor literal —
 *   · towns        = systems (sub-docs)
 *   · INDEX.md     = the router every agent reads first
 *   · signpost     = keyword routers
 *   · potholes     = Gotchas — traps that have broken things before
 *   · construction = [REVIEW NEEDED] flags — known-imperfect state
 *   · the junction = CROSS_SYSTEM_DEPENDENCIES.md — where ripples travel
 *   · the tollgate = the pre-push git hook — unskippable by design
 * Hover (or tap) any marker to read what it stands for.
 */

type Kind =
  | 'index'
  | 'system'
  | 'junction'
  | 'signpost'
  | 'pothole'
  | 'construction'
  | 'tollgate';

interface Feature {
  id: string;
  kind: Kind;
  x: number;
  y: number;
  name: string;
  file?: string;
  kicker: string;
  title: string;
  body: string;
  keywords?: string[];
  reviewed?: string;
  stale?: boolean;
  roads: string[];
}

const ROADS: { id: string; d: string; major?: boolean; stale?: boolean }[] = [
  { id: 'entry', d: 'M66,282 C112,279 156,283 196,282', major: true },
  { id: 'toEmail', d: 'M224,272 C322,248 410,150 512,138' },
  { id: 'toCal', d: 'M230,286 C342,294 452,298 544,300' },
  { id: 'toFam', d: 'M226,296 C318,344 402,428 488,452', stale: true },
  { id: 'emailX', d: 'M542,142 C616,194 690,250 758,288' },
  { id: 'calX', d: 'M576,300 C636,300 700,300 758,300' },
  { id: 'famX', d: 'M516,452 C604,412 686,352 760,312' },
  { id: 'exit', d: 'M788,300 C812,300 840,300 862,300', major: true },
  { id: 'push', d: 'M906,300 C924,300 942,300 958,300', major: true },
];

const roadD = (id: string) => ROADS.find((r) => r.id === id)?.d ?? '';

const FEATURES: Feature[] = [
  {
    id: 'index',
    kind: 'index',
    x: 212,
    y: 282,
    name: 'INDEX.md',
    kicker: 'Router',
    title: 'INDEX.md — the router',
    body: 'A short index: every system, its keywords, its last-reviewed date, a pointer to its sub-doc. Every agent reads it first to find which way to go.',
    roads: ['entry', 'toEmail', 'toCal', 'toFam'],
  },
  {
    id: 'signpost',
    kind: 'signpost',
    x: 330,
    y: 244,
    name: 'keyword routers',
    kicker: 'Signpost',
    title: 'Keyword routers',
    body: 'Each sub-doc carries keyword fields. Match the task against them and they point to exactly which sub-docs to load in full.',
    roads: ['toEmail', 'toCal', 'toFam'],
  },
  {
    id: 'email',
    kind: 'system',
    x: 528,
    y: 134,
    name: 'Email Pipeline',
    file: '11-email-pipeline.md',
    kicker: 'System',
    title: 'Email Pipeline',
    body: 'Public interface, internal dependencies, gotchas and known issues for the inbound mail system. An agent loads this in full before touching it.',
    keywords: ['email', 'ingest', 'metadata', 'dedup'],
    reviewed: '2026-04-30',
    roads: ['toEmail', 'emailX'],
  },
  {
    id: 'calendar',
    kind: 'system',
    x: 560,
    y: 300,
    name: 'Calendar Sync',
    file: '12-google-calendar-sync.md',
    kicker: 'System',
    title: 'Google Calendar Sync',
    body: 'Two-way event sync over a shared Google OAuth grant. The sub-doc carries the interface every calendar-touching change must respect.',
    keywords: ['calendar', 'oauth', 'events', 'sync'],
    reviewed: '2026-05-02',
    roads: ['toCal', 'calX'],
  },
  {
    id: 'family',
    kind: 'system',
    x: 502,
    y: 458,
    name: 'Family Knowledge',
    file: '26-family-knowledge.md',
    kicker: 'System',
    title: 'Family Knowledge',
    body: 'Profiles and relationships the assistant reasons over. This doc has not been touched in months — the faded road says read it, but verify against current code.',
    keywords: ['family', 'profiles', 'memory'],
    reviewed: '2025-11-18',
    stale: true,
    roads: ['toFam', 'famX'],
  },
  {
    id: 'construction',
    kind: 'construction',
    x: 502,
    y: 512,
    name: '[REVIEW NEEDED]',
    kicker: 'Construction zone',
    title: '[REVIEW NEEDED]',
    body: 'A flag marking state that is known-imperfect and waiting on a fix. Agents working nearby tread carefully — and resolve the flag atomically when the fix lands.',
    roads: ['toFam'],
  },
  {
    id: 'pothole-docid',
    kind: 'pothole',
    x: 372,
    y: 198,
    name: 'pothole',
    kicker: 'Pothole · Gotcha',
    title: 'The doc-ID recipe',
    body: 'email_metadata uses a SHA-256 doc-ID recipe to stop duplicate writes. Miss it and the pipeline writes the same message twice.',
    roads: ['toEmail'],
  },
  {
    id: 'pothole-oauth',
    kind: 'pothole',
    x: 398,
    y: 296,
    name: 'pothole',
    kicker: 'Pothole · Gotcha',
    title: 'Shared OAuth scope',
    body: 'The Gmail OAuth scope is shared across several features. Narrow it for one and you quietly break the others.',
    roads: ['toCal'],
  },
  {
    id: 'pothole-dual',
    kind: 'pothole',
    x: 652,
    y: 226,
    name: 'pothole',
    kicker: 'Pothole · Gotcha',
    title: 'The dual-model layer',
    body: 'The response layer runs two models — Gemini parses, Claude speaks. Treat it as one seam and it tears.',
    roads: ['emailX'],
  },
  {
    id: 'cross',
    kind: 'junction',
    x: 772,
    y: 300,
    name: 'CROSS-SYSTEM',
    file: 'CROSS_SYSTEM_DEPENDENCIES.md',
    kicker: 'Intersection',
    title: 'Cross-system dependencies',
    body: 'Where systems connect — which are foundational, and where a change in one ripples to the others. Foundational work routes through here before any code is written.',
    roads: ['emailX', 'calX', 'famX', 'exit'],
  },
  {
    id: 'tollgate',
    kind: 'tollgate',
    x: 884,
    y: 300,
    name: 'pre-push hook',
    kicker: 'Tollgate',
    title: 'The pre-push hook',
    body: 'A git hook blocks any push that changes source without touching the architecture docs. “This change is small, I’ll skip the review” is exactly when ripples get missed.',
    roads: ['exit', 'push'],
  },
];

const AGENTS: { road: string; dur: string; begin: string }[] = [
  { road: 'entry', dur: '4.5s', begin: '0s' },
  { road: 'toEmail', dur: '8s', begin: '1.4s' },
  { road: 'toCal', dur: '6.5s', begin: '0.6s' },
  { road: 'famX', dur: '7.5s', begin: '2.1s' },
  { road: 'calX', dur: '4s', begin: '0.3s' },
  { road: 'exit', dur: '3.4s', begin: '0s' },
];

const cls = (...xs: (string | false | undefined)[]) => xs.filter(Boolean).join(' ');

const WORKFLOW = [
  {
    n: '01',
    label: 'Before',
    text: 'Read INDEX.md. Match the task to the keywords, load the sub-docs in full, and state the ripple before writing code.',
  },
  {
    n: '02',
    label: 'After',
    text: 'Update interfaces, gotchas and cross-system deps. Bump last-reviewed dates. Resolve [REVIEW NEEDED] flags atomically.',
  },
  {
    n: '03',
    label: 'The hook',
    text: 'A pre-push hook blocks any push that changes source without touching the docs. The workflow is binding, not advisory.',
  },
];

export function Foundation() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMotionOk(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const active = FEATURES.find((f) => f.id === activeId) ?? null;
  const litRoads = new Set(active?.roads ?? []);

  return (
    <section className="foundation fade-up" aria-label="The Foundation">
      <div className="foundation-head">
        <h2 className="font-display font-light text-ink tracking-[-0.022em] text-[clamp(22px,2.6vw,33px)] leading-[1.1] text-center">
          The Foundation
        </h2>
        <span className="font-display italic text-base text-ink-soft">
          the living documentation
        </span>
      </div>

      <p className="foundation-intro">
        Every change clears the Council first. Then it routes through here — the
        roadmap every agent reads before it touches a file.
      </p>

      <div className="atlas">
        <svg
          className="atlas-svg"
          viewBox="0 0 1000 560"
          role="img"
          aria-label="A road atlas of the living architecture documentation"
        >
          <defs>
            <radialGradient id="atlas-paper" cx="42%" cy="36%" r="78%">
              <stop offset="0%" stopColor="#FBF7EF" />
              <stop offset="70%" stopColor="#F5EFE2" />
              <stop offset="100%" stopColor="#ECE3D0" />
            </radialGradient>
            <pattern
              id="atlas-hatch"
              width="11"
              height="11"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect width="11" height="11" fill="#FAF6EE" />
              <rect width="5.5" height="11" className="atlas-hatch-bar" />
            </pattern>
          </defs>

          {/* Paper + frame */}
          <rect x="0" y="0" width="1000" height="560" fill="url(#atlas-paper)" />
          <rect x="11" y="11" width="978" height="538" className="atlas-frame-outer" />
          <rect x="18" y="18" width="964" height="524" className="atlas-frame-inner" />

          {/* Title cartouche — names the territory this map covers */}
          <g>
            <rect x="34" y="34" width="196" height="34" className="atlas-cartouche" />
            <text x="132" y="56" className="atlas-cartouche-text" textAnchor="middle">
              docs/architecture/
            </text>
          </g>

          {/* Compass rose — a plain cardinal rose, distinct from the North Star */}
          <g transform="translate(912 88)">
            <circle r="33" className="atlas-compass-ring" />
            <circle r="24" className="atlas-compass-ring" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1="0"
                y1="-24"
                x2="0"
                y2={deg % 90 === 0 ? -31 : -28}
                className="atlas-compass-tick"
                transform={`rotate(${deg})`}
              />
            ))}
            <path d="M0,-22 L6,0 L0,6 Z" className="atlas-compass-n" />
            <path d="M0,22 L-6,0 L0,6 Z" className="atlas-compass-s" />
            <text x="0" y="-38" className="atlas-compass-letter" textAnchor="middle">
              N
            </text>
          </g>

          {/* Roads — drawn casing-then-line so they read as paths */}
          <g>
            {ROADS.map((r) => (
              <g key={r.id} className={cls('atlas-road-g', litRoads.has(r.id) && 'is-lit')}>
                <path d={r.d} className="atlas-road-casing" />
                <path
                  d={r.d}
                  className={cls(
                    'atlas-road',
                    r.major && 'atlas-road--major',
                    r.stale && 'atlas-road--stale',
                  )}
                />
              </g>
            ))}
          </g>

          {/* Living traffic — agents travelling the docs before the code */}
          {motionOk && (
            <g className="atlas-agents" aria-hidden="true">
              {AGENTS.map((a, i) => (
                <circle key={i} r="3.4" className="atlas-agent">
                  <animateMotion
                    dur={a.dur}
                    begin={a.begin}
                    repeatCount="indefinite"
                    path={roadD(a.road)}
                  />
                </circle>
              ))}
            </g>
          )}

          {/* Entry + exit endpoints (non-interactive) */}
          <g className="atlas-endpoint">
            <circle cx="66" cy="282" r="5" />
            <text x="66" y="312" textAnchor="middle" className="atlas-endpoint-label">
              agents enter
            </text>
          </g>
          <g className="atlas-endpoint">
            <path d="M958,300 l14,0 m-6,-5 l6,5 l-6,5" className="atlas-endpoint-arrow" />
            <text x="966" y="330" textAnchor="middle" className="atlas-endpoint-label">
              git push
            </text>
          </g>

          {/* Interactive features */}
          {FEATURES.map((f) => (
            <FeatureMark
              key={f.id}
              feature={f}
              isActive={activeId === f.id}
              isDimmed={activeId !== null && activeId !== f.id}
              onEnter={() => setActiveId(f.id)}
              onLeave={() => setActiveId(null)}
            />
          ))}
        </svg>
      </div>

      {/* Detail panel — workflow by default, the hovered marker otherwise */}
      <div className="atlas-detail" aria-live="polite">
        {active ? (
          <div className="atlas-detail-card" key={active.id}>
            <div className="atlas-detail-kicker">{active.kicker}</div>
            <h3 className="atlas-detail-title">{active.title}</h3>
            <p className="atlas-detail-body">{active.body}</p>
            {(active.file || active.keywords || active.reviewed) && (
              <div className="atlas-detail-meta">
                {active.file && <span className="atlas-file">{active.file}</span>}
                {active.keywords && (
                  <span className="atlas-keywords">
                    {active.keywords.map((k) => (
                      <span className="kw" key={k}>
                        {k}
                      </span>
                    ))}
                  </span>
                )}
                {active.reviewed && (
                  <span className={cls('atlas-stamp', active.stale && 'is-stale')}>
                    last reviewed {active.reviewed}
                    {active.stale && ' · verify'}
                  </span>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="atlas-detail-card atlas-steps" key="workflow">
            {WORKFLOW.map((s) => (
              <div className="atlas-step" key={s.n}>
                <span className="atlas-step-n">{s.n}</span>
                <div>
                  <div className="atlas-step-label">{s.label}</div>
                  <p className="atlas-step-text">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ───────────────── one marker on the atlas ───────────────── */

function FeatureMark({
  feature: f,
  isActive,
  isDimmed,
  onEnter,
  onLeave,
}: {
  feature: Feature;
  isActive: boolean;
  isDimmed: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <g
      className={cls(
        'atlas-node',
        `atlas-node--${f.kind}`,
        isActive && 'is-active',
        isDimmed && 'is-dimmed',
        f.stale && 'is-stale',
      )}
      transform={`translate(${f.x} ${f.y})`}
      tabIndex={0}
      role="button"
      aria-label={`${f.kicker}: ${f.title}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onEnter}
    >
      <title>{f.title}</title>
      {renderMark(f)}
      <circle className="atlas-hit" r="30" />
    </g>
  );
}

function renderMark(f: Feature) {
  switch (f.kind) {
    case 'index':
      return (
        <>
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1="0"
              y1="-21"
              x2="0"
              y2="-28"
              className="atlas-index-tick"
              transform={`rotate(${deg})`}
            />
          ))}
          <circle r="21" className="atlas-town-ring" />
          <circle r="14" className="atlas-town-disc" />
          <circle r="3.6" className="atlas-town-core" />
          <text y="44" className="atlas-label" textAnchor="middle">
            INDEX.md
          </text>
        </>
      );
    case 'system':
      return (
        <>
          <circle r="15" className="atlas-town-ring" />
          <circle r="10" className="atlas-town-disc" />
          <circle r="3" className="atlas-town-core" />
          <text y="34" className="atlas-label" textAnchor="middle">
            {f.name}
          </text>
        </>
      );
    case 'junction':
      return (
        <>
          <circle r="25" className="atlas-town-ring" />
          <circle r="15" className="atlas-junction-inner" />
          {[0, 90, 180, 270].map((deg) => (
            <circle
              key={deg}
              cx="0"
              cy="-20"
              r="2.6"
              className="atlas-town-core"
              transform={`rotate(${deg})`}
            />
          ))}
          <text y="48" className="atlas-label" textAnchor="middle">
            CROSS-SYSTEM
          </text>
        </>
      );
    case 'signpost':
      return (
        <>
          <line x1="0" y1="22" x2="0" y2="-26" className="atlas-post" />
          {[-22, -9, 4].map((y, i) => (
            <path
              key={i}
              d={`M-3,${y - 5} L17,${y - 5} L23,${y} L17,${y + 5} L-3,${y + 5} Z`}
              className="atlas-fingerboard"
            />
          ))}
          <text y="44" className="atlas-label" textAnchor="middle">
            routers
          </text>
        </>
      );
    case 'pothole':
      return (
        <>
          <circle r="13" className="atlas-pothole-ring" />
          <ellipse cx="-2" cy="1" rx="5.4" ry="3.4" className="atlas-pothole-blob" />
          <ellipse cx="4" cy="-2.5" rx="3.4" ry="2.4" className="atlas-pothole-blob" />
          <ellipse cx="3" cy="4" rx="3" ry="2" className="atlas-pothole-blob" />
        </>
      );
    case 'construction':
      return (
        <>
          <g transform="rotate(-6)">
            <line x1="-34" y1="9" x2="-28" y2="-7" className="atlas-barrier-leg" />
            <line x1="34" y1="9" x2="28" y2="-7" className="atlas-barrier-leg" />
            <rect
              x="-42"
              y="-8"
              width="84"
              height="13"
              rx="2"
              fill="url(#atlas-hatch)"
              className="atlas-barrier-plank"
            />
          </g>
          <text y="34" className="atlas-label atlas-label--flag" textAnchor="middle">
            [REVIEW NEEDED]
          </text>
        </>
      );
    case 'tollgate':
      return (
        <>
          <line x1="-24" y1="16" x2="-24" y2="-20" className="atlas-post" />
          <line x1="24" y1="16" x2="24" y2="-20" className="atlas-post" />
          <g transform="rotate(-15)">
            <rect
              x="-24"
              y="-3"
              width="58"
              height="9"
              rx="2"
              fill="url(#atlas-hatch)"
              className="atlas-barrier-plank"
            />
          </g>
          <circle cx="-24" cy="-20" r="4.5" className="atlas-town-core" />
          <text y="40" className="atlas-label" textAnchor="middle">
            pre-push hook
          </text>
        </>
      );
    default:
      return null;
  }
}

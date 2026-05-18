import { useEffect, useState } from 'react';
import { LobeHeader } from './LobeHeader';
import './Foundation.css';

/**
 * Foundation - the Living Architecture Documentation, drawn as a road atlas.
 *
 * Placed below the Council: every change clears the council first, then routes
 * through the docs. The atlas makes the doc system's own metaphor literal -
 *   · towns        = systems (sub-docs)
 *   · INDEX.md     = the router every agent reads first
 *   · signpost     = keyword routers
 *   · the district = a tier of the architecture (here, the AI layer)
 *   · ripple roads = direct system-to-system dependencies
 *   · potholes     = Gotchas - traps that have broken things before
 *   · construction = [REVIEW NEEDED] flags - known-imperfect state
 *   · the junction = CROSS_SYSTEM_DEPENDENCIES.md - where ripples travel
 *   · the tollgate = the pre-push git hook - unskippable by design
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
  /** Render the town label above the marker instead of below - used where
      roads enter from below and would otherwise cross the label. */
  labelAbove?: boolean;
  roads: string[];
}

const ROADS: { id: string; d: string; major?: boolean; stale?: boolean; ripple?: boolean }[] = [
  // spine - agents enter the atlas
  { id: 'entry', d: 'M100,360 C140,358 172,361 200,360', major: true },
  // INDEX out to the systems
  { id: 'toEmail', d: 'M230,350 C300,312 372,282 426,270' },
  { id: 'toCal', d: 'M232,352 C340,322 472,272 558,256' },
  { id: 'toNotif', d: 'M232,356 C372,344 552,304 670,290' },
  { id: 'toVault', d: 'M230,372 C296,408 376,436 448,444', stale: true },
  { id: 'toGifts', d: 'M232,372 C372,428 506,450 608,453' },
  // systems out to the cross-system junction
  { id: 'emailX', d: 'M462,274 C556,304 668,332 752,352' },
  { id: 'calX', d: 'M596,262 C652,290 706,318 756,344' },
  { id: 'notifX', d: 'M704,300 C724,316 742,332 758,346' },
  { id: 'vaultX', d: 'M488,442 C580,418 680,388 754,366' },
  { id: 'giftsX', d: 'M646,444 C688,422 726,396 758,372' },
  // junction -> hook -> push
  { id: 'exit', d: 'M794,360 C812,360 830,360 842,360', major: true },
  { id: 'push', d: 'M892,360 C906,360 918,360 926,360', major: true },
  // up into the AI-layer district
  { id: 'aiEmailSafety', d: 'M436,246 C414,204 394,160 380,132' },
  { id: 'aiEmailGemini', d: 'M456,248 C488,204 520,158 544,132' },
  { id: 'aiSafetyGemini', d: 'M392,114 C440,108 488,108 534,114' },
  { id: 'aiGeminiClaude', d: 'M572,114 C620,120 668,120 704,114' },
  { id: 'aiNotifClaude', d: 'M694,268 C706,224 714,172 720,134' },
  // ripple roads - direct system-to-system dependencies
  { id: 'ripEmailCal', d: 'M462,260 C500,252 538,251 560,253', ripple: true },
  { id: 'ripCalNotif', d: 'M592,260 C624,270 652,280 674,285', ripple: true },
  { id: 'ripEmailGifts', d: 'M450,282 C486,344 548,408 612,444', ripple: true },
];

const roadD = (id: string) => ROADS.find((r) => r.id === id)?.d ?? '';

const FEATURES: Feature[] = [
  {
    id: 'index',
    kind: 'index',
    x: 214,
    y: 360,
    name: 'INDEX.md',
    kicker: 'Router',
    title: 'INDEX.md - the router',
    body: 'A short index: every system, its keywords, its last-reviewed date, a pointer to its sub-doc. Every agent reads it first to find which way to go.',
    roads: ['entry', 'toEmail', 'toCal', 'toNotif', 'toVault', 'toGifts'],
  },
  {
    id: 'signpost',
    kind: 'signpost',
    x: 322,
    y: 336,
    name: 'keyword routers',
    kicker: 'Signpost',
    title: 'Keyword routers',
    body: 'Each sub-doc carries keyword fields. Match the task against them and they point to exactly which sub-docs to load in full.',
    roads: ['toEmail', 'toCal', 'toNotif', 'toVault', 'toGifts'],
  },

  /* Domain features - the systems an agent actually changes */
  {
    id: 'email',
    kind: 'system',
    x: 444,
    y: 264,
    name: 'Email Pipeline',
    file: '11-email-pipeline.md',
    kicker: 'Domain feature',
    title: 'Email Pipeline',
    body: 'Filter, urgency-gate, defer or parse, sanitize, Gemini, validate, store. The most-connected system in the codebase - it touches seven others.',
    keywords: ['gmail', 'pushHandler', 'parseEmail', 'email_metadata'],
    reviewed: '2026-05-08',
    roads: ['toEmail', 'emailX', 'aiEmailSafety', 'aiEmailGemini', 'ripEmailCal', 'ripEmailGifts'],
  },
  {
    id: 'calendar',
    kind: 'system',
    x: 576,
    y: 252,
    name: 'Calendar Sync',
    file: '12-google-calendar-sync.md',
    kicker: 'Domain feature',
    title: 'Google Calendar Sync',
    body: 'Webhook plus scheduled sync plus writer. The client and the server each carry a copy of the routing rules - they must stay in lock-step.',
    keywords: ['google calendar', 'calendarRouting', 'events', 'deduplicateEvents'],
    reviewed: '2026-05-07',
    roads: ['toCal', 'calX', 'ripEmailCal', 'ripCalNotif'],
  },
  {
    id: 'notifications',
    kind: 'system',
    x: 690,
    y: 286,
    name: 'Notifications',
    file: '14-notifications.md',
    kicker: 'Domain feature',
    title: 'Notifications',
    body: 'An hourly cron and a real-time trigger, every line of copy routed through one voice chokepoint. The SCHEDULE table is the single source of the daily cadence.',
    keywords: ['hourlyNotifier', 'realTimeAlert', 'FCM', 'SCHEDULE'],
    reviewed: '2026-05-07',
    roads: ['toNotif', 'notifX', 'aiNotifClaude', 'ripCalNotif'],
  },
  {
    id: 'vault',
    kind: 'system',
    x: 468,
    y: 446,
    name: 'Document Vault',
    file: '13-document-vault.md',
    kicker: 'Domain feature',
    title: 'Document Vault',
    body: 'A sidecar store - the documents stay in the user’s own Drive, only the metadata in Firestore. This doc has not been touched in weeks; the faded road says read it, but verify against current code.',
    keywords: ['vault', 'sidecar', 'drive.file', 'vault_documents'],
    reviewed: '2026-04-28',
    stale: true,
    roads: ['toVault', 'vaultX'],
  },
  {
    id: 'gifts',
    kind: 'system',
    x: 628,
    y: 452,
    name: 'Gifts',
    file: '15-gifts.md',
    kicker: 'Domain feature',
    title: 'Gifts',
    body: 'Birthday-lead and email-detected gift opportunities, carried through a Gemini chat and a curation pass before anything reaches her.',
    keywords: ['gifts', 'birthday', 'gift_conversations', 'giftCuration'],
    reviewed: '2026-05-06',
    roads: ['toGifts', 'giftsX', 'ripEmailGifts'],
  },

  /* The AI layer - a tier of the architecture, shown as a district */
  {
    id: 'safety',
    kind: 'system',
    x: 374,
    y: 114,
    name: 'AI Safety',
    labelAbove: true,
    file: '09-ai-safety-pipeline.md',
    kicker: 'AI layer',
    title: 'AI Safety Pipeline',
    body: 'A three-layer defense - sanitize the input, run the model, validate the output. It wraps every untrusted string before a model ever sees it.',
    keywords: ['email-sanitizer', 'output-validator', 'prompt injection', 'PHI'],
    reviewed: '2026-05-01',
    roads: ['aiEmailSafety', 'aiSafetyGemini'],
  },
  {
    id: 'gemini',
    kind: 'system',
    x: 552,
    y: 114,
    name: 'Gemini',
    labelAbove: true,
    file: '07-gemini-integration.md',
    kicker: 'AI layer',
    title: 'Gemini Integration',
    body: 'Parsing, prompt cache, Vision OCR and narrative. parseEmail is the central call - most of the codebase reaches a model through here.',
    keywords: ['gemini', 'parseEmail', 'prompt cache', 'Vision OCR'],
    reviewed: '2026-05-07',
    roads: ['aiEmailGemini', 'aiSafetyGemini', 'aiGeminiClaude'],
  },
  {
    id: 'claude',
    kind: 'system',
    x: 724,
    y: 114,
    name: 'Claude Voice',
    labelAbove: true,
    file: '08-claude-voice-engine.md',
    kicker: 'AI layer',
    title: 'Claude Voice Engine',
    body: 'The single chokepoint every notification surface speaks through. One hard-rules file sets the voice for all of them at once.',
    keywords: ['claude', 'larkinClaude', 'hard rules', 'prompt caching'],
    reviewed: '2026-05-07',
    roads: ['aiNotifClaude', 'aiGeminiClaude'],
  },

  /* Potholes - the Gotchas */
  {
    id: 'pothole-docid',
    kind: 'pothole',
    x: 340,
    y: 298,
    name: 'pothole',
    kicker: 'Pothole · Gotcha',
    title: 'The doc-ID recipe',
    body: 'email_metadata uses a SHA-256 doc-ID recipe to stop duplicate writes. The recipe is repeated in three files - change it in one and you orphan every existing doc.',
    roads: ['toEmail'],
  },
  {
    id: 'pothole-oauth',
    kind: 'pothole',
    x: 360,
    y: 310,
    name: 'pothole',
    kicker: 'Pothole · Gotcha',
    title: 'Shared OAuth scope',
    body: 'One Google OAuth grant is shared across email, calendar and vault. Narrow the scope for one feature and you quietly break the others.',
    roads: ['toCal'],
  },
  {
    id: 'pothole-dual',
    kind: 'pothole',
    x: 640,
    y: 118,
    name: 'pothole',
    kicker: 'Pothole · Gotcha',
    title: 'The dual-model seam',
    body: 'Two models share the work - Gemini parses, Claude speaks - and one dispatcher routes between them. Treat the seam as a single model and the voice tears.',
    roads: ['aiGeminiClaude'],
  },
  {
    id: 'pothole-rtalert',
    kind: 'pothole',
    x: 528,
    y: 376,
    name: 'pothole',
    kicker: 'Pothole · Gotcha',
    title: 'The realTimeAlert trigger',
    body: 'realTimeAlert fires on every email_metadata write - and quietly creates gift conversation stubs. Touch the trigger and the ripple reaches gifts.',
    roads: ['ripEmailGifts'],
  },

  /* Construction zone - a [REVIEW NEEDED] flag */
  {
    id: 'construction',
    kind: 'construction',
    x: 468,
    y: 502,
    name: '[REVIEW NEEDED]',
    kicker: 'Construction zone',
    title: '[REVIEW NEEDED]',
    body: 'A flag marking state that is known-imperfect and waiting on a fix. Agents working nearby tread carefully - and resolve the flag atomically when the fix lands.',
    roads: ['toVault'],
  },

  /* The cross-system junction + the tollgate */
  {
    id: 'cross',
    kind: 'junction',
    x: 772,
    y: 360,
    name: 'CROSS-SYSTEM',
    file: 'CROSS_SYSTEM_DEPENDENCIES.md',
    kicker: 'Intersection',
    title: 'Cross-system dependencies',
    body: 'Where systems connect - which are foundational, and where a change in one ripples to the others. Foundational work routes through here before any code is written.',
    roads: ['emailX', 'calX', 'notifX', 'vaultX', 'giftsX', 'exit'],
  },
  {
    id: 'tollgate',
    kind: 'tollgate',
    x: 868,
    y: 360,
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
  { road: 'toNotif', dur: '7s', begin: '0.6s' },
  { road: 'calX', dur: '5s', begin: '0.3s' },
  { road: 'aiNotifClaude', dur: '6.5s', begin: '2.1s' },
  { road: 'ripEmailGifts', dur: '9s', begin: '1.8s' },
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
      <LobeHeader
        title="The Foundation"
        lead="Living documentation"
        description="the architecture roadmap every agent reads before it touches a file."
        problemId="foundation"
      />

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

          {/* Title cartouche - names the territory this map covers */}
          <g>
            <rect x="34" y="34" width="196" height="34" className="atlas-cartouche" />
            <text x="132" y="56" className="atlas-cartouche-text" textAnchor="middle">
              codebase map
            </text>
          </g>

          {/* Compass rose - a plain cardinal rose, distinct from the North Star */}
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

          {/* AI-layer district - a tinted region grouping one tier of the atlas */}
          <g aria-hidden="true">
            <rect x="274" y="52" width="552" height="120" rx="8" className="atlas-district" />
            <text x="550" y="66" textAnchor="middle" className="atlas-district-label">
              the AI layer
            </text>
          </g>

          {/* Roads - drawn casing-then-line so they read as paths.
              Ripple roads skip the casing - they read as informal side-roads. */}
          <g>
            {ROADS.map((r) => (
              <g key={r.id} className={cls('atlas-road-g', litRoads.has(r.id) && 'is-lit')}>
                {!r.ripple && <path d={r.d} className="atlas-road-casing" />}
                <path
                  d={r.d}
                  className={cls(
                    'atlas-road',
                    r.major && 'atlas-road--major',
                    r.stale && 'atlas-road--stale',
                    r.ripple && 'atlas-road--ripple',
                  )}
                />
              </g>
            ))}
          </g>

          {/* Living traffic - agents travelling the docs before the code */}
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
            <circle cx="100" cy="360" r="5" />
            <text x="100" y="338" textAnchor="middle" className="atlas-endpoint-label">
              agents enter
            </text>
          </g>
          <g className="atlas-endpoint">
            <path d="M926,360 l14,0 m-6,-5 l6,5 l-6,5" className="atlas-endpoint-arrow" />
            <text x="933" y="338" textAnchor="middle" className="atlas-endpoint-label">
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

      {/* Detail panel - workflow by default, the hovered marker otherwise */}
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
          <div className="atlas-detail-card" key="workflow">
            <div className="atlas-steps">
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
          <text
            y={f.labelAbove ? -26 : 34}
            className="atlas-label"
            textAnchor="middle"
          >
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

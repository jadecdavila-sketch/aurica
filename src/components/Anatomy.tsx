import './Anatomy.css';

/**
 * Anatomy - the anatomy of a Business Lead.
 *
 * A labeled diagram of the unicorn-headed figure: each thin line points to
 * an anatomical anchor (head, back of head, eye, heart, hand) and names the
 * role it stands for. The Business Lead is the kind of human in the loop
 * that can truly execute masterful product designs - the closing argument
 * from the section above, made concrete.
 *
 * Coordinates are container percentages. The image sits centered in the
 * stage and takes ~50% of the stage width, leaving roomy gutters for the
 * left/right labels.
 */

interface Annotation {
  id: string;
  label: string;
  /** Anatomical anchor on the figure, in stage %. */
  anchor: { x: number; y: number };
  /** Line endpoint AND inner edge of the label, in stage %. */
  endpoint: { x: number; y: number };
  side: 'left' | 'right';
  /** Allow the label to wrap to two lines for longer text. */
  multiline?: boolean;
}

const ANNOTATIONS: Annotation[] = [
  {
    id: 'strategist',
    label: 'Business strategist',
    anchor: { x: 47, y: 8 },
    endpoint: { x: 22, y: 5 },
    side: 'left',
  },
  {
    id: 'researcher',
    label: 'Researcher',
    anchor: { x: 56, y: 13 },
    endpoint: { x: 78, y: 9 },
    side: 'right',
  },
  {
    id: 'artisan',
    label: 'Artisan',
    anchor: { x: 40, y: 13 },
    endpoint: { x: 22, y: 19 },
    side: 'left',
  },
  {
    id: 'diplomat',
    label: 'Diplomat',
    anchor: { x: 49, y: 30 },
    endpoint: { x: 78, y: 31 },
    side: 'right',
  },
  {
    id: 'architect',
    label: 'UX architect',
    anchor: { x: 48, y: 44 },
    endpoint: { x: 22, y: 46 },
    side: 'left',
  },
  {
    id: 'legs',
    label: 'Moves at the speed of business',
    anchor: { x: 47, y: 78 },
    endpoint: { x: 78, y: 78 },
    side: 'right',
    multiline: true,
  },
];

export function Anatomy() {
  return (
    <section className="anatomy fade-up" aria-label="The anatomy of a Business Lead">
      <h2 className="anatomy-title">The anatomy of a Business Lead</h2>
      <p className="anatomy-subtitle">
        the kind of human in the loop that can truly execute masterful product
        designs
      </p>

      <div className="anatomy-stage">
        <img
          className="anatomy-figure"
          src="/unicorn.png"
          alt="An illustrated figure with a unicorn’s head, dressed in earth-toned clothing"
        />

        <svg
          className="anatomy-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {ANNOTATIONS.map((a) => (
            <g key={a.id}>
              <line
                x1={a.anchor.x}
                y1={a.anchor.y}
                x2={a.endpoint.x}
                y2={a.endpoint.y}
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx={a.anchor.x}
                cy={a.anchor.y}
                r="0.55"
                className="anatomy-anchor"
              />
            </g>
          ))}
        </svg>

        {ANNOTATIONS.map((a) => (
          <span
            key={a.id}
            className={
              `anatomy-label anatomy-label--${a.side}` +
              (a.multiline ? ' anatomy-label--multiline' : '')
            }
            style={{ left: `${a.endpoint.x}%`, top: `${a.endpoint.y}%` }}
          >
            {a.label}
          </span>
        ))}
      </div>

      {/* Mobile fallback - the overlay doesn't fit at narrow widths. */}
      <ul className="anatomy-legend" aria-label="Roles">
        {ANNOTATIONS.map((a) => (
          <li key={a.id}>{a.label}</li>
        ))}
      </ul>
    </section>
  );
}

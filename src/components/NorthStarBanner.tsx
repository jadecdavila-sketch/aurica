import { LobeHeader } from './LobeHeader';
import './NorthStarBanner.css';

/**
 * NorthStarBanner - TO-DO 1, Option B.
 *
 * A banner that sits above the council ring. It names the context the
 * council operates within: the council does not free-associate, it reads the
 * Product North Star before it speaks.
 *
 * Title: "Product North Star" - the prominent section heading. Below it, the
 * product thesis - the themes and guiding principles every piece of product
 * work is filtered through. Subtext: the verbatim canonical line from the
 * handoff brief, confirmed by Jade as load-bearing for the framework. Nothing
 * in the subtext is paraphrased.
 */
export function NorthStarBanner() {
  return (
    <aside className="north-star fade-up" aria-label="Product North Star">
      {/* Compass-star medallion - a guiding star inside a lens, echoing the
          radial lines of the council ring below. */}
      <span className="north-star-medallion" aria-hidden="true">
        <svg viewBox="0 0 48 48" className="north-star-icon">
          <circle className="ns-ring" cx="24" cy="24" r="21" />
          <g className="ns-rays">
            <line x1="28.95" y1="19.05" x2="33.55" y2="14.45" />
            <line x1="28.95" y1="28.95" x2="33.55" y2="33.55" />
            <line x1="19.05" y1="28.95" x2="14.45" y2="33.55" />
            <line x1="19.05" y1="19.05" x2="14.45" y2="14.45" />
          </g>
          <path
            className="ns-star"
            d="M24 6 C25.5 18 30 22.5 42 24 C30 25.5 25.5 30 24 42 C22.5 30 18 25.5 6 24 C18 22.5 22.5 18 24 6 Z"
          />
          <circle className="ns-core" cx="24" cy="24" r="2.2" />
        </svg>
      </span>

      <LobeHeader
        title="Product North Star"
        lead="Product thesis"
        description="the product themes and guiding principles. All product work is filtered through this lens."
        problemId="north-star"
      />

      <p className="north-star-subtext">
        “<span className="key">Auditable</span> means she can check Larkin’s
        work. <span className="key">Trustworthy</span> means she doesn’t have
        to.”
      </p>

      <div className="north-star-source">
        <span className="file">PRODUCT_NORTH_STAR.md</span>
        <span className="dot" aria-hidden />
        <span>read before the council speaks</span>
      </div>
    </aside>
  );
}

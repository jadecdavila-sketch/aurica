import './HumanInTheLoop.css';

/**
 * HumanInTheLoop - the closing section of the home page.
 *
 * The framework's load-bearing claim: the methodology matters, but it is the
 * practitioner wielding it that makes it unbeatable. The painter's tools sit
 * above two canvases - the same palette in two hands - with branch lines
 * forking down to each: a novice's result, and a master's.
 */
export function HumanInTheLoop() {
  return (
    <section className="hitl fade-up" aria-label="The human in the loop">
      <div className="hitl-divider" aria-hidden="true" />

      <h2 className="hitl-title">The human in the loop</h2>

      <div className="hitl-body">
        <p>
          You can give a decent painter an incredible color palette and all the
          right tools, and the result will still be wildly different from what a
          master can paint with the same palette and tools.
        </p>
        <p>
          The framework can take an ok team to pretty damn good. In the hands of
          a masterful practitioner, it becomes <strong><em>unbeatable</em></strong>.
        </p>
        <p>
          The framework isn’t just a tool, and what we do isn’t just about AI.
          AI is the medium of the moment, but the craft underneath it is older:
          discernment, judgment, care, taste. The framework codifies what
          masters already do.
        </p>
        <p className="hitl-closer">
          That is the golden ticket. Not the methodology in isolation. The
          methodology in the hands of the people who forged it.
        </p>
      </div>

      {/* The same tools forking to two outcomes: a novice canvas and a Monet. */}
      <div className="hitl-diagram">
        <img
          className="hitl-tools"
          src="/painter-tools.png"
          alt="An overhead view of a painter’s mixed paints and brushes on a wooden table"
        />

        <div className="hitl-branches">
          <span className="hitl-branch-node" aria-hidden="true" />
          <svg
            className="hitl-branch-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="50" y1="0" x2="25" y2="100" vectorEffect="non-scaling-stroke" />
            <line x1="50" y1="0" x2="75" y2="100" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="hitl-branch-label hitl-branch-label--novice">
            professional
          </span>
          <span className="hitl-branch-label hitl-branch-label--master">
            master
          </span>
        </div>

        <div className="hitl-pair">
          <figure className="hitl-canvas">
            <img
              src="/novice-painting.png"
              alt="An abstract painting by a novice, in muted blocks of color"
            />
            <figcaption className="hitl-canvas-label">professional</figcaption>
          </figure>
          <figure className="hitl-canvas">
            <img
              src="/Claude_Monet.jpg"
              alt="Claude Monet’s painting Woman with a Parasol, Turned to the Left"
            />
            <figcaption className="hitl-canvas-label">master</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

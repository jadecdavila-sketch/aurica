import { useState } from 'react';
import { ProblemSheet } from './ProblemSheet';
import './LobeHeader.css';

/**
 * LobeHeader - the shared header for the three home-page "lobe" sections:
 * the North Star, the Council, the Foundation. One title / description / CTA
 * treatment so the three read as a consistent set. The CTA opens the
 * ProblemSheet drawer for this lobe.
 */
interface LobeHeaderProps {
  /** Section title, e.g. "Product North Star". Renders as the section h2. */
  title: string;
  /** The description body. With `lead`, shown as "<lead> - <description>". */
  description: string;
  /** Optional weighted lead phrase of the description, e.g. "Product thesis". */
  lead?: string;
  /** Optional problem-drawer id. Omit for a header with no CTA. */
  problemId?: string;
}

export function LobeHeader({ title, lead, description, problemId }: LobeHeaderProps) {
  const [problemOpen, setProblemOpen] = useState(false);

  return (
    <>
      <header className="lobe-header">
        <h2 className="lobe-title">{title}</h2>
        <p className="lobe-description">
          {lead && (
            <>
              <span className="lobe-lead">{lead}</span>
              {' - '}
            </>
          )}
          {description}
        </p>
        {problemId && (
          <button
            type="button"
            className="lobe-cta"
            onClick={() => setProblemOpen(true)}
          >
            view the problem this solves
            <span className="lobe-cta-arrow" aria-hidden="true">
              →
            </span>
          </button>
        )}
      </header>

      {problemId && (
        <ProblemSheet
          problemId={problemId}
          open={problemOpen}
          onOpenChange={setProblemOpen}
        />
      )}
    </>
  );
}

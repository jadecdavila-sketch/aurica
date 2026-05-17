import { useState, useCallback, useEffect } from 'react';
import { team } from '@/data';
import './TeamMedallion.css';

/* Three crafts, 120° apart: top, lower-right, lower-left. */
const ANGLES = [0, 120, 240];
const LABEL_POS: Record<number, 'above' | 'below'> = {
  0: 'above',
  1: 'below',
  2: 'below',
};

function monogram(name: string) {
  return name
    .split(' ')
    .map((w) => w[0] ?? '')
    .slice(0, 2)
    .join('');
}

interface TeamMedallionProps {
  onSelect: (id: string) => void;
}

/**
 * TeamMedallion — the studio as the human form of the council.
 *
 * Three portraits overlap into a single medallion. A click opens it: the
 * circles glide apart into a triangle, radial lines draw in, the studio
 * mark surfaces at the center. The same medallion-to-ring gesture as the
 * homepage CouncilRing. Clicking a maker drills into their drawer.
 */
export function TeamMedallion({ onSelect }: TeamMedallionProps) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((v) => !v), []);

  // Collapse on Escape, mirroring the council ring.
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [expanded]);

  const handleRingClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (expanded) {
      // A click on a member is handled by the member; everything else collapses.
      if (target.closest('.studio-member')) return;
      toggle();
      return;
    }
    toggle();
  };

  const handleMemberClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!expanded) {
      // First click opens the medallion; a second click drills in.
      setExpanded(true);
      return;
    }
    onSelect(id);
  };

  return (
    <div className={`studio-stage ${expanded ? 'is-expanded' : ''}`}>
      <div
        className="studio-ring"
        onClick={handleRingClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-label={expanded ? 'Collapse the studio' : 'Meet the studio'}
      >
        <div className="studio-ring-inner">
          <svg
            className="studio-lines"
            viewBox="-240 -240 480 480"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <circle cx="0" cy="0" r="200" />
            <line data-index="0" x1="0" y1="0" x2="0" y2="-200" />
            <line data-index="1" x1="0" y1="0" x2="173.21" y2="100" />
            <line data-index="2" x1="0" y1="0" x2="-173.21" y2="100" />
          </svg>

          {/* The studio mark — the point all three crafts meet. */}
          <div className="studio-center" aria-hidden>
            <span className="studio-center-mark">+</span>
            <span className="studio-center-hint">the studio</span>
          </div>

          {team.map((m, i) => (
            <div
              key={m.id}
              className={`studio-member ${m.open ? 'is-open-seat' : ''}`}
              data-id={m.id}
              data-index={i}
              style={{ ['--angle' as string]: `${ANGLES[i]}deg` }}
              onClick={(e) => handleMemberClick(e, m.id)}
              role="button"
              tabIndex={expanded ? 0 : -1}
              aria-label={
                m.open ? 'An open seat at the studio' : `Meet ${m.name}`
              }
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && expanded) {
                  e.preventDefault();
                  e.stopPropagation();
                  onSelect(m.id);
                }
              }}
            >
              <div className="studio-portrait">
                {m.portrait ? (
                  <img src={encodeURI(m.portrait)} alt={m.name} loading="lazy" />
                ) : m.open ? (
                  <span className="studio-seat-mark">+</span>
                ) : (
                  <span className="studio-monogram">{monogram(m.name)}</span>
                )}
              </div>
              <div className={`studio-label ${LABEL_POS[i]}`}>
                <div className="studio-label-name">
                  {m.open ? 'The third seat' : m.name}
                </div>
                <div className="studio-label-role">
                  {m.open ? 'open role' : `co-founder · ${m.craft}`}
                </div>
              </div>
            </div>
          ))}

          <div className="studio-convene-hint">
            click <span className="arrow">→</span> meet the studio
          </div>
        </div>
      </div>
    </div>
  );
}

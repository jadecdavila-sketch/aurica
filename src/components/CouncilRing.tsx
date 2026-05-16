import { useState, useCallback, useEffect, useRef } from 'react';
import { getCouncilById, councilImages } from '@/data';
import './CouncilRing.css';

// Order in which the six councils appear in the ring (clockwise from top).
const councilOrder = [
  'architect',
  'midnight-responder',
  'witness',
  'questioner',
  'groundskeeper',
  'long-game',
] as const;

// Top three sit "above" their portraits; bottom three sit "below".
// Index map (clockwise from 12 o'clock): 0 top, 1 upper-right, 2 lower-right,
// 3 bottom, 4 lower-left, 5 upper-left.
const labelPositions: Record<number, 'above' | 'below'> = {
  0: 'above',
  1: 'above',
  2: 'below',
  3: 'below',
  4: 'below',
  5: 'above',
};

interface CouncilRingProps {
  onSelectCouncil: (id: string) => void;
}

export function CouncilRing({ onSelectCouncil }: CouncilRingProps) {
  const [expanded, setExpanded] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setExpanded((v) => !v), []);

  // Close ring on Escape
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
    // In expanded state, clicking a member opens the drawer (handled below).
    // Clicking the center node collapses. Clicking blank space collapses.
    if (expanded) {
      if (target.closest('.council-member')) return;
      toggle();
      return;
    }
    // In collapsed state, any click expands.
    toggle();
  };

  const handleMemberClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!expanded) {
      // First click expands; user can click again to drill in.
      setExpanded(true);
      return;
    }
    onSelectCouncil(id);
  };

  return (
    <div className={`council-stage ${expanded ? 'is-expanded' : ''}`}>
      <div
        ref={ringRef}
        className="council-ring"
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
        aria-label={expanded ? 'Collapse the council' : 'Convene the council'}
      >
        <div className="council-ring-inner">
          <svg
            className="council-lines"
            viewBox="-240 -240 480 480"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <circle cx="0" cy="0" r="230" />
            <line data-index="0" x1="0" y1="0" x2="0"        y2="-230" />
            <line data-index="1" x1="0" y1="0" x2="199.19"   y2="-115" />
            <line data-index="2" x1="0" y1="0" x2="199.19"   y2="115" />
            <line data-index="3" x1="0" y1="0" x2="0"        y2="230" />
            <line data-index="4" x1="0" y1="0" x2="-199.19"  y2="115" />
            <line data-index="5" x1="0" y1="0" x2="-199.19"  y2="-115" />
          </svg>

          <div className="council-center" onClick={(e) => { e.stopPropagation(); if (expanded) toggle(); }}>
            <div>
              <span className="slash">/</span>council
            </div>
            <div className="council-center-hint">invoke</div>
          </div>

          {councilOrder.map((id, i) => {
            const c = getCouncilById(id);
            const src = councilImages[id];
            if (!c || !src) return null;
            const angle = i * 60;
            const labelPos = labelPositions[i];
            return (
              <div
                key={id}
                className="council-member"
                data-id={id}
                data-index={i}
                style={{ ['--angle' as string]: `${angle}deg` }}
                onClick={(e) => handleMemberClick(e, id)}
                role="button"
                tabIndex={expanded ? 0 : -1}
                aria-label={`Open ${c.name}`}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && expanded) {
                    e.preventDefault();
                    e.stopPropagation();
                    onSelectCouncil(id);
                  }
                }}
              >
                <div className="council-portrait">
                  <img src={encodeURI(src)} alt={c.name} loading="lazy" />
                </div>
                <div className={`council-label ${labelPos}`}>
                  <div className="council-label-name">{c.name}</div>
                  <div className="council-label-pillar">{c.archetypeName}</div>
                </div>
              </div>
            );
          })}

          <div className="council-convene-hint">
            click <span className="arrow">→</span> convene the council
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { StrandSpinner } from '@/components/spinner/StrandSpinner';
import { NorthStarBanner } from '@/components/NorthStarBanner';
import { CouncilRing } from '@/components/CouncilRing';
import { Foundation } from '@/components/Foundation';

/**
 * SpinnerLab - a standalone room for the StrandSpinner prototype.
 *
 * Off-nav, reachable at /spinner-lab. The three real homepage sections are
 * dropped into the three lobes unchanged, so the toy can be judged against
 * the actual content before it is woven into the homepage.
 */
export function SpinnerLab() {
  // The council lobe billows wider while the council ring is expanded; the
  // ring reports its state up so the StrandSpinner can follow it.
  const [councilExpanded, setCouncilExpanded] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center px-6 pt-[140px] pb-40">
      <div className="text-eyebrow text-eyebrow-rule mb-10">prototype</div>

      <h1 className="mb-4 font-display font-light text-ink text-center tracking-[-0.02em] leading-[1.14] text-[clamp(28px,4vw,48px)] max-w-[840px] mx-auto">
        How we take products from good to{' '}
        <span className="font-normal text-terracotta">great</span>.
      </h1>
      <p className="mb-16 font-display text-ink-soft text-center text-[clamp(15px,1.7vw,19px)] max-w-[640px] mx-auto">
        An AI augmented + accelerated product development framework
      </p>

      <StrandSpinner
        northStar={<NorthStarBanner />}
        council={
          <CouncilRing
            onSelectCouncil={() => {}}
            onExpandedChange={setCouncilExpanded}
          />
        }
        foundation={<Foundation />}
        councilExpanded={councilExpanded}
      />
    </section>
  );
}

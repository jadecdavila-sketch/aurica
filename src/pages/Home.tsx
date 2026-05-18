import { useCallback, useState } from 'react';
import { Cradle } from '@/components/cradle/Cradle';
import { CouncilRing } from '@/components/CouncilRing';
import { CouncilSheet } from '@/components/CouncilSheet';
import { StageSheet } from '@/components/StageSheet';
import { NorthStarBanner } from '@/components/NorthStarBanner';
import { Foundation } from '@/components/Foundation';
import { LobeHeader } from '@/components/LobeHeader';

export function Home() {
  const [openCouncilId, setOpenCouncilId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [openStageId, setOpenStageId] = useState<string | null>(null);
  const [stageDrawerOpen, setStageDrawerOpen] = useState(false);

  const handleSelectCouncil = (id: string) => {
    setOpenCouncilId(id);
    setDrawerOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    setDrawerOpen(open);
    // Keep councilId mounted briefly so the close animation can finish
    if (!open) {
      setTimeout(() => setOpenCouncilId(null), 300);
    }
  };

  // Memoised - the Cradle re-initialises its physics whenever this changes.
  const handleSelectStage = useCallback((id: string) => {
    setOpenStageId(id);
    setStageDrawerOpen(true);
  }, []);

  const handleStageOpenChange = useCallback((open: boolean) => {
    setStageDrawerOpen(open);
    // Keep stageId mounted briefly so the close animation can finish
    if (!open) {
      setTimeout(() => setOpenStageId(null), 300);
    }
  }, []);

  // Prev/next swaps the open stage without closing the drawer.
  const handleStageNavigate = useCallback((id: string) => {
    setOpenStageId(id);
  }, []);

  return (
    <>
      <section className="min-h-screen flex flex-col items-center px-6 pt-[160px] pb-32">
        <div className="text-eyebrow text-eyebrow-rule mb-14">a studio</div>

        <h1 className="text-display text-center max-w-[1100px] mx-auto mb-24">
          Building AI for the contexts
          <br />
          where <span className="accent">human relationship</span> matters.
        </h1>

        <Cradle onSelectStage={handleSelectStage} />

        <div className="mt-16 flex flex-col items-center gap-2">
          <h2 className="font-display font-light text-ink tracking-[-0.022em] text-[clamp(22px,2.6vw,33px)] leading-[1.1] text-center">
            The Product Development Journey
          </h2>
          <span className="font-display text-lg text-ink-soft">
            our methodology, in motion
          </span>
        </div>

        <div className="river">
          <div className="river-dots" />
        </div>
      </section>

      {/* The Council - North Star banner (Option B) sets the context, then the
          section title sits directly above the medallion-to-ring interaction
          with its bottom drawer drill-in. */}
      <section className="px-6 pb-32 max-w-[1209px] mx-auto">
        <h2 className="mt-8 mb-4 font-display font-light text-ink text-center tracking-[-0.02em] leading-[1.14] text-[clamp(28px,4vw,48px)] max-w-[840px] mx-auto">
          How we take products from good to{' '}
          <span className="font-normal text-terracotta">great</span>.
        </h2>
        <p className="mb-16 font-display text-ink-soft text-center text-[clamp(15px,1.7vw,19px)] max-w-[640px] mx-auto">
          An AI augmented + accelerated product development framework
        </p>
        <NorthStarBanner />
        <div className="mt-20">
          <LobeHeader
            title="The Council"
            lead="Multi-perspective review"
            description="six specialized agentic AI critics, each reading the product through its own lens, all held to the north star. The human in the loop involved at every step for critical decision-making."
            problemId="council"
          />
        </div>
        <div className="w-full mt-9">
          <CouncilRing onSelectCouncil={handleSelectCouncil} />
        </div>
      </section>

      {/* The Foundation - the living documentation, drawn as a road atlas.
          It sits below the council: every change clears the council first,
          then routes through the docs. */}
      <section className="px-6 pb-32">
        <Foundation />
      </section>

      <CouncilSheet
        councilId={openCouncilId}
        open={drawerOpen}
        onOpenChange={handleOpenChange}
      />

      <StageSheet
        stageId={openStageId}
        open={stageDrawerOpen}
        onOpenChange={handleStageOpenChange}
        onNavigate={handleStageNavigate}
      />
    </>
  );
}

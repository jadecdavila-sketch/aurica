import { useEffect, useRef } from 'react';
import { stages, getStageById } from '@/data';
import { StageBody } from '@/components/StageBody';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface StageSheetProps {
  stageId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Swap the drawer to another stage without closing it (prev/next). */
  onNavigate: (id: string) => void;
}

/**
 * Bottom-drawer detail for a product development stage - the stage-side
 * counterpart to {@link CouncilSheet}. Opened from the Cradle on the home
 * page; the journey being sequential, it keeps an in-drawer prev/next.
 */
export function StageSheet({
  stageId,
  open,
  onOpenChange,
  onNavigate,
}: StageSheetProps) {
  const stage = stageId ? getStageById(stageId) : null;
  const idx = stage ? stages.findIndex((s) => s.id === stage.id) : -1;
  const prev = idx > 0 ? stages[idx - 1] : null;
  const next = idx >= 0 && idx < stages.length - 1 ? stages[idx + 1] : null;

  const topRef = useRef<HTMLDivElement>(null);

  // Reset scroll to the top whenever prev/next swaps the drawer to a new stage.
  useEffect(() => {
    topRef.current?.scrollIntoView({ block: 'start' });
  }, [stageId]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="h-[92vh] p-0 overflow-y-auto bg-background"
      >
        {/* Required for Radix Dialog a11y, but visually hidden since StageBody
            renders its own heading. */}
        <SheetHeader className="sr-only">
          <SheetTitle>{stage?.name ?? 'Stage'}</SheetTitle>
          <SheetDescription>
            {stage?.subtitle ?? 'Product development stage detail'}
          </SheetDescription>
        </SheetHeader>

        {stage && (
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 pt-14 pb-16">
            <div
              ref={topRef}
              className="text-eyebrow tabular-nums mb-10 scroll-mt-14"
            >
              {String(stage.number).padStart(2, '0')} /{' '}
              {String(stages.length).padStart(2, '0')}
            </div>

            {/* Keyed so prev/next remounts the body and replays its entrance. */}
            <StageBody
              key={stage.id}
              stage={stage}
              onCouncilNavigate={() => onOpenChange(false)}
            />

            {/* Prev / Next - swaps the drawer in place rather than closing */}
            <nav className="flex items-center justify-between border-t border-border pt-8">
              {prev ? (
                <button
                  type="button"
                  onClick={() => onNavigate(prev.id)}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-eyebrow">
                      {String(prev.number).padStart(2, '0')} · previous
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {prev.name}
                    </div>
                  </div>
                </button>
              ) : (
                <span />
              )}
              {next ? (
                <button
                  type="button"
                  onClick={() => onNavigate(next.id)}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
                >
                  <div>
                    <div className="text-eyebrow">
                      {String(next.number).padStart(2, '0')} · next
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {next.name}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <span />
              )}
            </nav>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

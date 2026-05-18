import { getProblemDescription } from '@/data';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

interface ProblemSheetProps {
  /** Which lobe's problem to show: 'north-star' | 'council' | 'foundation'. */
  problemId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Renders the `**bold**` inline markup the descriptions use. */
function renderRich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((seg, i) =>
    seg.startsWith('**') && seg.endsWith('**') ? (
      <strong key={i} className="font-semibold text-ink">
        {seg.slice(2, -2)}
      </strong>
    ) : (
      seg
    ),
  );
}

/**
 * ProblemSheet - the drawer behind each home-page lobe's "view the problem
 * this solves" CTA. It reuses the Sheet primitive opened from the right: the
 * council and stage drill-ins use the same primitive from the bottom, so this
 * reads as a lateral aside rather than a deeper drill.
 */
export function ProblemSheet({ problemId, open, onOpenChange }: ProblemSheetProps) {
  const problem = getProblemDescription(problemId);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[540px] p-0 overflow-y-auto bg-cream"
      >
        {/* Required for Radix Dialog a11y; the visible heading is in the body. */}
        <SheetHeader className="sr-only">
          <SheetTitle>{problem?.title ?? 'The problem this solves'}</SheetTitle>
          <SheetDescription>What problem this solves</SheetDescription>
        </SheetHeader>

        {problem && (
          <div className="fade-up px-8 py-14 md:px-11">
            <div className="text-eyebrow mb-5">what problem this solves</div>
            <h2 className="font-display font-light text-ink leading-[1.12] tracking-[-0.02em] text-[clamp(27px,4.4vw,35px)] mb-8">
              {problem.title}
            </h2>
            <div className="space-y-5 text-ink-soft leading-relaxed">
              {problem.paragraphs.map((para, i) => (
                <p key={i}>{renderRich(para)}</p>
              ))}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

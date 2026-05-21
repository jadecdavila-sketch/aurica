import { Link } from 'react-router-dom';
import { getTeamMemberById } from '@/data';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

interface TeamSheetProps {
  memberId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function monogram(name: string) {
  return name
    .split(' ')
    .map((w) => w[0] ?? '')
    .slice(0, 2)
    .join('');
}

/**
 * Renders the small slice of inline markdown the bios use - **bold** and
 * *italic*. Anything outside those markers passes through as plain text.
 */
function renderRich(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((seg, i) => {
    if (seg.startsWith('**') && seg.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {seg.slice(2, -2)}
        </strong>
      );
    }
    if (seg.startsWith('*') && seg.endsWith('*')) {
      return <em key={i}>{seg.slice(1, -1)}</em>;
    }
    return seg;
  });
}

/**
 * TeamSheet - the detail drawer for a studio member, mirroring the
 * council's bottom-sheet drill-in but in the cream/Fraunces page palette.
 * The open seat renders as a recruiting invitation instead of a bio.
 */
export function TeamSheet({ memberId, open, onOpenChange }: TeamSheetProps) {
  const member = memberId ? getTeamMemberById(memberId) : null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="h-[92vh] p-0 overflow-y-auto bg-cream"
      >
        {/* Required for Radix Dialog a11y; the visible title is in the body. */}
        <SheetHeader className="sr-only">
          <SheetTitle>{member?.name ?? 'The studio'}</SheetTitle>
          <SheetDescription>
            {member?.role ?? 'Studio member detail'}
          </SheetDescription>
        </SheetHeader>

        {member && (
          <div className="fade-up">
            {/* Portrait band */}
            <div className="w-full bg-cream-soft border-b border-stone/40 flex items-center justify-center py-16 md:py-20">
              <div
                className={`w-[176px] h-[176px] md:w-[212px] md:h-[212px] rounded-full grid place-items-center overflow-hidden ${
                  member.open
                    ? 'border-[1.5px] border-dashed border-gold/75'
                    : 'bg-cream'
                }`}
                style={
                  member.open
                    ? undefined
                    : {
                        boxShadow:
                          '0 0 0 2px var(--color-cream), 0 0 0 3px rgba(201,169,97,0.45), 0 18px 44px rgba(63,46,31,0.22)',
                      }
                }
              >
                {member.portrait ? (
                  <img
                    src={encodeURI(member.portrait)}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display font-light text-terracotta text-[60px] md:text-[74px]">
                    {member.open ? '+' : monogram(member.name)}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="max-w-[720px] mx-auto px-8 py-14">
              <div className="text-eyebrow mb-5">
                {member.open ? 'the studio · an open seat' : member.craft}
              </div>

              <h1 className="text-display mb-4">{member.name}</h1>

              <p className="font-display text-xl text-ink-soft leading-snug mb-10">
                {renderRich(member.tagline)}
              </p>

              <div className="space-y-5 text-ink-soft leading-relaxed mb-12">
                {member.bio.map((para, i) => (
                  <p key={i}>{renderRich(para)}</p>
                ))}
              </div>

              <div className="border-t border-stone/40 pt-8">
                <div className="text-eyebrow mb-5">
                  {member.open ? 'who we’re looking for' : 'what she holds'}
                </div>
                <ul className="space-y-2.5">
                  {member.focus.map((f) => (
                    <li key={f} className="flex items-baseline gap-3 text-ink">
                      <span className="text-terracotta font-display">-</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {member.outsideStudio && (
                <div className="border-t border-stone/40 pt-8 mt-12">
                  <div className="text-eyebrow mb-5">outside the studio</div>
                  <p className="text-ink-soft leading-relaxed">
                    {member.outsideStudio}
                  </p>
                </div>
              )}

              {member.open && (
                <Link
                  to="/contact"
                  onClick={() => onOpenChange(false)}
                  className="inline-block mt-10 px-8 py-4 bg-ink text-cream font-mono text-xs tracking-[0.28em] uppercase hover:bg-wood-deep transition-colors"
                >
                  start a conversation
                </Link>
              )}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

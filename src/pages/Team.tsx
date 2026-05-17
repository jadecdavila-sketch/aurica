import { useState } from 'react';
import { TeamMedallion } from '@/components/TeamMedallion';
import { TeamSheet } from '@/components/TeamSheet';

export function Team() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSelect = (id: string) => {
    setOpenId(id);
    setDrawerOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    setDrawerOpen(open);
    // Keep the member mounted briefly so the close animation can finish.
    if (!open) {
      setTimeout(() => setOpenId(null), 300);
    }
  };

  return (
    <>
      <section className="min-h-screen flex flex-col items-center px-6 pt-[160px] pb-32">
        <div className="text-eyebrow text-eyebrow-rule mb-14">the studio</div>

        <h1 className="text-display text-center max-w-[900px] mx-auto mb-5">
          A small bench of <span className="accent">makers</span>.
        </h1>
        <p className="font-display italic text-base text-ink-soft mb-6 text-center">
          the human form of the council
        </p>

        <TeamMedallion onSelect={handleSelect} />
      </section>

      <TeamSheet
        memberId={openId}
        open={drawerOpen}
        onOpenChange={handleOpenChange}
      />
    </>
  );
}

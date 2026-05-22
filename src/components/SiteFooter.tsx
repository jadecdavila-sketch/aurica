/**
 * SiteFooter - the global footer. Mounted once in App, below the routed
 * <main>, so it appears on every page. Carries the brand mark and the
 * ownership / legal line in the cream/Fraunces page palette.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone/30 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 py-12 flex flex-col items-center gap-4 text-center">
        <img src="/Aurica.svg" alt="Aurica" className="h-5 w-auto opacity-75" />

        <p className="font-body text-[13px] leading-relaxed text-ink-light max-w-[440px]">
          Owned &amp; operated by Eden &amp; Davila, LLC dba Aurica.
        </p>

        <p className="text-eyebrow">© {year} Eden &amp; Davila, LLC</p>
      </div>
    </footer>
  );
}

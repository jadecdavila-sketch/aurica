/**
 * Work - the studio's selected work.
 *
 * Currently the Larkin product site, embedded verbatim from
 * /public/larkin-web/ in an iframe so it renders exactly as shipped,
 * fully isolated from this site's styles, fonts, and scripts. The Studio
 * nav stays fixed above; the iframe fills the viewport beneath it.
 */

// Height of the fixed SiteNav (py-5 row + text-lg logo + 1px border).
const NAV_H = 69;

export function Work() {
  return (
    <div style={{ height: '100dvh', paddingTop: NAV_H }}>
      <iframe
        src="/larkin-web/index.html"
        title="Larkin - Operational Calm for Modern Life"
        className="block w-full h-full border-0"
      />
    </div>
  );
}

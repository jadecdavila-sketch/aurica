import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const links = [
  { to: '/', label: 'home' },
  { to: '/work', label: 'work' },
  { to: '/team', label: 'studio' },
  { to: '/partnership', label: 'partnership' },
  { to: '/contact', label: 'contact' },
];

/**
 * SiteNav - the fixed top bar.
 *
 * Desktop (md+) shows the link row inline. Mobile collapses the links into
 * a hamburger that opens a full-bleed cream menu panel; tapping a link
 * navigates and closes the panel.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  // While the mobile menu is open: ESC closes it, and the body scroll is
  // locked so the menu's full-bleed background can't be scrolled past.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-cream/70 border-b border-stone/30">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="inline-flex items-center transition-opacity hover:opacity-70"
            aria-label="Aurica — home"
          >
            <img src="/Aurica.svg" alt="Aurica" className="h-6 w-auto" />
          </Link>

          {/* Desktop link row. */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'text-eyebrow transition-colors hover:text-ink',
                      isActive && 'text-ink',
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger button. Three stacked spans morph into an X when
              open - inline so we avoid an extra icon import. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-nav-menu"
            className="md:hidden relative w-9 h-9 -mr-2 grid place-items-center"
          >
            <span
              aria-hidden
              className="col-start-1 row-start-1 w-6 h-[1.5px] bg-ink transition-transform duration-300 ease-out"
              style={{ transform: open ? 'rotate(45deg)' : 'translateY(-6px)' }}
            />
            <span
              aria-hidden
              className="col-start-1 row-start-1 w-6 h-[1.5px] bg-ink transition-opacity duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              aria-hidden
              className="col-start-1 row-start-1 w-6 h-[1.5px] bg-ink transition-transform duration-300 ease-out"
              style={{ transform: open ? 'rotate(-45deg)' : 'translateY(6px)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel. z-30 sits below the nav (z-40) so the hamburger
          stays tappable while open. opacity + pointer-events handles the
          fade in/out without the panel intercepting taps when closed. */}
      <div
        id="site-nav-menu"
        className={cn(
          'md:hidden fixed inset-0 z-30 bg-cream transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'font-display text-3xl text-ink-soft hover:text-ink transition-colors',
                    isActive && 'text-ink',
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

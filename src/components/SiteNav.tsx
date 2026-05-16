import { NavLink, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const links = [
  { to: '/work', label: 'work' },
  { to: '/team', label: 'studio' },
  { to: '/contact', label: 'contact' },
];

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-cream/70 border-b border-stone/30">
      <div className="max-w-[1600px] mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/" className="font-display text-lg text-ink hover:text-wood transition-colors">
          sketch <span className="font-display-sm italic" style={{ color: 'var(--color-terracotta)', fontWeight: 700 }}>+</span> hammer
        </Link>
        <ul className="flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
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
      </div>
    </nav>
  );
}

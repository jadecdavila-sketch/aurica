import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';

/**
 * PasswordGate — a SOFT gate for the Partnership page.
 *
 * IMPORTANT: this is not real security. The check runs entirely in the
 * browser, so both this password hash and the gated page's markup ship in
 * the JS bundle every visitor downloads. It keeps casual visitors out of the
 * UI; it does not stop anyone willing to open dev tools. Do not place
 * genuinely sensitive material behind it without server-side auth.
 *
 * The password is stored only as a SHA-256 hash so it isn't plainly grep-able
 * in source. To change it, replace PASSWORD_HASH with the digest of the new
 * password:  printf %s 'newpassword' | shasum -a 256
 */
const PASSWORD_HASH =
  '084ad99446397ff553f75f86af9eeee95b4834633e310a79c58b679e2f875d10';

// Remembers a successful unlock for the current browser session (per tab).
const STORAGE_KEY = 'sh-partnership-unlocked';

async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(text),
  );
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === '1',
  );
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the field whenever the gate is showing.
  useEffect(() => {
    if (!unlocked) inputRef.current?.focus();
  }, [unlocked]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value || checking) return;
    setChecking(true);
    try {
      if ((await sha256Hex(value)) === PASSWORD_HASH) {
        sessionStorage.setItem(STORAGE_KEY, '1');
        setUnlocked(true);
        return;
      }
      setError(true);
      setValue('');
      inputRef.current?.focus();
    } catch {
      setError(true);
    } finally {
      setChecking(false);
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-[160px] pb-32">
      <div className="text-eyebrow text-eyebrow-rule mb-12">partnership</div>

      <h1 className="font-display font-light text-ink text-center tracking-[-0.02em] text-[clamp(26px,3.4vw,42px)] leading-[1.15] mb-3">
        This page is <span className="italic text-terracotta">private</span>.
      </h1>
      <p className="font-display italic text-base text-ink-soft mb-12 text-center">
        enter the password to continue
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-[360px]">
        <label className="block mb-7">
          <span className="text-eyebrow block mb-2">password</span>
          <input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            autoComplete="off"
            aria-invalid={error}
            className="w-full bg-transparent border-b border-stone-dark py-3 text-ink placeholder:text-ink-light focus:outline-none focus:border-ink transition-colors"
          />
        </label>

        {error && (
          <p className="text-eyebrow text-destructive mb-5" role="alert">
            that password didn’t match — try again
          </p>
        )}

        <button
          type="submit"
          disabled={checking || !value}
          className="w-full py-4 bg-ink text-cream font-mono text-xs tracking-[0.28em] uppercase hover:bg-wood-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {checking ? 'checking…' : 'unlock'}
        </button>
      </form>
    </section>
  );
}

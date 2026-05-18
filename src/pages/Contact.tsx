import { useState } from 'react';

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a real submission endpoint (Formspree / SES / etc.)
    setSent(true);
  }

  return (
    <section className="min-h-screen px-8 pt-[160px] pb-32 max-w-[760px] mx-auto">
      <div className="text-eyebrow text-eyebrow-rule mb-14">get in touch</div>
      <h1 className="text-display text-center mb-12">
        Tell us what you're <span className="accent">building</span>.
      </h1>

      {sent ? (
        <div className="text-center text-ink-soft font-display text-2xl">
          Thank you. We'll be in touch.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Field label="your name" name="name" required />
          <Field label="email" name="email" type="email" required />
          <Field label="company / project" name="company" />
          <Field label="what's on your mind" name="message" textarea required />
          <button
            type="submit"
            className="w-full py-4 bg-ink text-cream font-mono text-xs tracking-[0.28em] uppercase hover:bg-wood-deep transition-colors"
          >
            send
          </button>
        </form>
      )}
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const baseCls =
    'w-full bg-transparent border-b border-stone-dark py-3 text-ink placeholder:text-ink-light focus:outline-none focus:border-ink transition-colors';
  return (
    <label className="block">
      <span className="text-eyebrow block mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={baseCls} />
      ) : (
        <input type={type} name={name} required={required} className={baseCls} />
      )}
    </label>
  );
}

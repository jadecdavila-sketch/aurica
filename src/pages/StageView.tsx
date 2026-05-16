import { useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { stages, getStageById } from '@/data';
import { StageBody } from '@/components/StageBody';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export function StageView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const stage = id ? getStageById(id) : undefined;
  const idx = stage ? stages.findIndex((s) => s.id === stage.id) : -1;
  const prev = idx > 0 ? stages[idx - 1] : null;
  const next = idx >= 0 && idx < stages.length - 1 ? stages[idx + 1] : null;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate('/');
      if (e.key === 'ArrowLeft' && prev) navigate(`/stage/${prev.id}`);
      if (e.key === 'ArrowRight' && next) navigate(`/stage/${next.id}`);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate, prev, next]);

  if (!stage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-eyebrow">stage not found · <Link to="/" className="underline">return</Link></div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage.id}
        ref={scrollRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
        className="min-h-screen bg-background"
      >
        {/* Subnav: stage counter + close */}
        <div className="border-b border-border pt-[68px]">
          <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between">
            <Link to="/" className="text-eyebrow flex items-center gap-3 hover:text-foreground transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              all stages
            </Link>
            <div className="text-eyebrow tabular-nums">
              {String(stage.number).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
            </div>
            <button
              onClick={() => navigate('/')}
              className="w-9 h-9 rounded-full border border-border text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-colors flex items-center justify-center"
              aria-label="close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-8 py-16 lg:py-24">
          <StageBody stage={stage} />

          {/* Prev / Next */}
          <nav className="flex items-center justify-between border-t border-border pt-8">
            {prev ? (
              <Link
                to={`/stage/${prev.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-eyebrow">{String(prev.number).padStart(2, '0')} · previous</div>
                  <div className="text-lg font-semibold text-foreground">{prev.name}</div>
                </div>
              </Link>
            ) : <span />}
            {next ? (
              <Link
                to={`/stage/${next.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                <div>
                  <div className="text-eyebrow">{String(next.number).padStart(2, '0')} · next</div>
                  <div className="text-lg font-semibold text-foreground">{next.name}</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <span />}
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  stages,
  getActivitiesByStage,
  getStageCouncilContent,
  getCouncilById,
  sphereImages,
  councilImages,
} from '@/data';
import {
  collaborationModeLabels,
  type CollaborationMode,
  type Activity,
  type Stage,
  type StageCouncilContent,
} from '@/types';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Bot,
  Users,
  UserCheck,
  User,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Shield,
} from 'lucide-react';

const modeIcons: Record<CollaborationMode, typeof Bot> = {
  'ai-leads': Bot,
  'human-ai-collaborate': Users,
  'human-leads': UserCheck,
  'human-only': User,
};

const modeColors: Record<CollaborationMode, string> = {
  'ai-leads': 'bg-accent/20 text-foreground border-accent/50',
  'human-ai-collaborate': 'bg-primary/20 text-foreground border-primary/50',
  'human-leads': 'bg-secondary/20 text-foreground border-secondary/50',
  'human-only': 'bg-warm/30 text-foreground border-warm/60',
};

const modeShortLabel: Record<CollaborationMode, string> = {
  'ai-leads': 'AI',
  'human-ai-collaborate': 'Collab',
  'human-leads': 'Human+',
  'human-only': 'Human',
};

interface StageBodyProps {
  stage: Stage;
  /**
   * Called when a Council Voice card is followed. The route view leaves this
   * undefined; the bottom drawer passes a handler so it closes itself before
   * the council route takes over.
   */
  onCouncilNavigate?: () => void;
}

/**
 * The shared stage detail - hero, description, council voices, activities, and
 * the "done" marker. Rendered by both the full-page route ({@link StageView})
 * and the bottom drawer ({@link StageSheet}); only the surrounding chrome and
 * the prev/next navigation differ between them.
 */
export function StageBody({ stage, onCouncilNavigate }: StageBodyProps) {
  const idx = stages.findIndex((s) => s.id === stage.id);
  const activities = getActivitiesByStage(stage.id);
  const councilVoices = getStageCouncilContent(stage.id);
  const sphereImg = idx >= 0 ? sphereImages[idx] : null;

  return (
    <>
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center mb-20">
        {sphereImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-center shadow-[0_20px_50px_rgba(58,46,31,0.18)]"
            style={{ backgroundImage: `url(${sphereImg})`, backgroundSize: '116%' }}
          />
        )}
        <div>
          <div className="text-eyebrow mb-4">
            stage · {String(stage.number).padStart(2, '0')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-3 tracking-tight">
            {stage.name}
          </h1>
          <p className="text-lg text-muted-foreground italic">{stage.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="max-w-[760px] text-lg leading-relaxed text-foreground/90 mb-20"
      >
        {stage.description}
      </motion.div>

      {/* Council Voices - thumbnail + quote, primary highlighted */}
      {councilVoices.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
            Council Voices
          </h2>
          <div className="space-y-4">
            {councilVoices
              .slice()
              .sort((a, b) => Number(b.isPrimary) - Number(a.isPrimary))
              .map((v, i) => (
                <CouncilVoice
                  key={v.councilId}
                  content={v}
                  index={i}
                  onNavigate={onCouncilNavigate}
                />
              ))}
          </div>
        </section>
      )}

      {/* Activities */}
      {activities.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
            Activities
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {activities.map((a, i) => (
              <ActivityRow key={a.id} activity={a} index={i} />
            ))}
          </Accordion>
        </section>
      )}

      {/* Done */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="p-6 rounded-lg bg-accent/10 border border-accent/20 mb-16"
      >
        <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
          What "Done" Looks Like
        </h3>
        <p className="text-foreground/90 leading-relaxed">{stage.whatDoneLooksLike}</p>
      </motion.div>
    </>
  );
}

/* ────── Council voice card with thumbnail (mirrors product-council-app) ────── */
function CouncilVoice({
  content,
  index,
  onNavigate,
}: {
  content: StageCouncilContent;
  index: number;
  onNavigate?: () => void;
}) {
  const council = getCouncilById(content.councilId);
  const imageSrc = councilImages[content.councilId];
  if (!council) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      className={`rounded-lg border overflow-hidden ${
        content.isPrimary
          ? 'bg-primary/5 border-primary/20'
          : 'bg-muted/30 border-border'
      }`}
    >
      <Link
        to={`/council/${council.id}`}
        onClick={onNavigate}
        className="flex items-stretch group"
      >
        {imageSrc && (
          <div className="flex-shrink-0 w-28 md:w-32 aspect-square self-stretch overflow-hidden">
            <img
              src={encodeURI(imageSrc)}
              alt={council.name}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex-1 min-w-0 p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-foreground group-hover:underline">
              {council.name}
            </h4>
            {content.isPrimary && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent-foreground font-medium">
                Primary
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            {council.archetypeName}
          </p>
          <blockquote className="text-sm text-foreground/90 italic leading-relaxed">
            "{content.quote}"
          </blockquote>
        </div>
      </Link>
    </motion.div>
  );
}

/* ────── Activity row - collaboration mode colored & iconed ────── */
function ActivityRow({ activity, index }: { activity: Activity; index: number }) {
  const Icon = modeIcons[activity.collaborationMode];
  const hasExpandedContent =
    activity.description ||
    activity.keyConsiderations?.length ||
    activity.commonPitfalls?.length ||
    activity.aiCanHelp?.length ||
    activity.humanMustOwn?.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 + index * 0.04, duration: 0.4 }}
    >
      <AccordionItem
        value={activity.id}
        className={`rounded-lg border border-border ${
          index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
        }`}
      >
        <AccordionTrigger
          className="px-4 py-3 hover:no-underline hover:bg-muted/20 transition-colors [&[data-state=open]]:bg-muted/20"
          disabled={!hasExpandedContent}
        >
          <div className="flex items-center justify-between w-full pr-2">
            <span className="font-medium text-foreground text-left">{activity.name}</span>
            <Badge
              variant="outline"
              className={`${modeColors[activity.collaborationMode]} gap-1.5 flex-shrink-0`}
            >
              <Icon className="w-3 h-3" />
              <span className="hidden sm:inline">
                {collaborationModeLabels[activity.collaborationMode]}
              </span>
              <span className="sm:hidden">
                {modeShortLabel[activity.collaborationMode]}
              </span>
            </Badge>
          </div>
        </AccordionTrigger>
        {hasExpandedContent && (
          <AccordionContent className="px-4 pb-6">
            <div className="space-y-4 pt-2">
              {activity.description && (
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {activity.description}
                </p>
              )}

              <div className="flex items-start gap-2 p-3 rounded-md bg-muted/30">
                <User className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    Human Expertise:{' '}
                  </span>
                  <span className="text-xs text-foreground/80">
                    {activity.humanExpertise}
                  </span>
                </div>
              </div>

              {activity.keyConsiderations && activity.keyConsiderations.length > 0 && (
                <BulletBlock
                  icon={<Lightbulb className="w-4 h-4 text-accent" />}
                  title="Key Considerations"
                  items={activity.keyConsiderations}
                />
              )}

              {activity.commonPitfalls && activity.commonPitfalls.length > 0 && (
                <BulletBlock
                  icon={<AlertTriangle className="w-4 h-4 text-warm" />}
                  title="Common Pitfalls"
                  items={activity.commonPitfalls}
                />
              )}

              <div className="grid gap-4 md:grid-cols-2">
                {activity.aiCanHelp && activity.aiCanHelp.length > 0 && (
                  <ColoredBlock
                    tone="ai"
                    icon={<Sparkles className="w-4 h-4 text-accent" />}
                    title="AI Can Help"
                    items={activity.aiCanHelp}
                  />
                )}
                {activity.humanMustOwn && activity.humanMustOwn.length > 0 && (
                  <ColoredBlock
                    tone="human"
                    icon={<Shield className="w-4 h-4 text-primary" />}
                    title="Human Must Own"
                    items={activity.humanMustOwn}
                  />
                )}
              </div>
            </div>
          </AccordionContent>
        )}
      </AccordionItem>
    </motion.div>
  );
}

function BulletBlock({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h5 className="text-sm font-medium text-foreground">{title}</h5>
      </div>
      <ul className="space-y-1 pl-6">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-foreground/80 list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ColoredBlock({
  tone,
  icon,
  title,
  items,
}: {
  tone: 'ai' | 'human';
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  const cls =
    tone === 'ai'
      ? 'bg-accent/10 border-accent/20'
      : 'bg-primary/10 border-primary/20';
  return (
    <div className={`p-3 rounded-md border ${cls}`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h5 className="text-sm font-medium text-foreground">{title}</h5>
      </div>
      <ul className="space-y-1 pl-6">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-foreground/80 list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

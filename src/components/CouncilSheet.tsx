import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getCouncilById, stages, councilImages } from '@/data';
import type { CouncilMember } from '@/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  MessageCircle,
  HelpCircle,
  Volume2,
  Users,
  Lightbulb,
  BookOpen,
  Wrench,
  Heart,
  Zap,
  HelpingHand,
} from 'lucide-react';

function MemberCard({ member, index }: { member: CouncilMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.4 }}
    >
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/30 self-start"
          >
            {member.pillar}
          </Badge>
          <CardTitle className="text-xl mt-2">{member.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-foreground/90 leading-relaxed">{member.whoTheyAre}</p>

          <Accordion type="single" collapsible defaultValue="wisdom" className="w-full">
            <AccordionItem value="wisdom">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-accent" />
                  <span>Core Wisdom</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6">
                  {member.coreWisdom.map((wisdom, i) => (
                    <li key={i} className="text-foreground/80 list-disc">
                      {wisdom}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            {member.warStories.length > 0 && (
              <AccordionItem value="stories">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-warm" />
                    <span>War Stories</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {member.warStories.map((story, i) => (
                      <div key={i} className="p-3 bg-muted/30 rounded-md">
                        <h5 className="font-medium text-foreground mb-1">{story.title}</h5>
                        <p className="text-sm text-foreground/80">{story.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {Object.keys(member.toolkit).length > 0 && (
              <AccordionItem value="toolkit">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-secondary" />
                    <span>Their Toolkit</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    {Object.entries(member.toolkit).map(([tool, description]) => (
                      <div key={tool}>
                        <h5 className="font-medium text-foreground text-sm">{tool}</h5>
                        <p className="text-sm text-foreground/80">{description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {(member.allies.length > 0 || member.tensions.length > 0) && (
              <AccordionItem value="relationships">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>Allies &amp; Tensions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {member.allies.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                          <HelpingHand className="w-3 h-3" /> Allies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.allies.map((ally) => (
                            <Badge
                              key={ally}
                              variant="outline"
                              className="text-xs border-primary/30"
                            >
                              {ally}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {member.tensions.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                          <Zap className="w-3 h-3" /> Tensions
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.tensions.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="text-xs border-warm/50 text-warm"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {member.questions.length > 0 && (
              <AccordionItem value="questions">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-accent" />
                    <span>Questions They Ask</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {member.questions.map((question, i) => (
                      <li key={i} className="text-foreground/80 italic text-sm">
                        "{question}"
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface CouncilSheetProps {
  councilId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CouncilSheet({ councilId, open, onOpenChange }: CouncilSheetProps) {
  const council = councilId ? getCouncilById(councilId) : null;
  const imageSrc = councilId ? councilImages[councilId] : null;

  const relevantStages = council
    ? stages.filter(
        (s) =>
          s.primaryCouncils.includes(council.id) ||
          s.secondaryCouncils.includes(council.id),
      )
    : [];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="h-[92vh] p-0 overflow-y-auto bg-background"
      >
        {/* Required for Radix Dialog a11y, but visually hidden since we render
            our own title/description in the body. */}
        <SheetHeader className="sr-only">
          <SheetTitle>{council?.name ?? 'Council'}</SheetTitle>
          <SheetDescription>
            {council?.archetypeName ?? 'Council member detail'}
          </SheetDescription>
        </SheetHeader>

        {council && (
          <div>
            {imageSrc && (
              <motion.div
                key={`hero-${council.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[50vh] md:h-[58vh] lg:h-[64vh] overflow-hidden"
              >
                <img
                  src={encodeURI(imageSrc)}
                  alt={council.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Scrim concentrated at the base — just enough to seat the
                    title; the artwork stays crisp for the top ~60% of the band. */}
                <div className="absolute inset-0 bg-gradient-to-t from-background from-0% via-background/70 via-13% to-transparent to-40%" />
              </motion.div>
            )}

            <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
              <motion.div
                key={`title-${council.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={imageSrc ? '-mt-16 relative z-10 mb-8' : 'mb-8'}
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-1">
                  {council.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  {council.archetypeName}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {council.pillars.map((pillar) => (
                    <Badge
                      key={pillar}
                      variant="secondary"
                      className="bg-secondary/10 text-foreground"
                    >
                      {pillar}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="flex flex-wrap gap-2">
                    {council.humanRoles.map((role) => (
                      <Badge
                        key={role}
                        variant="outline"
                        className="text-xs border-primary/30 text-foreground"
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-foreground">
                  Personality
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  {council.personality}
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-foreground">
                  Cares About
                </h2>
                <p className="text-foreground/90 leading-relaxed italic">
                  "{council.caresAbout}"
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mb-8"
              >
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          Ask Them
                        </h3>
                        <p className="text-foreground/90 italic">
                          "{council.askThem}"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mb-8"
              >
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Volume2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Signature Quote
                        </h3>
                        <blockquote className="text-foreground/90 italic leading-relaxed">
                          "{council.signatureQuote}"
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>

              {relevantStages.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-foreground">
                    Loudest At
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {relevantStages.map((stage) => {
                      const isPrimary = stage.primaryCouncils.includes(council.id);
                      return (
                        <Link
                          key={stage.id}
                          to={`/stage/${stage.id}`}
                          onClick={() => onOpenChange(false)}
                        >
                          <Badge
                            variant="outline"
                            className={`cursor-pointer hover:bg-primary/10 transition-colors ${
                              isPrimary ? 'border-primary text-primary' : 'border-border'
                            }`}
                          >
                            {stage.name}
                            {isPrimary && ' (Primary)'}
                          </Badge>
                        </Link>
                      );
                    })}
                  </div>
                </motion.section>
              )}

              {council.councilSpeaks && (
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="mb-10"
                >
                  <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            The Council Speaks
                          </h3>
                          <blockquote className="text-foreground/90 italic leading-relaxed whitespace-pre-line">
                            "{council.councilSpeaks}"
                          </blockquote>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.section>
              )}

              {council.members && council.members.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                    Meet the Council Members
                  </h2>
                  <div className="grid gap-6">
                    {council.members.map((member, index) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

import type { Stage } from '@/types';

export const stages: Stage[] = [
  {
    id: 'discovery',
    number: 1,
    name: 'Discovery',
    subtitle: 'What problem are we solving? For whom? Why now?',
    description:
      'This is where everything begins—understanding the humans you\'re building for and the problem worth solving. No code yet. Just listening, watching, and learning.',
    primaryCouncils: ['witness'],
    secondaryCouncils: ['questioner'],
    whatDoneLooksLike:
      'You can clearly articulate: who you\'re building for, what problem they have, why existing solutions fall short, and what your riskiest assumptions are.',
  },
  {
    id: 'validation',
    number: 2,
    name: 'Validation',
    subtitle: 'Is this problem real? Will people pay/use? What\'s the riskiest assumption?',
    description:
      'Before investing in building, test your assumptions cheaply. Find out if you\'re right—or wrong—as fast as possible.',
    primaryCouncils: ['questioner'],
    secondaryCouncils: ['witness', 'long-game'],
    whatDoneLooksLike:
      'You have evidence—not just opinions—about whether this problem is worth solving and whether your approach resonates. You\'ve killed or validated your riskiest assumptions.',
  },
  {
    id: 'design',
    number: 3,
    name: 'Design',
    subtitle: 'What does the solution look like? How does it feel to use?',
    description:
      'Translating understanding into form. This is where bones and soul come together—structure and feeling, function and delight.',
    primaryCouncils: ['architect', 'witness'],
    secondaryCouncils: ['questioner'],
    whatDoneLooksLike:
      'You have designs that have been tested with real users, refined based on feedback, and are ready to inform development. The design system provides consistency.',
  },
  {
    id: 'architecture',
    number: 4,
    name: 'Architecture',
    subtitle: 'How do we build this? What are the technical foundations?',
    description:
      'Decisions made here echo for years. This is where you choose what kind of codebase you\'ll live in—and whether future-you will thank you or curse you.',
    primaryCouncils: ['architect', 'groundskeeper'],
    secondaryCouncils: ['midnight-responder', 'long-game'],
    whatDoneLooksLike:
      'You have a clear technical plan, documented decisions and trade-offs, infrastructure that supports your development workflow, and a foundation you can build on without constant rework.',
  },
  {
    id: 'build',
    number: 5,
    name: 'Build',
    subtitle: 'Actually making the thing.',
    description:
      'This is where the work happens. Code gets written. Features take shape. The product emerges from plans into reality.',
    primaryCouncils: ['architect', 'groundskeeper'],
    secondaryCouncils: ['witness'],
    whatDoneLooksLike:
      'Features work as designed. Tests pass. Code is reviewed and maintainable. Accessibility is built in. Documentation exists. You can deploy with confidence.',
  },
  {
    id: 'harden',
    number: 6,
    name: 'Harden',
    subtitle: 'Does it work? Is it secure? Is it accessible? Can it survive contact with reality?',
    description:
      'Before launch, stress-test everything. Find the weaknesses before your users do.',
    primaryCouncils: ['midnight-responder', 'groundskeeper'],
    secondaryCouncils: ['architect', 'witness'],
    whatDoneLooksLike:
      'You\'ve stress-tested the system. Security vulnerabilities are addressed. Accessibility is verified. Monitoring is in place. Alerts are configured. You have runbooks for likely incidents. You can launch without holding your breath.',
  },
  {
    id: 'launch',
    number: 7,
    name: 'Launch',
    subtitle: 'Getting it into users\' hands.',
    description:
      'The moment of truth. But launch isn\'t an event—it\'s a transition. From building to operating. From hoping to knowing.',
    primaryCouncils: ['midnight-responder', 'witness'],
    secondaryCouncils: ['questioner'],
    whatDoneLooksLike:
      'Users can access and use the product. Critical issues are addressed quickly. The team knows what\'s happening in real-time. There\'s a clear path from user problems to fixes.',
  },
  {
    id: 'learn',
    number: 8,
    name: 'Learn',
    subtitle: 'What\'s working? What\'s not? What did we get right and wrong?',
    description:
      'Launch isn\'t the end—it\'s the beginning of learning at scale. Real users, real usage, real feedback.',
    primaryCouncils: ['questioner', 'witness'],
    secondaryCouncils: ['midnight-responder'],
    whatDoneLooksLike:
      'You understand what\'s working and what isn\'t. You have prioritized insights. The team has a shared view of reality. You know what to do next.',
  },
  {
    id: 'iterate',
    number: 9,
    name: 'Iterate',
    subtitle: 'Making it better based on what you\'ve learned.',
    description:
      'Back into the cycle, but smarter now. You\'re not guessing—you\'re improving based on evidence.',
    primaryCouncils: ['architect', 'groundskeeper'],
    secondaryCouncils: ['questioner'],
    whatDoneLooksLike:
      'Product is meaningfully better based on evidence. Technical health is maintained or improved. The cycle continues—build, launch, learn, iterate.',
  },
  {
    id: 'scale',
    number: 10,
    name: 'Scale',
    subtitle: 'Growing beyond your first users—enterprise, international, volume.',
    description:
      'The concerns that whispered before now speak loudly. Growth brings new challenges that require new focus.',
    primaryCouncils: ['long-game'],
    secondaryCouncils: ['architect', 'midnight-responder', 'witness'],
    whatDoneLooksLike:
      'You can serve new markets, new customer types, new levels of volume. The foundations support growth. The team has grown with the product.',
  },
];

export const getStageById = (id: string): Stage | undefined =>
  stages.find((s) => s.id === id);

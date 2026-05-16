import type { ContinuousActivity } from '@/types';

export const continuousActivities: ContinuousActivity[] = [
  {
    id: 'monitoring',
    name: 'Monitoring',
    startsAt: 'Build',
    tendedBy: 'questioner',
    description:
      'The eyes on the system. Is it healthy? Is something going wrong? Are users suffering? Monitoring turns invisible problems into visible ones.',
    quote: 'You can\'t improve what you can\'t see. You can\'t fix what you don\'t know is broken.',
  },
  {
    id: 'security',
    name: 'Security Posture',
    startsAt: 'Architecture',
    tendedBy: 'architect',
    description:
      'Security isn\'t a checklist—it\'s a practice. Dependency updates, vulnerability scanning, access reviews, incident response. Always watching, always maintaining.',
    quote: 'Security is a property, not a feature. It requires continuous attention, not a one-time effort.',
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    startsAt: 'Launch',
    tendedBy: 'groundskeeper',
    description:
      'The battle against entropy. Dependencies go stale. Code accumulates cruft. Documentation drifts from reality. Without active maintenance, everything decays.',
    quote: 'Entropy always wins eventually. Our job is to delay that victory as long as possible.',
  },
  {
    id: 'support',
    name: 'Support',
    startsAt: 'Launch',
    tendedBy: 'witness',
    description:
      'The voice of users who are stuck. Every ticket is signal. Patterns reveal product failures. Great support isn\'t just solving problems—it\'s feeding insight back into the product.',
    quote: 'Behind every ticket is a human who tried and struggled. Honor that by listening—and by fixing the underlying cause.',
  },
  {
    id: 'cost',
    name: 'Cost Awareness',
    startsAt: 'Architecture',
    tendedBy: 'long-game',
    description:
      'What are you spending? Is it worth it? As you grow, costs grow too. Are they growing linearly or exponentially? Are there zombies eating money?',
    quote: 'Cost surprises kill companies. Pay attention—loosely at first, then tightly as you scale.',
  },
];

export const getContinuousActivityById = (id: string): ContinuousActivity | undefined =>
  continuousActivities.find((a) => a.id === id);

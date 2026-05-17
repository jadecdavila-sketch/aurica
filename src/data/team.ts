import type { TeamMember } from '@/types';

/**
 * The Studio — the human form of the Council.
 *
 * ⚠ PLACEHOLDER COPY. The bios below are drafts, written so the layout can
 * be reviewed with realistic text. Jade & Alanna: replace `tagline`, `bio`,
 * and `focus` with real words.
 *
 * Portraits: drop square images into /public/team/ and set `portrait`
 * (e.g. portrait: '/team/jade.jpg'). Until then a Fraunces monogram renders.
 *
 * The sketch / hammer split (design / build) is an assumption carried over
 * from the framework brief — swap the `craft` lines if the roles divide
 * differently.
 */
export const team: TeamMember[] = [
  {
    id: 'jade',
    name: 'Jade Davila',
    role: 'Co-Founder',
    craft: 'the sketch',
    tagline: 'Design, product, and the judgment a model can’t hold.',
    bio: [
      'Jade leads design and product — the sketch half of the studio. She developed the Council framework this site describes: a way of pairing specialized AI critique with human product judgment so small and distributed teams get something close to a design review.',
      'Her work centers on AI-native products — the ones that learn from behavior and act on inference, where the old UX vocabulary runs short. She keeps the designer as the load-bearing human in the loop: the agents handle volume, she holds the judgment.',
    ],
    focus: [
      'Product & interaction design',
      'The Council framework',
      'Design systems',
      'Client practice',
    ],
  },
  {
    id: 'alanna',
    name: 'Alanna Colton',
    role: 'Co-Founder',
    craft: 'the hammer',
    tagline: 'Engineering, architecture, and making the thing real.',
    bio: [
      'Alanna leads engineering and architecture — the hammer half of the studio. She turns design thinking into systems that hold up: the foundations, the build, the parts a user never sees but always feels.',
      '[Placeholder — Alanna to replace.] Her focus is the living-architecture practice and the discipline that keeps a codebase honest as it grows: documentation that doubles as agent context, and reviews that catch ripples before they ship.',
    ],
    focus: [
      'Engineering & architecture',
      'Build & delivery',
      'Technical foundations',
      'Reliability & review',
    ],
  },
  {
    id: 'open',
    name: 'The third seat',
    role: 'Open role',
    craft: 'the third',
    open: true,
    tagline: 'We’re shaping a third seat at the bench.',
    bio: [
      'The studio is small on purpose — a bench, not an org chart. But it isn’t finished. We’re holding a third seat open for the right maker.',
      'We don’t yet know whether they’re a designer, an engineer, or something we haven’t named. We know they care about craft, about AI-native products, and about the unglamorous work that makes a product trustworthy. If that sounds like you — tell us what you’re building.',
    ],
    focus: [
      'Could be design',
      'Could be engineering',
      'Could be a craft we haven’t named yet',
    ],
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined =>
  team.find((m) => m.id === id);

import type { TeamMember } from '@/types';

/**
 * The Studio - the human form of the Council.
 *
 * Jade and Alanna are final - real bios and portraits. The third seat is the
 * open-role placeholder until Jamie's name, role, and craft land.
 *
 * Portraits live in /public/team/ and are referenced by absolute URL.
 * Bios and taglines may use **bold** and *italic* - TeamSheet renders that
 * inline markup.
 */
export const team: TeamMember[] = [
  {
    id: 'jade',
    name: 'Jade Davila',
    role: 'Co-Founder',
    craft: 'co-CEO',
    portrait: '/team/Jade.png',
    tagline:
      '**The Architect** and **The Diplomat**, with strong **Witness** and **Artisan** dimensions.',
    bio: [
      'Jade builds with both hands, and she keeps the relationships warm while the building happens. Two councils run at her center, and they run in conversation. The Architect insists on bones and soul. The Diplomat insists that none of it matters if the people on the buying side don’t trust who they’re building it with. Fifteen years of enterprise UX across healthcare, life sciences, fintech, and education shaped a conviction she returns to in every engagement: *your MVP needs bones and soul.* Bones: is it secure, does it load, can it change without breaking? Soul: does it feel like something, can the person on the other side of the screen trust it? Most founders build one or the other. She builds both, even when both are rough at first.',
      'The four Architect pillars sit fully inside her practice. **Design/UX** as the layer that determines whether users ever find the value behind the friction. **Code Quality** as the discipline that makes change easy rather than terrifying, the difference between a product that compounds and one that ossifies. **Security** as a property, not a feature, that emerges from hundreds of decisions across a system. **Performance** as user respect made measurable. She does not delegate any of these. She holds them in conversation with each other, all the way through.',
      'The Diplomat pillars run just as deep. **Client rapport and the long arc of trust:** the discipline of being a person on the other end of a phone for years, not just for the duration of a statement of work. **Engagement management:** scope, momentum, the unglamorous integrity of delivering what was promised without dropping balls or breaking the relationship to do it. **Commercial judgment:** reading what a client is actually buying, naming what work is worth, and walking away from engagements that would damage either side. **Business strategy:** the longer view of what the practice is, what it refuses, and how it grows. She helped run Catalyst UX as Managing Partner for seven years, has led enterprise client work for Unosquare across multiple high-stakes accounts, and has been visible at the CEO level for the kinds of engagements that turn a single project into a multi-year relationship.',
      'Two other councils run strongly underneath. As **The Witness**, she refuses to leave users out: every onboarding she ships has been watched by someone using a screen reader, every error message has been pressure-tested against the most overwhelmed version of the user, every “edge case” is treated as a person whose name she could imagine. As **The Artisan**, she refuses generic: her work carries a distinct visual register that she’d defend as *made on purpose*, not assembled from defaults. She believes beauty is medicine for users carrying real weight, and she builds accordingly.',
      'Jade holds an MIT Executive Education certificate in Applied Agentic AI, but her real fluency comes from solo-building **Larkin**, an AI-powered family life management product for mothers of young children. Larkin is where the integration of design and implementation lives in a single body: she designs, she ships, she rolls back, she pages herself at 3am. The work also forged the council framework itself, a set of AI agents organized around the 20 Pillars of Amazing Products, built in collaboration with Claude and calibrated to specific products through living documentation and learned failure modes. The framework is now part of how she scales the practice.',
      'She started in physical architecture, the perfect foundational education in design + systems thinking, before she found UX. The systems thinking carried over. So did the willingness to be in the work, not above it.',
    ],
    focus: [
      'Design/UX, code quality, security, performance',
      'Client trust and the long arc of an engagement',
      'The Council framework',
      'Larkin - solo-built, design through deploy',
    ],
    outsideStudio:
      'Jade is a trained singer specializing in bluegrass, early Americana, and overtone singing. She is a lover of nature, with Walden Pond and Great Meadows part of her weekly rhythm, and she is always, quietly, longing for Spain.',
  },
  {
    id: 'alanna',
    name: 'Alanna Colton',
    role: 'Co-Founder',
    craft: 'co-CEO',
    portrait: '/team/Alanna.png',
    tagline:
      '**The Artisan** and **The Diplomat**, with strong **Architect** and **Witness** dimensions.',
    bio: [
      'Alanna sees what most rooms are missing, and she gets people to build it. Two councils run at her center, and they run in conversation. The Artisan insists on refusal of generic, on the slow accumulation of decisions that make a space or a product feel made on purpose. The Diplomat insists that taste means nothing if you cannot bring the world along with it, if the people you need cannot be moved to deliver what the work requires. Walk into a space Alanna has shaped and you recognize, before you have named what you are seeing, that someone with deep mastery made decisions here on purpose. Then notice what it took to get there: the contractors who showed up on time, the materials sourced from three states away, the budget held, the schedule kept. Both are her.',
      'The six Artisan pillars are all alive in her work. **Resonance:** the way tone and visual register reinforce each other across every detail in a room or a piece of work, never two voices on one surface. **The Whole:** her unmistakable instinct that every piece belongs to the same made thing, and the unwillingness to let patchwork pass. **The Reading:** how the eye moves through a space, what it finds, in what order. **The Care:** beauty as medicine, made for the person who will live in it. **The Spark:** the willingness to introduce an unexpected move, a moment of productive tension that keeps the work alive rather than merely tasteful. **The Pulse:** the cadence of attention through the space, the rhythm of negative and full, that separates a room you can rest in from a room that quietly demands you.',
      'The Diplomat pillars run just as deep. **Client rapport and the long arc of trust:** a fluency forged across years as a sales executive at SAP, working high-stakes enterprise engagements with multinational accounts. She knows what it takes to be a person on the other end of a phone for years, not just for the duration of a quarter. **Commercial judgment:** reading what is actually being asked for, naming what a piece of work is worth, and walking away from terms that would damage either side. **Engagement management:** scope, momentum, the unglamorous integrity of delivering against commitments without dropping balls. **The art of manifestation:** money, deals, contractors, outcomes. The pattern is not luck. She knows what she wants, she names it clearly, and the world tends to deliver. Her closest people have come to recognize this as something real.',
      'Two other councils run strongly underneath. As **The Architect**, she has been general contractor on two full home renovations while working full time and raising her sons. The volume of detail she holds, material decisions through contractor coordination through schedule integrity through structural and aesthetic choices in the same hand, is a senior-practitioner Architect move at a scale most people would not attempt. Bones and soul. She does both. As **The Witness**, she is nurturing, forgiving, and holds other people’s perspectives with honor; she carries the User Success Council’s quiet fierceness about not leaving anyone out, applied to humans rather than products.',
    ],
    focus: [
      'Resonance, the whole, the reading, the care, the spark, the pulse',
      'Commercial judgment and the art of manifestation',
      'General contractor - two full home renovations',
      'Enterprise sales leadership at SAP',
    ],
    outsideStudio:
      'Alanna is a mother of two, a renovator of homes, and a steady force in the lives of the people around her. She moves through the world with the kind of grace that makes other people feel held, without ever announcing she is holding them.',
  },
  {
    id: 'open',
    name: 'The third seat',
    role: 'Open role',
    craft: 'the third',
    open: true,
    tagline: 'We’re shaping a third seat at the bench.',
    bio: [
      'The studio is small on purpose - a bench, not an org chart. But it isn’t finished. We’re holding a third seat open for the right maker.',
      'We don’t yet know whether they’re a designer, an engineer, or something we haven’t named. We know they care about craft, about AI-native products, and about the unglamorous work that makes a product trustworthy. If that sounds like you - tell us what you’re building.',
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

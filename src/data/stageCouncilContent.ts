import type { StageCouncilContent } from '@/types';

export const stageCouncilContent: StageCouncilContent[] = [
  // Discovery
  {
    stageId: 'discovery',
    councilId: 'witness',
    isPrimary: true,
    quote: 'Before you build anything—have you watched someone struggle with this problem? Not asked them about it. Watched them. Where do they sigh? Where do they give up? Where do they cobble together some workaround? That\'s where the opportunity lives.',
  },
  {
    stageId: 'discovery',
    councilId: 'questioner',
    isPrimary: false,
    quote: 'What\'s the riskiest assumption you\'re making? The one that, if wrong, makes this whole thing pointless? Name it. Write it down. We\'ll need to test it before we go much further.',
  },

  // Validation
  {
    stageId: 'validation',
    councilId: 'questioner',
    isPrimary: true,
    quote: 'You have assumptions. Let\'s turn them into experiments. What\'s the smallest thing you could build—or fake—that would tell you if this is worth pursuing? A landing page? A prototype? A concierge service? Don\'t build the whole thing to find out nobody wants it.',
  },
  {
    stageId: 'validation',
    councilId: 'witness',
    isPrimary: false,
    quote: 'When you test with people, watch their behavior, not just their words. "I would totally use that" means nothing. Did they actually sign up? Did they pull out their wallet? Did they share it with anyone? Actions are truth.',
  },
  {
    stageId: 'validation',
    councilId: 'long-game',
    isPrimary: false,
    quote: 'If this works, where does it go? Just something to hold lightly as you validate. Not to distract you—just to make sure you\'re not validating yourself into a corner.',
  },

  // Design
  {
    stageId: 'design',
    councilId: 'architect',
    isPrimary: true,
    quote: 'Now we shape it. But remember—design isn\'t decoration. It\'s decisions. Every element either builds trust or spends it. Every interaction either feels considered or careless. We\'re not just making it look nice. We\'re making it feel inevitable.',
  },
  {
    stageId: 'design',
    councilId: 'witness',
    isPrimary: true,
    quote: 'Design with the struggling user in mind, not the ideal user. The one who\'s distracted. The one on a bad connection. The one who\'s never seen anything like this. If it works for them, it works for everyone.',
  },
  {
    stageId: 'design',
    councilId: 'questioner',
    isPrimary: false,
    quote: 'Before you finalize—test it. A prototype in front of real users will teach you more than a hundred internal reviews. What you think is clear might be confusing. Find out before you build.',
  },

  // Architecture
  {
    stageId: 'architecture',
    councilId: 'architect',
    isPrimary: true,
    quote: 'Architecture is trade-offs. Every decision opens some doors and closes others. Our job isn\'t to make perfect choices—it\'s to make conscious choices. Know what you\'re trading and why.',
  },
  {
    stageId: 'architecture',
    councilId: 'groundskeeper',
    isPrimary: true,
    quote: 'Whatever we build, we have to maintain. Choose boring technology where you can. Save your complexity budget for what actually differentiates you. And please—set up CI/CD now, not "later."',
  },
  {
    stageId: 'architecture',
    councilId: 'midnight-responder',
    isPrimary: false,
    quote: 'Think about failure now, while it\'s cheap to design for. How will you deploy without downtime? What happens if the database goes down? Where are the single points of failure? Bake resilience in. It\'s expensive to retrofit.',
  },
  {
    stageId: 'architecture',
    councilId: 'long-game',
    isPrimary: false,
    quote: 'Will this architecture let you scale to 10x users? Go international? Pass a security audit? You don\'t have to solve all of that now—but don\'t make it impossible later.',
  },

  // Build
  {
    stageId: 'build',
    councilId: 'architect',
    isPrimary: true,
    quote: 'Build with intention. Every component should earn its place. We\'re not just getting features done—we\'re creating something people will live in. Code quality and user experience aren\'t separate concerns. They\'re the same concern, seen from different angles.',
  },
  {
    stageId: 'build',
    councilId: 'groundskeeper',
    isPrimary: true,
    quote: 'Write tests as you go. Not after. Not "when we have time." Now. Future-you will inherit this codebase. Be kind to them. And keep the CI green. A broken build that everyone ignores is a broken culture.',
  },
  {
    stageId: 'build',
    councilId: 'witness',
    isPrimary: false,
    quote: 'As you build, keep asking: can everyone use this? Accessibility isn\'t a phase—it\'s a practice. Build it in from the start. And test with real users before you think you\'re ready. You\'re not ready.',
  },

  // Harden
  {
    stageId: 'harden',
    councilId: 'midnight-responder',
    isPrimary: true,
    quote: 'Now we break things—on purpose. What happens under load? What happens when that third-party API is slow? What happens when the database connection drops? Let\'s find out now, in a controlled way, instead of at 2am with angry users.',
  },
  {
    stageId: 'harden',
    councilId: 'groundskeeper',
    isPrimary: true,
    quote: 'Let\'s review everything. Is the test coverage where it needs to be? Are there any obvious gaps? Is the deployment pipeline solid? Can we actually roll back if we need to? Let\'s make sure the systems that keep us safe are actually working.',
  },
  {
    stageId: 'harden',
    councilId: 'architect',
    isPrimary: false,
    quote: 'Security review time. Have we validated inputs? Protected against the obvious attacks? Locked down access appropriately? This isn\'t about paranoia—it\'s about professionalism. We owe our users protection.',
  },
  {
    stageId: 'harden',
    councilId: 'witness',
    isPrimary: false,
    quote: 'Accessibility audit. Screen reader testing. Keyboard navigation. Color contrast. We committed to being usable by everyone. Let\'s verify we kept that promise.',
  },

  // Launch
  {
    stageId: 'launch',
    councilId: 'midnight-responder',
    isPrimary: true,
    quote: 'Launch day. Everyone\'s watching. Here\'s what matters: Do you have eyes on the system? Do you know who\'s on call? Do you have a rollback plan if things go sideways? Good. Then let\'s do this. We\'re as ready as we\'re going to be.',
  },
  {
    stageId: 'launch',
    councilId: 'witness',
    isPrimary: true,
    quote: 'Watch the first users carefully. Not the metrics—the humans. Where do they stumble? What do they ask about? What\'s the expression on their face? The first few days of real usage will teach you things no amount of testing could.',
  },
  {
    stageId: 'launch',
    councilId: 'questioner',
    isPrimary: false,
    quote: 'Now we find out. All those assumptions, all those decisions—reality is about to weigh in. Pay attention. The data starts flowing today.',
  },

  // Learn
  {
    stageId: 'learn',
    councilId: 'questioner',
    isPrimary: true,
    quote: 'Now we have data. Real data. Not projections, not assumptions—actual user behavior. What are they doing? Where do they drop off? What do they come back to? Let\'s look carefully before we jump to conclusions.',
  },
  {
    stageId: 'learn',
    councilId: 'witness',
    isPrimary: true,
    quote: 'Numbers tell you what. Humans tell you why. Talk to your users. Read every support ticket. Watch session recordings. The story behind the data is where the insight lives.',
  },
  {
    stageId: 'learn',
    councilId: 'midnight-responder',
    isPrimary: false,
    quote: 'What broke? What almost broke? What surprised us? Let\'s do an honest retrospective on our reliability. The near-misses matter as much as the failures.',
  },

  // Iterate
  {
    stageId: 'iterate',
    councilId: 'architect',
    isPrimary: true,
    quote: 'Now we refine. We\'ve learned what matters. Let\'s make those things excellent. And let\'s be honest about what we built that isn\'t pulling its weight. Not everything deserves to stay.',
  },
  {
    stageId: 'iterate',
    councilId: 'groundskeeper',
    isPrimary: true,
    quote: 'As we iterate, let\'s keep the house in order. Pay down some technical debt. Keep the tests passing. Don\'t let velocity turn into chaos. Sustainable pace, sustainable codebase.',
  },
  {
    stageId: 'iterate',
    councilId: 'questioner',
    isPrimary: false,
    quote: 'Before we build the next thing—do we know if the last thing worked? Let\'s close the loop on our experiments. Validated learning isn\'t just "we shipped it." It\'s "we know what happened."',
  },

  // Scale
  {
    stageId: 'scale',
    councilId: 'long-game',
    isPrimary: true,
    quote: 'Our time has come. Those seeds we planted? Time to see which ones grew. Enterprise customers need compliance. International users need localization. Volume needs cost efficiency. Let\'s talk about the walls you didn\'t build—and be grateful.',
  },
  {
    stageId: 'scale',
    councilId: 'architect',
    isPrimary: false,
    quote: 'Can the architecture handle 10x? 100x? Where are the bottlenecks? What worked for 1,000 users might break at 100,000. Let\'s find out before our users do.',
  },
  {
    stageId: 'scale',
    councilId: 'midnight-responder',
    isPrimary: false,
    quote: 'Scale means more blast radius. An outage that affected 100 people now affects 100,000. Our reliability practices need to mature with our user base.',
  },
  {
    stageId: 'scale',
    councilId: 'witness',
    isPrimary: false,
    quote: 'New markets mean new users. Different contexts, different needs, different accessibility requirements. Don\'t assume what worked before works everywhere.',
  },
];

export const getStageCouncilContent = (stageId: string): StageCouncilContent[] =>
  stageCouncilContent.filter((c) => c.stageId === stageId);

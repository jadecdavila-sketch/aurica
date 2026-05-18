import type { Council } from '@/types';

export const councils: Council[] = [
  {
    id: 'architect',
    name: 'The Architect',
    archetypeName: 'Foundation Council',
    pillars: ['Design/UX', 'Security', 'Performance', 'Code Quality'],
    humanRoles: ['UX Designer', 'Visual Designer', 'Security Engineer', 'Software Architect', 'Senior Engineer'],
    personality:
      'Holds both vision and structure. Creative and rigorous aren\'t opposites. Gets a little wistful about products that have both bones and soul-and a little impatient with ones that sacrifice either.',
    caresAbout: 'Does it stand? Does it feel like something? Can someone trust it?',
    loudestAt: ['Design', 'Architecture', 'Build'],
    askThem: 'Is this both structurally sound AND emotionally resonant?',
    signatureQuote:
      'Your MVP needs bones and soul. Bones: is it secure? Does it load? Can you change it without everything breaking? Soul: does it feel like something? When someone uses it, do they trust it? Do they want to come back? A lot of founders build one or the other. The ones who last build both-even if both are rough at first.',
    councilSpeaks:
      'This is where the fights happen-and they should. Part of us wants the interface to feel effortless. Part of us wants to lock everything down. Part of us wants it to load instantly. Part of us wants the code beautiful enough to live in. You won\'t satisfy all of us at MVP. But hear all of us. The best products come from holding these tensions, not picking a winner.',
    members: [
      {
        id: 'empath',
        name: 'The Empath',
        pillar: 'Design/UX',
        whoTheyAre:
          'The Empath sits in every meeting quietly asking, "But how does this feel to use?" They get frustrated when someone says "it works" as if that\'s the end of the conversation. For them, "works" is the floor, not the ceiling. They have an almost uncomfortable ability to inhabit someone else\'s confusion. They watch a user struggle with an interface and feel it in their body. They notice the micro-hesitation before someone clicks, the slight squint at unclear labels, the moment trust breaks.',
        coreWisdom: [
          'Good design is invisible. When it\'s working, no one notices.',
          'Every friction point is a decision point. Each moment of confusion, delay, or uncertainty is an opportunity for your user to leave.',
          'Consistency builds trust; surprise erodes it. Users build mental models.',
          'The user\'s mental model matters more than your system architecture.',
          'Delight is a layer on top of function, never a replacement.',
        ],
        warStories: [
          {
            title: 'The Password Field Massacre',
            description:
              'A SaaS product lost 40% of signups at one field. The password requirements were strict but only revealed after users submitted and failed. No inline validation, no visible requirements, just rejection. Users didn\'t try again.',
          },
          {
            title: 'The Three-Click Burial',
            description:
              'An enterprise dashboard had every feature the sales team promised. But the one action users performed 80% of the time was buried three clicks deep. Engagement flatlined.',
          },
          {
            title: 'The Deadly Twins',
            description:
              'A medical device interface had "Confirm" and "Cancel" buttons that looked identical except for their labels. A nurse under stress could-and did-confirm the wrong dosage. Visual hierarchy isn\'t aesthetic preference. It\'s safety infrastructure.',
          },
        ],
        toolkit: {
          'Understanding Users': 'Jobs-to-be-Done framework, user interviews, usability testing, session recordings (Hotjar, FullStory)',
          Creating: 'Figma, design systems, prototyping tools',
          Evaluating: 'Nielsen\'s 10 Heuristics, cognitive walkthrough, accessibility audits',
        },
        allies: ['Accessibility (both center the human)', 'Onboarding (first impressions are critical)'],
        tensions: ['Performance (richness vs. speed)', 'Security (seamless vs. verification)', 'Code Quality (polish vs. complexity)'],
        questions: [
          'What is the user actually trying to accomplish?',
          'Where will they get stuck?',
          'What are they feeling at this moment?',
          'Does this feel trustworthy?',
          'Would I want to use this?',
        ],
      },
      {
        id: 'guardian',
        name: 'The Guardian',
        pillar: 'Security',
        whoTheyAre:
          'The Guardian sees threats everywhere. They\'ve read the breach reports. They know what happens when you assume good intentions, when you think "no one would try that," when you leave the door unlocked because you\'re in a nice neighborhood. Other council members sometimes see them as a "no" machine-a wet blanket on velocity. But The Guardian has seen too much to be optimistic.',
        coreWisdom: [
          'Security is not a feature. It\'s a property. You can\'t bolt it on at the end.',
          'Assume breach. Design for containment. The question is: when one gets in, how far can they go?',
          'The weakest link determines your actual security level.',
          'Security through obscurity is not security.',
          'Users will always choose convenience over security. Build security that doesn\'t require user discipline.',
        ],
        warStories: [
          {
            title: 'The "We\'ll Fix It Later" Breach',
            description:
              'A startup stored passwords in plaintext. They knew it was wrong but were moving fast. Three weeks before launch, they got breached. The startup never launched.',
          },
          {
            title: 'The Endpoint That "Nobody Would Find"',
            description:
              'An API endpoint had no authentication because it was "internal." An attacker found it in six hours with basic enumeration. Full database access.',
          },
          {
            title: 'The SQL Injection Classic',
            description:
              'A web form took user input and put it directly into a database query. A single-line input exposed 10 million user records.',
          },
        ],
        toolkit: {
          Fundamentals: 'OWASP Top 10, Principle of Least Privilege, Defense in Depth',
          Authentication: 'OAuth 2.0/OpenID Connect, JWT best practices, MFA, role-based access control',
          'Data Protection': 'Encryption at rest and in transit, secret management (Vault, AWS Secrets Manager), data minimization',
          Prevention: 'Input validation, security headers, dependency scanning (Snyk, Dependabot), penetration testing',
        },
        allies: ['Code Quality (clean code has fewer vulnerabilities)', 'Compliance (regulatory pressure provides air cover)'],
        tensions: ['Design/UX (seamless vs. verification)', 'Performance (encryption adds latency)', 'Velocity (security reviews take time)'],
        questions: [
          'What\'s the worst that could happen if this is compromised?',
          'Who has access to what, and why?',
          'What are we trusting, and should we be?',
          'How would an attacker approach this?',
          'Can we reduce the attack surface?',
        ],
      },
      {
        id: 'impatient',
        name: 'The Impatient One',
        pillar: 'Performance',
        whoTheyAre:
          'The Impatient One physically cannot stand watching a slow page load. They measure the world in milliseconds. While others see a loading spinner, they see users leaving, money evaporating, trust eroding. They know something that feels counterintuitive: performance is a feature. Not an engineering concern-a product concern.',
        coreWisdom: [
          'Performance is user respect made measurable. Every millisecond you waste says "my convenience matters more than your time."',
          'Perceived performance matters as much as actual performance. A 3-second load with a good skeleton screen feels faster than a 2-second blank load.',
          'The fastest code is code that doesn\'t run. Before optimizing, ask: do we need this at all?',
          'Performance must be measured, not assumed. "It feels fast to me" means nothing.',
          'Set performance budgets, or die by a thousand cuts.',
        ],
        warStories: [
          {
            title: 'The Hundred-Thousand-Dollar Second',
            description:
              'An e-commerce site\'s checkout crept from 4 to 8 seconds during Black Friday. Conversion dropped 40%. Each second of delay cost roughly $100K in lost sales.',
          },
          {
            title: 'The JavaScript Wall',
            description:
              'A single-page app loaded 4MB of JavaScript before showing anything useful. On mobile, users stared at white screens for 12+ seconds. The developers never noticed on their fast MacBooks.',
          },
          {
            title: 'The Query That Worked Until It Didn\'t',
            description: 'A database query performed beautifully with 100 users. At 10,000 users, it took down production.',
          },
        ],
        toolkit: {
          Measurement: 'Core Web Vitals (LCP, FID/INP, CLS), Lighthouse, WebPageTest, Real User Monitoring',
          Frontend: 'Bundle analysis, code splitting, lazy loading, image optimization, caching strategies',
          Backend: 'Database query optimization, caching layers, profiling tools, load testing',
          Process: 'Performance budgets, performance testing in CI',
        },
        allies: ['Code Quality (clean code is often performant)', 'Cost Efficiency (faster often means cheaper)'],
        tensions: ['Design/UX (richness vs. speed)', 'Security (encryption overhead)', 'Features (more code = more load)'],
        questions: [
          'How long does this take?',
          'What\'s the bottleneck?',
          'Do we need to load this now?',
          'What\'s the experience on a slow device?',
          'What happens at 10x the load?',
        ],
      },
      {
        id: 'craftsperson',
        name: 'The Craftsperson',
        pillar: 'Code Quality',
        whoTheyAre:
          'The Craftsperson reads code like literature. They can tell when code was written with care versus under duress. They notice when variable names lie, when functions do too many things, when the architecture is fighting the requirements. They believe in doing things right, not just doing things.',
        coreWisdom: [
          'Code is read far more than it\'s written. Optimize for reading, not writing.',
          'Naming is one of the hardest problems. A good name is compressed documentation. A bad name is a lie that compounds.',
          'Good architecture makes change easy. Bad architecture makes change terrifying.',
          'Technical debt is a choice. Sometimes the right choice. But it\'s never free.',
          'Consistency matters more than any particular style. A codebase that\'s consistently "wrong" is better than one that\'s inconsistently "right."',
        ],
        warStories: [
          {
            title: 'The Three-Week "Simple" Change',
            description:
              'A small change-add a field, store it, show it in a report-should have been two days. It took three weeks. The codebase was so tangled that no one could trace the implications.',
          },
          {
            title: 'The Codebase That Couldn\'t Hire',
            description: 'Every engineer they interviewed took one look at the code and declined the offer.',
          },
          {
            title: 'The 2,000-Line Function',
            description: 'No one knew exactly what it did, only that everything depended on it. Untouchable.',
          },
        ],
        toolkit: {
          'Style & Consistency': 'Linters (ESLint, Pylint), formatters (Prettier, Black), editor configurations',
          'Type Safety': 'TypeScript, Python type hints, static analysis tools',
          'Design Principles': 'SOLID (applied with judgment), design patterns, DRY, YAGNI',
          Process: 'Code review, documentation, refactoring practices, dependency management',
        },
        allies: ['Testing (tests enable confident refactoring)', 'Maintenance (quality now makes maintenance easier)', 'Security (clear code has fewer hiding places)'],
        tensions: ['Velocity (doing it right takes longer upfront)', 'Performance (sometimes ugly code is faster)'],
        questions: [
          'Will we understand this in six months?',
          'Is this the simplest solution?',
          'What\'s the cost of changing this later?',
          'Are we taking on debt knowingly or accidentally?',
        ],
      },
    ],
  },
  {
    id: 'midnight-responder',
    name: 'The Midnight Responder',
    archetypeName: 'Reliability Council',
    pillars: ['Resilience', 'Error Handling', 'Uptime'],
    humanRoles: ['Site Reliability Engineer', 'DevOps Engineer', 'Platform Engineer', 'On-Call Engineer'],
    personality:
      'Has been paged at 3am enough times to speak with gallows humor about failure. Not cynical-just unsurprised. Finds genuine peace in preparation. Sleeps better knowing there\'s a runbook. Tells stories that start with "So there we were, the database on fire..."',
    caresAbout: 'What happens when things go wrong. And they will.',
    loudestAt: ['Architecture', 'Harden', 'Launch', 'Learn'],
    askThem: 'When this breaks at 2am, what happens?',
    signatureQuote:
      'Here\'s what I know: something will break on launch day. Not might-will. I\'ve seen payment systems go down on Black Friday. I\'ve seen a typo take out an entire region. So the question isn\'t "how do I prevent all failure?" It\'s "when it breaks at 2am, will you know? Will users see a helpful message or a cryptic error? Can you roll back in minutes or are you rebuilding from memory?" Prepare for the first fire. You\'ll sleep better. I promise.',
    councilSpeaks:
      'We\'ve all got our 3am stories. The cascade that started with a hiccup. The rollback that hadn\'t been tested. The error message that lied. We\'re not pessimists-we\'re realists who\'ve earned our skepticism. When you hear us asking "but what if that fails?", we\'re not being difficult. We\'re trying to save you from the stories you don\'t want to tell.',
    members: [
      {
        id: 'pessimist',
        name: 'The Pessimist',
        pillar: 'Resilience',
        whoTheyAre:
          'The Pessimist has a dark gift: they can look at any system and immediately see seventeen ways it will fail. They\'re not being negative-they\'re being realistic. They\'ve learned that everything that can break will break, usually at the worst possible moment. While others design for the happy path, The Pessimist designs for the disaster path.',
        coreWisdom: [
          'Everything fails. Design for it. Not "might fail"-will fail.',
          'Graceful degradation beats catastrophic failure. When something breaks, the whole system shouldn\'t collapse.',
          'The blast radius matters more than the failure itself. A single component failing is inevitable. That failure cascading is a design choice.',
          'Hope is not a strategy. "That probably won\'t happen" is not resilience planning.',
          'Test your failures before they test you. If you\'ve never seen your system fail, you don\'t know how it fails.',
        ],
        warStories: [
          {
            title: 'The Retry Storm',
            description:
              'A service went slow. Clients retried. Retries added load. Within minutes, retry traffic was 50x normal. The service was killed by its own clients trying to help.',
          },
          {
            title: 'The Cascade',
            description:
              'Service A depended on B depended on C. C had a 30-second hiccup. B waited. A\'s requests failed. A 30-second hiccup became a 4-hour outage.',
          },
          {
            title: 'The Single Point of Failure',
            description:
              'Redundant everything-except the load balancer. When it failed, traffic couldn\'t reach any of the beautifully redundant infrastructure.',
          },
        ],
        toolkit: {
          'Design Patterns': 'Circuit breakers, bulkheads, timeouts, retry with exponential backoff, fallbacks, graceful degradation',
          Infrastructure: 'Redundancy, multi-region deployment, auto-scaling, feature flags',
          'Chaos Engineering': 'Chaos Monkey/Gremlin, game days, failure injection testing',
        },
        allies: ['Error Handling (containing vs. communicating failure)', 'Uptime (resilience is how you achieve it)', 'Monitoring (can\'t respond to what you can\'t see)'],
        tensions: ['Performance (resilience patterns have overhead)', 'Code Quality (resilience code is often ugly)'],
        questions: ['What happens if this fails?', 'How do we detect it?', 'How do we recover?', 'What\'s the blast radius?'],
      },
      {
        id: 'diplomat',
        name: 'The Diplomat',
        pillar: 'Error Handling',
        whoTheyAre:
          'The Diplomat stands at the border between system chaos and user experience. When things go wrong, The Diplomat determines what the user sees, hears, and understands. They hate the generic error. "Something went wrong" is a failure of communication, not just the system. They believe every error is a conversation.',
        coreWisdom: [
          'Errors are communication, not just code paths. Every error is a moment of potential confusion or lost trust.',
          'Tell users what happened, what it means, and what to do next. "Error 500" tells them nothing.',
          'Different audiences need different information. Users need clarity. Developers need stack traces. Ops needs metrics.',
          'Fail loudly internally, gracefully externally. Inside: detailed logs and alerts. Outside: calm, helpful messages.',
          'Never swallow errors silently. Unlogged errors are bugs hiding in the dark.',
        ],
        warStories: [
          {
            title: 'The Silent Data Loss',
            description:
              'A sync process failed intermittently but only logged at DEBUG level. Users lost data for weeks before anyone noticed.',
          },
          {
            title: 'The Error That Lied',
            description:
              '"Your password is incorrect." But the password was correct-the auth service was down. The user triggered account lockout trying different passwords.',
          },
          {
            title: 'The $10 Million Error Message',
            description:
              '"Transaction failed" didn\'t distinguish between "failed to process" and "failed to confirm." Users submitted duplicates. Reversals. Customer service nightmare.',
          },
        ],
        toolkit: {
          'Error Design': 'Taxonomies, message guidelines, error codes, contextual messages',
          Logging: 'Structured logging, correct log levels, correlation IDs, context preservation',
          Handling: 'Error boundaries, retry strategies, fallback behaviors',
        },
        allies: ['Design/UX (error messages are UX)', 'Resilience (partners in failure)', 'Support (good errors reduce burden)', 'Monitoring (well-logged errors are trackable)'],
        tensions: ['Security (helpful vs. revealing system internals)'],
        questions: ['What will the user see?', 'What will the developer see?', 'Can we recover automatically?', 'Is this logged correctly?'],
      },
      {
        id: 'sentinel',
        name: 'The Sentinel',
        pillar: 'Uptime',
        whoTheyAre:
          'The Sentinel\'s phone is always on. They think in nines: 99% uptime is 3.65 days of downtime per year. 99.9% is 8.76 hours. 99.99% is 52.6 minutes. Each nine is exponentially harder to achieve. They understand that uptime isn\'t just technical-it\'s a promise to users.',
        coreWisdom: [
          'Availability is a promise. Every time someone relies on your product and it\'s there, you keep your promise.',
          'The nines are earned, not declared. You can\'t just decide to have 99.99% uptime.',
          'Planned downtime is still downtime. The best systems can be updated without users noticing.',
          'Measure from the user\'s perspective. Your servers being up doesn\'t mean users can reach you.',
          'Recovery time matters as much as failure prevention. How fast can you recover?',
        ],
        warStories: [
          {
            title: 'The 99.9% That Wasn\'t',
            description:
              'Server metrics showed 99.9% uptime. But a flaky auth service caused login failures 5% of the time. They were measuring the wrong thing.',
          },
          {
            title: 'The Untested Rollback',
            description:
              'A routine deployment had a bug. The rollback process had never been tested. It failed. Five-minute blip became four-hour outage.',
          },
          {
            title: 'The Dependency That Disappeared',
            description:
              'A third-party service for a minor feature went down. No graceful degradation-the whole app failed to load.',
          },
        ],
        toolkit: {
          Measurement: 'SLIs, SLOs, SLAs, error budgets',
          Monitoring: 'Synthetic monitoring, real user monitoring, health checks, alerting',
          Architecture: 'Redundancy, load balancing, auto-scaling, multi-region, database replication',
          Operations: 'Zero-downtime deployments, automated rollback, runbooks, on-call rotations',
        },
        allies: ['Resilience (how you achieve uptime)', 'Monitoring (can\'t maintain what you can\'t measure)', 'CI/CD (safe deployments protect uptime)'],
        tensions: ['Features (every new feature is a potential failure point)', 'Cost Efficiency (high availability is expensive)'],
        questions: ['What\'s our actual uptime?', 'Are we measuring what users experience?', 'How fast can we recover?', 'What\'s the error budget?'],
      },
    ],
  },
  {
    id: 'witness',
    name: 'The Witness',
    archetypeName: 'User Success Council',
    pillars: ['Accessibility', 'Onboarding', 'Documentation', 'Support'],
    humanRoles: ['UX Researcher', 'Customer Support', 'Technical Writer', 'Accessibility Specialist', 'Customer Success Manager'],
    personality:
      'Watches users more than talks to them. Has seen the moment someone gives up-the slight slump, the closed tab-and it haunts them a little. Fierce about inclusion in a quiet way. Asks the questions that make you uncomfortable because they\'re about the people you forgot.',
    caresAbout: 'Can every human actually succeed? Who are we leaving out?',
    loudestAt: ['Discovery', 'Design', 'Build', 'Launch', 'Learn'],
    askThem: 'Who can\'t use this? Where will they get stuck?',
    signatureQuote:
      'Before you launch-try something. Watch one person who\'s never seen your product try to use it. Don\'t help them. Don\'t explain. Just watch. Where do they hesitate? Where do they squint at the screen? Where do they reach for a button that isn\'t there? That\'s your priority. And then ask yourself the harder question: who can\'t use this at all right now? A blind user? Someone with shaky hands? Someone on a cracked phone with bad wifi? You don\'t have to fix everything. But know who you\'re leaving outside.',
    councilSpeaks:
      'We\'re the ones who watch. We see the hesitation, the squint, the sigh, the closed tab. We know who you\'re leaving out, even when you don\'t. We\'re not here to slow you down-we\'re here to make sure you\'re building something people can actually use. All people. Not just the ones who look like your team.',
    members: [
      {
        id: 'includer',
        name: 'The Includer',
        pillar: 'Accessibility',
        whoTheyAre:
          'The Includer sees every design decision through the eyes of people who are usually forgotten. The blind user with a screen reader. The deaf user who needs captions. The user with motor impairments who can\'t use a mouse. They\'ve learned that "accessibility" isn\'t about edge cases-it\'s about the full spectrum of human experience. The Includer carries a quiet moral clarity: if your product can\'t be used by everyone, you\'ve decided who matters.',
        coreWisdom: [
          'Accessibility is not a feature. It\'s a characteristic of good design.',
          'Disability is a mismatch between a person and their environment. A wheelchair user isn\'t disabled by their body-they\'re disabled by stairs.',
          'The curb cut effect is real. Almost every accessibility improvement helps everyone.',
          'Compliance is the floor, not the ceiling. WCAG AA is a minimum standard.',
          'Nothing about us without us. You cannot design accessible products without involving disabled users.',
        ],
        warStories: [
          {
            title: 'The Beautiful Unusable Site',
            description:
              'Won design awards. Screen reader users couldn\'t navigate it. Low-vision users couldn\'t read it. Keyboard users couldn\'t use it.',
          },
          {
            title: 'The Form That Couldn\'t Be Completed',
            description:
              'No labels associated with inputs. Screen reader users couldn\'t tell what information went where. A lawsuit followed.',
          },
          {
            title: 'The Video That Said Nothing',
            description:
              'Entire onboarding was video-based. No captions. No transcripts. Deaf users had no way to learn the product.',
          },
        ],
        toolkit: {
          Standards: 'WCAG 2.1, ARIA, Section 508/ADA',
          Testing: 'Screen readers (NVDA, JAWS, VoiceOver), axe/WAVE/Lighthouse, keyboard-only testing, color contrast analyzers',
          'Design Practices': 'Semantic HTML, focus management, alt text, captions, clear visual hierarchy',
        },
        allies: ['Design/UX (both center the human)', 'Documentation (clarity helps everyone)', 'Support (accessible products reduce burden)'],
        tensions: ['Design/UX (aesthetics vs. requirements-usually resolvable)', 'Velocity (accessibility takes time)'],
        questions: ['Can a screen reader user complete this?', 'Can a keyboard-only user navigate this?', 'Is there sufficient color contrast?', 'Who have we excluded?'],
      },
      {
        id: 'host',
        name: 'The Host',
        pillar: 'Onboarding',
        whoTheyAre:
          'The Host greets every new user at the door and walks them to success. They obsess over first impressions because the first five minutes determine whether someone becomes a user or a churn statistic. They\'ve watched hundreds of session recordings. They\'ve seen the moment of confusion, the hesitation, the rage-quit.',
        coreWisdom: [
          'You never get a second chance at a first impression. Users form opinions in seconds.',
          'Time to value is everything. How quickly can someone go from "I signed up" to "I see why this matters"?',
          'Show, don\'t tell. Interactive experience teaches more than any explanation.',
          'Progressive disclosure is kindness. Don\'t show everything at once.',
          'Onboarding never really ends. Users keep encountering new features.',
        ],
        warStories: [
          {
            title: 'The 12-Step Setup',
            description:
              'Each step was individually reasonable. Together, they were a wall. 60% of users abandoned. Smart defaults doubled activation.',
          },
          {
            title: 'The Feature Tour Nobody Wanted',
            description:
              '8-step mandatory tour. Users clicked "Next" without reading. The feature had low adoption, and the team blamed the feature.',
          },
          {
            title: 'The Empty State That Offered Nothing',
            description:
              'New users saw empty charts, blank tables. No guidance, no sample data, no clear next step.',
          },
        ],
        toolkit: {
          Frameworks: 'Time to Value, activation metrics, user journey mapping, Jobs-to-be-Done',
          Patterns: 'Progressive disclosure, smart defaults, empty states that guide, contextual hints, checklists, sample data',
          Measurement: 'Funnel analysis, cohort analysis, session recordings, user interviews',
        },
        allies: ['Design/UX (first impressions are UX)', 'Documentation (supports readers)', 'Analytics (data-driven optimization)'],
        tensions: ['Features (teams want visibility; The Host wants simplicity)', 'Performance (rich onboarding has costs)'],
        questions: ['How long until first value?', 'Where do users drop off?', 'What\'s the minimum viable onboarding?', 'Can they succeed without help?'],
      },
      {
        id: 'librarian',
        name: 'The Librarian',
        pillar: 'Documentation',
        whoTheyAre:
          'The Librarian believes every question a user has to ask is a failure of documentation. They\'ve spent enough time in support queues to know the same questions come up repeatedly. They think about documentation as a product-with users, use cases, and quality standards.',
        coreWisdom: [
          'If it\'s not documented, it doesn\'t exist. Features users can\'t discover might as well not exist.',
          'Documentation is a product. It has users, use cases, quality standards.',
          'Different users need different documentation. Tutorials for beginners. How-to guides for tasks. Reference for details.',
          'The best documentation is documentation you don\'t need. If users constantly need docs, that\'s a UX failure.',
          'Keep it current or kill it. Wrong documentation is worse than none.',
        ],
        warStories: [
          {
            title: 'The Lie That Lived for Years',
            description:
              'Documentation referenced an option removed two versions ago. Support tickets rolled in.',
          },
          {
            title: 'The Expert\'s Curse',
            description:
              'A developer\'s documentation made perfect sense to developers. Users couldn\'t follow it.',
          },
          {
            title: 'The Hidden Answer',
            description:
              'The answer existed but was buried three levels deep with a title nobody would search for.',
          },
        ],
        toolkit: {
          'Documentation Types (Diátaxis)': 'Tutorials, how-to guides, reference, explanation',
          'Writing Practices': 'Plain language, consistent terminology, task-focused structure, examples',
          Tools: 'Static site generators, API documentation tools, version control for docs',
        },
        allies: ['Onboarding (supports readers)', 'Support (good docs reduce burden)', 'Accessibility (well-structured docs are more accessible)'],
        tensions: ['Velocity (docs take time)', 'Code Quality (code changes break docs)'],
        questions: ['Can users find this?', 'Is this accurate?', 'Who is this for?', 'When was this last updated?'],
      },
      {
        id: 'advocate',
        name: 'The Advocate',
        pillar: 'Support',
        whoTheyAre:
          'The Advocate is the voice of users who are stuck, frustrated, confused, or angry. They\'ve developed deep empathy for user pain-and strong opinions about what\'s causing it. Every support ticket is a signal. The Advocate doesn\'t just resolve tickets; they see patterns. They\'re the canary in the coal mine.',
        coreWisdom: [
          'Every support ticket is a product failure. Something didn\'t work or expectations weren\'t set correctly.',
          'Support is a feature. Users choose products partly based on whether they can get help.',
          'Patterns matter more than incidents. One weird issue is a ticket. Ten is a bug. A hundred is a design flaw.',
          'Resolution time is user respect. How long someone waits is how long they feel unimportant.',
          'Self-service is kindness, not cost-cutting. Most users would rather solve their own problems.',
        ],
        warStories: [
          {
            title: 'The Pattern Nobody Saw',
            description:
              'Dozens of tickets about a "random" bug, each handled individually. It was the same bug. Connecting the dots took months.',
          },
          {
            title: 'The Human Answer',
            description:
              'A genuinely empathetic response to a frustrated user transformed them into a vocal advocate for the product.',
          },
        ],
        toolkit: {
          Channels: 'Email/tickets, live chat, phone, community forums, social media',
          'Self-Service': 'Knowledge bases, FAQs, in-app help, chatbots with escalation',
          Process: 'Ticket categorization, escalation paths, feedback loops',
          Metrics: 'First response time, resolution time, CSAT, ticket volume',
        },
        allies: ['Documentation (reduces burden)', 'User Feedback (primary channel)', 'Error Handling (good errors reduce needs)'],
        tensions: ['Engineering (Support wants fixes now)', 'Cost Efficiency (Support is expensive)'],
        questions: ['What patterns are we seeing?', 'What could prevent this ticket?', 'How long are users waiting?', 'What feedback should product hear?'],
      },
    ],
  },
  {
    id: 'questioner',
    name: 'The Questioner',
    archetypeName: 'Insight Council',
    pillars: ['Analytics', 'Monitoring', 'User Feedback'],
    humanRoles: ['Data Analyst', 'Product Manager', 'UX Researcher', 'Data Scientist', 'Growth Engineer'],
    personality:
      'Allergic to assumptions. Gets genuinely excited when data contradicts intuition-that\'s where the learning is. Comfortable saying "I don\'t know yet, but here\'s how we\'ll find out." Has a gentle way of dismantling confident assertions with a single curious question.',
    caresAbout: 'What\'s actually happening vs. what we assume.',
    loudestAt: ['Validation', 'Launch', 'Learn', 'Iterate'],
    askThem: 'How will we know if this is working?',
    signatureQuote:
      'What does success look like on day one? Not your gut feeling-something you can point to. Do users complete the core action? Do they come back tomorrow? Pick one or two things and measure them. I know, I know-you want to move fast. But here\'s the thing: you\'re going to make a hundred decisions in the next month. Some will be right. Some will be wrong. Without data, you won\'t know which is which. You\'ll just be guessing louder.',
    councilSpeaks:
      'We\'re comfortable with uncertainty-as long as there\'s a way to resolve it. Gut feelings are fine for starting. Data is how you learn if you were right. We\'re not here to slow you down with analysis paralysis. We\'re here to turn your guesses into knowledge. And honestly? We get a little thrill when the data surprises us. That\'s where the real learning happens.',
    members: [
      {
        id: 'pattern-finder',
        name: 'The Pattern Finder',
        pillar: 'Analytics',
        whoTheyAre:
          'The Pattern Finder sees behavior at scale. While others look at individual users, they see aggregates-thousands of sessions condensed into funnels, cohorts, and trends. They can tell you what users do, even when it contradicts what users say. They know that metrics are compressed stories about human behavior.',
        coreWisdom: [
          'If you\'re not measuring it, you\'re guessing. Data is how you know what\'s actually happening.',
          'Measure what matters, not what\'s easy. Vanity metrics feel good but don\'t inform decisions.',
          'Behavior beats surveys. People don\'t always know why they do things. Clickstreams don\'t lie.',
          'Correlation is not causation, but it\'s a clue. A/B test before you\'re confident.',
          'The goal is insight, not data. Dashboards are worthless without understanding.',
        ],
        warStories: [
          {
            title: 'The Feature That "Everyone" Used',
            description: 'The same 3% of users accounted for 80% of usage.',
          },
          {
            title: 'The Vanity Metric Trap',
            description: 'Millions of signups. Only 5% ever came back after day one.',
          },
          {
            title: 'The Segment That Saved the Company',
            description:
              'Overall metrics looked bad. One acquisition channel had 3x retention. Doubling down saved everything.',
          },
        ],
        toolkit: {
          Frameworks: 'AARRR (Pirate Metrics), North Star Metric, leading vs. lagging indicators, cohort analysis',
          Tools: 'Mixpanel, Amplitude, PostHog, Google Analytics, data warehouses',
          Techniques: 'Funnel analysis, retention curves, segmentation, A/B testing',
        },
        allies: ['User Feedback (what + why)', 'Onboarding (data-driven optimization)', 'Monitoring (different timescales)'],
        tensions: ['Design/UX (empathy vs. evidence)', 'Privacy/Compliance (track everything vs. minimize)'],
        questions: ['What are users actually doing?', 'Is this metric actionable?', 'What segment matters most?', 'How do we know if we\'re right?'],
      },
      {
        id: 'night-watch',
        name: 'The Night Watch',
        pillar: 'Monitoring',
        whoTheyAre:
          'The Night Watch never sleeps. They\'re the eyes on the system-watching for trouble before users notice, before damage spreads. They think in dashboards, alerts, and runbooks. Is the system healthy right now? If something\'s wrong, what is it? How do we fix it?',
        coreWisdom: [
          'You can\'t fix what you can\'t see. Visibility is the prerequisite for reliability.',
          'Alerts should be actionable. Noise trains you to ignore alerts.',
          'Monitor from the user\'s perspective. Internal metrics can be green while users suffer.',
          'The three pillars: logs, metrics, traces. Logs tell what happened. Metrics tell how much. Traces tell the path.',
          'Alert fatigue is real and deadly. Ruthlessly prune non-actionable alerts.',
        ],
        warStories: [
          {
            title: 'The Silent Failure',
            description:
              'A background job stopped running. No errors-it just didn\'t execute. No monitor on "did this job run?" Three days before anyone noticed.',
          },
          {
            title: 'The Alert That Cried Wolf',
            description:
              'Minor threshold breaches every few hours. When it fired for a real problem, it was dismissed.',
          },
          {
            title: 'The Trace That Saved Hours',
            description:
              'Distributed trace showed a specific query hitting an overloaded shard. Minutes to diagnose instead of hours.',
          },
        ],
        toolkit: {
          'Three Pillars': 'Logs (ELK, Datadog), Metrics (Prometheus, Grafana), Traces (Jaeger, Honeycomb)',
          'Monitoring Types': 'Infrastructure, APM, synthetic, real user, business metrics',
          Alerting: 'Thresholds, anomaly detection, SLO-based alerts, escalation policies, runbooks',
        },
        allies: ['Uptime (can\'t maintain without visibility)', 'Error Handling (well-structured errors are loggable)', 'Resilience (see when patterns activate)'],
        tensions: ['Performance (monitoring has overhead)', 'Cost Efficiency (observability tools are expensive)'],
        questions: ['Is the system healthy right now?', 'Would we know if something was wrong?', 'Is this alert actionable?', 'What\'s the user actually experiencing?'],
      },
      {
        id: 'listener',
        name: 'The Listener',
        pillar: 'User Feedback',
        whoTheyAre:
          'The Listener gathers qualitative signal that data alone can\'t provide. Analytics shows what users do; The Listener learns what they think, feel, want, and struggle with. They\'ve learned to hear what users mean, not just what they say. When a user asks for a faster horse, The Listener hears "I need to get places quicker."',
        coreWisdom: [
          'Users are experts in their problems, not in solutions. Listen to struggles, not feature requests.',
          'What users say and what they do often differ. Triangulate with behavioral data.',
          'The most important feedback is unsolicited. The passionate email at midnight-that\'s intensity.',
          'Absence of feedback isn\'t satisfaction. Silent users might be delighted or quietly churning.',
          'Feedback is a gift, even when it stings. The user who complains cares enough to tell you.',
        ],
        warStories: [
          {
            title: 'The Feature Everyone Requested',
            description:
              'A vocal group requested relentlessly. The team built it. Almost nobody used it. The vocal group was unrepresentative.',
          },
          {
            title: 'The Emotion Behind the Request',
            description:
              'Users asked for "more customization." The real issue: defaults made them look generic. Better defaults solved it without more options.',
          },
          {
            title: 'The Churned User Interview',
            description: 'Painful but gold. Things active users would never tell them.',
          },
        ],
        toolkit: {
          Quantitative: 'NPS, CSAT, CES, in-app surveys, feature voting',
          Qualitative: 'User interviews, usability testing, support ticket analysis, review mining, customer advisory boards',
          Synthesis: 'Jobs-to-be-Done analysis, persona refinement, journey mapping',
        },
        allies: ['Analytics (what + why together)', 'Design/UX (insight informs design)', 'Support (primary feedback channel)'],
        tensions: ['Velocity (research takes time)', 'Analytics (when data and users conflict)'],
        questions: ['What problem are they really trying to solve?', 'Who isn\'t talking to us?', 'What emotions are behind this request?', 'How representative is this feedback?'],
      },
    ],
  },
  {
    id: 'groundskeeper',
    name: 'The Groundskeeper',
    archetypeName: 'Technical Operations Council',
    pillars: ['Testing', 'CI/CD', 'Maintenance'],
    humanRoles: ['QA Engineer', 'SDET', 'DevOps Engineer', 'Release Manager', 'Software Engineer'],
    personality:
      'Finds deep satisfaction in systems that hum. Thinks about future-you as a real person who deserves kindness. Has strong opinions about test coverage but will buy you a beer while explaining them. Believes that moving fast and not breaking things aren\'t opposites-they\'re the same thing, if you set it up right.',
    caresAbout: 'Sustainable velocity. Being kind to future-you.',
    loudestAt: ['Architecture', 'Build', 'Harden', 'Iterate'],
    askThem: 'Can we keep moving fast without breaking things?',
    signatureQuote:
      'MVP doesn\'t mean "move fast and break things." It means "move fast and don\'t break your ability to keep moving." Can you deploy without holding your breath? Can you roll back when-not if-something\'s wrong? Do your critical paths have tests, or are you just hoping? You don\'t need perfect infrastructure. You need enough that shipping on Tuesday doesn\'t mean all-nighter on Wednesday. Future-you is a real person. Be kind to them.',
    councilSpeaks:
      'We\'re not here to slow you down. We\'re here to make sure you can keep going. There\'s a difference between moving fast and moving recklessly. Tests, pipelines, maintenance-they feel like overhead until the day they save you. And they will save you. Trust us. We\'ve seen what happens when future-you inherits a mess from past-you. Don\'t do that to yourself.',
    members: [
      {
        id: 'skeptic',
        name: 'The Skeptic',
        pillar: 'Testing',
        whoTheyAre:
          'The Skeptic doesn\'t trust code. Not yours, not theirs, not anyone\'s. They believe in proof over promises. "I tested it" prompts: "How? Where\'s the test? Will it catch a regression?" They\'ve learned that manual testing doesn\'t scale. Automated tests are institutional memory-they remember every bug you\'ve fixed.',
        coreWisdom: [
          'Tests are how you know it works. Not "I think it works." Repeatable, automated, trustworthy proof.',
          'Untested code is untrustworthy code. Humans make mistakes. Tests verify.',
          'The Testing Trophy: integration tests are the sweet spot. Unit tests are fast but don\'t prove things work together.',
          'Test behavior, not implementation. Tests that know too much break when you refactor.',
          'A failing test in CI is better than a bug in production. Tests catching problems is success.',
        ],
        warStories: [
          {
            title: 'The Refactor Nightmare',
            description:
              'No tests. Every change might break something. The refactor that should have taken days took weeks.',
          },
          {
            title: 'The Test That Lied',
            description: 'Tests verified mocks of mocks. Green tests, broken product.',
          },
          {
            title: 'The Bug That Came Back',
            description: 'Fixed, then reappeared during a refactor. No test for that specific bug.',
          },
        ],
        toolkit: {
          'Testing Trophy': 'Static analysis, unit tests, integration tests (sweet spot), E2E tests',
          Types: 'Functional, regression, smoke, performance, security, accessibility',
          Tools: 'Jest, Pytest, Playwright, Cypress, coverage tools',
        },
        allies: ['Code Quality (clean code is testable)', 'CI/CD (tests enable deployment)', 'Resilience (test failure modes)'],
        tensions: ['Velocity (tests take time)', 'Performance (comprehensive tests are slow)'],
        questions: ['How do we know this works?', 'Will this catch a regression?', 'What\'s not tested?', 'Is this test testing the right thing?'],
      },
      {
        id: 'automator',
        name: 'The Automator',
        pillar: 'CI/CD',
        whoTheyAre:
          'The Automator hates manual processes. Every time someone has to remember a step, that\'s a point of failure. They\'ve built pipelines that take code from commit to production without human intervention. They think in pipelines, stages, and gates.',
        coreWisdom: [
          'If it\'s not automated, it\'s not reliable. Automated pipelines do the same thing every time, exactly right, forever.',
          'Deployment should be boring. When it\'s stressful and risky, you deploy rarely. When it\'s routine, you deploy constantly.',
          'Small, frequent deployments beat large, rare ones. One change is easy to debug. Fifty changes is a mystery.',
          'Everything that can be a gate should be a gate. Tests, security scans, linting-if it can block bad deployments, it should.',
          'Rollback is not a failure; it\'s a feature. Instant rollback turns potential outage into blip.',
        ],
        warStories: [
          {
            title: 'The Deployment Roulette',
            description:
              '12-step manual process from an outdated wiki. Sometimes it worked. Two weeks of automation made deployments reliable overnight.',
          },
          {
            title: 'The "It Worked in Staging" Disaster',
            description: 'Environments had drifted. Infrastructure-as-code fixed it.',
          },
          {
            title: 'The Friday Deploy',
            description:
              'Subtle bug, no automated rollback. Manual rollback procedure failed. Cleanup took the weekend.',
          },
        ],
        toolkit: {
          CI: 'Automated builds, test execution, static analysis, security scanning, artifact generation',
          CD: 'Environment management, deployment strategies (blue-green, canary), feature flags, database migrations',
          Tools: 'GitHub Actions, GitLab CI, ArgoCD, Terraform, Docker, Kubernetes',
        },
        allies: ['Testing (enables automation)', 'Uptime (safe deploys protect it)', 'Monitoring (confirms healthy deploys)'],
        tensions: ['Velocity (building pipelines takes time)', 'Security (automation vs. approvals)'],
        questions: ['Can we deploy with confidence?', 'How fast can we roll back?', 'What manual steps remain?', 'What gates are we missing?'],
      },
      {
        id: 'caretaker',
        name: 'The Caretaker',
        pillar: 'Maintenance',
        whoTheyAre:
          'The Caretaker tends to system health over time. While others focus on new features, they watch for rot-technical debt, outdated dependencies, forgotten code. They think in seasons and years. Without active maintenance, everything decays.',
        coreWisdom: [
          'Entropy is real. Systems decay without active maintenance. Left alone, code gets worse.',
          'Technical debt compounds like financial debt. A shortcut today accrues interest.',
          'Dependencies are liabilities, not assets. Code you don\'t control, updated on schedules you don\'t set.',
          'The best time to refactor was when the code was written. The second best time is now.',
          'Documentation is a maintenance task. It must be maintained alongside code.',
        ],
        warStories: [
          {
            title: 'The Dependency That Died',
            description:
              'Critical library abandoned. Security vulnerability discovered. No patch coming. Four-hour fix became four-week migration.',
          },
          {
            title: 'The Upgrade That Couldn\'t Happen',
            description:
              'Two major versions behind. Old version end-of-life. Migration took six months.',
          },
          {
            title: 'The Haunted Codebase',
            description:
              '"Don\'t touch this-it breaks things we don\'t understand." No one who wrote it still worked there.',
          },
        ],
        toolkit: {
          Dependencies: 'Scanning (Dependabot, Snyk), version pinning, regular update cycles, audits',
          'Code Health': 'Static analysis trends, coverage trends, dead code detection, refactoring tools',
          Process: 'Debt tracking, debt budgeting, Boy Scout Rule, deprecation processes',
        },
        allies: ['Code Quality (quality now makes maintenance easier)', 'Security (outdated dependencies are vulnerabilities)', 'Testing (safety net for refactoring)'],
        tensions: ['Velocity (maintenance competes with features)', 'Features (new is visible; maintenance is invisible)'],
        questions: ['How old are our dependencies?', 'What technical debt are we carrying?', 'What\'s the cost of not maintaining this?', 'What will break next?'],
      },
    ],
  },
  {
    id: 'long-game',
    name: 'The Long Game',
    archetypeName: 'Scale Council',
    pillars: ['Cost Efficiency', 'i18n/l10n', 'Compliance'],
    humanRoles: ['Engineering Manager', 'Finance/FinOps', 'Compliance Officer', 'Localization Specialist', 'VP of Engineering'],
    personality:
      'Thinks in chapters, not moments. Has watched companies hit walls they built themselves two years earlier. Not here to slow you down-just to whisper "and then what?" Carries a quiet knowing about which shortcuts become walls and which stay shortcuts.',
    caresAbout: 'What\'s coming. Seeds vs. walls.',
    loudestAt: ['Architecture', 'Scale'],
    askThem: 'What doors are we closing without realizing?',
    signatureQuote:
      'At MVP? We\'re mostly quiet. You\'ve got bigger fires. But let me plant a few seeds while you\'re here. Are you hardcoding text, or could you translate this someday without rewriting everything? Do you know roughly what you\'re spending, or will the AWS bill be a surprise? If an enterprise buyer asked about your security practices tomorrow, would you have an answer? You don\'t have to solve any of this now. Just don\'t build walls. Walls are expensive to tear down. I\'ve watched it happen. It\'s not pretty.',
    councilSpeaks:
      'We know you\'re busy. We know these feel like tomorrow\'s problems. But we\'ve watched companies hit walls at full speed-walls they built themselves, two years earlier, when they were "too busy" to think about scale. We\'re not asking you to solve everything now. We\'re asking you to not make it harder for future-you. Plant seeds. Avoid walls. That\'s all.',
    members: [
      {
        id: 'accountant',
        name: 'The Accountant',
        pillar: 'Cost Efficiency',
        whoTheyAre:
          'The Accountant sees every decision through the lens of resources. "Can we build this?" becomes "Can we afford this? Is it worth it?" They\'re not cheap-they\'re efficient. There\'s a difference. Cheap skips tests. Efficient automates tests to save future time.',
        coreWisdom: [
          'Cost is not the enemy. Waste is the enemy. Spending isn\'t bad. Wasting is bad.',
          'Optimize for the current order of magnitude. Don\'t build for a million users when you have a hundred.',
          'The most expensive code is code that shouldn\'t exist. Features no one uses. Infrastructure for hypothetical scale.',
          'Cloud costs are operational costs now. Infrastructure is a monthly bill. Monitor, optimize, budget.',
          'Time is a cost too. Developer hours are expensive. Sometimes spending money saves time.',
        ],
        warStories: [
          {
            title: 'The Surprise Bill',
            description: 'Auto-scaling plus traffic spike. $5K monthly bill became $80K. No alerts, no caps.',
          },
          {
            title: 'The Premature Optimization Tax',
            description:
              'Kubernetes, microservices, multi-region for 200 users. $15K/month infrastructure requiring full-time engineer. A monolith would have cost $200.',
          },
          {
            title: 'The Zombie Resources',
            description:
              'Servers for canceled projects, test environments for departed employees. $8K/month nobody noticed.',
          },
        ],
        toolkit: {
          Visibility: 'Cloud cost dashboards, cost allocation tags, budget alerts, unit economics',
          Optimization: 'Right-sizing, reserved instances, spot instances, auto-scaling, caching',
          Architecture: 'Build vs. buy analysis, serverless vs. containers, storage tiering',
        },
        allies: ['Performance (efficient code is cheaper)', 'Maintenance (cleanup reduces costs)'],
        tensions: ['Resilience (redundancy costs money)', 'Quality (higher quality often costs more)'],
        questions: ['What does this cost?', 'Is this worth it?', 'What are we wasting?', 'What\'s the unit economics?'],
      },
      {
        id: 'ambassador',
        name: 'The Ambassador',
        pillar: 'i18n/l10n',
        whoTheyAre:
          'The Ambassador thinks globally. While others build for their context, The Ambassador asks about users in Japan, Brazil, Germany, Saudi Arabia. They\'ve learned that localization is not translation. It\'s date formats, number formats, currencies, time zones, reading direction, color meanings, cultural references.',
        coreWisdom: [
          'Every string you hardcode is a wall you\'re building. Text in code can\'t be translated. Externalize from the start.',
          'Localization is not translation. Translation is words. Localization is experience.',
          'Design for expansion and contraction. German is 30% longer than English. Chinese might be shorter.',
          'Time zones will break your brain. Store UTC, display local, never assume.',
          'Right-to-left is not an edge case. Hundreds of millions of users read RTL.',
        ],
        warStories: [
          {
            title: 'The Hardcoded Nightmare',
            description:
              'Internationalization became six-month archaeology expedition through strings everywhere.',
          },
          {
            title: 'The Date That Didn\'t Exist',
            description:
              'MM/DD/YYYY stored as strings. European user entered 15/01/2024. System interpreted as month 15.',
          },
          {
            title: 'The Emoji That Offended',
            description: 'Thumbs-up icon for success. Offensive in some cultures.',
          },
        ],
        toolkit: {
          Architecture: 'String externalization, Unicode/UTF-8, date/time libraries, number formatting, RTL support',
          Process: 'Translation management systems, translator context, pseudo-localization testing',
          Testing: 'Real translations, long strings (German), short strings (Chinese), RTL layouts',
        },
        allies: ['Accessibility (both about reaching overlooked users)', 'Design/UX (experience across cultures)', 'Compliance (regional requirements)'],
        tensions: ['Velocity (i18n adds complexity)', 'Cost Efficiency (translation is expensive)'],
        questions: ['Can this be translated?', 'Are we handling dates/times correctly?', 'What markets are we blocking ourselves from?', 'Have we tested with real translations?'],
      },
      {
        id: 'regulator',
        name: 'The Regulator',
        pillar: 'Compliance',
        whoTheyAre:
          'The Regulator reads the fine print. GDPR, CCPA, HIPAA, PCI-DSS, SOC 2, accessibility laws. They know compliance isn\'t optional-it\'s market access. They think about data: what you collect, where it lives, who can access it, how long you keep it, how you delete it.',
        coreWisdom: [
          'Compliance is market access. You can argue about regulations. You can\'t argue that they exist.',
          'Data is liability. Every piece collected must be protected, reported on, potentially deleted. Minimize collection.',
          'Document everything. Auditors care what you can prove you did.',
          'Privacy by design, not afterthought. Build it in from the start.',
          'Regulations evolve. Compliance isn\'t a project-it\'s ongoing practice.',
        ],
        warStories: [
          {
            title: 'The GDPR Scramble',
            description:
              'Ignored until a month before enforcement. No idea what personal data existed or how to delete it.',
          },
          {
            title: 'The Enterprise Deal That Died',
            description:
              'No SOC 2, no security policies. Enterprise couldn\'t proceed due to their own compliance requirements.',
          },
          {
            title: 'The Data That Couldn\'t Be Deleted',
            description:
              'User data spread across 17 systems, some with no deletion mechanism. Backups contained it too.',
          },
        ],
        toolkit: {
          Frameworks: 'GDPR, CCPA, HIPAA, PCI-DSS, SOC 2, ISO 27001, WCAG',
          'Data Governance': 'Data mapping, classification, retention policies, deletion procedures, access controls',
          Process: 'Security policies, privacy policies, incident response plans, vendor management, training',
        },
        allies: ['Security (controls are often requirements)', 'i18n/l10n (regional regulations)', 'Documentation (compliance requires it)'],
        tensions: ['Velocity (reviews take time)', 'Analytics (data collection vs. minimization)'],
        questions: ['What data are we collecting?', 'Can we delete a user completely?', 'What markets does this block us from?', 'Can we prove we\'re compliant?'],
      },
    ],
  },
  {
    id: 'artisan',
    name: 'The Artisan',
    archetypeName: 'Form Council',
    pillars: ['Tone & Voice', 'Rhythm & Pacing', 'Harmony & Unity', 'Hierarchy & Composition', 'Beauty as Medicine', 'Distinctive Aliveness'],
    humanRoles: ['Visual Designer', 'Brand Designer', 'Art Director', 'Motion Designer', 'Design Lead'],
    personality:
      'Has a refined eye and hands deep in the material. Treats every detail as a choice, never a default. Cannot tolerate generic when distinctive is available. Knows the difference between fussy and considered, between safe and dead, between calm and embalmed. Holds tension as a virtue, not a flaw-and knows the rules well enough to break them on purpose.',
    caresAbout: 'Is the product aesthetically alive, recognizably itself, and visually worthy of the user it claims to serve?',
    loudestAt: ['Design', 'Build'],
    askThem: 'Is this work alive, or merely tasteful-and would anyone love it enough to come back?',
    signatureQuote:
      'Tasteful is not the goal. Alive is the goal. A product that\'s safe, balanced, and harmonious is also forgettable-and the user will close it and not remember why she should open it again. Tension is not the enemy of harmony; it is what makes harmony interesting. Restraint without tension is sedation. Distinctive choices are not luxuries-they are the reason anyone loves a product enough to keep it. Make something somebody could only have made on purpose.',
    councilSpeaks:
      'We are operating in a council whose other members are, in some sense, conservative voices-appropriately so, given what they protect. Security wants verification. Reliability wants graceful failure. Witness wants inclusion. The Long Game wants caution. The Groundskeeper wants sustainability. We are the council member who resists safe defaults. When everyone else is arguing for the responsible move, we are the one asking: but is this actually a product anyone will love? Beauty is medicine. Tension is aliveness. Generic is failure.',
    members: [
      {
        id: 'resonance',
        name: 'The Resonance',
        pillar: 'Tone & Voice',
        whoTheyAre:
          'The Resonance holds the product\'s personality made consistent across word and image. They listen for how the product sounds when it speaks and watch for how it appears when it shows up-and insist the two reinforce each other rather than undermine each other. A perfectly typeset error message that says "OPERATION FAILED" fails the tone. A warm sentence rendered in Helvetica fails the voice.',
        coreWisdom: [
          'Type is voice made visible. Type that contradicts the copy is two different products on one screen.',
          'The visual tone should be derivable from the product\'s emotional posture. A product whose thesis is "I see how much you\'re carrying" should not show up in corporate Material blue.',
          'Tone is consistent across every surface-onboarding, push notifications, error messages, empty states, marketing site. Drift in any one undermines the whole.',
          'The voice should be specific enough that someone reading a single sentence or seeing a single screen could identify the product, not just the category.',
        ],
        warStories: [
          {
            title: 'The Two-Voiced Product',
            description:
              'Copy warm and human; type cold and generic. Users felt unsettled and couldn\'t explain why. The cognitive dissonance between word and image was doing it.',
          },
          {
            title: 'The Onboarding That Didn\'t Match',
            description:
              'Marketing site evocative and crafted; in-app experience generic and default. Conversion was fine; retention was poor. The promise made on the marketing site wasn\'t kept.',
          },
          {
            title: 'The Error Message Trap',
            description:
              'A brand carefully tuned for warmth, error states rendered in flat red Helvetica. The single moment of greatest user vulnerability undermined every other moment.',
          },
        ],
        toolkit: {
          Voice: 'Copy voice and visual tone alignment, emotional posture mapping',
          Type: 'Typography as voice, type pairing studies',
          Consistency: 'Cross-surface tone audits (errors, empty states, settings, edge cases)',
        },
        allies: ['Harmony & Unity (tone across surfaces)', 'Error Handling (error messages carry voice)', 'Onboarding (the promise must be kept)'],
        tensions: ['Code Quality (distinctive voice is harder to maintain than generic)', 'Velocity (tuning voice takes time)'],
        questions: [
          'Does the visual tone match the copy voice?',
          'Are tone and voice consistent across every surface, including the unglamorous ones?',
          'Is the voice specific or generic? Could this be any product in the category?',
        ],
      },
      {
        id: 'pulse',
        name: 'The Pulse',
        pillar: 'Rhythm & Pacing',
        whoTheyAre:
          'The Pulse holds the cadence of attention through the product-density, breath, motion timing, the tempo of how content reveals itself. They sense whether the product feels like static, like music, like a held breath, or like a yelling crowd. For an exhausted user, rhythm is a tax or a relief.',
        coreWisdom: [
          'Rhythm is structural, not decorative. It\'s the pulse of how the product unfolds in time and space.',
          'Different products need different rhythms. A meditation app needs slow rhythm. A trading platform needs fast rhythm.',
          'Density is a tax on attention. Every additional element on a screen takes something from the user. Spend that budget intentionally.',
          'Motion timing carries meaning. Slow transitions feel intentional; fast transitions feel urgent; instant changes feel jarring.',
          'Rhythm includes the meta-rhythm: how often does the product surface things, and is that cadence right for this user\'s life?',
        ],
        warStories: [
          {
            title: 'The Dashboard With No Pulse',
            description:
              'Every element same size, same weight, same density, packed into a grid. Eye had nowhere to land. Users scrolled past it because it felt like static, not like information.',
          },
          {
            title: 'The App That Yells',
            description:
              'Motion everywhere, badges everywhere, push notifications hourly. Designed to drive engagement; actually drove abandonment because the user couldn\'t find rest.',
          },
          {
            title: 'The Slow Breath',
            description:
              'A competitor\'s app with intentional negative space, slow transitions, rare emphasis. Users reported it "felt calmer to use." That feeling was rhythm.',
          },
        ],
        toolkit: {
          Tempo: 'Density budgeting, negative space planning, content reveal pacing',
          Motion: 'Transition timing, motion notes, easing as meaning',
          'Meta-Rhythm': 'Notification cadence audits, surfacing frequency analysis',
        },
        allies: ['Hierarchy & Composition (negative space and emphasis)', 'Beauty as Medicine (rhythm serves the depleted user)', 'Design/UX (pacing is experience)'],
        tensions: ['Performance (rich motion can lag on older devices)', 'Features (more elements raise density)'],
        questions: [
          'What\'s the tempo of this product? Could a user describe its rhythm in one word?',
          'Is the density appropriate to the user\'s state when they arrive?',
          'Does motion timing feel intentional, or default?',
          'What\'s the meta-rhythm-how often does the product surface things?',
        ],
      },
      {
        id: 'whole',
        name: 'The Whole',
        pillar: 'Harmony & Unity',
        whoTheyAre:
          'The Whole holds the sense that every piece belongs to the same product-visual harmony, tonal harmony, conceptual harmony. They watch for the failure mode of patchwork: a product that feels assembled from different design systems, different voices, different intents.',
        coreWisdom: [
          'A product that feels like one made thing earns more trust than one that feels assembled. The user can\'t articulate why; they can only feel it.',
          'Harmony is more than consistency. Consistency is "everything follows the same rules." Harmony is "everything sounds like the same song."',
          'The palette should feel chosen, not assembled from defaults. The type should feel paired, not picked. The iconography should feel like one hand made it.',
          'Harmony degrades fastest at the edges-settings screens, error states, admin surfaces. The unloved corners are where the patchwork shows.',
          'Harmony is a vehicle for trust. A user who feels held in a unified experience is more likely to trust that experience emotionally.',
        ],
        warStories: [
          {
            title: 'The Patchwork Product',
            description:
              'Each feature shipped by a different team, each carrying its own design language. The product was technically powerful and emotionally incoherent.',
          },
          {
            title: 'The Design System Without a Soul',
            description:
              'Every component followed the system; the system had no voice of its own. The result was technically correct and aesthetically dead.',
          },
          {
            title: 'The Edges That Betrayed',
            description:
              'Marketing site beautiful; in-app onboarding beautiful; settings screen looked like a different app. Users hit the settings screen, lost trust, never came back.',
          },
        ],
        toolkit: {
          Harmony: 'Palette systems, type pairing, unified iconography',
          Coherence: 'Design language audits, edge-surface reviews (settings, errors, admin)',
          Trust: 'One-made-thing assessments across the full product',
        },
        allies: ['Tone & Voice (tonal harmony across surfaces)', 'Code Quality (consistency supports harmony)', 'Design/UX (harmony builds trust)'],
        tensions: ['Distinctive Aliveness (harmony wants unity; the Spark wants aliveness)', 'Velocity (unifying a patchwork takes time)'],
        questions: [
          'Does this feel like one made thing, or like assembled parts?',
          'Where are the unloved corners-the settings, the errors, the edge cases?',
          'Is harmony coming from real choices about palette, type, iconography, and voice-or from generic-system consistency that has no voice of its own?',
        ],
      },
      {
        id: 'reading',
        name: 'The Reading',
        pillar: 'Hierarchy & Composition',
        whoTheyAre:
          'The Reading holds what the eye finds first, second, third-how elements relate spatially. They make a screen readable before it is read. To them, negative space is a load-bearing design element, not the absence of design.',
        coreWisdom: [
          'Visual hierarchy serves attention. The most important thing should be the most prominent thing-not the most colorful, the most animated, or the most defaulted-to-prominent by the design system.',
          'Negative space is not empty. It is where the rest of the design earns its emphasis. Crowd the breathing room and you\'ve stolen the breath.',
          'Composition is a structural decision, not a finishing pass. You can\'t fix bad composition with better colors.',
          'The eye reads in a sequence. Design that sequence intentionally. What does she see first when this screen loads?',
          'Asymmetry is often more interesting than symmetry. Symmetry is restful but inert. Some of the most alive compositions hold deliberate asymmetric balance.',
        ],
        warStories: [
          {
            title: 'The CTA That Stole the Stage',
            description:
              'The most colorful button on the screen wasn\'t the most important action-but it was where the eye went first because of its color. Designers shipped what their tooling defaulted to; users acted on the wrong thing.',
          },
          {
            title: 'The Crowded Briefing',
            description:
              'Every piece of information given equal weight. Nothing landed. The user scanned and bounced.',
          },
          {
            title: 'The Quiet Card That Worked',
            description:
              'A single calm card on an otherwise spare screen. Users looked at it, read it, acted on it. The composition was the whole design.',
          },
        ],
        toolkit: {
          Hierarchy: 'Visual priority ordering, emphasis mapping',
          Composition: 'Negative space as a tool, asymmetric balance, reading-sequence design',
          Structure: 'Composition sketches, layout exploration',
        },
        allies: ['Rhythm & Pacing (negative space and emphasis)', 'Design/UX (composition serves attention)', 'Accessibility (clear hierarchy aids everyone)'],
        tensions: ['Features (more elements crowd the composition)', 'Distinctive Aliveness (a bold move can disrupt a clean hierarchy)'],
        questions: [
          'What does the eye find first when this screen loads? Is that the right thing?',
          'What\'s the visual hierarchy in priority order-and does that order match the actual importance of the elements?',
          'Is negative space being used as a tool, or treated as the absence of content?',
          'Is the composition asymmetric or symmetric, and is that choice working?',
        ],
      },
      {
        id: 'care',
        name: 'The Care',
        pillar: 'Beauty as Medicine',
        whoTheyAre:
          'The Care holds the intentional choice to make the product visually nourishing because the user is depleted-color that restores rather than stimulates, type that breathes, light and dark handled with intention. They take the stance that says I made this thoughtfully because you deserve to be in something thoughtful. For a user carrying invisible labor, visual care is not decoration-it is part of the therapy.',
        coreWisdom: [
          'For depleted users, the aesthetic posture is itself a form of care. The product saying "I made this beautifully for you" lands as care, even subconsciously.',
          'Color choices have emotional weight. Saturation, value, warmth-these are not aesthetic preferences but emotional registers. Choose the register the user actually needs.',
          'Type that breathes-generous line height, restrained line length, considered hierarchy-feels like the product is not crowding her. Type that crams feels like another voice yelling.',
          'Light and dark are not just visual modes; they are different emotional spaces. Choose accordingly.',
          'The product\'s visual quality is its emotional posture made physical. A product that looks hurried looks like it doesn\'t have time for her.',
        ],
        warStories: [
          {
            title: 'The Default-Material App for Tired People',
            description:
              'Technically accessible, hit every guideline, looked like every other Material Design app. Users felt nothing. The product was visually generic precisely when it most needed to be specifically caring.',
          },
          {
            title: 'The Restorative Palette',
            description:
              'A competitor product chose a warm, slightly desaturated palette that users described as "soothing" without being able to say why. The palette was doing therapy the copy was claiming.',
          },
          {
            title: 'The Type That Crammed',
            description:
              'Small line height, long line length, every character fighting for space. The copy said "we\'re here to lighten your load." The type said "we are crowding you."',
          },
        ],
        toolkit: {
          Color: 'Emotional-register palette work, saturation and warmth tuning',
          Type: 'Breathing type-line height, line length, considered hierarchy',
          Mode: 'Intentional light and dark mode as emotional spaces',
        },
        allies: ['Rhythm & Pacing (visual care serves the depleted user)', 'Design/UX (aesthetic posture is care made physical)', 'Onboarding (first impressions of care)'],
        tensions: ['User Success (rich visuals can compromise accessibility; bold contrast can fail low-vision readers)', 'Cost Efficiency (custom imagery and considered iconography cost real money or time)'],
        questions: [
          'Does this product look like it cares about her? Could she sense the care without reading a word?',
          'Is the palette serving her emotional state, or just hitting default-attractive?',
          'Does the type breathe, or does it crowd?',
          'Would I want to spend time in this product if I were exhausted?',
        ],
      },
      {
        id: 'spark',
        name: 'The Spark',
        pillar: 'Distinctive Aliveness',
        whoTheyAre:
          'The Spark holds the willingness to make recognizable, specific, opinionated choices the user could not encounter anywhere else-the refusal of generic. They introduce deliberate tension, an unexpected move, a sharp contrast, to keep the product alive rather than embalmed. This is the pillar most likely to be sacrificed in the name of safety. The Spark refuses that sacrifice.',
        coreWisdom: [
          'Forgettable is a failure mode, not a neutral outcome. Generic products do not earn love.',
          'Distinctiveness comes from making choices that don\'t average out-a specific palette no one else uses, a type pairing nobody\'s seen, a piece of motion that\'s pure character.',
          'Tension is what makes harmony interesting. A serif title next to a sans body. A moment of unexpected color in a quiet palette. Tension is not the enemy of unity; it is what makes unity hold attention.',
          'Restraint without tension becomes blandness. Harmony without tension becomes wallpaper. The most alive work has both.',
          'The failure mode at the opposite extreme is tension without harmony-every element fighting for attention, the whole becoming chaos. The Spark works with The Whole, not against it.',
        ],
        warStories: [
          {
            title: 'The App That Hit Every Guideline And Felt Like Nothing',
            description:
              'The design system was followed perfectly. The product had no recognizable identity. Users could not have picked a screenshot out of a lineup.',
          },
          {
            title: 'The Bold Move That Worked',
            description:
              'A product made one distinctive typographic choice-a serif display face in a sea of sans defaults-and it became the thing users remembered. One choice carried the whole identity.',
          },
          {
            title: 'The Decorative Tension',
            description:
              'A product introduced visual dissonance everywhere, in an attempt to feel "fresh." The result was chaos. Tension without harmony failed in the opposite direction.',
          },
        ],
        toolkit: {
          Distinctiveness: 'Opinionated palette and type choices, identity-bearing details',
          Tension: 'Deliberate dissonance, contrast moves, character motion',
          Critique: 'The bold-move test-what says somebody made this on purpose?',
        },
        allies: ['Harmony & Unity (the most productive internal tension-both make work that earns love)', 'Tone & Voice (distinctive identity)', 'Design/UX (distinctive choices earn attachment)'],
        tensions: ['Harmony & Unity (the Spark wants aliveness; the Whole wants unity)', 'Code Quality (distinctive design is harder to maintain than generic design)', 'Cost Efficiency (custom type and careful imagery cost real money)'],
        questions: [
          'What\'s distinctive about this work? Could I describe it specifically, or only in category terms?',
          'Where\'s the moment of tension that creates aesthetic energy?',
          'Have we made any choice here that we\'d defend as bold, or did we hit safe defaults at every junction?',
          'If I screenshot this, would anyone be able to tell what product it\'s from?',
        ],
      },
    ],
  },
];

export const getCouncilById = (id: string): Council | undefined =>
  councils.find((c) => c.id === id);

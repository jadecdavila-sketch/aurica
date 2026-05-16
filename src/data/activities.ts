import type { Activity } from '@/types';

export const activities: Activity[] = [
  // Discovery
  {
    id: 'discovery-1',
    stageId: 'discovery',
    name: 'Identify target users',
    collaborationMode: 'human-leads',
    humanExpertise: 'Product Manager with market sense and strategic judgment',
    description: 'Define who your product is for by identifying specific user segments, their characteristics, and why they would benefit from your solution.',
    keyConsiderations: [
      'Start with hypotheses about who might need your solution',
      'Consider both direct users and decision-makers',
      'Think about early adopters vs. mainstream users',
      'Identify what makes segments distinct and addressable'
    ],
    commonPitfalls: [
      'Defining target users too broadly ("everyone who uses the internet")',
      'Focusing only on demographics instead of behaviors and needs',
      'Ignoring the difference between users and buyers'
    ],
    aiCanHelp: [
      'Research market sizing and demographic data',
      'Analyze competitor user bases',
      'Generate user segment hypotheses to validate'
    ],
    humanMustOwn: [
      'Strategic decisions about which segments to prioritize',
      'Understanding organizational constraints and go-to-market fit',
      'Final judgment on segment viability'
    ]
  },
  {
    id: 'discovery-2',
    stageId: 'discovery',
    name: 'User interviews',
    collaborationMode: 'human-only',
    humanExpertise: 'UX Researcher with empathy and listening skills',
    description: 'Conduct one-on-one conversations with potential users to deeply understand their problems, workflows, and unmet needs.',
    keyConsiderations: [
      'Prepare an interview guide but stay flexible',
      'Ask about past behavior, not hypothetical futures',
      'Listen for emotions and pain points behind the words',
      'Aim for 5-8 interviews per user segment minimum'
    ],
    commonPitfalls: [
      'Asking leading questions that confirm your assumptions',
      'Pitching your solution instead of listening',
      'Only talking to people who are easy to reach',
      'Not recording or taking detailed notes'
    ],
    aiCanHelp: [
      'Help draft interview guides and questions',
      'Transcribe recorded interviews',
      'Assist with initial analysis of transcripts'
    ],
    humanMustOwn: [
      'Conducting the actual interviews—humans connect with humans',
      'Reading body language and emotional cues',
      'Building rapport that encourages honest sharing',
      'Real-time follow-up questions based on context'
    ]
  },
  {
    id: 'discovery-3',
    stageId: 'discovery',
    name: 'Observation / contextual inquiry',
    collaborationMode: 'human-only',
    humanExpertise: 'UX Researcher who can watch without interfering',
    description: 'Watch users in their natural environment to understand their real workflows, workarounds, and pain points that they might not mention in interviews.',
    keyConsiderations: [
      'Be a "fly on the wall"—observe without influencing',
      'Note the environment, tools, and interruptions',
      'Look for workarounds and "shadow IT" solutions',
      'Pay attention to what users do vs. what they say'
    ],
    commonPitfalls: [
      'Changing behavior by being too intrusive',
      'Only observing for a short time (missing the full picture)',
      'Not documenting the physical and social context'
    ],
    aiCanHelp: [
      'Help structure observation templates',
      'Analyze photos or screenshots of environments',
      'Compile observations into patterns'
    ],
    humanMustOwn: [
      'Being physically present in the user\'s environment',
      'Picking up on subtle social dynamics',
      'Making real-time decisions about what to focus on'
    ]
  },
  {
    id: 'discovery-4',
    stageId: 'discovery',
    name: 'Competitive landscape analysis',
    collaborationMode: 'ai-leads',
    humanExpertise: 'No special expertise needed',
    description: 'Map out existing solutions, direct competitors, and alternative approaches users currently take to solve their problems.',
    keyConsiderations: [
      'Include direct competitors and indirect alternatives',
      'Analyze pricing, positioning, and feature sets',
      'Understand competitor strengths and weaknesses',
      'Identify gaps and underserved needs'
    ],
    commonPitfalls: [
      'Only looking at obvious direct competitors',
      'Missing the "do nothing" or manual alternatives',
      'Focusing only on features instead of user outcomes'
    ],
    aiCanHelp: [
      'Comprehensive competitor research and feature comparison',
      'Analyze competitor reviews and user sentiment',
      'Track competitor changes over time',
      'Generate competitive positioning frameworks'
    ],
    humanMustOwn: [
      'Strategic interpretation of findings',
      'Decisions about competitive positioning',
      'Validating AI research with firsthand experience'
    ]
  },
  {
    id: 'discovery-5',
    stageId: 'discovery',
    name: 'Problem definition',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Product Manager with strategic judgment',
    description: 'Synthesize research into a clear, specific problem statement that guides solution development.',
    keyConsiderations: [
      'Be specific about who has the problem and in what context',
      'Articulate why this problem is worth solving',
      'Quantify the impact where possible',
      'Ensure the problem is validated, not assumed'
    ],
    commonPitfalls: [
      'Defining the problem as the absence of your solution',
      'Being too broad ("users want a better experience")',
      'Skipping validation and assuming the problem exists'
    ],
    aiCanHelp: [
      'Synthesize research findings into problem themes',
      'Generate alternative problem framings',
      'Challenge assumptions and identify gaps'
    ],
    humanMustOwn: [
      'Final judgment on which problem to pursue',
      'Alignment with business strategy and capabilities',
      'Stakeholder buy-in on the problem definition'
    ]
  },
  {
    id: 'discovery-6',
    stageId: 'discovery',
    name: 'Assumption mapping',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Product Manager or UX Researcher',
    description: 'Identify and prioritize the assumptions underlying your product hypothesis to determine what needs validation.',
    keyConsiderations: [
      'List assumptions about users, problems, and solutions',
      'Rank by risk (impact if wrong) and uncertainty',
      'Identify which assumptions are most critical to test first',
      'Include business and technical assumptions'
    ],
    commonPitfalls: [
      'Only mapping obvious assumptions',
      'Not prioritizing—trying to test everything at once',
      'Confusing facts with assumptions'
    ],
    aiCanHelp: [
      'Generate comprehensive assumption lists',
      'Suggest prioritization frameworks',
      'Identify implicit assumptions you might miss'
    ],
    humanMustOwn: [
      'Final prioritization based on business context',
      'Determining acceptable risk levels',
      'Stakeholder alignment on what to validate'
    ]
  },
  {
    id: 'discovery-7',
    stageId: 'discovery',
    name: 'Research synthesis',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'UX Researcher with pattern recognition',
    description: 'Combine findings from multiple research activities into actionable insights and recommendations.',
    keyConsiderations: [
      'Look for patterns across data sources',
      'Distinguish between common themes and outliers',
      'Create shareable artifacts (personas, journey maps)',
      'Connect insights to actionable next steps'
    ],
    commonPitfalls: [
      'Cherry-picking data that supports existing beliefs',
      'Over-indexing on a single interview or data point',
      'Creating synthesis documents that no one reads'
    ],
    aiCanHelp: [
      'Identify patterns across large amounts of data',
      'Generate initial synthesis drafts',
      'Create visualizations of findings'
    ],
    humanMustOwn: [
      'Interpreting nuanced and contradictory findings',
      'Making judgment calls about significance',
      'Storytelling that drives organizational action'
    ]
  },

  // Validation
  {
    id: 'validation-1',
    stageId: 'validation',
    name: 'Design validation experiments',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Product Manager with experimental mindset',
    description: 'Create structured experiments to test your riskiest assumptions before investing heavily in building.',
    keyConsiderations: [
      'Start with your highest-risk assumptions',
      'Define clear success criteria before running experiments',
      'Choose the fastest, cheapest test that gives useful data',
      'Plan for both positive and negative results'
    ],
    commonPitfalls: [
      'Testing things you already know',
      'Designing experiments that can\'t fail (confirmation bias)',
      'Making tests so complex they\'re inconclusive'
    ],
    aiCanHelp: [
      'Suggest experiment designs and methodologies',
      'Help define metrics and success criteria',
      'Generate test variations and scenarios'
    ],
    humanMustOwn: [
      'Selecting which assumptions to test',
      'Determining acceptable risk thresholds',
      'Committing to act on results'
    ]
  },
  {
    id: 'validation-2',
    stageId: 'validation',
    name: 'Build landing page / MVP',
    collaborationMode: 'ai-leads',
    humanExpertise: 'Basic web skills',
    description: 'Create a minimal presence or prototype to test demand and gather early interest signals.',
    keyConsiderations: [
      'Focus on communicating the value proposition clearly',
      'Include a clear call-to-action to measure intent',
      'Keep it simple—this is about learning, not launching',
      'Set up tracking to capture meaningful signals'
    ],
    commonPitfalls: [
      'Over-building the MVP (it\'s not minimal anymore)',
      'Focusing on aesthetics over clarity',
      'Not driving enough traffic to get meaningful data'
    ],
    aiCanHelp: [
      'Generate landing page copy and layouts',
      'Build functional prototypes quickly',
      'Set up analytics and tracking',
      'Create multiple variations for testing'
    ],
    humanMustOwn: [
      'Core value proposition messaging',
      'Traffic and promotion strategy',
      'Interpreting signals from user behavior'
    ]
  },
  {
    id: 'validation-3',
    stageId: 'validation',
    name: 'Prototype creation',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Designer with prototyping skills',
    description: 'Build interactive mockups that let users experience core workflows before full development.',
    keyConsiderations: [
      'Fidelity should match what you\'re testing',
      'Focus on critical user paths, not edge cases',
      'Make it realistic enough to get genuine reactions',
      'Plan how you\'ll use the prototype for testing'
    ],
    commonPitfalls: [
      'Making prototypes too polished (users think it\'s real)',
      'Making prototypes too rough (users can\'t engage)',
      'Prototyping features instead of user problems'
    ],
    aiCanHelp: [
      'Generate UI component variations',
      'Create realistic dummy content',
      'Suggest interaction patterns'
    ],
    humanMustOwn: [
      'Core design decisions and user experience flow',
      'Visual design language and brand alignment',
      'Determining appropriate prototype fidelity'
    ]
  },
  {
    id: 'validation-4',
    stageId: 'validation',
    name: 'Run experiments',
    collaborationMode: 'human-leads',
    humanExpertise: 'Product Manager or Growth person',
    description: 'Execute validation tests and gather data on user behavior and interest.',
    keyConsiderations: [
      'Follow your pre-defined experiment protocol',
      'Resist the urge to change things mid-experiment',
      'Gather both quantitative and qualitative data',
      'Document everything for later analysis'
    ],
    commonPitfalls: [
      'Stopping too early (not enough data)',
      'Running too long (wasting time on clear results)',
      'Changing the experiment when you see early results'
    ],
    aiCanHelp: [
      'Monitor experiment metrics in real-time',
      'Flag when statistical significance is reached',
      'Help track and organize experiment data'
    ],
    humanMustOwn: [
      'Managing experiment execution',
      'Qualitative interpretation of user behavior',
      'Decisions about when to stop or pivot'
    ]
  },
  {
    id: 'validation-5',
    stageId: 'validation',
    name: 'Analyze results',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Product Manager with analytical skills',
    description: 'Interpret experiment data to determine what you learned and what it means for your product.',
    keyConsiderations: [
      'Compare results against your pre-defined success criteria',
      'Look for unexpected findings and patterns',
      'Consider both what users did and what they said',
      'Be honest about ambiguous or negative results'
    ],
    commonPitfalls: [
      'Rationalizing results to fit your desired outcome',
      'Ignoring qualitative feedback',
      'Drawing conclusions from insufficient data'
    ],
    aiCanHelp: [
      'Statistical analysis and visualization',
      'Pattern identification across data sets',
      'Generate hypotheses from data'
    ],
    humanMustOwn: [
      'Interpretation within business context',
      'Judgment calls on ambiguous data',
      'Recommendations for next steps'
    ]
  },
  {
    id: 'validation-6',
    stageId: 'validation',
    name: 'Pivot/persevere decision',
    collaborationMode: 'human-leads',
    humanExpertise: 'Founders/leadership with strategic judgment',
    description: 'Decide whether to continue with your current approach, make significant changes, or stop.',
    keyConsiderations: [
      'Base decisions on evidence, not hope',
      'Consider sunk costs but don\'t let them drive decisions',
      'Evaluate pivot options against original thesis',
      'Communicate decisions clearly to stakeholders'
    ],
    commonPitfalls: [
      'Continuing because of emotional investment',
      'Pivoting too quickly without sufficient data',
      'Making half-measures instead of real pivots'
    ],
    aiCanHelp: [
      'Summarize evidence for and against continuing',
      'Model different pivot scenarios',
      'Research alternative directions'
    ],
    humanMustOwn: [
      'The actual decision—this is leadership',
      'Alignment with vision and values',
      'Team and stakeholder communication'
    ]
  },

  // Design
  {
    id: 'design-1',
    stageId: 'design',
    name: 'Information architecture',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'UX Designer with structural thinking',
    description: 'Define how information is organized, labeled, and structured within your product.',
    keyConsiderations: [
      'Start with user mental models, not org structure',
      'Keep navigation shallow and intuitive',
      'Use familiar labels and categories',
      'Plan for growth and evolution'
    ],
    commonPitfalls: [
      'Mirroring internal organization in navigation',
      'Creating too many levels of hierarchy',
      'Using jargon users don\'t understand'
    ],
    aiCanHelp: [
      'Generate IA options and variations',
      'Analyze competitor navigation patterns',
      'Suggest standard conventions'
    ],
    humanMustOwn: [
      'User research to understand mental models',
      'Testing IA with card sorting exercises',
      'Final structural decisions'
    ]
  },
  {
    id: 'design-2',
    stageId: 'design',
    name: 'User flow design',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'UX Designer',
    description: 'Map out the paths users take to accomplish key tasks in your product.',
    keyConsiderations: [
      'Start with the most critical user tasks',
      'Minimize steps and decisions for common paths',
      'Consider error states and edge cases',
      'Design for both first-time and returning users'
    ],
    commonPitfalls: [
      'Only designing the happy path',
      'Making flows too complex with too many options',
      'Not considering mobile vs. desktop differences'
    ],
    aiCanHelp: [
      'Generate flow variations',
      'Identify missing edge cases',
      'Suggest best practices from similar products'
    ],
    humanMustOwn: [
      'Understanding user goals and context',
      'Prioritizing which flows matter most',
      'Testing flows with real users'
    ]
  },
  {
    id: 'design-3',
    stageId: 'design',
    name: 'Wireframing',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'UX Designer',
    description: 'Create low-fidelity layouts that define content and functionality without visual styling.',
    keyConsiderations: [
      'Focus on layout, hierarchy, and content priority',
      'Keep fidelity low to encourage feedback',
      'Annotate to explain interactive behavior',
      'Test with users before moving to high fidelity'
    ],
    commonPitfalls: [
      'Adding too much visual detail too early',
      'Not exploring multiple layout options',
      'Skipping wireframes and jumping to visuals'
    ],
    aiCanHelp: [
      'Generate wireframe variations quickly',
      'Suggest layout patterns for common needs',
      'Create placeholder content'
    ],
    humanMustOwn: [
      'Content strategy and prioritization',
      'Validating layouts with users',
      'Resolving stakeholder feedback'
    ]
  },
  {
    id: 'design-4',
    stageId: 'design',
    name: 'Visual design',
    collaborationMode: 'human-leads',
    humanExpertise: 'Visual Designer with taste and brand sense',
    description: 'Apply visual styling, color, typography, and imagery to create the product\'s look and feel.',
    keyConsiderations: [
      'Align with brand guidelines and personality',
      'Ensure sufficient color contrast for accessibility',
      'Create visual hierarchy that guides attention',
      'Design for the emotional response you want'
    ],
    commonPitfalls: [
      'Prioritizing aesthetics over usability',
      'Inconsistent visual language across screens',
      'Ignoring accessibility requirements'
    ],
    aiCanHelp: [
      'Generate color palette variations',
      'Suggest typography pairings',
      'Create placeholder imagery'
    ],
    humanMustOwn: [
      'Brand expression and emotional tone',
      'Taste and aesthetic judgment',
      'Ensuring design serves the user experience'
    ]
  },
  {
    id: 'design-5',
    stageId: 'design',
    name: 'Interaction design',
    collaborationMode: 'human-leads',
    humanExpertise: 'UX Designer with motion/interaction skills',
    description: 'Define how users interact with interface elements and how the system responds.',
    keyConsiderations: [
      'Make interactions feel responsive and natural',
      'Use motion purposefully, not decoratively',
      'Provide clear feedback for user actions',
      'Consider reduced motion preferences'
    ],
    commonPitfalls: [
      'Adding animation that slows users down',
      'Inconsistent interaction patterns',
      'Not providing feedback for loading or processing'
    ],
    aiCanHelp: [
      'Suggest interaction patterns',
      'Document micro-interactions',
      'Generate motion specifications'
    ],
    humanMustOwn: [
      'Feel and timing of interactions',
      'Ensuring interactions enhance usability',
      'Testing with real users'
    ]
  },
  {
    id: 'design-6',
    stageId: 'design',
    name: 'Design system creation',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Designer with systems thinking',
    description: 'Build a library of reusable components, patterns, and guidelines for consistent design.',
    keyConsiderations: [
      'Start with the most frequently used components',
      'Document when and how to use each pattern',
      'Plan for variants and edge cases',
      'Keep the system maintainable and evolvable'
    ],
    commonPitfalls: [
      'Over-engineering before you know what you need',
      'Not documenting usage guidelines',
      'Creating components that are too rigid'
    ],
    aiCanHelp: [
      'Generate component variations',
      'Write documentation and usage guidelines',
      'Identify patterns from existing designs'
    ],
    humanMustOwn: [
      'Core design decisions and principles',
      'Governance and contribution process',
      'Adoption strategy with the team'
    ]
  },
  {
    id: 'design-7',
    stageId: 'design',
    name: 'Prototype testing',
    collaborationMode: 'human-only',
    humanExpertise: 'UX Researcher facilitating, users participating',
    description: 'Test designs with real users to validate that solutions meet their needs.',
    keyConsiderations: [
      'Test with representative users, not just colleagues',
      'Give tasks, not tours—let users try things',
      'Capture both success/failure and user sentiment',
      'Test early and often, not just at the end'
    ],
    commonPitfalls: [
      'Only testing with internal stakeholders',
      'Leading users to the "right" answer',
      'Testing too late to make meaningful changes'
    ],
    aiCanHelp: [
      'Help write test scripts and tasks',
      'Transcribe and analyze sessions',
      'Compile findings across sessions'
    ],
    humanMustOwn: [
      'Running the actual test sessions',
      'Building rapport with participants',
      'Real-time interpretation and follow-up'
    ]
  },
  {
    id: 'design-8',
    stageId: 'design',
    name: 'Accessibility review',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Designer with accessibility knowledge',
    description: 'Ensure designs meet accessibility standards and can be used by people with disabilities.',
    keyConsiderations: [
      'Check color contrast ratios (WCAG AA minimum)',
      'Ensure proper heading structure and landmarks',
      'Provide text alternatives for images',
      'Design for keyboard and screen reader users'
    ],
    commonPitfalls: [
      'Treating accessibility as an afterthought',
      'Only checking automated tool results',
      'Forgetting about cognitive accessibility'
    ],
    aiCanHelp: [
      'Analyze designs for common accessibility issues',
      'Generate alt text suggestions',
      'Check color contrast automatically'
    ],
    humanMustOwn: [
      'Understanding diverse user needs',
      'Manual testing with assistive technologies',
      'Balancing accessibility with design goals'
    ]
  },

  // Architecture
  {
    id: 'architecture-1',
    stageId: 'architecture',
    name: 'Technology selection',
    collaborationMode: 'human-leads',
    humanExpertise: 'Senior Engineer with breadth of experience',
    description: 'Choose the programming languages, frameworks, and tools that will form your technical foundation.',
    keyConsiderations: [
      'Consider team expertise and learning curve',
      'Evaluate long-term maintenance and hiring',
      'Balance innovation with proven stability',
      'Factor in ecosystem and community support'
    ],
    commonPitfalls: [
      'Choosing technology because it\'s trendy',
      'Not considering team capabilities',
      'Over-engineering for hypothetical scale'
    ],
    aiCanHelp: [
      'Research technology options and trade-offs',
      'Compare frameworks and tools',
      'Analyze community activity and trends'
    ],
    humanMustOwn: [
      'Alignment with team skills and growth',
      'Long-term strategic technology direction',
      'Stakeholder buy-in on technical choices'
    ]
  },
  {
    id: 'architecture-2',
    stageId: 'architecture',
    name: 'System design',
    collaborationMode: 'human-leads',
    humanExpertise: 'Senior Engineer or Architect',
    description: 'Define the high-level structure of your system including components, boundaries, and interactions.',
    keyConsiderations: [
      'Start with the simplest architecture that could work',
      'Define clear boundaries and interfaces',
      'Plan for observability and debugging',
      'Consider failure modes and recovery'
    ],
    commonPitfalls: [
      'Premature optimization for scale you don\'t have',
      'Distributed systems before you need them',
      'Not planning for operational needs'
    ],
    aiCanHelp: [
      'Generate architecture diagrams',
      'Suggest patterns for common problems',
      'Review designs for potential issues'
    ],
    humanMustOwn: [
      'Trade-off decisions based on business needs',
      'Understanding non-functional requirements',
      'Long-term maintainability planning'
    ]
  },
  {
    id: 'architecture-3',
    stageId: 'architecture',
    name: 'Database design',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineer with data modeling skills',
    description: 'Design your data model, choose database technologies, and plan data access patterns.',
    keyConsiderations: [
      'Model for your access patterns, not just storage',
      'Consider consistency requirements carefully',
      'Plan for migrations and schema evolution',
      'Think about data privacy and compliance'
    ],
    commonPitfalls: [
      'Choosing databases based on hype',
      'Not considering query patterns upfront',
      'Ignoring data migration needs'
    ],
    aiCanHelp: [
      'Generate schema designs from requirements',
      'Suggest indexing strategies',
      'Review designs for common issues'
    ],
    humanMustOwn: [
      'Understanding business requirements',
      'Consistency and integrity requirements',
      'Data privacy and compliance decisions'
    ]
  },
  {
    id: 'architecture-4',
    stageId: 'architecture',
    name: 'API design',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineer with API design experience',
    description: 'Design the interfaces between your systems, including internal APIs and external integrations.',
    keyConsiderations: [
      'Design for consumers, not implementation convenience',
      'Keep APIs consistent and predictable',
      'Plan for versioning and backward compatibility',
      'Document thoroughly with examples'
    ],
    commonPitfalls: [
      'Exposing internal implementation details',
      'Inconsistent naming and patterns',
      'Not planning for evolution'
    ],
    aiCanHelp: [
      'Generate API specifications (OpenAPI)',
      'Suggest RESTful patterns and conventions',
      'Write API documentation'
    ],
    humanMustOwn: [
      'Understanding consumer needs',
      'Decisions about what to expose',
      'Versioning and compatibility strategy'
    ]
  },
  {
    id: 'architecture-5',
    stageId: 'architecture',
    name: 'Security architecture',
    collaborationMode: 'human-leads',
    humanExpertise: 'Security Engineer or security-minded Senior Engineer',
    description: 'Design security controls including authentication, authorization, and data protection.',
    keyConsiderations: [
      'Apply defense in depth—multiple layers of protection',
      'Follow the principle of least privilege',
      'Plan for security monitoring and incident response',
      'Consider compliance requirements early'
    ],
    commonPitfalls: [
      'Adding security as an afterthought',
      'Rolling your own crypto or auth',
      'Not considering the human attack surface'
    ],
    aiCanHelp: [
      'Research security patterns and best practices',
      'Review designs for common vulnerabilities',
      'Generate security documentation'
    ],
    humanMustOwn: [
      'Threat modeling and risk assessment',
      'Security architecture decisions',
      'Compliance and regulatory requirements'
    ]
  },
  {
    id: 'architecture-6',
    stageId: 'architecture',
    name: 'Infrastructure planning',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'DevOps/Platform Engineer',
    description: 'Plan your hosting, networking, and infrastructure components.',
    keyConsiderations: [
      'Choose managed services where appropriate',
      'Plan for environments (dev, staging, prod)',
      'Consider cost implications of choices',
      'Design for reproducibility with infrastructure as code'
    ],
    commonPitfalls: [
      'Over-provisioning for traffic you don\'t have',
      'Not planning for disaster recovery',
      'Manual infrastructure setup (not reproducible)'
    ],
    aiCanHelp: [
      'Generate infrastructure as code',
      'Compare cloud service options',
      'Estimate costs for different architectures'
    ],
    humanMustOwn: [
      'Cost and budget decisions',
      'Vendor and provider selection',
      'Operational responsibilities'
    ]
  },
  {
    id: 'architecture-7',
    stageId: 'architecture',
    name: 'CI/CD setup',
    collaborationMode: 'ai-leads',
    humanExpertise: 'DevOps knowledge helpful',
    description: 'Set up automated pipelines for building, testing, and deploying your application.',
    keyConsiderations: [
      'Automate everything from the start',
      'Keep pipelines fast to encourage frequent deployment',
      'Include quality gates (tests, linting, security)',
      'Plan for rollbacks and recovery'
    ],
    commonPitfalls: [
      'Delaying automation "until later"',
      'Creating pipelines that are too slow',
      'Not including security scanning'
    ],
    aiCanHelp: [
      'Generate CI/CD configurations',
      'Set up testing and linting pipelines',
      'Configure deployment automation'
    ],
    humanMustOwn: [
      'Deployment strategy and approvals',
      'Environment and secrets management',
      'Integration with team workflows'
    ]
  },
  {
    id: 'architecture-8',
    stageId: 'architecture',
    name: 'Development environment setup',
    collaborationMode: 'ai-leads',
    humanExpertise: 'Basic DevOps knowledge',
    description: 'Create consistent, reproducible development environments for the team.',
    keyConsiderations: [
      'Minimize setup time for new team members',
      'Keep dev environments close to production',
      'Document all setup steps',
      'Consider containerization for consistency'
    ],
    commonPitfalls: [
      '"Works on my machine" problems',
      'Complex manual setup processes',
      'Dev environment drift from production'
    ],
    aiCanHelp: [
      'Generate Docker configurations',
      'Write setup scripts and documentation',
      'Troubleshoot environment issues'
    ],
    humanMustOwn: [
      'Deciding what to standardize vs. allow flexibility',
      'Supporting team with environment issues',
      'Maintaining environment documentation'
    ]
  },

  // Build
  {
    id: 'build-1',
    stageId: 'build',
    name: 'Feature implementation',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineers at appropriate level',
    description: 'Turn designs and requirements into working code.',
    keyConsiderations: [
      'Understand the "why" before writing code',
      'Break work into small, testable increments',
      'Follow established patterns and conventions',
      'Keep code readable and maintainable'
    ],
    commonPitfalls: [
      'Starting to code before understanding requirements',
      'Building too much before getting feedback',
      'Ignoring edge cases until they become bugs'
    ],
    aiCanHelp: [
      'Generate boilerplate and scaffolding',
      'Suggest implementation approaches',
      'Help debug and troubleshoot'
    ],
    humanMustOwn: [
      'Understanding business requirements',
      'Architecture and design decisions',
      'Code quality and maintainability judgment'
    ]
  },
  {
    id: 'build-2',
    stageId: 'build',
    name: 'Frontend development',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Frontend Engineer',
    description: 'Build the user-facing interface and interactions.',
    keyConsiderations: [
      'Follow the design system and patterns',
      'Build for accessibility from the start',
      'Consider performance (bundle size, rendering)',
      'Handle loading, error, and empty states'
    ],
    commonPitfalls: [
      'Deviating from designs without discussion',
      'Ignoring browser/device compatibility',
      'Not handling edge cases in the UI'
    ],
    aiCanHelp: [
      'Generate component code from designs',
      'Write CSS and styling',
      'Implement responsive layouts'
    ],
    humanMustOwn: [
      'Design interpretation and polish',
      'User experience quality',
      'Cross-browser testing'
    ]
  },
  {
    id: 'build-3',
    stageId: 'build',
    name: 'Backend development',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Backend Engineer',
    description: 'Build server-side logic, data processing, and integrations.',
    keyConsiderations: [
      'Follow API contracts precisely',
      'Handle errors gracefully',
      'Consider performance and scalability',
      'Log appropriately for debugging'
    ],
    commonPitfalls: [
      'Not handling edge cases and errors',
      'Creating security vulnerabilities',
      'Over-complicating for hypothetical needs'
    ],
    aiCanHelp: [
      'Generate API endpoints and handlers',
      'Write data access code',
      'Implement business logic'
    ],
    humanMustOwn: [
      'Security considerations',
      'Data integrity and consistency',
      'Performance optimization'
    ]
  },
  {
    id: 'build-4',
    stageId: 'build',
    name: 'API implementation',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Backend Engineer',
    description: 'Implement API endpoints according to the designed specifications.',
    keyConsiderations: [
      'Match the API specification exactly',
      'Implement proper validation and error handling',
      'Include rate limiting and security controls',
      'Write clear error messages'
    ],
    commonPitfalls: [
      'Deviating from the spec without updating it',
      'Inconsistent error formats',
      'Missing input validation'
    ],
    aiCanHelp: [
      'Generate API code from OpenAPI specs',
      'Write validation logic',
      'Implement error handling patterns'
    ],
    humanMustOwn: [
      'Ensuring spec compliance',
      'Security review',
      'Integration testing'
    ]
  },
  {
    id: 'build-5',
    stageId: 'build',
    name: 'Database implementation',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Backend Engineer with DB skills',
    description: 'Implement data models, migrations, and queries.',
    keyConsiderations: [
      'Write migrations that can roll back safely',
      'Optimize queries for actual access patterns',
      'Consider data integrity constraints',
      'Plan for zero-downtime migrations'
    ],
    commonPitfalls: [
      'Writing migrations that can\'t be reversed',
      'N+1 query problems',
      'Missing indexes for common queries'
    ],
    aiCanHelp: [
      'Generate migration scripts',
      'Write efficient queries',
      'Suggest indexes and optimizations'
    ],
    humanMustOwn: [
      'Data model decisions',
      'Migration safety review',
      'Performance testing with real data volumes'
    ]
  },
  {
    id: 'build-6',
    stageId: 'build',
    name: 'Writing tests',
    collaborationMode: 'ai-leads',
    humanExpertise: 'Engineers with testing knowledge',
    description: 'Write automated tests to ensure code quality and prevent regressions.',
    keyConsiderations: [
      'Test behavior, not implementation',
      'Cover the critical paths thoroughly',
      'Balance test coverage with maintenance cost',
      'Keep tests fast to encourage running them'
    ],
    commonPitfalls: [
      'Writing tests that are too coupled to implementation',
      'Not testing edge cases',
      'Tests that are flaky or slow'
    ],
    aiCanHelp: [
      'Generate test cases and scenarios',
      'Write unit and integration tests',
      'Identify untested code paths'
    ],
    humanMustOwn: [
      'Test strategy and coverage decisions',
      'Testing critical business logic',
      'Maintaining test quality over time'
    ]
  },
  {
    id: 'build-7',
    stageId: 'build',
    name: 'Code review',
    collaborationMode: 'human-leads',
    humanExpertise: 'Engineers reviewing each other',
    description: 'Review code changes to ensure quality, catch issues, and share knowledge.',
    keyConsiderations: [
      'Review for correctness, readability, and maintainability',
      'Be constructive and specific in feedback',
      'Look for security and performance issues',
      'Use reviews as learning opportunities'
    ],
    commonPitfalls: [
      'Rubber-stamping without reading',
      'Only focusing on style nitpicks',
      'Being too harsh or personal in feedback'
    ],
    aiCanHelp: [
      'Initial code analysis and suggestions',
      'Check for common issues and patterns',
      'Suggest improvements'
    ],
    humanMustOwn: [
      'Understanding context and intent',
      'Design and architecture feedback',
      'Mentoring and knowledge sharing'
    ]
  },
  {
    id: 'build-8',
    stageId: 'build',
    name: 'Accessibility implementation',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Frontend Engineer with a11y knowledge',
    description: 'Implement accessibility features including keyboard navigation, screen reader support, and ARIA.',
    keyConsiderations: [
      'Use semantic HTML as the foundation',
      'Implement proper focus management',
      'Add ARIA only when native HTML isn\'t sufficient',
      'Test with actual assistive technologies'
    ],
    commonPitfalls: [
      'Over-using ARIA instead of semantic HTML',
      'Breaking keyboard navigation',
      'Not testing with screen readers'
    ],
    aiCanHelp: [
      'Generate accessible component code',
      'Suggest ARIA patterns',
      'Identify accessibility issues'
    ],
    humanMustOwn: [
      'Testing with assistive technologies',
      'Understanding diverse user needs',
      'Ensuring accessible user experience'
    ]
  },
  {
    id: 'build-9',
    stageId: 'build',
    name: 'Documentation (technical)',
    collaborationMode: 'ai-leads',
    humanExpertise: 'Engineers documenting their work',
    description: 'Write documentation for code, APIs, and systems to help current and future developers.',
    keyConsiderations: [
      'Document the "why" more than the "what"',
      'Keep documentation close to the code',
      'Include examples and common use cases',
      'Make documentation discoverable'
    ],
    commonPitfalls: [
      'Documentation that gets out of date',
      'Too much or too little detail',
      'Documentation nobody can find'
    ],
    aiCanHelp: [
      'Generate documentation from code',
      'Write README and API docs',
      'Create code examples'
    ],
    humanMustOwn: [
      'Deciding what needs documentation',
      'Reviewing for accuracy',
      'Keeping docs updated with changes'
    ]
  },

  // Harden
  {
    id: 'harden-1',
    stageId: 'harden',
    name: 'Load testing',
    collaborationMode: 'ai-leads',
    humanExpertise: 'Engineer with performance testing knowledge',
    description: 'Test system performance under expected and peak load conditions.',
    keyConsiderations: [
      'Test realistic scenarios, not just simple requests',
      'Establish baseline metrics before optimization',
      'Test beyond expected load to find limits',
      'Monitor all system components during tests'
    ],
    commonPitfalls: [
      'Testing unrealistic scenarios',
      'Only testing the API, not the full system',
      'Not establishing baselines first'
    ],
    aiCanHelp: [
      'Generate load testing scripts',
      'Analyze performance test results',
      'Identify bottlenecks from metrics'
    ],
    humanMustOwn: [
      'Defining realistic load scenarios',
      'Interpreting results in context',
      'Deciding which optimizations to prioritize'
    ]
  },
  {
    id: 'harden-2',
    stageId: 'harden',
    name: 'Security testing',
    collaborationMode: 'human-leads',
    humanExpertise: 'Security Engineer or security-focused Engineer',
    description: 'Test for security vulnerabilities including injection, authentication, and authorization flaws.',
    keyConsiderations: [
      'Cover OWASP Top 10 at minimum',
      'Test authentication and authorization thoroughly',
      'Check for data exposure and leakage',
      'Review dependencies for known vulnerabilities'
    ],
    commonPitfalls: [
      'Only running automated scanners',
      'Not testing authorization edge cases',
      'Ignoring third-party dependency risks'
    ],
    aiCanHelp: [
      'Run automated security scans',
      'Identify common vulnerability patterns',
      'Generate security test cases'
    ],
    humanMustOwn: [
      'Understanding your specific threat model',
      'Testing business logic vulnerabilities',
      'Prioritizing and remediating findings'
    ]
  },
  {
    id: 'harden-3',
    stageId: 'harden',
    name: 'Penetration testing',
    collaborationMode: 'human-only',
    humanExpertise: 'Security specialist (often external)',
    description: 'Have security experts attempt to breach your system to find vulnerabilities.',
    keyConsiderations: [
      'Define scope and rules of engagement clearly',
      'Use qualified, experienced testers',
      'Plan for remediation time after testing',
      'Consider both external and internal threat models'
    ],
    commonPitfalls: [
      'Treating pentest as a checkbox exercise',
      'Not scoping appropriately',
      'Not fixing found vulnerabilities'
    ],
    aiCanHelp: [
      'Help prepare for pentest',
      'Assist with remediation of findings',
      'Document vulnerabilities and fixes'
    ],
    humanMustOwn: [
      'The actual penetration testing',
      'Creative attack thinking',
      'Prioritizing remediation'
    ]
  },
  {
    id: 'harden-4',
    stageId: 'harden',
    name: 'Accessibility audit',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Accessibility specialist or trained Engineer',
    description: 'Comprehensive review of accessibility compliance and usability.',
    keyConsiderations: [
      'Test with multiple assistive technologies',
      'Include users with disabilities when possible',
      'Check against WCAG guidelines systematically',
      'Test across devices and browsers'
    ],
    commonPitfalls: [
      'Only using automated tools',
      'Not testing with real users',
      'Treating accessibility as a one-time audit'
    ],
    aiCanHelp: [
      'Run automated accessibility scans',
      'Generate compliance reports',
      'Suggest fixes for common issues'
    ],
    humanMustOwn: [
      'Manual testing with assistive tech',
      'Understanding user experience impact',
      'Prioritizing fixes'
    ]
  },
  {
    id: 'harden-5',
    stageId: 'harden',
    name: 'Error handling review',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Senior Engineer',
    description: 'Review and improve how the system handles errors, failures, and edge cases.',
    keyConsiderations: [
      'Ensure errors don\'t expose sensitive information',
      'Provide useful error messages for users',
      'Log errors appropriately for debugging',
      'Handle failures gracefully'
    ],
    commonPitfalls: [
      'Generic error messages that don\'t help',
      'Exposing stack traces to users',
      'Silent failures that are hard to debug'
    ],
    aiCanHelp: [
      'Identify error handling gaps',
      'Suggest error handling patterns',
      'Review error messages for clarity'
    ],
    humanMustOwn: [
      'Deciding what users need to know vs. what to hide',
      'Ensuring errors are actionable',
      'Graceful degradation strategy'
    ]
  },
  {
    id: 'harden-6',
    stageId: 'harden',
    name: 'Monitoring setup',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'DevOps/Platform Engineer',
    description: 'Set up observability tools to track system health, performance, and behavior.',
    keyConsiderations: [
      'Monitor the metrics that matter for your SLOs',
      'Set up dashboards for different audiences',
      'Include application-level metrics, not just infrastructure',
      'Plan for log aggregation and searching'
    ],
    commonPitfalls: [
      'Monitoring everything (alert fatigue)',
      'Only monitoring infrastructure, not application',
      'Not setting up before launch'
    ],
    aiCanHelp: [
      'Generate monitoring configurations',
      'Suggest metrics to track',
      'Create dashboard templates'
    ],
    humanMustOwn: [
      'Deciding what metrics matter',
      'Setting SLOs and thresholds',
      'Reviewing and acting on monitoring data'
    ]
  },
  {
    id: 'harden-7',
    stageId: 'harden',
    name: 'Alerting configuration',
    collaborationMode: 'human-leads',
    humanExpertise: 'DevOps/Platform Engineer',
    description: 'Configure alerts that notify the team of issues requiring attention.',
    keyConsiderations: [
      'Alert on symptoms, not just causes',
      'Set thresholds based on actual impact',
      'Include runbook links in alerts',
      'Review and tune alerts regularly'
    ],
    commonPitfalls: [
      'Too many alerts (alert fatigue)',
      'Alerts that nobody acts on',
      'Missing critical alerts'
    ],
    aiCanHelp: [
      'Suggest alerting rules',
      'Generate alert configurations',
      'Analyze alert patterns'
    ],
    humanMustOwn: [
      'Deciding what needs immediate attention',
      'On-call and response procedures',
      'Alert tuning and review'
    ]
  },
  {
    id: 'harden-8',
    stageId: 'harden',
    name: 'Runbook creation',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'DevOps/Engineers who built the system',
    description: 'Document procedures for responding to common operational issues.',
    keyConsiderations: [
      'Write for someone who doesn\'t know the system',
      'Include step-by-step debugging procedures',
      'Link runbooks from relevant alerts',
      'Test runbooks actually work'
    ],
    commonPitfalls: [
      'Runbooks that assume too much knowledge',
      'Procedures that don\'t work in practice',
      'Runbooks that get out of date'
    ],
    aiCanHelp: [
      'Generate runbook templates',
      'Write troubleshooting procedures',
      'Keep runbooks consistent'
    ],
    humanMustOwn: [
      'Knowledge of system internals',
      'Testing procedures work',
      'Keeping runbooks updated'
    ]
  },
  {
    id: 'harden-9',
    stageId: 'harden',
    name: 'Disaster recovery testing',
    collaborationMode: 'human-leads',
    humanExpertise: 'DevOps/Platform Engineer',
    description: 'Test backup, restore, and failover procedures to ensure they work.',
    keyConsiderations: [
      'Test full recovery, not just backups',
      'Include database and data recovery',
      'Document recovery time and data loss',
      'Practice regularly, not just once'
    ],
    commonPitfalls: [
      'Having backups but never testing restore',
      'Not documenting the recovery process',
      'Only testing in non-realistic conditions'
    ],
    aiCanHelp: [
      'Generate DR test plans',
      'Document recovery procedures',
      'Automate backup verification'
    ],
    humanMustOwn: [
      'Running actual DR tests',
      'Decision-making during incidents',
      'Improving based on test results'
    ]
  },

  // Launch
  {
    id: 'launch-1',
    stageId: 'launch',
    name: 'Launch planning',
    collaborationMode: 'human-leads',
    humanExpertise: 'Product Manager coordinating cross-functionally',
    description: 'Create a comprehensive plan for launching the product including timing, stakeholders, and contingencies.',
    keyConsiderations: [
      'Coordinate across all teams (eng, support, marketing)',
      'Define go/no-go criteria clearly',
      'Plan for different launch scenarios',
      'Have rollback plans ready'
    ],
    commonPitfalls: [
      'Launching without support team preparation',
      'No clear criteria for success',
      'Not having rollback procedures'
    ],
    aiCanHelp: [
      'Generate launch checklists',
      'Create timeline templates',
      'Draft communication plans'
    ],
    humanMustOwn: [
      'Cross-functional coordination',
      'Go/no-go decisions',
      'Stakeholder communication'
    ]
  },
  {
    id: 'launch-2',
    stageId: 'launch',
    name: 'Staged rollout',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineer managing the deployment',
    description: 'Gradually release to increasing numbers of users while monitoring for issues.',
    keyConsiderations: [
      'Start with a small, observable group',
      'Define criteria for expanding rollout',
      'Monitor closely at each stage',
      'Have quick rollback capability'
    ],
    commonPitfalls: [
      'Expanding too quickly',
      'Not monitoring during rollout',
      'Not having rollback automation'
    ],
    aiCanHelp: [
      'Configure feature flags',
      'Monitor rollout metrics',
      'Automate rollout expansion'
    ],
    humanMustOwn: [
      'Decisions to expand or pause rollout',
      'Interpreting anomalies in metrics',
      'Communication about rollout status'
    ]
  },
  {
    id: 'launch-3',
    stageId: 'launch',
    name: 'Monitoring during launch',
    collaborationMode: 'human-leads',
    humanExpertise: 'Engineers and DevOps watching systems',
    description: 'Actively watch system behavior during launch to catch and respond to issues quickly.',
    keyConsiderations: [
      'Have dedicated people watching dashboards',
      'Know what "normal" looks like',
      'Have quick communication channels',
      'Be ready to escalate or roll back'
    ],
    commonPitfalls: [
      'Not having people actively watching',
      'Alert fatigue during critical time',
      'Slow response to issues'
    ],
    aiCanHelp: [
      'Anomaly detection in metrics',
      'Correlating events across systems',
      'Surfacing relevant logs'
    ],
    humanMustOwn: [
      'Judgment about what\'s concerning',
      'Decision to act or wait',
      'Communication and coordination'
    ]
  },
  {
    id: 'launch-4',
    stageId: 'launch',
    name: 'User support triage',
    collaborationMode: 'human-only',
    humanExpertise: 'Support team or team members handling queries',
    description: 'Handle incoming user questions, issues, and feedback during and after launch.',
    keyConsiderations: [
      'Prepare common responses before launch',
      'Have escalation paths for different issue types',
      'Track patterns in support requests',
      'Close the loop with users'
    ],
    commonPitfalls: [
      'Support team not prepared for new features',
      'Not tracking patterns in issues',
      'Slow response times frustrating users'
    ],
    aiCanHelp: [
      'Draft response templates',
      'Categorize and route tickets',
      'Identify patterns in issues'
    ],
    humanMustOwn: [
      'Direct communication with users',
      'Empathetic responses',
      'Escalation decisions'
    ]
  },
  {
    id: 'launch-5',
    stageId: 'launch',
    name: 'Quick fixes and hotfixes',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineers responding rapidly',
    description: 'Rapidly fix critical issues discovered during launch.',
    keyConsiderations: [
      'Have streamlined process for emergency deploys',
      'Balance speed with appropriate review',
      'Communicate fixes to stakeholders',
      'Track technical debt from quick fixes'
    ],
    commonPitfalls: [
      'Skipping tests in rush to fix',
      'Creating new bugs with hasty fixes',
      'Not documenting what was done'
    ],
    aiCanHelp: [
      'Quickly identify root cause',
      'Generate fix code',
      'Test fix thoroughly'
    ],
    humanMustOwn: [
      'Deciding what needs immediate fix',
      'Reviewing fixes under pressure',
      'Communication about outages'
    ]
  },
  {
    id: 'launch-6',
    stageId: 'launch',
    name: 'Communication (internal/external)',
    collaborationMode: 'human-leads',
    humanExpertise: 'Product Manager, Marketing, Support',
    description: 'Keep all stakeholders informed about launch status, issues, and successes.',
    keyConsiderations: [
      'Have prepared communications ready',
      'Be transparent about issues',
      'Celebrate successes appropriately',
      'Keep different audiences informed appropriately'
    ],
    commonPitfalls: [
      'Under-communicating during issues',
      'Inconsistent messaging across channels',
      'Not acknowledging problems'
    ],
    aiCanHelp: [
      'Draft status updates',
      'Prepare FAQ responses',
      'Generate social media content'
    ],
    humanMustOwn: [
      'Tone and sensitivity of communications',
      'Decisions about what to share when',
      'Direct conversations with key stakeholders'
    ]
  },
  {
    id: 'launch-7',
    stageId: 'launch',
    name: 'Launch retrospective',
    collaborationMode: 'human-only',
    humanExpertise: 'Full team reflecting on what went well/poorly',
    description: 'Review the launch process to learn and improve for next time.',
    keyConsiderations: [
      'Hold retro soon while memories are fresh',
      'Create safe space for honest feedback',
      'Focus on process, not blame',
      'Capture action items and follow through'
    ],
    commonPitfalls: [
      'Skipping retro because "it went fine"',
      'Blaming individuals instead of improving process',
      'Not acting on retrospective insights'
    ],
    aiCanHelp: [
      'Compile launch metrics and timeline',
      'Organize and categorize feedback',
      'Track action items'
    ],
    humanMustOwn: [
      'Facilitating honest discussion',
      'Creating psychological safety',
      'Committing to improvements'
    ]
  },

  // Learn
  {
    id: 'learn-1',
    stageId: 'learn',
    name: 'Analytics review',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Product Manager or Analyst',
    description: 'Analyze product usage data to understand user behavior and product performance.',
    keyConsiderations: [
      'Focus on metrics that matter for your goals',
      'Look for trends, not just snapshots',
      'Segment data to find meaningful patterns',
      'Connect metrics to user outcomes'
    ],
    commonPitfalls: [
      'Drowning in data without insights',
      'Focusing on vanity metrics',
      'Not connecting data to decisions'
    ],
    aiCanHelp: [
      'Generate reports and visualizations',
      'Identify patterns and anomalies',
      'Correlate different data sources'
    ],
    humanMustOwn: [
      'Deciding what questions to ask',
      'Interpreting data in context',
      'Translating insights to actions'
    ]
  },
  {
    id: 'learn-2',
    stageId: 'learn',
    name: 'User interview rounds',
    collaborationMode: 'human-only',
    humanExpertise: 'UX Researcher or Product Manager',
    description: 'Continue talking to users to understand their experience with the live product.',
    keyConsiderations: [
      'Talk to different user segments',
      'Ask about real experiences, not hypotheticals',
      'Understand the "why" behind behavior',
      'Look for unmet needs and opportunities'
    ],
    commonPitfalls: [
      'Only talking to happy users',
      'Stopping user research after launch',
      'Not acting on what you learn'
    ],
    aiCanHelp: [
      'Transcribe and analyze interviews',
      'Identify patterns across users',
      'Generate interview guides'
    ],
    humanMustOwn: [
      'Conducting conversations',
      'Reading between the lines',
      'Building ongoing relationships'
    ]
  },
  {
    id: 'learn-3',
    stageId: 'learn',
    name: 'Support ticket analysis',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Support lead or Product Manager',
    description: 'Analyze patterns in support requests to identify common issues and improvement opportunities.',
    keyConsiderations: [
      'Categorize tickets by type and severity',
      'Track trends over time',
      'Identify root causes, not just symptoms',
      'Connect support data to product decisions'
    ],
    commonPitfalls: [
      'Only counting tickets, not understanding them',
      'Treating support as separate from product',
      'Not closing the loop on fixes'
    ],
    aiCanHelp: [
      'Categorize and cluster tickets',
      'Identify emerging issues',
      'Generate trend reports'
    ],
    humanMustOwn: [
      'Understanding user frustration',
      'Prioritizing what to fix',
      'Connecting support to product roadmap'
    ]
  },
  {
    id: 'learn-4',
    stageId: 'learn',
    name: 'Funnel analysis',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Product Manager or Analyst',
    description: 'Analyze how users move through key flows and where they drop off.',
    keyConsiderations: [
      'Define meaningful conversion events',
      'Segment funnels by user type',
      'Look at both rate and volume',
      'Connect drop-offs to user experience issues'
    ],
    commonPitfalls: [
      'Looking at overall funnel only, not segments',
      'Not investigating why people drop off',
      'Focusing on micro-conversions that don\'t matter'
    ],
    aiCanHelp: [
      'Build funnel visualizations',
      'Segment and compare funnels',
      'Identify significant drop-offs'
    ],
    humanMustOwn: [
      'Defining what matters in the funnel',
      'Understanding drop-off reasons',
      'Prioritizing improvements'
    ]
  },
  {
    id: 'learn-5',
    stageId: 'learn',
    name: 'Cohort analysis',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Analyst or Data Scientist',
    description: 'Compare behavior of user groups over time to understand retention and engagement trends.',
    keyConsiderations: [
      'Define cohorts meaningfully (sign-up date, feature use, etc.)',
      'Track the right engagement metrics',
      'Look for patterns in successful cohorts',
      'Use insights to improve onboarding and retention'
    ],
    commonPitfalls: [
      'Cohorts that are too small to be meaningful',
      'Not tracking cohorts long enough',
      'Analyzing without acting on insights'
    ],
    aiCanHelp: [
      'Build cohort tables and charts',
      'Identify cohort patterns',
      'Compare cohorts statistically'
    ],
    humanMustOwn: [
      'Defining meaningful cohorts',
      'Interpreting patterns',
      'Designing interventions'
    ]
  },
  {
    id: 'learn-6',
    stageId: 'learn',
    name: 'Incident retrospectives',
    collaborationMode: 'human-only',
    humanExpertise: 'Engineering team',
    description: 'Review incidents and outages to understand what happened and prevent recurrence.',
    keyConsiderations: [
      'Conduct blameless post-mortems',
      'Focus on systems, not individuals',
      'Identify multiple contributing factors',
      'Commit to specific action items'
    ],
    commonPitfalls: [
      'Blame culture that discourages honesty',
      'Stopping at the first cause',
      'Not following through on improvements'
    ],
    aiCanHelp: [
      'Compile incident timeline',
      'Document technical details',
      'Track action items'
    ],
    humanMustOwn: [
      'Creating psychological safety',
      'Deep analysis of contributing factors',
      'Cultural improvement over time'
    ]
  },
  {
    id: 'learn-7',
    stageId: 'learn',
    name: 'Synthesis and prioritization',
    collaborationMode: 'human-leads',
    humanExpertise: 'Product Manager with strategic judgment',
    description: 'Combine learnings from all sources to inform product direction and roadmap.',
    keyConsiderations: [
      'Weight different data sources appropriately',
      'Connect insights to strategic goals',
      'Balance quick wins with big bets',
      'Get stakeholder alignment on priorities'
    ],
    commonPitfalls: [
      'Chasing every piece of feedback',
      'Ignoring data that contradicts beliefs',
      'Prioritizing loudest voices, not biggest impact'
    ],
    aiCanHelp: [
      'Compile insights from multiple sources',
      'Suggest prioritization frameworks',
      'Model impact of different choices'
    ],
    humanMustOwn: [
      'Strategic judgment on priorities',
      'Stakeholder alignment',
      'Communicating "why" of decisions'
    ]
  },

  // Iterate
  {
    id: 'iterate-1',
    stageId: 'iterate',
    name: 'Prioritization',
    collaborationMode: 'human-leads',
    humanExpertise: 'Product Manager with strategic judgment',
    description: 'Decide what to work on next based on impact, effort, and strategic alignment.',
    keyConsiderations: [
      'Use consistent framework for evaluation',
      'Consider both short and long-term value',
      'Balance different stakeholder needs',
      'Make decisions visible and defensible'
    ],
    commonPitfalls: [
      'Prioritizing based on who asks loudest',
      'Not revisiting priorities as you learn',
      'Trying to do everything at once'
    ],
    aiCanHelp: [
      'Apply prioritization frameworks',
      'Model impact estimates',
      'Compare options systematically'
    ],
    humanMustOwn: [
      'Strategic judgment on what matters',
      'Stakeholder negotiation',
      'Communicating and defending decisions'
    ]
  },
  {
    id: 'iterate-2',
    stageId: 'iterate',
    name: 'Design iteration',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Designer refining based on learning',
    description: 'Improve designs based on user feedback and data from the live product.',
    keyConsiderations: [
      'Focus on high-impact improvements',
      'Test changes before full rollout',
      'Maintain design consistency',
      'Learn from what you ship'
    ],
    commonPitfalls: [
      'Redesigning based on opinion, not data',
      'Making changes too quickly to learn',
      'Breaking existing user expectations'
    ],
    aiCanHelp: [
      'Generate design variations',
      'Analyze user session recordings',
      'Suggest improvements based on patterns'
    ],
    humanMustOwn: [
      'Design judgment and taste',
      'Understanding user context',
      'Maintaining design coherence'
    ]
  },
  {
    id: 'iterate-3',
    stageId: 'iterate',
    name: 'Feature development',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineers',
    description: 'Build new features and improvements based on prioritized backlog.',
    keyConsiderations: [
      'Understand the "why" behind features',
      'Build incrementally with feedback loops',
      'Consider maintainability and technical debt',
      'Instrument for learning'
    ],
    commonPitfalls: [
      'Building without clear success criteria',
      'Over-scoping features',
      'Not instrumenting to learn'
    ],
    aiCanHelp: [
      'Generate implementation code',
      'Suggest technical approaches',
      'Write tests'
    ],
    humanMustOwn: [
      'Architecture and design decisions',
      'Code quality judgment',
      'Balancing speed and quality'
    ]
  },
  {
    id: 'iterate-4',
    stageId: 'iterate',
    name: 'Technical debt paydown',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineers',
    description: 'Address accumulated technical debt to maintain development velocity.',
    keyConsiderations: [
      'Prioritize debt that impacts current work',
      'Make debt visible and trackable',
      'Balance debt paydown with features',
      'Fix root causes, not symptoms'
    ],
    commonPitfalls: [
      'Ignoring debt until it\'s critical',
      'Gold-plating instead of practical fixes',
      'Not communicating debt impact to stakeholders'
    ],
    aiCanHelp: [
      'Identify code smells and issues',
      'Generate refactoring code',
      'Write tests for legacy code'
    ],
    humanMustOwn: [
      'Prioritizing what debt to address',
      'Judging acceptable vs. problematic debt',
      'Advocating for debt paydown time'
    ]
  },
  {
    id: 'iterate-5',
    stageId: 'iterate',
    name: 'Refactoring',
    collaborationMode: 'ai-leads',
    humanExpertise: 'Engineers',
    description: 'Improve code structure without changing external behavior.',
    keyConsiderations: [
      'Have tests before refactoring',
      'Make small, incremental changes',
      'Keep behavior identical',
      'Commit frequently'
    ],
    commonPitfalls: [
      'Refactoring without tests',
      'Changing behavior during refactor',
      'Big-bang refactors'
    ],
    aiCanHelp: [
      'Suggest refactoring patterns',
      'Execute mechanical refactors',
      'Ensure tests pass after changes'
    ],
    humanMustOwn: [
      'Deciding what to refactor',
      'Reviewing AI-generated changes',
      'Ensuring tests are adequate'
    ]
  },
  {
    id: 'iterate-6',
    stageId: 'iterate',
    name: 'A/B testing setup',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineer with experimentation knowledge',
    description: 'Set up infrastructure and experiments to test changes with real users.',
    keyConsiderations: [
      'Define clear hypotheses and success metrics',
      'Ensure tests are properly randomized',
      'Calculate required sample size',
      'Plan how you\'ll act on results'
    ],
    commonPitfalls: [
      'Running tests without clear hypotheses',
      'Stopping tests too early',
      'Not accounting for novelty effects'
    ],
    aiCanHelp: [
      'Set up experimentation infrastructure',
      'Calculate statistical significance',
      'Generate experiment configurations'
    ],
    humanMustOwn: [
      'Hypothesis formation',
      'Interpreting results',
      'Deciding to ship or iterate'
    ]
  },
  {
    id: 'iterate-7',
    stageId: 'iterate',
    name: 'Documentation updates',
    collaborationMode: 'ai-leads',
    humanExpertise: 'Engineers and Product',
    description: 'Keep documentation current with product and code changes.',
    keyConsiderations: [
      'Update docs as part of the feature work',
      'Focus on what users need to know',
      'Keep docs discoverable',
      'Include changelog for breaking changes'
    ],
    commonPitfalls: [
      'Documentation that drifts from reality',
      'Forgetting to update when things change',
      'Too much documentation to maintain'
    ],
    aiCanHelp: [
      'Generate doc updates from code changes',
      'Write user-facing documentation',
      'Identify outdated documentation'
    ],
    humanMustOwn: [
      'Reviewing docs for accuracy',
      'Deciding what needs documentation',
      'User communication for changes'
    ]
  },

  // Scale
  {
    id: 'scale-1',
    stageId: 'scale',
    name: 'Compliance work (SOC 2, etc.)',
    collaborationMode: 'human-leads',
    humanExpertise: 'Security/Compliance specialist',
    description: 'Achieve and maintain security and compliance certifications.',
    keyConsiderations: [
      'Understand requirements early',
      'Build compliance into processes, not as add-on',
      'Maintain evidence continuously',
      'Plan for ongoing audits'
    ],
    commonPitfalls: [
      'Treating compliance as a one-time project',
      'Not understanding what auditors need',
      'Last-minute scrambles before audits'
    ],
    aiCanHelp: [
      'Draft policies and procedures',
      'Track compliance evidence',
      'Generate audit documentation'
    ],
    humanMustOwn: [
      'Understanding compliance requirements',
      'Implementing actual controls',
      'Auditor relationships'
    ]
  },
  {
    id: 'scale-2',
    stageId: 'scale',
    name: 'Internationalization',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineers, with i18n expertise',
    description: 'Prepare product for multiple languages and regions.',
    keyConsiderations: [
      'Externalize all user-facing strings',
      'Handle dates, numbers, currencies properly',
      'Consider RTL languages if relevant',
      'Plan for text expansion in different languages'
    ],
    commonPitfalls: [
      'Hardcoded strings throughout codebase',
      'Not handling plural forms correctly',
      'Forgetting about non-text content (images, etc.)'
    ],
    aiCanHelp: [
      'Identify hardcoded strings',
      'Generate i18n infrastructure',
      'Extract strings to translation files'
    ],
    humanMustOwn: [
      'i18n architecture decisions',
      'Cultural considerations',
      'Testing with different locales'
    ]
  },
  {
    id: 'scale-3',
    stageId: 'scale',
    name: 'Localization',
    collaborationMode: 'human-leads',
    humanExpertise: 'Professional translators, local market experts',
    description: 'Translate and adapt product for specific markets.',
    keyConsiderations: [
      'Use professional translators, not just speakers',
      'Adapt content for cultural context',
      'Include in-country review',
      'Plan for ongoing translation updates'
    ],
    commonPitfalls: [
      'Machine translation without review',
      'Ignoring cultural differences',
      'Not budgeting for ongoing translation'
    ],
    aiCanHelp: [
      'Initial draft translations',
      'Identify untranslated content',
      'Manage translation workflows'
    ],
    humanMustOwn: [
      'Quality translation review',
      'Cultural appropriateness',
      'Local market understanding'
    ]
  },
  {
    id: 'scale-4',
    stageId: 'scale',
    name: 'Performance optimization for scale',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Senior Engineers',
    description: 'Optimize systems to handle growth in users and data.',
    keyConsiderations: [
      'Profile before optimizing',
      'Focus on the actual bottlenecks',
      'Consider caching, indexing, and architecture changes',
      'Test at scale before deploying'
    ],
    commonPitfalls: [
      'Premature optimization',
      'Optimizing the wrong things',
      'Breaking things while optimizing'
    ],
    aiCanHelp: [
      'Analyze performance profiles',
      'Suggest optimization strategies',
      'Generate optimized code'
    ],
    humanMustOwn: [
      'Identifying real bottlenecks',
      'Trade-off decisions',
      'Testing at scale'
    ]
  },
  {
    id: 'scale-5',
    stageId: 'scale',
    name: 'Cost optimization',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'DevOps/Finance',
    description: 'Reduce infrastructure and operational costs while maintaining quality.',
    keyConsiderations: [
      'Understand cost drivers first',
      'Right-size resources for actual usage',
      'Consider reserved capacity for stable workloads',
      'Balance cost with reliability'
    ],
    commonPitfalls: [
      'Cost cutting that impacts reliability',
      'Not monitoring costs continuously',
      'Over-provisioning "just in case"'
    ],
    aiCanHelp: [
      'Analyze cost breakdowns',
      'Identify optimization opportunities',
      'Model different configurations'
    ],
    humanMustOwn: [
      'Trade-off decisions',
      'Business context for spending',
      'Vendor negotiations'
    ]
  },
  {
    id: 'scale-6',
    stageId: 'scale',
    name: 'Enterprise features',
    collaborationMode: 'human-ai-collaborate',
    humanExpertise: 'Engineers with enterprise experience',
    description: 'Build features required for enterprise customers (SSO, audit logs, admin controls).',
    keyConsiderations: [
      'Understand enterprise buyer requirements',
      'Build security and compliance into features',
      'Plan for multi-tenancy at scale',
      'Support enterprise integration patterns'
    ],
    commonPitfalls: [
      'Building features without enterprise input',
      'Underestimating complexity',
      'Not considering procurement processes'
    ],
    aiCanHelp: [
      'Research enterprise requirements',
      'Generate enterprise feature code',
      'Write compliance documentation'
    ],
    humanMustOwn: [
      'Understanding enterprise needs',
      'Security architecture decisions',
      'Enterprise customer relationships'
    ]
  },
  {
    id: 'scale-7',
    stageId: 'scale',
    name: 'Advanced security measures',
    collaborationMode: 'human-leads',
    humanExpertise: 'Security Engineer',
    description: 'Implement advanced security controls for enterprise and high-security environments.',
    keyConsiderations: [
      'Threat model for your specific environment',
      'Layer defenses appropriately',
      'Plan for security monitoring and response',
      'Stay current with evolving threats'
    ],
    commonPitfalls: [
      'Security theater without real protection',
      'One-time implementation without maintenance',
      'Not considering usability impact'
    ],
    aiCanHelp: [
      'Research security best practices',
      'Generate security configurations',
      'Analyze security logs'
    ],
    humanMustOwn: [
      'Threat modeling for your context',
      'Security architecture decisions',
      'Incident response planning'
    ]
  },
  {
    id: 'scale-8',
    stageId: 'scale',
    name: 'Team scaling',
    collaborationMode: 'human-only',
    humanExpertise: 'Leadership, HR',
    description: 'Grow the team to support increased product scope and complexity.',
    keyConsiderations: [
      'Hire ahead of need, not in crisis',
      'Preserve culture while growing',
      'Develop team structures and processes',
      'Invest in onboarding and enablement'
    ],
    commonPitfalls: [
      'Growing too fast and diluting culture',
      'Not investing in onboarding',
      'Hiring for today, not tomorrow'
    ],
    aiCanHelp: [
      'Draft job descriptions',
      'Generate onboarding materials',
      'Analyze team structure options'
    ],
    humanMustOwn: [
      'Hiring decisions',
      'Culture and values',
      'Team development'
    ]
  },
];

export const getActivitiesByStage = (stageId: string): Activity[] =>
  activities.filter((a) => a.stageId === stageId);

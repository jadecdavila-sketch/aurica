export type CollaborationMode =
  | 'ai-leads'
  | 'human-ai-collaborate'
  | 'human-leads'
  | 'human-only';

export interface WarStory {
  title: string;
  description: string;
}

export interface CouncilMember {
  id: string;
  name: string;
  pillar: string;
  whoTheyAre: string;
  coreWisdom: string[];
  warStories: WarStory[];
  toolkit: Record<string, string>;
  allies: string[];
  tensions: string[];
  questions: string[];
}

export interface Council {
  id: string;
  name: string;
  archetypeName: string;
  pillars: string[];
  humanRoles: string[];
  personality: string;
  caresAbout: string;
  loudestAt: string[];
  askThem: string;
  signatureQuote: string;
  councilSpeaks: string;
  members: CouncilMember[];
}

export interface Stage {
  id: string;
  number: number;
  name: string;
  subtitle: string;
  description: string;
  primaryCouncils: string[];
  secondaryCouncils: string[];
  whatDoneLooksLike: string;
}

export interface Activity {
  id: string;
  stageId: string;
  name: string;
  collaborationMode: CollaborationMode;
  humanExpertise: string;
  description?: string;
  keyConsiderations?: string[];
  commonPitfalls?: string[];
  aiCanHelp?: string[];
  humanMustOwn?: string[];
}

export interface StageCouncilContent {
  stageId: string;
  councilId: string;
  quote: string;
  isPrimary: boolean;
}

export interface ContinuousActivity {
  id: string;
  name: string;
  startsAt: string;
  tendedBy: string;
  description: string;
  quote: string;
}

export const collaborationModeLabels: Record<CollaborationMode, string> = {
  'ai-leads': 'AI Leads, Human Reviews',
  'human-ai-collaborate': 'Human + AI Collaborate',
  'human-leads': 'Human Leads, AI Assists',
  'human-only': 'Human Only',
};

/** A member of the studio - the human form of the council. */
export interface TeamMember {
  id: string;
  name: string;
  /** Title, e.g. "Co-Founder" or "Open role". */
  role: string;
  /** Short craft line paired to the studio name, e.g. "the sketch". */
  craft: string;
  /** One-line essence, shown under the name in the drawer. */
  tagline: string;
  /** Paragraphs for the detail drawer. */
  bio: string[];
  /** What this maker holds - or, for the open seat, who is sought. */
  focus: string[];
  /** An optional personal coda - a glimpse of life outside the studio. */
  outsideStudio?: string;
  /** Square portrait in /public/team/. Falls back to a monogram disc. */
  portrait?: string;
  /** True for the unfilled third seat. */
  open?: boolean;
}

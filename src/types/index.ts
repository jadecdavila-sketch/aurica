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

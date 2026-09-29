export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'web' | 'hackathon' | 'tool';
  categoryLabel: string;
  description: string;
  fullOverview: string;
  technicalArchitecture: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  role: string;
  year: string;
  status: string;
  metrics?: { label: string; value: string }[];
}

export type ProjectFilterCategory = 'all' | 'web' | 'hackathon' | 'tool';

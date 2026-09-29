export interface ProjectItem {
  id: string;
  name: string;
  category: 'web' | 'hackathon' | 'tool';
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  year: string;
  status: string;
}

export type ProjectFilterCategory = 'all' | 'web' | 'hackathon' | 'tool';

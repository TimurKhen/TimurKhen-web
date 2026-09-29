export interface HackatonData {
  id: string;
  name: string;
  edition: string;
  subtitle: string;
  organizer: string;
  image: string;
  status: string;
  placementTag: string;
  placementType: 'podium' | 'finalist' | 'special';
  color: string | null;
  icon: string | null;
  year: string;
  track: string;
  role: string;
  description: string;
  solutionSummary: string;
  achievements: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
}

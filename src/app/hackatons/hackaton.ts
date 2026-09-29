export interface HackatonData {
  id: string;
  name: string;
  image: string;
  status: string;
  placementTag: string;
  placementType: 'podium' | 'finalist' | 'special';
  color: string | null;
  icon: string | null;
  year: string;
  description: string;
  solutionSummary: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
}
